"use client"
import * as React from 'react';
import {Select, SelectChangeEvent} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import {
    ChartsAxisHighlight,
    ChartsLegend, ChartsTooltip,
    ChartsXAxis,
    ChartsYAxis,
    LineHighlightPlot,
    LinePlot,
    ResponsiveChartContainer
} from "@mui/x-charts";
import dayjs from "dayjs";

interface ChartData {
    name: string;
    income: number;
    expenses: number;
}

// Testing purposes
const xAxisData = [
    new Date('2024-04-07'),
    new Date('2024-04-08'),
    new Date('2024-04-09'),
    new Date('2024-04-10'),
    new Date('2024-04-11'),
    new Date('2024-04-12'),
    new Date('2024-04-13'),
];

const seriesData = [
    [820, 932, 901, 934, 1290, 1330, 1320], // income
    [220, 182, 191, 234, 290, 330, 310], // expenses
]

export const FinanceChart = ({data}: { data: ChartData[] }) => {
    const [timeRange, setTimeRange] = React.useState<string>("1m");

    const xAxis = [{
        label: 'Date',
        data: xAxisData,
        tickInterval: xAxisData,
        scaleType: 'time',
        valueFormatter: (date: Date) => dayjs(date).format('MMM DD'),
    }];
    const yAxis = [{label: 'Amount $'}];
    const height = 400;

    const handleChange = (event: SelectChangeEvent<string>) => {
        setTimeRange(event.target.value);
        // TODO: Update chart data
    }

    return (
        <div>
            <Select value={timeRange} onChange={handleChange}>
                <MenuItem value={"1m"}>Past Month</MenuItem>
                <MenuItem value={"3m"}>Past 3 Months</MenuItem>
                <MenuItem value={"6m"}>Past 6 Months</MenuItem>
                <MenuItem value={"1y"}>Past Year</MenuItem>
                <MenuItem value={"5y"}>Past 5 Years</MenuItem>
            </Select>
            <ResponsiveChartContainer xAxis={xAxis} yAxis={yAxis}
                                      series={[
                                          {type: 'line', label: 'Income', data: seriesData[0]},
                                          {type: 'line', label: 'Expenses', data: seriesData[1]},
                                      ]}
                                      height={height}>
                <LinePlot/>
                <ChartsXAxis/>
                <ChartsYAxis/>
                <ChartsLegend/>
                <LineHighlightPlot/>
                <ChartsAxisHighlight x={'line'}/>
                <ChartsTooltip trigge={'axis'}/>
            </ResponsiveChartContainer>
        </div>
    );
}