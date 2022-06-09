import { createWebHistory, createRouter } from "vue-router";
const routes =  [
    {
        path: "/",
        alias: "/employees",
        name: "ListEmployee",
        component: () => import("./components/ListEmployee")
    },
    {
        path: "/add",
        alias: "/employees",
        name: "AddEmployee",
        component: () => import("./components/AddEmployee")
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
