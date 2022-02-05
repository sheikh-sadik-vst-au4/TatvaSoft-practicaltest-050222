import express from 'express';
import { addUser,getUsers,deleteUser } from './controllers/userController.js';
const router = express.Router();

router.get('/users',getUsers)
router.post('/user',addUser);
router.delete('/user/:id',deleteUser);

export default router;