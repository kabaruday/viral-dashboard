import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json([
    {
      id: 1,
      hook: "AI viral moment",
      caption: "content generated successfully"
    },
    {
      id: 2,
      hook: "Impossible transformation",
      caption: "brick to marble cinematic"
    }
  ]);
}