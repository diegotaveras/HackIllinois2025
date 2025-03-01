import React, {useState} from "react";

export default History = () => {
  cont [history,setHistory] = useState<{name: string}[]>([])
  
  const HistoryItem = ({name, index}: {name:string;index:number}) => (
    <div classname="flex flex-row items-center bg-grey p-2">
      <p>{index}</p>
      <p>{name}&& </p>
    </div>
  )
  
  
  
  return(
    <div classname="flex flex-row justify-between justify-items-stretch">
      <div>
        <p classname="text-3xl">Meal History</p>
          {history.map((item, index) => (
            <HistoryItem
              name = {item.name}
              index = {index + 1}
            />
          ))}
      </div>
      <div>
        <p classname="text-3xl">Weekly</p>
      </div>
    </div>
  )
};