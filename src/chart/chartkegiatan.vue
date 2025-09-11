<template>
    <div class="chartkegiatan">
        <Pie :data="chartData" :options="chartOptions" />
    </div>
</template>

<script>
import { Pie } from 'vue-chartjs';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

export default {
    name: 'chartKegiatan',
    components: {
        Pie
    },
    data() {
        return {
            chartData: {
                labels: ['Distribusi dan Perusahaan', 'Neraca dan Analisis Statistik', 'Pengolahan dan TI', 'Statistik Pertanian'],
                datasets: [
                    {
                        label: 'Total Honor (Rp)',
                        data: [450000000, 320000000, 280000000, 390000000],
                        backgroundColor: [
                            '#3b82f6',
                            '#10b981',
                            '#f59e0b',
                            '#ef4444'
                        ]
                    }
                ]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            usePointStyle: true,
                            pointStyle: "circle",
                        },
                    },

                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                let label = context.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed !== null) {
                                    label += new Intl.NumberFormat('id-ID', {
                                        style: 'currency',
                                        currency: 'IDR',
                                        maximumFractionDigits: 0
                                    }).format(context.parsed);
                                }
                                return label;
                            }
                        }
                    }
                }
            }
        };
    }
};
</script>

<style scoped>
.chartkegiatan {
    height: 300px;
    margin: 20px auto;
    padding: 20px;
    background-color: white;
    /* border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); */
}
</style>