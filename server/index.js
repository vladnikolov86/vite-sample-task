const express = require("express");
const app = express();
const port = 4200;
const path = require("path");

app.use("/assets", express.static(path.resolve('dist', "assets")));
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("dist", "index.html"));
});
const appPort = process.env.SERVER_PORT || port;
app.listen(appPort, () => {
    console.log(`Task dev running on ${appPort}`);
});