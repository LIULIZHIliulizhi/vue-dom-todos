<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model= "isCheckAll"/>
    </label>
    <span>
          <span >已完成{{finishNum}}</span> / 全部{{todos.length}}
        </span>
    <button class="btn btn-danger" v-show="finishNum" @click="deleteFinishTodo">清除已完成任务</button>
  </div>
</template>

<script>

  export default {
    props:{
      todos:Array,
      deleteFinishTodo:Function,
      selectAllTodo:Function
    },
    computed:{
      finishNum(){
        return this.todos.reduce((pre,todo)=> pre + (todo.finish? 1 : 0),0)
      },
//      是否选，和同步修改todo
      isCheckAll: {
        get(){
          return this.todos.length === this.finishNum && this.finishNum >0
        },
        set(value){ // value 代表当前是否勾选的boolean值
          console.log(value)
          this.selectAllTodo(value)
        }
      }
    }
  }
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }
  
  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }
  
  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }
  
  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
