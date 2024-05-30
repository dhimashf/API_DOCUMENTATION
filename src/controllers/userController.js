const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/usermodel');

const JWT_SECRET = 'isadyaudsay283u1heaaSADSJAB';

exports.register = (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    const newUser = {
        email: email,
        password: hashedPassword
    };

    User.create(newUser, (err, data) => {
        if (err) {
            console.error("Error registering user:", err);
            res.status(500).send({ message: "Error registering user." });
            return;
        }
        res.status(201).send({ message: "User registered successfully!" });
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;

    User.findByEmail(email, (err, user) => {
        if (err) {
            console.error("Error finding user:", err);
            res.status(500).send({ message: "Error finding user." });
            return;
        }

        if (!user) {
            res.status(404).send({ message: "User not found." });
            return;
        }

        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid) {
            res.status(401).send({ message: "Invalid Password!" });
            return;
        }

        const token = jwt.sign({ id: user.id }, JWT_SECRET, {
            expiresIn: 86400 // 24 hours
        });

        res.status(200).send({
            id: user.id,
            email: user.email,
            token: token
        });
    });
};
