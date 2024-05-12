import { Note } from "./schema"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
export async function insertNote(note: Note) {
  try {
    await prisma.$connect()
    const newNote = await prisma.note.create({
      data: note,
    })
    console.log(newNote)
    return newNote
  } catch (e) {
    console.error(e)
    throw e
  } finally {
    await prisma.$disconnect()
  }
}
export async function fetchNote(id: number) {
  try {
    await prisma.$connect()
    const note = await prisma.note.findUnique({
      where: {
        id,
      },
    })
    return note
  } catch (e) {
    console.error(e)
    throw e
  }
}
