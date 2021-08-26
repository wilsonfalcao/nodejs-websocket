# Socket.IO
#### Criação de chat em NodeJS com recursos realtime

Esse projeto tem o intuito de prover um exemplo de projeto de chat com uso específico da biblioteca Socket.IO. Os recursos aqui disponibilizados poderão ser integrados com qualquer linguagem ou projeto que faça uso do WSClient ou próprio SocketIO Client.

- Disponibilização de API para consumo
- Ambiente online para execução do serviço do serviço e teste
- Baixo acoplamento da biblioteca Socket.IO podendo ser facilmente trocada para WS ou SpringIO

## Bibliotecas e recursos utilizados na criação de projetos

Para utilização ou conhecimento de cada recurso utilizado neste projeto poderá ser obtido o site abaixo para mais detalhes.

- [express](https://expressjs.com/pt-br/)
- [socket.io](https://reactnavigation.org/docs/stack-navigator/)

### Instalação

Instale o ngrok para expor o ambiente do projeto local para internet.
```sh
sudo snap install ngrok
```
Abra a pasta do projeto e instale todos as dependências do projeto 
```sh
npm install
```
Execute o projeto local e depois exponha com ngrok
```sh
node App
ngrok http 3000
```
