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

<script>
import BaseButton from '@/components/BaseButton.vue';
import BaseSkeleton from '@/components/BaseSkeleton.vue';
import PaginationContainer from '@/components/pagination/PaginationContainer.vue';
import TableBody from '@/components/table/TableBody.vue';
import TableCell from '@/components/table/TableCell.vue';
import TableContainer from '@/components/table/TableContainer.vue';
import TableFooter from '@/components/table/TableFooter.vue';
import TableHead from '@/components/table/TableHead.vue';
import TableHeader from '@/components/table/TableHeader.vue';
import TableRow from '@/components/table/TableRow.vue';
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
    name: 'ProductList',
    components: {
        PaginationContainer,
        TableBody,
        TableCell,
        TableContainer,
        TableFooter,
        TableHeader,
        TableHead,
        TableRow,
        BaseSkeleton,
        BaseButton
    },
    computed: {
        ...mapGetters("product", [
            'sortedProducts',
            'totalItems',
            'currentPage',
            'itemsPerPage',
            'loading'
        ]),
        products() {
            return this.sortedProducts;
        }
    },
    methods: {
        ...mapActions('product', ['fetchProducts']),
        ...mapMutations('product', ['SET_SORT_ORDER', 'SET_CURRENT_PAGE']),

        onPageChanged(page) {
            this.fetchProducts(page);
        },
        changeSort(order) {
            this.SET_SORT_ORDER(order);
            const newQuery = { ...this.$route.query, sort: order };

            if (this.$route.query.sort !== order) {
                this.$router.push({ query: newQuery })
            }
        },
        getStockClass(stock) {
            if (stock === 0) {
                return 'text-danger';
            } else if (stock > 0 && stock <= 5) {
                return 'text-warning';
            } else {
                return 'text-success';
            }
        }

    },
    mounted() {
        const sort = this.$route.query.sort;
        const page = Number(this.$route.query.page) || this.currentPage;
        if (sort === 'asc' || sort === 'desc') {
            this.SET_SORT_ORDER(sort);
        }
        this.SET_CURRENT_PAGE(page);
        this.fetchProducts(page);
    }
};
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
