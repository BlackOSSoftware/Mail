import { SignJWT, jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not set in .env.local");
}

const secret = new TextEncoder().encode(JWT_SECRET);

export type AdminTokenPayload = {
  sub: string;
  email: string;
  role: "admin";
};

export async function signAdminToken(payload: AdminTokenPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(secret);
}

export async function verifyAdminToken(token: string) {
  return jwtVerify(token, secret);
}
