import { createApp } from 'vue'
import App from './App.vue'
import{createRouter,createWebHistory} from "vue-router"
import Contact from './components/Contact.vue'
 import HelloWorld from './components/HelloWorld.vue'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: HelloWorld
    },
    // {
    //   path: '/about',
    //   name: 'About',
    //   component: () => import('../views/About.vue')
    // },
    {
      path: '/contact',
      name: 'Contact',
      component:Contact
    }
]



const router = createRouter({
    history: createWebHistory(),
    routes
});
createApp (App).use(router).mount("#app")




