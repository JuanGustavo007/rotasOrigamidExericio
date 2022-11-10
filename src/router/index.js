import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CursosView from "@/views/CursosView.vue";
import CursoView from "@/views/CursoView.vue";
import MateriaView from "@/views/MateriaView.vue";
import ContatoView from "@/views/ContatoView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/cursos",
    name: "cursos",
    component: CursosView,
  },
  {
    path: "/cursos/:curso",
    component: CursoView,
    name: "curso",
    children: [
      {
        path: ":materia",
        component: MateriaView,
        name: "materia",
      },
    ],
  },
  {
    path: "/contato",
    component: ContatoView,
    name: "contato",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
