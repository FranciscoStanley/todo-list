# Back-end do Todo List

## Descrição

Este é o back-end da aplicação Todo List, uma API RESTful construída com Node.js, Express e TypeScript. A aplicação utiliza o Mongoose para interagir com o MongoDB, seguindo uma arquitetura organizada em camadas (Controllers, Services, Repositories e Models) para facilitar a manutenção e a escalabilidade do código.

A API permite as seguintes operações:
- **Criar Tarefa:** Adiciona uma nova tarefa.
- **Listar Tarefas:** Recupera todas as tarefas.
- **Atualizar Tarefa:** Atualiza dados de uma tarefa (como título, status de conclusão, data e arquivamento).
- **Excluir Tarefa:** Remove uma tarefa.

## Tecnologias e Ferramentas Utilizadas

- **Node.js:** Ambiente de execução para JavaScript no servidor.
- **Express:** Framework para criação de APIs RESTful.
- **TypeScript:** Superset do JavaScript com tipagem estática, aumentando a robustez do código.
- **Mongoose:** ODM para interação com o MongoDB.
- **dotenv:** Gerenciamento de variáveis de ambiente.
- **cors:** Middleware para habilitar o CORS e permitir requisições de outros domínios.
- **ts-node-dev:** Ferramenta para desenvolvimento com recarregamento automático do servidor.
- **PM2 (opcional):** Gerenciador de processos para ambientes de produção.

## Estrutura do Projeto

```json
  backend/ ├── src/ │ ├── config/ │ │ └── mongodb.ts # Configuração da conexão com o MongoDB │ ├── controllers/ │ │ └── todoController.ts # Controladores que gerenciam as requisições (CRUD) para tarefas │ ├── models/ │ │ └── todoModel.ts # Schema e model do Mongoose para as tarefas │ ├── repositories/ │ │ └── todoRepository.ts # Camada de acesso a dados (MongoDB) para as tarefas │ ├── routes/ │ │ └── todoRoutes.ts # Rotas da API para as operações de tarefas │ ├── services/ │ │ └── todoService.ts # Lógica de negócio e operações relacionadas às tarefas │ ├── app.ts # Configuração do aplicativo Express e middlewares │ └── server.ts # Ponto de entrada do servidor ├── .env # Variáveis de ambiente (ex.: PORT, MONGO_URI) ├── tsconfig.json # Configurações do TypeScript └── package.json # Dependências e scripts do projeto
```

## Instalação e Configuração

### Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **npm** (geralmente instalado junto com o Node.js)
- **MongoDB:** Uma instância local ou remota do MongoDB para armazenar os dados.

### Passos para Instalar e Executar

1. **Clone o Repositório:**

   ```bash
     git clone <URL-do-repositório>
     cd backend
   ```
2 .Instale as Dependências:

   ```bash
    npm install
   ```
3. Configure as Variáveis de Ambiente:
  Crie um arquivo .env na raiz do projeto com o seguinte conteúdo (ajuste conforme necessário):
  ```bash
    PORT=8080
    MONGO_URI=mongodb://localhost:27017/todo
  ```
4. Rodando o Servidor:
  Modo Desenvolvimento:
  Utilize o ts-node-dev para iniciar o servidor com recarregamento automático:
  ```bash
    npm run dev
  ```
  Modo Produção:
  Primeiro, compile o projeto e depois inicie o servidor:
  ```bash
    npm run build
    npm start
  ```
Scripts Disponíveis
No arquivo package.json, os principais scripts configurados são:

"dev": "ts-node-dev --respawn --transpile-only src/server.ts"
Inicia o servidor em modo de desenvolvimento com recarregamento automático.

"build": "tsc"
Transpila o código TypeScript para JavaScript, gerando a pasta dist.

"start": "node dist/server.js"
Inicia o servidor a partir dos arquivos transpilados (ideal para produção).

Considerações Adicionais
CORS:
O middleware cors está configurado para permitir requisições de diferentes origens. Se necessário, ajuste as opções do CORS no arquivo app.ts.

MongoDB:
Certifique-se de que o MongoDB está em execução e que a URI configurada no arquivo .env está correta.

Gerenciamento de Processos:
Para ambientes de produção, recomenda-se o uso do PM2 para gerenciar o processo do servidor e garantir reinicializações automáticas em caso de falhas.

Logs e Monitoramento:
Os logs do servidor são exibidos no console. Considere integrar uma solução de monitoramento para ambientes de produção.

Licença
Este projeto está licenciado sob a licença MIT.

Autor
Francisco Stanley Rodrigues Albuquerque
```javascript

  Copie todo o conteúdo acima e cole em um arquivo chamado `README.md` na raiz do diretório do back-end.

```
