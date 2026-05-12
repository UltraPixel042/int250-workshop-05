<script setup>
import Button from '@/shared/components/ui/Button.vue'
import Input from '@/shared/components/ui/Input.vue'
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const handleLogin = () => {
  // Simple mock login: set a flag in localStorage
  localStorage.setItem('isAuthenticated', 'true')
  window.location.href = '/'
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
    <div class="w-full max-w-sm space-y-6">
      <div class="text-center">
        <h1 class="text-2xl font-bold">Sign In</h1>
        <p class="text-sm text-muted-foreground">Please enter your credentials to continue</p>
      </div>
      
      <div class="space-y-4">
        <div class="space-y-2">
          <label class="text-sm font-medium">Email</label>
          <Input v-model="email" type="email" placeholder="email@example.com" />
        </div>
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <label class="text-sm font-medium">Password</label>
            <router-link to="/auth/forgot-password" class="text-xs text-primary hover:underline">Forgot password?</router-link>
          </div>
          <Input v-model="password" type="password" />
        </div>
        <Button @click="handleLogin" class="w-full h-11">Sign In</Button>
      </div>
      
      <p class="text-center text-sm text-muted-foreground">
        Don't have an account? 
        <router-link to="/auth/sign-up" class="text-primary font-medium hover:underline">Register</router-link>
      </p>
    </div>
  </div>
</template>
