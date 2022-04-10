<template>
  <div class="card">
    <img src="" alt="">
    <p>{{users.name}}</p>
    <p>{{users.position}}</p>
    <p>{{users.email}}</p>
    <p class="phone">{{users.phone}}</p>
      <!-- <p>Salvador Stewart Flynn Thomas Salva...</p>
      <p>Leading specialist of the department o...
JeromeKlarkaJeromeKlarka19233623...
</p>
<p class="phone">+38 (098) 278 76 24</p> -->
  </div>
</template>

<script>
import {inject, reactive} from 'vue'
export default {
    setup() {
        const state = reactive({})
         state.users = inject('state')
        console.log(state)
        return{
            state
        }
    }
}
</script>

