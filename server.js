const net = require("net");

const clients = [];

const server = net.createServer((client) => {
    // console.log("Testing the server");
    // console.log("server", server);
    console.log("client", "\x1b[32m", client);
    // console.log("address", client.localAddress)
    // console.log("client address", client.address());
    // console.log("Server Address: ", server.address());
    
    // Welcome Board
    client.write(`
                                _____
     ( )( )       ^---^       (| .  .|)       o----o        o----o
    (x _ x)      ( ^o^ )       ( (Y) )        ('(Y)')       (^(x)^)
    ('')('')*    (  uu  )     (" )_(" )_/     c(")_(")      c(")_(")
    
                   WELCOME TO THIS MEDIOCRE CHAT THING!

    `);

    client.write("Please enter a username")
    client.on("data", data => {
        // console.log(data.toString());

        const msg = data.toString();
        
        if (msg.includes("/pet bunny")) {
            client.pet = "bunny"
            client.write("New Pet Bunny")
        } 
        
        if (msg.includes("/mypet")) {
            client.write("Pet:" + client.pet);
        }


        if (msg.includes("bunny")) {
            client.write(`
            ( )( )
           (x _ x)
           ('')('')*
        `
            )
        }
        else if (msg.includes("pig")) {
            client.write(`
             ^---^
            ( ^o^ )
            (  uu  )
            `)
        }
        else if (msg.includes("kurbydance")) {
            client.write(`
             (>0.0)>
             (^0.0^)
             <(0.0<)
             (v0.0v)
            `)
        }
        else if (msg.includes("dog")) {
            client.write(`
               _____
             (| .  .|)
              ( (Y) )
             (" )_(" )_/

            `)
        }
        else if (msg.includes("babybear")) {
            client.write(`
                o----o
                ('(Y)')
                c(")_(")
            `)
        }
        else if (msg.includes("hamham")) {
            client.write(`
                o----o
                (^(x)^)
                c(")_(")
            `)
        }   

        
        // msg("\x1b[46m");
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
        // for (let i = 0; i < clients.length; i++) {
        //     clients[i].write("Message: " + msg);

        //     // setTimeout(function () {
        //     //     clients[i].destroy();
        //     // }, 5000);
        
        //     // clients[i].setTimeout(5000);
        //     // clients[i].on("timeout", () => {
        //     //     console.log("client " + i + " timed out")
        //     //     console.log(client.connections);
        //     //     clients[i].destroy();
        //     // })
        // }

        

        clients.map(user => {
            let message = client.username + ": " + " " + msg;
            user.write(message);     // Unfortunately writes the username and then indents the msg

            if (!client.username) {
                client.username = msg;
                console.log("client info", client)
            }
            // console.log("\x1b[36", msg);
            setTimeout(function () {
                // this.destroy(); // kills the server 
                user.end();
            }, 20000);
        })
    });

 clients.push(client);
// console.log("Client is: ", client)
    
});

server.listen(6968, () => { // loads as soon as the server is called  
    console.log("Server listening on port 6968");
    // console.log("Server opened  on", server.address()); // {address:'::', family: 'IPv6', port: 6968}
});