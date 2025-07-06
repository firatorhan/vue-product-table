<template>
    <thead id="table-thead">
        <slot />
    </thead>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@use "sass:map";

#table-thead {
    tr {
        border-bottom: 1px solid color(muted-hover);
    }
}
</style>
