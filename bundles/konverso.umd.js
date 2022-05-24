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
            this.customData = new rxjs.BehaviorSubject(null);
            this.emulationTrigger = new rxjs.BehaviorSubject(null);
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
         * Emulate user entry Query To backend server and get a response
         * @param query
         */
        KonversoService.prototype.sendTriggerEmulation = function (query) {
            return __awaiter(this, void 0, void 0, function () {
                var response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.send(query).catch(function (err) {
                                console.log('error trigger emulation', err);
                            })];
                        case 1:
                            response = _a.sent();
                            if (response) {
                                this.emulationTrigger.next(__assign({ input: query }, response));
                            }
                            return [2 /*return*/];
                    }
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
                        var _b, _c, _d, _e, _f, _g, _h, _j;
                        if (!user.lang && config.lang) {
                            user.lang = config.lang;
                        }
                        _this.locale = (_b = user) === null || _b === void 0 ? void 0 : _b.lang;
                        _this.lang.next(_this.locale);
                        if (config.InputPlaceHolder && config.InputPlaceHolder[_this.locale]) {
                            _this.PlaceHolder = config.InputPlaceHolder[_this.locale];
                        }
                        if (config.InputNumberPlaceHolder && config.InputNumberPlaceHolder[_this.locale]) {
                            _this.NumberPlaceHolder = config.InputNumberPlaceHolder[_this.locale];
                        }
                        if (config.CustomWelcome && config.BotInitMessage.Welcome && config.BotInitMessage.Welcome[_this.locale]) {
                            _this.Welcome = mustache.render(config.BotInitMessage.Welcome[_this.locale], user);
                        }
                        if ((_c = user) === null || _c === void 0 ? void 0 : _c.token) {
                            _this.token.next((_d = user) === null || _d === void 0 ? void 0 : _d.token);
                        }
                        if ((_e = user) === null || _e === void 0 ? void 0 : _e.firstVisit) {
                            _this.firstVisit = true;
                            delete user.firstVisit;
                            if (((_g = (_f = config) === null || _f === void 0 ? void 0 : _f.BotInitMessage) === null || _g === void 0 ? void 0 : _g.FirstUsage) &&
                                _this.locale && ((_j = (_h = config) === null || _h === void 0 ? void 0 : _h.BotInitMessage) === null || _j === void 0 ? void 0 : _j.FirstUsage[_this.locale])) {
                                _this.firstUsageStory = [];
                                try {
                                    for (var _k = __values(config.BotInitMessage.FirstUsage[_this.locale]), _l = _k.next(); !_l.done; _l = _k.next()) {
                                        var history_1 = _l.value;
                                        _this.firstUsageStory.push(mustache.render(history_1, user));
                                    }
                                }
                                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                finally {
                                    try {
                                        if (_l && !_l.done && (_a = _k.return)) _a.call(_k);
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
                    if (config.InputNumberPlaceHolder && config.InputNumberPlaceHolder[this.locale]) {
                        this.NumberPlaceHolder = config.InputNumberPlaceHolder[this.locale];
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
            var custom = this.customData.getValue();
            return __assign(__assign(__assign({}, custom), this.user), { query: query.replace(/\s+/g, ' ').trim(), isSending: true });
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
            this.sended = new core.EventEmitter();
            this.showInput = true;
            this.afterProcess = false;
            this.AssistantMode = false;
            this.disableUserInput = false;
            if (service._auth) {
                this.service.authentication.subscribe(function () {
                    _this.ngOnInit();
                });
            }
            this.service.emulationTrigger.subscribe(function (response) {
                console.log(response);
                if (response) {
                    if (!_this.LastUserInput) {
                        _this.LastUserInput = {
                            message: '',
                            date: '',
                            error: null
                        };
                    }
                    _this.LastUserInput.message += ' ' + response.input;
                    _this.LastUserInput.date = new Date().toISOString();
                    _this.triggerKbotResponse(response);
                }
            });
        }
        KonversoComponent.prototype.triggerKbotResponse = function (response) {
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
        };
        KonversoComponent.prototype.ngOnInit = function () {
            var _this = this;
            console.log('user agent', navigator.userAgent, navigator.userAgent.match(/iPhone|iPad|iPod/i));
            this.isMobile = this._isMobile();
            this.assets = this.service.assets;
            this.firstVisit = this.service.firstVisit;
            this.firstUsageStory = this.service.firstUsageStory;
            this.AssistantMode = this.service.AssistantMode;
            this.PlaceHolder = this.service.PlaceHolder;
            this.NumberPlaceHolder = this.service.NumberPlaceHolder;
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
                var verifnb, index, response;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if ($event.message === 'exit') {
                                this.sendBotCommand('exit', false).catch(function (err) { return console.log('fail reset session'); });
                                return [2 /*return*/, false];
                            }
                            this.sended.emit(true);
                            this.LastBotAnswer.text = '<br>' + DotLoaderTemplate(this.service.ColorSet.Primary);
                            verifnb = /^\d+$/.exec($event.message);
                            if (!verifnb) {
                                this.History.push($event);
                            }
                            if (this.AssistantMode) {
                                if (this.LastUserInput) {
                                    if (!verifnb) {
                                        this.LastUserInput.message += ' ' + $event.message;
                                        this.LastUserInput.date = $event.date;
                                    }
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
                            this.triggerKbotResponse(response);
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
                            if ($event === 'yes_response' || $event === 'no_response' || $event == 'exit') {
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
        __decorate([
            core.Output()
        ], KonversoComponent.prototype, "sended", void 0);
        __decorate([
            core.Input()
        ], KonversoComponent.prototype, "showInput", void 0);
        __decorate([
            core.Input()
        ], KonversoComponent.prototype, "afterProcess", void 0);
        KonversoComponent = __decorate([
            core.Component({
                selector: 'ngx-konverso',
                template: "<bot-full-screen [class]=\"isMobile ? 'bot-mobile' : ''\"\n                 [assets]=\"assets\"\n                 [firstVisit]=\"firstVisit\"\n                 [firstUsageStory]=\"firstUsageStory\"\n                 (send)=\"send($event)\"\n                 (sendBotCommand)=\"sendBotCommand($event)\"\n                 [displayData]=\"History\"\n                 [disableUserInput]=\"disableUserInput\"\n                 [LastBotAnswer]=\"LastBotAnswer\"\n                 [LastUserInput]=\"LastUserInput\"\n                 [AssistantMode]=\"AssistantMode\"\n                 [PlaceHolder]=\"PlaceHolder\"\n                 [NumberPlaceHolder]=\"NumberPlaceHolder\"\n                 [IsMobile]=\"isMobile\"\n                 (readySend)=\"_ready.emit($event)\"\n                 [showInput]=\"showInput\"\n                 [afterProcess]=\"afterProcess\"\n></bot-full-screen>\n\n\n",
                styles: ["::ng-deep ngx-konverso{overflow:hidden;display:block;min-height:100%;height:100%}::ng-deep ngx-konverso .hidden-btn{transform:translateY(-100vh)!important;transition:transform .5s ease-in-out!important;animation:.5s fadeout;-moz-animation:.5s fadeout;-webkit-animation:.5s fadeout;-o-animation:.5s fadeout}@keyframes fadeout{from{opacity:1}to{opacity:0}}@-webkit-keyframes fadeout{from{opacity:1}to{opacity:0}}@-webkit-keyframes dot-keyframes{0%,100%{opacity:.4;transform:scale(1,1)}50%{opacity:1;transform:scale(1.2,1.2)}}@keyframes dot-keyframes{0%,100%{opacity:.4;transform:scale(1,1)}50%{opacity:1;transform:scale(1.2,1.2)}}::ng-deep ngx-konverso .loading-dots{text-align:center;width:100%}::ng-deep ngx-konverso .loading-dots--dot{-webkit-animation:1.5s ease-in-out infinite dot-keyframes;animation:1.5s ease-in-out infinite dot-keyframes;border-radius:10px;display:inline-block;height:10px;width:10px}::ng-deep ngx-konverso .loading-dots--dot:nth-child(2){-webkit-animation-delay:.5s;animation-delay:.5s}::ng-deep ngx-konverso .loading-dots--dot:nth-child(3){-webkit-animation-delay:1s;animation-delay:1s}::ng-deep ngx-konverso bot-first-visit,::ng-deep ngx-konverso bot-full-screen{display:table;min-height:100%;height:100%;width:100%}::ng-deep ngx-konverso bot-full-screen button:focus,::ng-deep ngx-konverso bot-full-screen input:focus{outline:0!important}::ng-deep ngx-konverso bot-full-screen .bot-button>*{position:relative}::ng-deep ngx-konverso bot-full-screen .button-lg{padding:10px!important;font-size:16px!important}::ng-deep ngx-konverso bot-full-screen .bot-button{cursor:pointer;opacity:.9;min-width:150px;border-radius:25px;padding:5px;position:relative;overflow:hidden;border-width:0;outline:0;box-shadow:0 1px 4px rgba(0,0,0,.6);transition:opacity .3s}::ng-deep ngx-konverso bot-full-screen .bot-button span{display:block;padding:12px 24px}::ng-deep ngx-konverso bot-full-screen .bot-button:focus,::ng-deep ngx-konverso bot-full-screen .bot-button:hover{opacity:1}::ng-deep ngx-konverso bot-full-screen .bot-button:before{content:\"\";position:absolute;top:50%;left:50%;display:block;width:0;padding-top:0;border-radius:100%;background-color:rgba(236,240,241,.3);transform:translate(-50%,-50%)}::ng-deep ngx-konverso bot-full-screen .bot-button:active:before{width:120%;padding-top:120%;transition:width .2s ease-out,padding-top .2s ease-out}::ng-deep ngx-konverso bot-full-screen .bot-button-left{background:linear-gradient(107deg,#4862ab 0,#9d107d 100%) no-repeat padding-box;border-radius:22px;color:#fff!important;font:12px/19px nexa;height:44px;display:inline-block;letter-spacing:0;margin-right:25px}::ng-deep ngx-konverso bot-full-screen .bot-button-right{background:no-repeat padding-box #e5e8EE54;border:2px solid #c2c8d5!important;color:#404e6b!important;border-radius:22px;font:12px/19px nexa;height:44px;letter-spacing:0;display:inline-block}@-webkit-keyframes movetop2{from{opacity:0;margin-top:5%}to{opacity:1;margin-top:0}}@keyframes movetop2{from{opacity:0;margin-top:5%}to{opacity:1;margin-top:0}}::ng-deep ngx-konverso bot-full-screen .bot-button-grey{background:0 0!important;border:2px solid #171f26!important;border-radius:25px;min-height:44px!important;font:16px/25px \"Nexa Text\";letter-spacing:0;color:#171f26!important;display:inline-block;margin-right:25px;animation:.3s ease-in .3s both movetop2!important;-moz-animation:.3s ease-in .3s both movetop2!important;-webkit-animation:.3s ease-in .3s both movetop2!important;-o-animation:.3s ease-in .3s both movetop2!important}::ng-deep ngx-konverso bot-full-screen .bot-container{font-family:nexa,Roboto;width:100%;height:70vh;display:table;margin:auto;background-size:contain}@media screen and (max-width:500px){::ng-deep ngx-konverso bot-full-screen .bot-container{height:90vh}}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view{background-size:contain;width:auto;margin:auto;height:100%;display:table-cell;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view img{margin:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper{padding-top:5%;width:100%;margin:auto;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:20px;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step{margin-top:5%;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step .bot-init-dot{border:1px solid;display:inline-block;width:12px;height:12px;margin-left:2.5px;margin-right:2.5px;border-radius:50%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-button-wrapper{display:block;width:100%;text-align:center;margin-top:8%;margin-right:auto;margin-left:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper{display:table;height:100%;width:100%;position:relative}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-logo{width:100%;margin:0 auto auto;vertical-align:middle;animation:.4s ease-in 1.8s both movetop!important;-moz-animation:.4s ease-in 1.8s both movetop!important;-webkit-animation:.4s ease-in 1.8s both movetop!important;-o-animation:.4s ease-in 1.8s both movetop!important}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-logo img{margin-left:auto;margin-right:auto;display:block;width:150px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper{display:-ms-grid;display:grid;-ms-grid-columns:1fr;grid-template-columns:1fr;-ms-grid-rows:.3fr 0 1fr 0 .7fr;grid-template-rows:.3fr 1fr .7fr;gap:0 0;grid-template-areas:\"user-input\" \"bot-answer\" \"bot-input-wrapper\";overflow:auto!important}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer{-ms-grid-row:3;-ms-grid-column:1;width:600px;text-align:center;margin:auto;font-size:18px;grid-area:bot-answer;height:100%;overflow-y:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input{-ms-grid-row:1;-ms-grid-column:1;font-size:15px;margin:auto;display:block;grid-area:user-input}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input .data{padding:10px 20px;border-radius:23px 23px 0;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:5% auto auto;background:no-repeat padding-box #171f26}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input .time{font-weight:300;position:absolute;width:200px;display:none;margin-left:95%;bottom:-1%;color:#000;font-size:10px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper{-ms-grid-row:5;-ms-grid-column:1;text-align:center;width:100%;bottom:2%;animation:.4s ease-in 3.2s both fadeinanswer;-moz-animation:.4s ease-in 3.2s both fadeinanswer;-webkit-animation:.4s ease-in 3.2s both fadeinanswer;-o-animation:.4s ease-in 3.2s both fadeinanswer;grid-area:bot-input-wrapper}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper input{text-align:left;padding:10px;color:#000;height:100px;width:70%;background:0 0;border:2px solid #171f26;border-radius:6px;display:block;margin:0 auto 10px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper button{background:no-repeat padding-box #171f26;border:2px solid #171f26;border-radius:6px;display:inline-block;width:calc(10% - 15px);padding:11px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper{width:100%;display:table;height:100%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo{max-width:100px;position:absolute;top:2%;left:2%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo img{max-width:100px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper{width:100%;position:relative;max-width:600px;height:60%!important;padding:15px 30px;margin:0 auto;overflow-y:scroll;direction:rtl;display:-ms-grid;display:grid;-ms-grid-columns:1fr;grid-template-columns:1fr;-ms-grid-rows:.3fr 0 1fr 0 .7fr;grid-template-rows:.3fr 1fr .7fr;gap:0 0;grid-template-areas:\"user-input\" \"bot-answer\" \"bot-input-wrapper\";overflow:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper::-webkit-scrollbar{width:0!important}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat{position:absolute;overflow-x:hidden;display:flex;flex-direction:column-reverse;justify-content:flex-end;transform:rotate(180deg);min-height:100%;width:94%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer{-ms-grid-row:3;-ms-grid-column:1;font-size:15px;padding:10px 20px;border-radius:25px;color:#000;height:60%;overflow-y:auto;background-color:transparent;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;margin:15px 0;word-break:break-all;transform:rotate(180deg);direction:ltr;grid-area:bot-answer}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer button{padding:10px;border:1px solid}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input{-ms-grid-row:1;-ms-grid-column:1;font-size:15px;transform:rotate(180deg);direction:ltr;grid-area:user-input}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .data{padding:10px 20px;border-radius:23px 23px 0;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:15px 0 15px auto;background:no-repeat padding-box #171f26}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .time{font-weight:300;position:absolute;width:200px;display:none;margin-left:95%;bottom:-1%;color:#000;font-size:10px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper{-ms-grid-row:5;-ms-grid-column:1;bottom:2%;display:table;width:100%;margin:auto;grid-area:bot-input-wrapper}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input-disable{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5% .3%;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input input{display:inline-block;padding:10px;border-radius:25px;color:#000;width:60%;margin-right:15px;border:1px solid rgba(0,0,0,.2)}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input button{display:inline-block;width:calc(36% - 15px);padding:11px}::ng-deep ngx-konverso .bot-mobile{font-family:nexa,Roboto;width:96vw!important;height:100vh;display:table;margin:auto;background-size:contain}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit{position:relative}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-logo-init-wrapper{margin-top:2.5vh}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block;max-width:150px}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:15px!important;text-align:center}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-init-button-wrapper{position:absolute;top:70%}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-answer{width:70vw!important;text-align:center;margin:15.5% auto auto!important;font-size:15px!important}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-input-wrapper{background:0 0!important;bottom:10vh!important}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-input-wrapper input{width:90%!important}@keyframes movetop{from{margin-top:5%}to{margin-top:0}}@-webkit-keyframes movetop{from{margin-top:5%}to{margin-top:0}}.fade{animation:.7s ease-in .2s both fadeinanswer!important;-moz-animation:.7s ease-in .2s both fadeinanswer!important;-webkit-animation:.7s ease-in .2s both fadeinanswer!important;-o-animation:.7s ease-in .2s both fadeinanswer!important;display:block}.fade p{animation:.7s ease-in .2s both fadeinanswer!important;-moz-animation:.7s ease-in .2s both fadeinanswer!important;-webkit-animation:.7s ease-in .2s both fadeinanswer!important;-o-animation:.7s ease-in .2s both fadeinanswer!important}@-webkit-keyframes fadeinbutton{from{opacity:0}to{opacity:1}}@keyframes fadeinbutton{from{opacity:0}to{opacity:1}}@keyframes fadeinanswer{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadeinanswer{from{opacity:0}to{opacity:1}}"]
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
                    'MONDAY': 'Lundi',
                    "TUESDAY": 'Mardi',
                    "WEDNESDAY": 'Mercredi',
                    "THURSDAY": 'Jeudi',
                    "FRIDAY": 'Vendredi',
                    "SATURDAY": 'Samedi',
                    "SUNDAY": 'Dimanche',
                    "OTHER": "Autre",
                    "FREE_FIELD": 'Champ libre',
                    "VALIDATE": 'Valider',
                    "SKIP": 'Passer',
                },
                'en': {
                    'GO': "Let's go",
                    'SEND': 'Send',
                    'SELECT': 'You must select an answer',
                    'MONDAY': 'Monday',
                    "TUESDAY": 'Tuesday',
                    "WEDNESDAY": 'Wednesday',
                    "THURSDAY": 'Thursday',
                    "FRIDAY": 'Friday',
                    "SATURDAY": 'Saturday',
                    "SUNDAY": 'Sunday',
                    "OTHER": 'Other',
                    "FREE_FIELD": 'Free field',
                    "VALIDATE": 'Validate',
                    "SKIP": 'Skip',
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

    var defaultInputType = 'text';
    var defaultInputLimit = 300;
    var DesktopFullScreenComponent = /** @class */ (function () {
        function DesktopFullScreenComponent(translate, service, config) {
            var _this = this;
            this.translate = translate;
            this.service = service;
            this.AssistantMode = false;
            this.firstVisit = false;
            this.IsMobile = false;
            this.afterProcess = false;
            this.readySend = new core.EventEmitter(false);
            this.send = new core.EventEmitter(null);
            this.sendBotCommand = new core.EventEmitter(null);
            this.sendEvent = new core.EventEmitter(null);
            this.currentPlaceHolder = '';
            this.sendBtn = '';
            this.select = '';
            this.changed = false;
            this.botListening = false;
            this.showWrapper = false;
            this.showText = false;
            this.inputType = defaultInputType;
            this.inputLimit = defaultInputLimit;
            this.newMessage = false;
            this.messageCurrent = '';
            this.msgArray = [];
            this.botListeningTimer = 0;
            this.anim_done = false;
            this.reloaded = false;
            this.days = [];
            service.lang.subscribe(function (r) {
                if (service.locale) {
                    _this.sendBtn = translate.translate(service.locale, 'SEND');
                    _this.select = translate.translate(service.locale, 'SELECT');
                    _this.days = [
                        'MONDAY',
                        'TUESDAY',
                        'WEDNESDAY',
                        'THURSDAY',
                        'FRIDAY',
                        'SATURDAY',
                        'SUNDAY',
                        'MONDAY',
                    ];
                }
            });
            this.config = config;
        }
        DesktopFullScreenComponent.prototype.ngOnChanges = function () {
            var _this = this;
            var _a, _b, _c, _d, _e, _f;
            console.log(this.config.AfterProcessScenario.FormButtons);
            console.log(this.service.locale);
            if (this.afterProcess) {
                this.LastUserInput = null;
                this.LastBotAnswer.text = this.config.AfterProcessScenario.BotMessage[this.service.locale];
                if (this.config.AfterProcessScenario.FormElements[0][0].label == 'Jour 1') {
                    var day1 = this.days[new Date().getDay() - 1];
                    var day2 = this.days[new Date().getDay()];
                    var day3 = this.days[new Date().getDay() + 1];
                    this.config.AfterProcessScenario.FormElements[0][0].label = day1;
                    this.config.AfterProcessScenario.FormElements[1][0].label = day2;
                    this.config.AfterProcessScenario.FormElements[2][0].label = day3;
                }
            }
            var t = setInterval(function () {
                if (document.querySelectorAll('.bot-answer')) {
                    var elems = document.querySelectorAll('.bot-answer');
                    if (elems.length > 0) {
                        var index = 0, length_1 = elems.length;
                        var rep = true;
                        for (; index < length_1; index++) {
                            var temp = elems[index];
                            if (temp.style.opacity == '0') {
                                temp.style.opacity = '1';
                            }
                        }
                        _this.anim_done = rep;
                        if (_this.anim_done) {
                            clearInterval(t);
                        }
                    }
                }
            }, 100);
            this.changed = false;
            if (document.getElementById('text') && !((_a = this.LastBotAnswer) === null || _a === void 0 ? void 0 : _a.text.includes('loading-dots'))) {
                document.getElementById('text').innerHTML = '';
            }
            console.log('-------> enter', ((_b = this.LastBotAnswer) === null || _b === void 0 ? void 0 : _b.text.includes('<number>')) && ((_c = this.LastBotAnswer) === null || _c === void 0 ? void 0 : _c.text.includes('</number>')));
            if (((_d = this.LastBotAnswer) === null || _d === void 0 ? void 0 : _d.text.includes('<number>')) && ((_e = this.LastBotAnswer) === null || _e === void 0 ? void 0 : _e.text.includes('</number>'))) {
                this.inputType = 'number';
                this.inputLimit = 999;
                this.currentPlaceHolder = this.NumberPlaceHolder[Math.floor(Math.random() * this.NumberPlaceHolder.length)];
            }
            else {
                this.currentPlaceHolder = this.PlaceHolder[Math.floor(Math.random() * this.PlaceHolder.length)];
                this.inputType = defaultInputType;
                this.inputLimit = defaultInputLimit;
            }
            console.log('TYPE %s MAX %d', this.inputType, this.inputLimit, this.currentPlaceHolder);
            //console.log(this.LastBotAnswer);
            if (!this.anim_done) {
                var t2_1 = setInterval(function () {
                    var _a, _b;
                    if (_this.LastBotAnswer && !((_a = _this.LastBotAnswer) === null || _a === void 0 ? void 0 : _a.text.includes('loading-dots')) && _this.anim_done) {
                        clearInterval(t2_1);
                        var string = (_b = _this.LastBotAnswer) === null || _b === void 0 ? void 0 : _b.text.split('<br/>').join(" ").split('&eacute;').join('é').split('&egrave;').join('è').replace(/<[^>]*>?/gm, '').split('&nbsp;').join('');
                        _this.msgArray = string.split('');
                        if (_this.messageCurrent !== string) {
                            _this.newMessage = true;
                            _this.messageCurrent = string;
                            _this.launchLoop();
                        }
                        //this.looper(array, timer);
                    }
                }, 100);
            }
            else {
                var string = (_f = this.LastBotAnswer) === null || _f === void 0 ? void 0 : _f.text.split('<br/>').join(" ").split('&eacute;').join('é').split('&egrave;').join('è').replace(/<[^>]*>?/gm, '').split('&nbsp;').join('');
                this.msgArray = string.split('');
                if (this.messageCurrent !== string && string !== '') {
                    this.newMessage = true;
                    this.messageCurrent = string;
                    this.launchLoop();
                }
            }
            setTimeout(function () {
                _this.changed = true;
            }, 100);
        };
        DesktopFullScreenComponent.prototype.launchLoop = function () {
            var _this = this;
            this.timer = setInterval(function () {
                if (_this.msgArray.length == 0) {
                    clearInterval(_this.timer);
                }
                if (_this.newMessage) {
                    if (document.getElementById('text')) {
                        document.getElementById('text').innerHTML = '';
                    }
                    _this.newMessage = false;
                    //this.msgArray = this.messageCurrent.split("");
                    clearInterval(_this.timer);
                    _this.launchLoop();
                }
                _this.looper();
            }, 60);
        };
        DesktopFullScreenComponent.prototype.looper = function () {
            if (this.msgArray.length > 0 && !this.reloaded) {
                if (document.getElementById('text')) {
                    document.getElementById('text').innerHTML += this.msgArray.shift();
                }
            } /*else {
            clearTimeout(timer);
          }*/
            /*timer = setTimeout(() => {
              this.looper(array, timer);
            }, 30);*/
        };
        DesktopFullScreenComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.inputType = defaultInputType;
            this.inputLimit = defaultInputLimit;
            if (this.PlaceHolder) {
                this.currentPlaceHolder = this.PlaceHolder[Math.floor(Math.random() * this.PlaceHolder.length)];
                setInterval(function () {
                    _this.currentPlaceHolder = _this.PlaceHolder[Math.floor(Math.random() * _this.PlaceHolder.length)];
                }, 3000);
            }
            setTimeout(function () {
                _this.showWrapper = true;
            }, 2000);
            setTimeout(function () {
                _this.showText = true;
            }, 2500);
            var t = setInterval(function () {
                if (document.querySelectorAll('.bot-answer')) {
                    var elems = document.querySelectorAll('.bot-answer');
                    if (elems.length > 0) {
                        var index = 0, length_2 = elems.length;
                        var rep = true;
                        for (; index < length_2; index++) {
                            var temp = elems[index];
                            if (temp.style.opacity == '0') {
                                rep = false;
                            }
                        }
                        _this.anim_done = rep;
                        if (_this.anim_done) {
                            clearInterval(t);
                        }
                    }
                }
            }, 100);
            //run.run();
            setInterval(function () {
                if (_this.botListeningTimer > 0) {
                    _this.botListeningTimer -= 1;
                    if (_this.botListeningTimer > 0) {
                        document.getElementById('bot').className = 'a-cue-voice speaking';
                        document.getElementById('bot-icon').className = 'a-cue-icon speakingicon';
                    }
                    else {
                        document.getElementById('bot').className = 'a-cue-voice';
                        document.getElementById('bot-icon').className = 'a-cue-icon';
                    }
                    _this.botListening = _this.botListeningTimer > 0;
                }
            }, 500);
        };
        DesktopFullScreenComponent.prototype.userWriting = function (key) {
            if (key.code === 'Enter') {
                this.botListening = false;
                this.botListeningTimer = 0;
            }
            else if (key.code === 'Backspace') {
            }
            else {
                this.botListening = true;
                if (this.botListeningTimer == 0) {
                    this.botListeningTimer += 2;
                }
                else if (this.botListeningTimer < 5) {
                    this.botListeningTimer += 1;
                }
            }
        };
        DesktopFullScreenComponent.prototype.emit = function ($event) {
            this.firstVisit = false;
            this.readySend.emit(true);
        };
        DesktopFullScreenComponent.prototype._send = function () {
            var _a;
            if (((_a = this.LastBotAnswer) === null || _a === void 0 ? void 0 : _a.endOfTopic) && this.LastUserInput) {
                this.LastUserInput.message = '';
            }
            this.botListening = false;
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
            /*const buttons: NodeListOf<HTMLElement> = document.querySelectorAll('.show-btn');
            for (let btn of Array.from(buttons)) {
              btn.classList.add('hidden-btn');
            }*/
            var buttons = document.querySelectorAll('.bot-answer');
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
            setTimeout(function () {
                var e_2, _a;
                var buttons = document.querySelectorAll('.bot-answer');
                try {
                    for (var _b = __values(Array.from(buttons)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var btn = _c.value;
                        btn.classList.remove('hidden-btn');
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }, 1000);
        };
        DesktopFullScreenComponent.ctorParameters = function () { return [
            { type: TranslateService },
            { type: KonversoService },
            { type: undefined, decorators: [{ type: core.Inject, args: ['__NgxKonverso__',] }] }
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
            core.Input()
        ], DesktopFullScreenComponent.prototype, "showInput", void 0);
        __decorate([
            core.Input()
        ], DesktopFullScreenComponent.prototype, "NumberPlaceHolder", void 0);
        __decorate([
            core.Input()
        ], DesktopFullScreenComponent.prototype, "afterProcess", void 0);
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
                template: "<!--<div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"-->\n\n  <!--<canvas class=\"orb-canvas\"></canvas>\n  <div class=\"overlay\">\n    <div class=\"overlay__inner\">\n    </div>\n  </div>-->\n  <div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"\n     xmlns=\"http://www.w3.org/1999/html\">\n  <div class=\"bot-view\">\n    <ng-container *ngIf=\"firstVisit && firstUsageStory\">\n      <bot-first-visit [firstUsageStory]=\"firstUsageStory\" [assets]=\"assets\"\n                       (ready)=\"emit($event)\"></bot-first-visit>\n    </ng-container>\n    <ng-container *ngIf=\"!firstVisit || !firstUsageStory\">\n      <button (click)=\"byPassUserInput('exit', 0)\" id=\"exit-btn\" style=\"display: none;\"></button>\n\n      <div class=\"bot-assistant-wrapper\" *ngIf=\"AssistantMode\">\n        <!--<div *ngIf=\"!botListening\" class=\"bot-logo\" id=\"botlogo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>-->\n        <div [ngStyle]=\"{'height': '40%'}\" class=\"bot-logo bot-listening\">\n          <div [ngStyle]=\"{'transform': 'translateY(-10vh)'}\" class=\"m-carl-notification\">\n            <div class=\"m-carl-notification-cue m-cue\">\n              <div *ngIf=\"botListening\" class=\"a-cue-voice\" id=\"bot\">\n                <div class=\"a-cue-voice-el voice1\"></div>\n                <div class=\"a-cue-voice-el voice2\"></div>\n                <div class=\"a-cue-voice-el voice3\"></div>\n                <div class=\"a-cue-voice-el voice4\"></div>\n                <div class=\"a-cue-voice-el\"></div>\n              </div>\n              <div class=\"a-cue-icon\" id=\"bot-icon\"></div>\n            </div>\n          </div>\n        </div>\n        <div class=\"bot-discussion-wrapper\" style=\"min-height: 60%; max-height: 60%; height: 60%; /*max-height: 120px;*/\">\n          <ng-container *ngIf=\"LastUserInput && !afterProcess\">\n            <div class=\"user-input\" *ngIf=\"LastUserInput && LastUserInput?.message != ''\">\n              <div class=\"data\" [style]=\"{\n                     color : assets?.ColorSet?.Secondary\n                    }\">\n                {{LastUserInput.message}}\n              </div>\n              <span class=\"time\">{{LastUserInput.date}}</span>\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"LastBotAnswer\">\n            <div [class.bot-answer-after-process]=\"afterProcess\" class=\"bot-answer\">\n              <ng-container>\n\n              </ng-container>\n              <ng-container *ngIf=\"LastBotAnswer.text\">\n                <!--<span *ngIf=\"!LastBotAnswer.text.includes('loading-dots')\" id=\"text\"></span><br>\n                <span *ngIf=\"changed && LastBotAnswer.text.includes('loading-dots')\" class=\"fade\" [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span><br>\n                -->\n                <span *ngIf=\"!LastBotAnswer.text.includes('loading-dots') && changed && showText\" class=\"fade\" [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span>\n                <span *ngIf=\"LastBotAnswer.text.includes('loading-dots')\" class=\"fade\" id=\"loading-creation\"></span>\n                <!--<br>-->\n              </ng-container>\n              <ng-container *ngIf=\"LastBotAnswer.medias && LastBotAnswer.medias.length\n                   && LastBotAnswer.medias[0].required_actions\n                   && LastBotAnswer.medias[0].required_actions.length > 0\n                   && !LastBotAnswer.text.includes('loading-dots')\">\n                <ng-container *ngFor=\"let suggest of LastBotAnswer.medias[0].required_actions; let i = index\">\n                  <ng-container *ngIf=\"suggest.format === 'button'\"  >\n                    <button *ngIf=\"suggest.value?.title == 'Terminer' && changed || suggest.value?.title == 'Quit' && changed\" [style]=\"{\n                      borderColor : assets?.ColorSet?.Primary,\n                      color : assets?.ColorSet?.Primary\n             }\"  class=\"bot-button bot-button-left show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                             [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                    <button *ngIf=\"suggest.value?.title == 'Nouvelle Demande' && changed || suggest.value?.title == 'New Request' && changed\" [style]=\"{\n                      borderColor : assets?.ColorSet?.Primary,\n                      color : assets?.ColorSet?.Primary\n             }\"  class=\"bot-button bot-button-right show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                             [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                    <button *ngIf=\"suggest.value?.title && suggest.value?.title != 'Terminer' && suggest.value?.title != 'Quit' && suggest.value?.title != 'Nouvelle Demande' && suggest.value?.title != 'New Request' && changed\"\n                    [style]=\"{\n                     borderColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Primary\n            }\"  class=\"bot-button bot-button-grey show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                            [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                  </ng-container>\n                </ng-container>\n              </ng-container>\n\n              <ng-container *ngIf=\"afterProcess && config.AfterProcessScenario.FormElements.length > 0\">\n                <div class=\"after-process-form\">\n                  <div class=\"after-process-subform\" *ngFor=\"let formElements of config.AfterProcessScenario.FormElements\">\n                    <ng-container *ngFor=\"let form of formElements\">\n                      <ng-container [ngSwitch]=\"form.type\">\n                        <div *ngSwitchCase=\"'checkbox'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\" class=\"bot-checkbox\">\n                          <input [id]=\"form?.id\" [name]=\"form?.id\" [type]='form?.type' value=\"false\">\n                          <label [for]=\"form?.id\" class=\"bot-checkbox-label\">\n                            {{ translate.translate(service.locale, form.label) }}\n                          </label>\n                        </div>\n\n                        <input [class]=\"form?.class\" [id]=\"form?.id\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\" *ngSwitchCase=\"'text'\" \n                        [pattern]=\"form?.pattern\" [placeholder]=\"form?.placeholder\" [type]=\"form?.type\" \n                        [value]=\"form?.value\">\n\n                        <div [class]=\"form?.class\" *ngSwitchCase=\"'div'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\">\n                          {{ form?.content }}\n                        </div>\n\n                        <textarea [class]=\"form?.class\" [id]=\"form?.id\" *ngSwitchCase=\"'textarea'\" [ngStyle]=\"{'display': form?.display ? form.display: 'block'}\"\n                        [placeholder]=\"translate.translate(service.locale, form?.placeholder)\"></textarea>\n                      </ng-container>\n                    </ng-container>\n                  </div>\n                </div>\n              </ng-container>\n            </div>\n          </ng-container>\n          <div class=\"bot-input-wrapper\">\n            <ng-container *ngIf=\"afterProcess && config.AfterProcessScenario.FormButtons.length > 0\">\n              <button [class]=\"btn.class\" *ngFor=\"let btn of config.AfterProcessScenario.FormButtons\" [ngStyle]=\"{'display': btn?.display ? btn.display: 'block'}\">\n                {{ translate.translate(service.locale, btn.label) }}\n              </button>\n            </ng-container>\n\n            <div class=\"bot-input\" id=\"bot-input-div\" *ngIf=\"!disableUserInput && showInput\">\n              <ng-container *ngIf=\"inputType === 'number'\">\n                <input [type]=\"inputType\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" min=\"2\" [max]=\"inputLimit\"\n                       [placeholder]=\"currentPlaceHolder\">\n              </ng-container>\n              <ng-container *ngIf=\"inputType === 'text'\">\n                <input [type]=\"inputType\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" [maxlength]=\"inputLimit\"\n                       [placeholder]=\"currentPlaceHolder\">\n              </ng-container>\n\n              <button class=\"bot-button\" [style]=\"{\n                     color : assets?.ColorSet?.Secondary\n            }\" (click)=\"_send()\" [disabled]=\"!userInput\">{{ sendBtn }}\n              </button>\n            </div>\n            <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\n              <i>{{ select }}</i>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"bot-chat-wrapper\" *ngIf=\"!AssistantMode\">\n        {{AssistantMode}}\n        <div class=\"bot-discussion-wrapper\" #scrollMe [scrollTop]=\"scrollMe.scrollTo(0, 9999999)\">\n          <div class=\"bot-chat\">\n\n            <ng-container *ngFor=\"let entry of displayData\">\n              <ng-container *ngIf=\"entry.date\">\n                <div class=\"user-input\">\n                  <div class=\"data\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n                    }\">\n                    {{entry.message}}\n                  </div>\n                  <span class=\"time\">{{entry.date}}</span>\n                </div>\n              </ng-container>\n              <ng-container *ngIf=\"!entry.date\">\n                <div class=\"bot-answer\">\n                  <ng-container *ngIf=\"entry.text\">\n                    <span *ngIf=\"changed\" class=\"fade\" [innerHTML]=\"entry.text | safeHtml\"></span>\n                    <!--<br>-->\n                  </ng-container>\n                  <ng-container *ngIf=\"entry.medias && entry.medias.length\n                   && entry.medias[0].required_actions\n                   && entry.medias[0].required_actions.length\">\n                    <ng-container *ngFor=\"let suggest of entry.medias[0].required_actions\">\n                      <ng-container *ngIf=\"suggest.format === 'button'\">\n                        <button *ngIf=\"changed\" [style]=\"{\n                     borderColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Primary\n            }\" class=\"bot-button fade\" (click)=\"byPassUserInput(suggest?.value?.onClick)\"\n                                [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \"></button>\n                      </ng-container>\n                    </ng-container>\n                  </ng-container>\n\n                </div>\n              </ng-container>\n            </ng-container>\n          </div>\n        </div>\n        <div class=\"bot-input-wrapper\">\n          <div class=\"bot-input\" *ngIf=\"!disableUserInput && showInput\">\n            <input type=\"text\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" maxlength=\"200\"\n                   [placeholder]=\"currentPlaceHolder\">\n            <button *ngIf=\"changed\" class=\"bot-button\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n            }\" (click)=\"_send()\" [disabled]=\"!userInput\">{{ sendBtn }}\n            </button>\n          </div>\n          <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\n            <i>{{ select }}</i>\n          </div>\n        </div>\n        <div class=\"bot-logo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>\n      </div>\n    </ng-container>\n\n  </div>\n</div>\n",
                styles: ["@-webkit-keyframes gradient{0%,100%{background-position:50% 0}50%{background-position:50% 100%}}@keyframes gradient{0%,100%{background-position:50% 0}50%{background-position:50% 100%}}@keyframes pulsebot{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}@-webkit-keyframes pulsebot{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}.bot-listening{height:100%;background:0 0}.bot-listening:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:0 0}.bot-listening:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:0 0}@media screen and (min--moz-device-pixel-ratio:0){.m-carl-notification{transform:translate(0)!important}}.m-carl-notification{position:relative;top:50%}.m-carl-notification .m-cue{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-icon{position:absolute;width:100px;height:100px;transform:translateX(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9d107d 1px,#9d107d 3%,#580b58 60%);box-shadow:0 0 10px 5px rgb(0 0 0 / 25%);-webkit-animation:3.5s infinite pulsebot;animation:3.5s infinite pulsebot}.m-carl-notification .m-cue .a-cue-voice{transform-origin:center center;height:130px;width:130px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-voice-el{position:absolute;width:130px;height:130px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1{background:#9a147f!important}.voice2{background:#773691!important}.voice3{background:#4e5ca8!important}.voice4{background:#abc1f1!important}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(1){animation:6s infinite reverse both hovering}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(2){-webkit-animation:7s infinite both hovering;animation:7s infinite both hovering}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(3){animation:8s infinite reverse both hovering}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(4){-webkit-animation:9s infinite both hovering;animation:9s infinite both hovering}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(5){animation:10s infinite reverse both hovering}.m-carl-notification .m-cue .speaking{-webkit-animation:2s infinite pulse;animation:2s infinite pulse}.m-carl-notification .a-caption{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification .a-caption.speaking{text-shadow:0 0 0;opacity:.4}@-webkit-keyframes hovering{from{transform:rotate(0) translateX(18px) rotate(0)}to{transform:rotate(360deg) translateX(18px) rotate(-360deg)}}@keyframes hovering{from{transform:rotate(0) translateX(18px) rotate(0)}to{transform:rotate(360deg) translateX(18px) rotate(-360deg)}}@-webkit-keyframes pulse{0%,40%,60%{transform:scale(1)}10%,80%{transform:scale(1.15)}15%,50%,90%{transform:scale(1.25)}100%,20%{transform:scale(1.05)}30%,65%{transform:scale(1.3)}55%{transform:scale(1.1)}70%{transform:scale(1.2)}}@keyframes pulse{0%,40%,60%{transform:scale(1)}10%,80%{transform:scale(1.15)}15%,50%,90%{transform:scale(1.25)}100%,20%{transform:scale(1.05)}30%,65%{transform:scale(1.3)}55%{transform:scale(1.1)}70%{transform:scale(1.2)}}.bot-answer-after-process{z-index:100}"]
            }),
            __param(2, core.Inject('__NgxKonverso__'))
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
                template: "<ng-container>\n  <div class=\"bot-logo-init-wrapper\">\n    <!--<img [src]=\"assets.FullSizeLogo\">-->\n    <div class=\"m-carl-notification\">\n      <div class=\"m-carl-notification-cue m-cue\">\n        <div class=\"a-cue-icon\" id=\"bot-icon\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"bot-init-text\" [innerHTML]=\"current | safeHtml\"></div>\n  <div class=\"bot-init-bullet-step\">\n      <span *ngFor=\"let elem of firstUsageStory ; let pos = index\" class=\"bot-init-dot\"\n            [style]=\"pos === position ? {\n              backgroundColor : assets?.ColorSet?.Primary,\n              borderColor :assets?.ColorSet?.Primary\n              }:{\n                backgroundColor :assets?.ColorSet?.Secondary,\n                borderColor :assets?.ColorSet?.Primary\n                }\" (click)=\"goTo(pos)\">\n      </span>\n  </div>\n  <div class=\"bot-init-button-wrapper\">\n    <button mat-button class=\"bot-button button-lg\" [style]=\"{\n      backgroundColor : '#171F26',\n      color : assets?.ColorSet?.Secondary\n    }\" (click)=\"start()\">{{ go }}</button>\n  </div>\n\n</ng-container>\n",
                styles: ["@keyframes pulsebot{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}@-webkit-keyframes pulsebot{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}.bot-listening{height:100%;background:0 0}.bot-listening:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:0 0}.bot-listening:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:0 0}.m-carl-notification{position:relative;top:50%}.m-carl-notification .m-cue{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-icon{position:absolute;width:100px;height:100px;transform:translateX(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9d107d 1px,#9d107d 3%,#580b58 60%);box-shadow:0 0 10px 5px rgba(0,0,0,.25);-webkit-animation:3.5s infinite pulsebot;animation:3.5s infinite pulsebot}.m-carl-notification .m-cue .a-cue-voice{transform-origin:center center;height:190px;width:190px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-voice-el{position:absolute;width:150px;height:150px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1{background:#9a147f!important}.voice2{background:#773691!important}.voice3{background:#4e5ca8!important}.voice4{background:#abc1f1!important}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(1){animation:6s infinite reverse both hovering}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(2){-webkit-animation:7s infinite both hovering;animation:7s infinite both hovering}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(3){animation:8s infinite reverse both hovering}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(4){-webkit-animation:9s infinite both hovering;animation:9s infinite both hovering}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(5){animation:10s infinite reverse both hovering}.m-carl-notification .m-cue .speaking{-webkit-animation:2s infinite pulse;animation:2s infinite pulse}.m-carl-notification .a-caption{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification .a-caption.speaking{text-shadow:0 0 0;opacity:.4}@-webkit-keyframes hovering{from{transform:rotate(0) translateX(18px) rotate(0)}to{transform:rotate(360deg) translateX(18px) rotate(-360deg)}}@keyframes hovering{from{transform:rotate(0) translateX(18px) rotate(0)}to{transform:rotate(360deg) translateX(18px) rotate(-360deg)}}@-webkit-keyframes pulse{0%,40%,60%{transform:scale(1)}10%,80%{transform:scale(1.15)}15%,50%,90%{transform:scale(1.25)}100%,20%{transform:scale(1.05)}30%,65%{transform:scale(1.3)}55%{transform:scale(1.1)}70%{transform:scale(1.2)}}@keyframes pulse{0%,40%,60%{transform:scale(1)}10%,80%{transform:scale(1.15)}15%,50%,90%{transform:scale(1.25)}100%,20%{transform:scale(1.05)}30%,65%{transform:scale(1.3)}55%{transform:scale(1.1)}70%{transform:scale(1.2)}}"]
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
