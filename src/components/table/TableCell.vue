<template>
  <td id="table-td" class="p-2">
    <slot />
  </td>
</template>

<script setup>
// No logic needed
</script>

<style lang="scss" scoped>
#table-td {
  vertical-align: middle;
  white-space: wrap;
}
</style>
