<template>
  <BaseButton :outlined="true" @click="$emit('click')">
    <slot>...</slot>
  </BaseButton>
</template>

<script setup>
import BaseButton from '../BaseButton.vue';
</script>

<style lang="scss" scoped></style>
