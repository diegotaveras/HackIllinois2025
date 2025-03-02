import React, { useEffect, useState } from "react";
import Chart from "@/components/chart"; 
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";


export default function History() {

  const [history, setHistory] = useState<{
    recipeId: string;
    name: string;
    timestamp: string;
    cost: number;
  }[]>([])
  const [widgetData, setWidgetData] = useState<string[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const response = await fetch("localhost:8000/history")
      const data = await response.json()
      setHistory(data)
    }
    fetchHistory()
  }, [])
  useEffect(() => {
    // Define a type for your data items that will hold the HTML
    type WidgetDataItem = {
      recipeId: string;
      htmlContent: string;
    };
  
    const fetchData = async () => {
      const data: WidgetDataItem[] = await Promise.all(
        history.map(async (item) => {
          const response = await fetch(
            `https://api.spoonacular.com/recipes/${item.recipeId}/priceBreakdownWidget`
          );
          const htmlContent = await response.text();
          return {
            recipeId: item.recipeId,
            htmlContent
          };
        })
      );
      setWidgetData(data.map(item => item.htmlContent));
    };
  
    fetchData();
  }, [history]);
  
  const HistoryItem = ({name, index}: {name:string;index:number}) => (
    <Popover>
      <PopoverTrigger className="flex flex-row items-center border-transparent bg-grey p-2 w-full shadow-none mr-2 p-2 cursor-pointer">
        <p className="pr-2">{index}</p>
        <p>{name}</p>
      </PopoverTrigger>
      <PopoverContent className="bg-white shadow-lg">
        <div 
          dangerouslySetInnerHTML={{__html: widgetData[index]}}></div>
      </PopoverContent>
    </Popover>
  );
  
  return (
    <>
    <div className="w-full flex flex-row justify-between justify-items-center p-3">
      <div className="flex flex-col justify-center justify-content-center w-auto">
        <p className="text-3xl mb-4">Meal History</p>
        {history.map((item, index) => (
          <HistoryItem
            key={item.recipeId}
            name={item.name}
            index={index + 1}
          />
        ))}
      </div>
      <div className="flex flex-col justify-center justify-content-center grow pt-25">
        <p className="flex text-3xl justify-center align-center pb-5">Weekly</p>
        <Chart 
          recipeId={history.map(item => item.recipeId)} 
          name={history.map(item => item.name)} 
          timestamp={history.map(item => item.timestamp)} 
          cost={history.map(item => item.cost)} 
        />
      </div>
      </div>
      <div className="flex justify-center mb-20"><button className="bg-green-500 px-4 py-2 rounded-lg text-white" > Make Grocery List </button>
      </div>
      </>
  );
}