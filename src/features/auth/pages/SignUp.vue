<script setup>
import Button from '@/shared/components/ui/Button.vue'
import Input from '@/shared/components/ui/Input.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
    <div class="w-full max-w-sm space-y-6">
      <div class="text-center">
        <h1 class="text-2xl font-bold">Create Account</h1>
        <p class="text-sm text-muted-foreground">Join CureX today</p>
      </div>
      
      <div class="space-y-4">
        <div class="space-y-2">
          <label class="text-sm font-medium">Full Name</label>
          <Input placeholder="John Doe" />
        </div>
        <div class="space-y-2">
          <label class="text-sm font-medium">Email</label>
          <Input type="email" placeholder="email@example.com" />
        </div>
        <div class="space-y-2">
          <label class="text-sm font-medium">Password</label>
          <Input type="password" />
        </div>
        <Button class="w-full h-11">Register Now</Button>
      </div>
      
      <p class="text-center text-sm text-muted-foreground">
        Already have an account? 
        <router-link to="/auth/sign-in" class="text-primary font-medium hover:underline">Sign In</router-link>
      </p>
    </div>
  </div>
</template>
