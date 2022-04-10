<template>
  <header>
    <img src="../assets/Logo.svg" alt="" srcset="">
    <button class="users">Users</button>
    <button class="singnUp">Sign Up </button>
  </header>
</template>

<script>
export default {
  name: 'VueHeader',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
