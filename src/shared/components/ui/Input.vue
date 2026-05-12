<script setup>
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

const props = defineProps({
  modelValue: [String, Number],
  type: {
    type: String,
    default: 'text'
  },
  class: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const cn = (...inputs) => twMerge(clsx(inputs))
</script>

<template>
  <input
    :type="props.type"
    :value="props.modelValue"
    @input="emit('update:modelValue', $event.target.value)"
    :class="cn('flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', props.class)"
  />
</template>
