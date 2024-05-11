export function Stack({
  space = 1,
  children,
}: {
  space?: number
  children: React.ReactNode
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection:"column",
        gap: `${space}rem`,
      }}>
      {children}
    </div>
  )
}
