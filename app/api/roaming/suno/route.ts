import { NextRequest,NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export async function GET(req: NextRequest) {
    const roamingList = await prisma.song.findMany();
    return NextResponse.json({ message: roamingList }, { status: 200 });
}


