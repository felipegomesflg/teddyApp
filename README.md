# **README**

## 📦 **Descrição do Projeto**

Este projeto é uma aplicação de gerenciamento de clientes desenvolvida em **React** com TypeScript. A aplicação permite a criação, edição, exclusão e seleção de clientes, além de funcionalidades específicas como:

- Exibir os **clientes selecionados** em uma segunda tela.
- **Remover todos** os clientes selecionados da lista de seleção.
- Persistência de dados usando **localStorage**.
- Integração com uma API para CRUD de clientes.

---

## 🚀 **Funcionalidades**

1. **Gerenciamento de Clientes**:
   - Criar, editar e excluir clientes.
   - Exibir clientes em um grid de **cards**, com ícones para ações.
   
2. **Seleção de Clientes**:
   - Selecionar clientes usando um ícone de **"+"**, que muda para um **check** quando selecionado.
   - Exibir os clientes selecionados em uma segunda tela.
   - Remover clientes individualmente ou todos de uma vez da lista de seleção.

3. **Modal de Confirmação**:
   - Modal para confirmação de ações, como exclusão de clientes.

4. **Persistência de Seleção**:
   - Os clientes selecionados são persistidos em **localStorage**, permitindo que sejam carregados mesmo após recarregar a página.

---

## ⚙️ **Pré-requisitos**

Certifique-se de ter as seguintes ferramentas instaladas:

1. **Node.js** (versão 16 ou superior)
2. **npm** ou **yarn** (gerenciador de pacotes)
3. **API Backend** em NestJS configurada e rodando em **`localhost:3000`**.

---

## 📥 **Instalação**

1. Clone o repositório:

   ```bash
   git clone https://github.com/felipegomesflg/teddyApp
   ```
2. Navegue até a pasta do projeto:

```bash
cd teddyapp
```
3. Instale as dependências:

```bash
# Usando npm
npm install

# Ou usando yarn
yarn install
```

## 🛠️ Configuração do Ambiente
Certifique-se de configurar o arquivo .env com a URL da API backend:

```env
REACT_APP_API_URL=http://localhost:3000
```

## 📜 Scripts Disponíveis
### Rodar a Aplicação
Para iniciar a aplicação em modo de desenvolvimento:

```bash
# Usando npm
npm start

# Ou usando yarn
yarn start
```
A aplicação estará disponível em http://localhost:3000.

### Rodar Testes
Para executar os testes e2e usando Cypress:

```bash
npx cypress run
```

## 🔍 Funcionalidades e Como Testá-las
1. Criar Cliente
- Clique no botão "Adicionar Cliente" na tela principal.
- Preencha o formulário da modal com os dados do cliente e confirme.
- O cliente será adicionado à lista.
2. Editar Cliente
- Clique no ícone de edição (lápis) em qualquer card.
- A modal será aberta com os dados do cliente preenchidos.
- Edite as informações e clique em Confirmar.
3. Excluir Cliente
- Clique no ícone de lixeira em qualquer card.
- Confirme a exclusão na modal que será exibida.
4. Selecionar Cliente
- Clique no ícone de "+" em qualquer card.
- O cliente será marcado como selecionado e o ícone mudará para um check.
5. Ver Clientes Selecionados
- Clique em "Ver Clientes Selecionados".
- A tela exibirá todos os clientes selecionados em um grid.
6. Remover Todos os Clientes Selecionados
- Na tela de Clientes Selecionados, clique em "Remover Todos da Seleção".
- Todos os clientes serão desmarcados.

## 🗂️ Estrutura do Projeto
```bash
src/
├── components/
│   ├── Card/                # Componente para exibição dos clientes
│   ├── CardGroup/           # Agrupa e gerencia os cards
│   ├── ModalBase/           # Modal reutilizável
│   └── Sidenav/             # Menu lateral
├── pages/
│   ├── Clients/             # Tela principal de clientes
│   └── SelectedClients/     # Tela de clientes selecionados
├── services/
│   └── apiService.ts        # Comunicação com a API
├── App.tsx                  # Ponto de entrada do app
├── index.tsx                # Renderiza o app
└── styles/                  # Estilos globais e específicos
```

## 🛠️ Tecnologias Utilizadas
- React com TypeScript
- Materialize CSS para estilização
- localStorage para persistência de dados
- Axios para requisições à API
- Jest e React Testing Library para testes unitários
- NestJS no backend (necessário rodar o servidor da API)

## 👨‍💻 Autor
Desenvolvido por Felipe L. Gomes.
