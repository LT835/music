import { NextRequest,NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export async function GET(req: NextRequest) {
    const roamingList = await prisma.song.findMany({
        orderBy: {
            likeCount: 'desc' // 按 likeCount 字段从大到小排序
        }
    });
    return NextResponse.json({ message: roamingList }, { status: 200 });
}


