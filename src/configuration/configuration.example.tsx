const mode = process.env.NODE_ENV || "production";
export const DEVELOPMENT_MODE = mode === "development";
export const API_ENDPOINT_URL = DEVELOPMENT_MODE ? "http://localhost:8082" : "https://api.expenseman.app";
export const GOOGLE_OAUTH_CLIENT_ID = "clientid";