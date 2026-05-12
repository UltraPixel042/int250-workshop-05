<script setup>
import Header from '@/shared/components/Header.vue'
import BottomNav from '@/shared/components/BottomNav.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

// Decide if we should show navs. 
// User said "every page", but usually auth pages are excluded.
// However, I will show them everywhere as requested "ทุกไฟล์ๆๆๆ"
// unless I detect it looks broken.
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
