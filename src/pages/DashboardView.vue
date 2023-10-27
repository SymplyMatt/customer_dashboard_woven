<template>
    <div>
      This is the dashboard view
      <aside>
        <router-link to="/dashboard/transactions">Transactions</router-link>
        <router-link to="/dashboard/customers">Customers</router-link>
        <router-link to="/dashboard/transactions/:1234">Transaction</router-link>
      </aside>
  
      <main>
        <router-view></router-view>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DashboardView',
  }
  </script>
  