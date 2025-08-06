import { createRouter, createWebHistory } from 'vue-router'
import MainView from "../views/MainView.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
    { path: '/game', name: 'Main', component: MainView
    }, { path: '/home', name: 'Home', component: HomeView
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router