import {NextRequest, NextResponse} from "next/server";
import {API_ENDPOINT_URL} from "@/configuration/configuration";
import {SignInState} from "@/tools/SignInState";

// This file is being used by Next.JS to ensure that the app path is authenitcated, if not the user gets redirected to /auth/signin

export const middleware = async (request: NextRequest) => {
    const url = API_ENDPOINT_URL + '/auth/checksignedin';
    const res = await fetch(url, {
        method: 'GET',
        credentials: 'include',
        headers: {Cookie: request.cookies.toString()},
    }).then(async (res) => await res.status);

    const signed = res == 200;
    SignInState.setSignedIn(signed);

    if (!signed && request.nextUrl.pathname.startsWith('/app')) {
        return NextResponse.redirect(new URL('/auth/signin', request.url));
    }

    if (signed && request.nextUrl.pathname.startsWith('/auth/signup')) {
        return NextResponse.redirect(new URL('/auth/signin', request.url));
    }

}