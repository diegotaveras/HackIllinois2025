import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "./components/ui/menubar"
  import { NavLink } from 'react-router-dom'
  import userIcon from "./assets/user-icon.svg"
  
//   export function MenubarDemo() {
//     return (
//         <nav className="navbar navbar-light">
//             <div className="container">
//                 <NavLink activeClassName="active" className="navbar-brand" to="/" end>
//                 RecipeApp
//                 </NavLink>
//             </div>
//         </nav>
//     //   <Menubar>
//     //     <MenubarMenu>
//     //         <MenubarTrigger>RecipeApp</MenubarTrigger>
//     //     </MenubarMenu>
//     //     <div style={{padding: '100px'}}></div>
//     //     <MenubarMenu>
//     //       <MenubarTrigger>Home</MenubarTrigger>
//     //       <MenubarContent>
//     //         {/* <MenubarItem>
//     //           New Tab <MenubarShortcut>⌘T</MenubarShortcut>
//     //         </MenubarItem>
//     //         <MenubarItem>
//     //           New Window <MenubarShortcut>⌘N</MenubarShortcut>
//     //         </MenubarItem>
//     //         <MenubarItem disabled>New Incognito Window</MenubarItem>
//     //         <MenubarSeparator />
//     //         <MenubarSub>
//     //           <MenubarSubTrigger>Share</MenubarSubTrigger>
//     //           <MenubarSubContent>
//     //             <MenubarItem>Email link</MenubarItem>
//     //             <MenubarItem>Messages</MenubarItem>
//     //             <MenubarItem>Notes</MenubarItem>
//     //           </MenubarSubContent>
//     //         </MenubarSub>
//     //         <MenubarSeparator />
//     //         <MenubarItem>
//     //           Print... <MenubarShortcut>⌘P</MenubarShortcut>
//     //         </MenubarItem> */}
//     //       </MenubarContent>
//     //     </MenubarMenu>
//     //     <div style={{padding: '20px'}}></div>
//     //     <MenubarMenu>
//     //       <MenubarTrigger>History</MenubarTrigger>
//     //       <MenubarContent>
//     //         {/* <MenubarItem>
//     //           Undo <MenubarShortcut>⌘Z</MenubarShortcut>
//     //         </MenubarItem>
//     //         <MenubarItem>
//     //           Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
//     //         </MenubarItem>
//     //         <MenubarSeparator />
//     //         <MenubarSub>
//     //           <MenubarSubTrigger>Find</MenubarSubTrigger>
//     //           <MenubarSubContent>
//     //             <MenubarItem>Search the web</MenubarItem>
//     //             <MenubarSeparator />
//     //             <MenubarItem>Find...</MenubarItem>
//     //             <MenubarItem>Find Next</MenubarItem>
//     //             <MenubarItem>Find Previous</MenubarItem>
//     //           </MenubarSubContent>
//     //         </MenubarSub>
//     //         <MenubarSeparator />
//     //         <MenubarItem>Cut</MenubarItem>
//     //         <MenubarItem>Copy</MenubarItem>
//     //         <MenubarItem>Paste</MenubarItem> */}
//     //       </MenubarContent>
//     //     </MenubarMenu>
//     //     <div style={{padding: '20px'}}></div>
//     //     <MenubarMenu>
//     //       <MenubarTrigger>Profile</MenubarTrigger>
//     //       {/* <MenubarContent>
//     //         <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
//     //         <MenubarCheckboxItem checked>
//     //           Always Show Full URLs
//     //         </MenubarCheckboxItem>
//     //         <MenubarSeparator />
//     //         <MenubarItem inset>
//     //           Reload <MenubarShortcut>⌘R</MenubarShortcut>
//     //         </MenubarItem>
//     //         <MenubarItem disabled inset>
//     //           Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
//     //         </MenubarItem>
//     //         <MenubarSeparator />
//     //         <MenubarItem inset>Toggle Fullscreen</MenubarItem>
//     //         <MenubarSeparator />
//     //         <MenubarItem inset>Hide Sidebar</MenubarItem>
//     //       </MenubarContent> */}
//     //     </MenubarMenu>
//     //     {/* <MenubarMenu>
//     //       <MenubarTrigger>Profiles</MenubarTrigger>
//     //       <MenubarContent>
//     //         <MenubarRadioGroup value="benoit">
//     //           <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
//     //           <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
//     //           <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
//     //         </MenubarRadioGroup>
//     //         <MenubarSeparator />
//     //         <MenubarItem inset>Edit...</MenubarItem>
//     //         <MenubarSeparator />
//     //         <MenubarItem inset>Add Profile...</MenubarItem>
//     //       </MenubarContent>
//     //     </MenubarMenu> */}
//     //   </Menubar>
//     )
//   }  

function MenubarDemo() {

  return (
    <Menubar className="flex flex-row justify-between border-transparent justify-self-stretch bg-white-500 h-20 drop-shadow-xl box-sizing: inherit">
        <MenubarMenu >
            <MenubarTrigger className="text-xl">RecipeApp</MenubarTrigger>
        </MenubarMenu>
        <div style={{ padding: '350px'}}></div>
        <MenubarMenu>
            <MenubarTrigger classNAme="text-xl">Home</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger className="text-lg">History</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
            <MenubarTrigger><img src={userIcon} alt="User" width={"30px"} height={"30px"}></img></MenubarTrigger>
        </MenubarMenu>
    </Menubar>
  )
}

export default MenubarDemo