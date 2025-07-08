import prisma from "../config/db";

export const createUser = async (data: any) => {
    return prisma.user.create({ data })
}