import {
  string,
  maxLength,
  object,
  minLength,
  safeParse,
  Output,
  special,
} from "valibot"

export function validateNote(value: unknown) {
  return safeParse(note, value)
}

const note = object({
  situation: string([minLength(1), maxLength(255)]),
  feeling: string([minLength(1), maxLength(255)]),
  distortion: string([minLength(1), maxLength(255)]),
  evidence: string([minLength(1), maxLength(255)]),
  disproof: string([minLength(1), maxLength(255)]),
  restructuring: string([minLength(1), maxLength(255)]),
  change: string([minLength(1), maxLength(255)]),
})

export type Note = Output<typeof note>
