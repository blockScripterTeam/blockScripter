import {createRouter, createWebHistory} from "vue-router";
import MainMenuView from "../views/MainMenuView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "main-menu",
            component: MainMenuView,
        }
    ],
});

export default router;
