<template>
    <button @click="vueAlert">Vue</button>
</template>

<script>
export default {
    setup() {
        
    },
    methods: {
        vueAlert() {
            alert('This is the Vue component.')
        }
    }
}
</script>

<style scoped>

</style>
