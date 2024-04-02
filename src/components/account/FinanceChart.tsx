"use client"
import * as React from 'react';
import {Select, SelectChangeEvent} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {CartesianGrid, Legend, Line, LineChart, XAxis} from "recharts";
import Tooltip from "@mui/material/Tooltip";

interface ChartData {
    name: string;
    income: number;
    expenses: number;
}

interface ChartProps {
    data: ChartData[];
}

export const FinanceChart: React.FC<ChartProps> = ({data}) => {
    const [timeRange, setTimeRange] = React.useState<string>("1m");
    const [showChart, setShowChart] = React.useState(false);

    const handleChange = (event: SelectChangeEvent<string>) => {
        setTimeRange(event.target.value);
        // TODO: Update chart data
    }

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setShowChart(true);
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <Select value={timeRange} onChange={handleChange}>
                <MenuItem value={"1m"}>Past Month</MenuItem>
                <MenuItem value={"3m"}>Past 3 Months</MenuItem>
                <MenuItem value={"6m"}>Past 6 Months</MenuItem>
                <MenuItem value={"1y"}>Past Year</MenuItem>
                <MenuItem value={"5y"}>Past 5 Years</MenuItem>
            </Select>
            {showChart && (
                <Tooltip title={"Income & Expenses"}>
                    <LineChart width={400} height={400} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                        <Legend/>
                        <Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{r: 8}}/>
                        <Line type="monotone" dataKey="expenses" stroke="#82ca9d"/>
                    </LineChart>
                </Tooltip>
            )}
        </div>
    );
}