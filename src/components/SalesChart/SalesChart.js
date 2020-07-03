import React from 'react';
import Card from '../Card';
import { Bar } from 'react-chartjs-2';
import './Canvas.css';

function SalesChart(props) {
  const { data } = props;

  function formatCurrency(value) {
    if (parseInt(value) >= 1000) {
      return 'R$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    } else {
      return 'R$' + value;
    }
  }

  const chartData = {
    labels: data.map((item) => item.month),
    datasets: [
      {
        label: 'Vendas',
        backgroundColor: 'green',
        borderColor: 'darkgreen',
        borderWidth: 1,
        hoverBackgroundColor: 'darkgreen',
        data: data.map((item) => item.value),
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || '';

          if (label) {
            label += ': ';
          }
          label += formatCurrency(tooltipItem.yLabel);
          return label;
        },
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            callback: function (value, index, values) {
              return formatCurrency(value);
            },
          },
        },
      ],
    },
  };

  return (
    <Card title="Vendas">
      <Bar data={chartData} options={options} />
    </Card>
  );
}

export default SalesChart;
