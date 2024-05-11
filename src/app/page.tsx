import { Stack, NoteField } from "./component"
import { SubmitButton } from "./component/client"
export default function Home() {
  return (
    <form>
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
