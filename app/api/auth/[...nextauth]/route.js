import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    // Google login
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRETS,
    }),

    // Credentials login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // **Demo purpose:** hardcoded check
        if (credentials.email === "admin@example.com" && credentials.password === "123456") {
          return { id: 1, name: "Admin", email: "admin@example.com" }
        }
        return null
      }
    })
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
