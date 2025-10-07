import React from 'react';
import { clientes } from '../../components/data/Clientes';
import './Manutencao.css';

function Manutencao() {
  return (
    <div className="container">
      <h1>Clientes</h1>
      <div className="card-list">
        {clientes.map((cliente) => (
          <div className="card" key={cliente.id}>
            <h2>{cliente.nome}</h2>
            <p><strong>Empresa:</strong> {cliente.empresa}</p>
            <p><strong>Serviço:</strong> {cliente.servico}</p>
            <p><strong>Tempo de Serviço:</strong> {cliente.tempoServico}</p>
            <p><strong>Valor Pago:</strong> R$ {cliente.valorPago.toFixed(2)}</p>
            <p>
              <strong>Status:</strong>{' '}
              <span className={`status ${cliente.status.toLowerCase().replace(/\s/g, '-')}`}>
                {cliente.status}
              </span>
            </p>
            <p><strong>Email:</strong> {cliente.email}</p>
            <p><strong>Telefone:</strong> {cliente.telefone}</p>
            <p><strong>Localização:</strong> {cliente.cidade} - {cliente.estado}</p>

            <div className="actions">
              <button className="btn btn-edit" onClick={() => alert(`Editar ${cliente.nome}`)}>
                Editar
              </button>
              <button className="btn btn-update" onClick={() => alert(`Atualizar ${cliente.nome}`)}>
                Atualizar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Manutencao;

