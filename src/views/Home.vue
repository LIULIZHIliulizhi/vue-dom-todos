<template>
  <div>
    <h2>Home 組件</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link to="/home/news" class="router-link-exact-active activeClass">News</router-link>
        </li>
        <li>
          <router-link to="/home/message" class="">Message</router-link>
        </li>
      </ul>
      <div>
        <hr/>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>

  export default {}
</script>

<style>

</style>
