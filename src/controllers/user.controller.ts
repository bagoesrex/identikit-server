import { NextFunction, Request, Response } from 'express';
import * as userService from "../services/user.service"
import { userSchema } from '../validations/user.validation';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const validated = userSchema.parse(req.body);
        const user = await userService.createUser(validated);
        res.status(201).json({ status: 'success', message: 'User created successfully', data: user });
    } catch (error) {
        next(error);
    }
};

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await userService.getAllUsers()
        res.json({ status: "success", message: "User list retrieved successfully", data: users })
    } catch (error) {
        next(error);
    }
}

export const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        const validated = userSchema.parse(req.body);
        const user = await userService.updateUser(Number(id), validated);
        res.json({ status: 'success', message: 'User updated successfully', data: user });
    } catch (error) {
        next(error);
    }
};


export const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
        await userService.deleteUser(Number(id));
        res.json({ status: 'success', message: 'User deleted successfully' });
    } catch (error) {
        next(error);
    }
};