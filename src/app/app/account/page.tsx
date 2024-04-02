import * as React from 'react';
import AccountList from "@/components/account/AccountList";
import Middleware from '@/components/auth/Middleware';

export default function Account() {


    return (
        <>
            <Middleware/>
            <AccountList/>
        </>
    );
}