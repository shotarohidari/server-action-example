export function Field({ label, name }: { label: string; name: string }) {
  return (
    <div style={{display:"flex"}}>
      <label htmlFor={name} style={{flex:"2"}}>{label}:　</label>
      {/* TODO: フォーム引き伸ばせないようにする方法知りたい */}
      <textarea name={name} style={{flexGrow:"0"}} maxLength={255}/>
    </div>
  )
}
