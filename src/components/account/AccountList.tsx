"use client"
import * as React from 'react';
import {useState} from 'react';
import API from "@/tools/API";
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import {Card, CardActions, CardContent, Collapse} from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from "@mui/material/Box";

import {FinanceChart} from "@/components/account/FinanceChart";
import {expandPaddingObject} from "@floating-ui/utils";

export default function AccountList() {
    const [accounts, setAccounts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [expandedId, setExpandedId] = useState<number | null>(null);
    // const [showChart, setShowChart] = useState(false);

    // Testing purposes
    const xAxisData = [
        new Date('2020-04-07'),
        new Date('2023-06-07'),
        new Date('2024-04-07'),
        new Date('2024-04-08'),
        new Date('2024-04-09'),
        new Date('2024-04-10'),
        new Date('2024-04-11'),
        new Date('2024-04-12'),
        new Date('2024-04-13'),
    ];

    const income = [50, 50, 820, 932, 901, 934, 1290, 1330, 1320];
    const expenses = [100, 125, 220, 182, 191, 234, 290, 330, 310];

    const fetchAccounts = async () => {
        try {
            const resp = await API.getAccounts();
            if (resp.isOk) {
                if ("data" in resp) {
                    setAccounts(resp.data);
                }
            } else {
                console.error("Error: message:", resp.message);
            }
        } catch (e) {
            console.error("Error:", e);
        }
        setLoading(false);

    };

    async function handleCreate() {
        try {
            const {status, isOk, message} = await API.createAccount("Test Account", 333);
            if (isOk) {
                // TODO add toasts
                console.log("Success: message:", message);
            } else {
                // TODO add toasts
                console.error("Error: message:", message);
            }
        } catch (e) {
            // TODO add toasts
            console.error("Error:", e);
        }
    }

    const handleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    }

    React.useEffect(() => {
        fetchAccounts().then(r => console.log("Accounts fetched"));
    }, []);

    // React.useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setShowChart(expandedId !== null);
    //     }, 0);
    //     return () => clearTimeout(timer);
    // }, [expandedId]);

    return (
        <Container>
            <h1>Account List</h1>
            {loading ? (
                <p>Loading...</p>
            ) : accounts.length > 0 ? (
                accounts.map((account, index) => (
                    <Box mb={2} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {account.account_name}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton onClick={() => handleExpand(index)}
                                            aria-expanded={expandedId === index}
                                            aria-label="show more">
                                    <ExpandMoreIcon/>
                                </IconButton>
                            </CardActions>
                            <Collapse in={expandedId === index} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>
                                        More info about the account coming soon...
                                    </Typography>
                                    <FinanceChart dates={xAxisData} income={income} expenses={expenses}/>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Box>
                ))
            ) : (
                <><p>No accounts found. Let's fix that!</p></>
            )}
            {accounts.length < 3 ? (
                <Box mt={2}>
                    <Button variant="contained" onClick={handleCreate}>Create
                        Account</Button>
                </Box>
            ) : null}
        </Container>
    );
}