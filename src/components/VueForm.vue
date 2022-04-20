<template>
    <div class="q-pa-md" style="width: 328px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        outlined
        v-model="name"
        label="Your name"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
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
      <div>
        
      </div>
    </q-form>

  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>
