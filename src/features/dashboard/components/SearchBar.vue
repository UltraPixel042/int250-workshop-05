<script setup>
import { Search } from 'lucide-vue-next'
import Input from '@/shared/components/ui/Input.vue'
</script>

<template>
  <div class="px-4 pb-4">
    <div class="relative">
      <Search class="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search doctors, medicines, or symptoms..."
        class="h-12 w-full rounded-xl border-border bg-card pl-11 pr-4 text-sm placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
      />
    </div>
  </div>
</template>
