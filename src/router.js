import home from "./components/home.vue"
import signUp from "./components/signUp.vue"
import login from "./components/login.vue"
import displayPosts from "./components/displayPosts.vue"
import post from "./components/post.vue"
import { createRouter,createWebHistory } from "vue-router";


const router = createRouter({
    history:createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: home },
        { path: '/signUp', name: 'signUp', component: signUp },
        { path: '/login', name: 'login', component: login },
        { path: '/displayPosts', name: 'displayPosts', component: displayPosts },
        { path: '/post', name: 'post', component: post },
      ]
})
export default router;