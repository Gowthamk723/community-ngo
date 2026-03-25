import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password, role } = await req.json(); // ✅ include role
    const hashedPassword = await bcrypt.hash(password, 10);

    await connectMongoDB();

    // Create user with role
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "NGO", // default to NGO if role not provided
    });

    return NextResponse.json(
      { message: "User registered.", user: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error during registration:", error);
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}