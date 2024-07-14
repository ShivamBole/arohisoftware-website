import NextAuth, { CredentialsSignin } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import { User } from "./models/userModel";
import { compare } from "bcryptjs";
import { connect } from "./utils";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialProvider({
      name: "Credentials",
      credentials: {
        name: {
          label: "Name",
          type: "name",
        },
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;

        if (!email || !password) throw new CredentialsSignin("Signup First");

        // Connection with database here
        await connect();

        const user = await User.findOne({ email }).select("+password");

        if (!user) throw new CredentialsSignin("Invalid User");

        if (!user.password) throw new CredentialsSignin("Invalid User");

        const isMatch = await compare(password, user.password);

        if (!isMatch) throw new CredentialsSignin("Invalid User");
        

        return { name: user.name, email: user.email, id: user._id };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  }
});
