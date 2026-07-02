import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CreateMovie from "../views/CreateMovie.vue";
import Movies from "../views/Movies.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
         {
            path: "/CreateMovie",
            name: "CreateMovie",
            component: CreateMovie
        },
         {
            path: "/movies",
            name: "movies",
            component: Movies
        }
    ]
})

export default router