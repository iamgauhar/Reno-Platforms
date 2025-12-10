
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const [rows] = await db.query("SELECT id, name, address, city, image FROM schools ORDER BY id DESC");
  return NextResponse.json(rows);
}

export async function POST(req) {
  const body = await req.json();
  const { name, address, city, state, contact, image, email_id } = body;

  await db.query(
    `INSERT INTO schools
      (name, address, city, state, contact, image, email_id)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [name, address, city, state, contact, image, email_id]
  );

  return NextResponse.json({ message: "OK" }, { status: 201 });
}
