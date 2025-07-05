<template>
    <BaseButton v-bind="$props" @click="$emit('click')">
        <span class="icon">
            <slot />
        </span>
    </BaseButton>
</template>

<script>
import BaseButton from '../BaseButton.vue';

export default {
    components: {
        BaseButton
    },
    name: 'PaginationListItem',
    data() {
        return {
        };
    },
    props: {
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
    },
};
</script>

<style></style>
