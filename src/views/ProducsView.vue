<template>
    <div class="flex align-items-center ">
        <h2 class="text-20-bold text-primary">Ürün Listesi</h2>
        <p class="text-20-bold">Bu yazı 20px ve bold olmalı</p>
        <TableContainer />
    </div>


</template>

<script>
import TableContainer from '@/components/table/TableContainer.vue';


export default {
    components: {
        TableContainer,
    },
    name: 'ProductList',
    data() {
        return {
            products: [

            ],
        };
    },
};
</script>

<style></style>
