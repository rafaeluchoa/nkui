/**
 * Simple XMLHttpRequest requester.
 */
export declare class Requester {
    _method: string;
    _url: string;
    _headers: {
        [key: string]: string;
    };
    _path: string;
    /**
     * Configure the Requester
     * @param method default method used for this Requester.
     * @param url url base for all requests.
     */
    constructor(method: string, url: string);
    /**
     * Define an header attribute for all requests.
     * @param key header name
     * @param value header value
     */
    header(key: string, value: string): this;
    /**
     * The resource name for compose the URL.
     * @param value resource name
     */
    path(value: string): this;
    /**
     * Create an request and response as json objects.
     * @param obj request to send.
     * @param onResult callback for response.
     * @param onError callback for errors.
     */
    json(obj: any, onResult: (data: any) => void, onError?: (error: any) => void): void;
    /**
     * Write the request to server.
     * @param body the content to send
     * @param onResult callback with response
     * @param onError callback with error
     */
    write(body: string, onResult: (xhr: XMLHttpRequest) => void, onError?: (error: any) => void): void;
}
