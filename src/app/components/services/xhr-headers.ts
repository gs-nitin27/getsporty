
import {Headers} from "@angular/http";
/**
 * xhrHeaders function to create http options data
 */
export function xhrHeaders() {
    const headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append('Content-Type', 'text/html; charset=utf-8');
    headers.append('X-Requested-With','XMLHttpRequest');
    return {headers};
} 