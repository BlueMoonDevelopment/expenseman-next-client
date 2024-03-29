import {API_ENDPOINT_URL, DEVELOPMENT_MODE} from "@/configuration/configuration";

export function getUrl(path: string) {

    return DEVELOPMENT_MODE ? 'http://localhost:8083' + path : (API_ENDPOINT_URL + path);
}