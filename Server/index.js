require("dotenv").config();
const express = require("express");
const router = require('./router/auth-router')
const app = express();
const connectDb = require('./utils/db')

app.use(express.json());

app.use("/api/auth", router)

app.get("/", (req, res) =>
{
    res.status(200).send('Welcome to MERN STARTING')
})
app.get("/registration", (req, res) =>
{
    res.status(200).send('Welcome to Registration Page')
})

const PORT = 5000;
connectDb().then(() =>
{
    app.listen(PORT, () =>
    {
        console.log(`server is running at port ${PORT}`);
    })
})