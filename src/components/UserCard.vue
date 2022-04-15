<template>
  <div 
  class="card">
    <img :src="user.photo" alt="">
    <p class="name">{{user.name}}</p>
    <p class="pos">{{user.position}}<br>{{user.email}}</p>
    
    <p class="phone">{{user.phone}}</p>
      <!-- <p>Salvador Stewart Flynn Thomas Salva...</p>
      <p>Leading specialist of the department o...
JeromeKlarkaJeromeKlarka19233623...
</p>
<p class="phone">+38 (098) 278 76 24</p> -->
  </div>
</template>

<script>

export default {
 props:{
   user:{
     type: Object,
     required: true,
   }
 },
    setup() {
        return{
            
        }
    }
}
</script>

