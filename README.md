# ValorizaAPI
<fig>
<img src="https://app.rocketseat.com.br/_next/image?url=%2Fassets%2Ficons%2Fdashboard%2Fnlw-heat.svg&w=256&q=75" alt="Logo Next Level Week - Rocketseat">
</fig>

## Tecnologias utilizadas

Foram utilizadas as seguintes tecnologias.

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme)
- [TypeORM](https://typeorm.io/#/)

## Inicialização
Para executar o projeto, utilize as etapas descritas abaixo.

* Clone o repositório do projeto.
* Utilize `yarn` para baixar todas as dependências.
* Utilize `yarn typeorm migration:run` para criar as tabelas do banco de dados.
* Utilize `yarn dev` para executar a aplicação.

Após isso o projeto estará rodando :blush:

## Links importantes
* [Rocketseat](https://www.rocketseat.com.br) :purple_heart::purple_heart:

# ValorizaAPI

## Introdução

> Este projeto foi desenvolvido durante a 6º edição da Next Level Week criada pela Rocketseat :purple_heart:

Este projeto tem como principal objetivo a criação de uma plataforma para a interação dos companheiros de uma equipe.

### Endpoints

| Nome | Funcionalidade|
|------|---------------|
|```GET``` /users/compliments/sent|Informa todos elogios enviados pelo usuário.|
|```GET``` /users/compliments/received|Informa todos elogios recebidos pelo usuário.|
|```GET``` /tags|Informa todas as tags registradas.|
|```GET``` /users|Informa todos usuários registrados.|
|```POST``` /login|Realiza a autenticação do usuário.|
|```POST``` /users|Realiza a criação de um usuário.|
|```POST``` /tags|Realiza a criação de uma tag.|
|```POST``` /compliments|Realiza a criação de um elogio.|
|```PUT``` /tags|Atualiza uma tag.|
|```PUT``` /users|Atualiza um usuário.|
|```DELETE``` /users|Deleta um usuário.|
|```DELETE``` /tags|Deleta uma tag.|
