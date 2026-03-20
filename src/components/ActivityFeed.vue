<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { dashboardService } from '../services/dashboardService';
import type { ActivityItem } from '../types';

const activities = ref<ActivityItem[]>([]);

onMounted(async () => {
  activities.value = await dashboardService.getRecentActivity();
});

const getStatusStyles = (status: string) => {
  switch (status) {
    case 'success': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
    case 'warning': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
    case 'error': return 'bg-rose-500/20 text-rose-400 border-rose-500/30';
    default: return 'bg-white/10 text-white/60 border-white/10';
  }
};

const getDotColor = (status: string) => {
  switch (status) {
    case 'success': return 'bg-emerald-500';
    case 'warning': return 'bg-amber-500';
    case 'error': return 'bg-rose-500';
    default: return 'bg-white/40';
  }
};
</script>

<template>
  <div class="space-y-6">
    <div 
      v-for="item in activities" 
      :key="item.id"
      class="flex items-start gap-5 group cursor-default"
    >
      <div class="relative mt-1.5">
        <div :class="['w-2.5 h-2.5 rounded-full relative z-10', getDotColor(item.status)]"></div>
        <div :class="['absolute inset-0 rounded-full blur-[4px] animate-pulse', getDotColor(item.status)]"></div>
        <div class="absolute top-2.5 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-white/5 group-last:hidden"></div>
      </div>
      
      <div class="flex-1 min-w-0 pb-6 border-b border-white/5 group-last:border-0">
        <div class="flex items-center justify-between gap-4 mb-2">
          <span class="font-bold text-sm group-hover:text-emerald-400 transition-colors">{{ item.user }}</span>
          <span class="text-[10px] font-mono text-white/30">{{ item.time }}</span>
        </div>
        <p class="text-xs text-white/60 leading-relaxed mb-3">{{ item.action }}</p>
        <div 
          :class="[
            'inline-flex items-center px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider border',
            getStatusStyles(item.status)
          ]"
        >
          {{ item.status }}
        </div>
      </div>
    </div>
  </div>
</template>
