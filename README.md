# Todo List Application

## Descrição

Este projeto é uma aplicação completa de Todo List, que permite criar, listar, atualizar e excluir tarefas. A aplicação utiliza uma arquitetura full-stack, com um back-end desenvolvido em Node.js com Express e MongoDB (usando Mongoose), e um front-end criado com React e TypeScript. A aplicação foi estruturada com base em princípios de Clean Code e separação de camadas, garantindo manutenibilidade e escalabilidade.

## Funcionalidades

- **Criação de Tarefas:** Adicione novas tarefas informando um título.
- **Listagem de Tarefas:** Visualize todas as tarefas existentes.
- **Atualização de Tarefas:** Marque ou desmarque tarefas como concluídas e arquive/desarquive tarefas.
- **Exclusão de Tarefas:** Remova tarefas que não são mais necessárias.
- **Integração Full-Stack:** Comunicação entre front-end e back-end via API RESTful.
- **Variáveis de Ambiente:** Configuração via arquivo `.env` para personalizar portas e conexões.
- **Layout Personalizado:** Interface moderna e responsiva com um design limpo e intuitivo.

## Tecnologias e Ferramentas Utilizadas

### Front-end

- **React:** Biblioteca para construção da interface de usuário.
- **TypeScript:** Superset do JavaScript com tipagem estática.
- **Create React App:** Ferramenta para bootstrapping do projeto.
- **CSS:** Estilização customizada da interface.
- **Fetch API:** Comunicação com o back-end.

### Back-end

- **Node.js:** Ambiente de execução para JavaScript.
- **Express:** Framework para criação de APIs RESTful.
- **TypeScript:** Tipagem estática para maior robustez e manutenção.
- **Mongoose:** ODM para interação com o MongoDB.
- **dotenv:** Gerenciamento de variáveis de ambiente.
- **cors:** Middleware para habilitar requisições CORS.

### Ferramentas de Desenvolvimento

- **nodemon / ts-node-dev:** Reinicialização automática do servidor durante o desenvolvimento.
- **PM2:** Gerenciador de processos para produção (opcional).
- **Git:** Controle de versão.
- **VSCode / Outro Editor:** Ambiente de desenvolvimento integrado (IDE).

## Estrutura do Projeto

### Back-end

backend/ ├── src/ │ ├── config/ │ │ └── mongodb.ts # Configuração da conexão com o MongoDB │ ├── controllers/ │ │ └── todoController.ts # Controladores de requisições (CRUD) para tarefas │ ├── models/ │ │ └── todoModel.ts # Schema e model do Mongoose para tarefas │ ├── repositories/ │ │ └── todoRepository.ts # Camada de acesso a dados (MongoDB) para tarefas │ ├── routes/ │ │ └── todoRoutes.ts # Rotas da API para operações de tarefas │ ├── services/ │ │ └── todoService.ts # Lógica de negócio para operações de tarefas │ ├── app.ts # Configuração do aplicativo Express │ └── server.ts # Ponto de entrada do servidor ├── .env # Variáveis de ambiente (ex.: PORT, MONGO_URI) ├── tsconfig.json # Configuração do TypeScript └── package.json # Dependências e scripts do projeto

### Front-end

frontend/ ├── public/ │ └── (arquivos estáticos) ├── src/ │ ├── components/ │ │ ├── TodoForm.tsx # Componente para adicionar novas tarefas │ │ ├── TodoItem.tsx # Componente para exibir uma tarefa individual │ │ └── TodoList.tsx # Componente para listar as tarefas │ ├── services/ │ │ └── api.ts # Serviço para comunicação com o back-end │ ├── types/ │ │ └── todo.ts # Definição dos tipos TypeScript para tarefas │ ├── App.tsx # Componente principal da aplicação │ ├── App.css # Estilos personalizados da aplicação │ ├── index.tsx # Ponto de entrada da aplicação React │ ├── App.test.tsx # Testes básicos da aplicação │ ├── reportWebVitals.ts # Relatório de métricas de performance │ └── react-app-env.d.ts # Declarações de tipos para o Create React App ├── tsconfig.json # Configuração do TypeScript para o front-end └── package.json # Dependências e scripts do projeto


## Instalação e Configuração

### Pré-requisitos

- **Node.js** e **npm** instalados.
- **MongoDB** instalado e em execução, ou um URI de conexão para uma instância remota.

### Configuração do Back-end

1. **Clone o repositório e acesse a pasta `backend`:**

   ```bash
     cd backend
   ```
2. Instale as dependências:
   ```bash
     npm install
   ```
3. Configure as variáveis de ambiente:
   ```bash
    PORT=8080
    MONGO_URI=mongodb://localhost:27017/todo
   ```
4. Inicie o servidor:
Para desenvolvimento (com recarregamento automático):
   ```bash
    npm run dev
   ```
Para produção (após build):
   ```bash
    npm run build
    npm start
   ```
### Configuração do Front-end
Acesse a pasta frontend:

  ```bash
    cd frontend
  ```
Instale as dependências:
   ```bash
    npm install
   ```
(Opcional) Configure o proxy:

Se estiver utilizando o Create React App, adicione no arquivo package.json:

   ```json
    "proxy": "http://localhost:8080"
   ```
Dessa forma, as requisições para /api serão redirecionadas para o back-end.

Inicie o servidor de desenvolvimento:

   ```bash
    npm start
   ```
Uso
Acessar a Aplicação:
Abra o navegador e acesse: http://localhost:3000
Interação com a Todo List:
Adicionar Tarefa: Utilize o formulário para inserir o título de uma nova tarefa.
Marcar/Desmarcar Tarefa: Clique no título da tarefa para alternar o status de concluída.
Excluir Tarefa: Clique no botão "Excluir" para remover uma tarefa.
Comunicação com a API:
O front-end envia requisições HTTP para o back-end (usando a Fetch API ou via proxy) para realizar operações CRUD nas tarefas.
Notas Adicionais
CORS:
O back-end está configurado para permitir requisições de outros domínios utilizando o middleware cors.

Variáveis de Ambiente:
Certifique-se de não commitar os arquivos .env para o repositório, pois eles contêm informações sensíveis.

Process Manager:
Em produção, considere utilizar o PM2 para gerenciar o processo do back-end e garantir sua estabilidade.

Melhorias Futuras:

Implementação de autenticação de usuários.
Adição de funcionalidades avançadas como notificações e prazos para tarefas.
Ampliação da cobertura de testes (unitários e de integração).
Licença
Este projeto está licenciado sob a licença MIT.

Autor
Francisco Stanley Rodrigues Albuquerque

```javascript

  Copie todo o conteúdo acima e cole em um arquivo chamado `README.md` na raiz do seu repositório Git para documentar o projeto de forma detalhada.

```
