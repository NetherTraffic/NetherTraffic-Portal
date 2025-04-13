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
        <div class="flex justify-center space-x-6">
            <a
                href="https://www.himcbbs.com/register"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl text-lg font-semibold text-white transition-all transform hover:scale-105 shadow-2xl shadow-cyan-500/30 inline-block cursor-pointer"
            >
                立即注册 →
            </a>
            <a
                href="https://console.nethertraffic.com"
                target="_blank"
                  rel="noopener noreferrer"
                  class="border border-slate-600 hover:border-cyan-500 px-8 py-4 rounded-xl text-lg font-semibold text-slate-300 transition-all hover:bg-slate-800/50 inline-block cursor-pointer"
            >
              登录控制台
            </a>
        </div>
          
        <p class="text-slate-400 text-xs md:text-sm text-center max-w-[280px]">
            联机平台需要使用 HiMCBBS 账户登录，使用前请先注册
        </p>
          
        <div class="mt-20 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div class="p-6 text-left">
            <div class="text-cyan-400 text-2xl mb-4">🎮 即刻联机</div>
            <h3 class="text-white text-xl mb-2">零门槛接入</h3>
            <p class="text-slate-400">无需复杂配置，3步完成服务器部署</p>
          </div>
          <div class="p-6 text-left">
            <div class="text-purple-400 text-2xl mb-4">🌍 全球加速</div>
            <h3 class="text-white text-xl mb-2">多节点覆盖</h3>
            <p class="text-slate-400">国内BGP+海外优质线路智能切换</p>
          </div>
          <div class="p-6 text-left">
            <div class="text-green-400 text-2xl mb-4">🛡️ 安全可靠</div>
            <h3 class="text-white text-xl mb-2">企业级防护</h3>
            <p class="text-slate-400">DDoS防御+数据加密双重保障</p>
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
      <section class="container mx-auto px-4 mb-28">
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
      </section>
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
      title: '一键部署',
      description: '支持主流服务端快速导入，自动完成环境配置和优化'
    },
    {
      icon: '🌐',
      title: '全球互联',
      description: '智能路由选择最佳节点，跨国联机延迟降低60%'
    },
    {
      icon: '🔧',
      title: '全能工具',
      description: '集成地图编辑器、插件市场等全套生态工具'
    }
  ])
  
  const advantages = ref([
    {
      title: '超低延迟',
      description: '全国8大BGP节点，平均延迟<35ms',
      gradient: 'from-purple-500 to-cyan-500'
    },
    {
      title: '99.99% SLA',
      description: '基于K8s的分布式架构，自动故障转移',
      gradient: 'from-green-500 to-cyan-400'
    },
    {
      title: '智能运维',
      description: '7×24小时监控告警，自动伸缩资源',
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
