import {
  Calendar,
  ChartLineUp,
  Chats,
  CurrencyDollar,
  FileText,
  Gear,
  MagnifyingGlass,
  Plus,
  Wallet
} from '@phosphor-icons/react';
import React, { useState, useEffect } from 'react';

import { clientesIniciais } from '../../components/data/clientes';

type ClientesProps = {
  darkMode: boolean;
};

function Clientes({ darkMode }: ClientesProps) {
  const [clientes, setClientes] = useState([]);
  const [busca, setBusca] = useState('');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true); // Controle da sidebar
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

    useEffect(() => {
      setClientes(clientesIniciais)
    }, []);

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
    <div className={`flex h-screen ${darkMode ? 'bg-[#334155] text-[#F1F5F9]' : 'bg-gray-100 text-[#0D1317]'}`}>
      
      
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-blue-500 text-white hover:bg-blue-400 transition-colors duration-300"
      >
        {sidebarOpen ? '⏴' : '⏵'}
      </button>

      
      <aside
        className={`fixed top-0 bottom-0 left-0 w-64 p-6 transition-all duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'}
          ${darkMode ? 'bg-[#1c2436] text-[#F1F5F9]' : 'bg-blue-900 text-white'}
        `}
      >
        <h2 className="text-2xl font-bold text-center mb-6">GENCRM</h2>
        <ul className="space-y-4">
          {[
            { icon: <Chats size={20} />, label: 'Atendimentos' },
            { icon: <Calendar size={20} />, label: 'Atividades' },
            { icon: <Wallet size={20} />, label: 'Contas' },
            { icon: <FileText size={20} />, label: 'Documentos' },
            { icon: <CurrencyDollar size={20} />, label: 'Financeiro' },
            { icon: <ChartLineUp size={20} />, label: 'Marketing' },
            { icon: <Gear size={20} />, label: 'Configurações' },
          ].map((item, idx) => (
            <li
              key={idx}
              className={`flex items-center space-x-2 cursor-pointer relative px-2 py-1 rounded-md transition-all duration-300
                hover:after:absolute hover:after:bottom-0 hover:after:left-2 hover:after:right-2 hover:after:h-0.5 hover:after:bg-blue-400 hover:after:rounded-full`}
            >
              {item.icon} <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </aside>

      
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'} p-6 overflow-y-auto`}>
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-[#F1F5F9]' : 'text-blue-900'}`}>Clientes</h1>
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
              className={`w-full p-3 rounded-md border focus:ring-2 ${darkMode
                ? 'border-[#44576f] bg-[#1E293B] placeholder-[#CBD5E1] text-[#F1F5F9] focus:ring-[#85CCE5]'
                : 'border-gray-300 bg-white placeholder-gray-400 text-gray-900 focus:ring-blue-300'
                }`}
            />
            <MagnifyingGlass size={20} className={`absolute right-3 ${darkMode ? 'text-[#CBD5E1]' : 'text-gray-500'}`} />
          </div>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientesFiltrados.map((cliente) => (
            <div
              key={cliente.id}
              className={`rounded-lg shadow-md p-6 space-y-4 transition-colors duration-300 hover:scale-105 ${darkMode ? 'bg-[#021b28] text-[#F1F5F9] shadow-[0_0_40px_rgba(133,204,229,0.15)]' : 'bg-white text-[#0D1317] shadow-[0_12px_60px_rgba(0,0,0,0.3)]'}`}
            >
              <h2 className={`text-xl font-bold ${darkMode ? 'text-[#85CCE5]' : 'text-blue-900'}`}>{cliente.nome}</h2>
              <p><strong>Empresa:</strong> {cliente.empresa}</p>
              <p><strong>Serviço:</strong> {cliente.servico}</p>
              <p><strong>Tempo de Serviço:</strong> {cliente.tempoServico}</p>
              <p><strong>Valor Pago:</strong> R$ {cliente.valorPago.toFixed(2)}</p>
              <p>
                <strong>Status:</strong>
                <span
                  className={`inline-block px-2 py-1 text-sm rounded-md ${cliente.status === 'Ativo'
                    ? darkMode ? 'bg-green-400 text-green-200' : 'bg-green-200 text-green-400'
                    : cliente.status === 'Inativo'
                      ? darkMode ? 'bg-red-400 text-red-200' : 'bg-red-200 text-red-400'
                      : cliente.status === 'Em Contato'
                        ? darkMode ? 'bg-blue-400 text-blue-200' : 'bg-blue-200 text-blue-400'
                        : darkMode ? 'bg-yellow-400 text-yellow-200' : 'bg-yellow-200 text-yellow-400'
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
                  className={`px-4 py-2 rounded-md transition-colors duration-300 ${darkMode ? 'bg-orange-500 text-[#F1F5F9] hover:bg-orange-600' : 'bg-orange-300 text-white hover:bg-orange-400'}`}
                  onClick={() => handleEditar(cliente)}
                >
                  Editar
                </button>
                <button
                  className={`px-4 py-2 rounded-md transition-colors duration-300 ${darkMode ? 'bg-blue-700 text-[#F1F5F9] hover:bg-blue-800'
                                      : 'bg-blue-200 text-blue-600 hover:bg-blue-400'}`}
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
            className={`fixed inset-0 flex justify-center items-center z-50 backdrop-blur-md ${darkMode ? 'bg-[#334155]/70' : 'bg-white/70'}`}
            onClick={() => setMostrarFormulario(false)}
          >
            <div
              className={`p-6 max-w-lg w-full rounded-lg shadow-lg transition-colors duration-300 ${darkMode
                  ? 'bg-[#1E293B] text-[#F1F5F9] border border-[#44576f]'
                  : 'bg-white text-[#0D1317] border border-gray-300'
                }`}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className={`text-2xl font-bold mb-6`}>
                {form.id ? 'Editar Cliente' : 'Cadastrar Novo Cliente'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  'nome',
                  'empresa',
                  'servico',
                  'tempoServico',
                  'valorPago',
                  'email',
                  'telefone',
                  'cidade',
                  'estado',
                  'tipoCliente',
                ].map((field) => (
                  <input
                    key={field}
                    type={field === 'valorPago' ? 'number' : 'text'}
                    name={field}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={form[field as keyof typeof form] as string}
                    onChange={handleChange}
                    className={`w-full p-3 border rounded-md transition-colors duration-300 ${darkMode
                        ? 'border-[#44576f] bg-[#334155] text-[#F1F5F9]'
                        : 'border-gray-300 bg-white text-gray-900'
                      }`}
                  />
                ))}
                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md transition-colors duration-300 ${darkMode
                      ? 'border-[#44576f] bg-[#334155] text-[#F1F5F9]'
                      : 'border-gray-300 bg-white text-gray-900'
                    }`}
                >
                  <option value="Pendente">Pendente</option>
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                  <option value="Em Contato">Em Contato</option>
                </select>
                <textarea
                  name="observacoes"
                  placeholder="Observações"
                  value={form.observacoes}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-md transition-colors duration-300 ${darkMode
                      ? 'border-[#44576f] bg-[#334155] text-[#F1F5F9]'
                      : 'border-gray-300 bg-white text-gray-900'
                    }`}
                />
                <button
                  type="submit"
                  className={`w-full py-3 rounded-md transition-colors duration-300 ${darkMode
                      ? 'bg-blue-700 text-[#F1F5F9] hover:bg-blue-600'
                      : 'bg-blue-500 text-white hover:bg-blue-400'
                    }`}
                >
                  {form.id ? 'Atualizar Cliente' : 'Cadastrar Cliente'}
                </button>
              </form>
            </div>
          </div>
        )}

        
        {exclusaoId !== null && (
          <div
            className={`fixed inset-0 flex justify-center items-center z-50 backdrop-blur-md ${darkMode ? 'bg-[#334155]/70' : 'bg-white/70'}`}
            onClick={() => setExclusaoId(null)}
          >
            <div
              className={`p-8 max-w-lg w-full rounded-2xl shadow-xl border transition-colors duration-300 ${darkMode ? 'bg-[#334155] text-[#F1F5F9] border-[#44576f]' : 'bg-white text-[#0D1317] border-gray-300'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-[#F1F5F9]' : 'text-gray-900'}`}>
                Confirmar Exclusão
              </h3>
              <p className={`mb-8 text-lg ${darkMode ? 'text-[#E2E8F0]' : 'text-gray-700'}`}>
                Tem certeza que deseja excluir este cliente? Essa ação não pode ser desfeita.
              </p>
              <div className="flex justify-end space-x-6">
                <button
                  className={`px-6 py-3 rounded-lg border transition-colors duration-300 ${darkMode ? 'border-[#44576f] text-[#F1F5F9] hover:bg-[#44576f]' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`}
                  onClick={() => setExclusaoId(null)}
                >
                  Cancelar
                </button>
                <button
                  className={`px-6 py-3 rounded-lg transition-colors duration-300 ${darkMode ? 'bg-red-600 text-[#F1F5F9] hover:bg-red-700' : 'bg-red-600 text-white hover:bg-red-700'}`}
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

