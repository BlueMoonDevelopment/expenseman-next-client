"use client"
import * as React from 'react';
import {useState} from 'react';
import API from "@/tools/API";
import Button from '@mui/material/Button';

export default function AccountList() {
    const [accounts, setAccounts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchAccounts = async () => {
        try {
            const resp = await API.getAccounts("");
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

    React.useEffect(() => {
        fetchAccounts().then(r => console.log("Accounts fetched"));
    }, []);

    return (
        <div>
            <h1>Account List</h1>
            {loading ? (
                <p>Loading...</p>
            ) : accounts.length > 0 ? (
                <ul>
                    {accounts.map((account, index) => (
                        <li key={index}>{account.account_name}</li>
                    ))}
                </ul>
            ) : (
                <><p>No accounts found. Let's fix that!</p><Button variant="contained" onClick={handleCreate}>Create Account</Button></>
            )}
        </div>
    );
}