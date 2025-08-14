import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

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

const arrQuantContr = [
  { mes: 1, contratoassinado: 15, nome: "Janeiro" },
  { mes: 2, contratoassinado: 25, nome: "Fevereiro" },
  { mes: 3, contratoassinado: 35, nome: "Março" },
  { mes: 3, contratoassinado: 20, nome: "Abril" },
  { mes: 3, contratoassinado: 40, nome: "Maio" },
  { mes: 3, contratoassinado: 10, nome: "Junho" },
];

const data = {
  labels: arrQuantContr.map((item) => item.nome),
  datasets: [
    {
      label: "Contratos Assinados",
      data: arrQuantContr,
      tension: 0.5,
      fill: true,
      borderColor: "rgb(63, 112, 144)",
      backgroundColor: "rgba(91, 149, 178, 0.5)",
      pointRadius: 5,
      pointBorderColor: "rgb(50, 94, 128)",
      pontiBackgroundColor: "rgba(35, 79, 113,)",

      parsing: {
        xAxisKey: "mes",
        yAxisKey: "contratoassinado",
      },
    },
  ],
};

var misooptions = {
  scales: {
    y: {
      min: 0,
    },
    x: {
      ticks: { color: "gray", font: { weight: "bold" as const } },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

console.log(data);

function LineChart() {
  return <Line data={data} options={misooptions} />;
}

export default LineChart;
