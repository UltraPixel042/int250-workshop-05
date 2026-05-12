<script setup>
import { useRouter } from 'vue-router'
import { PhoneOff, Mic, Video, MessageSquare, MoreHorizontal } from 'lucide-vue-next'
import Avatar from '@/shared/components/ui/Avatar.vue'
import AvatarImage from '@/shared/components/ui/AvatarImage.vue'
import Button from '@/shared/components/ui/Button.vue'
import doctorAvatar from '@/assets/doctor-avartar.png'

const router = useRouter()
const endCall = () => router.push('/')
</script>

<template>
  <div class="h-screen bg-slate-900 text-white flex flex-col overflow-hidden relative">
    <!-- Doctor Video (Mock Background) -->
    <div class="flex-1 flex items-center justify-center bg-slate-800">
      <div class="text-center space-y-4 animate-pulse">
        <Avatar class="h-32 w-32 border-4 border-primary mx-auto">
          <AvatarImage :src="doctorAvatar" />
        </Avatar>
        <h2 class="text-2xl font-bold">Dr. Sarah Mitchell</h2>
        <p class="text-primary animate-pulse">Connecting...</p>
      </div>
    </div>

    <!-- User Video (Small PIP) -->
    <div class="absolute top-6 right-6 h-40 w-28 bg-slate-700 rounded-2xl border-2 border-white/20 shadow-2xl overflow-hidden">
      <div class="h-full w-full flex items-center justify-center text-xs opacity-50">You</div>
    </div>

    <!-- Call Controls -->
    <div class="p-8 pb-12 bg-linear-to-t from-slate-950/80 to-transparent">
      <div class="flex justify-around items-center max-w-sm mx-auto">
        <Button variant="ghost" size="icon" class="h-14 w-14 rounded-full bg-white/10 hover:bg-white/20">
          <Mic class="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" class="h-14 w-14 rounded-full bg-white/10 hover:bg-white/20">
          <Video class="h-6 w-6" />
        </Button>
        <Button @click="endCall" variant="destructive" size="icon" class="h-16 w-16 rounded-full shadow-lg shadow-destructive/40">
          <PhoneOff class="h-8 w-8" />
        </Button>
        <Button variant="ghost" size="icon" class="h-14 w-14 rounded-full bg-white/10 hover:bg-white/20">
          <MessageSquare class="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" class="h-14 w-14 rounded-full bg-white/10 hover:bg-white/20">
          <MoreHorizontal class="h-6 w-6" />
        </Button>
      </div>
    </div>

    <!-- Status Bar -->
    <div class="absolute top-8 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur px-4 py-1.5 rounded-full text-xs font-mono">
      00:15
    </div>
  </div>
</template>
