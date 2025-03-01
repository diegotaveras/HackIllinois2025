import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
  } from "./components/ui/menubar"
  import userIcon from "./assets/user-icon.png"
  
function MenuBar() {

  return (
    <Menubar className="flex flex-row justify-between border-transparent h-20 ">
        <MenubarMenu >
            <MenubarTrigger style={{display:'flex', gap: '16px'}} className="text-xl pr-240">RecipeApp</MenubarTrigger>
        </MenubarMenu>
       <div className="pr-10">
        <MenubarMenu>
              <MenubarTrigger>Home</MenubarTrigger>
          </MenubarMenu>
       </div>
       <div className="pr-10">
        <MenubarMenu>
              <MenubarTrigger>History</MenubarTrigger>
          </MenubarMenu>
       </div>
       <div className="pr-10">
        <MenubarMenu>
          <MenubarTrigger><img src={userIcon} alt="User" width={"30px"} height={"30px"}></img></MenubarTrigger>
        </MenubarMenu>
       </div>
    </Menubar>
  )
}

export default MenuBar