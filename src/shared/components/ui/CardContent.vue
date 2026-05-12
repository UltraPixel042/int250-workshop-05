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
  <div :class="cn('p-6 pt-0', props.class)">
    <slot />
  </div>
</template>
