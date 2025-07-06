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

<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import PaginationEllipsis from './PaginationEllipsis.vue';
import PaginationFirst from './PaginationFirst.vue';
import PaginationLast from './PaginationLast.vue';
import PaginationList from './PaginationList.vue';
import PaginationListItem from './PaginationListItem.vue';
import PaginationNext from './PaginationNext.vue';
import PaginationPrev from './PaginationPrev.vue';

const props = defineProps({
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
});

const emit = defineEmits(['page-changed']);

const route = useRoute();
const router = useRouter();

const currentPage = ref(props.defaultPage);

const totalPages = computed(() => Math.ceil(props.total / props.itemsPerPage));

const visiblePages = computed(() => {
    const maxVisible = 10;
    const total = totalPages.value;
    const current = currentPage.value;

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
});

function setPage(page) {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
        emit('page-changed', page);

        const newQuery = { ...route.query, page };
        if (route.query.page !== String(page)) {
            router.push({ query: newQuery }).catch(() => { });
        }
    }
}

watch(() => route.query.page, (newPage) => {
    const pageNumber = Number(newPage);
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages.value) {
        currentPage.value = pageNumber;
    }
});

</script>

<style lang="scss" scoped>
#pagination-container {
    display: flex;
    gap: 1rem;
}
</style>
