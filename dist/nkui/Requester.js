"use strict";
exports.__esModule = true;
/**
 * Simple XMLHttpRequest requester.
 */
var Requester = /** @class */ (function () {
    /**
     * Configure the Requester
     * @param method default method used for this Requester.
     * @param url url base for all requests.
     */
    function Requester(method, url) {
        this._method = method;
        this._url = url;
        this._headers = {};
        this._path = "";
    }
    /**
     * Define an header attribute for all requests.
     * @param key header name
     * @param value header value
     */
    Requester.prototype.header = function (key, value) {
        this._headers[key] = value;
        return this;
    };
    /**
     * The resource name for compose the URL.
     * @param value resource name
     */
    Requester.prototype.path = function (value) {
        this._path = value;
        return this;
    };
    /**
     * Create an request and response as json objects.
     * @param obj request to send.
     * @param onResult callback for response.
     * @param onError callback for errors.
     */
    Requester.prototype.json = function (obj, onResult, onError) {
        this.header('Content-Type', 'application/json;charset=UTF-8');
        this.header('Accept', 'application/json');
        var body = null;
        if (obj) {
            body = JSON.stringify(obj);
        }
        this.write(body, function (xhr) {
            onResult(JSON.parse(xhr.responseText));
        }, onError);
    };
    /**
     * Write the request to server.
     * @param body the content to send
     * @param onResult callback with response
     * @param onError callback with error
     */
    Requester.prototype.write = function (body, onResult, onError) {
        var urlc = this._url + this._path;
        console.log('>>: ' + this._method + ' ' + urlc);
        var xhr = new XMLHttpRequest();
        xhr.open(this._method, urlc);
        var keys = Object.keys(this._headers);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            xhr.setRequestHeader(k, this._headers[k]);
        }
        xhr.onreadystatechange = function (e) {
            var _xhr = e.target;
            if (_xhr.readyState == 4) {
                if (_xhr.status == 200) {
                    onResult(_xhr);
                }
                else {
                    console.error(_xhr.statusText);
                    if (onError) {
                        onError(_xhr.statusText);
                    }
                }
            }
        };
        if (onError) {
            xhr.onerror = function (e) {
                onError(xhr.statusText);
            };
        }
        xhr.send(body);
    };
    return Requester;
}());
exports.Requester = Requester;
//# sourceMappingURL=Requester.js.map