<template>
  <Header></Header>
  <div class="field">
    <h1>Test assignment for front-end developer</h1>
    <p>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
    <button>Sign Up</button>
  </div>
  <div class="get">
    <h1>Working with <br> GET request</h1>
    <UserList
    :users="users"></UserList>
  </div>
</template>

<script>
import Header from './components/VueHeader.vue'
import UserList from './components/UserList.vue'
import axios from 'axios'
import { ref } from '@vue/reactivity'

export default {
  name: 'App',
  components: {
    Header,
    UserList
  },
  setup() {
    const users = ref([])
    async function getUsers(){
      const {data} = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6')
      users.value = data.users
    }
  getUsers()
  
  console.log(users)
  return{
      users,
    }
  }
}
</script>

<style>
</style>
