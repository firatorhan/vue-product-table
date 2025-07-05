<template>
    <div id="pagination-list">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'PaginationList',
    data() {
        return {
            currentPage: this.defaultPage,
        };
    },



};
</script>

<style lang="scss" scoped>
#pagination-list {
    display: flex;
    gap: 1rem;
}
</style>
