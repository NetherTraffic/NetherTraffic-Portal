<template>
    <main class="pt-32 pb-20">
      <!-- Hero Section -->
      <section class="container mx-auto px-4 text-center mb-28">
        <h1 class="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r 
          from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          开启你的 Minecraft 联机新时代
        </h1>
        <p class="text-xl text-slate-400 mb-12 max-w-3xl mx-auto">
          Minecraft专业联机平台，支持多种联机方式
        </p>
<div class="flex flex-col items-center space-y-4">
  <div class="flex justify-center space-x-6">
    <!-- 注册按钮 -->
    <a
      href="https://www.himcbbs.com/register/"
      target="_blank"
      rel="noopener noreferrer"
      class="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl text-lg font-semibold text-white transition-all transform hover:scale-105 shadow-2xl shadow-cyan-500/30 inline-block cursor-pointer"
    >
      立即注册 →
    </a>

    <!-- 控制台登录按钮 -->
    <a
      href="https://console.nethertraffic.com"
      target="_blank"
      rel="noopener noreferrer"
      class="border border-slate-600 hover:border-cyan-500 px-8 py-4 rounded-xl text-lg font-semibold text-slate-300 transition-all hover:bg-slate-800/50 inline-block cursor-pointer"
    >
      登录控制台
    </a>
  </div>
  <div class="flex justify-center space-x-6">
    <p class="text-slate-400 text-xs md:text-sm text-center max-w-[280px]">
        联机平台需要使用 HiMCBBS 账户登录，使用前请先注册
    </p>  
  </div>
</div>
          
        <div class="mt-20 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="p-6 text-left">
            <div class="text-cyan-400 text-2xl mb-4">🎮 即刻联机</div>
            <h3 class="text-white text-xl mb-2">零门槛接入</h3>
            <p class="text-slate-400">使用专用客户端或终端工具即可使用</p>
          </div>
          <div class="p-6 text-left">
            <div class="text-purple-400 text-2xl mb-4">🔗 快捷高效</div>
            <h3 class="text-white text-xl mb-2">支持P2P直连</h3>
            <p class="text-slate-400">网络环境满足条件时可互相直连无需经过节点服务器中转</p>
          </div>
          <div class="p-6 text-left">
            <div class="text-green-400 text-2xl mb-4">🛡️ 功能强大</div>
            <h3 class="text-white text-xl mb-2">支持多场景使用</h3>
            <p class="text-slate-400">多种接入方式和功能支持，场景覆盖范围广</p>
          </div>
        </div>
      </section>
  
      <!-- 核心功能 -->
      <section class="container mx-auto px-4 mb-28">
        <h2 class="text-4xl font-bold text-white mb-16 text-center">
          核心功能
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            v-for="(feature, index) in features"
            :key="index"
            :icon="feature.icon"
            :title="feature.title"
            :description="feature.description"
          />
        </div>
      </section>
  
      <!-- 优势对比 -->
      <section class="container mx-auto px-4 mb-28">
        <h2 class="text-4xl font-bold text-white mb-16 text-center">
          为什么选择 NetherTraffic？
        </h2>
        <div class="grid lg:grid-cols-3 gap-8">
          <AdvantageItem 
            v-for="(item, index) in advantages"
            :key="index"
            :title="item.title"
            :description="item.description"
            :gradient="item.gradient"
          />
        </div>
      </section>
  
      <!-- 技术指标 -->
      <!-- <section class="container mx-auto px-4 mb-28">
        <div class="bg-slate-800 rounded-3xl p-12 text-center">
          <div class="grid md:grid-cols-4 gap-8">
            <div v-for="stat in stats" :key="stat.label" class="p-6">
              <div class="text-4xl font-bold bg-gradient-to-r 
                from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {{ stat.value }}
              </div>
              <div class="text-slate-400 text-sm">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </section> -->
    </main>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import FeatureCard from '@/components/FeatureCard.vue'
  import AdvantageItem from '@/components/AdvantageItem.vue'

  const router = useRouter()
  
  const features = ref([
    {
      icon: '🚀',
      title: '高度自定义管理',
      description: '使用Web控制台可创建和管理多个领域'
    },
    {
      icon: '🌐',
      title: '联机列表服务',
      description: '为用户提供联机信息整合，方便找到你需要的领域'
    },
    {
      icon: '🔧',
      title: '客户端接入',
      description: '客户端包含领域管理、接入和联机列表等功能'
    }
  ])
  
  const advantages = ref([
    {
      title: '使用场景广泛',
      description: '多种使用方式和高度自定义的设置选项',
      gradient: 'from-purple-500 to-cyan-500'
    },
    {
      title: '多节点支持',
      description: '多节点设计，降低连接延迟',
      gradient: 'from-green-500 to-cyan-400'
    },
    {
      title: '生态化运营',
      description: 'HiMCBBS生态提供强大支持',
      gradient: 'from-orange-500 to-pink-500'
    }
  ])
  
  const stats = ref([
    { value: '15ms', label: '平均延迟' },
    { value: '99.99%', label: '服务可用性' },
    { value: '8', label: '全球节点' },
    { value: '50W+', label: '活跃玩家' }
  ])
  
  </script>
  
  <style scoped>
  /* 自定义动画 */
  .feature-enter-active {
    transition: all 0.3s ease-out;
  }
  
  .feature-enter-from {
    opacity: 0;
    transform: translateY(20px);
  }
  </style>
