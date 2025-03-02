import React, { useEffect, useState } from "react";
import Chart from "@/components/chart"; 
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Item } from "@radix-ui/react-menubar";

export default function History() {

  const [history, setHistory] = useState<{
    recipeId: string;
    name: string;
    timestamp: string;
    ingredients: string;
    cost: number;
    recipeBreakdown: string;
  }[]>([])
  const [widgetData, setWidgetData] = useState<string[]>([]);
  const [groceryCart, setGroceryCart] = useState<string[]>([]);
  const [toggleCart, setToggleCart] = useState<boolean>(false);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch("http://localhost:8000/history");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("History data:", data);
        // Optionally update state here with the data.
        setHistory(data.history)
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };
  
    fetchHistory();
  }, []);
  useEffect(() => {
    // Define a type for your data items that will hold the HTML
    type WidgetDataItem = {
      recipeId: string;
      recipeBreakdown: string;
    };
  
    const fetchData = async () => {
        const params = {
            mode: 'cors',
            defaultCss: true,
            headers: {
              'x-api-key': '147767d58ccc461d813efec4ffe54ec6',
              'Content-Type': 'text/html',
              'User-Agent': 'My-App',
              'Accept': '*/*',
            },
          };
        const data: WidgetDataItem[] = await Promise.all(

        history.map(async (item) => {
            
            const response = await fetch(
                `https://api.spoonacular.com/recipes/${item.recipeId}/priceBreakdownWidget.json`
                ,
            params as any);
          return {
            recipeId: item.recipeId,
            recipeBreakdown: item.recipeBreakdown
          };
        })
      );
      console.log(data)
      setWidgetData(data.map(item => item.recipeBreakdown));
    };
  
    fetchData();
  }, [history]);
  const getImage = () => {

  }
  const HistoryItem = ({name, index}: {name:string;index:number}) => (
    <Popover>
      <PopoverTrigger className="flex flex-row items-center border-transparent bg-grey p-2 w-full shadow-none mr-2 p-2 cursor-pointer">
      
        <p className="pr-2">{index}</p>
        <p>{name}</p>
      </PopoverTrigger>
      <PopoverContent className="bg-white shadow-lg w-auto">
        <p>{widgetData[index]}</p>
      </PopoverContent>
    </Popover>
  );
  const handleGroceries = async () => {
    try {
        const response = await fetch('http://127.0.0.1:8000/groceries')
        const data = await response.json()
        const results: string[] = data.cart
        if (results.length > 0) {
          setGroceryCart(results)
          setToggleCart(!toggleCart)
        } 
      } catch(error) {
        console.log("Error:", error)
      }
  }
  return (
    <>
    <div className="w-full flex flex-row justify-between justify-items-center p-3">
      <div className="flex flex-col justify-center justify-content-center w-auto">
        {history.map((item, index) => (
          <HistoryItem
            key={item.recipeId}
            name={item.name}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-col justify-center justify-content-center grow">
      <p className="flex text-3xl justify-center align-center pb-5 pt-7">Weekly Meal History</p>
        <Chart 
          recipeId={history.map(item => item.recipeId)} 
          name={history.map(item => item.name)} 
          timestamp={history.map(item => item.timestamp)} 
          cost={history.map(item => item.cost)} 
        />
      </div>
      </div>
      {/* <div className="flex justify-center mb-20">n<button className="bg-green-500 px-4 py-2 rounded-lg text-white" onClick={handleGroceries} > Make Grocery List </butto> */}
      {/* </div> */}
      <Popover open={toggleCart}>
        <PopoverTrigger className="flex flex-row justify-center justify-self-center">
        <button className="bg-green-500 px-4 py-2 rounded-lg text-white" onClick={handleGroceries} > Make Grocery List </button>
        </PopoverTrigger>
        <PopoverContent className="bg-blue-500 text-white">
            {groceryCart.map(Item => (Item + ", "))}
        </PopoverContent> 
      </Popover>
      </>
  );
}