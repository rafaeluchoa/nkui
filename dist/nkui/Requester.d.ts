export declare class Requester {
    _method: string;
    _url: string;
    _headers: {
        [key: string]: string;
    };
    _path: string;
    constructor(method: string, url: string);
    header(key: string, value: string): this;
    path(value: string): this;
    json(obj: any, onResult: (data: any) => void, onError?: (error: any) => void): void;
    write(body: string, onResult: (xhr: XMLHttpRequest) => void, onError?: (error: any) => void): void;
}
