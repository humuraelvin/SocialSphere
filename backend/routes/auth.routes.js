import express from 'express';
import login from '../controllers/auth.js'

const router = express.Router();


router.post('/logn', login);

export default router;