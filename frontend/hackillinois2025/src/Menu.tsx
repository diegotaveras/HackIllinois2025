import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "./components/ui/menubar"
import userIcon from "./assets/no-profile-pic.svg"
import { Link } from "react-router-dom";

function MenuBar() {

return (
  <div className="flex fixed w-full px-8 shadow-sm shadow-neutral-500 h-[--navbar-height] flex items-center bg-blue-900">
      <Menubar className="flex flex-row justify-between border-transparent h-26 ">
        <MenubarMenu >
            <MenubarTrigger style={{display:'flex', gap: '16px'}} className="text-2xl pr-240 text-white">RecipeApp</MenubarTrigger>
        </MenubarMenu>
        <div className="flex items-center pl-4 gap-10">
        <div>
        <MenubarMenu>
              <MenubarTrigger className="text-m text-white">
                <Link to="home">Home</Link>
              </MenubarTrigger>
          </MenubarMenu>
      </div>
      <div>
        <MenubarMenu>
              <MenubarTrigger className="text-m text-white">
                <Link to="/history">History</Link>
              </MenubarTrigger>
        </MenubarMenu>
      </div>
      <div>
        <MenubarMenu>
          <MenubarTrigger>
            <Link to ="/profile"><img src={userIcon} alt="User" width={"30px"} height={"30px"}></img></Link>
          </MenubarTrigger>
        </MenubarMenu>
      </div>
        </div>
    </Menubar>
  </div>
)
}

export default MenuBar