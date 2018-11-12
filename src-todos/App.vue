<template>
  <div class="todo-container">
    <div class="todo-wrap">
       <headers :addTodo="addTodo"/>
       <Main :todos="todos" :deleteTodo="deleteTodo"/>
       <footers :todos = "todos"
                :deleteFinishTodo="deleteFinishTodo"
                :selectAllTodo="selectAllTodo"
       />
    </div>
  </div>
</template>

<script>
import Headers from './components/Header.vue';
import Footers from './components/Footer.vue';
import Main from './components/Main.vue';
import storageUtils from './utils/storageUtils'
export default {
  data(){
    return {
//      todos:[
//        {title:'吃饭',finish:false},
//        {title:'睡觉',finish:false},
//        {title:'上班',finish:false},
//      ]
//      读取todos
     todos: JSON.parse(localStorage.getItem('todos_key') || '[]')
//      todos: storageUtils.readerTodos()
    }
  },
  methods:{
    addTodo(todo){
      this.todos.unshift(todo)
    },
    deleteTodo(index){
      this.todos.splice(index,1)
    },
    deleteFinishTodo(){
      this.todos = this.todos.filter(todo=>!todo.finish)
    },
    selectAllTodo(finish){
    this.todos.forEach(todo=>todo.finish = finish)
    }
  },
  components: {
    Headers,
    Footers,
    Main
  },
  watch:{
    todos:{
      deep:true,
      handler:function(value){//value 指的是todos 最新的值
//        保存todos的json 格式到localstorage
        localStorage.setItem('todos_key',JSON.stringify(value))
//        storageUtils.saveTodos(value)
      
      }
    }
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
