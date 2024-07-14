import dotenv from "dotenv";
dotenv.config();
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";
import { User } from "@/models/userModel";
import { connect } from "@/utils";

export async function POST(request: NextRequest) {
  try {
    // Parsing the request body
    const reqBody = await request.json();
    const { name, email, password } = reqBody;

    console.log("Request body:", reqBody);

    // Establishing a connection with the database
    await connect();
    console.log("Connected to database");

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists");
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Hashing the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    console.log("Password hashed");

    // Creating a new user
    const savedUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    console.log("User created:", savedUser);

    // Sending verification email
    await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });
    console.log("Verification email sent");

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    console.error("Error in POST /api/users:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
