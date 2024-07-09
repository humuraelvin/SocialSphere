import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import multer from 'multer'
import helmet from 'helmet'
import morgan from 'morgan'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import dbconnection from './utils/dbconnection.js'
import { register } from './controllers/auth.js'
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'
import postRoutes from './routes/post.routes.js'
import {verifyToken} from './middleware/auth.middleware.js'
import { createPost } from './controllers/posts.js'
import User from './models/User.js'
import Post from './models/Post.js'
import { users, posts } from './data/data.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()

dotenv.config()

app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())
app.use("/assets", express.static(path.join(__dirname, '/public/assets')))


const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "/public/assets");
    },
    filename: function (req, file, cb){
        cb(null, file.originalname)
    }
})

const upload = multer({ storage })


app.post("/auth/register", upload.single("picture"), verifyToken, register)
app.post('/posts', verifyToken, upload.single("picture"), createPost);

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

const PORT = process.env.PORT || 6001


dbconnection();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

    // User.insertMany(users);
    // Post.insertMany(posts);

})