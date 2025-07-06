<template>
    <div id="pagination-container">

        <PaginationFirst @click="setPage(1)" />
        <PaginationPrev @click="setPage(currentPage - 1)" />
        <PaginationList>
            <PaginationEllipsis v-if="visiblePages[0] > 1" @click="setPage(visiblePages[0] - 1)" />
            <PaginationListItem v-for="page in visiblePages" :key="page" :outlined="currentPage !== page"
                @click="setPage(page)">
                {{ page }}
            </PaginationListItem>
            <PaginationEllipsis v-if="visiblePages[visiblePages.length - 1] < totalPages - 1"
                @click="setPage(visiblePages[visiblePages.length - 1] + 1)" />
        </PaginationList>
        <PaginationNext @click="setPage(currentPage + 1)" />
        <PaginationLast @click="setPage(totalPages)" />
    </div>

</template>

<script>
import PaginationEllipsis from './PaginationEllipsis.vue';
import PaginationFirst from './PaginationFirst.vue';
import PaginationLast from './PaginationLast.vue';
import PaginationList from './PaginationList.vue';
import PaginationListItem from './PaginationListItem.vue';
import PaginationNext from './PaginationNext.vue';
import PaginationPrev from './PaginationPrev.vue';

export default {
    components: {
        PaginationFirst,
        PaginationEllipsis,
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
        },


        visiblePages() {
            const maxVisible = 10;
            const total = this.totalPages;
            const current = this.currentPage;
            if (total <= maxVisible) {
                return Array.from({ length: total }, (_, i) => i + 1);
            }

            let start = Math.max(current - Math.floor(maxVisible / 2), 1);
            let end = start + maxVisible - 1;

            if (end > total) {
                end = total;
                start = end - maxVisible + 1;
            }

            return Array.from({ length: end - start + 1 }, (_, i) => start + i);
        }
    },
    methods: {
        setPage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
                this.$emit("page-changed", page);
                const newQuery = { ...this.$route.query, page };
                if (this.$route.query.page !== String(page)) {
                    this.$router.push({ query: newQuery }).catch(() => { });
                }
            }
        }


    }
};

</script>

<style lang="scss" scoped>
#pagination-container {
    display: flex;
    gap: 1rem;
}
</style>
