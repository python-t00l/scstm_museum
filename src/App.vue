<template>
  <div id="app">
    <ind-nav></ind-nav>
    <router-view/>
  </div>
</template>

<script>
  import indNav from '@/base/Head/ind_nav'

  export default {
    name: 'App',
    components: {
      indNav
    }
  }

</script>

<style>
  @import "./public/css/base.css";
</style>
