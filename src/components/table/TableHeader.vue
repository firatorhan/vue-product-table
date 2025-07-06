<template>
    <thead id="table-thead">
        <slot />
    </thead>
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

<style lang="scss" scoped>
@use "sass:map";

#table-thead {
    tr {
        border-bottom: 1px solid color(muted-hover);
    }
}
</style>
