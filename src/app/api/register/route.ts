import { NextRequest , NextResponse} from "next/server";
import bcrypt from 'bcrypt'
import { User} from "@prisma/client";
import dbClient from "../../../../libs/prismadb";


export async function POST(request: NextRequest){
    const body = await request.json();

    const {name, email, password, confirmPassword} = body;
    const hashedPassword = await bcrypt.hash(password, 20);

    let user: User;
    try {
      user = await dbClient.user.create({
        data: {
          name,
          email,
          hashedPassword,
        },
      });
      return NextResponse.json(user);
    } catch (err: unknown) {
      NextResponse.error()
    }

}