import { createClient, sql } from "@vercel/postgres"
import { Note } from "./schema"

export async function insertNote(note: Note) {
  const client = createClient()
  try {
    const {
      situation,
      feeling,
      distortion,
      evidence,
      disproof,
      restructuring,
      change,
      time,
    } = note
    const client = createClient()
    await sql`INSERT INTO Notes VALUES ('${situation}','${feeling}','${distortion}','${evidence}','${disproof}','${restructuring}','${change}','${time}')`
  } catch (e) {
    console.error(e)
    throw new Error("insert data failed.")
  } finally {
    await client.end()
  }
}
