<template>
    <div>
        <h1>Post</h1>
        <div>
            <input class="input" required v-model="post" type="text" placeholder="Enter post details"/> <br/>
            <button class="button" @click="createPost()" name="createPost"> Create Post </button>
            <router-link to="/displayPosts">Display Posts</router-link>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import Login from './login.vue';

export default {
    name : 'login',
    data(){
        return{
            post:'',
        }
    },
    methods:{
        createPost(){
            let result =  axios.post("http://localhost:3000/posts",{
                post:this.post,
            });
            if(result.status == 201){
                alert('Post created successfully!');
            }
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
        height: 200px;
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
