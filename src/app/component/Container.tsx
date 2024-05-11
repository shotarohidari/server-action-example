export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "grid", placeContent: "center", padding: "2rem" }}>
      {children}
    </div>
  )
}
