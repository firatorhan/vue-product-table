<template>

    <BaseButton :outlined="true" @click="$emit('click')">
        <slot><span class="icon">&#171;</span></slot>
    </BaseButton>

</template>

<script>
import BaseButton from '../BaseButton.vue';

export default {
    components: {
        BaseButton
    },
    name: 'PaginationFirst',
    data() {
        return {
        };
    },
};
</script>

<style lang="scss" scoped>
#pagination-first {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    white-space: nowrap;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    height: 36px;
    background-color: #fff;
    color: #000;
    border: 1px solid #d1d5db;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
        color: #111827;
    }

    &:disabled {
        pointer-events: none;
        opacity: 0.5;
    }

    &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 1px #3b82f6;
    }

    svg {
        pointer-events: none;
        width: 16px;
        height: 16px;
        flex-shrink: 0;
    }
}
</style>
