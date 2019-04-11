"use strict";
exports.__esModule = true;
var Requester = /** @class */ (function () {
    function Requester(method, url) {
        this._method = method;
        this._url = url;
        this._headers = {};
        this._path = "";
    }
    Requester.prototype.header = function (key, value) {
        this._headers[key] = value;
        return this;
    };
    Requester.prototype.path = function (value) {
        this._path = value;
        return this;
    };
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