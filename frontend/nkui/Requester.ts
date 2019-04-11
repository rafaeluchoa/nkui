export class Requester {

    _method: string;
    _url: string;
    _headers: { [key: string]: string };
    _path: string;

    constructor(method: string, url: string) {
        this._method = method;
        this._url = url;
        this._headers = {};
        this._path = "";
    }

    header(key: string, value: string) {
        this._headers[key] = value;
        return this;
    }

    path(value: string) {
        this._path = value;
        return this;
    }

    json(obj: any, onResult: (data: any) => void, onError?: (error: any) => void) {
        this.header('Content-Type', 'application/json;charset=UTF-8');
        this.header('Accept', 'application/json');

        let body = null;
        if(obj) {
            body = JSON.stringify(obj);
        }
        
        this.write(body, (xhr) => {
            onResult(JSON.parse(xhr.responseText));
        }, onError);
    }

    write(body: string, onResult: (xhr: XMLHttpRequest) => void, onError?: (error: any) => void) {
        let urlc = this._url + this._path;
        console.log('>>: ' + this._method + ' ' + urlc);

        let xhr = new XMLHttpRequest();
        xhr.open(this._method, urlc);

        let keys = Object.keys(this._headers);
        for (let i = 0; i < keys.length; i++) {
            let k = keys[i];
            xhr.setRequestHeader(k, this._headers[k]);
        }
        
        xhr.onreadystatechange = (e) => {
            let _xhr = e.target as XMLHttpRequest;
            if (_xhr.readyState == 4) {
                if(_xhr.status == 200) {
                    onResult(_xhr);
                } else {
                    console.error(_xhr.statusText);
                    if(onError) {
                        onError(_xhr.statusText);    
                    }
                }
            }
        };

        if(onError) {
            xhr.onerror = (e) => {
                onError(xhr.statusText);
            };
        }

        xhr.send(body);
    }

}
