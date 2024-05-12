export function Card(props: { title: string; description: string }) {
  const { title, description } = props
  return (
    <div style={{ border: "1px solid black",borderRadius:"4px",padding:"1rem" }}>
      <h2 style={{fontWeight:"bold"}}>{title}</h2>
      <p style={{color:"gray"}}>{description}</p>
    </div>
  )
}
