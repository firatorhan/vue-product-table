<template>
    <BaseButton :outlined="true" @click="$emit('click')">
        <slot><span class="icon">&#8249;</span></slot>
    </BaseButton>
</template>

<script>
import BaseButton from '../BaseButton.vue';

export default {
    components: {
        BaseButton
    },
    name: 'PaginationPrev',
    data() {
        return {
        };
    },
};
</script>

<style lang="scss" scoped></style>
