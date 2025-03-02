import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "./components/ui/menubar"
import userIcon from "./assets/user-icon.png"
import { Link } from "react-router-dom";

function MenuBar() {

return (
  <div className="flex fixed w-full px-8 shadow-sm shadow-neutral-500 h-[--navbar-height] flex items-center">
      <Menubar className="flex flex-row justify-between border-transparent h-20 ">
        <MenubarMenu >
            <MenubarTrigger style={{display:'flex', gap: '16px'}} className="text-xl pr-240">RecipeApp</MenubarTrigger>
        </MenubarMenu>
        <div className="flex items-center gap-15">
        <div>
        <MenubarMenu>
              <MenubarTrigger>
                <Link to="home">Home</Link>
              </MenubarTrigger>
          </MenubarMenu>
      </div>
      <div>
        <MenubarMenu>
              <MenubarTrigger>
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