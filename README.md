<br />
<h1 align="center">
 UNICAD Deliveries
</h1>
<br />

<p align="center">
  <a href="https://www.linkedin.com/in/douglas-tesch-00b7a518b">
    <img alt="Badge" src="https://img.shields.io/badge/Developer-Douglas%20Tesch-orange">
  </a>
  
  <a href="#">
    <img alt="Badge" src="https://img.shields.io/badge/My-Delivery-%237159c1">
  </a>
</p>

## References

- [Requirements](#requirements-)
- [Install](#install-)
- [Run](#run-)
- [Usage Example](#usage-example)
  

## Requirements ✋🏻

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)

## Install 🔥

**Backend**

1. Clone esse  repositorio;
2. Entre na pasta `cd unicad_deliveries/backend`;
3. Utilizando docker **Recomendado** crie uma imagem do banco postgres com o comando `docker run --name database_unicad -e POSTGRES_PASSWORD=123456 -e POSTGRES_USER=unicad -p 5432:5432 -d postgres`. e para subir o container utilize o comando `docker start database_unicad`
4. Caso já tenha um banco postgres rodando em sua máquina não precisa utilizar o docker.
5. Na mesma pasta vá até o arquivo `ormconfig.json`e coloque as credenciais do seu banco de dados postgres

## ormconfig.json

![ormconfig](https://github.com/Dtesch9/unicad_deliveries/blob/master/assets/ormconfig.png)
6 Rode o comando `$ yarn` ou `$ npm install` para instalar as dependências.


**Frontend**

1. Volte uma pasta (Pensando que você está no diretório backend) `cd..` depois entre em `cd frontend`.
2. Rode o comando `$ yarn` ou `$ npm install` para instalar as dependências

## Run 🔥 

**Backend**

1. Entre na pasta `cd backend` depois rode `yarn typeorm migration:run para criar as tabelas no seu banco de dados postgres. 

2. No mesmo diretório rode o comando `yarn dev:server` para inicializar o backend.

3. Para conferir os tests do backend, basta rodar o comando `yarn test`

**Frontend**

1. Entre na pasta `cd frontend` e depois rode `yarn dev` para inicializar o frontend (ATENÇÃO! - Deixe o backend rodando em uma outra aba)
2. Ainda na pasta `frontend` você pode conferir os Tests da aplicação com os comandos: `yarn test` para rodas os tests ou `yarn test:coverage` para ter uma melhor
visualização da cobertura dos tests. (Hint: se você entrar na pasta `coverage/lcov` e abrir o arquivo `index.html` você verá os tests no seu browser padrão.


## Usage Example

![Usage](https://github.com/Dtesch9/unicad_deliveries/blob/master/assets/delivery-challenge-aplication.gif)


:link: [Linkedin](https://www.linkedin.com/in/douglas-tesch-00b7a518b/)
