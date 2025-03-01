import { Button } from "./components/ui/button"
import { Input } from "@/components/ui/input"

export function InputField() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit" style={{backgroundColor: 'black'}}>Enter</Button>
    </div>
  )
}