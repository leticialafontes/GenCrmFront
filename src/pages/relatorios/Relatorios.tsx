import React, { useMemo, useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
} from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

import { clientes as listaClientes } from '../../components/data/Clientes';
import './Relatorios.css';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement
);

const COLORS = ['#325E80', '#85CCE5', '#FFA500', '#2ECC71', '#E74C3C', '#3498DB'];

function Relatorios() {
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') setDarkMode(true);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const resumo = useMemo(() => {
    const totalClientes = listaClientes.length;

    let totalValorPago = 0;
    const porStatusMap = {};
    const valoresPorCliente = [];

    listaClientes.forEach((c) => {
      const valor = typeof c.valorPago === 'number' ? c.valorPago : Number(c.valorPago) || 0;
      totalValorPago += valor;

      const statusKey = c.status ?? 'Outros';
      porStatusMap[statusKey] = (porStatusMap[statusKey] || 0) + 1;

      valoresPorCliente.push({ nome: c.nome, valor });
    });

    valoresPorCliente.sort((a, b) => b.valor - a.valor);

    return {
      totalClientes,
      totalValorPago,
      porStatusMap,
      valoresPorCliente,
    };
  }, []);

  const pieData = useMemo(() => {
    return {
      labels: Object.keys(resumo.porStatusMap),
      datasets: [
        {
          data: Object.values(resumo.porStatusMap),
          backgroundColor: COLORS,
          hoverBackgroundColor: COLORS,
        },
      ],
    };
  }, [resumo.porStatusMap]);

  const barData = useMemo(() => {
    const top = resumo.valoresPorCliente.slice(0, 6);
    return {
      labels: top.map((c) => c.nome),
      datasets: [
        {
          label: 'Valor Pago',
          data: top.map((c) => c.valor),
          backgroundColor: COLORS.slice(0, top.length),
        },
      ],
    };
  }, [resumo.valoresPorCliente]);

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      x: {
        ticks: {
          autoSkip: false,
          maxRotation: 45,
          minRotation: 45,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className={`rel-layout ${darkMode ? 'dark' : ''}`}>
      <header className="rel-topbar">
        <h2>Relatórios</h2>
        <button
          className="theme-toggle"
          onClick={() => setDarkMode((prev) => !prev)}
          aria-label="Alternar tema"
        >
          {darkMode ? '☀️ Claro' : '🌙 Escuro'}
        </button>
      </header>

      <main className="rel-content">
        <section className="kpi-row">
          <div className="kpi-card">
            <div className="kpi-title">Total de Clientes</div>
            <div className="kpi-value">{resumo.totalClientes}</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-title">Valor Total Pago</div>
            <div className="kpi-value">R$ {resumo.totalValorPago.toFixed(2)}</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-title">Média por Cliente</div>
            <div className="kpi-value">
              R${' '}
              {resumo.totalClientes
                ? (resumo.totalValorPago / resumo.totalClientes).toFixed(2)
                : '0.00'}
            </div>
          </div>
        </section>

        <section className="graphs-row">
          <div className="graph-card">
            <h3>Distribuição por Status</h3>
            <Pie data={pieData} options={pieOptions} />
          </div>
          <div className="graph-card">
            <h3>Top Clientes por Valor Pago</h3>
            <Bar data={barData} options={barOptions} />
          </div>
        </section>
        
      </main>
    </div>
  );
}

export default Relatorios;
