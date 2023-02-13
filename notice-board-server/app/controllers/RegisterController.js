const bcrypt = require('bcrypt');
const userModel = require('./../models/user')
const jwt = require('jsonwebtoken');
const SECRET_KEY = "usersecretkey"
const saveUserRegister = async (req, res) => {
    const { name, email, password } = req.body;
    const saltRounds = 10;
    let hashPassword = await bcrypt.hash(password, saltRounds)
    try {
        const existingUser = await userModel.findOne({ email: email })
        if (existingUser) {
            return res.status(400).json({ message: "This Email already exists" });
        }
        const result = await userModel.create({
            email: email,
            password: hashPassword,
            username: name
        });

        const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);

        res.status(201).json({ message: 'User created successfully', user: result, token: token })

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Somthing went wrong' })
    }
}

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await userModel.findOne({ email: email })
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }
        const matchPassword = await bcrypt.compare(password, existingUser.password);

        if (!matchPassword) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, SECRET_KEY);

        res.status(200).json({ message: 'User login successfully', user: existingUser, token: token })


    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Somthing went wrong' })
    }
}

module.exports = {
    saveUserRegister,
    userLogin
}