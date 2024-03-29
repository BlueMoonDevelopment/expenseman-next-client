import {getUrl} from "@/functions/tools";

export default async function SignInButton() {
    const url = getUrl('/auth/checksignedin');
    const res = await fetch(url, {
        method: 'GET',
        credentials: "include"
    })
    const status = res.status;
    const signed = status == 200;
    if (signed) {
        return (
            <p>User is signed in!</p>
        )
    } else {
        return (
            <p>User is NOT signed in!</p>
        )
    }
}