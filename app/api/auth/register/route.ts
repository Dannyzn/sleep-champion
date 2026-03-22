import { NextResponse } from 'next/server'
import { Client } from 'pg'
import bcrypt from 'bcryptjs'

export async function POST(request: Request) {
  const { email, username, password } = await request.json()

  if (!email || !username || !password) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const client = new Client({ connectionString: process.env.DATABASE_URL })
  await client.connect()

  const existing = await client.query('SELECT * FROM users WHERE email = $1 OR username = $2', [email, username])

  if (existing.rows.length > 0) {
    await client.end()
    return NextResponse.json({ error: 'User exists' }, { status: 400 })
  }

  const hash = await bcrypt.hash(password, 10)
  await client.query('INSERT INTO users (email, username, password_hash) VALUES ($1, $2, $3)', [email, username, hash])
  await client.end()

  return NextResponse.json({ success: true })
}
