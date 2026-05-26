import { createRouter, createWebHistory } from 'vue-router'
import GameView from "../views/GameView.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/game', name: 'Game', component: GameView },
    { path: '/home', name: 'Home', component: HomeView },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
