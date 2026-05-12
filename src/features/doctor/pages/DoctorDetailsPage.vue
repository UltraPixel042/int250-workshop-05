<script setup>
import { useRoute, useRouter } from 'vue-router'
import doctorAvatar from '@/assets/doctor-avartar.png'
import Button from '@/shared/components/ui/Button.vue'

const route = useRoute()
const router = useRouter()
const id = route.params.id

const doctor = {
  id: 1,
  name: 'Dr. Sarah Mitchell',
  specialty: 'Cardiologist',
  price: 500
}

const goBack = () => router.back()
const bookNow = () => router.push(`/doctor/book/${id}`)
const seeNow = () => router.push('/doctor/payment?type=now')
</script>

<template>
  <div>
    <Button variant="ghost" @click="goBack">Back</Button>
    <h1>{{ doctor.name }}</h1>
    <img :src="doctorAvatar" width="100" />
    <p>Specialty: {{ doctor.specialty }}</p>
    <p>Fee: {{ doctor.price }} Baht</p>
    <hr />
    <div style="display: flex; gap: 10px;">
      <Button variant="outline" @click="seeNow">See Now</Button>
      <Button @click="bookNow">Book Appointment</Button>
    </div>
  </div>
</template>