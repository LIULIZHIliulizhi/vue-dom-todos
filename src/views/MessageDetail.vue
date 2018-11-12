<template>
  <ul>
    <li>id:{{$route.params.id}}</li>
    <li>title:{{messagesDetial.title}} </li>
    <li>content: {{messagesDetial.content}}</li>
  </ul>
</template>

<script>
  const allMessagesDetial = [
    {id:1,title:'message001',content:'message001 concent'},
    {id:3,title:'message003',content:'message003 concent'},
    {id:5,title:'message005',content:'message005 concent'}
  ]
  export default {
//    data(){
//      return{
//        messagesDetial:[]
//      }
//    },']
    computed: {
     messagesDetial () {
       const id = this.$route.params.id * 1;
       return allMessagesDetial.find(md => md.id === id)
     }
    }
  }
</script>

<style>

</style>
