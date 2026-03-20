<script setup lang="ts">
import { Doughnut } from 'vue-chartjs';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Desktop', 'Mobile', 'Tablet'],
  datasets: [
    {
      backgroundColor: ['#10b981', '#06b6d4', '#8b5cf6'],
      borderColor: 'rgba(0,0,0,0.2)',
      borderWidth: 4,
      hoverOffset: 20,
      data: [65, 25, 10]
    }
  ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '75%',
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        color: 'rgba(255,255,255,0.6)',
        font: {
          family: 'Outfit',
          size: 12,
          weight: 'bold' as const
        },
        usePointStyle: true,
        pointStyle: 'circle',
        padding: 30
      }
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(8px)',
      titleFont: { family: 'Outfit', size: 14, weight: 'bold' as const },
      bodyFont: { family: 'JetBrains Mono', size: 12 },
      padding: 16,
      cornerRadius: 12,
      borderColor: 'rgba(255,255,255,0.1)',
      borderWidth: 1
    }
  }
};
</script>

<template>
  <Doughnut :data="data" :options="options" />
</template>
