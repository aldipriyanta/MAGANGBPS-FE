<template>
    <div class="chart">
        <Pie :data="chartData" :options="chartOptions" />
    </div>
</template>

<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement)

export default {
    name: 'chartKegiatan',
    components: {
        Pie
    },
    props: {
        chartData: {
            type: Object,
            required: true
        },
        chartOptions: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>

<style scoped>
.chart {
    max-height: 400px;
    margin: auto;
}
</style>