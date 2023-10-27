<template>
    <aside>
        <router-link to="/dashboard/transactions">Transactions</router-link>
        <router-link to="/dashboard/customers">Customers</router-link>
        <router-link :to="{ name: 'dashboard-transaction', params: { transactionId: '1234' } }">Transaction</router-link>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
  }
  </script>
  