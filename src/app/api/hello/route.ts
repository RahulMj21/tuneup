import { NextResponse } from "next/server";

export async function GET() {
    try {
        return NextResponse.json({ status: "OK", message: "RADHE ❣️ SHYAM" });
    } catch (error) {
        return NextResponse.json(
            { status: "Failed", message: "Something Went Wrong" },
            { status: 500 }
        );
    }
}
