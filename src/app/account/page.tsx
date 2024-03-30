import * as React from 'react';
import API from "@/tools/API";
import Button from "@mui/material/Button";
//import {useState} from "react";

export default function Account() {

    // TODO: Working on accounts list, since that requires no event handler... apparently I can't use useState in a server component?
    // This is how I'm used to it with react, and googling was telling me the same thing for nextjs. I am at a loss
    // const [accounts, setAccounts] = useState([]);
    // const [loading, setLoading] = useState(true);

    async function handleCreate(){
        try{
            const {status, isOk, message} = await API.createAccount("Test Account", 333);
            if(isOk){
                // TODO add toasts
                console.log("Success: message:", message);
            }else{
                // TODO add toasts
                console.error("Error: message:", message);
            }
        }catch (e) {
            // TODO add toasts
            console.error("Error:", e);
        }
    }

    const fetchAccounts = async () => {
        try{
            const resp = await API.getAccounts("");
            if(resp.isOk){
                //TODO: setAccounts(resp.data); webstorm is telling me ResponseResult has no data field?
            }else{
                console.error("Error: message:", resp.message);
            }
        }catch (e) {
            console.error("Error:", e);
        }
        // setLoading(false);

    };

    return (
        <div>
            <h1>Account</h1>
            <Button onClick={handleCreate}>Create Account</Button>
        </div>
    );
}