<template>
  <Header></Header>
  <div class="field">
    <h1>Test assignment for front-end developer</h1>
    <p>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
    <Mybutton>Sign up</Mybutton>
  </div>
  <div class="get">
    <h1>Working with <br> GET request</h1>
    <UserList
    :users="users"></UserList>
    <Mybutton 
    v-if="nextpage != null"
    style="width:120px;
          magin-top:30px"
    @click="showMore"
          >Show more</Mybutton>
  </div>
  <div class="post">
    <h1>Working with POST request</h1>
      <VueForm></VueForm>
  </div>
</template>

<script>
import Header from './components/VueHeader.vue'
import UserList from './components/UserList.vue'
import Mybutton from './UI/MyButton.vue'
import VueForm from './components/VueForm.vue'
import axios from 'axios'
import { ref } from '@vue/reactivity'

export default {
  name: 'App',
  components: {
    Header,
    UserList,
    Mybutton,
    VueForm
  },
  setup() {
    const users = ref([])
    const nextpage = ref('1')

  async function getUsers(){
    const {data} = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6')
    users.value = data.users
    console.log(data)
    console.log(users.value)
    users.value.sort((b,a) => a.registration_timestamp<b.registration_timestamp ? -1:1)
    console.log(users.value)
    nextpage.value = data.links.next_url
    console.log(nextpage.value)
  }
  getUsers()

  async function showMore(){
    console.log('111')
    const {data} = await axios.get(nextpage.value)
    users.value = data.users
    console.log(users.value)
    users.value.sort((b,a) => a.registration_timestamp<b.registration_timestamp ? -1:1)
    console.log(users.value)
    nextpage.value = data.links.next_url
    console.log(nextpage.value)
  }
  
  
  return{
      users,
      showMore,
      nextpage
    }
  }
}
</script>

<style>
</style>
