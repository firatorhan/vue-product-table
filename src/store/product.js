import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    loading: true,
    totalItems: 0,
    currentPage: 1,
    itemsPerPage: 5,
    sortOrder: 'asc' // 'desc' de olabilir
  }),

  getters: {
    sortedProducts(state) {
      return [...state.products].sort((a, b) => {
        return state.sortOrder === 'asc' ? a.price - b.price : b.price - a.price
      })
    }
  },

  actions: {
    async fetchProducts(page = 1) {
      this.loading = true
      const limit = this.itemsPerPage
      const skip = (page - 1) * limit

      try {
        const response = await axios.get('https://dummyjson.com/products', {
          params: { limit, skip }
        })

        this.products = response.data.products
        this.totalItems = response.data.total
        this.currentPage = page
      } catch (error) {
        console.error('API error:', error)
        alert('İstek sırasında bir hata oluştu.')
      } finally {
        this.loading = false
      }
    },

    setItemsPerPage(count) {
      this.itemsPerPage = count
    },

    setSortOrder(order) {
      this.sortOrder = order
    },

    setCurrentPage(page) {
      this.currentPage = page
    }
  }
})
