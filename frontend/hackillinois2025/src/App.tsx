import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MenubarDemo from "./Menu"
import {InputField} from "./Input"
import {ScrollAreaSection} from "./Scroll-area"
import { Separator } from "./components/ui/separator"
import History from "./pages/history";

export default function App() {

  return (
    <div>
      <div>
        <MenubarDemo />
      </div>
      <div className="container bg-blue-500 w-full h-27">
        <h1>RecipeApp</h1>
        <p>Budget your meals in college</p>
      </div>
      <div style={{ padding: '50px'}}>
      </div>
      <InputField />
      <Separator className="my-2" />
      <div>
        <ScrollAreaSection />
      </div>
    </div>
  );
}
