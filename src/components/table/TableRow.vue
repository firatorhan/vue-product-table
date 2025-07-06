<template>
    <tr id="table-tr">
        <slot />
    </tr>
</template>

<script>
export default {
    name: 'TableRow',
    data() {
        return {
        };
    },
};
</script>

<style lang="scss" scoped>
@use "sass:map";

#table-tr {
    border-bottom: 1px solid color(muted-hover);
    transition: background-color 0.2s ease;
    cursor: pointer;

    &:hover {
        background-color: color(muted-hover);
    }

}
</style>
