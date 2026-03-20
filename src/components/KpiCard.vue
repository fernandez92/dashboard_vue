<script setup lang="ts">
import { 
  DollarSign, 
  Users, 
  Zap, 
  Clock, 
  ArrowUpRight, 
  ArrowDownRight 
} from 'lucide-vue-next';

const props = defineProps<{
  label: string;
  value: string;
  trend: number;
  icon: string;
}>();

const icons: Record<string, any> = {
  DollarSign,
  Users,
  Zap,
  Clock
};
</script>

<template>
  <div class="glass p-6 rounded-3xl group hover:bg-white/10 transition-all duration-500 cursor-default relative overflow-hidden">
    <!-- Hover Glow -->
    <div class="absolute -right-4 -top-4 w-24 h-24 bg-emerald-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div class="flex items-center justify-between mb-6 relative z-10">
      <div class="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500/10 transition-all duration-500">
        <component 
          :is="icons[props.icon]" 
          :class="[
            'w-6 h-6 transition-colors duration-500',
            props.trend > 0 ? 'text-emerald-400' : 'text-rose-400'
          ]" 
        />
      </div>
      <div 
        :class="[
          'flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold border',
          props.trend > 0 
            ? 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' 
            : 'text-rose-400 bg-rose-400/10 border-rose-400/20'
        ]"
      >
        <ArrowUpRight v-if="props.trend > 0" class="w-3 h-3" />
        <ArrowDownRight v-else class="w-3 h-3" />
        {{ Math.abs(props.trend) }}%
      </div>
    </div>
    
    <div class="space-y-1 relative z-10">
      <div class="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">{{ props.label }}</div>
      <div class="text-3xl font-display font-bold tracking-tight group-hover:translate-x-1 transition-transform duration-500">{{ props.value }}</div>
    </div>
  </div>
</template>
