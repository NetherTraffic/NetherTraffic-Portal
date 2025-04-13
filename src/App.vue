<template>
  <div class="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
    <!-- 导航栏 -->
    <nav :class="['fixed w-full z-50 transition-all duration-500', 
      scrollY > 50 ? 'bg-slate-900/80 backdrop-blur-lg py-4' : 'bg-transparent py-6']">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <router-link 
          to="/" 
          class="text-3xl font-mojang bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          NetherTraffic
        </router-link>
        
        <!-- 桌面导航 -->
        <div class="hidden md:flex space-x-8 items-center">
          <template v-for="(item, index) in navItems" :key="index">
            <a 
              v-if="item.isExternal"
              :href="item.path"
              :target="item.target"
              rel="noopener noreferrer"
              class="text-slate-300 hover:text-white transition-colors font-medium text-lg relative group"
            >
              {{ item.name }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </a>
            <router-link 
              v-else
              :to="item.path"
              class="text-slate-300 hover:text-white transition-colors font-medium text-lg relative group"
            >
              {{ item.name }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full"></span>
            </router-link>
          </template>
          <button 
            @click="handleGetStarted"
            class="bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-2 rounded-full text-white shadow-lg hover:shadow-xl transition-shadow hover:scale-[1.02]"
          >
            开始使用
          </button>
        </div>

        <!-- 移动端菜单按钮 -->
        <button class="md:hidden text-slate-300" @click="isMobileMenuOpen = !isMobileMenuOpen">
          <Bars3Icon class="h-8 w-8" />
        </button>
      </div>
    </nav>

    <!-- 移动端菜单 -->
    <Transition name="slide">
      <div v-if="isMobileMenuOpen" class="md:hidden fixed inset-0 bg-slate-900/95 z-40 pt-20 backdrop-blur-sm">
        <div class="container mx-auto px-4 space-y-6">
          <template v-for="(item, index) in navItems" :key="index">
            <a 
              v-if="item.isExternal"
              :href="item.path"
              :target="item.target"
              rel="noopener noreferrer"
              class="block text-2xl text-slate-300 hover:text-white"
              @click="isMobileMenuOpen = false"
            >
              {{ item.name }}
            </a>
            <router-link 
              v-else
              :to="item.path"
              class="block text-2xl text-slate-300 hover:text-white"
              @click="isMobileMenuOpen = false"
            >
              {{ item.name }}
            </router-link>
          </template>
        </div>
      </div>
    </Transition>

    <!-- 路由视图 -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- 页脚 -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { Bars3Icon } from '@heroicons/vue/24/outline'
import Footer from '@/components/Footer.vue'

const router = useRouter()
const scrollY = ref(0)
const isMobileMenuOpen = ref(false)

const navItems = ref([
  { 
    name: '首页', 
    path: '/', 
    isExternal: false 
  },
  { 
    name: '控制台', 
    path: 'https://console.nethertraffic.com', 
    isExternal: true,
    target: '_self'
  },
  { 
    name: '文档', 
    path: 'https://docs.nethertraffic.com', 
    isExternal: true,
    target: '_blank'
  },
  { 
    name: 'QQ群', 
    path: 'https://qm.qq.com/q/6Qae6GUII8', 
    isExternal: true,
    target: '_blank'
  }
])

const handleScroll = () => {
  scrollY.value = window.scrollY
}

const handleGetStarted = () => {
  router.push('/')
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
