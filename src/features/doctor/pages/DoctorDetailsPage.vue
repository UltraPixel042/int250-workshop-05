<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ChevronLeft, Star, Award, Users, Share2 } from 'lucide-vue-next'
import Avatar from '@/shared/components/ui/Avatar.vue'
import AvatarImage from '@/shared/components/ui/AvatarImage.vue'
import Button from '@/shared/components/ui/Button.vue'
import Card from '@/shared/components/ui/Card.vue'
import CardContent from '@/shared/components/ui/CardContent.vue'
import doctorAvatar from '@/assets/doctor-avartar.png'

const route = useRoute()
const router = useRouter()
const id = route.params.id

const doctor = {
  id: 1,
  name: 'Dr. Sarah Mitchell',
  specialty: 'Cardiologist',
  rating: 4.9,
  reviews: 124,
  experience: '12 years',
  patients: '1,500+',
  about: 'Dr. Sarah Mitchell is a world-renowned cardiologist with over 12 years of experience in treating complex heart conditions. She specialized in non-invasive cardiology and preventive heart care.',
  price: 500
}

const goBack = () => router.back()
const bookNow = () => router.push(`/doctor/book/${id}`)
const seeNow = () => router.push('/doctor/payment?type=now')
</script>

<template>
  <div class="relative min-h-screen pb-24">
    <!-- Header Image/Space -->
    <div class="h-48 bg-primary/10 w-full relative">
      <div class="absolute top-4 left-4 right-4 flex justify-between">
        <Button variant="ghost" size="icon" @click="goBack" class="rounded-full bg-white/80 backdrop-blur">
          <ChevronLeft class="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" class="rounded-full bg-white/80 backdrop-blur">
          <Share2 class="h-5 w-5" />
        </Button>
      </div>
    </div>

    <!-- Doctor Info Section -->
    <div class="px-4 -mt-16">
      <Card class="border-none shadow-lg">
        <CardContent class="pt-16 pb-6 text-center relative">
          <div class="absolute -top-16 left-1/2 -translate-x-1/2">
            <Avatar class="h-32 w-32 border-4 border-background shadow-xl">
              <AvatarImage :src="doctorAvatar" />
            </Avatar>
          </div>

          <h1 class="text-2xl font-bold">{{ doctor.name }}</h1>
          <p class="text-primary font-medium">{{ doctor.specialty }}</p>

          <div class="flex justify-center gap-8 mt-6">
            <div class="text-center">
              <div class="flex items-center justify-center gap-1 text-orange-500 font-bold">
                <Star class="h-5 w-5 fill-current" />
                {{ doctor.rating }}
              </div>
              <p class="text-xs text-muted-foreground">Rating</p>
            </div>
            <div class="text-center border-x border-border px-8">
              <div class="flex items-center justify-center gap-1 font-bold text-teal-600">
                <Award class="h-5 w-5" />
                {{ doctor.experience }}
              </div>
              <p class="text-xs text-muted-foreground">Exp.</p>
            </div>
            <div class="text-center">
              <div class="flex items-center justify-center gap-1 font-bold text-indigo-600">
                <Users class="h-5 w-5" />
                {{ doctor.patients }}
              </div>
              <p class="text-xs text-muted-foreground">Patients</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div class="mt-8 space-y-6">
        <div class="space-y-2">
          <h2 class="font-bold text-lg">About Doctor</h2>
          <p class="text-muted-foreground leading-relaxed">{{ doctor.about }}</p>
        </div>

        <div class="space-y-3">
          <h2 class="font-bold text-lg">Availability</h2>
          <div class="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            <div v-for="day in ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']" :key="day" class="min-w-17.5 p-3 rounded-2xl bg-secondary text-center">
              <span class="text-xs font-medium block opacity-70">{{ day }}</span>
              <span class="text-sm font-bold">9:00 AM</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Action Bar -->
    <div class="fixed bottom-20 left-4 right-4 z-40">
      <Card class="bg-card/80 backdrop-blur shadow-2xl border-border/50">
        <CardContent class="p-4 flex items-center justify-between gap-4">
          <div class="space-y-1">
            <p class="text-xs text-muted-foreground font-medium uppercase">Consultation Fee</p>
            <p class="text-2xl font-bold">฿{{ doctor.price }}</p>
          </div>
          <div class="flex gap-2">
            <Button @click="seeNow" variant="outline" class="rounded-xl h-14 border-primary text-primary font-bold">See Now</Button>
            <Button @click="bookNow" class="rounded-xl h-14 px-8 font-bold">Book Appointment</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
 