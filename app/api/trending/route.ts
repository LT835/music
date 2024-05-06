import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function GET(req: NextRequest) {
    const trendingList = await prisma.song.findMany({
        orderBy: {
            listenerCount: 'desc'
        }
    });

    return NextResponse.json({ message: trendingList }, { status: 200 });
}