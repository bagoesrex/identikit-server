import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

export const errorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    if (err instanceof ZodError) {
        const formattedErrors: Record<string, string> = {};
        err.errors.forEach((e) => {
            if (e.path[0]) formattedErrors[e.path[0] as string] = e.message;
        });

        res.status(400).json({
            status: 'error',
            message: 'Validation failed',
            errors: formattedErrors,
        });
        return;
    }

    if (err.code === 'P2002') {
        res.status(400).json({
            status: 'error',
            message: 'Email already exists',
            errors: { email: 'This email is already taken' },
        });
        return;
    }

    res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
        errors: { server: err.message || 'Unexpected error' },
    });
    return;
};
