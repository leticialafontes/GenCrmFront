import React, { useState } from 'react';
import {
  Chats,
  Calendar,
  Wallet,
  FileText,
  CurrencyDollar,
  ChartLineUp,
  Gear,
  MagnifyingGlass,
  Plus
} from '@phosphor-icons/react';

import { clientesIniciais } from '../../components/data/Clientes';
import './Manutencao.css';

function Manutencao() {
  const [clientes, setClientes] = useState(clientesIniciais);
  const [busca, setBusca] = useState('');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [form, setForm] = useState({
    id: null,
    nome: '',
    empresa: '',
    servico: '',
    tempoServico: '',
    valorPago: '',
    status: 'Pendente',
    email: '',
    telefone: '',
    cidade: '',
    estado: '',
    tipoCliente: '',
    observacoes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.id) {
      setClientes((prev) =>
        prev.map((c) => (c.id === form.id ? { ...form, id: c.id } : c))
      );
    } else {
      // Adicionar novo cliente
      const novo = {
        ...form,
        id: Date.now(),
        valorPago: Number(form.valorPago),
        dataCadastro: new Date().toISOString().split('T')[0],
        ultimaInteracao: new Date().toISOString().split('T')[0],
      };
      setClientes((prev) => [...prev, novo]);
    }

    setForm({
      id: null,
      nome: '',
      empresa: '',
      servico: '',
      tempoServico: '',
      valorPago: '',
      status: 'Pendente',
      email: '',
      telefone: '',
      cidade: '',
      estado: '',
      tipoCliente: '',
      observacoes: '',
    });
    setMostrarFormulario(false);
  };

  const handleEditar = (cliente: any) => {
    setForm(cliente);
    setMostrarFormulario(true);
  };

  const handleExcluir = (id: number) => {
    if (confirm('Tem certeza que deseja excluir este cliente?')) {
      setClientes((prev) => prev.filter((c) => c.id !== id));
    }
  };

  const clientesFiltrados = clientes.filter(
    (c) =>
      c.nome.toLowerCase().includes(busca.toLowerCase()) ||
      c.empresa.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="sidebar-title">GENCRM</h2>
        <ul className="sidebar-menu">
          <li><Chats size={20} /> Atendimentos</li>
          <li><Calendar size={20} /> Atividades</li>
          <li><Wallet size={20} /> Contas</li>
          <li><FileText size={20} /> Documentos</li>
          <li><CurrencyDollar size={20} /> Financeiro</li>
          <li><ChartLineUp size={20} /> Marketing</li>
          <li><Gear size={20} /> Configurações</li>
        </ul>
      </aside>


      <div className="conteudo">
        <div className="topbar">
          <h1 className="topbar-title">Clientes</h1>
          
          <div className="topbar-right">
            <button className="btn btn-add" onClick={() => setMostrarFormulario(true)}>
              <Plus size={20} /> Cadastrar Cliente
            </button>
          </div>
        </div>

        {/* Barra de Busca */}
        <div className="search-bar">
          <div className="search-input">
            <input
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Pesquisar cliente ou empresa..."
            />
            <MagnifyingGlass size={20} className="search-icon" />
          </div>
        </div>

        {/* Lista de Clientes */}
        <div className="card-list">
          {clientesFiltrados.map((cliente) => (
            <div className="card" key={cliente.id}>
              <h2>{cliente.nome}</h2>
              <p><strong>Empresa:</strong> {cliente.empresa}</p>
              <p><strong>Serviço:</strong> {cliente.servico}</p>
              <p><strong>Tempo de Serviço:</strong> {cliente.tempoServico}</p>
              <p><strong>Valor Pago:</strong> R$ {cliente.valorPago.toFixed(2)}</p>
              <p><strong>Status:</strong> <span className={`status ${cliente.status.toLowerCase().replace(/\s/g, '-')}`}>{cliente.status}</span></p>
              <p><strong>Email:</strong> {cliente.email}</p>
              <p><strong>Telefone:</strong> {cliente.telefone}</p>
              <p><strong>Localização:</strong> {cliente.cidade} - {cliente.estado}</p>
              <div className="card-buttons">
                <button className="btn-editar" onClick={() => handleEditar(cliente)}>Editar</button>
                <button className="btn-excluir" onClick={() => handleExcluir(cliente.id)}>Excluir</button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de Cadastro */}
        {mostrarFormulario && (
          <div className="modal-overlay" onClick={() => setMostrarFormulario(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <h2>{form.id ? 'Editar Cliente' : 'Cadastrar Novo Cliente'}</h2>
              <form onSubmit={handleSubmit} className="formulario">
                <input type="text" name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required />
                <input type="text" name="empresa" placeholder="Empresa" value={form.empresa} onChange={handleChange} required />
                <input type="text" name="servico" placeholder="Serviço" value={form.servico} onChange={handleChange} />
                <input type="text" name="tempoServico" placeholder="Tempo de Serviço" value={form.tempoServico} onChange={handleChange} />
                <input type="number" name="valorPago" placeholder="Valor Pago" value={form.valorPago} onChange={handleChange} />
                <select name="status" value={form.status} onChange={handleChange}>
                  <option value="Pendente">Pendente</option>
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                  <option value="Em Contato">Em Contato</option>
                </select>
                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
                <input type="text" name="telefone" placeholder="Telefone" value={form.telefone} onChange={handleChange} />
                <input type="text" name="cidade" placeholder="Cidade" value={form.cidade} onChange={handleChange} />
                <input type="text" name="estado" placeholder="Estado" value={form.estado} onChange={handleChange} />
                <input type="text" name="tipoCliente" placeholder="Tipo de Cliente" value={form.tipoCliente} onChange={handleChange} />
                <textarea name="observacoes" placeholder="Observações" value={form.observacoes} onChange={handleChange} />
                <button type="submit" className="btn-salvar">
                  {form.id ? 'Atualizar Cliente' : 'Cadastrar Cliente'}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Manutencao;