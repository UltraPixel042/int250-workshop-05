<script setup>
import { ref } from "vue";

// Set the current step state, starting at 1
const currentStep = ref(1);

// Define the steps exactly as shown in the provided flow image
const steps = [
  { id: 1, title: "Ambulance" },
  { id: 2, title: "Select location" },
  { id: 3, title: "Available ambulance" },
  { id: 4, title: "Choose An Ambulance" },
  { id: 5, title: "Call ambulance" },
];

// Function to go to the next step
const goToNextStep = () => {
  if (currentStep.value < steps.length) {
    currentStep.value++;
  }
};

// Function to go back to the previous step
const goToPrevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};
</script>

<template>
  <div class="py-8 text-white min-h-screen bg-white">
    <div class="bg-[#CA242A] p-6 rounded-t-3xl shadow-md">
      <div class="flex justify-start items-center gap-2 text-white/90">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-exclamation-triangle"
          viewBox="0 0 16 16"
        >
          <path
            d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.15.15 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.2.2 0 0 1-.054.06.1.1 0 0 1-.066.017H1.146a.1.1 0 0 1-.066-.017.2.2 0 0 1-.054-.06.18.18 0 0 1 .002-.183L7.884 2.073a.15.15 0 0 1 .054-.057m1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767z"
          />
          <path
            d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"
          />
        </svg>
        <span class="text-xs font-semibold tracking-wider">EMERGENCY SERVICES</span>
      </div>
      <h1 class="text-2xl font-bold py-2 text-white">Call Ambulance</h1>
      <p class="text-white/80 text-sm">Get emergency medical help quickly</p>
    </div>

    <div class="w-full py-8 px-2 bg-white border-b border-gray-100 shadow-sm overflow-hidden">
      <div class="flex items-center justify-between w-full max-w-lg mx-auto relative px-4">
        <div class="absolute top-4 left-6 right-6 h-1 bg-gray-100 rounded-full -z-0"></div>
        
        <div 
          class="absolute top-4 left-6 h-1 bg-[#CA242A] rounded-full transition-all duration-500 ease-in-out -z-0"
          :style="{ width: `calc(${((currentStep - 1) / (steps.length - 1)) * 100}% - 2rem)` }"
        ></div>

        <div v-for="step in steps" :key="step.id" class="flex flex-col items-center relative z-10">
          <div 
            :class="[
              'w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-300 shadow-sm',
              currentStep >= step.id 
                ? 'bg-[#CA242A] border-[#CA242A] text-white' 
                : 'bg-white border-gray-200 text-gray-400'
            ]"
          >
            <span v-if="currentStep > step.id">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.42-6.446z"/>
              </svg>
            </span>
            <span v-else>{{ step.id }}</span>
          </div>
          
          <div class="flex flex-col items-center mt-2 absolute top-8 w-16 text-center">
            <span :class="['text-[9px] font-bold leading-tight', currentStep >= step.id ? 'text-[#CA242A]' : 'text-gray-400']">
              {{ step.title }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-6 p-5 mt-4 text-black min-h-[400px]">
      
      <div v-if="currentStep === 1" class="flex flex-col gap-6 animate-fade-in">
        <div class="flex flex-col justify-center items-center gap-5 border border-[#F4D3D4] rounded-2xl px-5 py-8 bg-white shadow-sm">
          <div class="rounded-full text-[#CA242A] p-6 bg-[#F9E9E9] w-fit shadow-inner">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-truck w-12 h-12" viewBox="0 0 16 16">
              <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
            </svg>
          </div>
          <div class="flex flex-col justify-center items-center text-center px-4">
            <h2 class="text-xl font-extrabold text-gray-800 mb-2">Need an Ambulance?</h2>
            <p class="text-gray-500 text-sm leading-relaxed">We'll help you find the nearest available ambulance and connect you.</p>
          </div>
          <button @click="goToNextStep" class="mt-2 flex justify-center items-center gap-3 bg-[#CA242A] text-white px-8 py-4 w-full rounded-xl text-lg font-bold shadow-lg shadow-red-200 active:scale-95 transition-transform">
            Start Request
          </button>
        </div>
      </div>

      <div v-else-if="currentStep === 2" class="flex flex-col gap-6 animate-fade-in bg-gray-50 p-6 rounded-2xl border border-gray-100">
         <div class="text-center mb-2">
            <h2 class="text-xl font-extrabold text-gray-800">Select Location</h2>
         </div>
         <div class="w-full h-40 bg-blue-100 rounded-xl flex items-center justify-center border-2 border-dashed border-blue-300 text-blue-500 font-bold">
            [ Map Area - Pin Location ]
         </div>
         <div class="flex gap-3 mt-4">
            <button @click="goToPrevStep" class="flex-1 py-3 text-gray-600 bg-white border border-gray-300 rounded-xl font-bold active:scale-95">Back</button>
            <button @click="goToNextStep" class="flex-1 py-3 text-white bg-[#CA242A] rounded-xl font-bold active:scale-95">Confirm</button>
         </div>
      </div>

      <div v-else-if="currentStep === 3" class="flex flex-col gap-6 animate-fade-in bg-gray-50 p-6 rounded-2xl border border-gray-100">
         <div class="text-center mb-2">
            <h2 class="text-xl font-extrabold text-gray-800">Available Ambulances</h2>
            <p class="text-gray-500 text-sm">Searching for nearby hospitals...</p>
         </div>
         <div class="flex flex-col gap-3">
             <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm animate-pulse">Scanning nearby area...</div>
         </div>
         <div class="flex gap-3 mt-4">
            <button @click="goToPrevStep" class="flex-1 py-3 text-gray-600 bg-white border border-gray-300 rounded-xl font-bold active:scale-95">Back</button>
            <button @click="goToNextStep" class="flex-1 py-3 text-white bg-[#CA242A] rounded-xl font-bold active:scale-95">See Results</button>
         </div>
      </div>

      <div v-else-if="currentStep === 4" class="flex flex-col gap-6 animate-fade-in bg-gray-50 p-6 rounded-2xl border border-gray-100">
         <div class="text-center mb-2">
            <h2 class="text-xl font-extrabold text-gray-800">Choose An Ambulance</h2>
         </div>
         <div class="flex flex-col gap-3">
             <div class="bg-white p-4 rounded-lg border-2 border-[#CA242A] shadow-sm flex justify-between items-center cursor-pointer">
                 <div>
                     <p class="font-bold">City Hospital Ambulance</p>
                     <p class="text-xs text-gray-500">2.5 km away • 5 mins</p>
                 </div>
                 <span class="text-[#CA242A]">Selected</span>
             </div>
             <div class="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex justify-between items-center opacity-60">
                 <div>
                     <p class="font-bold">Private Care Unit</p>
                     <p class="text-xs text-gray-500">4.0 km away • 10 mins</p>
                 </div>
             </div>
         </div>
         <div class="flex gap-3 mt-4">
            <button @click="goToPrevStep" class="flex-1 py-3 text-gray-600 bg-white border border-gray-300 rounded-xl font-bold active:scale-95">Back</button>
            <button @click="goToNextStep" class="flex-1 py-3 text-white bg-[#CA242A] rounded-xl font-bold active:scale-95">Next</button>
         </div>
      </div>

      <div v-else-if="currentStep === 5" class="flex flex-col gap-6 animate-fade-in bg-[#CA242A] p-6 rounded-2xl text-white shadow-lg text-center items-center justify-center">
         <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-telephone-outbound mb-2" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5"/>
         </svg>
         <h2 class="text-3xl font-extrabold mb-1">Calling...</h2>
         <p class="text-white/80">Connecting to City Hospital Ambulance</p>
         <button @click="currentStep = 1" class="mt-6 py-3 px-8 text-[#CA242A] bg-white rounded-xl font-bold active:scale-95">Cancel Call (Reset)</button>
      </div>

    </div>

    <div class="p-5">
      <div class="flex justify-between items-center border border-[#FAE689] rounded-2xl px-5 py-6 bg-[#FEFBEB] shadow-sm">
        <div class="bg-[#FDECA6] p-3 rounded-full shadow-inner">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-telephone text-[#D97500] w-6 h-6"
          viewBox="0 0 16 16"
          >
          <path
          d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
          />
        </svg>
      </div>
      
          <div class="flex flex-col ml-3 grow">
            <span class="text-[11px] font-semibold text-[#B35200] uppercase tracking-wide">For immediate emergencies</span>
            <span class="font-extrabold text-2xl text-[#904004]">Call 1669</span>
          </div>

          <a href="tel:1669" class="flex justify-center items-center gap-2 border-2 border-[#D97500] text-[#904004] bg-white rounded-xl px-4 py-2 hover:bg-[#FDECA6] transition-colors active:scale-95 font-bold shadow-sm">
            <span class="text-sm">Call Now</span>
          </a>
        </div>
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