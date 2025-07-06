<template>
  <BaseButton :outlined="true" @click="$emit('click')">
    <slot>
      <span class="icon">&#8250;</span>
    </slot>
  </BaseButton>
</template>

<script setup>
import BaseButton from '../BaseButton.vue';
</script>

<style lang="scss" scoped></style>
