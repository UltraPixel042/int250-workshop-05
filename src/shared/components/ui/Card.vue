<script setup>
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})

const cn = (...inputs) => twMerge(clsx(inputs))
</script>

<template>
  <div :class="cn('rounded-xl border bg-card text-card-foreground shadow-sm', props.class)">
    <slot />
  </div>
</template>
