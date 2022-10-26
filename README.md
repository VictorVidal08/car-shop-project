<details>
<summary><h2>English Version</h2></summary>

<h1>Welcome to Project Car Shop!</h1>



</details>

<h1>Bem vindo ao Projeto Car Shop!</h1>

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
