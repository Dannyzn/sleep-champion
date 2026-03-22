import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { Client } from 'pg'
import bcrypt from 'bcryptjs'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        const client = new Client({ connectionString: process.env.DATABASE_URL })
        await client.connect()

        const result = await client.query('SELECT * FROM users WHERE email = $1', [credentials.email])
        await client.end()

        if (result.rows.length === 0) return null

        const user = result.rows[0]
        const isValid = await bcrypt.compare(credentials.password, user.password_hash)

        if (!isValid) return null

        return { id: user.id, email: user.email, name: user.username }
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
  },
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }
