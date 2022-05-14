<template>
      <q-input
        class="name"
        outlined
        v-model="name"
        label="Your name"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        class="mail"
        outlined
        type="email"
        v-model="age"
        label="Email"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      />

      <q-input
        class="phone"
        outlined
        v-model="name"
        label="Phone"
        hint="+38 (XXX) XXX - XX - XX"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <p>Select your position</p>
    <q-option-group
      class="radio"
      :options="options"
      type="radio"
      v-model="pos"
    />
    <q-file class="file" outlined v-model="model" label="Upload your photo">
      <template v-slot:prepend>
          <div class="upload">Upload</div>
        </template>
    </q-file>
    <Mybutton class="end">Sign up</Mybutton>
</template>
<script>
import { ref } from '@vue/reactivity'
import axios from 'axios'
import Mybutton from '../UI/MyButton.vue'
export default {
 components:{
   Mybutton
 },
    setup(){
      const options= ref([]);
      const pos = ref(null)
      async function getPositions(){
        const {data} = await axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/positions');
        options.value = data.positions.map(
          ({id, name: value, name: label}) => ({id, value, label})
        )
        console.log(options.value)
      }
      getPositions()
      
      
  
      // console.log(options)
      return {
        getPositions,
        options,
        pos,
      }
    }
}
</script>
<style lang="">
    
</style>
