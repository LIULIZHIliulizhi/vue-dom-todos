<template>
  <div>
    <ul>
      <li v-for="(m) in messages" :key="m.id">
        <router-link :to="`/home/message/detail/${m.id}`">{{m.title}}</router-link>
        <button @click="pushWatch(m.id)">push查看</button>
        <button @click="replaceWatch(m.id)">replace查看</button>
      </li>
    </ul>
    <button @click="goBack">返回</button>
    <hr/>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data () {
    return {
      messages: []
    }
  },
  mounted () {
    setTimeout(() => {
      const messages = [
        {id: 1, title: 'message001'},
        {id: 3, title: 'message003'},
        {id: 5, title: 'message005'}
      ]
      this.messages = messages
    }, 1000)
  },
  methods:{
    pushWatch(id){
    this.$router.push(`/home/message/detail/${id}`)
    },
    replaceWatch(id){
    this.$router.replace(`/home/message/detail/${id}`)
    },
    goBack(){
      this.$router.back()
    }
  }
}
</script>

<style>

</style>
