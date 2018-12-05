import express from 'express';
const router = express.Router();
import login from './../controller/user/login'

router.post('/login', login);

export default router;
