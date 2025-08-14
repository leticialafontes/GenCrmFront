
# genCRM - Frontend

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)
![License MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=for-the-badge)


## 📌 Sobre o Projeto

O **genCRM** é uma aplicação web para gestão de relacionamento com clientes (CRM), desenvolvida como parte do projeto acadêmico do **Grupo 03 - Turma JavaScript 07**.  
A aplicação facilita o gerenciamento de **organizações**, **usuários**, **clientes** e demais entidades de um sistema CRM, permitindo centralizar dados e otimizar processos.

Este repositório contém o **frontend**, desenvolvido com **React** e **Vite**, oferecendo alta performance e uma interface moderna, responsiva e intuitiva.


## 🚀 Funcionalidades

- Cadastro, edição e exclusão de **organizações**
- Cadastro, edição e exclusão de **usuários**
- Cadastro e gerenciamento de **clientes**
- Listagem e busca com filtros dinâmicos
- Visualização detalhada de cada registro
- Autenticação e controle de sessão
- Feedback visual de ações (mensagens de sucesso e erro)
- Integração com o backend via API RESTful



## 🔗 Integração Frontend e Backend

O frontend consome a API do backend para realizar operações de CRUD e autenticação.  
Principais endpoints utilizados:

- `GET /organizacoes` - listar organizações  
- `POST /organizacoes` - cadastrar organização  
- `PUT /organizacoes/{id}` - atualizar organização  
- `DELETE /organizacoes/{id}` - excluir organização  
- `GET /usuarios` - listar usuários  
- `POST /usuarios` - cadastrar usuário  
- `PUT /usuarios/{id}` - atualizar usuário  
- `DELETE /usuarios/{id}` - excluir usuário  
- `POST /login` - autenticar usuário  


## 🛠 Tecnologias Utilizadas

- React  
- JavaScript  
- Vite  
- Yarn  
- Axios  
- React Router DOM  
- CSS Modules / Styled Components  


## 📦 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)  
- Yarn instalado globalmente  

### Passos

\`\`\`bash
git clone https://github.com/Grupo-03-Turma-JavaScript-07/genCRM-front.git
cd genCRM-front
yarn
yarn dev
\`\`\`

O aplicativo estará disponível em:  
\`\`\`
http://localhost:5173
\`\`\`


## 📄 Licença

Este projeto está sob a licença **MIT** – veja o arquivo [LICENSE](LICENSE) para mais detalhes.