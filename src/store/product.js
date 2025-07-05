import axios from "axios";

const state = {
  products: [],
  totalItems: 10,
  currentPage: 1,
  itemsPerPage: 10,
 
};

const getters = {
  allProducts: (state) => state.dummyjson,
  products: (state) => state.products,
  totalItems: (state) => state.totalItems,
  currentPage: (state) => state.currentPage,
  itemsPerPage: (state) => state.itemsPerPage,
};

const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_TOTAL_ITEMS(state, total) {
    state.totalItems = total;
  },
  SET_CURRENT_PAGE(state, page) {
    state.currentPage = page;
  },
  SET_ITEMS_PER_PAGE(state, count) {
    state.itemsPerPage = count;
  },
};

const actions = {
  fetchProducts({ commit, state }, page = 1) {
    const limit = state.itemsPerPage;
    const skip = (page - 1) * limit;

    return axios
      .get("https://dummyjson.com/products", {
        params: {
          limit,
          skip,
        },
      })
      .then((response) => {
        console.log('ress', response)
        commit("SET_PRODUCTS", response.data.products);
        commit("SET_TOTAL_ITEMS", response.data.total);
        commit("SET_CURRENT_PAGE", page);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
