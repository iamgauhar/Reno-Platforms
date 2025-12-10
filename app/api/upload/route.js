import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const originalName = file.name || "image";
    const ext = path.extname(originalName) || ".jpg";

    const unique = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const filename = `${unique}${ext}`;

    // Ensuring upload folder exists
    const uploadDir = path.join(process.cwd(), "public/schoolImages");
    await fs.mkdir(uploadDir, { recursive: true });

    const filePath = path.join(uploadDir, filename);
    await fs.writeFile(filePath, buffer);

    return NextResponse.json({ filename }, { status: 201 });
  } catch (err) {
    console.error("Upload error:", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
