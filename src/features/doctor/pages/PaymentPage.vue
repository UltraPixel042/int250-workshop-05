<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Button from '@/shared/components/ui/Button.vue'

const router = useRouter()
const route = useRoute()
const type = route.query.type || 'appointment'
const selectedMethod = ref('credit')

const goBack = () => router.back()
const processPayment = () => {
  if (type === 'now') {
    router.push('/doctor/call')
  } else {
    router.push('/doctor/success')
  }
}
</script>

<template>
  <div>
    <Button variant="ghost" @click="goBack">Back</Button>
    <h1>Payment</h1>
    <p>Type: {{ type }}</p>
    
    <label>
      <input type="radio" value="credit" v-model="selectedMethod" /> Credit Card
    </label>
    <br />
    <label>
      <input type="radio" value="wallet" v-model="selectedMethod" /> Wallet
    </label>

    <p>Amount: 520 Baht</p>
    <Button @click="processPayment">Confirm Payment</Button>
  </div>
</template>
