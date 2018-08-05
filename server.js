const net = require("net");

const clients = [];

const server = net.createServer((client) => {
    console.log("Testing the server");
    // console.log("server", server);
    // console.log("client", client);
    // console.log("address", client.localAddress)
    // console.log("client address", client.address());
    // console.log("Server Address: ", server.address());
    client.write("client. write on the server side");
    client.on("data", data => {
        console.log(data.toString());

        const msg = data.toString();
        // console.log("message?: ", msg)

        // client.setTimeout(5000);
        // client.on("timeout", () => {
        //     console.log("client timed out");
        //     console.log(clients.connections);
        //     client.end();
        // })

        // setTimeout(function () {
        //     clients[1].destroy();
        // }, 5000);
        for (let i = 0; i < clients.length; i++) {
            clients[i].write("Message: " + msg);

            setTimeout(function () {
                clients[i].destroy();
            }, 5000);
        
            // clients[i].setTimeout(5000);
            // clients[i].on("timeout", () => {
            //     console.log("client " + i + " timed out")
            //     console.log(client.connections);
            //     clients[i].destroy();
            // })

        }
     });

 clients.push(client);
console.log("Client is: ", client)
    
});

server.listen(6968, () => { // loads as soon as the server is called  
    console.log("Server listening on port 6968");
    // console.log("Server opened  on", server.address()); // {address:'::', family: 'IPv6', port: 6968}
});