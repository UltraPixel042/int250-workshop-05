<script setup>
import { useRouter } from 'vue-router'
import { CheckCircle2, Calendar, Clock } from 'lucide-vue-next'
import Button from '@/shared/components/ui/Button.vue'
import Card from '@/shared/components/ui/Card.vue'
import CardContent from '@/shared/components/ui/CardContent.vue'

const router = useRouter()
const done = () => router.push('/')
</script>

<template>
  <div class="p-6 flex flex-col items-center justify-center min-h-screen text-center space-y-8">
    <div class="h-24 w-24 bg-primary/10 rounded-full flex items-center justify-center animate-bounce">
      <CheckCircle2 class="h-16 w-16 text-primary" />
    </div>
    
    <div class="space-y-2">
      <h1 class="text-3xl font-bold text-foreground">Appointment Successful!</h1>
      <p class="text-muted-foreground">Your appointment has been confirmed. You will receive a notification shortly.</p>
    </div>

    <Card class="w-full bg-secondary/30 border-none shadow-none">
      <CardContent class="p-6 space-y-4 text-left">
        <div class="flex items-center gap-3">
          <Calendar class="h-5 w-5 text-primary" />
          <div>
            <p class="text-xs text-muted-foreground uppercase">Date</p>
            <p class="font-bold">Mon, May 15 2026</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <Clock class="h-5 w-5 text-primary" />
          <div>
            <p class="text-xs text-muted-foreground uppercase">Time</p>
            <p class="font-bold">10:30 AM</p>
          </div>
        </div>
      </CardContent>
    </Card>

    <div class="w-full space-y-3">
      <Button variant="outline" class="w-full h-12 rounded-xl">Add to Calendar</Button>
      <Button @click="done" class="w-full h-14 rounded-xl text-lg font-bold">Go to Dashboard</Button>
    </div>
  </div>
</template>
