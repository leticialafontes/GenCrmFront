import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const arrdadosServicos = [
  { nome: "Desenvolvimento Web", value: 35 },
  { nome: "Consultoria", value: 20 },
  { nome: "Licença de Software", value: 15 },
  { nome: "Suporte Técnico", value: 10 },
  { nome: "Treinamento e Capacitação", value: 8 },
  { nome: "Segurança da Informação", value: 7 },
  { nome: "Automação de Processos", value: 5 },
];

const data = {
  labels: arrdadosServicos.map((item) => item.nome),
  datasets: [
    {
      label: "Contratos",
      data: arrdadosServicos,
      backgroundColor: [
        "rgba(255, 99, 132, 0.85)", // Rosa vibrante
        "rgba(54, 162, 235, 0.85)", // Azul vivo
        "rgba(255, 206, 86, 0.85)", // Amarelo forte
        "rgba(75, 192, 192, 0.85)", // Verde água
        "rgba(153, 102, 255, 0.85)", // Roxo suave
        "rgba(255, 159, 64, 0.85)", // Laranja vibrante
        "rgba(0, 204, 102, 0.85)", // Verde forte
        "rgba(255, 51, 153, 0.85)", // Pink
      ],
      BorderColor: "rgba(13, 19, 23, 1)",
      hoverBackgroundColor: [
        "rgba(230, 88, 120, 0.85)", // Rosa levemente escurecido
        "rgba(60, 149, 220, 0.85)", // Azul levemente escurecido
        "rgba(230, 190, 75, 0.85)", // Amarelo levemente escurecido
        "rgba(70, 170, 170, 0.85)", // Verde água levemente escurecido
        "rgba(140, 92, 230, 0.85)", // Roxo levemente escurecido
        "rgba(230, 140, 70, 0.85)", // Laranja levemente escurecido
        "rgba(0, 184, 92, 0.85)", // Verde forte levemente escurecido
        "rgba(230, 60, 140, 0.85)",
      ],
      hoverBorderColor: "rgba(0, 19, 23, 1.9)",
    },
  ],
};

const pieChartOptions = {
  plugins: {
    legend: {
      display: true,
      position: "bottom",
    },
  },
};

function PiesChart() {
  return <Pie data={data} options={pieChartOptions} />;
}

export default PiesChart;
