# ig-nodejs-02

## Configuration
```bash
 yarn global add typescript     
```
**Start docker in Ubuntu**
```bash
sudo service docker start  
```

**Para iniciar os serviços docker-compose.yml definidos em segundo plano.**
```bash
sudo service docker start  
```
**list containers**
```bash
docker-compose ps 
```
**stop and delete containers**
```bash
docker-compose down
```
**pause containers**
```bash
docker-compose pause
```
or
```bash
  docker-compose pause <nome-do-serviço>
```
**play containers**
```bash
docker-compose unpause
```
or
```bash
  docker-compose unpause <nome-do-serviço>
```



## Migrations

### Create Migration
- Create Migration file 
Example:My migration name is CreateSpecifications
```bash
 yarn migration:create ./src/shared/infra/typeorm/migrations/CreateCars
```
Edit File Migration created implementing methods UP and Down


### Run Migration
```bash
 npx typeorm-ts-node-commonjs migration:run -d ./src/shared/infra/typeorm/index.ts     
```

### Revert Migration
```bash
npx typeorm-ts-node-commonjs migration:revert -d ./src/shared/infra/typeorm/index.ts
```


## Cadastro de carro

### Requisitos Funcionais - RF
- Deve ser possível cadastrar um carro.


### Regras de Negócio - RN
- Não deve ser possível cadastrar um carro com uma placa já existente.
- Não deve ser possível cadastrar uma nova placa para um carro já existente.
- O carro deve ser cadastrado como disponibilidade por padrão.
- O usuário responsável pelo cadastro deve ser um administrador.

### Requisitos Não Funcionais - RNF


## Listagem de carros

### Requisitos Funcionais - RF
- Deve ser possível listar todos os carros disponíveis.

### Regras de Negócio - RN
- O usuário não precisa estar logado no sistema.

## Cadastro de Especificação no carros
### Requisitos Funcionais - RF
- Deve ser possível cadastrar uma especificação para um carro.
- Deve ser possível listar todas as especificaçoes  
- Deve ser possível listar todos os carros


### Regras de Negócio - RN
- Não deve ser possível cadastar uma especificação para um carro não cadastrado
- Não deve ser possível cadastar uma especificação já existente para o mesmo carro
- O usuário responsável pelo cadastro deve ser um usuário administrador

## Cadastro de Imagem do carro
### Requisitos Funcionais - RF
- Deve ser possível cadastrar a imagem do carro

### Requisitos Não Funcionais - RNF
- Utilizar o multer para upload dos arquivos


### Regras de Negócio - RN
- Usuário deve poder cadastrar mais de uma imagem para o mesmo carro
- O usuário responsável pelo cadastro deve ser um usuário administrador.


## Aluguel do Carro 
### Requisitos Funcionais - RF
- Deve ser possível cadastrar um aluguel

### Requisitos Não Funcionais - RNF
- 


### Regras de Negócio - RN
- Aluguel duração mínima 24 horas
- Não deve ser possíve cadastrar um aluguel caso já exista um aluguel aberto
