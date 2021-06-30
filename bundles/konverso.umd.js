(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs'), require('mustache'), require('@angular/forms'), require('@angular/common'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('konverso', ['exports', '@angular/core', '@angular/common/http', 'rxjs', 'mustache', '@angular/forms', '@angular/common', '@angular/platform-browser'], factory) :
    (global = global || self, factory(global.konverso = {}, global.ng.core, global.ng.common.http, global.rxjs, global.mustache, global.ng.forms, global.ng.common, global.ng.platformBrowser));
}(this, (function (exports, core, http, rxjs, mustache, forms, common, platformBrowser) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var KonversoService = /** @class */ (function () {
        function KonversoService(config, http) {
            this.http = http;
            this.authentication = new core.EventEmitter();
            this.firstVisit = false;
            this.AssistantMode = false;
            this.readyState = false;
            this.token = new rxjs.BehaviorSubject(null);
            // tslint:disable-next-line:variable-name
            this._token = this.token.asObservable();
            this.lang = new rxjs.BehaviorSubject('');
            this.buildHeaders();
            this.initInstance(config);
        }
        /**
         * Send Query To backend server and get a response
         * @param query
         */
        KonversoService.prototype.send = function (query) {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            if (query && query.replace(new RegExp(' ', 'g'), '')) {
                                if (_this.header) {
                                    var preparedData = _this.buildQuery(query);
                                    var options = {
                                        headers: _this.header
                                    };
                                    _this.http.post(_this.endpoint + '?t=' + new Date().getTime(), preparedData, options)
                                        .subscribe(function (data) {
                                        resolve(data);
                                    });
                                }
                                else {
                                    reject(new Error('Header is not set, please provide a token though user setting or though module configuration'));
                                }
                            }
                            else {
                                reject(new Error('Current input is empty, please try again'));
                            }
                        })];
                });
            });
        };
        /**
         * @private
         * Generate Header for backend call
         */
        KonversoService.prototype.buildHeaders = function () {
            var _this = this;
            this._token.subscribe(function (token) {
                var bearer = 'Bearer ' + token;
                _this.header = new http.HttpHeaders({
                    //'Content-Type': 'application/json',
                    // 'Access-Control-Allow-Origin': window.location.origin,
                    'Authorization': bearer
                });
            });
        };
        /**
         * @param config
         * @private
         * Initialize Data for User Instance
         */
        KonversoService.prototype.initInstance = function (config) {
            var _this = this;
            this._auth = !!config.auth;
            if (config.endpoint) {
                this.endpoint = config.endpoint;
                if (config.AssistantMode) {
                    this.AssistantMode = config.AssistantMode;
                }
                if (config.defaultAssets) {
                    this.assets = config.defaultAssets;
                    if (config.defaultAssets.ColorSet) {
                        this.ColorSet = config.defaultAssets.ColorSet;
                    }
                }
                if (config.auth) {
                    this.authentication.subscribe(function (user) {
                        var e_1, _a;
                        var _b, _c, _d, _e;
                        if (!user.lang && config.lang) {
                            user.lang = config.lang;
                        }
                        _this.locale = user.lang;
                        _this.lang.next(_this.locale);
                        if (config.InputPlaceHolder && config.InputPlaceHolder[_this.locale]) {
                            _this.PlaceHolder = config.InputPlaceHolder[_this.locale];
                        }
                        if (config.CustomWelcome && config.BotInitMessage.Welcome && config.BotInitMessage.Welcome[_this.locale]) {
                            _this.Welcome = mustache.render(config.BotInitMessage.Welcome[_this.locale], user);
                        }
                        if (user.token) {
                            _this.token.next(user.token);
                        }
                        if (user.firstVisit) {
                            _this.firstVisit = true;
                            delete user.firstVisit;
                            if (((_c = (_b = config) === null || _b === void 0 ? void 0 : _b.BotInitMessage) === null || _c === void 0 ? void 0 : _c.FirstUsage) &&
                                _this.locale && ((_e = (_d = config) === null || _d === void 0 ? void 0 : _d.BotInitMessage) === null || _e === void 0 ? void 0 : _e.FirstUsage[_this.locale])) {
                                _this.firstUsageStory = [];
                                try {
                                    for (var _f = __values(config.BotInitMessage.FirstUsage[_this.locale]), _g = _f.next(); !_g.done; _g = _f.next()) {
                                        var history_1 = _g.value;
                                        _this.firstUsageStory.push(mustache.render(history_1, user));
                                    }
                                }
                                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                finally {
                                    try {
                                        if (_g && !_g.done && (_a = _f.return)) _a.call(_f);
                                    }
                                    finally { if (e_1) throw e_1.error; }
                                }
                            }
                        }
                        _this.user = user;
                        _this.readyState = true;
                    });
                }
                else if (config.lang) {
                    this.locale = config.lang;
                    this.lang.next(this.locale);
                    if (config.InputPlaceHolder && config.InputPlaceHolder[this.locale]) {
                        this.PlaceHolder = config.InputPlaceHolder[this.locale];
                    }
                    if (config.CustomWelcome && config.BotInitMessage.Welcome && config.BotInitMessage.Welcome[this.locale]) {
                        this.Welcome = config.BotInitMessage.Welcome[this.locale];
                    }
                    this.user = {
                        userId: this.guid(),
                        lang: config.lang
                    };
                    this.readyState = true;
                }
                if (config.token) {
                    this.token.next(config.token);
                }
            }
            else {
                return new Error('Please provide endpoint');
            }
        };
        /**
         * @param query
         * @private
         * prepare set data to push to backend server
         */
        KonversoService.prototype.buildQuery = function (query) {
            // @ts-ignore
            return __assign(__assign({}, this.user), { query: query.replace(/\s+/g, ' ').trim(), isSending: true });
        };
        /**
         * @private
         * Generate Random uniq Id for Konverso Instance
         */
        KonversoService.prototype.guid = function () {
            var random = function () {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            };
            return random() + random() + '-' + random() + '-' + random() + '-' + random() + '-' + random() + random() + random();
        };
        KonversoService.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: ['__NgxKonverso__',] }] },
            { type: http.HttpClient }
        ]; };
        KonversoService = __decorate([
            core.Injectable(),
            __param(0, core.Inject('__NgxKonverso__'))
        ], KonversoService);
        return KonversoService;
    }());

    var BotMessageSample = {
        query: null,
        userId: null,
        timestamp: 1617369777.976196,
        text: null,
        infoURL: '',
        context: [],
        suggestions: []
    };

    /***********************************************************
     **  @project ngx-konverso                              **
     **  @file DotLoader                                         **
     **  @author Brice Daupiard <brice.daupiard@smartiiz.com>  **
     **  @Date 07/04/2021                                         **
     ***********************************************************/
    var DotLoaderTemplate = function (color) { return "<div class=\"loading-dots\">\n<div class=\"loading-dots--dot\" style=\"background-color: " + color + "\"></div>\n  <div class=\"loading-dots--dot\" style=\"background-color: " + color + "\"></div>\n  <div class=\"loading-dots--dot\" style=\"background-color: " + color + "\"></div>\n  </div>"; };

    // @ts-ignore
    var KonversoComponent = /** @class */ (function () {
        function KonversoComponent(service) {
            var _this = this;
            this.service = service;
            this._ready = new core.EventEmitter();
            this.ready = new core.EventEmitter();
            this.AssistantMode = false;
            this.disableUserInput = false;
            if (service._auth) {
                this.service.authentication.subscribe(function () {
                    _this.ngOnInit();
                });
            }
        }
        KonversoComponent.prototype.ngOnInit = function () {
            var _this = this;
            console.log('user agent', navigator.userAgent, navigator.userAgent.match(/iPhone|iPad|iPod/i));
            this.isMobile = this._isMobile();
            this.assets = this.service.assets;
            this.firstVisit = this.service.firstVisit;
            this.firstUsageStory = this.service.firstUsageStory;
            this.AssistantMode = this.service.AssistantMode;
            this.PlaceHolder = this.service.PlaceHolder;
            this.Welcome = this.service.Welcome;
            this.sendBotCommand('exit', false).catch(function (err) { return console.log('fail reset session'); });
            this.History = [];
            if (this.service.ColorSet) {
                this.colorSet = this.service.ColorSet;
            }
            this._ready.subscribe(function (ready) {
                if (ready) {
                    _this.firstVisit = false;
                    _this.service.firstVisit = false;
                    _this.ready.emit(ready);
                }
            });
            if (this.Welcome) {
                var customWelcome = BotMessageSample;
                customWelcome.text = this.Welcome;
                this.LastBotAnswer = customWelcome;
                this.History.push(customWelcome);
            }
        };
        KonversoComponent.prototype.send = function ($event) {
            return __awaiter(this, void 0, void 0, function () {
                var index, response;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if ($event.message === 'exit') {
                                this.sendBotCommand('exit', false).catch(function (err) { return console.log('fail reset session'); });
                                return [2 /*return*/, false];
                            }
                            this.LastBotAnswer.text = '<br>' + DotLoaderTemplate(this.service.ColorSet.Primary);
                            this.History.push($event);
                            if (this.AssistantMode) {
                                if (this.LastUserInput) {
                                    this.LastUserInput.message += ' ' + $event.message;
                                    this.LastUserInput.date = $event.date;
                                }
                                else {
                                    this.LastUserInput = $event;
                                }
                            }
                            else {
                                this.LastUserInput = $event;
                            }
                            index = this.History.length - 1;
                            return [4 /*yield*/, this.service.send($event.message).catch(function (err) {
                                    console.log('We got an error ', err);
                                    // @ts-ignore
                                    _this.History[index].error = true;
                                })];
                        case 1:
                            response = _a.sent();
                            if (response && response.response) {
                                if (response.response.medias && response.response.medias[0] && response.response.medias[0].required_actions &&
                                    response.response.medias[0].required_actions.length) {
                                    this.disableUserInput = true;
                                }
                                else {
                                    this.disableUserInput = false;
                                }
                                this.LastBotAnswer = response.response;
                                this.History.push(response.response);
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        KonversoComponent.prototype.sendBotCommand = function ($event, push) {
            if (push === void 0) { push = true; }
            return __awaiter(this, void 0, void 0, function () {
                var response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.LastBotAnswer.text = '<br>' + DotLoaderTemplate(this.service.ColorSet.Primary);
                            if ($event === 'yes_response' || $event === 'no_response') {
                                this.LastUserInput = null;
                            }
                            return [4 /*yield*/, this.service.send($event).catch(function (err) {
                                    console.log('We got an error ', err);
                                })];
                        case 1:
                            response = _a.sent();
                            if (response.response.medias && response.response.medias[0] && response.response.medias[0].required_actions &&
                                response.response.medias[0].required_actions.length) {
                                this.disableUserInput = true;
                            }
                            else {
                                this.disableUserInput = false;
                            }
                            if (response && response.response && push) {
                                this.LastBotAnswer = response.response;
                                this.History.push(response.response);
                            }
                            else if (response && response.response && !push) {
                                this.LastUserInput = null;
                                this.LastBotAnswer = response.response;
                                this.History.push(response.response);
                            }
                            else {
                                this.LastUserInput = null;
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        KonversoComponent.prototype._isMobile = function () {
            var isMobile = {
                Android: function () {
                    return !!navigator.userAgent.match(/Android/i);
                },
                BlackBerry: function () {
                    return !!navigator.userAgent.match(/BlackBerry/i);
                },
                iOS: function () {
                    return !!navigator.userAgent.match(/iPhone|iPad|iPod/i);
                },
                Opera: function () {
                    return !!navigator.userAgent.match(/Opera Mini/i);
                },
                Windows: function () {
                    return !!navigator.userAgent.match(/IEMobile/i) || !!navigator.userAgent.match(/WPDesktop/i);
                },
                any: function () {
                    return !!(isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
                }
            };
            return isMobile.any();
        };
        KonversoComponent.ctorParameters = function () { return [
            { type: KonversoService }
        ]; };
        __decorate([
            core.Output()
        ], KonversoComponent.prototype, "ready", void 0);
        KonversoComponent = __decorate([
            core.Component({
                selector: 'ngx-konverso',
                template: "<bot-full-screen [class]=\"isMobile ? 'bot-mobile' : ''\"\n                 [assets]=\"assets\"\n                 [firstVisit]=\"firstVisit\"\n                 [firstUsageStory]=\"firstUsageStory\"\n                 (send)=\"send($event)\"\n                 (sendBotCommand)=\"sendBotCommand($event)\"\n                 [displayData]=\"History\"\n                 [disableUserInput]=\"disableUserInput\"\n                 [LastBotAnswer]=\"LastBotAnswer\"\n                 [LastUserInput]=\"LastUserInput\"\n                 [AssistantMode]=\"AssistantMode\"\n                 [PlaceHolder]=\"PlaceHolder\"\n                 [IsMobile]=\"isMobile\"\n                 (readySend)=\"_ready.emit($event)\"\n></bot-full-screen>\n\n\n",
                styles: ["::ng-deep ngx-konverso{overflow:hidden;display:block;min-height:100%;height:100%}::ng-deep ngx-konverso .hidden-btn{visibility:hidden!important}@-webkit-keyframes dot-keyframes{0%,100%{opacity:.4;transform:scale(1,1)}50%{opacity:1;transform:scale(1.2,1.2)}}@keyframes dot-keyframes{0%,100%{opacity:.4;transform:scale(1,1)}50%{opacity:1;transform:scale(1.2,1.2)}}::ng-deep ngx-konverso .loading-dots{text-align:center;width:100%}::ng-deep ngx-konverso .loading-dots--dot{-webkit-animation:1.5s ease-in-out infinite dot-keyframes;animation:1.5s ease-in-out infinite dot-keyframes;border-radius:10px;display:inline-block;height:10px;width:10px}::ng-deep ngx-konverso .loading-dots--dot:nth-child(2){-webkit-animation-delay:.5s;animation-delay:.5s}::ng-deep ngx-konverso .loading-dots--dot:nth-child(3){-webkit-animation-delay:1s;animation-delay:1s}::ng-deep ngx-konverso bot-first-visit,::ng-deep ngx-konverso bot-full-screen{display:table;min-height:100%;height:100%;width:100%}::ng-deep ngx-konverso bot-full-screen button:focus,::ng-deep ngx-konverso bot-full-screen input:focus{outline:0!important}::ng-deep ngx-konverso bot-full-screen .bot-button>*{position:relative}::ng-deep ngx-konverso bot-full-screen .button-lg{padding:10px!important;font-size:16px!important}::ng-deep ngx-konverso bot-full-screen .bot-button{cursor:pointer;opacity:.9;min-width:150px;border-radius:25px;padding:5px;position:relative;margin:30px auto;overflow:hidden;border-width:0;outline:0;box-shadow:0 1px 4px rgba(0,0,0,.6);transition:opacity .3s}::ng-deep ngx-konverso bot-full-screen .bot-button span{display:block;padding:12px 24px}::ng-deep ngx-konverso bot-full-screen .bot-button:focus,::ng-deep ngx-konverso bot-full-screen .bot-button:hover{opacity:1}::ng-deep ngx-konverso bot-full-screen .bot-button:before{content:\"\";position:absolute;top:50%;left:50%;display:block;width:0;padding-top:0;border-radius:100%;background-color:rgba(236,240,241,.3);transform:translate(-50%,-50%)}::ng-deep ngx-konverso bot-full-screen .bot-button:active:before{width:120%;padding-top:120%;transition:width .2s ease-out,padding-top .2s ease-out}::ng-deep ngx-konverso bot-full-screen .bot-button-left{background:linear-gradient(107deg,#4862ab 0,#9d107d 100%) no-repeat padding-box;border-radius:22px;color:#fff!important;font:12px/19px nexa;height:44px;display:inline-block;letter-spacing:0;margin-right:25px}::ng-deep ngx-konverso bot-full-screen .bot-button-right{background:no-repeat padding-box #e5e8EE54;border:2px solid #c2c8d5!important;color:#404e6b!important;border-radius:22px;font:12px/19px nexa;height:44px;letter-spacing:0;display:inline-block}::ng-deep ngx-konverso bot-full-screen .bot-button-grey{background:no-repeat padding-box #e5e8ee!important;border:2px solid #c2c8d5!important;border-radius:10px!important;min-height:44px!important;color:#77839b!important;display:inline-block!important;margin-right:25px!important}::ng-deep ngx-konverso bot-full-screen .bot-container{font-family:nexa,Roboto;width:100%;height:100%;display:table;margin:auto;background-size:contain}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view{background-size:contain;width:auto;margin:auto;height:100%;display:table-cell;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view img{margin:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper{padding-top:5%;width:100%;margin:auto;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:20px;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step{margin-top:5%;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step .bot-init-dot{border:1px solid;display:inline-block;width:12px;height:12px;margin-left:2.5px;margin-right:2.5px;border-radius:50%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-button-wrapper{display:block;width:100%;text-align:center;margin-top:8%;margin-right:auto;margin-left:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper{display:table;height:100%;max-height:100%;overflow:hidden;width:100%;position:relative}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-logo{padding-top:2.5%;width:100%;margin:auto;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-logo img{margin-left:auto;margin-right:auto;display:block;width:150px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-answer{width:600px;text-align:center;margin:2.5% auto auto;font-size:25px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .user-input{font-size:15px;margin:auto;display:block}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .user-input .data{padding:10px 20px;border-radius:25px 25px 0;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:5% auto auto;background-color:#00a9de}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .user-input .time{font-weight:300;position:absolute;width:200px;display:block;margin-left:95%;bottom:-1%;color:#000;font-size:10px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-input-wrapper{text-align:center;position:absolute;width:100%;bottom:2%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-input-wrapper input{text-align:center;display:inline-block;padding:10px;border-radius:25px;color:#000;width:40%;border:1px solid rgba(0,0,0,.2);background:no-repeat padding-box #e5e8ee;margin-right:10px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-input-wrapper button{display:inline-block;width:calc(10% - 15px);padding:11px;background:linear-gradient(243deg,#9d107d 0,#4862ab 100%) no-repeat padding-box!important;border-radius:25px!important}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper{width:100%;display:table;height:100%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo{max-width:100px;position:absolute;top:2%;left:2%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo img{max-width:100px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper{width:100%;position:relative;max-width:600px;height:calc(85vh - 50px);padding:15px 30px;margin:0 auto;overflow-y:scroll;direction:rtl}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper::-webkit-scrollbar{width:0!important}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat{position:absolute;overflow-x:hidden;display:flex;flex-direction:column-reverse;justify-content:flex-end;transform:rotate(180deg);min-height:100%;width:94%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer{font-size:15px;padding:10px 20px;border-radius:25px;color:#000;background-color:transparent;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;margin:15px 0;word-break:break-all;transform:rotate(180deg);direction:ltr}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer button{padding:10px;border:1px solid}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input{font-size:15px;transform:rotate(180deg);direction:ltr}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .data{padding:10px 20px;border-radius:25px 25px 0;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:15px 0 15px auto;background-color:#00a9de}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .time{font-weight:300;position:absolute;width:200px;display:block;margin-left:95%;bottom:-1%;color:#000;font-size:10px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper{display:table;width:100%;margin:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input-disable{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5% .3%;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input input{display:inline-block;padding:10px;border-radius:25px;color:#000;width:60%;margin-right:15px;border:1px solid rgba(0,0,0,.2)}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input button{display:inline-block;width:calc(36% - 15px);padding:11px}::ng-deep ngx-konverso .bot-mobile{font-family:nexa,Roboto;width:96vw!important;height:100vh;display:table;margin:auto;background-size:contain}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit{position:relative}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-logo-init-wrapper{margin-top:2.5vh}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block;max-width:150px}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:15px!important;text-align:center}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-init-button-wrapper{position:absolute;top:70vh}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-answer{width:70vw!important;text-align:center;margin:15.5% auto auto!important;font-size:15px!important}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-input-wrapper{background:#fff;bottom:10vh!important}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-input-wrapper input{width:90%!important}"]
            })
        ], KonversoComponent);
        return KonversoComponent;
    }());

    var TranslateService = /** @class */ (function () {
        function TranslateService() {
            this.lang = {
                'fr': {
                    'GO': "C'est parti",
                    'SEND': 'Envoyer',
                    'SELECT': 'Vous devez sélectionner une réponse',
                },
                'en': {
                    'GO': "Let's go",
                    'SEND': 'Send',
                    'SELECT': 'You must select an answer',
                }
            };
        }
        TranslateService.prototype.translate = function (l, word) {
            return this.lang[l][word];
        };
        TranslateService.ɵprov = core.ɵɵdefineInjectable({ factory: function TranslateService_Factory() { return new TranslateService(); }, token: TranslateService, providedIn: "root" });
        TranslateService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], TranslateService);
        return TranslateService;
    }());

    var DesktopFullScreenComponent = /** @class */ (function () {
        function DesktopFullScreenComponent(translate, service) {
            var _this = this;
            this.service = service;
            this.AssistantMode = false;
            this.firstVisit = false;
            this.IsMobile = false;
            this.readySend = new core.EventEmitter(false);
            this.send = new core.EventEmitter(null);
            this.sendBotCommand = new core.EventEmitter(null);
            this.sendEvent = new core.EventEmitter(null);
            this.currentPlaceHolder = '';
            this.sendBtn = '';
            this.select = '';
            service.lang.subscribe(function (r) {
                if (service.locale) {
                    _this.sendBtn = translate.translate(service.locale, 'SEND');
                    _this.select = translate.translate(service.locale, 'SELECT');
                }
            });
        }
        DesktopFullScreenComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.PlaceHolder) {
                setInterval(function () {
                    _this.currentPlaceHolder = _this.PlaceHolder[Math.floor(Math.random() * _this.PlaceHolder.length)];
                }, 3000);
            }
        };
        DesktopFullScreenComponent.prototype.emit = function ($event) {
            this.firstVisit = false;
            this.readySend.emit(true);
        };
        DesktopFullScreenComponent.prototype._send = function () {
            var userData = {
                message: this.userInput,
                date: new Date().toLocaleTimeString(navigator.language, {
                    hour: '2-digit',
                    minute: '2-digit'
                })
            };
            this.send.emit(userData);
            this.userInput = null;
        };
        DesktopFullScreenComponent.prototype.scroll = function (scrollHeight) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve) {
                            setTimeout(function () {
                                resolve(0);
                            }, 300);
                        })];
                });
            });
        };
        DesktopFullScreenComponent.prototype.byPassUserInput = function (botdata, i) {
            var e_1, _a;
            var buttons = document.querySelectorAll('.show-btn');
            try {
                for (var _b = __values(Array.from(buttons)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var btn = _c.value;
                    btn.classList.add('hidden-btn');
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.sendBotCommand.emit(botdata);
        };
        DesktopFullScreenComponent.ctorParameters = function () { return [
            { type: TranslateService },
            { type: KonversoService }
        ]; };
        __decorate([
            core.Input()
        ], DesktopFullScreenComponent.prototype, "AssistantMode", void 0);
        __decorate([
            core.Input()
        ], DesktopFullScreenComponent.prototype, "assets", void 0);
        __decorate([
            core.Input()
        ], DesktopFullScreenComponent.prototype, "firstVisit", void 0);
        __decorate([
            core.Input()
        ], DesktopFullScreenComponent.prototype, "firstUsageStory", void 0);
        __decorate([
            core.Input()
        ], DesktopFullScreenComponent.prototype, "displayData", void 0);
        __decorate([
            core.Input()
        ], DesktopFullScreenComponent.prototype, "disableUserInput", void 0);
        __decorate([
            core.Input()
        ], DesktopFullScreenComponent.prototype, "LastUserInput", void 0);
        __decorate([
            core.Input()
        ], DesktopFullScreenComponent.prototype, "LastBotAnswer", void 0);
        __decorate([
            core.Input()
        ], DesktopFullScreenComponent.prototype, "PlaceHolder", void 0);
        __decorate([
            core.Input()
        ], DesktopFullScreenComponent.prototype, "IsMobile", void 0);
        __decorate([
            core.Output()
        ], DesktopFullScreenComponent.prototype, "readySend", void 0);
        __decorate([
            core.Output()
        ], DesktopFullScreenComponent.prototype, "send", void 0);
        __decorate([
            core.Output()
        ], DesktopFullScreenComponent.prototype, "sendBotCommand", void 0);
        __decorate([
            core.Output()
        ], DesktopFullScreenComponent.prototype, "sendEvent", void 0);
        DesktopFullScreenComponent = __decorate([
            core.Component({
                selector: 'bot-full-screen',
                template: "<div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{backgroundImage : 'url('+assets.Background+')'}\"\n     xmlns=\"http://www.w3.org/1999/html\">\n  <div class=\"bot-view\">\n    <ng-container *ngIf=\"firstVisit && firstUsageStory\">\n      <bot-first-visit [firstUsageStory]=\"firstUsageStory\" [assets]=\"assets\"\n                       (ready)=\"emit($event)\"></bot-first-visit>\n    </ng-container>\n    <ng-container *ngIf=\"!firstVisit\">\n      <div class=\"bot-assistant-wrapper\" *ngIf=\"AssistantMode\">\n        <div class=\"bot-logo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>\n        <div class=\"bot-discussion-wrapper\">\n          <ng-container *ngIf=\"LastUserInput\">\n            <div class=\"user-input\" *ngIf=\"LastUserInput\">\n              <div class=\"data\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n                    }\">\n                {{LastUserInput.message}}\n              </div>\n              <span class=\"time\">{{LastUserInput.date}}</span>\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"LastBotAnswer\">\n            <div class=\"bot-answer\">\n              <ng-container>\n\n              </ng-container>\n              <ng-container *ngIf=\"LastBotAnswer.text\">\n                <span [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span><br>\n              </ng-container>\n              <ng-container *ngIf=\"LastBotAnswer.medias && LastBotAnswer.medias.length\n                   && LastBotAnswer.medias[0].required_actions\n                   && LastBotAnswer.medias[0].required_actions.length\">\n                <ng-container *ngFor=\"let suggest of LastBotAnswer.medias[0].required_actions; let i = index\">\n                  <ng-container *ngIf=\"suggest.format === 'button'\"  >\n                    <button *ngIf=\"suggest.value?.title == 'Terminer' || suggest.value?.title == 'Quit'\" [style]=\"{\n                      borderColor : assets?.ColorSet?.Primary,\n                      color : assets?.ColorSet?.Primary\n             }\"  class=\"bot-button bot-button-left show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                             [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                    <button *ngIf=\"suggest.value?.title == 'Nouvelle Demande' || suggest.value?.title == 'New Request'\" [style]=\"{\n                      borderColor : assets?.ColorSet?.Primary,\n                      color : assets?.ColorSet?.Primary\n             }\"  class=\"bot-button bot-button-right show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                             [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                    <button *ngIf=\"suggest.value?.title != 'Terminer' && suggest.value?.title != 'Quit' && suggest.value?.title != 'Nouvelle Demande' && suggest.value?.title != 'New Request'\" \n                    [style]=\"{\n                     borderColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Primary\n            }\"  class=\"bot-button bot-button-grey show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                            [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                  </ng-container>\n                </ng-container>\n              </ng-container>\n\n            </div>\n          </ng-container>\n          <div class=\"bot-input-wrapper\">\n            <div class=\"bot-input\" *ngIf=\"!disableUserInput\">\n              <input type=\"text\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" maxlength=\"200\"\n                     [placeholder]=\"currentPlaceHolder\">\n              <button class=\"bot-button\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n            }\" (click)=\"_send()\" [disabled]=\"!userInput\">{{ sendBtn }}\n              </button>\n            </div>\n            <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\n              <i>{{ select }}</i>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"bot-chat-wrapper\" *ngIf=\"!AssistantMode\">\n        {{AssistantMode}}\n        <div class=\"bot-discussion-wrapper\" #scrollMe [scrollTop]=\"scrollMe.scrollTo(0, 9999999)\">\n          <div class=\"bot-chat\">\n\n            <ng-container *ngFor=\"let entry of displayData\">\n              <ng-container *ngIf=\"entry.date\">\n                <div class=\"user-input\">\n                  <div class=\"data\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n                    }\">\n                    {{entry.message}}\n                  </div>\n                  <span class=\"time\">{{entry.date}}</span>\n                </div>\n              </ng-container>\n              <ng-container *ngIf=\"!entry.date\">\n                <div class=\"bot-answer\">\n                  <ng-container *ngIf=\"entry.text\">\n                    <span [innerHTML]=\"entry.text | safeHtml\"></span><br>\n                  </ng-container>\n                  <ng-container *ngIf=\"entry.medias && entry.medias.length\n                   && entry.medias[0].required_actions\n                   && entry.medias[0].required_actions.length\">\n                    <ng-container *ngFor=\"let suggest of entry.medias[0].required_actions\">\n                      <ng-container *ngIf=\"suggest.format === 'button'\">\n                        <button [style]=\"{\n                     borderColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Primary\n            }\" class=\"bot-button\" (click)=\"byPassUserInput(suggest?.value?.onClick)\"\n                                [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \"></button>\n                      </ng-container>\n                    </ng-container>\n                  </ng-container>\n\n                </div>\n              </ng-container>\n            </ng-container>\n          </div>\n        </div>\n        <div class=\"bot-input-wrapper\">\n          <div class=\"bot-input\" *ngIf=\"!disableUserInput\">\n            <input type=\"text\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" maxlength=\"200\"\n                   [placeholder]=\"currentPlaceHolder\">\n            <button class=\"bot-button\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n            }\" (click)=\"_send()\" [disabled]=\"!userInput\">{{ sendBtn }}\n            </button>\n          </div>\n          <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\n            <i>{{ select }}</i>\n          </div>\n        </div>\n        <div class=\"bot-logo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>\n      </div>\n    </ng-container>\n\n  </div>\n</div>\n",
                styles: [""]
            })
        ], DesktopFullScreenComponent);
        return DesktopFullScreenComponent;
    }());

    var FirstVisitComponent = /** @class */ (function () {
        function FirstVisitComponent(translate, service) {
            var _this = this;
            this.service = service;
            this.ready = new core.EventEmitter();
            this.position = 0;
            this.current = '';
            this.go = '';
            service.lang.subscribe(function (r) {
                if (service.locale) {
                    _this.go = translate.translate(service.locale, 'GO');
                }
            });
        }
        FirstVisitComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.current = this.firstUsageStory[this.position];
            var clear = setInterval(function () {
                if (_this.position < (_this.firstUsageStory.length - 1)) {
                    _this.current = _this.firstUsageStory[++_this.position];
                }
                else {
                    clearInterval(clear);
                }
            }, 5000);
        };
        FirstVisitComponent.prototype.goTo = function (pos) {
            this.position = pos;
            this.current = this.firstUsageStory[this.position];
        };
        FirstVisitComponent.prototype.start = function () {
            //console.log('OOOKKKK')
            this.ready.emit(true);
        };
        FirstVisitComponent.ctorParameters = function () { return [
            { type: TranslateService },
            { type: KonversoService }
        ]; };
        __decorate([
            core.Input()
        ], FirstVisitComponent.prototype, "firstUsageStory", void 0);
        __decorate([
            core.Input()
        ], FirstVisitComponent.prototype, "assets", void 0);
        __decorate([
            core.Output()
        ], FirstVisitComponent.prototype, "ready", void 0);
        FirstVisitComponent = __decorate([
            core.Component({
                selector: 'bot-first-visit',
                template: "<ng-container>\n  <div class=\"bot-logo-init-wrapper\">\n    <img [src]=\"assets.FullSizeLogo\">\n  </div>\n  <div class=\"bot-init-text\" [innerHTML]=\"current | safeHtml\"></div>\n  <div class=\"bot-init-bullet-step\">\n      <span *ngFor=\"let elem of firstUsageStory ; let pos = index\" class=\"bot-init-dot\"\n            [style]=\"pos === position ? {\n              backgroundColor : assets?.ColorSet?.Primary,\n              borderColor :assets?.ColorSet?.Primary\n              }:{\n                backgroundColor :assets?.ColorSet?.Secondary,\n                borderColor :assets?.ColorSet?.Primary\n                }\" (click)=\"goTo(pos)\">\n      </span>\n  </div>\n  <div class=\"bot-init-button-wrapper\">\n    <button mat-button class=\"bot-button button-lg\" [style]=\"{\n      backgroundColor : assets?.ColorSet?.Primary,\n      color : assets?.ColorSet?.Secondary\n    }\" (click)=\"start()\">{{ go }}</button>\n  </div>\n\n</ng-container>\n",
                styles: [""]
            })
        ], FirstVisitComponent);
        return FirstVisitComponent;
    }());

    var SafeHtmlPipe = /** @class */ (function () {
        function SafeHtmlPipe(sanitizer) {
            this.sanitizer = sanitizer;
        }
        SafeHtmlPipe.prototype.transform = function (value) {
            return this.sanitizer.bypassSecurityTrustHtml(value);
        };
        SafeHtmlPipe.ctorParameters = function () { return [
            { type: platformBrowser.DomSanitizer }
        ]; };
        SafeHtmlPipe = __decorate([
            core.Pipe({
                name: 'safeHtml'
            })
        ], SafeHtmlPipe);
        return SafeHtmlPipe;
    }());

    // @ts-ignore
    var KonversoModule = /** @class */ (function () {
        function KonversoModule(parentModule) {
            if (parentModule) {
                throw new Error('KonversoModule is already loaded. Import it in the AppModule only');
            }
        }
        KonversoModule_1 = KonversoModule;
        KonversoModule.forRoot = function (config) {
            return {
                ngModule: KonversoModule_1,
                providers: [
                    { provide: '__NgxKonverso__', useValue: config },
                    KonversoService
                ]
            };
        };
        var KonversoModule_1;
        KonversoModule.ctorParameters = function () { return [
            { type: KonversoModule, decorators: [{ type: core.Optional }, { type: core.SkipSelf }] }
        ]; };
        KonversoModule = KonversoModule_1 = __decorate([
            core.NgModule({
                declarations: [KonversoComponent, DesktopFullScreenComponent, FirstVisitComponent, SafeHtmlPipe],
                imports: [
                    forms.FormsModule,
                    http.HttpClientModule,
                    common.CommonModule,
                ],
                providers: [KonversoService],
                exports: [KonversoComponent]
            }),
            __param(0, core.Optional()), __param(0, core.SkipSelf())
        ], KonversoModule);
        return KonversoModule;
    }());

    exports.KonversoComponent = KonversoComponent;
    exports.KonversoModule = KonversoModule;
    exports.KonversoService = KonversoService;
    exports.ɵa = DesktopFullScreenComponent;
    exports.ɵb = TranslateService;
    exports.ɵc = FirstVisitComponent;
    exports.ɵd = SafeHtmlPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=konverso.umd.js.map
