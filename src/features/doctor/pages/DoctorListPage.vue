<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ChevronLeft, Star, MapPin } from 'lucide-vue-next'
import Avatar from '@/shared/components/ui/Avatar.vue'
import AvatarImage from '@/shared/components/ui/AvatarImage.vue'
import Button from '@/shared/components/ui/Button.vue'
import Card from '@/shared/components/ui/Card.vue'
import CardContent from '@/shared/components/ui/CardContent.vue'
import doctorAvatar from '@/assets/doctor-avartar.png'

const route = useRoute()
const router = useRouter()
const type = route.params.type

const doctors = [
  { id: 1, name: 'Dr. Sarah Mitchell', specialty: 'Cardiologist', rating: 4.9, experience: '12 years', price: 500, available: true },
  { id: 2, name: 'Dr. James Wilson', specialty: 'Dermatologist', rating: 4.8, experience: '8 years', price: 400, available: true },
  { id: 3, name: 'Dr. Emily Chen', specialty: 'Pediatrician', rating: 4.9, experience: '15 years', price: 600, available: false },
]

const goBack = () => router.back()
const viewDetails = (id) => router.push(`/doctor/details/${id}`)
</script>

<template>
  <div class="p-4 space-y-6">
    <div class="flex items-center gap-4">
      <Button variant="ghost" size="icon" @click="goBack" class="rounded-full">
        <ChevronLeft class="h-6 w-6" />
      </Button>
      <h1 class="text-xl font-bold capitalize">{{ type === 'available' ? 'Available Doctors' : `${type} Results` }}</h1>
    </div>

    <div class="space-y-4">
      <Card 
        v-for="doc in doctors" 
        :key="doc.id" 
        @click="viewDetails(doc.id)"
        class="border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden group"
      >
        <CardContent class="p-4 flex gap-4">
          <Avatar class="h-20 w-20 rounded-2xl border-2 border-primary/10 shrink-0">
            <AvatarImage :src="doctorAvatar" />
          </Avatar>
          <div class="flex-1 space-y-1">
            <div class="flex justify-between items-start">
              <h3 class="font-bold text-lg group-hover:text-primary transition-colors">{{ doc.name }}</h3>
              <div class="flex items-center gap-1 text-orange-500 font-bold text-sm">
                <Star class="h-4 w-4 fill-current" />
                {{ doc.rating }}
              </div>
            </div>
            <p class="text-primary font-medium text-sm">{{ doc.specialty }}</p>
            <div class="flex items-center gap-3 text-xs text-muted-foreground mt-2">
              <span class="flex items-center gap-1">
                <MapPin class="h-3 w-3" /> 2.5 km away
              </span>
              <span>•</span>
              <span>{{ doc.experience }} exp.</span>
            </div>
            <div class="flex items-center justify-between mt-3 pt-3 border-t border-border/50">
              <span class="font-bold text-foreground">฿{{ doc.price }}</span>
              <Button size="sm" variant="outline" class="rounded-full h-8 text-xs">View Details</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</template>
