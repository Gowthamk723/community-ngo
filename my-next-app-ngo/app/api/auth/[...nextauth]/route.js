import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectMongoDB();

          const user = await User.findOne({ email });

          if (!user) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (!passwordsMatch) return null;

          // Return only needed fields, including role
          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
            role: user.role,
          };
        } catch (error) {
          console.error("NextAuth authorize error:", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/", // redirect to login page
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role; // attach role to JWT token
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role; // make role available in session
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

// ✅ Export both GET and POST for App Router
export { handler as GET, handler as POST };