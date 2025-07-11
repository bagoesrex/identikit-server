import express from 'express';
import * as userController from "../controllers/user.controller"

const router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export default router;