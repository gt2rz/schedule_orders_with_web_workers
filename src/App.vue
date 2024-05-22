
<template>
  <div>
    <h1>Schedule orders with workers</h1>
    <button @click="createOrder">Create Order</button>
  </div>
</template>

<script setup>
import { createOrderService } from './services/orders';

const createOrder = () => {
  createOrderService();
}
</script>


<style scoped>

</style>
