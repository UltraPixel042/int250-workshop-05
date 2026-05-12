<script setup>
import Header from '../components/Header.vue'
import SearchBar from '../components/SearchBar.vue'
import QuickActions from '../components/QuickActions.vue'
import AppointmentCard from '../components/AppointmentCard.vue'
import MedicineReminder from '../components/MedicineReminder.vue'
import BottomNav from '../components/BottomNav.vue'
</script>

<template>
  <div class="min-h-screen bg-background">
    <main class="mx-auto max-w-md pb-20">
      <Header />
      <SearchBar />
      <QuickActions />
      <AppointmentCard />
      <MedicineReminder />
    </main>
    <BottomNav />
  </div>
</template>
