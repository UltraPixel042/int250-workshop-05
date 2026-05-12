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
  <div :class="cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', props.class)">
    <slot />
  </div>
</template>
