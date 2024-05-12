export function Container({ children }: { children: React.ReactNode }) {
  return (
    // TODO: 幅固定の仕方が分からん
    <div style={{ display: "grid", placeContent: "center", padding: "2rem" }}>
      {children}
    </div>
  )
}
