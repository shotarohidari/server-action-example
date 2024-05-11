import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <input type="submit" value="送信" disabled={pending}/>
  )
}
