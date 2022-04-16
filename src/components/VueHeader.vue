<template>
  <header>
    <img src="../assets/Logo.svg" alt="" srcset="">
    <Mybutton>Users</Mybutton>
    <Mybutton>Sign Up</Mybutton>
  </header>
</template>

<script>
import Mybutton from '..//UI/MyButton.vue'
export default {
  name: 'VueHeader',
  components:{
    Mybutton
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
