<template>
    <td id="table-td" class="p-2">
        <slot />
    </td>
</template>

<script>
export default {
    name: 'TableCell',
    data() {
        return {
        };
    },
};
</script>

<style lang="scss" scoped>
#table-td {
    vertical-align: middle;
    white-space: wrap;
}
</style>
