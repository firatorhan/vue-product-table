<template>
    <div class="table-container">
        <table>
            <slot />
        </table>
    </div>
</template>

<script>
export default {
    name: 'TableContainer',
    props: {
    },
};
</script>

<style lang="scss">
.table-container {
    border: 1px solid #e5e7eb;
    border-radius: 2rem;
    position: relative;
    width: 100%;
    overflow: auto;

    table {
        width: 100%;
        overflow: auto;
        border-collapse: collapse;
    }
}
</style>
