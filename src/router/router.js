import { createRouter, createWebHashHistory } from "vue-router";
import SignUp from "../components/auth/signup.vue";
import AddTask from "../components/tasks/AddTask.vue";
import TasksDetails from "../components/tasks/TaskDetails.vue";
import EditTask from "../components/tasks/EditTask.vue";
import Home from "../components/tasks/home.vue";

const routes = [
    { path: '/', component: SignUp },
    { path: '/home', component: Home },
    { path: '/add-task', component: AddTask },
    { path: '/edit-task/:taskId', component: EditTask },
    { path: '/task-details/:id', component: TasksDetails }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;