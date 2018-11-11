<template>
  <div>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
  export default {
  data(){
    return {
      msg:'你好，世界'
    }
  }
  }
</script>

<style scoped>
h2{
  color:palevioletred;
  font-size:24px;
}
</style>
