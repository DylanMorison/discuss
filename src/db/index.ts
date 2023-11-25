import { PrismaClient } from "@prisma/client"

// the primary way to interact with Prisma from Node.js is by instantiating the PrismaClient
// this is a singleton client that should be instantiated once and then passed around to the rest of your application

export const db = new PrismaClient()
