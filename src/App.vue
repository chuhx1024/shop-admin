<template>
    <img
        alt="Vue logo"
        src="./assets/logo.png"
    >
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite123" />
    <TsxDemo />
    <Tsx />
    <router-view />
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import TsxDemo from './components/TsxDemo.vue'
import Tsx from './components/Tex'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
