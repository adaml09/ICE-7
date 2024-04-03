const express = require("express");

const app = express();

const homePageRouter = require("./routes/home")

app.set("views", "./views");

app.set("view engine", "ejs");

app.use("/", homePageRouter)

app.listen(3500, () => {
    console.log("Express server listening on port 3500...")
});