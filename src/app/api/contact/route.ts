import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const { name, email, subject, body } = await request.json();

  if (!name || !email || !subject || !body) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  try {
    const message = await prisma.message.create({
      data: { name, email, subject, body },
    });

    return NextResponse.json({ success: true, message });
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong. (Server Error)' }, { status: 500 });
  }
}
