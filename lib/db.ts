import { PrismaClient } from '@prisma/client';
import { PrismockClient } from 'prismock';
const prismaClientSingleton = () => {
    /// Use in-memory db in CI.
    return process.env.VERCEL_URL === undefined ? new PrismaClient() : new PrismockClient();
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
    prisma?: PrismaClientSingleton
}

const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

export default prisma;

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;