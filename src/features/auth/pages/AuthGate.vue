<script setup>
import Button from '@/shared/components/ui/Button.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-6 bg-background text-center">
    <h1 class="text-3xl font-bold mb-8">Welcome to CureX</h1>
    <p class="text-muted-foreground mb-8 text-lg">Do you already have an account?</p>
    <div class="flex flex-col w-full max-w-xs gap-4">
      <router-link to="/auth/sign-in" v-slot="{ navigate }">
        <Button @click="navigate" class="w-full h-12 text-lg">Yes, Sign In</Button>
      </router-link>
      <router-link to="/auth/sign-up" v-slot="{ navigate }">
        <Button @click="navigate" variant="outline" class="w-full h-12 text-lg">No, Register</Button>
      </router-link>
    </div>
  </div>
</template>
