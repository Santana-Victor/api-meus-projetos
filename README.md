<h1 align="center"> API REST - Meus Projetos </h1>

<br>

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

<br>

## Projeto

Esse projeto é a API REST utilizada no meu portfólio, tendo como objetivo retornar os dados dos meus projetos que estão salvos em um Banco de Dados no <a href="https://www.mongodb.com/products/platform/atlas-database" target="_blank">MongoDB Atlas</a>.

## Tecnologias Utilizadas

Esse projeto foi desenvolvido com as seguintes tecnologias:

- <a href="https://nodejs.org/" target="_blank">Node.js</a>
- <a href="https://www.typescriptlang.org/" target="_blank">Typescript</a>
- <a href="https://github.com/fastify/fastify/" target="_blank">Fastify</a>
- <a href="https://www.prisma.io/" target="_blank">Prisma ORM</a>
- <a href="https://www.mongodb.com/" target="_blank">MongoDB</a>

## Como Executar

1.  Clone o repositório e acesse a pasta do projeto

    ```shell
    git clone https://github.com/Santana-Victor/api-meus-projetos.git
    cd nome-do-repositorio
    ```

2.  Instale os pacotes utilizando o comando `npm install`

3.  Vá até o arquivo `.env.example` na raiz do projeto e renome-o para `.env`

4.  Ainda no arquivo `.env` preencha a variável `DATABASE_URL` com sua string de conexão com o
    MongoDB, exemplo abaixo:

    ```shell
    DATABASE_URL="mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.ns1yp.mongodb.net/<DATABASE>"
    ```

5.  Execute o projeto com o comando `npm run dev`

## Exemplo

Utilizando o Postman ou alguma outra ferramenta de teste de API's de sua preferência,
siga os passos abaixo:

1. Endpoint:

   - Máquina local:
     ```shell
     http://localhost:8080/projects/
     ```
   - Servidor Web:
     ```shell
     https://api-meus-projetos.onrender.com/projects/
     ```

2. Será retornado o JSON abaixo:
   ```shell
   [
    {
        "id": 1,
        "title": "Clima",
        "onlineProjectURL": "https://app-weather-sand-eight.vercel.app/",
        "repositoryProjectURL": "https://github.com/Santana-Victor/app-weather",
        "imageProjectURL": "https://raw.githubusercontent.com/Santana-Victor/imagens-projetos/refs/heads/main/app-weather-preview.png",
        "imageWidth": 430,
        "imageHeight": 408
    },{...},{...},{...}
   ]
   ```

### Front-end

<a href="https://github.com/Santana-Victor/Portfolio" target="_blank">Link do repositório do Front-end</a>
