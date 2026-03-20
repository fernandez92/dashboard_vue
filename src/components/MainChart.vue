<script setup lang="ts">
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Revenue',
      backgroundColor: (context: any) => {
        const chart = context.chart;
        const {ctx, chartArea} = chart;
        if (!chartArea) return null;
        const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0, 'rgba(16, 185, 129, 0)');
        gradient.addColorStop(1, 'rgba(16, 185, 129, 0.15)');
        return gradient;
      },
      borderColor: '#10b981',
      borderWidth: 3,
      pointBackgroundColor: '#10b981',
      pointBorderColor: 'rgba(255,255,255,0.1)',
      pointBorderWidth: 2,
      pointRadius: 4,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#10b981',
      pointHoverBorderWidth: 3,
      fill: true,
      tension: 0.4,
      data: [45, 52, 38, 65, 48, 82, 75]
    }
  ]
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(8px)',
      titleFont: { family: 'Outfit', size: 14, weight: 'bold' as const },
      bodyFont: { family: 'JetBrains Mono', size: 12 },
      padding: 16,
      cornerRadius: 12,
      displayColors: false,
      borderColor: 'rgba(255,255,255,0.1)',
      borderWidth: 1
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      },
      ticks: {
        color: 'rgba(255,255,255,0.3)',
        font: {
          family: 'JetBrains Mono',
          size: 10
        }
      }
    },
    y: {
      grid: {
        color: 'rgba(255,255,255,0.05)',
        drawBorder: false
      },
      ticks: {
        color: 'rgba(255,255,255,0.3)',
        font: {
          family: 'JetBrains Mono',
          size: 10
        },
        callback: (value: any) => `$${value}k`
      }
    }
  }
};
</script>

<template>
  <Line :data="data" :options="options" />
</template>
