"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export default function Chart({recipeId, name, timestamp, cost}: {recipeId: string[], name: string[], timestamp: string[], cost: number[]}) {
  const mealData = recipeId.map((id, index) => ({
    recipeId: id,
    name: name[index],
    timestamp: timestamp[index],
    cost: cost[index]
  }));

  const totalDate = React.useMemo(() => {
    const costByDate: Record<string, number> = {};
    
    mealData.forEach(meal => {
      if (!costByDate[meal.timestamp]) {
        costByDate[meal.timestamp] = 0;
      }
      costByDate[meal.timestamp] += meal.cost;
    });
    
    return Object.entries(costByDate).map(([date, totalCost]) => ({
      date,
      cost: totalCost
    }));
  }, [mealData]);

  const totalCost = React.useMemo(
    () => mealData.reduce((acc, curr) => acc + curr.cost, 0),
    [mealData]
  );

  const chartConfig = {
    meals: {
      label: "Meals",
    },
    dailyCost: {
      label: "Daily Cost",
      color: "blue",
    }
  } as ChartConfig;

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Meal Cost Tracker</CardTitle>
          <CardDescription>
            Showing daily meal costs
          </CardDescription>
        </div>
        <div className="flex">
          <button
            data-active={true}
            className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
          >
            <span className="text-xs text-muted-foreground">
              Total Cost
            </span>
            <span className="text-lg font-bold leading-none sm:text-3xl">
              ${totalCost.toFixed(2)}
            </span>
          </button>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={totalDate}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px] bg-white"
                  nameKey="meals"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Line
              dataKey="cost"
              type="monotone"
              stroke="var(--color-dailyCost)"
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}