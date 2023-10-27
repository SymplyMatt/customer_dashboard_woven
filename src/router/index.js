import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../pages/dashboard/DashboardView.vue'
import Transactions from '../pages/dashboard/Transactions.vue'
import TransactionDetailsView from '../pages/dashboard/TransactionDetailsView.vue'
import CustomersView from '../pages/dashboard/CustomersView.vue'

const routes = [
  {
    path: '/dashboard',
    component: DashboardView,
    children: [
      {
        path: '', 
        name: 'dashboard-transactions',
        component: Transactions
      },
      {
        path: 'transactions',
        name: 'dashboard-transactions',
        component: Transactions
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
