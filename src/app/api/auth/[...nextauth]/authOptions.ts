import NextAuth, { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import  CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import dbClient from "../../../../../libs/prismadb";


export const authOptions :NextAuthOptions= {
    providers: [
        Google({
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    
        CredentialsProvider({
          name: "credentials",
          credentials: {
            email: {
              label: "email",
              type: "text",
            },
            password: {
              label: "password",
              type: "password",
            },
          },
          async authorize(credentials : any) {
            if (!credentials?.email || !credentials.password) {
              throw new Error("Invalid email or password");
            }
    
            const user = await dbClient.user.findUnique({
              where: {
                email: credentials.email,
              },
            });
    
            if (!user || !user?.hashedPassword) {
              throw new Error("Invalid email or password");
            }
    
            const isCorrectPassword = await bcrypt.compare(
              credentials.password,
              user.hashedPassword
            );
    
            if (!isCorrectPassword) {
              throw new Error("Invalid email or password");
            }
    
            return user;
          },
        }),
      ],
      pages: {
        signIn: "/login",
      },
      session: {
        strategy: "jwt",
      },
      secret: process.env.NEXTAUTH_SECRET
}

export default authOptions;