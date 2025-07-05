<template>
    <th id="table-th" class="text-primary p-2">
        <slot />
    </th>
</template>

<script>
export default {
    name: 'TableHeader',
    data() {
        return {
        };
    },
};
</script>

<style lang="scss">
#table-th {
    text-align: left;
    vertical-align: middle;
    white-space: nowrap;
}
</style>
