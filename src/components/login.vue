<template>
    <div>
        <h1>Login</h1>
        <div>
            <input class="input" required v-model="email" type="email" placeholder="Email"/> <br/>
            <input class="input" required v-model="password" type="password" placeholder="Password"/> <br/>
            <button class="button" @click="login()" name="login"> Login </button>
            <router-link to="/signUp">signUp</router-link>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import displayPosts from "./displayPosts.vue"

export default {
    name : 'login',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        login(){
            let result = axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
            if(result.status == 200 && result.data.length>0){
                localStorage.setItem("userInfo",JSON.stringify(result.data[0]));
                this.$router.push({name:displayPosts})
                alert('Login successfully!');
            }
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
