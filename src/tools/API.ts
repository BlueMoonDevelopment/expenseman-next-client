import {API_ENDPOINT_URL} from "@/configuration/configuration";

// constants for our status codes
const OK = 200;
const CREATED = 200;
const BAD_REQUEST = 400;
const UNAUTHORIZED = 401;
const FORBIDDEN = 403;

interface StatusResult{
    statusString: string;
    isOk: boolean;
}

export default class API {


    /**
     * Checks the okayness of a status.
     * @param status The request response status
     * @return StatusResult - contains the string representation and true if successful, false otherwise
     */
    static checkStatus(status: number) : StatusResult {
        switch (status) {
            case OK:
                return {statusString: "OK", isOk: true};
            case BAD_REQUEST:
                return {statusString: "BAD_REQUEST", isOk: false};
            case UNAUTHORIZED:
                return {statusString: "UNAUTHORIZED", isOk: false};
            case FORBIDDEN:
                return {statusString: "FORBIDDEN", isOk: false};
            default:
                console.warn("Unknown status code from request:", status);
                return {statusString: "UNKNOWN", isOk: false};
        }
    }

}