

# Code Connect

Um projeto representativo criado como parte de um curso da Alura para aprender e demonstrar o uso de tecnologias modernas como Next.js, React, Prisma, PostgreSQL e DBeaver.

# Imagem Representativa
![image](https://github.com/LucasLima0202/code-connect/assets/99288439/cd765690-af44-4dfc-9dba-438ce8d1669c)



## Descrição do Projeto

Code Connect é uma aplicação web que coleta e exibe posts e projetos para os usuários. A aplicação permite a busca por projetos utilizando um banco de dados, especificamente configurado com Prisma e PostgreSQL, gerenciado com DBeaver.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/SeuUsuario/code-connect.git
   ```
   Navegue para o diretório do projeto:

   ```bash cd code-connect ```
   Instale as dependências:
   ```bash npm install```
2. Configure o banco de dados:
Crie um arquivo .env na raiz do projeto e adicione a string de conexão do banco de dados PostgreSQL:
   Execute as migrações do Prisma:
 ```bash npx prisma migrate dev npx prisma generate```
   Popule o banco de dados com os dados iniciais:
 ```bash
npx prisma db seed
 ```
   Para iniciar a aplicação em modo de desenvolvimento, use o comando:
 ```bash
npm run dev
npm run build
npm start
````
**Contribuição**
Faça um fork do projeto, Crie uma nova branch, Commit suas mudanças, Faça um push para a branch, Abra um Pull Request

**Licença**
Este projeto não especifica uma licença, e sim curso da alura para aprender e utlizar essas tecnologias

## **Tecnologias e Ferramentas**
Next.js
Prisma
PostgreSQL
DBeaver
VSCode
JavaScript
HTML
CSS
Git

## **Autores**
Criador do curso na Alura

## **Agradecimentos**
Agradecimentos ao criador do curso e à equipe da Alura por fornecer o conhecimento e os recursos para este projeto.
