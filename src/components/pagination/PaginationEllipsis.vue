<template>
    <BaseButton :outlined="true" @click="$emit('click')">
        <slot>...</slot>
    </BaseButton>
</template>

<script>
import BaseButton from '../BaseButton.vue';

export default {
    components: {
        BaseButton
    },
    name: 'PaginationEllipsis',

    data() {
        return {
        };
    },
};
</script>

<style lang="scss" scoped></style>
