import Script from "next/script";
import {API_ENDPOINT_URL, GOOGLE_OAUTH_CLIENT_ID} from "@/configuration/configuration";

export default function SignInButton() {
    return (
        <>
            <Script src="https://accounts.google.com/gsi/client"/>
            <div id="g_id_onload"
                 data-client_id={GOOGLE_OAUTH_CLIENT_ID}
                 data-context="signin"
                 data-ux_mode="popup"
                 data-login_uri={API_ENDPOINT_URL + "/auth/google"}
                 data-auto_prompt="false"
            >
            </div>
            <div className="g_id_signin"
                 data-type="standard"
                 data-shape="pill"
                 data-theme="outline"
                 data-text="signin_with"
                 data-size="large"
                 data-logo_alignment="left"
            >
            </div>
        </>
    )
}