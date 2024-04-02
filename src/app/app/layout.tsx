"use client"
import * as React from "react";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {API_ENDPOINT_URL} from "@/configuration/configuration";
import {CircularProgress} from "@mui/material";
import Container from "@mui/material/Container";

export default function RootLayout(props: { children: React.ReactNode }) {
    const [signed, setSigned] = useState<Boolean | null>(null);
    const [isLoading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const url = API_ENDPOINT_URL + '/auth/checksignedin';
        fetch(url, {
            method: 'GET',
            credentials: 'include',
        }).then((res) => res.status)
            .then((status) => {
                const signedIn: boolean = status == 200;
                setSigned(signedIn);
                setLoading(false);
            });
    }, []);
    if (isLoading) {
        return (
            <Container>
                <CircularProgress/>
            </Container>

        )
    } else {
        if (!signed) {
            router.push('/auth/signin');
        } else {
            return (
                <>{props.children}</>
            );
        }
    }
}