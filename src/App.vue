<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  TrendingUp, 
  Settings, 
  Bell, 
  Search,
  Menu,
  X,
  Download
} from 'lucide-vue-next';

// Components
import KpiCard from './components/KpiCard.vue';
import MainChart from './components/MainChart.vue';
import ActivityFeed from './components/ActivityFeed.vue';
import DistributionChart from './components/DistributionChart.vue';

// Mock Data Service
import { dashboardService } from './services/dashboardService';

const sidebarOpen = ref(true);
const kpis = ref<any[]>([]);
const loading = ref(true);

onMounted(async () => {
  try {
    kpis.value = await dashboardService.getKpis();
  } finally {
    loading.value = false;
  }
});

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};
</script>

<template>
  <div class="min-h-screen bg-[#030303] text-white font-sans selection:bg-emerald-500 selection:text-black overflow-x-hidden">
    <!-- Background Accents -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full"></div>
      <div class="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div class="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] bg-purple-500/5 blur-[120px] rounded-full"></div>
    </div>

    <!-- Sidebar -->
    <aside 
      :class="[
        'fixed inset-y-0 left-0 z-50 w-64 glass border-r border-white/5 transition-all duration-500 ease-in-out lg:translate-x-0',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      ]"
    >
      <div class="flex flex-col h-full">
        <div class="p-8 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <LayoutDashboard class="w-6 h-6 text-black" />
            </div>
            <span class="font-display font-bold tracking-tight text-2xl">NEXUS</span>
          </div>
          <button @click="toggleSidebar" class="lg:hidden p-2 hover:bg-white/5 rounded-lg">
            <X class="w-6 h-6" />
          </button>
        </div>

        <nav class="flex-1 px-4 space-y-1 mt-4">
          <a href="#" class="flex items-center gap-3 px-4 py-3 bg-white/10 text-emerald-400 rounded-xl font-medium transition-all group">
            <LayoutDashboard class="w-5 h-5 group-hover:scale-110 transition-transform" />
            Dashboard
          </a>
          <a href="#" class="flex items-center gap-3 px-4 py-3 hover:bg-white/5 text-white/60 hover:text-white rounded-xl font-medium transition-all group">
            <BarChart3 class="w-5 h-5 group-hover:scale-110 transition-transform" />
            Analytics
          </a>
          <a href="#" class="flex items-center gap-3 px-4 py-3 hover:bg-white/5 text-white/60 hover:text-white rounded-xl font-medium transition-all group">
            <Users class="w-5 h-5 group-hover:scale-110 transition-transform" />
            Team
          </a>
          <a href="#" class="flex items-center gap-3 px-4 py-3 hover:bg-white/5 text-white/60 hover:text-white rounded-xl font-medium transition-all group">
            <TrendingUp class="w-5 h-5 group-hover:scale-110 transition-transform" />
            Growth
          </a>
          
          <div class="pt-8 px-4">
            <div class="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] mb-4">Actions</div>
            <button class="w-full flex items-center gap-3 px-4 py-3 bg-emerald-500 text-black rounded-xl font-bold text-sm hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 active:scale-95">
              <Download class="w-4 h-4" />
              DOWNLOAD CODE
            </button>
          </div>
        </nav>

        <div class="p-6 border-t border-white/5">
          <a href="#" class="flex items-center gap-3 px-4 py-3 hover:bg-white/5 text-white/60 hover:text-white rounded-xl font-medium transition-all">
            <Settings class="w-5 h-5" />
            Settings
          </a>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <main :class="['transition-all duration-500 ease-in-out lg:pl-64 min-h-screen relative z-10']">
      <!-- Header -->
      <header class="sticky top-0 z-40 bg-[#030303]/40 backdrop-blur-xl border-b border-white/5 px-8 py-5 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <button @click="toggleSidebar" class="lg:hidden p-2 hover:bg-white/5 rounded-xl transition-colors">
            <Menu class="w-6 h-6" />
          </button>
          <div>
            <h1 class="text-2xl font-display font-bold tracking-tight">Overview</h1>
            <p class="text-xs text-white/40 font-mono">Welcome back, Arnold. Systems are optimal.</p>
          </div>
        </div>

        <div class="flex items-center gap-6">
          <div class="hidden md:flex items-center gap-3 px-4 py-2 bg-white/5 rounded-xl border border-white/5 focus-within:border-emerald-500/50 transition-all">
            <Search class="w-4 h-4 text-white/40" />
            <input type="text" placeholder="Search analytics..." class="bg-transparent border-none outline-none text-sm w-48 placeholder:text-white/20" />
          </div>
          <div class="flex items-center gap-3">
            <button class="p-2.5 hover:bg-white/5 rounded-xl relative transition-all group">
              <Bell class="w-5 h-5 text-white/60 group-hover:text-white" />
              <span class="absolute top-2.5 right-2.5 w-2 h-2 bg-emerald-500 rounded-full ring-4 ring-[#030303]"></span>
            </button>
            <div class="h-10 w-[1px] bg-white/5 mx-2"></div>
            <div class="flex items-center gap-3 pl-2">
              <div class="text-right hidden sm:block">
                <div class="text-sm font-bold">Arnold F.</div>
                <div class="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">Admin</div>
              </div>
              <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 p-[1px]">
                <div class="w-full h-full rounded-[11px] bg-[#030303] flex items-center justify-center font-bold text-sm">
                  AF
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Dashboard Content -->
      <div class="p-8 space-y-8 max-w-[1600px] mx-auto">
        <!-- KPIs -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KpiCard 
            v-for="(kpi, index) in kpis" 
            :key="kpi.label"
            v-bind="kpi"
            :style="{ animationDelay: `${index * 100}ms` }"
            class="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
          />
        </div>

        <!-- Charts Section -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 glass rounded-3xl p-8 shadow-2xl shadow-black/50">
            <div class="flex items-center justify-between mb-8">
              <div>
                <h2 class="text-xl font-display font-bold">Revenue Performance</h2>
                <p class="text-sm text-white/40">Monthly revenue growth and projections</p>
              </div>
              <div class="flex gap-1 bg-white/5 p-1 rounded-xl border border-white/5">
                <button class="px-4 py-1.5 text-xs font-bold rounded-lg bg-emerald-500 text-black shadow-lg shadow-emerald-500/20">1W</button>
                <button class="px-4 py-1.5 text-xs font-bold rounded-lg hover:bg-white/5 text-white/40 hover:text-white transition-all">1M</button>
                <button class="px-4 py-1.5 text-xs font-bold rounded-lg hover:bg-white/5 text-white/40 hover:text-white transition-all">1Y</button>
              </div>
            </div>
            <div class="h-[350px]">
              <MainChart />
            </div>
          </div>

          <div class="glass rounded-3xl p-8 shadow-2xl shadow-black/50 flex flex-col">
            <div class="mb-8">
              <h2 class="text-xl font-display font-bold">User Distribution</h2>
              <p class="text-sm text-white/40">Platform usage by device type</p>
            </div>
            <div class="flex-1 flex items-center justify-center min-h-[300px]">
              <DistributionChart />
            </div>
          </div>
        </div>

        <!-- Bottom Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-8">
          <div class="glass rounded-3xl p-8 shadow-2xl shadow-black/50">
            <div class="flex items-center justify-between mb-8">
              <h2 class="text-xl font-display font-bold">Recent Activity</h2>
              <button class="text-xs font-mono text-emerald-400 hover:underline">View All</button>
            </div>
            <ActivityFeed />
          </div>
          
          <div class="relative overflow-hidden group rounded-3xl p-10 flex flex-col justify-between shadow-2xl shadow-emerald-500/10 border border-emerald-500/20">
            <!-- Card Background -->
            <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-transparent"></div>
            <div class="absolute -right-20 -top-20 w-64 h-64 bg-emerald-500/20 blur-[80px] rounded-full group-hover:scale-125 transition-transform duration-1000"></div>
            
            <div class="relative z-10">
              <div class="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-6">
                <span class="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                System Status
              </div>
              <h2 class="text-4xl font-display font-bold mb-4 leading-tight">All systems are <span class="text-emerald-400">operational</span>.</h2>
              <p class="text-white/60 leading-relaxed max-w-md">
                We detected a <span class="text-white font-bold">12% increase</span> in throughput over the last 24 hours. No critical errors reported. Security protocols are active.
              </p>
            </div>

            <div class="relative z-10 mt-12 flex items-end justify-between">
              <div class="flex gap-12">
                <div class="space-y-1">
                  <div class="text-[10px] font-mono text-white/30 uppercase tracking-widest">Uptime</div>
                  <div class="text-3xl font-display font-bold text-gradient">99.98%</div>
                </div>
                <div class="space-y-1">
                  <div class="text-[10px] font-mono text-white/30 uppercase tracking-widest">Latency</div>
                  <div class="text-3xl font-display font-bold text-gradient">24ms</div>
                </div>
              </div>
              <button class="px-8 py-3 bg-white text-black font-bold rounded-xl hover:scale-105 transition-all shadow-xl shadow-white/10 active:scale-95">
                VIEW LOGS
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Outfit:wght@400;500;600;700&display=swap');

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-in-from-bottom-4 {
  from { transform: translateY(1rem); }
  to { transform: translateY(0); }
}

.animate-in {
  animation-duration: 1000ms;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-in {
  animation-name: fade-in;
}

.slide-in-from-bottom-4 {
  animation-name: slide-in-from-bottom-4;
}

.fill-mode-both {
  animation-fill-mode: both;
}
</style>
