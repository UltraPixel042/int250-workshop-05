<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Button from '@/shared/components/ui/Button.vue'

const router = useRouter()
const selectedDate = ref(1)
const selectedTime = ref('10:30 AM')

const dates = [
  { day: 'Mon', date: 15, id: 1 },
  { day: 'Tue', date: 16, id: 2 },
  { day: 'Wed', date: 17, id: 3 },
]

const times = ['09:00 AM', '10:30 AM', '01:00 PM']

const goBack = () => router.back()
const goToPayment = () => router.push('/doctor/payment?type=appointment')
</script>

<template>
  <div>
    <Button variant="ghost" @click="goBack">Back</Button>
    <h1>Booking Page</h1>
    
    <h3>Select Date</h3>
    <div v-for="d in dates" :key="d.id">
      <input type="radio" :value="d.id" v-model="selectedDate" /> {{ d.day }} {{ d.date }}
    </div>

    <h3>Select Time</h3>
    <select v-model="selectedTime">
      <option v-for="t in times" :key="t" :value="t">{{ t }}</option>
    </select>

    <p>Total: 520 Baht</p>
    <Button @click="goToPayment">Pay Now</Button>
  </div>
</template>
