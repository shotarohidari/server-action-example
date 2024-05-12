import { Stack, NoteField } from "./component"
import { SubmitButton } from "./component/client"
import { validateNote } from "./schema"
import { insertNote } from "./dbAPI"
import { redirect } from "next/navigation"

export default function Home() {
  async function addNote(formData: FormData) {
    "use server"

    const rawFormData = {
      situation: formData.get("situation"),
      feeling: formData.get("feeling"),
      distortion: formData.get("distortion"),
      evidence: formData.get("evidence"),
      disproof: formData.get("disproof"),
      restructuring: formData.get("restructuring"),
      change: formData.get("change"),
    }
    const result = validateNote(rawFormData)
    if (!result.success) {
      console.dir(result.issues, { depth: null })
      throw new Error("validation failed.")
    }
    const { output } = result
    const {id} = await insertNote(output);
    redirect(`./${id}`);
  }
  return (
    <form action={addNote}>
      <Stack>
        <NoteField label="状況" name="situation" />
        <NoteField label="気分" name="feeling" />
        <NoteField label="自動思考" name="distortion" />
        <NoteField label="根拠" name="evidence" />
        <NoteField label="反証" name="disproof" />
        <NoteField label="適応的思考" name="restructuring" />
        <NoteField label="心の変化" name="change" />
        <SubmitButton />
      </Stack>
    </form>
  )
}
