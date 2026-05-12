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
  <div :class="cn('flex flex-col space-y-1.5 p-6', props.class)">
    <slot />
  </div>
</template>
