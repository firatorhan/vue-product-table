<template>
    <div class="table-wrapper m-x-auto">
        <TableContainer>
            <TableHeader>
                <TableRow>
                    <TableHead class="text-16-bold text-primary"></TableHead>
                    <TableHead class="text-16-bold text-primary">ID</TableHead>
                    <TableHead class="text-16-bold text-primary">Title</TableHead>
                    <TableHead class="text-16-bold text-primary">Category</TableHead>
                    <TableHead class="text-16-bold text-primary">Availability</TableHead>
                    <TableHead class="text-16-bold text-primary">
                        <div class="price-section-wrapper">
                            Price
                            <div>
                                <BaseButton @click="changeSort('asc')">&#9650; </BaseButton>
                                <BaseButton @click="changeSort('desc')">&#9660; </BaseButton>
                            </div>
                        </div>
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody v-if="loading">
                <TableRow v-for="product in itemsPerPage" :key="product.id">
                    <TableCell>
                        <BaseSkeleton width="80px" height="80px" />
                    </TableCell>
                    <TableCell>
                        <BaseSkeleton />
                    </TableCell>
                    <TableCell>
                        <BaseSkeleton />
                    </TableCell>
                    <TableCell>
                        <BaseSkeleton />
                    </TableCell>
                    <TableCell>
                        <BaseSkeleton />
                    </TableCell>
                    <TableCell>
                        <BaseSkeleton />
                    </TableCell>
                </TableRow>
            </TableBody>
            <TableBody v-else>
                <TableRow v-for="product in products" :key="product.id">
                    <TableCell>
                        <img :src="product.images[0]" :alt="product.description" class="product-img" />
                    </TableCell>
                    <TableCell>{{ product.id }}</TableCell>
                    <TableCell>{{ product.title }}</TableCell>
                    <TableCell>{{ product.category }}</TableCell>
                    <TableCell :class="getStockClass(product.stock)">{{ product.availabilityStatus }}</TableCell>
                    <TableCell>{{ product.price }}</TableCell>
                </TableRow>
            </TableBody>
            <TableFooter v-if="!loading">
                <TableRow>
                    <TableCell colspan="100%">
                        <PaginationContainer :total="totalItems" :items-per-page="itemsPerPage"
                            :default-page="currentPage" @page-changed="onPageChanged" />
                    </TableCell>
                </TableRow>
            </TableFooter>
        </TableContainer>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { onMounted, computed } from 'vue'
import { useProductStore } from '@/store/product'

import BaseButton from '@/components/BaseButton.vue'
import BaseSkeleton from '@/components/BaseSkeleton.vue'
import PaginationContainer from '@/components/pagination/PaginationContainer.vue'
import TableBody from '@/components/table/TableBody.vue'
import TableCell from '@/components/table/TableCell.vue'
import TableContainer from '@/components/table/TableContainer.vue'
import TableFooter from '@/components/table/TableFooter.vue'
import TableHead from '@/components/table/TableHead.vue'
import TableHeader from '@/components/table/TableHeader.vue'
import TableRow from '@/components/table/TableRow.vue'

const store = useProductStore()
const route = useRoute()
const router = useRouter()

const products = computed(() => store.sortedProducts)
const loading = computed(() => store.loading)
const totalItems = computed(() => store.totalItems)
const currentPage = computed(() => store.currentPage)
const itemsPerPage = computed(() => store.itemsPerPage)

function onPageChanged(page) {
    store.fetchProducts(page)
}

function changeSort(order) {
    store.setSortOrder(order)
    const newQuery = { ...route.query, sort: order }
    if (route.query.sort !== order) {
        router.push({ query: newQuery })
    }
}

function getStockClass(stock) {
    if (stock === 0) return 'text-danger'
    else if (stock > 0 && stock <= 5) return 'text-warning'
    else return 'text-success'
}

onMounted(() => {
    const sort = route.query.sort
    const page = Number(route.query.page) || store.currentPage

    if (sort === 'asc' || sort === 'desc') {
        store.setSortOrder(sort)
    }

    store.setCurrentPage(page)
    store.fetchProducts(page)
})
</script>



<style lang="scss" scoped>
.table-wrapper {
    display: flex;
    align-items: center;
    height: 100vh;
    width: 75vw;
}

.price-section-wrapper {
    display: flex;
    align-items: center;
    gap: 2rem;

    div:first-of-type {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }


    button {
        width: 25px;
        height: 25px;
    }

}

.product-img {
    width: 80px;
    height: auto;
    border-radius: 4px;
}
</style>
