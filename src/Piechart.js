import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import React from 'react';

function PieChart({ totalHours, partsList }) {
    const pieChartData = {
        labels: partsList.map((data) => data.partNumber),
        datasets: [{
            label: "Market Size",
            data: partsList.map((data) => totalHours / data.mtbur),
        },
        ],
    };
    return <div>
        <Pie data={pieChartData} />
    </div>
}

export default PieChart;