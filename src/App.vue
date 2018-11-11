<template>
  <div class="todo-container">
    <div class="todo-wrap">
     <headers  />
     <Main/>
     <footers/>
    </div>
  </div>
</template>

<script>
import Headers from './components/Header.vue';
import Footers from './components/Footer.vue';
import Main from './components/Main.vue'
export default {
  components: {
    Headers,
    Footers,
    Main
  }
}
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
