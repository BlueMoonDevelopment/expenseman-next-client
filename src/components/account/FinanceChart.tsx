"use client"
import * as React from 'react';
import {Select, SelectChangeEvent} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import {LineChart} from "@mui/x-charts";

interface ChartData {
    name: string;
    income: number;
    expenses: number;
}

export const FinanceChart = ({data}: { data: ChartData[] }) => {
    const [timeRange, setTimeRange] = React.useState<string>("1m");

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
            <Tooltip title={"Income & Expenses"}>
                <LineChart
                    // dataset={data}
                    dataset={[{name: 'Jan', income: 1000, expenses: 500}, {name: 'Feb', income: 2000, expenses: 1000}]}
                    series={[
                        {dataKey: 'income', showMark: false, type: 'line'},
                        {dataKey: 'expenses', showMark: false, type: 'line'},
                    ]}
                    xAxis={[
                        {
                            scaleType: 'point',
                            dataKey: 'name',
                            tickNumber: 2,
                        }
                    ]}
                    yAxis={[
                        {
                            label: 'Income',
                            dataKey: 'income',
                            tickNumber: 5,
                        }
                    ]}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}/>
            </Tooltip>
        </div>
    );
}