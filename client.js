const net = require("net");

const client = net.createConnection(6968, "10.0.1.150", () => {
    client.write("write on client side");
    client.on("data", data => {
        console.log(data.toString());
    });
    process.stdin.pipe(client);
});