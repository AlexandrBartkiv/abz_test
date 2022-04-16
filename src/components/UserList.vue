<template>
    <div>
        <User
        v-for="user in users"
        :key="user.id"
        :user="user"
        ></User>
    </div>
</template>
<script>
import User from './UserCard.vue'
export default {
    components:{
    User,
},
props:{
    users:{
        type: Array,
        required:true
    }
},
    setup() {
        
    },
}
</script>
<style scoped>
div{
    margin-bottom: 30px;
}
</style>