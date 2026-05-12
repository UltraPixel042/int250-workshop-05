<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ChevronLeft, Calendar as CalendarIcon, Clock } from 'lucide-vue-next'
import Button from '@/shared/components/ui/Button.vue'
import Card from '@/shared/components/ui/Card.vue'
import CardContent from '@/shared/components/ui/CardContent.vue'

const router = useRouter()
const selectedDate = ref(1)
const selectedTime = ref('10:30 AM')

const dates = [
  { day: 'Mon', date: 15, id: 1 },
  { day: 'Tue', date: 16, id: 2 },
  { day: 'Wed', date: 17, id: 3 },
  { day: 'Thu', date: 18, id: 4 },
  { day: 'Fri', date: 19, id: 5 },
]

const times = ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM']

const goBack = () => router.back()
const goToPayment = () => router.push('/doctor/payment?type=appointment')
</script>

<template>
  <div class="p-4 space-y-8 min-h-screen">
    <div class="flex items-center gap-4">
      <Button variant="ghost" size="icon" @click="goBack" class="rounded-full">
        <ChevronLeft class="h-6 w-6" />
      </Button>
      <h1 class="text-xl font-bold">Appoint a Doctor</h1>
    </div>

    <!-- Date Picker -->
    <div class="space-y-4">
      <div class="flex items-center justify-between px-1">
        <h2 class="font-bold text-lg flex items-center gap-2">
          <CalendarIcon class="h-5 w-5 text-primary" />
          Select Date
        </h2>
        <span class="text-primary text-sm font-medium">May 2026</span>
      </div>
      <div class="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
        <Card 
          v-for="d in dates" 
          :key="d.id"
          @click="selectedDate = d.id"
          class="min-w-17.5 cursor-pointer transition-all border-none"
          :class="[selectedDate === d.id ? 'bg-primary text-primary-foreground shadow-lg' : 'bg-card']"
        >
          <CardContent class="p-4 text-center">
            <span class="text-xs block opacity-70">{{ d.day }}</span>
            <span class="text-xl font-bold">{{ d.date }}</span>
          </CardContent>
        </Card>
      </div>
    </div>

    <!-- Time Picker -->
    <div class="space-y-4">
      <h2 class="font-bold text-lg flex items-center gap-2 px-1">
        <Clock class="h-5 w-5 text-primary" />
        Select Time
      </h2>
      <div class="grid grid-cols-3 gap-3">
        <Button
          v-for="t in times"
          :key="t"
          @click="selectedTime = t"
          variant="outline"
          class="rounded-xl h-12"
          :class="[selectedTime === t ? 'bg-primary text-primary-foreground border-primary' : '']"
        >
          {{ t }}
        </Button>
      </div>
    </div>

    <!-- Summary -->
    <div class="mt-auto pt-8">
      <Card class="bg-secondary/50 border-none">
        <CardContent class="p-6 space-y-4">
          <div class="flex justify-between text-sm">
            <span class="text-muted-foreground">Consultation</span>
            <span class="font-bold">฿500.00</span>
          </div>
          <div class="flex justify-between text-sm">
            <span class="text-muted-foreground">Booking Fee</span>
            <span class="font-bold">฿20.00</span>
          </div>
          <div class="pt-4 border-t border-border flex justify-between">
            <span class="font-bold">Total Amount</span>
            <span class="font-bold text-primary text-lg">฿520.00</span>
          </div>
        </CardContent>
      </Card>

      <Button @click="goToPayment" class="w-full h-14 rounded-2xl text-lg font-bold mt-6 shadow-lg shadow-primary/20">
        Proceed to Payment
      </Button>
    </div>
  </div>
</template>
 