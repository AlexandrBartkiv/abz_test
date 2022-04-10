<template>
  <Header></Header>
  <div class="field">
    <h1>Test assignment for front-end developer</h1>
    <p>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
    <button>Sign Up</button>
  </div>
  <div class="get">
    <h1>Working with <br> GET request</h1>
    <User
      v-for="user in state.users"
      :key="user.id"></User>
  </div>
</template>

<script>
import Header from './components/VueHeader.vue'
import User from './components/UserCard.vue'
import axios from 'axios'
import { reactive } from '@vue/reactivity'
import { provide } from '@vue/runtime-core'

export default {
  name: 'App',
  components: {
    Header,
    User
  },
  setup() {
    const state = reactive({})
    async function getUsers(){
      const {data} = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5')
      state.users = data
    }
  getUsers()
  
  provide('state')

   console.log(state)
  return{
      state,
    }
  }
}
</script>

<style>
</style>
