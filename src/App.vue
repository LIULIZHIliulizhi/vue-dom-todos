<template>
  <div class="todo-container">
    <div class="todo-wrap">
       <headers :addTodo="addTodo"/>
       <Main :todos="todos"/>
       <footers/>
    </div>
  </div>
</template>

<script>
import Headers from './components/Header.vue';
import Footers from './components/Footer.vue';
import Main from './components/Main.vue'
export default {
  data(){
    return {
      todos:[
        {title:'吃饭',finish:false},
        {title:'睡觉',finish:false},
        {title:'上班',finish:true},
      ]
    }
  },
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
