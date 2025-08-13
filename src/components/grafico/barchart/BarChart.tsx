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
      backgroundColor: "rgba(50, 94, 128, 0.8)",
      BorderColor: "rgba(13, 19, 23, 1)",
      hoverBackgroundColor: "rgba(35, 79, 113, 1.2)",
    },
    {
      label: "E-mail",
      data: [8, 15, 6, 9],
      backgroundColor: "rgba(77, 130, 161, 0.8)",
      BorderColor: "rgba(13, 19, 23, 1)",
      hoverBackgroundColor: "rgba(62, 115, 146, 1.2)",
    },
    {
      label: "Indicação",
      data: [5, 10, 15, 22],
      backgroundColor: "rgba(105, 167, 195, 0.8)",
      BorderColor: "rgba(13, 19, 23, 1)",
      hoverBackgroundColor: "rgba(90, 152, 180, 1.2)",
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
  title: {
    display: true,
    text: "Contratos mensais",
  },
  scales: {
    x: {
      type: "category",
      position: "bottom",
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
