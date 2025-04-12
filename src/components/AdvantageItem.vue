<template>
    <div class="p-8 rounded-xl bg-gradient-to-br" :class="gradient">
      <div class="bg-slate-900/80 p-8 rounded-xl backdrop-blur-sm h-full">
        <h3 class="text-2xl font-bold text-white mb-4">{{ title }}</h3>
        <p class="text-slate-300 leading-relaxed">{{ description }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    title: String,
    description: String,
    gradient: String
  })
  </script>