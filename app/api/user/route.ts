import { NextRequest,NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export async function GET(req: NextRequest) {
    const users = await prisma.user.findMany();
    console.log(users);
    return NextResponse.json({message:users},{status:200})
}