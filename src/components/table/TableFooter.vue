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
  border-bottom: 1px solid color(muted-hover);
  transition: background-color 0.2s ease;
  cursor: pointer;

  tr {
    &:hover {
     background-color: unset;
    }

    &.no-hover:hover {
      background-color: unset;
    }
  }

}
</style>
