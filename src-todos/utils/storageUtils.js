/**
 * Created by 29671 on 2018/11/11.
 */
const TODOS_KEY = 'todos_key';
export default {
  saveTodos(todos){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos))
  },
  readerTodos(){
    JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
  }
}
