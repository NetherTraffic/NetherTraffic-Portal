<template>
    <div class="group relative p-8 rounded-2xl bg-slate-800 transition-all hover:bg-slate-700/50 hover:transform hover:-translate-y-2">
      <div class="absolute inset-0 border border-slate-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div class="text-6xl mb-6 transition-transform group-hover:scale-110">
        {{ icon }}
      </div>
      <h3 class="text-2xl font-bold text-white mb-4">{{ title }}</h3>
      <p class="text-slate-400 leading-relaxed">{{ description }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    icon: String,
    title: String,
    description: String
  })
  </script>