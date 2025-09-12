import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const heroDir = path.join(process.cwd(), "public", "hero-asset");

  // read files inside /public/hero-asset
  const files = fs.readdirSync(heroDir);

  const images = files.map((file, index) => ({
    id: index + 1,
    src: `/hero-asset/${file}`, // public assets are served from /
    alt: `Hero banner ${index + 1}`,
  }));

  return NextResponse.json(images);
}
