import Link from "next/link"
import { Stack } from "../component"
import { Card } from "../component/Card"
import { DateInfo } from "../component/DateInfo"
import { fetchNote } from "../dbAPI"
import { keytoLabel } from "../util"

export default async function Page(props: { params: { id: string } }) {
  const { id } = props.params

  const numId = Number(id)
  if (!Number.isInteger(numId)) {
    throw new Error("IDは自然数で指定してください。")
  }
  const note = await fetchNote(numId)
  if (!note) {
    throw new Error("存在しないNoteです")
  }
  return (
    <main>
      <Stack>
        <Link href={"/"}>
          投稿画面に戻る
        </Link>
        <DateInfo date={note.createdAt} />

        {Object.entries(note)
          .filter(([key, _]) => key !== "id" && key !== "createdAt")
          .map(([key, value]) => {
            return (
              <Card
                key={key}
                title={keytoLabel(key)}
                description={String(value)}
              />
            )
          })}
      </Stack>
    </main>
  )
}
