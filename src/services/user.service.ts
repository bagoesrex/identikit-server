import prisma from "../config/db";

export const createUser = async (data: any) => {
    return prisma.user.create({ data })
}

export const getAllUsers = async () => {
    return prisma.user.findMany()
}

export const udpateUser = async (id: number, data: any) => {
    return prisma.user.update({ where: { id }, data })
}

export const deleteUser = async (id: number) => {
    return prisma.user.delete({ where: { id } })
}