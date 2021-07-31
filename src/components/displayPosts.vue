<template>
    <div>
        <h1>All Posts</h1>
        <router-link to="/post">Create Post</router-link>
        <div>
            <table>
                <tr v-for="post in posts" :key="post.id">
                    <td class="input">{{post.post}}</td><br />
                    <comment /><br />
                </tr>
            </table>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import Login from "./login.vue"
import comment from "./comment.vue"

export default {
  components: { comment },
    name : 'login',
    data(){
        return{
            posts:[],
        }
    },
    mounted(){
        let user = localStorage.getItem("userInfo");
        if(!user){
            alert('Please Login!');
            this.$router.push({name:Login})
        }
        let result = axios.get(`http://localhost:3000/posts`)
        if(result.status == 200 && result.data.length>0){
            this.posts = result.data        }
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
