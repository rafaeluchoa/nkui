(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var UIX_1 = require("./nkui/UIX");
var ViewManager_1 = require("./nkui/ViewManager");
var div = document.createElement('div');
div.textContent = 'teste';
document.querySelector('.nk-app').appendChild(div);
var ui = new UIX_1.UIX();
var vm = new ViewManager_1.ViewManager('.nk-app', ui);
var name = ui.field().label('Nome');
var content = ui.vertical()
    .add(name)
    .add(ui.button().valued('Click').click(function () {
    name.valued('Hello ' + name.value());
}));
vm.open(function (onClose) { return content; });

},{"./nkui/UIX":4,"./nkui/ViewManager":7}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var UIComponent_1 = require("./UIComponent");
var UI = /** @class */ (function () {
    function UI() {
        this.changes = [];
        this.applyChanges();
    }
    UI.prototype.addChange = function (action) {
        this.changes.push(action);
        return this;
    };
    UI.prototype.applyChanges = function () {
        var _this = this;
        while (this.changes.length > 0) {
            this.changes.shift()();
        }
        window.requestAnimationFrame(function (time) {
            _this.applyChanges();
        });
        return this;
    };
    UI.prototype.div = function () {
        return new UIComponent_1.UIComponent('div', this);
    };
    UI.prototype.span = function () {
        return new UIComponent_1.UIComponent('span', this);
    };
    UI.prototype.h2 = function () {
        return new UIComponent_1.UIComponent('h2', this);
    };
    UI.prototype.section = function () {
        return new UIComponent_1.UIComponent('section', this);
    };
    UI.prototype.aside = function () {
        return new UIComponent_1.UIComponent('aside', this);
    };
    UI.prototype.p = function () {
        return new UIComponent_1.UIComponent('p', this);
    };
    UI.prototype.ul = function () {
        return new UIComponent_1.UIComponent('ul', this);
    };
    UI.prototype.li = function () {
        return new UIComponent_1.UIComponent('li', this);
    };
    UI.prototype.a = function () {
        return new UIComponent_1.UIComponent('a', this);
    };
    UI.prototype.button = function () {
        return new UIComponent_1.UIComponent('button', this);
    };
    UI.prototype.input = function () {
        return new UIComponent_1.UIComponent('input', this);
    };
    UI.prototype.label = function () {
        return new UIComponent_1.UIComponent('label', this);
    };
    return UI;
}());
exports.UI = UI;

},{"./UIComponent":3}],3:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var UIComponent = /** @class */ (function () {
    function UIComponent(tag, up) {
        var _this = this;
        this._up = up;
        this._element = null;
        this._up.addChange(function () {
            _this._element = document.createElement(tag);
        });
    }
    UIComponent.prototype.addChange = function (action) {
        var _this = this;
        this._up.addChange(function () {
            action(_this._element);
        });
        return this;
    };
    UIComponent.prototype.click = function (fn) {
        this.addChange(function (e) {
            e.addEventListener("click", function () {
                fn();
            });
        });
        return this;
    };
    UIComponent.prototype.text = function (value) {
        this.addChange(function (e) {
            e.textContent = value;
        });
        return this;
    };
    UIComponent.prototype.add = function (c) {
        this.addChange(function (e) {
            c.addChange(function (ce) {
                e.appendChild(ce);
            });
        });
        return this;
    };
    UIComponent.prototype.clear = function () {
        this.addChange(function (e) {
            while (e.childNodes.length > 0) {
                e.removeChild(e.firstChild);
            }
        });
    };
    UIComponent.prototype.className = function (value) {
        var v = value;
        this.addChange(function (e) {
            e.classList.add(v);
        });
        return this;
    };
    return UIComponent;
}());
exports.UIComponent = UIComponent;

},{}],4:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var UI_1 = require("./UI");
var UIXButton_1 = require("./UIXButton");
var UIXField_1 = require("./UIXField");
var UIX = /** @class */ (function (_super) {
    __extends(UIX, _super);
    function UIX() {
        return _super.call(this) || this;
    }
    UIX.prototype.vertical = function () {
        return _super.prototype.div.call(this).className('nk-v');
    };
    UIX.prototype.horizontal = function () {
        return _super.prototype.div.call(this).className('nk-h');
    };
    UIX.prototype.text = function (value) {
        return _super.prototype.span.call(this).text(value);
    };
    UIX.prototype.button = function () {
        return new UIXButton_1.UIXButton(this).className('nk-btn');
    };
    UIX.prototype.field = function () {
        return new UIXField_1.UIXField(this).className('nk-fld');
    };
    UIX.prototype.item = function () {
        return _super.prototype.div.call(this).className('nk-i');
    };
    UIX.prototype.box = function () {
        return _super.prototype.div.call(this).className('nk-t');
    };
    UIX.prototype.left = function (comp) {
        return _super.prototype.div.call(this).className('nk-l').add(comp);
    };
    UIX.prototype.right = function (comp) {
        return _super.prototype.div.call(this).className('nk-r').add(comp);
    };
    UIX.prototype.title = function (value) {
        return _super.prototype.h2.call(this).className('nk-hd-t').text(value);
    };
    UIX.prototype.list = function () {
        return _super.prototype.div.call(this).className('nk-lt');
    };
    UIX.prototype.listItem = function (text) {
        var c = _super.prototype.div.call(this).className('nk-lt-it');
        if (text) {
            c.add(this.text(text));
        }
        return c;
    };
    return UIX;
}(UI_1.UI));
exports.UIX = UIX;

},{"./UI":2,"./UIXButton":5,"./UIXField":6}],5:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var UIComponent_1 = require("./UIComponent");
var UIXButton = /** @class */ (function (_super) {
    __extends(UIXButton, _super);
    function UIXButton(up) {
        var _this = _super.call(this, 'button', up) || this;
        _this.addChange(function (e) {
            e.setAttribute("data-nk-btn", "normal");
        });
        return _this;
    }
    UIXButton.prototype.primary = function () {
        this.addChange(function (e) {
            e.setAttribute("data-nk-btn", "primary");
        });
        return this;
    };
    UIXButton.prototype.link = function () {
        this.addChange(function (e) {
            e.setAttribute("data-nk-btn", "link");
        });
        return this;
    };
    UIXButton.prototype.valued = function (v) {
        this.addChange(function (e) {
            e.textContent = v;
        });
        return this;
    };
    UIXButton.prototype.value = function () {
        return this._element.textContent;
    };
    return UIXButton;
}(UIComponent_1.UIComponent));
exports.UIXButton = UIXButton;

},{"./UIComponent":3}],6:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var UIComponent_1 = require("./UIComponent");
var UIXField = /** @class */ (function (_super) {
    __extends(UIXField, _super);
    function UIXField(ui) {
        var _this = _super.call(this, 'div', ui) || this;
        _super.prototype.className.call(_this, 'nk-fld');
        _this._label = ui.label();
        _this._input = ui.input();
        _this._span = ui.span();
        _super.prototype.add.call(_this, _this._label);
        _super.prototype.add.call(_this, _this._input);
        _super.prototype.add.call(_this, _this._span);
        return _this;
    }
    UIXField.prototype.label = function (value) {
        this._label.text(value);
        return this;
    };
    UIXField.prototype.hint = function (value) {
        this._input.addChange(function (e) {
            e.placeholder = value;
        });
        return this;
    };
    UIXField.prototype.msg = function (value) {
        this.addChange(function (e) {
            e.classList.add('nk-fld-m');
        });
        this._span.addChange(function (e) {
            e.textContent = value;
        });
        return this;
    };
    UIXField.prototype.invalid = function (value) {
        if (!value || value == '') {
            this.addChange(function (e) {
                e.classList.remove('nk-fld-iv');
            });
            this._span.addChange(function (e) {
                e.textContent = '';
            });
        }
        else {
            this.addChange(function (e) {
                e.classList.add('nk-fld-iv');
            });
            this._span.addChange(function (e) {
                e.textContent = value;
            });
        }
        return this;
    };
    UIXField.prototype.valued = function (v) {
        this._input.addChange(function (e) {
            e.value = v;
        });
        return this;
    };
    UIXField.prototype.value = function () {
        return this._input._element.value;
    };
    UIXField.prototype.password = function () {
        this._input.addChange(function (e) {
            e.type = 'password';
        });
        return this;
    };
    UIXField.prototype.onChange = function (fn) {
        var _this = this;
        this.addChange(function (e) {
            e.onchange = function (event) {
                fn(_this._input._element.value);
            };
        });
        return this;
    };
    UIXField.prototype.onKey = function (fn) {
        var _this = this;
        this.addChange(function (e) {
            e.onkeydown = function (event) {
                fn(_this._input._element.value);
            };
        });
        return this;
    };
    return UIXField;
}(UIComponent_1.UIComponent));
exports.UIXField = UIXField;

},{"./UIComponent":3}],7:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var ViewManager = /** @class */ (function () {
    function ViewManager(selector, ui) {
        var _this = this;
        this.ui = ui;
        this.root = document.querySelector(selector);
        this.stack = [];
        window.onpopstate = function () { return _this.pop(); };
    }
    ViewManager.prototype.open = function (factory) {
        var _this = this;
        this.ui.addChange(function () {
            var element = document.createElement("div");
            element.className = "nk-vw";
            var closeFn = function () {
                var pos = _this.stack.lastIndexOf(element);
                if (pos > -1) {
                    _this.stack.splice(pos, 1);
                }
                _this._setVisible(element, false);
                _this.root.removeChild(element);
                if (_this.stack.length > 0) {
                    _this._setVisible(_this.stack[_this.stack.length - 1], true);
                }
            };
            var component = factory(closeFn);
            component.addChange(function (e) {
                element.appendChild(e);
                _this.root.appendChild(document.createDocumentFragment().appendChild(element));
                if (_this.stack.length > 0) {
                    _this._setVisible(_this.stack[_this.stack.length - 1], false);
                }
                _this.stack.push(element);
                _this._setVisible(element, true);
                history.pushState({}, "", "/");
            });
        });
    };
    ViewManager.prototype.pop = function () {
        if (this.stack.length > 0) {
            var element = this.stack.pop();
            this._setVisible(element, false);
            this.root.removeChild(element);
            if (this.stack.length > 0) {
                this._setVisible(this.stack[this.stack.length - 1], true);
            }
        }
    };
    ViewManager.prototype._setVisible = function (e, visible) {
        var cssVisible = 'nk-vw-ac';
        var cssNoVisible = 'nk-vw-in';
        if (visible) {
            e.classList.remove(cssNoVisible);
            e.classList.add(cssVisible);
        }
        else {
            e.classList.remove(cssVisible);
            e.classList.add(cssNoVisible);
        }
    };
    return ViewManager;
}());
exports.ViewManager = ViewManager;

},{}]},{},[1]);
