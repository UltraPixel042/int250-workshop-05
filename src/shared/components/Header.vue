<script setup>
import { Bell } from 'lucide-vue-next'
import Avatar from '@/shared/components/ui/Avatar.vue'
import AvatarFallback from '@/shared/components/ui/AvatarFallback.vue'
import AvatarImage from '@/shared/components/ui/AvatarImage.vue'
import Button from '@/shared/components/ui/Button.vue'
import avatarUrl from '@/assets/avartar.png'
</script>

<template>
  <header class="mx-auto max-w-md flex items-center justify-between px-4 py-4">
    <div class="flex items-center gap-3">
      <Avatar class="h-12 w-12 border-2 border-primary/20">
        <AvatarImage :src="avatarUrl" alt="User avatar" />
      </Avatar>
      <div>
        <p class="text-sm text-muted-foreground">Good Morning</p>
        <h1 class="text-lg font-semibold text-foreground">John Doe</h1>
      </div>
    </div>
    <Button
      variant="ghost"
      size="icon"
      class="relative h-10 w-10 rounded-full bg-card hover:bg-accent"
      aria-label="Notifications"
    >
      <Bell class="h-5 w-5 text-foreground" />
      <span class="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground">
        3
      </span>
    </Button>
  </header>
</template>
