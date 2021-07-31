<template>
    <div>
        <h1>Sign up</h1>
        <div>
            <input class="input" required v-model="name" type="text" placeholder="Name"/> <br/>
            <input class="input" required v-model="email" type="email" placeholder="Email"/> <br/>
            <input class="input" required v-model="password" type="password" placeholder="Password"/> <br/>
            <button class="button" @click="signUp()" name="SignUp"> SignUP </button>
            <router-link to="/login">Login</router-link>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import home from "./home.vue"

export default {
    name : 'signUp',
    data(){
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        signUp(){
            let result =  axios.post("http://localhost:3000/users",{
                name:this.name,
                email:this.email,
                password:this.password
            });
            console.log(this.name,this.email,this.password);
            if(result.status == 201){
                localStorage.setItem("userInfo",JSON.stringify(result.data));
                this.$router.push({name:home})
                alert('Signup successfully!');
            }
        }
    }
}

</script>

<style>
    .logo{
        width: 100px;
    }

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
