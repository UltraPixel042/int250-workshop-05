<script setup>
import { 
  ChevronRight, 
  Pill, 
  FileText, 
  Calendar, 
  CreditCard, 
  Bell, 
  Info, 
  HelpCircle, 
  ShieldCheck, 
  MessageSquare, 
  LogOut,
} from 'lucide-vue-next'
import Avatar from '@/shared/components/ui/Avatar.vue'
import AvatarImage from '@/shared/components/ui/AvatarImage.vue'
import Button from '@/shared/components/ui/Button.vue'
import Card from '@/shared/components/ui/Card.vue'
import CardContent from '@/shared/components/ui/CardContent.vue'
import avatarUrl from '@/assets/avartar.png'

const menuGroups = [
  {
    title: 'Medical Records',
    items: [
      { label: 'My Prescription', icon: Pill, color: 'text-blue-500' },
      { label: 'Medical Reports', icon: FileText, color: 'text-teal-500' },
      { label: 'Appointment Schedule', icon: Calendar, color: 'text-indigo-500' },
    ]
  },
  {
    title: 'Payments & Activity',
    items: [
      { label: 'Transaction History', icon: CreditCard, color: 'text-orange-500' },
      { label: 'Notifications', icon: Bell, color: 'text-yellow-500' },
    ]
  },
  {
    title: 'Support & About',
    items: [
      { label: 'About App', icon: Info, color: 'text-gray-500' },
      { label: 'FAQ', icon: HelpCircle, color: 'text-gray-500' },
      { label: 'Privacy Policy', icon: ShieldCheck, color: 'text-gray-500' },
      { label: 'Contact Us', icon: MessageSquare, color: 'text-gray-500' },
    ]
  }
]

const handleLogout = () => {
  localStorage.removeItem('isAuthenticated')
  window.location.href = '/auth/gate'
}
</script>

<template>
  <div class="space-y-6 pb-6 px-4">
    <!-- User Info Card (Hero) -->
    <Card class="border-none shadow-sm bg-card overflow-hidden">
      <CardContent class="pt-6 pb-6 text-center">
        <div class="flex flex-col items-center">
          <Avatar class="h-24 w-24 border-4 border-primary/10 mb-4">
            <AvatarImage :src="avatarUrl" alt="John Doe" />
          </Avatar>
          <h2 class="text-xl font-bold text-foreground">John Doe</h2>
          <p class="text-sm text-muted-foreground mb-4">johndoe@example.com | +1 234 567 890</p>
          <Button variant="outline" size="sm" class="rounded-full px-6 border-primary text-primary hover:bg-primary/5">
            Edit Profile
          </Button>
        </div>
      </CardContent>
    </Card>

    <!-- Quick Health Dashboard -->
    <div class="space-y-3">
      <h3 class="text-sm font-semibold text-foreground px-1 uppercase tracking-wider">Quick Health Dashboard</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <!-- Upcoming Appointment -->
        <Card class="bg-primary text-primary-foreground border-none">
          <CardContent class="p-4 flex items-start gap-3">
            <div class="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <Calendar class="h-5 w-5" />
            </div>
            <div>
              <p class="text-xs text-primary-foreground/80 font-medium uppercase">Next Appointment</p>
              <h4 class="font-bold">Dr. Sarah Mitchell</h4>
              <p class="text-sm opacity-90">May 15, 10:30 AM</p>
            </div>
          </CardContent>
        </Card>

        <!-- Medicine Reminder -->
        <Card class="bg-teal-600 text-white border-none">
          <CardContent class="p-4 flex items-start gap-3">
            <div class="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <Pill class="h-5 w-5" />
            </div>
            <div>
              <p class="text-xs text-white/80 font-medium uppercase">Medicine Reminder</p>
              <h4 class="font-bold">Metformin 500mg</h4>
              <p class="text-sm opacity-90">After breakfast (8:30 AM)</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>

    <!-- Main Menu List -->
    <div class="space-y-6">
      <div v-for="group in menuGroups" :key="group.title" class="space-y-2">
        <h3 class="text-xs font-bold text-muted-foreground uppercase tracking-widest px-1">
          {{ group.title }}
        </h3>
        <Card class="border-none shadow-sm divide-y divide-border overflow-hidden">
          <div 
            v-for="item in group.items" 
            :key="item.label"
            class="flex items-center justify-between p-4 bg-card active:bg-accent transition-colors cursor-pointer"
          >
            <div class="flex items-center gap-3">
              <div :class="['p-2 rounded-lg bg-secondary', item.color]">
                <component :is="item.icon" class="h-5 w-5" />
              </div>
              <span class="font-medium text-foreground">{{ item.label }}</span>
            </div>
            <ChevronRight class="h-5 w-5 text-muted-foreground" />
          </div>
        </Card>
      </div>

      <!-- Actions -->
      <div class="space-y-2">
        <h3 class="text-xs font-bold text-muted-foreground uppercase tracking-widest px-1">
          Actions
        </h3>
        <Card class="border-none shadow-sm overflow-hidden">
          <div 
            @click="handleLogout"
            class="flex items-center justify-between p-4 bg-card active:bg-destructive/5 transition-colors cursor-pointer group"
          >
            <div class="flex items-center gap-3">
              <div class="p-2 rounded-lg bg-destructive/10 text-destructive">
                <LogOut class="h-5 w-5" />
              </div>
              <span class="font-medium text-destructive">Log Out</span>
            </div>
            <ChevronRight class="h-5 w-5 text-muted-foreground group-active:text-destructive" />
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>
