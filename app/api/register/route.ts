import { NextResponse } from "next/server";

import prisma from "@/app/lib/prismadb";
/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: 註冊新用戶
 *     description: 透過姓名、電子郵件和密碼註冊新用戶
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 *
 *
 */
export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;

  try {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("建立帳號出錯:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
