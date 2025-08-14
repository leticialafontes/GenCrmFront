import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  BarElement,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const labels = ["Janeiro", "Fevereiro", "Março", "Abril"];

const data = {
  labels,
  datasets: [
    {
      label: "Redes Sociais",
      data: [12, 19, 3, 5],
      backgroundColor: "rgba(255, 99, 132, 0.85)",
      BorderColor: "rgba(13, 19, 23, 1)",
      hoverBackgroundColor: "rgba(230, 88, 120, 0.85)",
    },
    {
      label: "E-mail",
      data: [8, 15, 6, 9],
      backgroundColor: "rgba(75, 192, 192, 0.85)",
      BorderColor: "rgba(13, 19, 23, 1)",
      hoverBackgroundColor: "rgba(70, 170, 170, 0.85)",
    },
    {
      label: "Indicação",
      data: [5, 10, 15, 22],
      backgroundColor: "rgba(255, 159, 64, 0.85)",
      BorderColor: "rgba(13, 19, 23, 1)",
      hoverBackgroundColor: "rgba(230, 140, 70, 0.85)",
    },
  ],
};

// const arrVendasMensais = [
//   { mes: 1, valorVendido: 15500, nome: "Janeiro" },
//   { mes: 1, valorVendido: 15500, nome: "Janeiro" },
//   { mes: 2, valorVendido: 16523, nome: "Fevereiro" },
//   { mes: 3, valorVendido: 15500, nome: "Março" },
//   { mes: 3, valorVendido: 15500, nome: "Abril" },
//   { mes: 3, valorVendido: 15500, nome: "Maio" },
//   { mes: 3, valorVendido: 15500, nome: "Junho" },
// ];

// const data = {
//   labels: arrVendasMensais.map((item) => item.nome),
//   datasets: [
//     {
//       label: "Vendas Mensais",
//       data: arrVendasMensais,
//       backgroundColor: " rgba(75, 192, 192, 0.6)",
//       parsing: {
//         xAxisKey: "mes",
//         yAxisKey: {"face","email"}
//       },
//     },
//   ],
// };

const chartOptions = {
  scales: {
    x: {
      type: "category" as const,
      position: "bottom" as const,
    },
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: true,
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "Contratos mensais",
    },
  },
};

console.log(data);

function BarChart() {
  return <Bar data={data} options={chartOptions} />;
}

export default BarChart;
