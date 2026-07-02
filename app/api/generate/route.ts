import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      hook: "AI viral moment",
      caption: "working now"
    },
    {
      id: 2,
      hook: "Fix confirmed",
      caption: "API is alive"
    }
  ]);
}