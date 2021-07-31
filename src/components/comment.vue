<template>
    <div>
        <div>
            <input class="input" required v-model="comment" type="text" placeholder="comment..."/>
            <button @click="createComment()" name="createComment"> OK</button>
        </div>
    </div>
</template>


<script>
import axios from 'axios';
import Login from "./login.vue"

export default {
    name : 'login',
    data(){
        return{
            comment:'',
        }
    },
    methods:{
        createComment(){
            let result =  axios.post("http://localhost:3000/comments",{
                comment:this.comment,
            });
            console.log('comment:',result)
            alert('comment added successfully!')
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
        height: 20px;
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
