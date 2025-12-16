const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const signup = async (req, res) => {
    try {
        const { name, age, aadharNumber, password } = req.body;
        if (age < 18) {
            return res.status(400).json({
                message: "Not eligible to vote"
            })
        }
        // checking duplicate aadhar
        const existingAadhar = await User.findOne({ aadharNumber });
        if (existingAadhar) {
            return res.status(400).json({
                message: "User already exists"
            })
        }
        // hassing password by bcrypt
        const hashedPassword = await bcrypt.hash(password, 10)
        // save details in db
        await User.create({
            name,
            password: hashedPassword,
            aadharNumber,
            age
        })
        res.status(201).json({ message: "User registered successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { aadharNumber, password } = req.body
        const user = await User.findOne({ aadharNumber })
        if (!user) {
            res.status(404).json({
                message: "User not found"
            })
        }
        // match password
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        // jwt token generator : JWT token = entry pass

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            })
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    signup,
    login,
};