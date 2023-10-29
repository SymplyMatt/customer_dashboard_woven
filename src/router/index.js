import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../pages/dashboard/DashboardView.vue'
import TransactionDetailsView from '../pages/dashboard/TransactionDetailsView.vue'
import DashboardMain from '../pages/dashboard/DashboardMain.vue'

const routes = [
  {
    path: '/dashboard',
    component: DashboardView,
    name : 'dashboard',
    children: [
      {
        path: '', 
        name: 'dashboardMain',
        component: DashboardMain
      },
      {
        path: 'transaction/:transactionId',
        name: 'dashboard-transaction',
        component: TransactionDetailsView
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*', 
    redirect: { name: 'dashboardMain' } 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
