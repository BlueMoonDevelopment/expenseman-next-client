import * as React from 'react';
import API from "@/tools/API";
import Button from "@mui/material/Button";

export default function Account() {
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

    return (
        <div>
            <h1>Account</h1>
            <Button onClick={handleCreate}>Create Account</Button>
        </div>
    );
}