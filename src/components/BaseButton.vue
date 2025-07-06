<template>
  <button
    :class="[
      'base-button',
      `variant-${variant}`,
      { 'is-block': block },
      { 'is-disabled': disabled },
      { 'is-outlined': outlined }
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary', // primary, secondary, danger
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['click']);
</script>
<style lang="scss">
@use 'sass:map';


@function color($key) {
    @return map.get($colors, $key);
}
$variants: (
  primary: (
    bg: color("primary"),
    text: color("white")
  ),
  secondary: (
    bg: color("secondary"),
    text: color("white")
  ),
  danger: (
    bg: color("danger"),
    text: color("white")
  )
);

.base-button {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    justify-content: center;
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s ease;
    white-space: nowrap;

    .icon {
        font-size: 16px;
        line-height: 1;
    }

    &:disabled,
    &.is-disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    &.is-block {
        display: flex;
        width: 100%;
    }
}

@each $name, $values in $variants {
  .variant-#{$name} {
    $bg: map.get($values, "bg");
    $text: map.get($values, "text");

    background-color: $bg;
    color: $text;

    &:hover:not(:disabled):not(.is-outlined) {
      background-color: rgba($bg, 0.85);
    }

    &.is-outlined {
      background-color: transparent;
      border: 1px solid $bg;
      color: $bg;

      &:hover:not(:disabled) {
        background-color: $bg;
        color: $text;
      }
    }
  }
}

</style>
