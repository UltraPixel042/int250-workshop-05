<script setup>
import Header from '@/shared/components/Header.vue'
import BottomNav from '@/shared/components/BottomNav.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const showNav = computed(() => {
  // If you want to exclude auth pages, you can uncomment the line below:
  // return !route.path.startsWith('/auth')
  return true
})
</script>

<template>
  <div class="min-h-screen bg-background">
    <Header v-if="showNav" />
    <main class="mx-auto max-w-md" :class="{ 'pb-20': showNav }">
      <router-view />
    </main>
    <BottomNav v-if="showNav" />
  </div>
</template>

<style>
/* Base styles */
</style>
