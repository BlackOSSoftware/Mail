import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDb } from "@/lib/mongodb";
import { User } from "@/models/User";
import { signAdminToken } from "@/lib/auth";

const ADMIN_EMAIL = "admin@mail.com";
const ADMIN_PASSWORD = "Admin@123";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = body?.email?.toString().toLowerCase();
  const password = body?.password?.toString();

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and password are required." },
      { status: 400 }
    );
  }

  await connectDb();

  let admin = await User.findOne({ email: ADMIN_EMAIL });
  if (!admin) {
    const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 10);
    admin = await User.create({
      email: ADMIN_EMAIL,
      passwordHash,
      role: "admin",
    });
  }

  if (email !== ADMIN_EMAIL) {
    return NextResponse.json(
      { message: "Invalid email or password." },
      { status: 401 }
    );
  }

  const isValid = await bcrypt.compare(password, admin.passwordHash);
  if (!isValid) {
    return NextResponse.json(
      { message: "Invalid email or password." },
      { status: 401 }
    );
  }

  const token = await signAdminToken({
    sub: admin._id.toString(),
    email: admin.email,
    role: "admin",
  });

  const response = NextResponse.json({ ok: true });
  response.cookies.set("admin_session", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return response;
}
