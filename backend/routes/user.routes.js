import express from 'express'

import {
    getUser,
    getUserFriends,
    addRemoveFriend
}from '../controllers/users.js'


const router = express.Router();


export default router;