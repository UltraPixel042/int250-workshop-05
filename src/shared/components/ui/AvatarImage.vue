<script setup>
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

const props = defineProps({
  src: String,
  alt: String,
  class: {
    type: String,
    default: ''
  }
})

const cn = (...inputs) => twMerge(clsx(inputs))
</script>

<template>
  <img :src="props.src" :alt="props.alt" :class="cn('absolute inset-0 aspect-square h-full w-full object-cover bg-background', props.class)" />
</template>
