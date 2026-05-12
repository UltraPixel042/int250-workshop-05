<script setup>
import { Home, Stethoscope, Pill, Ambulance, User } from 'lucide-vue-next'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const navItems = [
  { id: "home", label: "Home", icon: Home, route: "/" },
  { id: "doctors", label: "Doctors", icon: Stethoscope, route: "/doctor" },
  { id: "medicine", label: "Medicine", icon: Pill, route: "/medical" },
  { id: "ambulance", label: "Ambulance", icon: Ambulance, route: "/medical" },
  { id: "profile", label: "Profile", icon: User, route: "/medical" },
];

const activeTab = ref("home");

const navigate = (item) => {
  activeTab.value = item.id
  if (item.route) router.push(item.route)
}
</script>

<template>
  <nav
    class="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-md"
    role="navigation"
    aria-label="Main navigation"
  >
    <div class="mx-auto flex h-16 max-w-md items-center justify-around px-2">
      <button
        v-for="item in navItems"
        :key="item.id"
        @click="navigate(item)"
        class="flex flex-1 flex-col items-center gap-1 py-2 transition-colors"
        :class="[
          activeTab === item.id
            ? item.id === 'ambulance'
              ? 'text-emergency'
              : 'text-primary'
            : 'text-muted-foreground hover:text-foreground'
        ]"
        :aria-label="item.label"
        :aria-current="activeTab === item.id ? 'page' : undefined"
      >
        <div
          class="flex h-8 w-8 items-center justify-center rounded-lg transition-colors"
          :class="[
            activeTab === item.id
              ? item.id === 'ambulance'
                ? 'bg-emergency/10'
                : 'bg-primary/10'
              : ''
          ]"
        >
          <component 
            :is="item.icon" 
            class="h-5 w-5" 
            :class="item.id === 'ambulance' && activeTab === item.id ? 'text-emergency' : ''" 
          />
        </div>
        <span class="text-[10px] font-medium">{{ item.label }}</span>
      </button>
    </div>
    <!-- Safe area for iOS devices -->
    <div class="h-safe-area-inset-bottom bg-card" />
  </nav>
</template>
