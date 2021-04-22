(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs'), require('@angular/common'), require('@angular/platform-browser'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('konverso', ['exports', '@angular/core', '@angular/common/http', 'rxjs', '@angular/common', '@angular/platform-browser', '@angular/forms'], factory) :
    (global = global || self, factory(global.konverso = {}, global.ng.core, global.ng.common.http, global.rxjs, global.ng.common, global.ng.platformBrowser, global.ng.forms));
}(this, (function (exports, core, http, rxjs, common, platformBrowser, forms) { 'use strict';

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
            this.token = new rxjs.BehaviorSubject(null);
            // tslint:disable-next-line:variable-name
            this._token = this.token.asObservable();
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
                                    _this.http.post(_this.endpoint, preparedData, options)
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
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': window.location.origin,
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
            if (config.endpoint) {
                this.endpoint = config.endpoint;
                if (config.defaultAssets) {
                    this.assets = config.defaultAssets;
                    if (config.defaultAssets.ColorSet) {
                        this.ColorSet = config.defaultAssets.ColorSet;
                    }
                }
                if (config.auth) {
                    this.authentication.subscribe(function (user) {
                        var _a, _b, _c, _d;
                        if (!user.lang && config.lang) {
                            user.lang = config.lang;
                        }
                        _this.locale = user.lang;
                        if (user.token) {
                            _this.token.next(user.token);
                        }
                        if (user.firstVisit) {
                            _this.firstVisit = true;
                            delete user.firstVisit;
                            if (((_b = (_a = config) === null || _a === void 0 ? void 0 : _a.BotInitMessage) === null || _b === void 0 ? void 0 : _b.FirstUsage) &&
                                _this.locale && ((_d = (_c = config) === null || _c === void 0 ? void 0 : _c.BotInitMessage) === null || _d === void 0 ? void 0 : _d.FirstUsage[_this.locale])) {
                                _this.firstUsageStory = config.BotInitMessage.FirstUsage[_this.locale];
                            }
                        }
                        _this.user = user;
                    });
                }
                else if (config.lang) {
                    this.locale = config.lang;
                    this.user = {
                        userId: this.guid(),
                        lang: config.lang
                    };
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
    function FirstVisitComponent_span_6_Template(rf, ctx) { if (rf & 1) {
        var _r1137 = core.ɵɵgetCurrentView();
        core.ɵɵelementStart(0, "span", 7);
        core.ɵɵlistener("click", function FirstVisitComponent_span_6_Template_span_click_0_listener() { core.ɵɵrestoreView(_r1137); var pos_r1135 = ctx.index; var ctx_r1136 = core.ɵɵnextContext(); return ctx_r1136.goTo(pos_r1135); });
        core.ɵɵelementEnd();
    } if (rf & 2) {
        var pos_r1135 = ctx.index;
        var ctx_r1133 = core.ɵɵnextContext();
        core.ɵɵstyleMap(pos_r1135 === ctx_r1133.position ? core.ɵɵpureFunction2(2, _c0, ctx_r1133.assets == null ? null : ctx_r1133.assets.ColorSet == null ? null : ctx_r1133.assets.ColorSet.Primary, ctx_r1133.assets == null ? null : ctx_r1133.assets.ColorSet == null ? null : ctx_r1133.assets.ColorSet.Primary) : core.ɵɵpureFunction2(5, _c0, ctx_r1133.assets == null ? null : ctx_r1133.assets.ColorSet == null ? null : ctx_r1133.assets.ColorSet.Secondary, ctx_r1133.assets == null ? null : ctx_r1133.assets.ColorSet == null ? null : ctx_r1133.assets.ColorSet.Primary));
    } }
    var _c1 = function (a0, a1) { return { backgroundColor: a0, color: a1 }; };
    var FirstVisitComponent = /** @class */ (function () {
        function FirstVisitComponent() {
            this.ready = new core.EventEmitter(false);
            this.position = 0;
            this.current = null;
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
            this.ready.emit(true);
        };
        FirstVisitComponent.ɵfac = function FirstVisitComponent_Factory(t) { return new (t || FirstVisitComponent)(); };
        FirstVisitComponent.ɵcmp = core.ɵɵdefineComponent({ type: FirstVisitComponent, selectors: [["bot-first-visit"]], inputs: { firstUsageStory: "firstUsageStory", assets: "assets" }, outputs: { ready: "ready" }, decls: 10, vars: 10, consts: [[1, "bot-logo-init-wrapper"], [3, "src"], [1, "bot-init-text", 3, "innerHTML"], [1, "bot-init-bullet-step"], ["class", "bot-init-dot", 3, "style", "click", 4, "ngFor", "ngForOf"], [1, "bot-init-button-wrapper"], ["mat-button", "", 1, "bot-button", "button-lg", 3, "click"], [1, "bot-init-dot", 3, "click"]], template: function FirstVisitComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementContainerStart(0);
                core.ɵɵelementStart(1, "div", 0);
                core.ɵɵelement(2, "img", 1);
                core.ɵɵelementEnd();
                core.ɵɵelement(3, "div", 2);
                core.ɵɵpipe(4, "safeHtml");
                core.ɵɵelementStart(5, "div", 3);
                core.ɵɵtemplate(6, FirstVisitComponent_span_6_Template, 1, 8, "span", 4);
                core.ɵɵelementEnd();
                core.ɵɵelementStart(7, "div", 5);
                core.ɵɵelementStart(8, "button", 6);
                core.ɵɵlistener("click", function FirstVisitComponent_Template_button_click_8_listener() { return ctx.start(); });
                core.ɵɵtext(9, "C'est parti !");
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
                core.ɵɵelementContainerEnd();
            } if (rf & 2) {
                core.ɵɵadvance(2);
                core.ɵɵproperty("src", ctx.assets.FullSizeLogo, core.ɵɵsanitizeUrl);
                core.ɵɵadvance(1);
                core.ɵɵproperty("innerHTML", core.ɵɵpipeBind1(4, 5, ctx.current), core.ɵɵsanitizeHtml);
                core.ɵɵadvance(3);
                core.ɵɵproperty("ngForOf", ctx.firstUsageStory);
                core.ɵɵadvance(2);
                core.ɵɵstyleMap(core.ɵɵpureFunction2(7, _c1, ctx.assets == null ? null : ctx.assets.ColorSet == null ? null : ctx.assets.ColorSet.Primary, ctx.assets == null ? null : ctx.assets.ColorSet == null ? null : ctx.assets.ColorSet.Secondary));
            } }, directives: [common.NgForOf], pipes: [SafeHtmlPipe], styles: [""] });
        return FirstVisitComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(FirstVisitComponent, [{
            type: core.Component,
            args: [{
                    selector: 'bot-first-visit',
                    templateUrl: './first-visit.component.html',
                    styleUrls: ['./first-visit.component.scss']
                }]
        }], function () { return []; }, { firstUsageStory: [{
                type: core.Input
            }], assets: [{
                type: core.Input
            }], ready: [{
                type: core.Output
            }] }); })();

    function DesktopFullScreenComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        var _r1111 = core.ɵɵgetCurrentView();
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "bot-first-visit", 3);
        core.ɵɵlistener("ready", function DesktopFullScreenComponent_ng_container_2_Template_bot_first_visit_ready_1_listener($event) { core.ɵɵrestoreView(_r1111); var ctx_r1110 = core.ɵɵnextContext(); return ctx_r1110.ready.emit($event); });
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1108 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("firstUsageStory", ctx_r1108.firstUsageStory)("assets", ctx_r1108.assets);
    } }
    var _c0$1 = function (a0, a1) { return { backgroundColor: a0, color: a1 }; };
    function DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "div", 14);
        core.ɵɵelementStart(2, "div", 15);
        core.ɵɵtext(3);
        core.ɵɵelementEnd();
        core.ɵɵelementStart(4, "span", 16);
        core.ɵɵtext(5);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var entry_r1113 = core.ɵɵnextContext().$implicit;
        var ctx_r1114 = core.ɵɵnextContext(2);
        core.ɵɵadvance(2);
        core.ɵɵstyleMap(core.ɵɵpureFunction2(4, _c0$1, ctx_r1114.assets == null ? null : ctx_r1114.assets.ColorSet == null ? null : ctx_r1114.assets.ColorSet.Primary, ctx_r1114.assets == null ? null : ctx_r1114.assets.ColorSet == null ? null : ctx_r1114.assets.ColorSet.Secondary));
        core.ɵɵadvance(1);
        core.ɵɵtextInterpolate1(" ", entry_r1113.message, " ");
        core.ɵɵadvance(2);
        core.ɵɵtextInterpolate(entry_r1113.date);
    } }
    function DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelement(1, "span", 18);
        core.ɵɵpipe(2, "safeHtml");
        core.ɵɵelement(3, "br");
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var entry_r1113 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("innerHTML", core.ɵɵpipeBind1(2, 1, entry_r1113.text), core.ɵɵsanitizeHtml);
    } }
    function DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        var _r1125 = core.ɵɵgetCurrentView();
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "button", 19);
        core.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template_button_click_1_listener() { core.ɵɵrestoreView(_r1125); var suggest_r1121 = core.ɵɵnextContext().$implicit; var ctx_r1123 = core.ɵɵnextContext(5); return ctx_r1123.byPassUserInput(suggest_r1121 == null ? null : suggest_r1121.value == null ? null : suggest_r1121.value.onClick); });
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var suggest_r1121 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("innerHTML", suggest_r1121.label || (suggest_r1121.value == null ? null : suggest_r1121.value.displayedMessage) || (suggest_r1121.value == null ? null : suggest_r1121.value.title), core.ɵɵsanitizeHtml);
    } }
    function DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 2);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var suggest_r1121 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", suggest_r1121.format === "button");
    } }
    function DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 7);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var entry_r1113 = core.ɵɵnextContext(2).$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngForOf", entry_r1113.medias[0].required_actions);
    } }
    function DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "div", 17);
        core.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_ng_container_2_Template, 4, 3, "ng-container", 2);
        core.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 2);
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var entry_r1113 = core.ɵɵnextContext().$implicit;
        core.ɵɵadvance(2);
        core.ɵɵproperty("ngIf", entry_r1113.text);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", entry_r1113.medias && entry_r1113.medias.length && entry_r1113.medias[0].required_actions && entry_r1113.medias[0].required_actions.length);
    } }
    function DesktopFullScreenComponent_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_1_Template, 6, 7, "ng-container", 2);
        core.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_Template, 4, 2, "ng-container", 2);
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var entry_r1113 = ctx.$implicit;
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", entry_r1113.date);
        core.ɵɵadvance(1);
        core.ɵɵproperty("ngIf", !entry_r1113.date);
    } }
    function DesktopFullScreenComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
        var _r1130 = core.ɵɵgetCurrentView();
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "div", 4);
        core.ɵɵelementStart(2, "div", 5);
        core.ɵɵelementStart(3, "div", 6);
        core.ɵɵtemplate(4, DesktopFullScreenComponent_ng_container_3_ng_container_4_Template, 3, 2, "ng-container", 7);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(5, "div", 8);
        core.ɵɵelementStart(6, "div", 9);
        core.ɵɵelementStart(7, "input", 10);
        core.ɵɵlistener("ngModelChange", function DesktopFullScreenComponent_ng_container_3_Template_input_ngModelChange_7_listener($event) { core.ɵɵrestoreView(_r1130); var ctx_r1129 = core.ɵɵnextContext(); return ctx_r1129.userInput = $event; })("keyup.enter", function DesktopFullScreenComponent_ng_container_3_Template_input_keyup_enter_7_listener() { core.ɵɵrestoreView(_r1130); var ctx_r1131 = core.ɵɵnextContext(); return ctx_r1131.userInput && ctx_r1131._send(); });
        core.ɵɵelementEnd();
        core.ɵɵelementStart(8, "button", 11);
        core.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_Template_button_click_8_listener() { core.ɵɵrestoreView(_r1130); var ctx_r1132 = core.ɵɵnextContext(); return ctx_r1132._send(); });
        core.ɵɵtext(9, "Envoyer ");
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementStart(10, "div", 12);
        core.ɵɵelement(11, "img", 13);
        core.ɵɵelementEnd();
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1109 = core.ɵɵnextContext();
        core.ɵɵadvance(4);
        core.ɵɵproperty("ngForOf", ctx_r1109.displayData);
        core.ɵɵadvance(3);
        core.ɵɵproperty("ngModel", ctx_r1109.userInput);
        core.ɵɵadvance(1);
        core.ɵɵstyleMap(core.ɵɵpureFunction2(6, _c0$1, ctx_r1109.assets == null ? null : ctx_r1109.assets.ColorSet == null ? null : ctx_r1109.assets.ColorSet.Primary, ctx_r1109.assets == null ? null : ctx_r1109.assets.ColorSet == null ? null : ctx_r1109.assets.ColorSet.Secondary));
        core.ɵɵproperty("disabled", !ctx_r1109.userInput);
        core.ɵɵadvance(3);
        core.ɵɵproperty("src", ctx_r1109.assets.FullSizeLogo, core.ɵɵsanitizeUrl);
    } }
    var _c1$1 = function (a0) { return { backgroundImage: a0 }; };
    var DesktopFullScreenComponent = /** @class */ (function () {
        function DesktopFullScreenComponent() {
            this.firstVisit = false;
            this.ready = new core.EventEmitter(false);
            this.send = new core.EventEmitter(null);
            this.sendBotCommand = new core.EventEmitter(null);
        }
        DesktopFullScreenComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.ready.subscribe(function (ready) {
                _this.firstVisit = false;
            });
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
        DesktopFullScreenComponent.prototype.byPassUserInput = function (botdata) {
            this.sendBotCommand.emit(botdata);
        };
        DesktopFullScreenComponent.ɵfac = function DesktopFullScreenComponent_Factory(t) { return new (t || DesktopFullScreenComponent)(); };
        DesktopFullScreenComponent.ɵcmp = core.ɵɵdefineComponent({ type: DesktopFullScreenComponent, selectors: [["bot-full-screen"]], inputs: { assets: "assets", firstVisit: "firstVisit", firstUsageStory: "firstUsageStory", displayData: "displayData" }, outputs: { ready: "ready", send: "send", sendBotCommand: "sendBotCommand" }, decls: 4, vars: 6, consts: [["xmlns", "http://www.w3.org/1999/html", 1, "bot-container"], [1, "bot-view"], [4, "ngIf"], [3, "firstUsageStory", "assets", "ready"], [1, "bot-chat-wrapper"], [1, "bot-discussion-wrapper"], [1, "bot-chat"], [4, "ngFor", "ngForOf"], [1, "bot-input-wrapper"], [1, "bot-input"], ["type", "text", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "bot-button", 3, "disabled", "click"], [1, "bot-logo"], [3, "src"], [1, "user-input"], [1, "data"], [1, "time"], [1, "bot-answer"], [3, "innerHTML"], [1, "bot-button", 3, "innerHTML", "click"]], template: function DesktopFullScreenComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "div", 0);
                core.ɵɵelementStart(1, "div", 1);
                core.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_2_Template, 2, 2, "ng-container", 2);
                core.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_Template, 12, 9, "ng-container", 2);
                core.ɵɵelementEnd();
                core.ɵɵelementEnd();
            } if (rf & 2) {
                core.ɵɵstyleMap(core.ɵɵpureFunction1(4, _c1$1, "url(" + ctx.assets.Background + ")"));
                core.ɵɵadvance(2);
                core.ɵɵproperty("ngIf", ctx.firstVisit && ctx.firstUsageStory);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.firstVisit);
            } }, directives: [common.NgIf, FirstVisitComponent, common.NgForOf, forms.DefaultValueAccessor, forms.NgControlStatus, forms.NgModel], pipes: [SafeHtmlPipe], styles: [""] });
        return DesktopFullScreenComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(DesktopFullScreenComponent, [{
            type: core.Component,
            args: [{
                    selector: 'bot-full-screen',
                    templateUrl: './desktop-full-screen.component.html',
                    styleUrls: ['./desktop-full-screen.component.css']
                }]
        }], function () { return []; }, { assets: [{
                type: core.Input
            }], firstVisit: [{
                type: core.Input
            }], firstUsageStory: [{
                type: core.Input
            }], displayData: [{
                type: core.Input
            }], ready: [{
                type: core.Output
            }], send: [{
                type: core.Output
            }], sendBotCommand: [{
                type: core.Output
            }] }); })();

    function KonversoComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
        core.ɵɵelementContainerStart(0);
        core.ɵɵtext(1, " Mobile\n");
        core.ɵɵelementContainerEnd();
    } }
    function KonversoComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
        var _r1106 = core.ɵɵgetCurrentView();
        core.ɵɵelementContainerStart(0);
        core.ɵɵelementStart(1, "bot-full-screen", 1);
        core.ɵɵlistener("send", function KonversoComponent_ng_container_1_Template_bot_full_screen_send_1_listener($event) { core.ɵɵrestoreView(_r1106); var ctx_r1105 = core.ɵɵnextContext(); return ctx_r1105.send($event); })("sendBotCommand", function KonversoComponent_ng_container_1_Template_bot_full_screen_sendBotCommand_1_listener($event) { core.ɵɵrestoreView(_r1106); var ctx_r1107 = core.ɵɵnextContext(); return ctx_r1107.sendBotCommand($event); });
        core.ɵɵelementEnd();
        core.ɵɵelementContainerEnd();
    } if (rf & 2) {
        var ctx_r1104 = core.ɵɵnextContext();
        core.ɵɵadvance(1);
        core.ɵɵproperty("assets", ctx_r1104.assets)("firstVisit", ctx_r1104.firstVisit)("firstUsageStory", ctx_r1104.firstUsageStory)("displayData", ctx_r1104.History);
    } }
    // @ts-ignore
    var KonversoComponent = /** @class */ (function () {
        function KonversoComponent(service) {
            this.service = service;
            this.ready = new core.EventEmitter();
        }
        KonversoComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.isMobile = this._isMobile();
            this.assets = this.service.assets;
            this.firstVisit = this.service.firstVisit;
            this.firstUsageStory = this.service.firstUsageStory;
            this.History = [];
            if (this.service.ColorSet) {
                this.colorSet = this.service.ColorSet;
            }
            this.ready.subscribe(function (ready) {
                if (ready) {
                    _this.firstVisit = false;
                    _this.service.firstVisit = false;
                }
            });
        };
        KonversoComponent.prototype.send = function ($event) {
            return __awaiter(this, void 0, void 0, function () {
                var index, response;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.History.push($event);
                            index = this.History.length - 1;
                            return [4 /*yield*/, this.service.send($event.message).catch(function (err) {
                                    console.log('We got an error ', err);
                                    // @ts-ignore
                                    _this.History[index].error = true;
                                })];
                        case 1:
                            response = _a.sent();
                            if (response && response.response) {
                                console.log(response);
                                this.History.push(response.response);
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        KonversoComponent.prototype.sendBotCommand = function ($event) {
            return __awaiter(this, void 0, void 0, function () {
                var response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.service.send($event).catch(function (err) {
                                console.log('We got an error ', err);
                            })];
                        case 1:
                            response = _a.sent();
                            if (response && response.response) {
                                console.log(response);
                                this.History.push(response.response);
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
        KonversoComponent.ɵcmp = core.ɵɵdefineComponent({ type: KonversoComponent, selectors: [["ngx-konverso"]], outputs: { ready: "ready" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "assets", "firstVisit", "firstUsageStory", "displayData", "send", "sendBotCommand"]], template: function KonversoComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵtemplate(0, KonversoComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
                core.ɵɵtemplate(1, KonversoComponent_ng_container_1_Template, 2, 4, "ng-container", 0);
            } if (rf & 2) {
                core.ɵɵproperty("ngIf", ctx.isMobile);
                core.ɵɵadvance(1);
                core.ɵɵproperty("ngIf", !ctx.isMobile);
            } }, directives: [common.NgIf, DesktopFullScreenComponent], styles: ["ngx-konverso{overflow:hidden;display:block;min-height:100%;height:100%}  ngx-konverso bot-first-visit,   ngx-konverso bot-full-screen{display:table;min-height:100%;height:100%;width:100%}  ngx-konverso bot-full-screen button:focus,   ngx-konverso bot-full-screen input:focus{outline:0!important}  ngx-konverso bot-full-screen .bot-button>*{position:relative}  ngx-konverso bot-full-screen .button-lg{padding:10px!important;font-size:16px!important}  ngx-konverso bot-full-screen .bot-button{cursor:pointer;opacity:.9;min-width:150px;border-radius:25px;padding:5px;position:relative;display:block;margin:30px auto;overflow:hidden;border-width:0;outline:0;box-shadow:0 1px 4px rgba(0,0,0,.6);transition:opacity .3s}  ngx-konverso bot-full-screen .bot-button span{display:block;padding:12px 24px}  ngx-konverso bot-full-screen .bot-button:focus,   ngx-konverso bot-full-screen .bot-button:hover{opacity:1}  ngx-konverso bot-full-screen .bot-button:before{content:\"\";position:absolute;top:50%;left:50%;display:block;width:0;padding-top:0;border-radius:100%;background-color:rgba(236,240,241,.3);transform:translate(-50%,-50%)}  ngx-konverso bot-full-screen .bot-button:active:before{width:120%;padding-top:120%;transition:width .2s ease-out,padding-top .2s ease-out}  ngx-konverso bot-full-screen .bot-container{font-family:nexa,Roboto;width:100%;height:100%;display:table;margin:auto;background-size:contain}  ngx-konverso bot-full-screen .bot-container>.bot-view{background-size:contain;width:auto;margin:auto;height:100%;display:table-cell;vertical-align:middle}  ngx-konverso bot-full-screen .bot-container>.bot-view img{margin:auto}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper{padding-top:5%;width:100%;margin:auto;vertical-align:middle}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:20px;text-align:center}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step{margin-top:5%;text-align:center}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step .bot-init-dot{border:1px solid;display:inline-block;width:12px;height:12px;margin-left:2.5px;margin-right:2.5px;border-radius:50%}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-button-wrapper{display:block;width:100%;text-align:center;margin-top:8%;margin-right:auto;margin-left:auto}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper{width:100%;display:table;height:100%}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo{max-width:100px;position:absolute;top:2%;left:2%}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo img{max-width:100px}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper{width:100%;max-width:600px;height:calc(85vh - 50px);padding:15px 30px;margin:0 auto;overflow-y:scroll;transform:rotate(180deg);direction:rtl}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat{overflow-x:hidden;display:flex;flex-direction:column-reverse;justify-content:flex-end}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer{font-size:15px;padding:10px 20px;border-radius:25px;color:#000;background-color:transparent;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;margin:15px 0;word-break:break-all;transform:rotate(180deg);direction:ltr}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input{font-size:15px;transform:rotate(180deg);direction:ltr}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .data{padding:10px 20px;border-radius:25px 25px 0;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:15px 0 15px auto;background-color:#00a9de}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .time{font-weight:300;position:absolute;width:200px;display:block;margin-left:95%;bottom:-1%;color:#000;font-size:10px}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper{display:table;width:100%;margin:auto}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5%}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input input{display:inline-block;padding:10px;border-radius:25px;color:#000;width:60%;margin-right:15px;border:1px solid rgba(0,0,0,.2)}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input button{display:inline-block;width:calc(36% - 15px);padding:11px}"] });
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
