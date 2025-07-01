<template>
  <footer class="bg-gradient-to-b from-slate-900 to-slate-800 border-t border-slate-700/50">
    <div class="container mx-auto px-4 py-12">
      <!-- 主要区块 -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- 法律声明 -->
        <div class="space-y-3">
          <h3 class="text-lg font-semibold text-cyan-400 mb-4 border-l-4 border-cyan-500 pl-3">相关文档</h3>
          <nav class="space-y-2">
            <!-- <a href="/privacy" class="flex items-center text-slate-300 hover:text-white transition-colors group">
              <DocumentTextIcon class="w-4 h-4 mr-2 text-purple-400 group-hover:text-cyan-400 transition-colors" />
              隐私政策
            </a>
            <a href="/terms" class="flex items-center text-slate-300 hover:text-white transition-colors group">
              <ShieldCheckIcon class="w-4 h-4 mr-2 text-purple-400 group-hover:text-cyan-400 transition-colors" />
              服务条款
            </a> -->
            <a href="https://docs.nethertraffic.com" class="flex items-center text-slate-300 hover:text-white transition-colors group">
              <BookOpenIcon class="w-4 h-4 mr-2 text-purple-400 group-hover:text-cyan-400 transition-colors" />
              使用文档
            </a>
          </nav>
        </div>

        <!-- 支持服务 -->
        <div class="space-y-3">
          <h3 class="text-lg font-semibold text-cyan-400 mb-4 border-l-4 border-cyan-500 pl-3">支持服务</h3>
          <div class="space-y-2">
            <div class="text-slate-300 flex items-center">
              <EnvelopeIcon class="w-4 h-4 mr-2 text-purple-400" />
              QQ交流群：881529005
            </div>
            <!-- <div class="text-slate-300 flex items-center">
              <EnvelopeIcon class="w-4 h-4 mr-2 text-purple-400" />
              support@nethertraffic.com
            </div>
            <a href="/report" class="flex items-center text-slate-300 hover:text-white transition-colors">
              <FlagIcon class="w-4 h-4 mr-2 text-purple-400" />
              公正廉洁举报
            </a> -->
          </div>
        </div>

        <!-- 企业信息 -->
        <!-- <div class="space-y-3">
          <h3 class="text-lg font-semibold text-cyan-400 mb-4 border-l-4 border-cyan-500 pl-3">企业信息</h3>
          <div class="space-y-2">
            <a href="/careers" class="block text-slate-300 hover:text-white transition-colors">加入我们</a>
            <a href="/partners" class="block text-slate-300 hover:text-white transition-colors">合作伙伴</a>
            <a href="/status" class="block text-slate-300 hover:text-white transition-colors">服务状态</a>
          </div>
        </div> -->

        <!-- 社交平台 -->
        <div class="space-y-3">
          <h3 class="text-lg font-semibold text-cyan-400 mb-4 border-l-4 border-cyan-500 pl-3">关注我们</h3>
          <div class="flex space-x-4">
            <a href="https://www.bilibili.com" target="_blank" class="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors">
              <img src="/icons/bilibili.svg" class="w-6 h-6" alt="哔哩哔哩">
            </a>
            <a href="https://github.com" target="_blank" class="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors">
              <img src="/icons/github.svg" class="w-6 h-6" alt="GitHub">
            </a>
            <a href="/wechat" class="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors">
              <img src="/icons/wechat.svg" class="w-6 h-6" alt="微信公众号">
            </a>
          </div>
        </div>
      </div>

      <!-- 备案信息 -->
      <div class="border-t border-slate-700/50 pt-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-400">
          <!-- <div class="space-y-1">
            <p>创ICP备2021009274号-3</p>
          </div> -->
          <div class="space-y-1">
            <p>CDN服务由 <span class="text-cyan-400">CNMCDN</span> 提供</p>
            <!-- <p>反诈劝阻专线：96110</p> -->
          </div>
          <div class="space-y-1">
            <p>Copyright © 2019-2025 WXMC Network.</p>
          </div>
        </div>

        <!-- 浏览器提示 -->
        <!-- <div class="mt-6 text-center text-xs text-slate-500">
          推荐使用 Chrome 最新版本访问本站以获得最佳体验
        </div> -->
      </div>
    </div>
  </footer>
</template>

<script setup>
import { 
  DocumentTextIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  PhoneIcon,
  EnvelopeIcon,
  FlagIcon 
} from '@heroicons/vue/24/outline'
</script>
