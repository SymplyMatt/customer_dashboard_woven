import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../pages/DashboardView.vue'
import TransactionView from '../pages/TransactionView.vue'
import TransactionDetailsView from '../pages/TransactionDetailsView.vue'
import CustomersView from '../pages/CustomersView.vue'

const routes = [
  {
    path: '/dashboard',
    component: DashboardView,
    children: [
      {
        path: '', 
        name: 'dashboard-transactions',
        component: TransactionView
      },
      {
        path: 'transactions',
        name: 'dashboard-transactions',
        component: TransactionView
      },
      {
        path: 'customers',
        name: 'dashboard-customers',
        component: CustomersView
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
    redirect: { name: 'dashboard-transactions' } 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
