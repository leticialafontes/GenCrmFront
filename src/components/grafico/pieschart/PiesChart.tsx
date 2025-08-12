import {
  Chart as ChartJS,
 ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

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
        "rgba(50, 94, 128, 1)",
        "rgba(63, 112, 144, 1)",
        "rgba(77, 130, 161, 1)",
        "rgba(91, 149, 178, 1)",
        "rgba(105, 167, 195, 1)",
        "rgba(119, 185, 212, 1)",
        "rgba(133, 204, 229, 1)",
      ],
      BorderColor: "rgba(13, 19, 23, 1)",
      hoverBackgroundColor: [
        "rgba(35, 79, 113, 1)",
        "rgba(48, 97, 129, 1)",
        "rgba(62, 115, 146, 1)",
        "rgba(76, 134, 163, 1)",
        "rgba(90, 152, 180, 1)",
        "rgba(104, 170, 197, 1)",
        "rgba(118, 189, 214, 1)",
      ],
      hoverBorderColor: "rgba(0, 19, 23, 1.9)",
   
    },
  ],
};


console.log(data);

function PiesChart() {
  return <Pie data={data}/>;
}

export default PiesChart;
