import React, { useState } from "react";
import Chart from "../components/chart"; 
import { Button } from "@/components/ui/button";

export default function History() {
  // Sample history data - in a real app, you'd likely use useState
  const history = [
    {
      "recipeId": "659109",
      "name": "Salmon Quinoa Risotto",
      "timestamp": "2025-03-06",
      "cost": 3.42
    },
  ];

  const handleOnClick = () => {
    alert("Clicked!");
  };
  
  const HistoryItem = ({name, index}: {name: string; index: number}) => (
    <Button className="flex flex-row items-center border-transparent bg-grey p-2 w-full shadow-none mr-2 mb-2" onClick={handleOnClick}>
      <p>{index}</p>
      <p className="pl-2">{name}</p>
    </Button>
  );
  
  return (
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
      <div className="flex flex-col justify-center justify-content-center grow">
        <p className="flex text-3xl justify-center align-center pb-5">Weekly</p>
        <Chart 
          recipeId={history.map(item => item.recipeId)} 
          name={history.map(item => item.name)} 
          timestamp={history.map(item => item.timestamp)} 
          cost={history.map(item => item.cost)} 
        />
      </div>
    </div>
  );
}