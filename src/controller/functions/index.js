
const CheckMessage = (msg,from) => {

    let status = false;
    messageModified = msg;
    messageModified.from = from;

    var found = String(messageModified.body).match("#[a-zA-Z0-9._@-]+|[\b]+$");

    if(found){
        messageModified.to = String(found).substr(1,100);
        status = true;
        messageModified.body = String(messageModified.body).replace(`#${messageModified.to}`,"");
    }else{
        messageModified.to = "Todos";
    }

    return [messageModified,status];
}

module.exports = CheckMessage;