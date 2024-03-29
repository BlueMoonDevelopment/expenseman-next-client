import * as React from 'react';
import {Metadata} from "next";
import SignInForm from "@/components/auth/SignInForm";

export const metadata: Metadata = {
    title: 'Sign in',
}

export default function SignIn() {
    return <SignInForm/>
}