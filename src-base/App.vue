<template>
  <div>
    <h2>这是第一个Vue项目</h2>
    <img src="./assets/logo.png" alt="log" class="logo">
    <HeaderWord/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWord.vue'
export default {
  components: {
    HeaderWord: HelloWorld
  }
}
</script>

<style>
  .logo{
    width:200px;
    height:200px;
  }
</style>
