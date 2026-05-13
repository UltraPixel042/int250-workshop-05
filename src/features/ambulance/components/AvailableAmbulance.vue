<script setup>
defineEmits(["next", "prev"]);
</script>

<template>
  <div class="flex flex-col gap-6 animate-fade-in bg-gray-50 p-6 rounded-2xl border border-gray-100">
    <div class="text-center mb-2">
      <h2 class="text-xl font-extrabold text-gray-800">Available Ambulances</h2>
      <p class="text-gray-500 text-sm">Searching for nearby hospitals...</p>
    </div>
    <div class="flex flex-col gap-3">
      <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm animate-pulse">Scanning nearby area...</div>
    </div>
    <div class="flex gap-3 mt-4">
      <button @click="$emit('prev')" class="flex-1 py-3 text-gray-600 bg-white border border-gray-300 rounded-xl font-bold active:scale-95 cursor-pointer hover:bg-slate-100">Back</button>
      <button @click="$emit('next')" class="flex-1 py-3 text-white bg-[#CA242A] rounded-xl font-bold active:scale-95 cursor-pointer hover:bg-red-600">See Results</button>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.4s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
