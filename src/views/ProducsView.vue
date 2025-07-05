<template>
    <div class="table-wrapper m-x-auto">
        <div>

            <TableContainer>
                <TableHeader>
                    <TableRow>
                        <TableHead class="text-16-bold text-primary">
                            Ürün Listesi
                        </TableHead>
                        <TableHead class="text-16-bold text-primary">Description</TableHead>
                        <TableHead class="text-16-bold text-primary">Category</TableHead>
                        <TableHead class="text-16-bold text-primary">Price</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="product in products" :key="product.id">
                        <TableCell>{{ product.title }}</TableCell>
                        <TableCell>{{ product.description }}</TableCell>
                        <TableCell>{{ product.category }}</TableCell>
                        <TableCell>{{ product.price }}</TableCell>
                    </TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colspan="100%">
                            <PaginationContainer :total="totalItems" :items-per-page="itemsPerPage"
                                :default-page="currentPage" @page-changed="onPageChanged" />
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </TableContainer>
        </div>
    </div>
</template>

<script>
import PaginationContainer from '@/components/pagination/PaginationContainer.vue';
import TableBody from '@/components/table/TableBody.vue';
import TableCell from '@/components/table/TableCell.vue';
import TableContainer from '@/components/table/TableContainer.vue';
import TableFooter from '@/components/table/TableFooter.vue';
import TableHead from '@/components/table/TableHead.vue';
import TableHeader from '@/components/table/TableHeader.vue';
import TableRow from '@/components/table/TableRow.vue';
import { mapActions, mapGetters } from "vuex";

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
    },
    computed: {
        ...mapGetters("product", [
            'products',
            'totalItems',
            'currentPage',
            'itemsPerPage',
            'allProducts'
        ]),


    },
    data() {
        return {

        };
    },
    methods: {
        ...mapActions('product', ['fetchProducts']),

        onPageChanged(page) {

            console.log('page', page)
            this.fetchProducts(page)
        }
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
</style>
