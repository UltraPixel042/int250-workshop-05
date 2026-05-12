<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ChevronLeft, CreditCard, Wallet, Apple, CheckCircle2 } from 'lucide-vue-next'
import Button from '@/shared/components/ui/Button.vue'
import Card from '@/shared/components/ui/Card.vue'
import CardContent from '@/shared/components/ui/CardContent.vue'

const router = useRouter()
const route = useRoute()
const type = route.query.type || 'appointment'
const selectedMethod = ref('credit')

const paymentMethods = [
  { id: 'credit', label: 'Credit Card', icon: CreditCard, color: 'text-blue-600' },
  { id: 'wallet', label: 'TrueMoney Wallet', icon: Wallet, color: 'text-orange-500' },
  { id: 'apple', label: 'Apple Pay', icon: Apple, color: 'text-foreground' },
]

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
  <div class="p-4 space-y-8 min-h-screen">
    <div class="flex items-center gap-4">
      <Button variant="ghost" size="icon" @click="goBack" class="rounded-full">
        <ChevronLeft class="h-6 w-6" />
      </Button>
      <h1 class="text-xl font-bold">Payment Method</h1>
    </div>

    <div class="space-y-6">
      <div class="space-y-3">
        <h2 class="text-sm font-bold text-muted-foreground uppercase tracking-widest px-1">Payment Options</h2>
        <Card 
          v-for="method in paymentMethods" 
          :key="method.id"
          @click="selectedMethod = method.id"
          class="cursor-pointer border-2 transition-all"
          :class="[selectedMethod === method.id ? 'border-primary bg-primary/5' : 'border-transparent bg-card']"
        >
          <CardContent class="p-4 flex items-center justify-between">
            <div class="flex items-center gap-4">
              <div :class="['p-2 rounded-lg bg-secondary', method.color]">
                <component :is="method.icon" class="h-6 w-6" />
              </div>
              <span class="font-bold text-lg">{{ method.label }}</span>
            </div>
            <div 
              class="h-6 w-6 rounded-full border-2 flex items-center justify-center"
              :class="[selectedMethod === method.id ? 'border-primary bg-primary' : 'border-muted-foreground/30']"
            >
              <CheckCircle2 v-if="selectedMethod === method.id" class="h-4 w-4 text-white" />
            </div>
          </CardContent>
        </Card>
      </div>

      <!-- Amount Details -->
      <Card class="bg-secondary/30 border-none">
        <CardContent class="p-4 space-y-2">
          <div class="flex justify-between">
            <span class="text-muted-foreground">Total to pay</span>
            <span class="text-2xl font-bold">฿520.00</span>
          </div>
        </CardContent>
      </Card>
    </div>

    <div class="mt-auto pb-6">
      <Button @click="processPayment" class="w-full h-14 rounded-2xl text-lg font-bold shadow-lg shadow-primary/20">
        Confirm & Pay
      </Button>
    </div>
  </div>
</template>

 