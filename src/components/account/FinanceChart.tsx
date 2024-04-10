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


export const FinanceChart = ({dates, income, expenses}: { dates: Date[], income: number[], expenses: number[] }) => {
    const [timeRange, setTimeRange] = React.useState<string>("1m");

    const [xAxis, setXAxis] = React.useState([{
        label: 'Date',
        data: dates,
        tickInterval: dates,
        scaleType: 'time',
        valueFormatter: (date: Date) => dayjs(date).format('MMM DD YY'),
    }]);

    const [incomeData, setIncomeData] = React.useState(income);
    const [expensesData, setExpensesData] = React.useState(expenses);

    const yAxis = [{label: 'Amount $'}];
    const height = 400;

    const handleChange = (event: SelectChangeEvent<string>) => {
        setTimeRange(event.target.value);
        // TODO: Update chart data
        let startDate = dayjs().subtract(1, 'month').toDate();
        if (event.target.value === "3m") startDate = dayjs().subtract(3, 'month').toDate();
        if (event.target.value === "6m") startDate = dayjs().subtract(6, 'month').toDate();
        if (event.target.value === "1y") startDate = dayjs().subtract(1, 'year').toDate();
        if (event.target.value === "5y") startDate = dayjs().subtract(5, 'year').toDate();

        const filteredDates = dates.filter(date => dayjs(date).isAfter(startDate));
        const filteredIncome = income.slice(dates.indexOf(filteredDates[0]));
        const filteredExpenses = expenses.slice(dates.indexOf(filteredDates[0]));

        const updatesXAxis = [{
            label: 'Date',
            data: filteredDates,
            tickInterval: filteredDates,
            scaleType: 'time',
            valueFormatter: (date: Date) => dayjs(date).format('MMM DD YY'),
        }];

        setXAxis(updatesXAxis);
        setIncomeData(filteredIncome);
        setExpensesData(filteredExpenses);
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
                                          {type: 'line', label: 'Income', data: incomeData},
                                          {type: 'line', label: 'Expenses', data: expensesData},
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