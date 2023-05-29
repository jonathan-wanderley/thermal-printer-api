
<h1 align="center">Ponto De Venda – Fast Food / Back-end</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/jonathan-wanderley/thermal-printer-api?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/jonathan-wanderley/thermal-printer-api">
  
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/jonathan-wanderley/thermal-printer-api">
    
  <img alt="Stars" src="https://img.shields.io/github/stars/jonathan-wanderley/thermal-printer-api?style=social">

  <a href="https://github.com/jonathan-wanderley">
    <img alt="Feito por Jonathan" src="https://img.shields.io/badge/feito%20por-Jonathan-%237519C1">
  </a>
  
</p>

<!-- <h4 align="center">
	🚧   Concluído 🚀 🚧
</h4> -->

Tabela de conteúdos
=================
<!--ts-->
   * [Funcionalidades](#%EF%B8%8F-funcionalidades)
   * [Conhecimentos aplicados](#-conhecimentos-aplicados)
   * [Como executar o projeto](#-como-executar-o-projeto)
     * [Pré-requisitos](#pré-requisitos)
     * [Rodando o Projeto](#-rodando-o-projeto)
   * [Tecnologias](#-tecnologias)
     * [Servidor](#servidor--nodejs----mongodb)
   * [Como contribuir no projeto](#-como-contribuir-no-projeto)
   * [Autor](#-autor)
<!--te-->

---

## 📦 Sobre o desafio

Sistema PDV para um restaurante FastFood com foco em facilitar os pedidos, pagamentos e controle das filas de cliente possibilitando a listagem e checkout dos pedidos.


---


## ⚙️ Funcionalidades

- Listagem e pesquisa de produtos cadastrados
- Criação e acompanhamento dos pedidos
- Rotas para criar, finalizar e deletar pedidos
- Listagem dos pedidos finalizados e em andamento 
- Listagem dos clientes que estão com pedidos em andamento
- Listagem dos clientes que pediram no restaurante durante o dia
- Possibilidade de adicionar multiplas formas de pagamentos
- Integração com impressora termica, podendo imprimir uma via para o cliente


---


## 📃 Conhecimentos aplicados

- [x] MongoDB para criação do banco de dados;
- [X] Noções de API REST para criação e padronização de rotas;
- [x] Typescript para tipagem de dados
- [x] Express para criação do servidor
- [X] Documentação criada com Swagger
- [x] Uso de Socket.IO para implementação de web sockets
- [x] Aplicação em camadas - Controllers, Usecases/Services e Repositories
- [X] Padronização de commits utilizando Convencional Commits
- [x] Padronização de código em inglês
- [x] Boas praticas de codificação e código limpo
- [x] Testes automatizados

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o projeto

```bash

# Clone este repositório
$ git clone https://github.com/jonathan-wanderley/thermal-printer-api.git

# Acesse a pasta do projeto no terminal/cmd
$ cd thermal-printer-api

# Instale as dependências
$ npm install

# Use o arquivo .env.example para configurar suas variaveis de ambiente
# Você pode apenas renomear o arquivo .env.example para .env e configurar os campos PORT, MONGO_URL e PRINTER_PORT

# No campo PORT digite a porta que você deseja que o servidor/site use, por padrão deixei na porta 3000

# No campo MONGO_URL você coloca a url do seu banco de dados MongoDB
# O modelo padrão de URL MongoDB é esse: mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
# Você pode consultar mais detalhes aqui nesse link: https://www.mongodb.com/docs/manual/reference/connection-string/

# No campo PRINTER_PORT você irá configurar de acordo com sua impressora termica

# Após configurar é só salvar seu arquivo .env com suas variaveis de ambiente

# Nossa aplicação foi desenvolvida em Typescript, para roda-la precisamos fazer o build
# Para fazer o build é só digitar o seguinte comando
$ npx tsc

# Agora execute a aplicação
$ npm run start

# O servidor inciará na porta configurada no arquivo .env
# Acesse http://localhost:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Servidor**  ([NodeJS](https://nodejs.org/en/)  +  [MongoDB](https://www.mongodb.com/pt-br))

-   **[Express]()**
-   **[CORS]()**
-   **[Express-validation]()**
-   **[CommitLint]()**
-   **[Commitizen]()**
-   **[Husky]()**
-   **[Eslint]()**
-   **[Mongoose]()**
-   **[Socket.IO]()**
-   **[Typescript]()**
-   **[Date-fns]()**
-   **[Dotenv]()**
-   **[Express-async-errors]()**
-   **[Serialport]()**
-   **[Swagger-ui-express]()**

> Veja o arquivo  [package.json](https://github.com/jonathan-wanderley/thermal-printer-api/blob/main/package.json)



#### **Utilitários**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
-   Interface para MongoDB: **[MongoDB](https://www.mongodb.com/pt-br/products/compass)** 


---

---

## 💪 Como contribuir no projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b feature/my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feat: my new feature"`
4. Envie as suas alterações: `git push origin feature/my-feature`

---

## 🦸 Autor


 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/97256161?v=4" width="100px;" alt=""/>
 <sub><b>Jonathan Wanderley</b></sub> 🚀

[![Gmail Badge](https://img.shields.io/badge/-jonathan.wpc@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:jonathan.wpc@gmail.com)](mailto:jonathan.wpc@gmail.com)

---

Feito com 💜 por Jonathan Wanderley para o teste prático da Devio 👋🏽

[Entre em contato!](https://www.linkedin.com/in/jonathan-wanderley/)

---
