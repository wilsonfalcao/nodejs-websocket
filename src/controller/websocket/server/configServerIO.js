const CheckMessage = require("../../functions/index");

exports.WebsocketIOLibs = (DP) =>{

    //Disponibilizar o arquivo index para solicitações via Browser
    const IndexHTMLServer = (INDEX = __basedir+"/src/pages/main/index.html") =>{

        DP.app.get('/', (req, res) => {
            res.sendFile(INDEX);
        });

    }

    //Configuração do serviço SocketIO. Essa função poderá ser implementada fora função desse arquivo
    const ConfigIOServer = ()=>{

        DP.io.on('connection', (socket) => {
            
            //Informando nova entrada a todos
            console.log('new user joined');

            DP.io.emit('user-connected', `.:New user joined the chat:. User ID -> ${socket.id}` );

            DP.io.sockets.in(socket.id).emit('user-connected',`Welcome to Realtime Chat, 
            you are the user number ${Date.now("")}. We're quite glad to see you here, please get look our
            chat`);
        
            //Informando desconexão
            socket.on('disconnect', () => {
                console.log('the guest was disconneted');
                DP.io.emit('user-disconnected', `.:The user (${socket.id}) has disconnected from the chat:.`);
            });
        
            //listening messages from server
            socket.on('chat-message', (msg) => {

                const [messageModified,status] =  CheckMessage(msg,socket.id);

                if(status){
                    DP.io.sockets.in(messageModified.to).emit('chat-message',messageModified);
                    DP.io.sockets.in(socket.id).emit('chat-message',messageModified);
                }else{
                    DP.io.emit('chat-message', msg);
                }
            });

        });

    }

    //Função de inicialização de toodo serviço pela porta padrão.
    const InitialServerStart = (PORT = 3000) =>{


        //Definindo arquivo HTML para Client IO
        IndexHTMLServer();

        //Configurando Hendlers IO
        ConfigIOServer();
        
        //Ouvindo o serviço
        DP.server.listen(PORT, function(){
            console.log(`Listening on port ${PORT}`);
            console.log(`http://localhost:${PORT}`);
        });

    }

    return {
        InitialServerStart,
    }

}