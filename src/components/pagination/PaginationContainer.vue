<template>
    <div id="pagination-container">

        <PaginationFirst @click="setPage(1)" />
        <PaginationPrev @click="setPage(currentPage - 1)" />
        <PaginationList>
            <PaginationListItem :outlined="currentPage !== page" v-for="page in totalPages" :key="page"
                @click="setPage(page)">{{
                    page }}
            </PaginationListItem>
        </PaginationList>
        <PaginationNext @click="setPage(currentPage + 1)" />
        <PaginationLast @click="setPage(totalPages)" />
    </div>

</template>

<script>
import PaginationFirst from './PaginationFirst.vue';
import PaginationLast from './PaginationLast.vue';
import PaginationList from './PaginationList.vue';
import PaginationListItem from './PaginationListItem.vue';
import PaginationNext from './PaginationNext.vue';
import PaginationPrev from './PaginationPrev.vue';

export default {
    components: {
        PaginationFirst,
        PaginationLast,
        PaginationList,
        PaginationListItem,
        PaginationNext,
        PaginationPrev,
    },
    name: 'PaginationContainer',
    props: {
        itemsPerPage: {
            type: Number,
            required: true,
        },
        total: {
            type: Number,
            required: true,
        },
        defaultPage: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            currentPage: this.defaultPage,
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.total / this.itemsPerPage);
        }
    },
    methods: {
        setPage(page) {
            console.log('page', page)
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
                this.$emit("page-changed", page);

            }
        },


    }
};

</script>

<style lang="scss" scoped>
#pagination-container {
    display: flex;
    gap: 1rem;
}
</style>
