import { sql } from "@vercel/postgres"
import { Note } from "./schema"

export async function insertNote(note: Note) {
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
    await sql`INSERT INTO Notes VALUES ('${situation}','${feeling}','${distortion}','${evidence}','${disproof}','${restructuring}','${change}','${time}')`
  } catch (e) {
    console.error(e)
    throw new Error("insert data failed.")
  }
}
