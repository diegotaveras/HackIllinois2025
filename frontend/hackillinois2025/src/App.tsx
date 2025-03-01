import { useEffect, useState } from "react";
import NavBar from "./navbar";
// import "./App.css";
import { Recipetype } from "./types";
import {RecipeList} from "./recipe";
import {MenuBar} from "./menu"
// import { BrowserRouter, Routes, Route } from 'react-router-dom'


export default function App() {

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex">
        <MenuBar />
      </div>
      <div style={{padding: 70}}></div>
      <div>
        <div className=""><NavBar onSearch={search}></NavBar></div>
        <div>
            {searchResults.length === 0 ? (
              <p>No recipes found.</p>
            ) : (
              <RecipeList recipes={searchResults} />
            )}
        </div>
      </div>
    </div>

    //     <main>
    //   <BrowserRouter>
    //     <Navbar />
    //     <div className='min-h-screen w-full flex items-center justify-center'>
    //       <Routes>
    //         <Route path='/' element={<Home />} />
    //         <Route path='/about' element={<About />} />
    //         <Route path='/pricing' element={<Pricing />} />
    //         <Route path='/contact' element={<Contact />} />
    //       </Routes>
    //     </div>
    //   </BrowserRouter>
    // </main>
    
  )
}
