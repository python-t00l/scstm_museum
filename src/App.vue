<template>
  <div id="app">
    <ind-nav :pathname="pathname"></ind-nav>

    <router-view/>

    <ind-footer></ind-footer>
  </div>
</template>

<script>
  import indNav from '@/base/Head/ind_nav'
  import indFooter from '@/base/Head/footer'

  export default {
    name: 'App',
    components: {
      indNav,
      indFooter
    },
    data() {
      return {
        pathname: '',
        logo: ''
      }
    },
    watch: {
      "$route"(to, from) {
        this.pathname = to.meta[0]
      }
    }
  }

</script>

<style>
  @import "./public/css/base.css";
</style>
