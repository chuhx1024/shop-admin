<template>
    <h1>登录</h1>
    <div>{{ $store.state.count }}</div>
    <img
        src="@/assets/logo.png"
        alt=""
    >
    <div class="box" />
</template>

<script setup lang="ts">
import { useStore } from '@/store'
const store = useStore()
console.log(store.state.count)

</script>
<style scoped>
.box {
    width: 100px;
    height: 100px;
    background: url('@/assets/logo.png');
}
</style>
