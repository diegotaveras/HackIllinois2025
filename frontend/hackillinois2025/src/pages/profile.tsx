import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import emptyAvatar from "@/assets/empty-avatar.png"
  
export default function Profile() {

  return (
    <div>
        <div style={{padding: 70}}></div>
        <div className="flex flex flex-col items-center">
            <Avatar className="w-40 h-40">
                <AvatarImage src={emptyAvatar} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    </div>
  );   
}