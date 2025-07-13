import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import type { StatusInterface } from '../interfaces/Status';

//componentes necesarios para usar los graficos con Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface StatusChartProps{
    history: StatusInterface[];
}

const StatusChart: React.FC<StatusChartProps> = ({ history }) => {
    const chartData = {
        //Con esto se muestra la hora en las que se consulto cada codigo.
        labels: history.map(entry => new Date(entry.timestamp).toLocaleTimeString()),
        datasets: [
            {
                label: 'HTTP Status Codes',
                data: history.map(entry => entry.code),
                backgroundColor: history.map(entry => {
                    switch (entry.category) {
                        case '2xx': return '#2ecc71';
                        case '3xx': return '#2ecc71';
                        case '4xx': return '#e74c3c';
                        case '5xx': return '#e74c3c';
                        default: return '#f39c12';
                    }
                })
            }
        ]
    }

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true }
        },
        scales: {
            y: { beginAtZero: true, ticks: { stepSize: 100 } }
        }
    }

    return <Bar data={chartData} options={options} />
}

export default StatusChart;