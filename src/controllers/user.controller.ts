import { Request, Response } from 'express';
import * as userService from "../services/user.service"

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json({ status: 'success', message: 'User created successfully', data: user });
    } catch (error: any) {
        // To do validation
        res.status(500).json({ status: 'error', message: 'Internal server error', errors: { server: error.message } });
    }
}