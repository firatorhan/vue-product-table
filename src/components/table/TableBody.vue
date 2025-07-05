<template>
    <tbody id="table-tbody">
        <slot />
    </tbody>
</template>

<script>
export default {
    name: 'TableBody',
    data() {
        return {
        };
    },
};
</script>

<style lang="scss" scoped>
#table-tbody {
    tr:last-child {
        border: 0;
    }
}
</style>
