import 'dotenv/config'
import { Client } from 'pg'
import * as fs from 'fs'

async function init() {
  const client = new Client({ connectionString: process.env.DATABASE_URL })
  await client.connect()

  const schema = fs.readFileSync('./db/schema.sql', 'utf-8')
  await client.query(schema)

  console.log('✓ Database initialized')
  await client.end()
}

init().catch(console.error)
