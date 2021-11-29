(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs'), require('mustache'), require('@angular/common'), require('@angular/platform-browser'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('konverso', ['exports', '@angular/core', '@angular/common/http', 'rxjs', 'mustache', '@angular/common', '@angular/platform-browser', '@angular/forms'], factory) :
    (global = global || self, factory(global.konverso = {}, global.ng.core, global.ng.common.http, global.rxjs, global.mustache, global.ng.common, global.ng.platformBrowser, global.ng.forms));
}(this, (function (exports, core, http, rxjs, mustache, common, platformBrowser, forms) { 'use strict';

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
        KonversoService.ɵfac = function KonversoService_Factory(t) { return new (t || KonversoService)(core.ɵɵinject('__NgxKonverso__'), core.ɵɵinject(http.HttpClient)); };
        KonversoService.ɵprov = core.ɵɵdefineInjectable({ token: KonversoService, factory: KonversoService.ɵfac });
        return KonversoService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(KonversoService, [{
            type: core.Injectable
        }], function () { return [{ type: undefined, decorators: [{
                    type: core.Inject,
                    args: ['__NgxKonverso__']
                }] }, { type: http.HttpClient }]; }, null); })();

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
        TranslateService.ɵfac = function TranslateService_Factory(t) { return new (t || TranslateService)(); };
        TranslateService.ɵprov = core.ɵɵdefineInjectable({ token: TranslateService, factory: TranslateService.ɵfac, providedIn: 'root' });
        return TranslateService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(TranslateService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var SafeHtmlPipe = /** @class */ (function () {
        function SafeHtmlPipe(sanitizer) {
            this.sanitizer = sanitizer;
        }
        SafeHtmlPipe.prototype.transform = function (value) {
            return this.sanitizer.bypassSecurityTrustHtml(value);
        };
        SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(core.ɵɵdirectiveInject(platformBrowser.DomSanitizer)); };
        SafeHtmlPipe.ɵpipe = core.ɵɵdefinePipe({ name: "safeHtml", type: SafeHtmlPipe, pure: true });
        return SafeHtmlPipe;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(SafeHtmlPipe, [{
            type: core.Pipe,
            args: [{
                    name: 'safeHtml'
                }]
        }], function () { return [{ type: platformBrowser.DomSanitizer }]; }, null); })();

    var _c0 = function (a0, a1) { return { backgroundColor: a0, borderColor: a1 }; };
    function FirstVisitComponent_span_8_Template(rf, ctx) { if (rf & 1) {
        var _r153 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "span", 9);
        core.ɵɵlistener("click", function FirstVisitComponent_span_8_Template_span_click_0_listener() { core.ɵɵrestoreView(_r153); var pos_r151 = ctx.index; var ctx_r152 = core.ɵɵnextContext(); return ctx_r152.goTo(pos_r151); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var pos_r151 = ctx.index;
        var ctx_r149 = core.ɵɵnextContext();
        core.ɵɵstyleMap(pos_r151 === ctx_r149.position ? core.ɵɵpureFunction2(2, _c0, ctx_r149.assets == null ? null : ctx_r149.assets.ColorSet == null ? null : ctx_r149.assets.ColorSet.Primary, ctx_r149.assets == null ? null : ctx_r149.assets.ColorSet == null ? null : ctx_r149.assets.ColorSet.Primary) : core.ɵɵpureFunction2(5, _c0, ctx_r149.assets == null ? null : ctx_r149.assets.ColorSet == null ? null : ctx_r149.assets.ColorSet.Secondary, ctx_r149.assets == null ? null : ctx_r149.assets.ColorSet == null ? null : ctx_r149.assets.ColorSet.Primary));
    } }
    var _c1 = function (a1) { return { backgroundColor: "#171F26", color: a1 }; };
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
        FirstVisitComponent.ɵfac = function FirstVisitComponent_Factory(t) { return new (t || FirstVisitComponent)(core.ɵɵdirectiveInject(TranslateService), core.ɵɵdirectiveInject(KonversoService)); };
        FirstVisitComponent.ɵcmp = core.ɵɵdefineComponent({ type: FirstVisitComponent, selectors: [["bot-first-visit"]], inputs: { firstUsageStory: "firstUsageStory", assets: "assets" }, outputs: { ready: "ready" }, decls: 12, vars: 9, consts: [[1, "bot-logo-init-wrapper"], [1, "m-carl-notification"], [1, "m-carl-notification-cue", "m-cue"], ["id", "bot-icon", 1, "a-cue-icon"], [1, "bot-init-text", 3, "innerHTML"], [1, "bot-init-bullet-step"], ["class", "bot-init-dot", 3, "style", "click", 4, "ngFor", "ngForOf"], [1, "bot-init-button-wrapper"], ["mat-button", "", 1, "bot-button", "button-lg", 3, "click"], [1, "bot-init-dot", 3, "click"]], template: function FirstVisitComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementContainerStart(0);
                core.ɵɵelementStart(1, "div", 0);
                core.ɵɵelementStart(2, "div", 1);
                core.ɵɵelementStart(3, "div", 2);
                core.ɵɵelement(4, "div", 3);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelement(5, "div", 4);
                core.ɵɵpipe(6, "safeHtml");
                core.ɵɵelementStart(7, "div", 5);
                core.ɵɵtemplate(8, FirstVisitComponent_span_8_Template, 1, 8, "span", 6);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(9, "div", 7);
                core.ɵɵelementStart(10, "button", 8);
                core.ɵɵlistener("click", function FirstVisitComponent_Template_button_click_10_listener() { return ctx.start(); });
                core.ɵɵtext(11);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementContainerEnd();
            } if (rf & 2) {
                core.ɵɵadvance(5);
                core.ɵɵproperty("innerHTML", core.ɵɵpipeBind1(6, 5, ctx.current), core.ɵɵsanitizeHtml);
                core.ɵɵadvance(3);
                core.ɵɵproperty("ngForOf", ctx.firstUsageStory);
                core.ɵɵadvance(2);
                core.ɵɵstyleMap(core.ɵɵpureFunction1(7, _c1, ctx.assets == null ? null : ctx.assets.ColorSet == null ? null : ctx.assets.ColorSet.Secondary));
                core.ɵɵadvance(1);
                core.ɵɵtextInterpolate(ctx.go);
            } }, directives: [common.NgForOf], pipes: [SafeHtmlPipe], styles: ["@keyframes pulsebot{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}@-webkit-keyframes pulsebot{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}.bot-listening[_ngcontent-%COMP%]{height:100%;background:0 0}.bot-listening[_ngcontent-%COMP%]:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:0 0}.bot-listening[_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:0 0}.m-carl-notification[_ngcontent-%COMP%]{position:relative;top:50%}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-icon[_ngcontent-%COMP%]{position:absolute;width:100px;height:100px;transform:translateX(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9d107d 1px,#9d107d 3%,#580b58 60%);box-shadow:0 0 10px 5px rgba(0,0,0,.25);-webkit-animation:3.5s infinite pulsebot;animation:3.5s infinite pulsebot}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice[_ngcontent-%COMP%]{transform-origin:center center;height:190px;width:190px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]{position:absolute;width:150px;height:150px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1[_ngcontent-%COMP%]{background:#9a147f!important}.voice2[_ngcontent-%COMP%]{background:#773691!important}.voice3[_ngcontent-%COMP%]{background:#4e5ca8!important}.voice4[_ngcontent-%COMP%]{background:#abc1f1!important}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(1){animation:6s infinite reverse both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(2){-webkit-animation:7s infinite both hovering;animation:7s infinite both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(3){animation:8s infinite reverse both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(4){-webkit-animation:9s infinite both hovering;animation:9s infinite both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(5){animation:10s infinite reverse both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .speaking[_ngcontent-%COMP%]{-webkit-animation:2s infinite pulse;animation:2s infinite pulse}.m-carl-notification[_ngcontent-%COMP%]   .a-caption[_ngcontent-%COMP%]{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification[_ngcontent-%COMP%]   .a-caption.speaking[_ngcontent-%COMP%]{text-shadow:0 0 0;opacity:.4}@-webkit-keyframes hovering{from{transform:rotate(0) translateX(18px) rotate(0)}to{transform:rotate(360deg) translateX(18px) rotate(-360deg)}}@keyframes hovering{from{transform:rotate(0) translateX(18px) rotate(0)}to{transform:rotate(360deg) translateX(18px) rotate(-360deg)}}@-webkit-keyframes pulse{0%,40%,60%{transform:scale(1)}10%,80%{transform:scale(1.15)}15%,50%,90%{transform:scale(1.25)}100%,20%{transform:scale(1.05)}30%,65%{transform:scale(1.3)}55%{transform:scale(1.1)}70%{transform:scale(1.2)}}@keyframes pulse{0%,40%,60%{transform:scale(1)}10%,80%{transform:scale(1.15)}15%,50%,90%{transform:scale(1.25)}100%,20%{transform:scale(1.05)}30%,65%{transform:scale(1.3)}55%{transform:scale(1.1)}70%{transform:scale(1.2)}}"] });
        return FirstVisitComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(FirstVisitComponent, [{
            type: core.Component,
            args: [{
                    selector: 'bot-first-visit',
                    templateUrl: './first-visit.component.html',
                    styleUrls: ['./first-visit.component.scss']
                }]
        }], function () { return [{ type: TranslateService }, { type: KonversoService }]; }, { firstUsageStory: [{
                type: core.Input
            }], assets: [{
                type: core.Input
            }], ready: [{
                type: core.Output
            }] }); })();

    function DesktopFullScreenComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        var _r80 = core.ɵɵgetCurrentView();
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "bot-first-visit", 3);
        core.ɵɵlistener("ready", function DesktopFullScreenComponent_ng_container_2_Template_bot_first_visit_ready_1_listener($event) { core.ɵɵrestoreView(_r80); var ctx_r79 = core.ɵɵnextContext(); return ctx_r79.emit($event); });
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r77 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("firstUsageStory", ctx_r77.firstUsageStory)("assets", ctx_r77.assets);
    } }
    function DesktopFullScreenComponent_ng_container_3_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 17);
        core.ɵɵelement(1, "div", 18);
        core.ɵɵelement(2, "div", 19);
        core.ɵɵelement(3, "div", 20);
        core.ɵɵelement(4, "div", 21);
        core.ɵɵelement(5, "div", 22);
        core.ɵɵelementEnd();
    } }
    var _c0$1 = function (a0) { return { color: a0 }; };
    function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 24);
        core.ɵɵelementStart(1, "div", 25);
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(3, "span", 26);
        core.ɵɵtext(4);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r88 = core.ɵɵnextContext(4);
        core.ɵɵadvance(1);
        core.ɵɵstyleMap(core.ɵɵpureFunction1(4, _c0$1, ctx_r88.assets == null ? null : ctx_r88.assets.ColorSet == null ? null : ctx_r88.assets.ColorSet.Secondary));
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r88.LastUserInput.message, " ");
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r88.LastUserInput.date);
    } }
    function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_div_1_Template, 5, 6, "div", 23);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r84 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r84.LastUserInput && (ctx_r84.LastUserInput == null ? null : ctx_r84.LastUserInput.message) != "");
    } }
    function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "span", 30);
        core.ɵɵpipe(1, "safeHtml");
    } if (rf & 2) {
        var ctx_r91 = core.ɵɵnextContext(5);
        core.ɵɵproperty("innerHTML", core.ɵɵpipeBind1(1, 1, ctx_r91.LastBotAnswer.text), core.ɵɵsanitizeHtml);
    } }
    function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_span_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "span", 31);
    } }
    function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_span_1_Template, 2, 3, "span", 28);
        core.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_span_2_Template, 1, 0, "span", 29);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r89 = core.ɵɵnextContext(4);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r89.LastBotAnswer.text.includes("loading-dots") && ctx_r89.changed && ctx_r89.showText);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r89.LastBotAnswer.text.includes("loading-dots"));
    } }
    var _c1$1 = function (a0, a1) { return { borderColor: a0, color: a1 }; };
    function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_button_1_Template(rf, ctx) { if (rf & 1) {
        var _r102 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 36);
        core.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_button_1_Template_button_click_0_listener() { core.ɵɵrestoreView(_r102); var ctx_r101 = core.ɵɵnextContext(2); var suggest_r94 = ctx_r101.$implicit; var i_r95 = ctx_r101.index; var ctx_r100 = core.ɵɵnextContext(5); return ctx_r100.byPassUserInput(suggest_r94 == null ? null : suggest_r94.value == null ? null : suggest_r94.value.onClick, i_r95); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var suggest_r94 = core.ɵɵnextContext(2).$implicit;
        var ctx_r97 = core.ɵɵnextContext(5);
        core.ɵɵstyleMap(core.ɵɵpureFunction2(3, _c1$1, ctx_r97.assets == null ? null : ctx_r97.assets.ColorSet == null ? null : ctx_r97.assets.ColorSet.Primary, ctx_r97.assets == null ? null : ctx_r97.assets.ColorSet == null ? null : ctx_r97.assets.ColorSet.Primary));
        core.ɵɵproperty("innerHTML", suggest_r94.label || (suggest_r94.value == null ? null : suggest_r94.value.displayedMessage) || (suggest_r94.value == null ? null : suggest_r94.value.title), core.ɵɵsanitizeHtml);
    } }
    function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_button_2_Template(rf, ctx) { if (rf & 1) {
        var _r106 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 37);
        core.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_button_2_Template_button_click_0_listener() { core.ɵɵrestoreView(_r106); var ctx_r105 = core.ɵɵnextContext(2); var suggest_r94 = ctx_r105.$implicit; var i_r95 = ctx_r105.index; var ctx_r104 = core.ɵɵnextContext(5); return ctx_r104.byPassUserInput(suggest_r94 == null ? null : suggest_r94.value == null ? null : suggest_r94.value.onClick, i_r95); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var suggest_r94 = core.ɵɵnextContext(2).$implicit;
        var ctx_r98 = core.ɵɵnextContext(5);
        core.ɵɵstyleMap(core.ɵɵpureFunction2(3, _c1$1, ctx_r98.assets == null ? null : ctx_r98.assets.ColorSet == null ? null : ctx_r98.assets.ColorSet.Primary, ctx_r98.assets == null ? null : ctx_r98.assets.ColorSet == null ? null : ctx_r98.assets.ColorSet.Primary));
        core.ɵɵproperty("innerHTML", suggest_r94.label || (suggest_r94.value == null ? null : suggest_r94.value.displayedMessage) || (suggest_r94.value == null ? null : suggest_r94.value.title), core.ɵɵsanitizeHtml);
    } }
    function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_button_3_Template(rf, ctx) { if (rf & 1) {
        var _r110 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 38);
        core.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_button_3_Template_button_click_0_listener() { core.ɵɵrestoreView(_r110); var ctx_r109 = core.ɵɵnextContext(2); var suggest_r94 = ctx_r109.$implicit; var i_r95 = ctx_r109.index; var ctx_r108 = core.ɵɵnextContext(5); return ctx_r108.byPassUserInput(suggest_r94 == null ? null : suggest_r94.value == null ? null : suggest_r94.value.onClick, i_r95); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var suggest_r94 = core.ɵɵnextContext(2).$implicit;
        var ctx_r99 = core.ɵɵnextContext(5);
        core.ɵɵstyleMap(core.ɵɵpureFunction2(3, _c1$1, ctx_r99.assets == null ? null : ctx_r99.assets.ColorSet == null ? null : ctx_r99.assets.ColorSet.Primary, ctx_r99.assets == null ? null : ctx_r99.assets.ColorSet == null ? null : ctx_r99.assets.ColorSet.Primary));
        core.ɵɵproperty("innerHTML", suggest_r94.label || (suggest_r94.value == null ? null : suggest_r94.value.displayedMessage) || (suggest_r94.value == null ? null : suggest_r94.value.title), core.ɵɵsanitizeHtml);
    } }
    function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_button_1_Template, 1, 6, "button", 33);
        core.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_button_2_Template, 1, 6, "button", 34);
        core.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_button_3_Template, 1, 6, "button", 35);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var suggest_r94 = core.ɵɵnextContext().$implicit;
        var ctx_r96 = core.ɵɵnextContext(5);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (suggest_r94.value == null ? null : suggest_r94.value.title) == "Terminer" && ctx_r96.changed || (suggest_r94.value == null ? null : suggest_r94.value.title) == "Quit" && ctx_r96.changed);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (suggest_r94.value == null ? null : suggest_r94.value.title) == "Nouvelle Demande" && ctx_r96.changed || (suggest_r94.value == null ? null : suggest_r94.value.title) == "New Request" && ctx_r96.changed);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", (suggest_r94.value == null ? null : suggest_r94.value.title) && (suggest_r94.value == null ? null : suggest_r94.value.title) != "Terminer" && (suggest_r94.value == null ? null : suggest_r94.value.title) != "Quit" && (suggest_r94.value == null ? null : suggest_r94.value.title) != "Nouvelle Demande" && (suggest_r94.value == null ? null : suggest_r94.value.title) != "New Request" && ctx_r96.changed);
    } }
    function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_Template, 4, 3, "ng-container", 2);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var suggest_r94 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", suggest_r94.format === "button");
    } }
    function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_Template, 2, 1, "ng-container", 32);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r90 = core.ɵɵnextContext(4);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", ctx_r90.LastBotAnswer.medias[0].required_actions);
    } }
    function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "div", 27);
        core.ɵɵelementContainer(2);
        core.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_Template, 3, 2, "ng-container", 2);
        core.ɵɵtemplate(4, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_Template, 2, 1, "ng-container", 2);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r85 = core.ɵɵnextContext(3);
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngIf", ctx_r85.LastBotAnswer.text);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r85.LastBotAnswer.medias && ctx_r85.LastBotAnswer.medias.length && ctx_r85.LastBotAnswer.medias[0].required_actions && ctx_r85.LastBotAnswer.medias[0].required_actions.length > 0 && !ctx_r85.LastBotAnswer.text.includes("loading-dots"));
    } }
    var _c2 = function (a0, a1) { return { backgroundColor: a0, color: a1 }; };
    function DesktopFullScreenComponent_ng_container_3_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
        var _r114 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 39);
        core.ɵɵelementStart(1, "input", 40);
        core.ɵɵlistener("ngModelChange", function DesktopFullScreenComponent_ng_container_3_div_2_div_10_Template_input_ngModelChange_1_listener($event) { core.ɵɵrestoreView(_r114); var ctx_r113 = core.ɵɵnextContext(3); return ctx_r113.userInput = $event; })("keyup.enter", function DesktopFullScreenComponent_ng_container_3_div_2_div_10_Template_input_keyup_enter_1_listener() { core.ɵɵrestoreView(_r114); var ctx_r115 = core.ɵɵnextContext(3); return ctx_r115.userInput && ctx_r115._send(); })("keyup", function DesktopFullScreenComponent_ng_container_3_div_2_div_10_Template_input_keyup_1_listener($event) { core.ɵɵrestoreView(_r114); var ctx_r116 = core.ɵɵnextContext(3); return ctx_r116.userWriting($event); });
        core.ɵɵelementEnd();
        core.ɵɵelementStart(2, "button", 41);
        core.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_div_10_Template_button_click_2_listener() { core.ɵɵrestoreView(_r114); var ctx_r117 = core.ɵɵnextContext(3); return ctx_r117._send(); });
        core.ɵɵtext(3);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r86 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngModel", ctx_r86.userInput)("placeholder", ctx_r86.currentPlaceHolder);
        core.ɵɵadvance(1);
        core.ɵɵstyleMap(core.ɵɵpureFunction2(6, _c2, ctx_r86.assets == null ? null : ctx_r86.assets.ColorSet == null ? null : ctx_r86.assets.ColorSet.Primary, ctx_r86.assets == null ? null : ctx_r86.assets.ColorSet == null ? null : ctx_r86.assets.ColorSet.Secondary));
        core.ɵɵproperty("disabled", !ctx_r86.userInput);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1("", ctx_r86.sendBtn, " ");
    } }
    function DesktopFullScreenComponent_ng_container_3_div_2_div_11_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 42);
        core.ɵɵelementStart(1, "i");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r87 = core.ɵɵnextContext(3);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r87.select);
    } }
    var _c3 = function () { return { "height": "40%" }; };
    var _c4 = function () { return { "transform": "translateY(-10vh)" }; };
    function DesktopFullScreenComponent_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 7);
        core.ɵɵelementStart(1, "div", 8);
        core.ɵɵelementStart(2, "div", 9);
        core.ɵɵelementStart(3, "div", 10);
        core.ɵɵtemplate(4, DesktopFullScreenComponent_ng_container_3_div_2_div_4_Template, 6, 0, "div", 11);
        core.ɵɵelement(5, "div", 12);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(6, "div", 13);
        core.ɵɵtemplate(7, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_Template, 2, 1, "ng-container", 2);
        core.ɵɵtemplate(8, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_Template, 5, 2, "ng-container", 2);
        core.ɵɵelementStart(9, "div", 14);
        core.ɵɵtemplate(10, DesktopFullScreenComponent_ng_container_3_div_2_div_10_Template, 4, 9, "div", 15);
        core.ɵɵtemplate(11, DesktopFullScreenComponent_ng_container_3_div_2_div_11_Template, 3, 1, "div", 16);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r81 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngStyle", core.ɵɵpureFunction0(7, _c3));
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngStyle", core.ɵɵpureFunction0(8, _c4));
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r81.botListening);
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngIf", ctx_r81.LastUserInput);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r81.LastBotAnswer);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", !ctx_r81.disableUserInput);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r81.disableUserInput);
    } }
    function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "div", 24);
        core.ɵɵelementStart(2, "div", 25);
        core.ɵɵtext(3);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "span", 26);
        core.ɵɵtext(5);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var entry_r122 = core.ɵɵnextContext().$implicit;
        var ctx_r123 = core.ɵɵnextContext(3);
        core.ɵɵadvance(2);
        core.ɵɵstyleMap(core.ɵɵpureFunction2(4, _c2, ctx_r123.assets == null ? null : ctx_r123.assets.ColorSet == null ? null : ctx_r123.assets.ColorSet.Primary, ctx_r123.assets == null ? null : ctx_r123.assets.ColorSet == null ? null : ctx_r123.assets.ColorSet.Secondary));
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", entry_r122.message, " ");
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(entry_r122.date);
    } }
    function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelement(0, "span", 30);
        core.ɵɵpipe(1, "safeHtml");
    } if (rf & 2) {
        var entry_r122 = core.ɵɵnextContext(3).$implicit;
        core.ɵɵproperty("innerHTML", core.ɵɵpipeBind1(1, 1, entry_r122.text), core.ɵɵsanitizeHtml);
    } }
    function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_span_1_Template, 2, 3, "span", 28);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r126 = core.ɵɵnextContext(5);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r126.changed);
    } }
    function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_button_1_Template(rf, ctx) { if (rf & 1) {
        var _r136 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 51);
        core.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_button_1_Template_button_click_0_listener() { core.ɵɵrestoreView(_r136); var suggest_r131 = core.ɵɵnextContext(2).$implicit; var ctx_r134 = core.ɵɵnextContext(6); return ctx_r134.byPassUserInput(suggest_r131 == null ? null : suggest_r131.value == null ? null : suggest_r131.value.onClick); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var suggest_r131 = core.ɵɵnextContext(2).$implicit;
        var ctx_r133 = core.ɵɵnextContext(6);
        core.ɵɵstyleMap(core.ɵɵpureFunction2(3, _c1$1, ctx_r133.assets == null ? null : ctx_r133.assets.ColorSet == null ? null : ctx_r133.assets.ColorSet.Primary, ctx_r133.assets == null ? null : ctx_r133.assets.ColorSet == null ? null : ctx_r133.assets.ColorSet.Primary));
        core.ɵɵproperty("innerHTML", suggest_r131.label || (suggest_r131.value == null ? null : suggest_r131.value.displayedMessage) || (suggest_r131.value == null ? null : suggest_r131.value.title), core.ɵɵsanitizeHtml);
    } }
    function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_button_1_Template, 1, 6, "button", 50);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r132 = core.ɵɵnextContext(7);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r132.changed);
    } }
    function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 2);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var suggest_r131 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", suggest_r131.format === "button");
    } }
    function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 32);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var entry_r122 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", entry_r122.medias[0].required_actions);
    } }
    function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "div", 27);
        core.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 2);
        core.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 2);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var entry_r122 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", entry_r122.text);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", entry_r122.medias && entry_r122.medias.length && entry_r122.medias[0].required_actions && entry_r122.medias[0].required_actions.length);
    } }
    function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_1_Template, 6, 7, "ng-container", 2);
        core.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_Template, 4, 2, "ng-container", 2);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var entry_r122 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", entry_r122.date);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !entry_r122.date);
    } }
    function DesktopFullScreenComponent_ng_container_3_div_3_div_7_button_2_Template(rf, ctx) { if (rf & 1) {
        var _r142 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "button", 41);
        core.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_button_2_Template_button_click_0_listener() { core.ɵɵrestoreView(_r142); var ctx_r141 = core.ɵɵnextContext(4); return ctx_r141._send(); });
        core.ɵɵtext(1);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r140 = core.ɵɵnextContext(4);
        core.ɵɵstyleMap(core.ɵɵpureFunction2(4, _c2, ctx_r140.assets == null ? null : ctx_r140.assets.ColorSet == null ? null : ctx_r140.assets.ColorSet.Primary, ctx_r140.assets == null ? null : ctx_r140.assets.ColorSet == null ? null : ctx_r140.assets.ColorSet.Secondary));
        core.ɵɵproperty("disabled", !ctx_r140.userInput);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1("", ctx_r140.sendBtn, " ");
    } }
    function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template(rf, ctx) { if (rf & 1) {
        var _r144 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "div", 52);
        core.ɵɵelementStart(1, "input", 40);
        core.ɵɵlistener("ngModelChange", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_ngModelChange_1_listener($event) { core.ɵɵrestoreView(_r144); var ctx_r143 = core.ɵɵnextContext(3); return ctx_r143.userInput = $event; })("keyup.enter", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_keyup_enter_1_listener() { core.ɵɵrestoreView(_r144); var ctx_r145 = core.ɵɵnextContext(3); return ctx_r145.userInput && ctx_r145._send(); })("keyup", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_keyup_1_listener($event) { core.ɵɵrestoreView(_r144); var ctx_r146 = core.ɵɵnextContext(3); return ctx_r146.userWriting($event); });
        core.ɵɵelementEnd();
        core.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_3_div_7_button_2_Template, 2, 7, "button", 53);
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r120 = core.ɵɵnextContext(3);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngModel", ctx_r120.userInput)("placeholder", ctx_r120.currentPlaceHolder);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r120.changed);
    } }
    function DesktopFullScreenComponent_ng_container_3_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 42);
        core.ɵɵelementStart(1, "i");
        core.ɵɵtext(2);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r121 = core.ɵɵnextContext(3);
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(ctx_r121.select);
    } }
    function DesktopFullScreenComponent_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementStart(0, "div", 43);
        core.ɵɵtext(1);
        core.ɵɵelementStart(2, "div", 44, 45);
        core.ɵɵelementStart(4, "div", 46);
        core.ɵɵtemplate(5, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_Template, 3, 2, "ng-container", 32);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(6, "div", 14);
        core.ɵɵtemplate(7, DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template, 3, 3, "div", 47);
        core.ɵɵtemplate(8, DesktopFullScreenComponent_ng_container_3_div_3_div_8_Template, 3, 1, "div", 16);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(9, "div", 48);
        core.ɵɵelement(10, "img", 49);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var _r118 = core.ɵɵreference(3);
        var ctx_r82 = core.ɵɵnextContext(2);
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", ctx_r82.AssistantMode, " ");
        core.ɵɵadvance(1);
        core.ɵɵproperty("scrollTop", _r118.scrollTo(0, 9999999));
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngForOf", ctx_r82.displayData);
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", !ctx_r82.disableUserInput);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", ctx_r82.disableUserInput);
        core.ɵɵadvance(2);
        core.ɵɵproperty("src", ctx_r82.assets.FullSizeLogo, core.ɵɵsanitizeUrl);
    } }
    function DesktopFullScreenComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        var _r148 = core.ɵɵgetCurrentView();
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "button", 4);
        core.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_Template_button_click_1_listener() { core.ɵɵrestoreView(_r148); var ctx_r147 = core.ɵɵnextContext(); return ctx_r147.byPassUserInput("exit", 0); });
        core.ɵɵelementEnd();
        core.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_Template, 12, 9, "div", 5);
        core.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_3_Template, 11, 6, "div", 6);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r78 = core.ɵɵnextContext();
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", ctx_r78.AssistantMode);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !ctx_r78.AssistantMode);
    } }
    var _c5 = function () { return { "background-color": "#100652 0% 0% no-repeat padding-box;" }; };
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
            this.changed = false;
            this.newMessage = false;
            this.messageCurrent = '';
            this.msgArray = [];
            this.botListening = false;
            this.botListeningTimer = 0;
            this.anim_done = false;
            this.reloaded = false;
            this.showWrapper = false;
            this.showText = false;
            service.lang.subscribe(function (r) {
                if (service.locale) {
                    _this.sendBtn = translate.translate(service.locale, 'SEND');
                    _this.select = translate.translate(service.locale, 'SELECT');
                }
            });
        }
        DesktopFullScreenComponent.prototype.ngOnChanges = function () {
            var _this = this;
            var _a, _b;
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
            if (document.getElementById('text') && !((_a = this.LastBotAnswer) === null || _a === void 0 ? void 0 : _a.text.includes("loading-dots"))) {
                document.getElementById('text').innerHTML = '';
            }
            //console.log(this.LastBotAnswer);
            if (!this.anim_done) {
                var t2_1 = setInterval(function () {
                    var _a, _b;
                    if (_this.LastBotAnswer && !((_a = _this.LastBotAnswer) === null || _a === void 0 ? void 0 : _a.text.includes("loading-dots")) && _this.anim_done) {
                        clearInterval(t2_1);
                        var string = (_b = _this.LastBotAnswer) === null || _b === void 0 ? void 0 : _b.text.split('<br/>').join(" ").split('&eacute;').join('é').split('&egrave;').join('è').replace(/<[^>]*>?/gm, '').split('&nbsp;').join('');
                        _this.msgArray = string.split("");
                        if (_this.messageCurrent != string) {
                            _this.newMessage = true;
                            _this.messageCurrent = string;
                            _this.launchLoop();
                        }
                        //this.looper(array, timer);
                    }
                }, 100);
            }
            else {
                var string = (_b = this.LastBotAnswer) === null || _b === void 0 ? void 0 : _b.text.split('<br/>').join(" ").split('&eacute;').join('é').split('&egrave;').join('è').replace(/<[^>]*>?/gm, '').split('&nbsp;').join('');
                this.msgArray = string.split("");
                if (this.messageCurrent != string && string != '') {
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
            if (key.code == 'Enter') {
                this.botListening = false;
                this.botListeningTimer = 0;
            }
            else if (key.code == 'Backspace') {
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
        DesktopFullScreenComponent.ɵfac = function DesktopFullScreenComponent_Factory(t) { return new (t || DesktopFullScreenComponent)(core.ɵɵdirectiveInject(TranslateService), core.ɵɵdirectiveInject(KonversoService)); };
        DesktopFullScreenComponent.ɵcmp = core.ɵɵdefineComponent({ type: DesktopFullScreenComponent, selectors: [["bot-full-screen"]], inputs: { AssistantMode: "AssistantMode", assets: "assets", firstVisit: "firstVisit", firstUsageStory: "firstUsageStory", displayData: "displayData", disableUserInput: "disableUserInput", LastUserInput: "LastUserInput", LastBotAnswer: "LastBotAnswer", PlaceHolder: "PlaceHolder", IsMobile: "IsMobile" }, outputs: { readySend: "readySend", send: "send", sendBotCommand: "sendBotCommand", sendEvent: "sendEvent" }, features: [core.ɵɵNgOnChangesFeature], decls: 4, vars: 7, consts: [["xmlns", "http://www.w3.org/1999/html", 1, "bot-container"], [1, "bot-view"], [4, "ngIf"], [3, "firstUsageStory", "assets", "ready"], ["id", "exit-btn", 2, "display", "none", 3, "click"], ["class", "bot-assistant-wrapper", 4, "ngIf"], ["class", "bot-chat-wrapper", 4, "ngIf"], [1, "bot-assistant-wrapper"], [1, "bot-logo", "bot-listening", 3, "ngStyle"], [1, "m-carl-notification", 3, "ngStyle"], [1, "m-carl-notification-cue", "m-cue"], ["class", "a-cue-voice", "id", "bot", 4, "ngIf"], ["id", "bot-icon", 1, "a-cue-icon"], [1, "bot-discussion-wrapper", 2, "min-height", "60%", "max-height", "60%", "height", "60%", "/*max-height", "120px"], [1, "bot-input-wrapper"], ["class", "bot-input", "id", "bot-input-div", 4, "ngIf"], ["class", "bot-input-disable", 4, "ngIf"], ["id", "bot", 1, "a-cue-voice"], [1, "a-cue-voice-el", "voice1"], [1, "a-cue-voice-el", "voice2"], [1, "a-cue-voice-el", "voice3"], [1, "a-cue-voice-el", "voice4"], [1, "a-cue-voice-el"], ["class", "user-input", 4, "ngIf"], [1, "user-input"], [1, "data"], [1, "time"], [1, "bot-answer"], ["class", "fade", 3, "innerHTML", 4, "ngIf"], ["class", "fade", "id", "loading-creation", 4, "ngIf"], [1, "fade", 3, "innerHTML"], ["id", "loading-creation", 1, "fade"], [4, "ngFor", "ngForOf"], ["class", "bot-button bot-button-left show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], ["class", "bot-button bot-button-right show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], ["class", "bot-button bot-button-grey show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], [1, "bot-button", "bot-button-left", "show-btn", 3, "innerHTML", "click"], [1, "bot-button", "bot-button-right", "show-btn", 3, "innerHTML", "click"], [1, "bot-button", "bot-button-grey", "show-btn", 3, "innerHTML", "click"], ["id", "bot-input-div", 1, "bot-input"], ["type", "text", "maxlength", "200", 3, "ngModel", "placeholder", "ngModelChange", "keyup.enter", "keyup"], [1, "bot-button", 3, "disabled", "click"], [1, "bot-input-disable"], [1, "bot-chat-wrapper"], [1, "bot-discussion-wrapper", 3, "scrollTop"], ["scrollMe", ""], [1, "bot-chat"], ["class", "bot-input", 4, "ngIf"], [1, "bot-logo"], [3, "src"], ["class", "bot-button fade", 3, "style", "innerHTML", "click", 4, "ngIf"], [1, "bot-button", "fade", 3, "innerHTML", "click"], [1, "bot-input"], ["class", "bot-button", 3, "style", "disabled", "click", 4, "ngIf"]], template: function DesktopFullScreenComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵelementStart(1, "div", 1);
                core.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_2_Template, 2, 2, "ng-container", 2);
                core.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_Template, 4, 2, "ng-container", 2);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵstyleMap(core.ɵɵpureFunction0(6, _c5));
                core.ɵɵclassMap(ctx.IsMobile ? "bot-mobile" : "");
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", ctx.firstVisit && ctx.firstUsageStory);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.firstVisit);
            } }, directives: [common.NgIf, FirstVisitComponent, common.NgStyle, common.NgForOf, forms.DefaultValueAccessor, forms.MaxLengthValidator, forms.NgControlStatus, forms.NgModel], pipes: [SafeHtmlPipe], styles: ["@-webkit-keyframes gradient{0%,100%{background-position:50% 0}50%{background-position:50% 100%}}@keyframes gradient{0%,100%{background-position:50% 0}50%{background-position:50% 100%}}@keyframes pulsebot{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}@-webkit-keyframes pulsebot{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}.bot-listening[_ngcontent-%COMP%]{height:100%;background:0 0}.bot-listening[_ngcontent-%COMP%]:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:0 0}.bot-listening[_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:0 0}@media screen and (min--moz-device-pixel-ratio:0){.m-carl-notification[_ngcontent-%COMP%]{transform:translate(0)!important}}.m-carl-notification[_ngcontent-%COMP%]{position:relative;top:50%}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-icon[_ngcontent-%COMP%]{position:absolute;width:100px;height:100px;transform:translateX(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9d107d 1px,#9d107d 3%,#580b58 60%);box-shadow:0 0 10px 5px rgb(0 0 0 / 25%);-webkit-animation:3.5s infinite pulsebot;animation:3.5s infinite pulsebot}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice[_ngcontent-%COMP%]{transform-origin:center center;height:130px;width:130px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]{position:absolute;width:130px;height:130px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1[_ngcontent-%COMP%]{background:#9a147f!important}.voice2[_ngcontent-%COMP%]{background:#773691!important}.voice3[_ngcontent-%COMP%]{background:#4e5ca8!important}.voice4[_ngcontent-%COMP%]{background:#abc1f1!important}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(1){animation:6s infinite reverse both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(2){-webkit-animation:7s infinite both hovering;animation:7s infinite both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(3){animation:8s infinite reverse both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(4){-webkit-animation:9s infinite both hovering;animation:9s infinite both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(5){animation:10s infinite reverse both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .speaking[_ngcontent-%COMP%]{-webkit-animation:2s infinite pulse;animation:2s infinite pulse}.m-carl-notification[_ngcontent-%COMP%]   .a-caption[_ngcontent-%COMP%]{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification[_ngcontent-%COMP%]   .a-caption.speaking[_ngcontent-%COMP%]{text-shadow:0 0 0;opacity:.4}@-webkit-keyframes hovering{from{transform:rotate(0) translateX(18px) rotate(0)}to{transform:rotate(360deg) translateX(18px) rotate(-360deg)}}@keyframes hovering{from{transform:rotate(0) translateX(18px) rotate(0)}to{transform:rotate(360deg) translateX(18px) rotate(-360deg)}}@-webkit-keyframes pulse{0%,40%,60%{transform:scale(1)}10%,80%{transform:scale(1.15)}15%,50%,90%{transform:scale(1.25)}100%,20%{transform:scale(1.05)}30%,65%{transform:scale(1.3)}55%{transform:scale(1.1)}70%{transform:scale(1.2)}}@keyframes pulse{0%,40%,60%{transform:scale(1)}10%,80%{transform:scale(1.15)}15%,50%,90%{transform:scale(1.25)}100%,20%{transform:scale(1.05)}30%,65%{transform:scale(1.3)}55%{transform:scale(1.1)}70%{transform:scale(1.2)}}"] });
        return DesktopFullScreenComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DesktopFullScreenComponent, [{
            type: core.Component,
            args: [{
                    selector: 'bot-full-screen',
                    templateUrl: './desktop-full-screen.component.html',
                    styleUrls: ['./desktop-full-screen.component.css']
                }]
        }], function () { return [{ type: TranslateService }, { type: KonversoService }]; }, { AssistantMode: [{
                type: core.Input
            }], assets: [{
                type: core.Input
            }], firstVisit: [{
                type: core.Input
            }], firstUsageStory: [{
                type: core.Input
            }], displayData: [{
                type: core.Input
            }], disableUserInput: [{
                type: core.Input
            }], LastUserInput: [{
                type: core.Input
            }], LastBotAnswer: [{
                type: core.Input
            }], PlaceHolder: [{
                type: core.Input
            }], IsMobile: [{
                type: core.Input
            }], readySend: [{
                type: core.Output
            }], send: [{
                type: core.Output
            }], sendBotCommand: [{
                type: core.Output
            }], sendEvent: [{
                type: core.Output
            }] }); })();

    // @ts-ignore
    var KonversoComponent = /** @class */ (function () {
        function KonversoComponent(service) {
            var _this = this;
            this.service = service;
            this._ready = new core.EventEmitter();
            this.ready = new core.EventEmitter();
            this.sended = new core.EventEmitter();
            this.AssistantMode = false;
            this.disableUserInput = false;
            if (service._auth) {
                this.service.authentication.subscribe(function () {
                    _this.ngOnInit();
                });
            }
            this.service.emulationTrigger.subscribe(function (response) {
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
                            this.sended.emit(true);
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
        KonversoComponent.ɵfac = function KonversoComponent_Factory(t) { return new (t || KonversoComponent)(core.ɵɵdirectiveInject(KonversoService)); };
        KonversoComponent.ɵcmp = core.ɵɵdefineComponent({ type: KonversoComponent, selectors: [["ngx-konverso"]], outputs: { ready: "ready", sended: "sended" }, decls: 1, vars: 12, consts: [[3, "assets", "firstVisit", "firstUsageStory", "displayData", "disableUserInput", "LastBotAnswer", "LastUserInput", "AssistantMode", "PlaceHolder", "IsMobile", "send", "sendBotCommand", "readySend"]], template: function KonversoComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "bot-full-screen", 0);
                core.ɵɵlistener("send", function KonversoComponent_Template_bot_full_screen_send_0_listener($event) { return ctx.send($event); })("sendBotCommand", function KonversoComponent_Template_bot_full_screen_sendBotCommand_0_listener($event) { return ctx.sendBotCommand($event); })("readySend", function KonversoComponent_Template_bot_full_screen_readySend_0_listener($event) { return ctx._ready.emit($event); });
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵclassMap(ctx.isMobile ? "bot-mobile" : "");
                core.ɵɵproperty("assets", ctx.assets)("firstVisit", ctx.firstVisit)("firstUsageStory", ctx.firstUsageStory)("displayData", ctx.History)("disableUserInput", ctx.disableUserInput)("LastBotAnswer", ctx.LastBotAnswer)("LastUserInput", ctx.LastUserInput)("AssistantMode", ctx.AssistantMode)("PlaceHolder", ctx.PlaceHolder)("IsMobile", ctx.isMobile);
            } }, directives: [DesktopFullScreenComponent], styles: ["ngx-konverso{overflow:hidden;display:block;min-height:100%;height:100%}  ngx-konverso .hidden-btn{transform:translateY(-100vh)!important;transition:transform .5s ease-in-out!important;animation:.5s fadeout;-moz-animation:.5s fadeout;-webkit-animation:.5s fadeout;-o-animation:.5s fadeout}@keyframes fadeout{from{opacity:1}to{opacity:0}}@-webkit-keyframes fadeout{from{opacity:1}to{opacity:0}}@-webkit-keyframes dot-keyframes{0%,100%{opacity:.4;transform:scale(1,1)}50%{opacity:1;transform:scale(1.2,1.2)}}@keyframes dot-keyframes{0%,100%{opacity:.4;transform:scale(1,1)}50%{opacity:1;transform:scale(1.2,1.2)}}  ngx-konverso .loading-dots{text-align:center;width:100%}  ngx-konverso .loading-dots--dot{-webkit-animation:1.5s ease-in-out infinite dot-keyframes;animation:1.5s ease-in-out infinite dot-keyframes;border-radius:10px;display:inline-block;height:10px;width:10px}  ngx-konverso .loading-dots--dot:nth-child(2){-webkit-animation-delay:.5s;animation-delay:.5s}  ngx-konverso .loading-dots--dot:nth-child(3){-webkit-animation-delay:1s;animation-delay:1s}  ngx-konverso bot-first-visit,   ngx-konverso bot-full-screen{display:table;min-height:100%;height:100%;width:100%}  ngx-konverso bot-full-screen button:focus,   ngx-konverso bot-full-screen input:focus{outline:0!important}  ngx-konverso bot-full-screen .bot-button>*{position:relative}  ngx-konverso bot-full-screen .button-lg{padding:10px!important;font-size:16px!important}  ngx-konverso bot-full-screen .bot-button{cursor:pointer;opacity:.9;min-width:150px;border-radius:25px;padding:5px;position:relative;overflow:hidden;border-width:0;outline:0;box-shadow:0 1px 4px rgba(0,0,0,.6);transition:opacity .3s}  ngx-konverso bot-full-screen .bot-button span{display:block;padding:12px 24px}  ngx-konverso bot-full-screen .bot-button:focus,   ngx-konverso bot-full-screen .bot-button:hover{opacity:1}  ngx-konverso bot-full-screen .bot-button:before{content:\"\";position:absolute;top:50%;left:50%;display:block;width:0;padding-top:0;border-radius:100%;background-color:rgba(236,240,241,.3);transform:translate(-50%,-50%)}  ngx-konverso bot-full-screen .bot-button:active:before{width:120%;padding-top:120%;transition:width .2s ease-out,padding-top .2s ease-out}  ngx-konverso bot-full-screen .bot-button-left{background:linear-gradient(107deg,#4862ab 0,#9d107d 100%) no-repeat padding-box;border-radius:22px;color:#fff!important;font:12px/19px nexa;height:44px;display:inline-block;letter-spacing:0;margin-right:25px}  ngx-konverso bot-full-screen .bot-button-right{background:no-repeat padding-box #e5e8EE54;border:2px solid #c2c8d5!important;color:#404e6b!important;border-radius:22px;font:12px/19px nexa;height:44px;letter-spacing:0;display:inline-block}@-webkit-keyframes movetop2{from{opacity:0;margin-top:5%}to{opacity:1;margin-top:0}}@keyframes movetop2{from{opacity:0;margin-top:5%}to{opacity:1;margin-top:0}}  ngx-konverso bot-full-screen .bot-button-grey{background:0 0!important;border:2px solid #171f26!important;border-radius:25px;min-height:44px!important;font:16px/25px \"Nexa Text\";letter-spacing:0;color:#171f26!important;display:inline-block;margin-right:25px;animation:.3s ease-in .3s both movetop2!important;-moz-animation:.3s ease-in .3s both movetop2!important;-webkit-animation:.3s ease-in .3s both movetop2!important;-o-animation:.3s ease-in .3s both movetop2!important}  ngx-konverso bot-full-screen .bot-container{font-family:nexa,Roboto;width:100%;height:70vh;display:table;margin:auto;background-size:contain}@media screen and (max-width:500px){  ngx-konverso bot-full-screen .bot-container{height:90vh}}  ngx-konverso bot-full-screen .bot-container>.bot-view{background-size:contain;width:auto;margin:auto;height:100%;display:table-cell;vertical-align:middle}  ngx-konverso bot-full-screen .bot-container>.bot-view img{margin:auto}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper{padding-top:5%;width:100%;margin:auto;vertical-align:middle}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:20px;text-align:center}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step{margin-top:5%;text-align:center}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step .bot-init-dot{border:1px solid;display:inline-block;width:12px;height:12px;margin-left:2.5px;margin-right:2.5px;border-radius:50%}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-button-wrapper{display:block;width:100%;text-align:center;margin-top:8%;margin-right:auto;margin-left:auto}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper{display:table;height:100%;width:100%;position:relative}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-logo{width:100%;margin:0 auto auto;vertical-align:middle;animation:.4s ease-in 1.8s both movetop!important;-moz-animation:.4s ease-in 1.8s both movetop!important;-webkit-animation:.4s ease-in 1.8s both movetop!important;-o-animation:.4s ease-in 1.8s both movetop!important}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-logo img{margin-left:auto;margin-right:auto;display:block;width:150px}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper{display:-ms-grid;display:grid;-ms-grid-columns:1fr;grid-template-columns:1fr;-ms-grid-rows:.3fr 0 1fr 0 .7fr;grid-template-rows:.3fr 1fr .7fr;gap:0 0;grid-template-areas:\"user-input\" \"bot-answer\" \"bot-input-wrapper\";overflow:auto!important}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer{-ms-grid-row:3;-ms-grid-column:1;width:600px;text-align:center;margin:auto;font-size:25px;grid-area:bot-answer}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input{-ms-grid-row:1;-ms-grid-column:1;font-size:15px;margin:auto;display:block;grid-area:user-input}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input .data{padding:10px 20px;border-radius:23px 23px 0;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:5% auto auto;background:no-repeat padding-box #171f26}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input .time{font-weight:300;position:absolute;width:200px;display:none;margin-left:95%;bottom:-1%;color:#000;font-size:10px}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper{-ms-grid-row:5;-ms-grid-column:1;text-align:center;width:100%;bottom:2%;animation:.4s ease-in 3.2s both fadeinanswer;-moz-animation:.4s ease-in 3.2s both fadeinanswer;-webkit-animation:.4s ease-in 3.2s both fadeinanswer;-o-animation:.4s ease-in 3.2s both fadeinanswer;grid-area:bot-input-wrapper}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper input{text-align:left;display:inline-block;padding:10px;color:#000;width:40%;background:0 0;border:2px solid #171f26;border-radius:6px;margin-right:10px}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper button{background:no-repeat padding-box #171f26!important;border:2px solid #171f26;border-radius:6px;display:inline-block;width:calc(10% - 15px);padding:11px}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper{width:100%;display:table;height:100%}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo{max-width:100px;position:absolute;top:2%;left:2%}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo img{max-width:100px}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper{width:100%;position:relative;max-width:600px;height:60%!important;padding:15px 30px;margin:0 auto;overflow-y:scroll;direction:rtl;display:-ms-grid;display:grid;-ms-grid-columns:1fr;grid-template-columns:1fr;-ms-grid-rows:.3fr 0 1fr 0 .7fr;grid-template-rows:.3fr 1fr .7fr;gap:0 0;grid-template-areas:\"user-input\" \"bot-answer\" \"bot-input-wrapper\";overflow:auto}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper::-webkit-scrollbar{width:0!important}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat{position:absolute;overflow-x:hidden;display:flex;flex-direction:column-reverse;justify-content:flex-end;transform:rotate(180deg);min-height:100%;width:94%}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer{-ms-grid-row:3;-ms-grid-column:1;font-size:15px;padding:10px 20px;border-radius:25px;color:#000;height:60%;background-color:transparent;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;margin:15px 0;word-break:break-all;transform:rotate(180deg);direction:ltr;grid-area:bot-answer}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer button{padding:10px;border:1px solid}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input{-ms-grid-row:1;-ms-grid-column:1;font-size:15px;transform:rotate(180deg);direction:ltr;grid-area:user-input}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .data{padding:10px 20px;border-radius:23px 23px 0;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:15px 0 15px auto;background:no-repeat padding-box #171f26}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .time{font-weight:300;position:absolute;width:200px;display:none;margin-left:95%;bottom:-1%;color:#000;font-size:10px}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper{-ms-grid-row:5;-ms-grid-column:1;bottom:2%;display:table;width:100%;margin:auto;grid-area:bot-input-wrapper}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input-disable{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5% .3%;text-align:center}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5%}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input input{display:inline-block;padding:10px;border-radius:25px;color:#000;width:60%;margin-right:15px;border:1px solid rgba(0,0,0,.2)}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input button{display:inline-block;width:calc(36% - 15px);padding:11px}  ngx-konverso .bot-mobile{font-family:nexa,Roboto;width:96vw!important;height:100vh;display:table;margin:auto;background-size:contain}  ngx-konverso .bot-mobile .bot-view bot-first-visit{position:relative}  ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-logo-init-wrapper{margin-top:2.5vh}  ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block;max-width:150px}  ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:15px!important;text-align:center}  ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-init-button-wrapper{position:absolute;top:70%}  ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-answer{width:70vw!important;text-align:center;margin:15.5% auto auto!important;font-size:15px!important}  ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-input-wrapper{background:0 0!important;bottom:10vh!important}  ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-input-wrapper input{width:90%!important}@keyframes movetop{from{margin-top:5%}to{margin-top:0}}@-webkit-keyframes movetop{from{margin-top:5%}to{margin-top:0}}.fade[_ngcontent-%COMP%], .fade[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{animation:.7s ease-in .2s both fadeinanswer!important;-moz-animation:.7s ease-in .2s both fadeinanswer!important;-webkit-animation:.7s ease-in .2s both fadeinanswer!important;-o-animation:.7s ease-in .2s both fadeinanswer!important}@-webkit-keyframes fadeinbutton{from{opacity:0}to{opacity:1}}@keyframes fadeinbutton{from{opacity:0}to{opacity:1}}@keyframes fadeinanswer{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadeinanswer{from{opacity:0}to{opacity:1}}"] });
        return KonversoComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(KonversoComponent, [{
            type: core.Component,
            args: [{
                    selector: 'ngx-konverso',
                    templateUrl: 'konverso.component.html',
                    styleUrls: ['../../assets/main.scss']
                }]
        }], function () { return [{ type: KonversoService }]; }, { ready: [{
                type: core.Output
            }], sended: [{
                type: core.Output
            }] }); })();

    // @ts-ignore
    var KonversoModule = /** @class */ (function () {
        function KonversoModule(parentModule) {
            if (parentModule) {
                throw new Error('KonversoModule is already loaded. Import it in the AppModule only');
            }
        }
        KonversoModule.forRoot = function (config) {
            return {
                ngModule: KonversoModule,
                providers: [
                    { provide: '__NgxKonverso__', useValue: config },
                    KonversoService
                ]
            };
        };
        KonversoModule.ɵmod = core.ɵɵdefineNgModule({ type: KonversoModule });
        KonversoModule.ɵinj = core.ɵɵdefineInjector({ factory: function KonversoModule_Factory(t) { return new (t || KonversoModule)(core.ɵɵinject(KonversoModule, 12)); }, providers: [KonversoService], imports: [[
                    forms.FormsModule,
                    http.HttpClientModule,
                    common.CommonModule,
                ]] });
        return KonversoModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(KonversoModule, { declarations: [KonversoComponent, DesktopFullScreenComponent, FirstVisitComponent, SafeHtmlPipe], imports: [forms.FormsModule,
            http.HttpClientModule,
            common.CommonModule], exports: [KonversoComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(KonversoModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [KonversoComponent, DesktopFullScreenComponent, FirstVisitComponent, SafeHtmlPipe],
                    imports: [
                        forms.FormsModule,
                        http.HttpClientModule,
                        common.CommonModule,
                    ],
                    providers: [KonversoService],
                    exports: [KonversoComponent]
                }]
        }], function () { return [{ type: KonversoModule, decorators: [{
                    type: core.Optional
                }, {
                    type: core.SkipSelf
                }] }]; }, null); })();

    exports.KonversoComponent = KonversoComponent;
    exports.KonversoModule = KonversoModule;
    exports.KonversoService = KonversoService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=konverso.umd.js.map
