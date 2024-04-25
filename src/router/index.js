import { createRouter, createWebHistory } from 'vue-router'
import Task from '@/views/Task.vue'
import NotFound from '@/views/NotFound.vue'

const history = createWebHistory()
const routes = [
  {
    path: '/',
    redirect: '/task'
  },
  {
    path: '/:notfound(.*)',
    component: NotFound
  },
  {
    path: '/task',
    name: 'Task',
    component: Task
  }
]
const router = createRouter({ history, routes })
export default router
