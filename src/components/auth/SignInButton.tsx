import Script from "next/script";
import {API_ENDPOINT_URL, GOOGLE_OAUTH_CLIENT_ID} from "@/configuration/configuration";

export default function SignInButton() {
    if (GOOGLE_OAUTH_CLIENT_ID == "clientid" || GOOGLE_OAUTH_CLIENT_ID == null || GOOGLE_OAUTH_CLIENT_ID == "") {
        return (
            <></>
        );
    } else {
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
                     data-text="signin_with"
                     data-logo_alignment="left"
                >
                </div>
            </>
        )
    }

}