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

import { clientesIniciais } from '../../components/data/clientes';

function Clientes() {
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
  const [exclusaoId, setExclusaoId] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
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
    setExclusaoId(id);
  };

  const confirmarExcluir = () => {
    if (exclusaoId !== null) {
      setClientes((prev) => prev.filter((c) => c.id !== exclusaoId));
      setExclusaoId(null);
    }
  };

  const clientesFiltrados = clientes.filter(
    (c) =>
      c.nome.toLowerCase().includes(busca.toLowerCase()) ||
      c.empresa.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-blue-900 text-white p-6 fixed top-0 bottom-0 left-0">
        <h2 className="text-2xl font-bold text-center mb-6">GENCRM</h2>
        <ul className="space-y-4">
          <li className="flex items-center space-x-2 cursor-pointer">
            <Chats size={20} /> <span>Atendimentos</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer">
            <Calendar size={20} /> <span>Atividades</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer">
            <Wallet size={20} /> <span>Contas</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer">
            <FileText size={20} /> <span>Documentos</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer">
            <CurrencyDollar size={20} /> <span>Financeiro</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer">
            <ChartLineUp size={20} /> <span>Marketing</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer">
            <Gear size={20} /> <span>Configurações</span>
          </li>
        </ul>
      </aside>

      <div className="flex-1 ml-64 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-blue-900">Clientes</h1>
          <button
            className="bg-blue-400 text-white px-4 py-2 rounded-md flex items-center space-x-2 hover:bg-blue-500"
            onClick={() => setMostrarFormulario(true)}
          >
            <Plus size={20} /> <span>Cadastrar Cliente</span>
          </button>
        </div>

        <div className="mb-8 flex items-center space-x-4">
          <div className="relative flex items-center w-80">
            <input
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Pesquisar cliente ou empresa..."
              className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-300"
            />
            <MagnifyingGlass size={20} className="absolute right-3 text-gray-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientesFiltrados.map((cliente) => (
            <div className="bg-white rounded-lg shadow-md p-6 space-y-4" key={cliente.id}>
              <h2 className="text-xl font-bold text-blue-900">{cliente.nome}</h2>
              <p><strong>Empresa:</strong> {cliente.empresa}</p>
              <p><strong>Serviço:</strong> {cliente.servico}</p>
              <p><strong>Tempo de Serviço:</strong> {cliente.tempoServico}</p>
              <p><strong>Valor Pago:</strong> R$ {cliente.valorPago.toFixed(2)}</p>
              <p>
                <strong>Status:</strong>
                <span
                  className={`inline-block px-2 py-1 text-sm rounded-md ${
                    cliente.status === 'Ativo'
                      ? 'bg-green-200 text-green-800'
                      : cliente.status === 'Inativo'
                      ? 'bg-red-200 text-red-800'
                      : cliente.status === 'Em Contato'
                      ? 'bg-blue-200 text-blue-800'
                      : 'bg-yellow-200 text-yellow-800'
                  }`}
                >
                  {cliente.status}
                </span>
              </p>
              <p><strong>Email:</strong> {cliente.email}</p>
              <p><strong>Telefone:</strong> {cliente.telefone}</p>
              <p><strong>Localização:</strong> {cliente.cidade} - {cliente.estado}</p>
              <div className="flex space-x-4">
                <button
                  className="bg-orange-300 text-white px-4 py-2 rounded-md hover:bg-orange-400"
                  onClick={() => handleEditar(cliente)}
                >
                  Editar
                </button>
                <button
                  className="bg-blue-200 text-blue-900 px-4 py-2 rounded-md hover:bg-blue-300 transition-colors duration-200"
                  onClick={() => handleExcluir(cliente.id)}
                >
                  Excluir
                </button>
              </div>
            </div>
          ))}
        </div>

        {mostrarFormulario && (
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
            onClick={() => setMostrarFormulario(false)}
          >
            <div
              className="bg-white rounded-lg p-6 max-w-lg w-full shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                {form.id ? 'Editar Cliente' : 'Cadastrar Novo Cliente'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome"
                  value={form.nome}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="empresa"
                  placeholder="Empresa"
                  value={form.empresa}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="servico"
                  placeholder="Serviço"
                  value={form.servico}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="tempoServico"
                  placeholder="Tempo de Serviço"
                  value={form.tempoServico}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="number"
                  name="valorPago"
                  placeholder="Valor Pago"
                  value={form.valorPago}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                >
                  <option value="Pendente">Pendente</option>
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                  <option value="Em Contato">Em Contato</option>
                </select>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="telefone"
                  placeholder="Telefone"
                  value={form.telefone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="cidade"
                  placeholder="Cidade"
                  value={form.cidade}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="estado"
                  placeholder="Estado"
                  value={form.estado}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="tipoCliente"
                  placeholder="Tipo de Cliente"
                  value={form.tipoCliente}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <textarea
                  name="observacoes"
                  placeholder="Observações"
                  value={form.observacoes}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white w-full py-3 rounded-md hover:bg-blue-600"
                >
                  {form.id ? 'Atualizar Cliente' : 'Cadastrar Cliente'}
                </button>
              </form>
            </div>
          </div>
        )}

        {exclusaoId !== null && (
          <div
            className="fixed inset-0 flex justify-center items-center z-50 bg-white bg-opacity-20 backdrop-blur-md"
            onClick={() => setExclusaoId(null)}
          >
            <div
              className="bg-white bg-opacity-90 rounded-2xl p-8 max-w-lg w-full shadow-xl border border-gray-300"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Confirmar Exclusão</h3>
              <p className="mb-8 text-gray-700 text-lg">
                Tem certeza que deseja excluir este cliente? Essa ação não pode ser desfeita.
              </p>
              <div className="flex justify-end space-x-6">
                <button
                  className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                  onClick={() => setExclusaoId(null)}
                >
                  Cancelar
                </button>
                <button
                  className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
                  onClick={confirmarExcluir}
                >
                  Excluir
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Clientes;
