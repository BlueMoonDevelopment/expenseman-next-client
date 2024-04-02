"use client"
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {API_ENDPOINT_URL} from "@/configuration/configuration";
import * as React from "react";

export default function Middleware() {
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

    if (isLoading) return <></>

    if (!signed) {
        router.push('/auth/signin');
    }
}