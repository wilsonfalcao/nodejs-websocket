exports.WebsocketIOLibs = (DP) =>{

    const IndexHTMLServer = (INDEX = __basedir+"/src/pages/main/index.html") =>{

        DP.app.get('/', (req, res) => {
            res.sendFile(INDEX);
        });

    }

    const ConfigIOServer = ()=>{

        DP.io.on('connection', (socket) => {
            
            console.log('a user connected');
        
            //get guest
            socket.on('disconnect', () => {
                console.log('user disconnected');
            });
        
            //listening messages from server
            socket.on('chat message', (msg) => {
                DP.io.emit('chat message', msg);
              });
        });

    }

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