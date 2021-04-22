import { __awaiter } from 'tslib';
import { EventEmitter, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, ɵɵdirectiveInject, ɵɵdefinePipe, Pipe, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelementEnd, ɵɵstyleMap, ɵɵpureFunction2, ɵɵdefineComponent, ɵɵelementContainerStart, ɵɵelement, ɵɵpipe, ɵɵtemplate, ɵɵtext, ɵɵelementContainerEnd, ɵɵadvance, ɵɵproperty, ɵɵsanitizeUrl, ɵɵpipeBind1, ɵɵsanitizeHtml, Component, Input, Output, ɵɵtextInterpolate1, ɵɵtextInterpolate, ɵɵpureFunction1, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { NgForOf, NgIf, CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { DefaultValueAccessor, NgControlStatus, NgModel, FormsModule } from '@angular/forms';

class KonversoService {
    constructor(config, http) {
        this.http = http;
        this.authentication = new EventEmitter();
        this.firstVisit = false;
        this.token = new BehaviorSubject(null);
        // tslint:disable-next-line:variable-name
        this._token = this.token.asObservable();
        this.buildHeaders();
        this.initInstance(config);
    }
    /**
     * Send Query To backend server and get a response
     * @param query
     */
    send(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (query && query.replace(new RegExp(' ', 'g'), '')) {
                    if (this.header) {
                        const preparedData = this.buildQuery(query);
                        const options = {
                            headers: this.header
                        };
                        this.http.post(this.endpoint, preparedData, options)
                            .subscribe((data) => {
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
            });
        });
    }
    /**
     * @private
     * Generate Header for backend call
     */
    buildHeaders() {
        this._token.subscribe((token) => {
            const bearer = 'Bearer ' + token;
            this.header = new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': window.location.origin,
                'Authorization': bearer
            });
        });
    }
    /**
     * @param config
     * @private
     * Initialize Data for User Instance
     */
    initInstance(config) {
        if (config.endpoint) {
            this.endpoint = config.endpoint;
            if (config.defaultAssets) {
                this.assets = config.defaultAssets;
                if (config.defaultAssets.ColorSet) {
                    this.ColorSet = config.defaultAssets.ColorSet;
                }
            }
            if (config.auth) {
                this.authentication.subscribe((user) => {
                    var _a, _b, _c, _d;
                    if (!user.lang && config.lang) {
                        user.lang = config.lang;
                    }
                    this.locale = user.lang;
                    if (user.token) {
                        this.token.next(user.token);
                    }
                    if (user.firstVisit) {
                        this.firstVisit = true;
                        delete user.firstVisit;
                        if (((_b = (_a = config) === null || _a === void 0 ? void 0 : _a.BotInitMessage) === null || _b === void 0 ? void 0 : _b.FirstUsage) &&
                            this.locale && ((_d = (_c = config) === null || _c === void 0 ? void 0 : _c.BotInitMessage) === null || _d === void 0 ? void 0 : _d.FirstUsage[this.locale])) {
                            this.firstUsageStory = config.BotInitMessage.FirstUsage[this.locale];
                        }
                    }
                    this.user = user;
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
    }
    /**
     * @param query
     * @private
     * prepare set data to push to backend server
     */
    buildQuery(query) {
        // @ts-ignore
        return Object.assign(Object.assign({}, this.user), { query: query.replace(/\s+/g, ' ').trim(), isSending: true });
    }
    /**
     * @private
     * Generate Random uniq Id for Konverso Instance
     */
    guid() {
        let random = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        return random() + random() + '-' + random() + '-' + random() + '-' + random() + '-' + random() + random() + random();
    }
}
KonversoService.ɵfac = function KonversoService_Factory(t) { return new (t || KonversoService)(ɵɵinject('__NgxKonverso__'), ɵɵinject(HttpClient)); };
KonversoService.ɵprov = ɵɵdefineInjectable({ token: KonversoService, factory: KonversoService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(KonversoService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['__NgxKonverso__']
            }] }, { type: HttpClient }]; }, null); })();

class SafeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
}
SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(ɵɵdirectiveInject(DomSanitizer)); };
SafeHtmlPipe.ɵpipe = ɵɵdefinePipe({ name: "safeHtml", type: SafeHtmlPipe, pure: true });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SafeHtmlPipe, [{
        type: Pipe,
        args: [{
                name: 'safeHtml'
            }]
    }], function () { return [{ type: DomSanitizer }]; }, null); })();

const _c0 = function (a0, a1) { return { backgroundColor: a0, borderColor: a1 }; };
function FirstVisitComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r1102 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 7);
    ɵɵlistener("click", function FirstVisitComponent_span_6_Template_span_click_0_listener() { ɵɵrestoreView(_r1102); const pos_r1100 = ctx.index; const ctx_r1101 = ɵɵnextContext(); return ctx_r1101.goTo(pos_r1100); });
    ɵɵelementEnd();
} if (rf & 2) {
    const pos_r1100 = ctx.index;
    const ctx_r1098 = ɵɵnextContext();
    ɵɵstyleMap(pos_r1100 === ctx_r1098.position ? ɵɵpureFunction2(2, _c0, ctx_r1098.assets == null ? null : ctx_r1098.assets.ColorSet == null ? null : ctx_r1098.assets.ColorSet.Primary, ctx_r1098.assets == null ? null : ctx_r1098.assets.ColorSet == null ? null : ctx_r1098.assets.ColorSet.Primary) : ɵɵpureFunction2(5, _c0, ctx_r1098.assets == null ? null : ctx_r1098.assets.ColorSet == null ? null : ctx_r1098.assets.ColorSet.Secondary, ctx_r1098.assets == null ? null : ctx_r1098.assets.ColorSet == null ? null : ctx_r1098.assets.ColorSet.Primary));
} }
const _c1 = function (a0, a1) { return { backgroundColor: a0, color: a1 }; };
class FirstVisitComponent {
    constructor() {
        this.ready = new EventEmitter(false);
        this.position = 0;
        this.current = null;
    }
    ngOnInit() {
        this.current = this.firstUsageStory[this.position];
        const clear = setInterval(() => {
            if (this.position < (this.firstUsageStory.length - 1)) {
                this.current = this.firstUsageStory[++this.position];
            }
            else {
                clearInterval(clear);
            }
        }, 5000);
    }
    goTo(pos) {
        this.position = pos;
        this.current = this.firstUsageStory[this.position];
    }
    start() {
        this.ready.emit(true);
    }
}
FirstVisitComponent.ɵfac = function FirstVisitComponent_Factory(t) { return new (t || FirstVisitComponent)(); };
FirstVisitComponent.ɵcmp = ɵɵdefineComponent({ type: FirstVisitComponent, selectors: [["bot-first-visit"]], inputs: { firstUsageStory: "firstUsageStory", assets: "assets" }, outputs: { ready: "ready" }, decls: 10, vars: 10, consts: [[1, "bot-logo-init-wrapper"], [3, "src"], [1, "bot-init-text", 3, "innerHTML"], [1, "bot-init-bullet-step"], ["class", "bot-init-dot", 3, "style", "click", 4, "ngFor", "ngForOf"], [1, "bot-init-button-wrapper"], ["mat-button", "", 1, "bot-button", "button-lg", 3, "click"], [1, "bot-init-dot", 3, "click"]], template: function FirstVisitComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0);
        ɵɵelementStart(1, "div", 0);
        ɵɵelement(2, "img", 1);
        ɵɵelementEnd();
        ɵɵelement(3, "div", 2);
        ɵɵpipe(4, "safeHtml");
        ɵɵelementStart(5, "div", 3);
        ɵɵtemplate(6, FirstVisitComponent_span_6_Template, 1, 8, "span", 4);
        ɵɵelementEnd();
        ɵɵelementStart(7, "div", 5);
        ɵɵelementStart(8, "button", 6);
        ɵɵlistener("click", function FirstVisitComponent_Template_button_click_8_listener() { return ctx.start(); });
        ɵɵtext(9, "C'est parti !");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementContainerEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("src", ctx.assets.FullSizeLogo, ɵɵsanitizeUrl);
        ɵɵadvance(1);
        ɵɵproperty("innerHTML", ɵɵpipeBind1(4, 5, ctx.current), ɵɵsanitizeHtml);
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ctx.firstUsageStory);
        ɵɵadvance(2);
        ɵɵstyleMap(ɵɵpureFunction2(7, _c1, ctx.assets == null ? null : ctx.assets.ColorSet == null ? null : ctx.assets.ColorSet.Primary, ctx.assets == null ? null : ctx.assets.ColorSet == null ? null : ctx.assets.ColorSet.Secondary));
    } }, directives: [NgForOf], pipes: [SafeHtmlPipe], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FirstVisitComponent, [{
        type: Component,
        args: [{
                selector: 'bot-first-visit',
                templateUrl: './first-visit.component.html',
                styleUrls: ['./first-visit.component.scss']
            }]
    }], function () { return []; }, { firstUsageStory: [{
            type: Input
        }], assets: [{
            type: Input
        }], ready: [{
            type: Output
        }] }); })();

function DesktopFullScreenComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r1076 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "bot-first-visit", 3);
    ɵɵlistener("ready", function DesktopFullScreenComponent_ng_container_2_Template_bot_first_visit_ready_1_listener($event) { ɵɵrestoreView(_r1076); const ctx_r1075 = ɵɵnextContext(); return ctx_r1075.ready.emit($event); });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1073 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("firstUsageStory", ctx_r1073.firstUsageStory)("assets", ctx_r1073.assets);
} }
const _c0$1 = function (a0, a1) { return { backgroundColor: a0, color: a1 }; };
function DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 14);
    ɵɵelementStart(2, "div", 15);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 16);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r1078 = ɵɵnextContext().$implicit;
    const ctx_r1079 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵstyleMap(ɵɵpureFunction2(4, _c0$1, ctx_r1079.assets == null ? null : ctx_r1079.assets.ColorSet == null ? null : ctx_r1079.assets.ColorSet.Primary, ctx_r1079.assets == null ? null : ctx_r1079.assets.ColorSet == null ? null : ctx_r1079.assets.ColorSet.Secondary));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", entry_r1078.message, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(entry_r1078.date);
} }
function DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "span", 18);
    ɵɵpipe(2, "safeHtml");
    ɵɵelement(3, "br");
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r1078 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("innerHTML", ɵɵpipeBind1(2, 1, entry_r1078.text), ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r1090 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 19);
    ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template_button_click_1_listener() { ɵɵrestoreView(_r1090); const suggest_r1086 = ɵɵnextContext().$implicit; const ctx_r1088 = ɵɵnextContext(5); return ctx_r1088.byPassUserInput(suggest_r1086 == null ? null : suggest_r1086.value == null ? null : suggest_r1086.value.onClick); });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const suggest_r1086 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("innerHTML", suggest_r1086.label || (suggest_r1086.value == null ? null : suggest_r1086.value.displayedMessage) || (suggest_r1086.value == null ? null : suggest_r1086.value.title), ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const suggest_r1086 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", suggest_r1086.format === "button");
} }
function DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 7);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r1078 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", entry_r1078.medias[0].required_actions);
} }
function DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 17);
    ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_ng_container_2_Template, 4, 3, "ng-container", 2);
    ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r1078 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵproperty("ngIf", entry_r1078.text);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", entry_r1078.medias && entry_r1078.medias.length && entry_r1078.medias[0].required_actions && entry_r1078.medias[0].required_actions.length);
} }
function DesktopFullScreenComponent_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_1_Template, 6, 7, "ng-container", 2);
    ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_Template, 4, 2, "ng-container", 2);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r1078 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", entry_r1078.date);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !entry_r1078.date);
} }
function DesktopFullScreenComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r1095 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 4);
    ɵɵelementStart(2, "div", 5);
    ɵɵelementStart(3, "div", 6);
    ɵɵtemplate(4, DesktopFullScreenComponent_ng_container_3_ng_container_4_Template, 3, 2, "ng-container", 7);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 8);
    ɵɵelementStart(6, "div", 9);
    ɵɵelementStart(7, "input", 10);
    ɵɵlistener("ngModelChange", function DesktopFullScreenComponent_ng_container_3_Template_input_ngModelChange_7_listener($event) { ɵɵrestoreView(_r1095); const ctx_r1094 = ɵɵnextContext(); return ctx_r1094.userInput = $event; })("keyup.enter", function DesktopFullScreenComponent_ng_container_3_Template_input_keyup_enter_7_listener() { ɵɵrestoreView(_r1095); const ctx_r1096 = ɵɵnextContext(); return ctx_r1096.userInput && ctx_r1096._send(); });
    ɵɵelementEnd();
    ɵɵelementStart(8, "button", 11);
    ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_Template_button_click_8_listener() { ɵɵrestoreView(_r1095); const ctx_r1097 = ɵɵnextContext(); return ctx_r1097._send(); });
    ɵɵtext(9, "Envoyer ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(10, "div", 12);
    ɵɵelement(11, "img", 13);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1074 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵproperty("ngForOf", ctx_r1074.displayData);
    ɵɵadvance(3);
    ɵɵproperty("ngModel", ctx_r1074.userInput);
    ɵɵadvance(1);
    ɵɵstyleMap(ɵɵpureFunction2(6, _c0$1, ctx_r1074.assets == null ? null : ctx_r1074.assets.ColorSet == null ? null : ctx_r1074.assets.ColorSet.Primary, ctx_r1074.assets == null ? null : ctx_r1074.assets.ColorSet == null ? null : ctx_r1074.assets.ColorSet.Secondary));
    ɵɵproperty("disabled", !ctx_r1074.userInput);
    ɵɵadvance(3);
    ɵɵproperty("src", ctx_r1074.assets.FullSizeLogo, ɵɵsanitizeUrl);
} }
const _c1$1 = function (a0) { return { backgroundImage: a0 }; };
class DesktopFullScreenComponent {
    constructor() {
        this.firstVisit = false;
        this.ready = new EventEmitter(false);
        this.send = new EventEmitter(null);
        this.sendBotCommand = new EventEmitter(null);
    }
    ngOnInit() {
        this.ready.subscribe((ready) => {
            this.firstVisit = false;
        });
    }
    _send() {
        const userData = {
            message: this.userInput,
            date: new Date().toLocaleTimeString(navigator.language, {
                hour: '2-digit',
                minute: '2-digit'
            })
        };
        this.send.emit(userData);
        this.userInput = null;
    }
    byPassUserInput(botdata) {
        this.sendBotCommand.emit(botdata);
    }
}
DesktopFullScreenComponent.ɵfac = function DesktopFullScreenComponent_Factory(t) { return new (t || DesktopFullScreenComponent)(); };
DesktopFullScreenComponent.ɵcmp = ɵɵdefineComponent({ type: DesktopFullScreenComponent, selectors: [["bot-full-screen"]], inputs: { assets: "assets", firstVisit: "firstVisit", firstUsageStory: "firstUsageStory", displayData: "displayData" }, outputs: { ready: "ready", send: "send", sendBotCommand: "sendBotCommand" }, decls: 4, vars: 6, consts: [["xmlns", "http://www.w3.org/1999/html", 1, "bot-container"], [1, "bot-view"], [4, "ngIf"], [3, "firstUsageStory", "assets", "ready"], [1, "bot-chat-wrapper"], [1, "bot-discussion-wrapper"], [1, "bot-chat"], [4, "ngFor", "ngForOf"], [1, "bot-input-wrapper"], [1, "bot-input"], ["type", "text", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "bot-button", 3, "disabled", "click"], [1, "bot-logo"], [3, "src"], [1, "user-input"], [1, "data"], [1, "time"], [1, "bot-answer"], [3, "innerHTML"], [1, "bot-button", 3, "innerHTML", "click"]], template: function DesktopFullScreenComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_2_Template, 2, 2, "ng-container", 2);
        ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_Template, 12, 9, "ng-container", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵstyleMap(ɵɵpureFunction1(4, _c1$1, "url(" + ctx.assets.Background + ")"));
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.firstVisit && ctx.firstUsageStory);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.firstVisit);
    } }, directives: [NgIf, FirstVisitComponent, NgForOf, DefaultValueAccessor, NgControlStatus, NgModel], pipes: [SafeHtmlPipe], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DesktopFullScreenComponent, [{
        type: Component,
        args: [{
                selector: 'bot-full-screen',
                templateUrl: './desktop-full-screen.component.html',
                styleUrls: ['./desktop-full-screen.component.css']
            }]
    }], function () { return []; }, { assets: [{
            type: Input
        }], firstVisit: [{
            type: Input
        }], firstUsageStory: [{
            type: Input
        }], displayData: [{
            type: Input
        }], ready: [{
            type: Output
        }], send: [{
            type: Output
        }], sendBotCommand: [{
            type: Output
        }] }); })();

function KonversoComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, " Mobile\n");
    ɵɵelementContainerEnd();
} }
function KonversoComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r1071 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "bot-full-screen", 1);
    ɵɵlistener("send", function KonversoComponent_ng_container_1_Template_bot_full_screen_send_1_listener($event) { ɵɵrestoreView(_r1071); const ctx_r1070 = ɵɵnextContext(); return ctx_r1070.send($event); })("sendBotCommand", function KonversoComponent_ng_container_1_Template_bot_full_screen_sendBotCommand_1_listener($event) { ɵɵrestoreView(_r1071); const ctx_r1072 = ɵɵnextContext(); return ctx_r1072.sendBotCommand($event); });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1069 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("assets", ctx_r1069.assets)("firstVisit", ctx_r1069.firstVisit)("firstUsageStory", ctx_r1069.firstUsageStory)("displayData", ctx_r1069.History);
} }
// @ts-ignore
class KonversoComponent {
    constructor(service) {
        this.service = service;
        this.ready = new EventEmitter();
    }
    ngOnInit() {
        this.isMobile = this._isMobile();
        this.assets = this.service.assets;
        this.firstVisit = this.service.firstVisit;
        this.firstUsageStory = this.service.firstUsageStory;
        this.History = [];
        if (this.service.ColorSet) {
            this.colorSet = this.service.ColorSet;
        }
        this.ready.subscribe((ready) => {
            if (ready) {
                this.firstVisit = false;
                this.service.firstVisit = false;
            }
        });
    }
    send($event) {
        return __awaiter(this, void 0, void 0, function* () {
            this.History.push($event);
            const index = this.History.length - 1;
            const response = yield this.service.send($event.message).catch((err) => {
                console.log('We got an error ', err);
                // @ts-ignore
                this.History[index].error = true;
            });
            if (response && response.response) {
                console.log(response);
                this.History.push(response.response);
            }
        });
    }
    sendBotCommand($event) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.service.send($event).catch((err) => {
                console.log('We got an error ', err);
            });
            if (response && response.response) {
                console.log(response);
                this.History.push(response.response);
            }
        });
    }
    _isMobile() {
        const isMobile = {
            Android: () => {
                return !!navigator.userAgent.match(/Android/i);
            },
            BlackBerry: () => {
                return !!navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: () => {
                return !!navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: () => {
                return !!navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: () => {
                return !!navigator.userAgent.match(/IEMobile/i) || !!navigator.userAgent.match(/WPDesktop/i);
            },
            any: () => {
                return !!(isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };
        return isMobile.any();
    }
}
KonversoComponent.ɵfac = function KonversoComponent_Factory(t) { return new (t || KonversoComponent)(ɵɵdirectiveInject(KonversoService)); };
KonversoComponent.ɵcmp = ɵɵdefineComponent({ type: KonversoComponent, selectors: [["ngx-konverso"]], outputs: { ready: "ready" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "assets", "firstVisit", "firstUsageStory", "displayData", "send", "sendBotCommand"]], template: function KonversoComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, KonversoComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
        ɵɵtemplate(1, KonversoComponent_ng_container_1_Template, 2, 4, "ng-container", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.isMobile);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.isMobile);
    } }, directives: [NgIf, DesktopFullScreenComponent], styles: ["ngx-konverso{overflow:hidden;display:block;min-height:100%;height:100%}  ngx-konverso bot-first-visit,   ngx-konverso bot-full-screen{display:table;min-height:100%;height:100%;width:100%}  ngx-konverso bot-full-screen button:focus,   ngx-konverso bot-full-screen input:focus{outline:0!important}  ngx-konverso bot-full-screen .bot-button>*{position:relative}  ngx-konverso bot-full-screen .button-lg{padding:10px!important;font-size:16px!important}  ngx-konverso bot-full-screen .bot-button{cursor:pointer;opacity:.9;min-width:150px;border-radius:25px;padding:5px;position:relative;display:block;margin:30px auto;overflow:hidden;border-width:0;outline:0;box-shadow:0 1px 4px rgba(0,0,0,.6);transition:opacity .3s}  ngx-konverso bot-full-screen .bot-button span{display:block;padding:12px 24px}  ngx-konverso bot-full-screen .bot-button:focus,   ngx-konverso bot-full-screen .bot-button:hover{opacity:1}  ngx-konverso bot-full-screen .bot-button:before{content:\"\";position:absolute;top:50%;left:50%;display:block;width:0;padding-top:0;border-radius:100%;background-color:rgba(236,240,241,.3);transform:translate(-50%,-50%)}  ngx-konverso bot-full-screen .bot-button:active:before{width:120%;padding-top:120%;transition:width .2s ease-out,padding-top .2s ease-out}  ngx-konverso bot-full-screen .bot-container{font-family:nexa,Roboto;width:100%;height:100%;display:table;margin:auto;background-size:contain}  ngx-konverso bot-full-screen .bot-container>.bot-view{background-size:contain;width:auto;margin:auto;height:100%;display:table-cell;vertical-align:middle}  ngx-konverso bot-full-screen .bot-container>.bot-view img{margin:auto}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper{padding-top:5%;width:100%;margin:auto;vertical-align:middle}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:20px;text-align:center}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step{margin-top:5%;text-align:center}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step .bot-init-dot{border:1px solid;display:inline-block;width:12px;height:12px;margin-left:2.5px;margin-right:2.5px;border-radius:50%}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-button-wrapper{display:block;width:100%;text-align:center;margin-top:8%;margin-right:auto;margin-left:auto}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper{width:100%;display:table;height:100%}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo{max-width:100px;position:absolute;top:2%;left:2%}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo img{max-width:100px}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper{width:100%;max-width:600px;height:calc(85vh - 50px);padding:15px 30px;margin:0 auto;overflow-y:scroll;transform:rotate(180deg);direction:rtl}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat{overflow-x:hidden;display:flex;flex-direction:column-reverse;justify-content:flex-end}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer{font-size:15px;padding:10px 20px;border-radius:25px;color:#000;background-color:transparent;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;margin:15px 0;word-break:break-all;transform:rotate(180deg);direction:ltr}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input{font-size:15px;transform:rotate(180deg);direction:ltr}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .data{padding:10px 20px;border-radius:25px 25px 0;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:15px 0 15px auto;background-color:#00a9de}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .time{font-weight:300;position:absolute;width:200px;display:block;margin-left:95%;bottom:-1%;color:#000;font-size:10px}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper{display:table;width:100%;margin:auto}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5%}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input input{display:inline-block;padding:10px;border-radius:25px;color:#000;width:60%;margin-right:15px;border:1px solid rgba(0,0,0,.2)}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input button{display:inline-block;width:calc(36% - 15px);padding:11px}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(KonversoComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-konverso',
                templateUrl: 'konverso.component.html',
                styleUrls: ['../../assets/main.scss']
            }]
    }], function () { return [{ type: KonversoService }]; }, { ready: [{
            type: Output
        }] }); })();

// @ts-ignore
class KonversoModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('KonversoModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: KonversoModule,
            providers: [
                { provide: '__NgxKonverso__', useValue: config },
                KonversoService
            ]
        };
    }
}
KonversoModule.ɵmod = ɵɵdefineNgModule({ type: KonversoModule });
KonversoModule.ɵinj = ɵɵdefineInjector({ factory: function KonversoModule_Factory(t) { return new (t || KonversoModule)(ɵɵinject(KonversoModule, 12)); }, providers: [KonversoService], imports: [[
            FormsModule,
            HttpClientModule,
            CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(KonversoModule, { declarations: [KonversoComponent, DesktopFullScreenComponent, FirstVisitComponent, SafeHtmlPipe], imports: [FormsModule,
        HttpClientModule,
        CommonModule], exports: [KonversoComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(KonversoModule, [{
        type: NgModule,
        args: [{
                declarations: [KonversoComponent, DesktopFullScreenComponent, FirstVisitComponent, SafeHtmlPipe],
                imports: [
                    FormsModule,
                    HttpClientModule,
                    CommonModule,
                ],
                providers: [KonversoService],
                exports: [KonversoComponent]
            }]
    }], function () { return [{ type: KonversoModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { KonversoComponent, KonversoModule, KonversoService };
//# sourceMappingURL=konverso.js.map
