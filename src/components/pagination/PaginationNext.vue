<template>
    <BaseButton :outlined="true" @click="$emit('click')">
        <slot> <span class="icon">&#8250;</span></slot>
    </BaseButton>
</template>

<script>
import BaseButton from '../BaseButton.vue';

export default {
    components: {
        BaseButton
    },
    name: 'PaginationNext',
    data() {
        return {
        };
    },
};
</script>

<style lang="scss" scoped></style>
