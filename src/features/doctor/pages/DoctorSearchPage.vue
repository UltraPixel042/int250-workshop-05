<script setup>
import { 
  Stethoscope, 
  Building2, 
  Activity, 
  Video, 
  Search, 
  ChevronRight 
} from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import Card from '@/shared/components/ui/Card.vue'
import CardContent from '@/shared/components/ui/CardContent.vue'
import Input from '@/shared/components/ui/Input.vue'
import Button from '@/shared/components/ui/Button.vue'

const router = useRouter()

const searchCategories = [
  { id: 'specialist', label: 'Specialist Doctor', icon: Stethoscope, color: 'text-blue-500', bg: 'bg-blue-50' },
  { id: 'department', label: 'Department', icon: Building2, color: 'text-teal-500', bg: 'bg-teal-50' },
  { id: 'symptoms', label: 'Symptoms', icon: Activity, color: 'text-orange-500', bg: 'bg-orange-50' },
]

const navigateToCategory = (type) => {
  router.push(`/doctor/list/${type}`)
}

const seeDoctorNow = () => {
  router.push('/doctor/list/available')
}
</script>

<template>
  <div class="p-4 space-y-6">
    <div class="space-y-2">
      <h1 class="text-2xl font-bold text-foreground">Find Your Doctor</h1>
      <p class="text-muted-foreground">Search by category or consult immediately.</p>
    </div>

    <!-- Search Bar -->
    <div class="relative">
      <Search class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input placeholder="Search doctor, specialty..." class="pl-10 h-12 rounded-xl" />
    </div>

    <!-- See Doctor Now Banner -->
    <Card @click="seeDoctorNow" class="bg-primary text-primary-foreground border-none shadow-lg cursor-pointer overflow-hidden active:scale-[0.98] transition-transform">
      <CardContent class="p-6 flex items-center justify-between">
        <div class="space-y-1">
          <h2 class="text-xl font-bold flex items-center gap-2">
            <Video class="h-6 w-6" />
            See Doctor Now
          </h2>
          <p class="text-primary-foreground/80 text-sm">Available doctors online for instant consult.</p>
        </div>
        <ChevronRight class="h-6 w-6 opacity-50" />
      </CardContent>
    </Card>

    <!-- Categories Grid -->
    <div class="grid grid-cols-1 gap-4">
      <h3 class="text-sm font-bold text-muted-foreground uppercase tracking-widest px-1">Categories</h3>
      <div 
        v-for="cat in searchCategories" 
        :key="cat.id"
        @click="navigateToCategory(cat.id)"
        class="flex items-center justify-between p-4 bg-card rounded-2xl border border-border cursor-pointer active:bg-accent transition-colors"
      >
        <div class="flex items-center gap-4">
          <div :class="['p-3 rounded-xl', cat.bg, cat.color]">
            <component :is="cat.icon" class="h-6 w-6" />
          </div>
          <span class="font-semibold text-lg">{{ cat.label }}</span>
        </div>
        <ChevronRight class="h-5 w-5 text-muted-foreground" />
      </div>
    </div>
  </div>
</template>
