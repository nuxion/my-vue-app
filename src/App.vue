<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <ul>
    <li>Is DEV env: {{ isDev }} </li>
    <li>Is Using dark theme?: {{ isDark }} </li>
    <li>What Is my baseURL?: {{ baseURL }} </li>
    <li>What Is my api server?: {{ apisrv }} </li>
  </ul>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { usePreferredDark, useLocalStorage } from '@vueuse/core'
// const name = import.meta.env.DEV

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    // is user prefers dark theme
    const baseURL = import.meta.env.BASE_URL
    const apisrv = import.meta.env.VITE_API_SERVER
    const isDark = usePreferredDark()
    const store = useLocalStorage(
      'my-storage', 
      {
        name: 'Apple',
        color: 'red',
      },
    )
    
     return { isDark, store, baseURL, apisrv }

 },
 data: function () {
    return {
      isDev: import.meta.env.DEV,
    }
  },
}

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
