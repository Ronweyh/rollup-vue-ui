<template>
    <div class="index">
        {{msg}}
    </div>
</template>

<script>
    export default {
        name: "Index",
        data: () => ({
            msg: 'im from rollup.js'
        }),
    }
</script>

<style lang="scss" scoped>
    .index {
        font-size: 30px;
        color: #4fd433;
    }
</style>