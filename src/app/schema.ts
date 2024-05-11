import {
  string,
  maxLength,
  isoTimestamp,
  object,
  minLength,
  safeParse,
  Output,
  special,
} from "valibot"
import { isTimeStamp } from "./util"

export function validateNote(value: unknown) {
  return safeParse(note, value)
}

const timestamp =
  special<`${string}-${string}${string} ${string}:${string}:${string}`>(
    (val) => {
      const isValid = isTimeStamp(val)
      console.log({ isValid })
      return isValid
    }
  )

const note = object({
  situation: string([minLength(1), maxLength(255)]),
  feeling: string([minLength(1), maxLength(255)]),
  distortion: string([minLength(1), maxLength(255)]),
  evidence: string([minLength(1), maxLength(255)]),
  disproof: string([minLength(1), maxLength(255)]),
  restructuring: string([minLength(1), maxLength(255)]),
  change: string([minLength(1), maxLength(255)]),
  time: timestamp,
})

export type Note = Output<typeof note>
