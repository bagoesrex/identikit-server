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

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await userService.getAllUsers()
        res.json({ status: "success", message: "User list retrieved successfully", data: users })
    } catch (error: any) {
        res.status(500).json({ status: 'error', message: 'Failed to retrieve user list', errors: { server: error.message } });
    }
}

export const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const user = await userService.udpateUser(Number(id), req.body)
        res.json({ status: 'success', message: 'User updated successfully', data: user })
    } catch (error: any) {
        // To do validation
        res.status(500).json({ status: 'error', message: 'Internal server error', errors: { server: error.message } });
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        await userService.deleteUser(Number(id))
        res.json({ status: 'success', message: 'User deleted successfully' })
    } catch (error: any) {
        res.status(404).json({ status: 'error', message: 'User not found', errors: { id: error.message } })
    }
}