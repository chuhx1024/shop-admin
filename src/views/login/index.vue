<template>
    <h1>登录</h1>
    <div>{{ $store.state.count }}</div>
</template>

<script setup lang="ts">
import { useStore } from '../../store'
const store = useStore()
console.log(store.state.count)

</script>
