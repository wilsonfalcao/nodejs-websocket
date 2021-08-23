//Importando variáveis globais
require("./global");

//Importando dependências para configuração do serviço
const IOWSDependency = require(dependeciIOPath);

//Importando Função de inicialização e passando parâmetros de dependência
var ServerIOStart = require(ServerIOStartPath)
.WebsocketIOLibs(new IOWSDependency());

//Executando o serviço
ServerIOStart.InitialServerStart();
