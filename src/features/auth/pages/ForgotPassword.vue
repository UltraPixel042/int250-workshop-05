<script setup>
import Button from '@/shared/components/ui/Button.vue'
import Input from '@/shared/components/ui/Input.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
    <div class="w-full max-w-sm space-y-6">
      <div class="text-center">
        <h1 class="text-2xl font-bold">Forgot Password</h1>
        <p class="text-sm text-muted-foreground">Enter your email to reset your password</p>
      </div>
      
      <div class="space-y-4">
        <div class="space-y-2">
          <label class="text-sm font-medium">Email</label>
          <Input type="email" placeholder="email@example.com" />
        </div>
        <Button class="w-full h-11">Reset Password</Button>
      </div>
      
      <router-link to="/auth/sign-in" class="block text-center text-sm text-primary font-medium hover:underline">
        Back to Sign In
      </router-link>
    </div>
  </div>
</template>
