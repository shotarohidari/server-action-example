import { Stack, Field } from "./component"
import { SubmitButton } from "./component/client"
export default function Home() {
  return (
    <form>
      <Stack>
        <Field label="状況" name="situation" />
        <Field label="気分" name="feeling" />
        <Field label="自動思考" name="distortion" />
        <Field label="根拠" name="evidence" />
        <Field label="反証" name="disproof" />
        <Field label="適応的思考" name="restructuring" />
        <Field label="心の変化" name="change" />
        <SubmitButton />
      </Stack>
    </form>
  )
}
