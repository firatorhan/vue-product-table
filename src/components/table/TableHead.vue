<template>
  <th id="table-th" class="text-primary p-2">
    <slot />
  </th>
</template>

<script setup>
// Script kısmı boş, data veya props yok
</script>

<style lang="scss" scoped>
#table-th {
  text-align: left;
  vertical-align: middle;
  white-space: nowrap;
}
</style>
