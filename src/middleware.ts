import {NextRequest, NextResponse} from "next/server";
import {API_ENDPOINT_URL} from "@/configuration/configuration";

// This file is being used by Next.JS to ensure that the app path is authenitcated, if not the user gets redirected to /auth/signin

export const middleware = async (request: NextRequest) => {
    const url = API_ENDPOINT_URL + '/auth/checksignedin';
    const res = await fetch(url, {
        method: 'GET',
        credentials: 'include',
        headers: {Cookie: request.cookies.toString()},
    }).then(async (res) => await res.status);

    const signed = res == 200;

    if (!signed) {
        return NextResponse.redirect(new URL('/auth/signin', request.url));
    }
}

export const config = {
    matcher: '/app/:path*',
}