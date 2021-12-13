const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors());

app.get("/api/users", (req, res) => {
    return res.json([{
        age: 57,
        description: "CEO of apple inc.",
        name: "Steve Jobs",
        title: "CEO",
    }]);
});

app.all("*", (req, res) => {
    res.status(404).json("Not found!!");
});

const port = 8080;

app.listen(port, () =>
    console.log(`\n Express server is listening port: ${port}. \n`)
);
