import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import React from 'react';

function PieChart({ totalHours, partsList }) {
    const pieChartData = {
        labels: Array.isArray(partsList) && partsList.map((data) => data.partNumber),
        datasets: [{
            label: "Market Size",
            data: Array.isArray(partsList) && partsList.map((data) => totalHours / data.mtbur),
        },
        ],
    };
    return <div>
        <Pie data={pieChartData} />
    </div>
}

export default PieChart;