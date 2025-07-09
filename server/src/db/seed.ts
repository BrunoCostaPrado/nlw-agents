import { drizzle } from "drizzle-orm/postgres-js"
import { reset, seed } from "drizzle-seed"
import postgres from "postgres"
import { schema } from "./schema/index.ts"

const sql = postgres(process.env.DATABASE_URL ?? "")
const db = drizzle(sql, { schema, casing: "snake_case" })

await reset(db, schema)

await seed(db, schema).refine(f => {
  return {
    rooms: {
      count: 20,
      columns: {
        name: f.companyName(),
        description: f.loremIpsum(),
      },
    },
  }
})

await sql.end()
