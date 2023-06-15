import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
    return NextResponse.json({ status: "OK", message: "RADHE ❣️ SHYAM" });
}
