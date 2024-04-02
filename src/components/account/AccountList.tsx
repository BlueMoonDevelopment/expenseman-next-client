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

export default function AccountList() {
    const [accounts, setAccounts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [expandedId, setExpandedId] = useState<number | null>(null);

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