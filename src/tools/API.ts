import {API_ENDPOINT_URL} from "@/configuration/configuration";

// constants for our status codes
const OK = 200;
const CREATED = 200;
const BAD_REQUEST = 400;
const UNAUTHORIZED = 401;
const FORBIDDEN = 403;
const NOT_FOUND = 404;
const INTERNAL_ERROR = 500;

interface StatusResult {
    statusString: string;
    isOk: boolean;
}

interface ResponseResult {
    status: number;
    isOk: boolean;
    message: string;
    data?: any;
}

export default class API {


    /**
     * Checks the okayness of a status.
     * @param status The request response status
     * @return StatusResult - contains the string representation and true if successful, false otherwise
     */
    static checkStatus(status: number): StatusResult {
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

    // ACCOUNT API CALLS

    // TODO add currency and description
    static async createAccount(name: string, balance: number) {
        const data = {
            account_name: name,
            account_balance: balance
        };
        const url = API_ENDPOINT_URL + "/accounts";
        return await fetch(url, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(async res => {
            let resp = {} as ResponseResult;
            resp.status = res.status;
            resp.isOk = res.status === 200;
            switch (res.status) {
                case OK:
                    resp.message = "Account created successfully";
                    resp.data = await res.json();
                    break;
                case BAD_REQUEST:
                    resp.message = "No account name was provided";
                    break;
                case UNAUTHORIZED:
                    resp.message = "You are unauthorized to do this. Please sign in";
                    break;
                case 409:
                    resp.message = "Account limit reached";
                    break;
                default:
                    resp.message = "Unknown error occurred";
                    break;
            }

            return resp;
        }).catch(err => {
            console.error("Error creating account:", err);
            return {status: INTERNAL_ERROR, isOk: false, message: "Internal server error"};
        });
    }

    static async getAccounts(accountId: string) {
        let data = {};
        if(accountId !== null && accountId !== "") {
            data = {
                account_id: accountId
            };
        }
        const url = API_ENDPOINT_URL + "/accounts";
        return await fetch(url, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(res => {
            let resp = {} as ResponseResult;
            resp.status = res.status;
            resp.isOk = res.status === 200;
            switch (res.status) {
                case OK:
                    resp.message = "Accounts fetched successfully";
                    resp.data = res.json();
                    break;
                case UNAUTHORIZED:
                    resp.message = "You are unauthorized to do this. Please sign in";
                    break;
                case NOT_FOUND:
                    resp.message = "No accounts found";
                    break;
                default:
                    resp.message = "Unknown error occurred";
                    break;
            }

            return resp;
        }).catch(err => {
            console.error("Error fetching accounts:", err);
            return {status: INTERNAL_ERROR, isOk: false, message: "Internal server error"};
        });
    }

    static async deleteAccount(accountId: string) {
        let data = {
            account_id: accountId
        };
        const url = API_ENDPOINT_URL + "/accounts";
        return await fetch(url, {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(res => {
            let resp = {} as ResponseResult;
            resp.status = res.status;
            resp.isOk = res.status === 200;
            switch (res.status) {
                case OK:
                    resp.message = "Account deleted successfully";
                    break;
                case UNAUTHORIZED:
                    resp.message = "You are unauthorized to do this. Please sign in";
                    break;
                case NOT_FOUND:
                    resp.message = "Account not found";
                    break;
                default:
                    resp.message = "Unknown error occurred";
                    break;
            }

            return resp;
        }).catch(err => {
            console.error("Error deleting account:", err);
            return {status: INTERNAL_ERROR, isOk: false, message: "Internal server error"};
        });
    }

    // TODO add currency and description
    static async updateAccount(accountId: string, name: string, balance: number) {
        let data = {
            account_id: accountId,
            account_name: name,
            account_balance: balance
        };
        const url = API_ENDPOINT_URL + "/accounts";
        return await fetch(url, {
            method: "PUT",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(res => {
            let resp = {} as ResponseResult;
            resp.status = res.status;
            resp.isOk = res.status === 200;
            switch (res.status) {
                case OK:
                    resp.message = "Account updated successfully";
                    break;
                case UNAUTHORIZED:
                    resp.message = "You are unauthorized to do this. Please sign in";
                    break;
                case NOT_FOUND:
                    resp.message = "Account not found";
                    break;
                default:
                    resp.message = "Unknown error occurred";
                    break;
            }

            return resp;
        }).catch(err => {
            console.error("Error updating account:", err);
            return {status: INTERNAL_ERROR, isOk: false, message: "Internal server error"};
        });
    }

}