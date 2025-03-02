import React, {useState} from "react";
// import Component from "../components/chart";

export default function History() {
  const [history,setHistory] = useState<{name: string}[]>([])
  
  const HistoryItem = ({name, index}: {name:string;index:number}) => (
    <div className="flex flex-row items-center bg-grey p-2">
      <p>{index}</p>
      <p>{name}&& </p>
    </div>
  )
  
  return(
    <div className="flex flex-row justify-between justify-items-stretch">
      <div>
        <p className="text-3xl">Meal History</p>
          {history.map((item, index) => (
            <HistoryItem
              name = {item.name}
              index = {index + 1}
            />
          ))}
      </div>
      <div className="flex flex-col justify-center justify-items-center">
        <p className="text-3xl">Weekly</p>
        {/* <Component /> */}
      </div>
    </div>
  )
};