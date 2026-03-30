import {PrismaClient} from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

export const prisma = new PrismaClient({ adapter });

// USAGE: Import the client when calling the DB in your SERVICE for the BACKEND
// - Josh
// 
// ex. import prisma from "../path/to/prisma/client"