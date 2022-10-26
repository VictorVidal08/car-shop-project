<details>
<summary><h2>English Version</h2></summary>

<h1>🚙 Welcome to Project Car Shop! 🛵</h1>

# Summary:

The Car Shop project is a backend application, which uses OOP to build a CRUD API, with a MongoDb database accessed by the mongoose ORM. The project also seeks to implement the SOLID concepts.

# Technologies:

- Non-relational MongoDB database;
- ODM (Object Document Mapping) Mongoose to work with MongoDB database;
- Use of OOP;
- SOLID
- Unit tests using Mocha, Chai and Sinon.
# How to run:

To start the project, it is necessary to have the [Docker](https://docs.docker.com/engine/install/ubuntu/) installed.

After cloning the project on your computer, to start it you need to run the command:
```
docker-compose up -d && docker exec -it car_shop bash
```
and then run these commands one at a time in the project's root folder:
```
npm install
npm run dev
```
This will make the docker containers orchestrated and the application available..


After that, you can perform CRUD requests through some HTTP client, like `Insomnia`, `Postman`, `HTTPie` or even VSCode extensions like `Thunder Client` through the points listed below.

Tests were also developed with 100% coverage of the project, using the **Mocha**, **Chai** and **Sinon** tools. To run the project tests, it is necessary to run the command
```
npm run test:coverage
```
---

## 📚 Documentation (endpoints)

### 🚗 Cars

| Method | Functionality                           | URL                        |
| ------ | --------------------------------------- | -------------------------- |
| `GET`  | Returns all cars                        | http://localhost:3001/cars |

<details>
  <summary>The expected response from the request is as follows, with status 200:</summary>
  
```json
[
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
  },
  // ...
]

```

</details>
<br>
<br>

| Method | Functionality                                                                     | URL                            |
| ------ | --------------------------------------------------------------------------------- | ------------------------------ |
| `GET`  | Returns a car in the database (replace `:id` with a valid hex id)                 | http://localhost:3001/cars/:id |

<details>
  <summary>The expected response from the request is as follows, with status 200:</summary>
  
```json
{
  _id: "4edd40c86762e0fb12000003",
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}
```

</details>

<details>
  <summary>The request will fail in the following cases:</summary>
  - The endpoint returns <code>400</code>, with message <code>Id must have 24 hexadecimal characters</code> if the id has less than 24 characters;<br>
  - The endpoint returns <code>404</code>, with message <code>Object not found</code> if the id has 24 characters, but is invalid.
</details>
<br>
<br>

| Method | Functionality                                      | URL                        |
| ------ | -------------------------------------------------- | -------------------------- |
| `POST` | Register a vehicle in the database                 | http://localhost:3001/cars |

<details>
  <summary>The request body structure should follow the pattern below:</summary>
  
```json
{
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}
```

</details>

<details>
  <summary>The request response is as follows, with status 201:</summary>
  
```json
{
   _id: "4edd40c86762e0fb12000003",
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}
```

</details>

<details>
  <summary>The request will fail in the following cases:</summary>
  - The endpoint returns <code>400</code> if the request receives an empty object; <br>
  - The endpoint returns <code>400</code> when trying to create a car with less than 2 seats;<br>
  - The endpoint returns <code>400</code> when trying to create a car with a number of doors less than 2;<br>
  - The endpoint returns <code>400</code> when trying to create a car without <code>model</code>, <code>year</code>, <code>color</code> and <code>buyValue</code>;<br>
  - The endpoint returns <code>400</code> when trying to create a car without <code>doorsQty</code> and <code>seatsQty</code>;<br>
  - It is not possible to create a car if the attributes <code>model</code>, <code>year</code>, <code>color</code>, <code>buyValue</code>, <code>doorsQty</code> and <code>seatsQty</code> have the wrong types.
</details>
<br>
<br>

| Method | Functionality                                                                      | URL                            |
| ------ | ---------------------------------------------------------------------------------- | ------------------------------ |
| `PUT`  | Updates a car in the database (replace `:id` with a valid hex id)                  | http://localhost:3001/cars/:id |

<details>
  <summary>The request response is as follows, with status 200:</summary>
  
```json
{
  _id: "4edd40c86762e0fb12000003",
  model: "Fiat Uno",
  year: 1963,
  color: "blue",
  buyValue: 3500,
  seatsQty: 4,
  doorsQty: 4
}
```

</details>

<details></code>
  <summary>The request will fail in the following cases:</summary>
  - The endpoint returns <code>400</code>, with message <code>Id must have 24 hexadecimal characters</code> if the id has less than 24 characters;<br>
  - The endpoint returns <code>404</code>, with message <code>Object not found</code> c
if the id has 24 characters but its invalid;<br>
  - The endpoint returns <code>400</code> if <code>body</code> is empty.
</details>
<br>
<br>

| Method | Functionality                                                                      | URL                            |
| -------- | -------------------------------------------------------------------------------- | ------------------------------ |
| `DELETE` | Delete a car from the database (replace `:id` with a valid hex id)               | http://localhost:3001/cars/:id |

The endpoint returns, <code>without response</code>.

<details></code>
  <summary>The request will fail in the following cases:</summary>
  - The endpoint returns <code>400</code>, with message <code>Id must have 24 hexadecimal characters</code> if the id has less than 24 characters;<br>
  - The endpoint returns <code>404</code>, with message <code>Object not found</code> if the id has 24 characters, but is invalid.
</details>
<br>

### 🛵 Motorcyle

<h3>
The endpoints referring to motorcycles are similar to those for cars, only modifying the URL as in the example below.</h3>

⚠️ The best part of using OOP is that expanding the code to accept new types of vehicles becomes easy.

| Method | Functionality                            | URL                               |
| ------ | ---------------------------------------- | --------------------------------- |
| `GET`  | Returns a list of registered motorcycles | http://localhost:3001/motorcycles |

<details>
  <summary>The request response is as follows, with status 200:</summary>
  
```json
[
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Honda CG Titan 125",
    year: 1963,
    color: "red",
    buyValue: 3500,
    category: "Street",
    engineCapacity: 125
  },
  // ...
]

```

</details>
<br>

</details>

<h1>🚙  Bem vindo ao Projeto Car Shop!Welcome to Project Car Shop! 🛵</h1>

# Resumo do projeto:

<p>O projeto Car Shop é uma aplicação backend, que utiliza POO para a construção de uma API CRUD, com uma base de dados MongoDb acessada pela ORM mongoose. O projeto busca ainda a implementação dos conceitos SOLID.</p>

# Ferramentas utilizadas:

- Banco de dados não relacional MongoDB;
- ODM (Object Document Mapping) Mongoose para trabalhar com o banco de dados MongoDB;
- Utilização de POO;
- SOLID.
- Testes unitários com a utilização de Mocha, Chai e Sinon.
# Como rodar a aplicação

Para iniciar o projeto, é necessário possuir o [Docker](https://docs.docker.com/engine/install/ubuntu/) instalado.

Após clonar o projeto em seu computador, para iniciá-lo é necessário executar o comando
```
docker-compose up -d && docker exec -it car_shop bash
```
e na sequência execute esses comandos, um por vez
```
npm install
npm run dev
```
na pasta raíz do projeto. Isso fará com que os containers docker sejam orquestrados e a aplicação esteja disponível.

Após isso, você pode realizar as requisições de CRUD através de algum cliente HTTP, como o `Insomnia`, o `Postman`, o `HTTPie` ou até mesmo extensões do VSCode como o `Thunder Client` através dos enpoints listados abaixo.

Também foram desenvolvidos testes com cobertura de 100% do projeto, utilizando as ferramentas **Mocha**, **Chai** e **Sinon**. Para executar os testes do projeto, é necessário rodar o comando
```
npm run test:coverage
```
---

## 📚 Documentação (endpoints)

### 🚗 Cars

| Método | Funcionalidade                          | URL                        |
| ------ | --------------------------------------- | -------------------------- |
| `GET`  | Retorna uma lista de carros cadastrados | http://localhost:3001/cars |

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>
  
```json
[
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
  },
  // ...
]

```

</details>
<br>
<br>

| Método | Funcionalidade                                                                    | URL                            |
| ------ | --------------------------------------------------------------------------------- | ------------------------------ |
| `GET`  | Retorna um carro no banco de dados (substitua `:id` por um id hexadecimal válido) | http://localhost:3001/cars/:id |

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>
  
```json
{
  _id: "4edd40c86762e0fb12000003",
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}
```

</details>

<details>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A rota retorna o código <code>400</code>, com a mensagem <code>Id must have 24 hexadecimal characters</code> caso o id possua menos que 24 caracteres;<br>
  - A rota retorna o código <code>404</code>, com a mensagem <code>Object not found</code> caso o id possua 24 caracteres, mas seja inválido.
</details>
<br>
<br>

| Método | Funcionalidade                                     | URL                        |
| ------ | -------------------------------------------------- | -------------------------- |
| `POST` | Realiza o cadastro de um veículo no banco de dados | http://localhost:3001/cars |

<details>
  <summary>A estrutura do body da requisição deverá seguir o padrão abaixo:</summary>
  
```json
{
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}
```

</details>

<details>
  <summary>A resposta da requisição é a seguinte, com status 201:</summary>
  
```json
{
   _id: "4edd40c86762e0fb12000003",
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}
```

</details>

<details>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A rota retorna o código <code>400</code> caso a requisição receba um objeto vazio; <br>
  - A rota retorna o código <code>400</code> ao tentar criar um carro com quantidade de assentos inferior a 2;<br>
  - A rota retorna o código <code>400</code> ao tentar criar um carro com quantidade de portas inferior a 2;<br>
  - A rota retorna o código <code>400</code> ao tentar criar um carro sem <code>model</code>, <code>year</code>, <code>color</code> e <code>buyValue</code>;<br>
  - A rota retorna o código <code>400</code> ao tentar criar um carro sem <code>doorsQty</code> e <code>seatsQty</code>;<br>
  - Não é possível criar um carro se os atributos <code>model</code>, <code>year</code>, <code>color</code>, <code>buyValue</code>, <code>doorsQty</code> e <code>seatsQty</code> estiverem com tipos errados.
</details>
<br>
<br>

| Método | Funcionalidade                                                                     | URL                            |
| ------ | ---------------------------------------------------------------------------------- | ------------------------------ |
| `PUT`  | Atualiza um carro no banco de dados (substitua `:id` por um id hexadecimal válido) | http://localhost:3001/cars/:id |

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>
  
```json
{
  _id: "4edd40c86762e0fb12000003",
  model: "Fiat Uno",
  year: 1963,
  color: "blue",
  buyValue: 3500,
  seatsQty: 4,
  doorsQty: 4
}
```

</details>

<details></code>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A rota retorna o código <code>400</code>, com a mensagem <code>Id must have 24 hexadecimal characters</code> caso o id possua menos que 24 caracteres;<br>
  - A rota retorna o código <code>404</code>, com a mensagem <code>Object not found</code> caso o id possua 24 caracteres, mas seja inválido;<br>
  - A rota retorna o código <code>400</code> caso o <code>body</code> esteja vazio.
</details>
<br>
<br>

| Método   | Funcionalidade                                                                   | URL                            |
| -------- | -------------------------------------------------------------------------------- | ------------------------------ |
| `DELETE` | Deleta um carro do banco de dados (substitua `:id` por um id hexadecimal válido) | http://localhost:3001/cars/:id |

A rota retorna o status 204, <code>sem resposta</code>.

<details></code>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A rota retorna o código <code>400</code>, com a mensagem <code>Id must have 24 hexadecimal characters</code> caso o id possua menos que 24 caracteres;<br>
  - A rota retorna o código <code>404</code>, com a mensagem <code>Object not found</code> caso o id possua 24 caracteres, mas seja inválido.
</details>
<br>

### 🛵 Motorcyle

<h3>As rotas referentes a motos são semelhantes aos de carros, apenas modificando a URL conforme exemplo abaixo.</h3>

⚠️ A melhor parte de utilizar OOP é que expandir o código para aceitar novos tipos de veiculos se torna fácil.

| Método | Funcionalidade                         | URL                               |
| ------ | -------------------------------------- | --------------------------------- |
| `GET`  | Retorna uma lista de motos cadastradas | http://localhost:3001/motorcycles |

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>
  
```json
[
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Honda CG Titan 125",
    year: 1963,
    color: "red",
    buyValue: 3500,
    category: "Street",
    engineCapacity: 125
  },
  // ...
]

```

</details>
<br>
<br>

| Método | Funcionalidade                                                              | URL                                   |
| ------ | --------------------------------------------------------------------------- | ------------------------------------- |
| `GET`  | Retorna uma moto pelo seu id (substitua `:id` por um id hexadecimal válido) | http://localhost:3001/motorcycles/:id |

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>
  
```json
{
  _id: "4edd40c86762e0fb12000003",
  model: "Honda CG Titan 125",
  year: 1963,
  color: "red",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
}
```

</details>

<details>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A rota retorna o código <code>400</code>, com a mensagem <code>Id must have 24 hexadecimal characters</code> caso o id possua menos que 24 caracteres;<br>
  - A rota retorna o código <code>404</code>, com a mensagem <code>Object not found</code> caso o id possua 24 caracteres, mas seja inválido.
</details>
<br>
<br>

| Método | Funcionalidade                                   | URL                               |
| ------ | ------------------------------------------------ | --------------------------------- |
| `POST` | Realiza o cadastro de uma moto no banco de dados | http://localhost:3001/motorcycles |

<details>
  <summary>A estrutura do body da requisição deverá seguir o padrão abaixo:</summary>
  
```json
{
  model: "Honda CG Titan 125",
  year: 1963,
  color: "red",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
}
```

</details>

<details>
  <summary>A resposta da requisição é a seguinte, com status 201:</summary>
  
```json
{
   _id: "4edd40c86762e0fb12000003",
  model: "Honda CG Titan 125",
  year: 1963,
  color: "red",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
}
```

</details>

<details>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A rota retorna o código <code>400</code> caso a requisição receba um objeto vazio;<br>
  - A rota retorna o código <code>400</code> ao tentar criar uma moto com <code>category</code> diferente de <code>Street</code>, <code>Custom</code> ou <code>Trail</code>;<br>
  - A rota retorna o código <code>400</code> ao tentar criar uma moto com <code>category</code> diferente de string;<br>
  - A rota retorna o código <code>400</code> ao tentar criar uma moto com <code>engineCapacity</code> menor ou igual a zero;<br>
  - A rota retorna o código <code>400</code> ao tentar criar uma moto com <code>engineCapacity</code> maior que 2500;<br>
  - A rota retorna o código <code>400</code> ao tentar criar um moto sem <code>model</code>, <code>year</code>, <code>color</code> e <code>buyValue</code>;<br>
  - A rota retorna o código <code>400</code> ao tentar criar um moto sem <code>category</code> e <code>engineCapacity</code>;<br>
  - Não é possível criar uma moto se os atributos <code>model</code>, <code>year</code>, <code>color</code>, <code>buyValue</code>, <code>category</code> e <code>engineCapacity</code> estiverem com tipos errados.
</details>
<br>
<br>

| Método | Funcionalidade                                                                     | URL                                   |
| ------ | ---------------------------------------------------------------------------------- | ------------------------------------- |
| `PUT`  | Atualiza uma moto no banco de dados (substitua `:id` por um id hexadecimal válido) | http://localhost:3001/motorcycles/:id |

<details>
  <summary>A resposta da requisição é a seguinte, com status 200:</summary>
  
```json
{
  _id: "4edd40c86762e0fb12000003",
  model: "Fiat Uno",
  year: 1963,
  color: "blue",
  buyValue: 3500,
  seatsQty: 4,
  doorsQty: 4
}
```

</details>

<details></code>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A rota retorna o código <code>400</code>, com a mensagem <code>Id must have 24 hexadecimal characters</code> caso o id possua menos que 24 caracteres;<br>
  - A rota retorna o código <code>404</code>, com a mensagem <code>Object not found</code> caso o id possua 24 caracteres, mas seja inválido;<br>
  - A rota retorna o código <code>400</code> caso o <code>body</code> esteja vazio.
</details>
<br>
<br>

| Método   | Funcionalidade                                                                   | URL                                   |
| -------- | -------------------------------------------------------------------------------- | ------------------------------------- |
| `DELETE` | Deleta uma moto do banco de dados (substitua `:id` por um id hexadecimal válido) | http://localhost:3001/motorcycles/:id |

A rota retorna o status 204, <code>sem resposta</code>.

<details></code>
  <summary>A requisição irá falhar nos seguintes casos:</summary>
  - A rota retorna o código <code>400</code>, com a mensagem <code>Id must have 24 hexadecimal characters</code> caso o id possua menos que 24 caracteres;<br>
  - A rota retorna o código <code>404</code>, com a mensagem <code>Object not found</code> caso o id possua 24 caracteres, mas seja inválido.
</details>

---
