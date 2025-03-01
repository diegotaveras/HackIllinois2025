import React, {useState} from "react";
import Component from "../components/chart";

export default function History() {
  // const [history,setHistory] = useState<{name: string}[]>([])
  const history = [
    {name: "Breakfast"},
    {name: "Lunch"},
    {name: "Dinner"},
    {name: "Snack"},
    {name: "Dessert"},
  ]
  
  const HistoryItem = ({name, index}: {name:string;index:number}) => (
    <div className="flex flex-row items-center bg-grey p-2">
      <p>{index}</p>
      <p className="pl-2">{name} </p>
    </div>
  )
  
  return(
    <div className="w-full flex flex-row justify-between justify-items-center">
      <div className="flex flex-col justify-center justify-content-center">
        <p className="text-3xl">Meal History</p>
          {history.map((item, index) => (
            <HistoryItem
              name = {item.name}
              index = {index + 1}
            />
          ))}
      </div>
      <div className="flex flex-col justify-center justify-content-center">
        <p className="flex text-3xl justify-center align-center">Weekly</p>
        <Component />
      </div>
    </div>
  )
};