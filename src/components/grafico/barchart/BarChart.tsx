import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  BarElement,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const arrVendasMensais = [
  { mes: 1, valorVendido: 15500 },
  { mes: 2, valorVendido: 16523 },
  { mes: 3, valorVendido: 15500 },
];


const data = {
  labels: arrVendasMensais.map((item) => item.mes ),
  datasets: [
    {
      label: 'Vendas Mensais',
      data: arrVendasMensais,
      backgroundColor: ' rgba(75, 192, 192, 0.6)',
      parsing: {
        xAxisKey: 'mes',
        yAxisKey: 'valorVendido',
      },
    },
  ],
};

const chartOptions = {
  title: {
    display: true,
    text: 'Vendas Mensais',
  },
  scales: {
    x: {
      type: 'category',
      position: 'bottom',
    },
    y: {
      beginAtZero: true,
    },
  },
};

console.log(data);

function BarChart() {
  return <Bar data={data} options={chartOptions} />;
}

export default BarChart;