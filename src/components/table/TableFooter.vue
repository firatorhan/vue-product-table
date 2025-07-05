<template>
  <tfoot id="table-tfoot" class="bg-muted-hover">
    <slot />
  </tfoot>
</template>

<script>
export default {
  name: 'TableFooter',
  data() {
    return {
    };
  },
};
</script>

<style>
#table-tfoot {
  border-top: 1px solid #e5e7eb;
}
</style>
