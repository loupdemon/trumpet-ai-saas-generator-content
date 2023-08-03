import { NextResponse } from "next/server";
import { db } from "@/lib/db";
export async function GET(req: Request) {
  try {
    const platforms = await db.platform.findMany({
      select: {
        id: true,
        name: true
      },
    });
    return new NextResponse(JSON.stringify(platforms));
  } catch (e) {
    return new NextResponse(null,{status: 500});
  }
}