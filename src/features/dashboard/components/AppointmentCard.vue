<script setup>
import { Video, Calendar, Clock } from 'lucide-vue-next'
import Avatar from '@/shared/components/ui/Avatar.vue'
import AvatarFallback from '@/shared/components/ui/AvatarFallback.vue'
import AvatarImage from '@/shared/components/ui/AvatarImage.vue'
import Button from '@/shared/components/ui/Button.vue'
import Card from '@/shared/components/ui/Card.vue'
import CardContent from '@/shared/components/ui/CardContent.vue'
import CardHeader from '@/shared/components/ui/CardHeader.vue'
import CardTitle from '@/shared/components/ui/CardTitle.vue'
</script>

<template>
  <section class="px-4 pb-6">
    <h2 class="mb-3 text-sm font-semibold text-foreground">
      Upcoming Appointment
    </h2>
    <Card class="border-0 bg-primary shadow-lg overflow-hidden">
      <CardHeader class="pb-2">
        <div class="flex items-center justify-between">
          <CardTitle class="text-xs font-medium text-primary-foreground/80">
            Video Consultation
          </CardTitle>
          <Video class="h-4 w-4 text-primary-foreground/80" />
        </div>
      </CardHeader>
      <CardContent class="pb-4">
        <div class="flex items-center gap-3 mb-4">
          <Avatar class="h-14 w-14 border-2 border-primary-foreground/20">
            <AvatarImage src="/doctor-avatar.jpg" alt="Dr. Sarah Mitchell" />
            <AvatarFallback class="bg-primary-foreground/10 text-primary-foreground font-semibold">
              SM
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 class="font-semibold text-primary-foreground">
              Dr. Sarah Mitchell
            </h3>
            <p class="text-sm text-primary-foreground/70">
              Cardiologist
            </p>
          </div>
        </div>
        <div class="flex items-center gap-4 mb-4">
          <div class="flex items-center gap-1.5">
            <Calendar class="h-4 w-4 text-primary-foreground/70" />
            <span class="text-sm text-primary-foreground/90">
              Mon, May 15
            </span>
          </div>
          <div class="flex items-center gap-1.5">
            <Clock class="h-4 w-4 text-primary-foreground/70" />
            <span class="text-sm text-primary-foreground/90">
              10:30 AM
            </span>
          </div>
        </div>
        <Button
          class="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-medium"
          size="sm"
        >
          <Video class="mr-2 h-4 w-4" />
          Join Call
        </Button>
      </CardContent>
    </Card>
  </section>
</template>
