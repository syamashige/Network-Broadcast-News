const net = require("net");

const client = net.createConnection(6968, "0.0.0.0", () => {
    // client.write("WELCOME!");
    client.on("data", data => {
        console.log("\x1b[36m", data.toString());
        // console.log(data.toString());
    });
    process.stdin.pipe(client);
});