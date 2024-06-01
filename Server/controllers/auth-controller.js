const User = require('../models/user-model')

const home = async (req, res) =>
{
    try
    {
        res.status(200).send('Welcome to MERN STARTING using router');

    } catch (error)
    {
        console.log(error);
    }
};

const register = async (req, res) =>
{
    try
    {
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email })
        if (userExist)
        {
            return res.status(400).json({ msg: "email already exists" })
        }

        const userCreated = await User.create({ username, email, phone, password })

        res.status(200).json({ msg: userCreated });
    } catch (error)
    {
        res.status(500).json("Internal Server Error", error)
    }
};
module.exports = { home, register };