import { sql, createClient } from "@vercel/postgres"
;(async () => {
  const client = createClient()
  try {
    await client.connect()
    const result =
      await sql`CREATE TABLE IF NOT EXISTS Notes ( Situation varchar(255), Feeling varchar(255), Distortion varchar(255), Evidence varchar(255), Disproof varchar(255), Restructuring varchar(255), Change varchar(255), Time timestamp);`
    console.dir(result, { depth: null })
  } catch (e) {
    console.error(e)
  } finally {
    await client.end()
  }
})()
