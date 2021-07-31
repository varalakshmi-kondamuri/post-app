<template>
    <div>
        <h1>Welcome to Home page</h1>
        <router-link to="/login">Login</router-link><br />
        <router-link to="/signUp">signUp</router-link>
        <!-- <button class="button" @click="signUp()" name="SignUp"> SignUP </button>
        <button class="button" @click="login()" name="login"> Login </button> -->
    </div>
</template>


<script>
//import axios from 'axios';
import SignUp from './signUp.vue';
import Login from './login.vue';

export default {
    name : 'home',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        login(){
            this.$router.push({name:Login})
        },
        signUp(){
            this.$router.push({name:SignUp})
        }
    },
     mounted(){
        let user = localStorage.getItem("userInfo");
        if(!user){
            alert('Please Login!');
            this.$router.push({name:Login})
        }
    }
}

</script>

<style>


    .input{
        width: 300px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 20px;
        margin-right: auto;
        margin-left: auto;
        border: 1px solid skyblue;
    }

    .button{
        width: 320px;
        height: 40px;
        border: 1px solid skyblue;
        background: skyblue;
        color: '#fff';
        cursor: pointer;
    }
</style>
