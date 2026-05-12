<script setup>
import { Stethoscope, Pill, Ambulance, FolderOpen } from 'lucide-vue-next'
import Card from '@/shared/components/ui/Card.vue'
import CardContent from '@/shared/components/ui/CardContent.vue'

import { useRouter } from 'vue-router'

const router = useRouter()

const actions = [
  {
    id: "consult",
    label: "Consult Doctor",
    icon: Stethoscope,
    bgColor: "bg-primary/10",
    iconColor: "text-primary",
    hoverBg: "hover:bg-primary/15",
    route: "/doctor"
  },
  {
    id: "medicine",
    label: "Buy Medicine",
    icon: Pill,
    bgColor: "bg-success/10",
    iconColor: "text-success",
    hoverBg: "hover:bg-success/15",
    route: "/medical"
  },
  {
    id: "ambulance",
    label: "Call Ambulance",
    icon: Ambulance,
    bgColor: "bg-emergency/10",
    iconColor: "text-emergency",
    hoverBg: "hover:bg-emergency/15",
    highlight: true,
    route: "/ambulance"
  },
  {
    id: "records",
    label: "Medical Records",
    icon: FolderOpen,
    bgColor: "bg-accent",
    iconColor: "text-accent-foreground",
    hoverBg: "hover:bg-accent/80",
    route: "/medical"
  },
];

const navigate = (route) => {
  if (route) router.push(route)
}
</script>

<template>
  <section class="px-4 pb-6">
    <h2 class="mb-3 text-sm font-semibold text-foreground">
      Quick Actions
    </h2>
    <div class="grid grid-cols-2 gap-3">
      <Card
        v-for="action in actions"
        :key="action.id"
        @click="navigate(action.route)"
        class="cursor-pointer border-0 shadow-sm transition-all duration-200"
        :class="[action.hoverBg, action.highlight ? 'ring-2 ring-emergency/30 hover:ring-emergency/50' : '']"
      >
        <CardContent class="flex flex-col items-center gap-3 p-4">
          <div
            class="flex h-12 w-12 items-center justify-center rounded-xl"
            :class="action.bgColor"
          >
            <component :is="action.icon" class="h-6 w-6" :class="action.iconColor" />
          </div>
          <span
            class="text-xs font-medium text-center"
            :class="action.highlight ? 'text-emergency' : 'text-foreground'"
          >
            {{ action.label }}
          </span>
        </CardContent>
      </Card>
    </div>
  </section>
</template>
