export function DateInfo(props: { date: Date }) {
  const { date } = props
  return <div>投稿日時: {date.toLocaleTimeString()}</div>
}
