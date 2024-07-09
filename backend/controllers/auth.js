import bcrypt, { hash } from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const register = async(req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt)

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random() * 10000),
            impressions: Math.floor(Math.random() * 10000)
        });

        const savedUser = await newUser.save();

        res.status(201).json({message:"New user created and saved successfully", savedUser})

    } catch (error) {
        res.status(500).json({message:"Internal server error", error:error.message})
    }
}

const login = async (req, res) => {
    
}