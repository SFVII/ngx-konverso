import { __awaiter } from 'tslib';
import { EventEmitter, ɵɵinject, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, Inject, ɵɵdirectiveInject, ɵɵdefinePipe, Pipe, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵelementEnd, ɵɵstyleMap, ɵɵpureFunction2, ɵɵdefineComponent, ɵɵelementContainerStart, ɵɵelement, ɵɵpipe, ɵɵtemplate, ɵɵtext, ɵɵelementContainerEnd, ɵɵadvance, ɵɵproperty, ɵɵpipeBind1, ɵɵsanitizeHtml, ɵɵpureFunction1, ɵɵtextInterpolate, Component, Input, Output, ɵɵtextInterpolate1, ɵɵelementContainer, ɵɵpureFunction0, ɵɵreference, ɵɵsanitizeUrl, ɵɵNgOnChangesFeature, ɵɵclassMap, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { render } from 'mustache';
import { NgForOf, NgIf, NgStyle, CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { DefaultValueAccessor, NgControlStatus, NgModel, MaxLengthValidator, FormsModule } from '@angular/forms';

class KonversoService {
    constructor(config, http) {
        this.http = http;
        this.authentication = new EventEmitter();
        this.firstVisit = false;
        this.AssistantMode = false;
        this.readyState = false;
        this.token = new BehaviorSubject(null);
        // tslint:disable-next-line:variable-name
        this._token = this.token.asObservable();
        this.lang = new BehaviorSubject('');
        this.customData = new BehaviorSubject(null);
        this.emulationTrigger = new BehaviorSubject(null);
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
                        this.http.post(this.endpoint + '?t=' + new Date().getTime(), preparedData, options)
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
     * Emulate user entry Query To backend server and get a response
     * @param query
     */
    sendTriggerEmulation(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.send(query).catch((err) => {
                console.log('error trigger emulation', err);
            });
            if (response) {
                this.emulationTrigger.next(Object.assign({ input: query }, response));
            }
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
                //'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': window.location.origin,
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
                this.authentication.subscribe((user) => {
                    var _a, _b, _c, _d, _e, _f, _g, _h;
                    if (!user.lang && config.lang) {
                        user.lang = config.lang;
                    }
                    this.locale = (_a = user) === null || _a === void 0 ? void 0 : _a.lang;
                    this.lang.next(this.locale);
                    if (config.InputPlaceHolder && config.InputPlaceHolder[this.locale]) {
                        this.PlaceHolder = config.InputPlaceHolder[this.locale];
                    }
                    if (config.InputNumberPlaceHolder && config.InputNumberPlaceHolder[this.locale]) {
                        this.NumberPlaceHolder = config.InputNumberPlaceHolder[this.locale];
                    }
                    if (config.CustomWelcome && config.BotInitMessage.Welcome && config.BotInitMessage.Welcome[this.locale]) {
                        this.Welcome = render(config.BotInitMessage.Welcome[this.locale], user);
                    }
                    if ((_b = user) === null || _b === void 0 ? void 0 : _b.token) {
                        this.token.next((_c = user) === null || _c === void 0 ? void 0 : _c.token);
                    }
                    if ((_d = user) === null || _d === void 0 ? void 0 : _d.firstVisit) {
                        this.firstVisit = true;
                        delete user.firstVisit;
                        if (((_f = (_e = config) === null || _e === void 0 ? void 0 : _e.BotInitMessage) === null || _f === void 0 ? void 0 : _f.FirstUsage) &&
                            this.locale && ((_h = (_g = config) === null || _g === void 0 ? void 0 : _g.BotInitMessage) === null || _h === void 0 ? void 0 : _h.FirstUsage[this.locale])) {
                            this.firstUsageStory = [];
                            for (const history of config.BotInitMessage.FirstUsage[this.locale]) {
                                this.firstUsageStory.push(render(history, user));
                            }
                        }
                    }
                    this.user = user;
                    this.readyState = true;
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
    }
    /**
     * @param query
     * @private
     * prepare set data to push to backend server
     */
    buildQuery(query) {
        // @ts-ignore
        const custom = this.customData.getValue();
        return Object.assign(Object.assign(Object.assign({}, custom), this.user), { query: query.replace(/\s+/g, ' ').trim(), isSending: true });
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

const BotMessageSample = {
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
const DotLoaderTemplate = (color) => `<div class="loading-dots">
<div class="loading-dots--dot" style="background-color: ${color}"></div>
  <div class="loading-dots--dot" style="background-color: ${color}"></div>
  <div class="loading-dots--dot" style="background-color: ${color}"></div>
  </div>`;

class TranslateService {
    constructor() {
        this.lang = {
            'fr': {
                'GO': `C'est parti`,
                'SEND': 'Envoyer',
                'SELECT': 'Vous devez sélectionner une réponse',
            },
            'en': {
                'GO': `Let's go`,
                'SEND': 'Send',
                'SELECT': 'You must select an answer',
            }
        };
    }
    translate(l, word) {
        return this.lang[l][word];
    }
}
TranslateService.ɵfac = function TranslateService_Factory(t) { return new (t || TranslateService)(); };
TranslateService.ɵprov = ɵɵdefineInjectable({ token: TranslateService, factory: TranslateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(TranslateService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

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
function FirstVisitComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r83 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 9);
    ɵɵlistener("click", function FirstVisitComponent_span_8_Template_span_click_0_listener() { ɵɵrestoreView(_r83); const pos_r81 = ctx.index; const ctx_r82 = ɵɵnextContext(); return ctx_r82.goTo(pos_r81); });
    ɵɵelementEnd();
} if (rf & 2) {
    const pos_r81 = ctx.index;
    const ctx_r79 = ɵɵnextContext();
    ɵɵstyleMap(pos_r81 === ctx_r79.position ? ɵɵpureFunction2(2, _c0, ctx_r79.assets == null ? null : ctx_r79.assets.ColorSet == null ? null : ctx_r79.assets.ColorSet.Primary, ctx_r79.assets == null ? null : ctx_r79.assets.ColorSet == null ? null : ctx_r79.assets.ColorSet.Primary) : ɵɵpureFunction2(5, _c0, ctx_r79.assets == null ? null : ctx_r79.assets.ColorSet == null ? null : ctx_r79.assets.ColorSet.Secondary, ctx_r79.assets == null ? null : ctx_r79.assets.ColorSet == null ? null : ctx_r79.assets.ColorSet.Primary));
} }
const _c1 = function (a1) { return { backgroundColor: "#171F26", color: a1 }; };
class FirstVisitComponent {
    constructor(translate, service) {
        this.service = service;
        this.ready = new EventEmitter();
        this.position = 0;
        this.current = '';
        this.go = '';
        service.lang.subscribe((r) => {
            if (service.locale) {
                this.go = translate.translate(service.locale, 'GO');
            }
        });
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
        //console.log('OOOKKKK')
        this.ready.emit(true);
    }
}
FirstVisitComponent.ɵfac = function FirstVisitComponent_Factory(t) { return new (t || FirstVisitComponent)(ɵɵdirectiveInject(TranslateService), ɵɵdirectiveInject(KonversoService)); };
FirstVisitComponent.ɵcmp = ɵɵdefineComponent({ type: FirstVisitComponent, selectors: [["bot-first-visit"]], inputs: { firstUsageStory: "firstUsageStory", assets: "assets" }, outputs: { ready: "ready" }, decls: 12, vars: 9, consts: [[1, "bot-logo-init-wrapper"], [1, "m-carl-notification"], [1, "m-carl-notification-cue", "m-cue"], ["id", "bot-icon", 1, "a-cue-icon"], [1, "bot-init-text", 3, "innerHTML"], [1, "bot-init-bullet-step"], ["class", "bot-init-dot", 3, "style", "click", 4, "ngFor", "ngForOf"], [1, "bot-init-button-wrapper"], ["mat-button", "", 1, "bot-button", "button-lg", 3, "click"], [1, "bot-init-dot", 3, "click"]], template: function FirstVisitComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementContainerStart(0);
        ɵɵelementStart(1, "div", 0);
        ɵɵelementStart(2, "div", 1);
        ɵɵelementStart(3, "div", 2);
        ɵɵelement(4, "div", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(5, "div", 4);
        ɵɵpipe(6, "safeHtml");
        ɵɵelementStart(7, "div", 5);
        ɵɵtemplate(8, FirstVisitComponent_span_8_Template, 1, 8, "span", 6);
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 7);
        ɵɵelementStart(10, "button", 8);
        ɵɵlistener("click", function FirstVisitComponent_Template_button_click_10_listener() { return ctx.start(); });
        ɵɵtext(11);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementContainerEnd();
    } if (rf & 2) {
        ɵɵadvance(5);
        ɵɵproperty("innerHTML", ɵɵpipeBind1(6, 5, ctx.current), ɵɵsanitizeHtml);
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ctx.firstUsageStory);
        ɵɵadvance(2);
        ɵɵstyleMap(ɵɵpureFunction1(7, _c1, ctx.assets == null ? null : ctx.assets.ColorSet == null ? null : ctx.assets.ColorSet.Secondary));
        ɵɵadvance(1);
        ɵɵtextInterpolate(ctx.go);
    } }, directives: [NgForOf], pipes: [SafeHtmlPipe], styles: ["@keyframes pulsebot{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}@-webkit-keyframes pulsebot{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}.bot-listening[_ngcontent-%COMP%]{height:100%;background:0 0}.bot-listening[_ngcontent-%COMP%]:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:0 0}.bot-listening[_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:0 0}.m-carl-notification[_ngcontent-%COMP%]{position:relative;top:50%}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-icon[_ngcontent-%COMP%]{position:absolute;width:100px;height:100px;transform:translateX(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9d107d 1px,#9d107d 3%,#580b58 60%);box-shadow:0 0 10px 5px rgba(0,0,0,.25);-webkit-animation:3.5s infinite pulsebot;animation:3.5s infinite pulsebot}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice[_ngcontent-%COMP%]{transform-origin:center center;height:190px;width:190px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]{position:absolute;width:150px;height:150px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1[_ngcontent-%COMP%]{background:#9a147f!important}.voice2[_ngcontent-%COMP%]{background:#773691!important}.voice3[_ngcontent-%COMP%]{background:#4e5ca8!important}.voice4[_ngcontent-%COMP%]{background:#abc1f1!important}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(1){animation:6s infinite reverse both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(2){-webkit-animation:7s infinite both hovering;animation:7s infinite both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(3){animation:8s infinite reverse both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(4){-webkit-animation:9s infinite both hovering;animation:9s infinite both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(5){animation:10s infinite reverse both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .speaking[_ngcontent-%COMP%]{-webkit-animation:2s infinite pulse;animation:2s infinite pulse}.m-carl-notification[_ngcontent-%COMP%]   .a-caption[_ngcontent-%COMP%]{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification[_ngcontent-%COMP%]   .a-caption.speaking[_ngcontent-%COMP%]{text-shadow:0 0 0;opacity:.4}@-webkit-keyframes hovering{from{transform:rotate(0) translateX(18px) rotate(0)}to{transform:rotate(360deg) translateX(18px) rotate(-360deg)}}@keyframes hovering{from{transform:rotate(0) translateX(18px) rotate(0)}to{transform:rotate(360deg) translateX(18px) rotate(-360deg)}}@-webkit-keyframes pulse{0%,40%,60%{transform:scale(1)}10%,80%{transform:scale(1.15)}15%,50%,90%{transform:scale(1.25)}100%,20%{transform:scale(1.05)}30%,65%{transform:scale(1.3)}55%{transform:scale(1.1)}70%{transform:scale(1.2)}}@keyframes pulse{0%,40%,60%{transform:scale(1)}10%,80%{transform:scale(1.15)}15%,50%,90%{transform:scale(1.25)}100%,20%{transform:scale(1.05)}30%,65%{transform:scale(1.3)}55%{transform:scale(1.1)}70%{transform:scale(1.2)}}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(FirstVisitComponent, [{
        type: Component,
        args: [{
                selector: 'bot-first-visit',
                templateUrl: './first-visit.component.html',
                styleUrls: ['./first-visit.component.scss']
            }]
    }], function () { return [{ type: TranslateService }, { type: KonversoService }]; }, { firstUsageStory: [{
            type: Input
        }], assets: [{
            type: Input
        }], ready: [{
            type: Output
        }] }); })();

function DesktopFullScreenComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "bot-first-visit", 3);
    ɵɵlistener("ready", function DesktopFullScreenComponent_ng_container_2_Template_bot_first_visit_ready_1_listener($event) { ɵɵrestoreView(_r3); const ctx_r2 = ɵɵnextContext(); return ctx_r2.emit($event); });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("firstUsageStory", ctx_r0.firstUsageStory)("assets", ctx_r0.assets);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 17);
    ɵɵelement(1, "div", 18);
    ɵɵelement(2, "div", 19);
    ɵɵelement(3, "div", 20);
    ɵɵelement(4, "div", 21);
    ɵɵelement(5, "div", 22);
    ɵɵelementEnd();
} }
const _c0$1 = function (a0) { return { color: a0 }; };
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 24);
    ɵɵelementStart(1, "div", 25);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "span", 26);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵstyleMap(ɵɵpureFunction1(4, _c0$1, ctx_r11.assets == null ? null : ctx_r11.assets.ColorSet == null ? null : ctx_r11.assets.ColorSet.Secondary));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r11.LastUserInput.message, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r11.LastUserInput.date);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_div_1_Template, 5, 6, "div", 23);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r7.LastUserInput && (ctx_r7.LastUserInput == null ? null : ctx_r7.LastUserInput.message) != "");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 30);
    ɵɵpipe(1, "safeHtml");
} if (rf & 2) {
    const ctx_r14 = ɵɵnextContext(5);
    ɵɵproperty("innerHTML", ɵɵpipeBind1(1, 1, ctx_r14.LastBotAnswer.text), ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 31);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_span_1_Template, 2, 3, "span", 28);
    ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_span_2_Template, 1, 0, "span", 29);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r12.LastBotAnswer.text.includes("loading-dots") && ctx_r12.changed && ctx_r12.showText);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r12.LastBotAnswer.text.includes("loading-dots"));
} }
const _c1$1 = function (a0, a1) { return { borderColor: a0, color: a1 }; };
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 36);
    ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_button_1_Template_button_click_0_listener() { ɵɵrestoreView(_r25); const ctx_r24 = ɵɵnextContext(2); const suggest_r17 = ctx_r24.$implicit; const i_r18 = ctx_r24.index; const ctx_r23 = ɵɵnextContext(5); return ctx_r23.byPassUserInput(suggest_r17 == null ? null : suggest_r17.value == null ? null : suggest_r17.value.onClick, i_r18); });
    ɵɵelementEnd();
} if (rf & 2) {
    const suggest_r17 = ɵɵnextContext(2).$implicit;
    const ctx_r20 = ɵɵnextContext(5);
    ɵɵstyleMap(ɵɵpureFunction2(3, _c1$1, ctx_r20.assets == null ? null : ctx_r20.assets.ColorSet == null ? null : ctx_r20.assets.ColorSet.Primary, ctx_r20.assets == null ? null : ctx_r20.assets.ColorSet == null ? null : ctx_r20.assets.ColorSet.Primary));
    ɵɵproperty("innerHTML", suggest_r17.label || (suggest_r17.value == null ? null : suggest_r17.value.displayedMessage) || (suggest_r17.value == null ? null : suggest_r17.value.title), ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 37);
    ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_button_2_Template_button_click_0_listener() { ɵɵrestoreView(_r29); const ctx_r28 = ɵɵnextContext(2); const suggest_r17 = ctx_r28.$implicit; const i_r18 = ctx_r28.index; const ctx_r27 = ɵɵnextContext(5); return ctx_r27.byPassUserInput(suggest_r17 == null ? null : suggest_r17.value == null ? null : suggest_r17.value.onClick, i_r18); });
    ɵɵelementEnd();
} if (rf & 2) {
    const suggest_r17 = ɵɵnextContext(2).$implicit;
    const ctx_r21 = ɵɵnextContext(5);
    ɵɵstyleMap(ɵɵpureFunction2(3, _c1$1, ctx_r21.assets == null ? null : ctx_r21.assets.ColorSet == null ? null : ctx_r21.assets.ColorSet.Primary, ctx_r21.assets == null ? null : ctx_r21.assets.ColorSet == null ? null : ctx_r21.assets.ColorSet.Primary));
    ɵɵproperty("innerHTML", suggest_r17.label || (suggest_r17.value == null ? null : suggest_r17.value.displayedMessage) || (suggest_r17.value == null ? null : suggest_r17.value.title), ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r33 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 38);
    ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_button_3_Template_button_click_0_listener() { ɵɵrestoreView(_r33); const ctx_r32 = ɵɵnextContext(2); const suggest_r17 = ctx_r32.$implicit; const i_r18 = ctx_r32.index; const ctx_r31 = ɵɵnextContext(5); return ctx_r31.byPassUserInput(suggest_r17 == null ? null : suggest_r17.value == null ? null : suggest_r17.value.onClick, i_r18); });
    ɵɵelementEnd();
} if (rf & 2) {
    const suggest_r17 = ɵɵnextContext(2).$implicit;
    const ctx_r22 = ɵɵnextContext(5);
    ɵɵstyleMap(ɵɵpureFunction2(3, _c1$1, ctx_r22.assets == null ? null : ctx_r22.assets.ColorSet == null ? null : ctx_r22.assets.ColorSet.Primary, ctx_r22.assets == null ? null : ctx_r22.assets.ColorSet == null ? null : ctx_r22.assets.ColorSet.Primary));
    ɵɵproperty("innerHTML", suggest_r17.label || (suggest_r17.value == null ? null : suggest_r17.value.displayedMessage) || (suggest_r17.value == null ? null : suggest_r17.value.title), ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_button_1_Template, 1, 6, "button", 33);
    ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_button_2_Template, 1, 6, "button", 34);
    ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_button_3_Template, 1, 6, "button", 35);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const suggest_r17 = ɵɵnextContext().$implicit;
    const ctx_r19 = ɵɵnextContext(5);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (suggest_r17.value == null ? null : suggest_r17.value.title) == "Terminer" && ctx_r19.changed || (suggest_r17.value == null ? null : suggest_r17.value.title) == "Quit" && ctx_r19.changed);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (suggest_r17.value == null ? null : suggest_r17.value.title) == "Nouvelle Demande" && ctx_r19.changed || (suggest_r17.value == null ? null : suggest_r17.value.title) == "New Request" && ctx_r19.changed);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (suggest_r17.value == null ? null : suggest_r17.value.title) && (suggest_r17.value == null ? null : suggest_r17.value.title) != "Terminer" && (suggest_r17.value == null ? null : suggest_r17.value.title) != "Quit" && (suggest_r17.value == null ? null : suggest_r17.value.title) != "Nouvelle Demande" && (suggest_r17.value == null ? null : suggest_r17.value.title) != "New Request" && ctx_r19.changed);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_ng_container_1_Template, 4, 3, "ng-container", 2);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const suggest_r17 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", suggest_r17.format === "button");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_ng_container_1_Template, 2, 1, "ng-container", 32);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r13 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r13.LastBotAnswer.medias[0].required_actions);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 27);
    ɵɵelementContainer(2);
    ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_3_Template, 3, 2, "ng-container", 2);
    ɵɵtemplate(4, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_ng_container_4_Template, 2, 1, "ng-container", 2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(3);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r8.LastBotAnswer.text);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r8.LastBotAnswer.medias && ctx_r8.LastBotAnswer.medias.length && ctx_r8.LastBotAnswer.medias[0].required_actions && ctx_r8.LastBotAnswer.medias[0].required_actions.length > 0 && !ctx_r8.LastBotAnswer.text.includes("loading-dots"));
} }
function DesktopFullScreenComponent_ng_container_3_div_2_div_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r39 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "input", 41);
    ɵɵlistener("ngModelChange", function DesktopFullScreenComponent_ng_container_3_div_2_div_10_ng_container_1_Template_input_ngModelChange_1_listener($event) { ɵɵrestoreView(_r39); const ctx_r38 = ɵɵnextContext(4); return ctx_r38.userInput = $event; })("keyup.enter", function DesktopFullScreenComponent_ng_container_3_div_2_div_10_ng_container_1_Template_input_keyup_enter_1_listener() { ɵɵrestoreView(_r39); const ctx_r40 = ɵɵnextContext(4); return ctx_r40.userInput && ctx_r40._send(); })("keyup", function DesktopFullScreenComponent_ng_container_3_div_2_div_10_ng_container_1_Template_input_keyup_1_listener($event) { ɵɵrestoreView(_r39); const ctx_r41 = ɵɵnextContext(4); return ctx_r41.userWriting($event); });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r36 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("type", ctx_r36.inputType)("ngModel", ctx_r36.userInput)("max", ctx_r36.inputLimit)("placeholder", ctx_r36.currentPlaceHolder);
} }
function DesktopFullScreenComponent_ng_container_3_div_2_div_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r43 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "input", 42);
    ɵɵlistener("ngModelChange", function DesktopFullScreenComponent_ng_container_3_div_2_div_10_ng_container_2_Template_input_ngModelChange_1_listener($event) { ɵɵrestoreView(_r43); const ctx_r42 = ɵɵnextContext(4); return ctx_r42.userInput = $event; })("keyup.enter", function DesktopFullScreenComponent_ng_container_3_div_2_div_10_ng_container_2_Template_input_keyup_enter_1_listener() { ɵɵrestoreView(_r43); const ctx_r44 = ɵɵnextContext(4); return ctx_r44.userInput && ctx_r44._send(); })("keyup", function DesktopFullScreenComponent_ng_container_3_div_2_div_10_ng_container_2_Template_input_keyup_1_listener($event) { ɵɵrestoreView(_r43); const ctx_r45 = ɵɵnextContext(4); return ctx_r45.userWriting($event); });
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r37 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("type", ctx_r37.inputType)("ngModel", ctx_r37.userInput)("maxlength", ctx_r37.inputLimit)("placeholder", ctx_r37.currentPlaceHolder);
} }
const _c2 = function (a0, a1) { return { backgroundColor: a0, color: a1 }; };
function DesktopFullScreenComponent_ng_container_3_div_2_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r47 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 39);
    ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_2_div_10_ng_container_1_Template, 2, 4, "ng-container", 2);
    ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_div_10_ng_container_2_Template, 2, 4, "ng-container", 2);
    ɵɵelementStart(3, "button", 40);
    ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_2_div_10_Template_button_click_3_listener() { ɵɵrestoreView(_r47); const ctx_r46 = ɵɵnextContext(3); return ctx_r46._send(); });
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.inputType === "number");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.inputType === "text");
    ɵɵadvance(1);
    ɵɵstyleMap(ɵɵpureFunction2(6, _c2, ctx_r9.assets == null ? null : ctx_r9.assets.ColorSet == null ? null : ctx_r9.assets.ColorSet.Primary, ctx_r9.assets == null ? null : ctx_r9.assets.ColorSet == null ? null : ctx_r9.assets.ColorSet.Secondary));
    ɵɵproperty("disabled", !ctx_r9.userInput);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", ctx_r9.sendBtn, " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_2_div_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 43);
    ɵɵelementStart(1, "i");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r10.select);
} }
const _c3 = function () { return { "height": "40%" }; };
const _c4 = function () { return { "transform": "translateY(-10vh)" }; };
function DesktopFullScreenComponent_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵelementStart(1, "div", 8);
    ɵɵelementStart(2, "div", 9);
    ɵɵelementStart(3, "div", 10);
    ɵɵtemplate(4, DesktopFullScreenComponent_ng_container_3_div_2_div_4_Template, 6, 0, "div", 11);
    ɵɵelement(5, "div", 12);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 13);
    ɵɵtemplate(7, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_7_Template, 2, 1, "ng-container", 2);
    ɵɵtemplate(8, DesktopFullScreenComponent_ng_container_3_div_2_ng_container_8_Template, 5, 2, "ng-container", 2);
    ɵɵelementStart(9, "div", 14);
    ɵɵtemplate(10, DesktopFullScreenComponent_ng_container_3_div_2_div_10_Template, 5, 9, "div", 15);
    ɵɵtemplate(11, DesktopFullScreenComponent_ng_container_3_div_2_div_11_Template, 3, 1, "div", 16);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngStyle", ɵɵpureFunction0(7, _c3));
    ɵɵadvance(1);
    ɵɵproperty("ngStyle", ɵɵpureFunction0(8, _c4));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r4.botListening);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r4.LastUserInput);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.LastBotAnswer);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r4.disableUserInput && ctx_r4.showInput);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r4.disableUserInput);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 24);
    ɵɵelementStart(2, "div", 25);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 26);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r52 = ɵɵnextContext().$implicit;
    const ctx_r53 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵstyleMap(ɵɵpureFunction2(4, _c2, ctx_r53.assets == null ? null : ctx_r53.assets.ColorSet == null ? null : ctx_r53.assets.ColorSet.Primary, ctx_r53.assets == null ? null : ctx_r53.assets.ColorSet == null ? null : ctx_r53.assets.ColorSet.Secondary));
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", entry_r52.message, " ");
    ɵɵadvance(2);
    ɵɵtextInterpolate(entry_r52.date);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "span", 30);
    ɵɵpipe(1, "safeHtml");
} if (rf & 2) {
    const entry_r52 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("innerHTML", ɵɵpipeBind1(1, 1, entry_r52.text), ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_span_1_Template, 2, 3, "span", 28);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r56 = ɵɵnextContext(5);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r56.changed);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r66 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 52);
    ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_button_1_Template_button_click_0_listener() { ɵɵrestoreView(_r66); const suggest_r61 = ɵɵnextContext(2).$implicit; const ctx_r64 = ɵɵnextContext(6); return ctx_r64.byPassUserInput(suggest_r61 == null ? null : suggest_r61.value == null ? null : suggest_r61.value.onClick); });
    ɵɵelementEnd();
} if (rf & 2) {
    const suggest_r61 = ɵɵnextContext(2).$implicit;
    const ctx_r63 = ɵɵnextContext(6);
    ɵɵstyleMap(ɵɵpureFunction2(3, _c1$1, ctx_r63.assets == null ? null : ctx_r63.assets.ColorSet == null ? null : ctx_r63.assets.ColorSet.Primary, ctx_r63.assets == null ? null : ctx_r63.assets.ColorSet == null ? null : ctx_r63.assets.ColorSet.Primary));
    ɵɵproperty("innerHTML", suggest_r61.label || (suggest_r61.value == null ? null : suggest_r61.value.displayedMessage) || (suggest_r61.value == null ? null : suggest_r61.value.title), ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_button_1_Template, 1, 6, "button", 51);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r62 = ɵɵnextContext(7);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r62.changed);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const suggest_r61 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", suggest_r61.format === "button");
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 32);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r52 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", entry_r52.medias[0].required_actions);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 27);
    ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 2);
    ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r52 = ɵɵnextContext().$implicit;
    ɵɵadvance(2);
    ɵɵproperty("ngIf", entry_r52.text);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", entry_r52.medias && entry_r52.medias.length && entry_r52.medias[0].required_actions && entry_r52.medias[0].required_actions.length);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_1_Template, 6, 7, "ng-container", 2);
    ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_ng_container_2_Template, 4, 2, "ng-container", 2);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r52 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", entry_r52.date);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !entry_r52.date);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_div_7_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r72 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 40);
    ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_button_2_Template_button_click_0_listener() { ɵɵrestoreView(_r72); const ctx_r71 = ɵɵnextContext(4); return ctx_r71._send(); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r70 = ɵɵnextContext(4);
    ɵɵstyleMap(ɵɵpureFunction2(4, _c2, ctx_r70.assets == null ? null : ctx_r70.assets.ColorSet == null ? null : ctx_r70.assets.ColorSet.Primary, ctx_r70.assets == null ? null : ctx_r70.assets.ColorSet == null ? null : ctx_r70.assets.ColorSet.Secondary));
    ɵɵproperty("disabled", !ctx_r70.userInput);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("", ctx_r70.sendBtn, " ");
} }
function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r74 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 53);
    ɵɵelementStart(1, "input", 54);
    ɵɵlistener("ngModelChange", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_ngModelChange_1_listener($event) { ɵɵrestoreView(_r74); const ctx_r73 = ɵɵnextContext(3); return ctx_r73.userInput = $event; })("keyup.enter", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_keyup_enter_1_listener() { ɵɵrestoreView(_r74); const ctx_r75 = ɵɵnextContext(3); return ctx_r75.userInput && ctx_r75._send(); })("keyup", function DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template_input_keyup_1_listener($event) { ɵɵrestoreView(_r74); const ctx_r76 = ɵɵnextContext(3); return ctx_r76.userWriting($event); });
    ɵɵelementEnd();
    ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_3_div_7_button_2_Template, 2, 7, "button", 55);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r50 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r50.userInput)("placeholder", ctx_r50.currentPlaceHolder);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r50.changed);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 43);
    ɵɵelementStart(1, "i");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r51 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r51.select);
} }
function DesktopFullScreenComponent_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 44);
    ɵɵtext(1);
    ɵɵelementStart(2, "div", 45, 46);
    ɵɵelementStart(4, "div", 47);
    ɵɵtemplate(5, DesktopFullScreenComponent_ng_container_3_div_3_ng_container_5_Template, 3, 2, "ng-container", 32);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "div", 14);
    ɵɵtemplate(7, DesktopFullScreenComponent_ng_container_3_div_3_div_7_Template, 3, 3, "div", 48);
    ɵɵtemplate(8, DesktopFullScreenComponent_ng_container_3_div_3_div_8_Template, 3, 1, "div", 16);
    ɵɵelementEnd();
    ɵɵelementStart(9, "div", 49);
    ɵɵelement(10, "img", 50);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const _r48 = ɵɵreference(3);
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r5.AssistantMode, " ");
    ɵɵadvance(1);
    ɵɵproperty("scrollTop", _r48.scrollTo(0, 9999999));
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r5.displayData);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r5.disableUserInput && ctx_r5.showInput);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.disableUserInput);
    ɵɵadvance(2);
    ɵɵproperty("src", ctx_r5.assets.FullSizeLogo, ɵɵsanitizeUrl);
} }
function DesktopFullScreenComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r78 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 4);
    ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_Template_button_click_1_listener() { ɵɵrestoreView(_r78); const ctx_r77 = ɵɵnextContext(); return ctx_r77.byPassUserInput("exit", 0); });
    ɵɵelementEnd();
    ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_div_2_Template, 12, 9, "div", 5);
    ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_div_3_Template, 11, 6, "div", 6);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.AssistantMode);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1.AssistantMode);
} }
const _c5 = function () { return { "background-color": "#100652 0% 0% no-repeat padding-box;" }; };
const defaultInputType = 'text';
const defaultInputLimit = 300;
class DesktopFullScreenComponent {
    constructor(translate, service) {
        this.service = service;
        this.AssistantMode = false;
        this.firstVisit = false;
        this.IsMobile = false;
        this.readySend = new EventEmitter(false);
        this.send = new EventEmitter(null);
        this.sendBotCommand = new EventEmitter(null);
        this.sendEvent = new EventEmitter(null);
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
        service.lang.subscribe((r) => {
            if (service.locale) {
                this.sendBtn = translate.translate(service.locale, 'SEND');
                this.select = translate.translate(service.locale, 'SELECT');
            }
        });
    }
    ngOnChanges() {
        var _a, _b;
        let t = setInterval(() => {
            if (document.querySelectorAll('.bot-answer')) {
                let elems = document.querySelectorAll('.bot-answer');
                if (elems.length > 0) {
                    let index = 0, length = elems.length;
                    let rep = true;
                    for (; index < length; index++) {
                        let temp = elems[index];
                        if (temp.style.opacity == '0') {
                            temp.style.opacity = '1';
                        }
                    }
                    this.anim_done = rep;
                    if (this.anim_done) {
                        clearInterval(t);
                    }
                }
            }
        }, 100);
        this.changed = false;
        if (document.getElementById('text') && !((_a = this.LastBotAnswer) === null || _a === void 0 ? void 0 : _a.text.includes('loading-dots'))) {
            document.getElementById('text').innerHTML = '';
        }
        console.log('-------> enter', document.querySelector('.bot-answer number'));
        if (document.querySelector('.bot-answer number')) {
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
            let t2 = setInterval(() => {
                var _a, _b;
                if (this.LastBotAnswer && !((_a = this.LastBotAnswer) === null || _a === void 0 ? void 0 : _a.text.includes('loading-dots')) && this.anim_done) {
                    clearInterval(t2);
                    const string = (_b = this.LastBotAnswer) === null || _b === void 0 ? void 0 : _b.text.split('<br/>').join(` `).split('&eacute;').join('é').split('&egrave;').join('è').replace(/<[^>]*>?/gm, '').split('&nbsp;').join('');
                    this.msgArray = string.split('');
                    if (this.messageCurrent !== string) {
                        this.newMessage = true;
                        this.messageCurrent = string;
                        this.launchLoop();
                    }
                    //this.looper(array, timer);
                }
            }, 100);
        }
        else {
            const string = (_b = this.LastBotAnswer) === null || _b === void 0 ? void 0 : _b.text.split('<br/>').join(` `).split('&eacute;').join('é').split('&egrave;').join('è').replace(/<[^>]*>?/gm, '').split('&nbsp;').join('');
            this.msgArray = string.split('');
            if (this.messageCurrent !== string && string !== '') {
                this.newMessage = true;
                this.messageCurrent = string;
                this.launchLoop();
            }
        }
        setTimeout(() => {
            this.changed = true;
        }, 100);
    }
    launchLoop() {
        this.timer = setInterval(() => {
            if (this.msgArray.length == 0) {
                clearInterval(this.timer);
            }
            if (this.newMessage) {
                if (document.getElementById('text')) {
                    document.getElementById('text').innerHTML = '';
                }
                this.newMessage = false;
                //this.msgArray = this.messageCurrent.split("");
                clearInterval(this.timer);
                this.launchLoop();
            }
            this.looper();
        }, 60);
    }
    looper() {
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
    }
    ngOnInit() {
        this.inputType = defaultInputType;
        this.inputLimit = defaultInputLimit;
        if (this.PlaceHolder) {
            this.currentPlaceHolder = this.PlaceHolder[Math.floor(Math.random() * this.PlaceHolder.length)];
            setInterval(() => {
                this.currentPlaceHolder = this.PlaceHolder[Math.floor(Math.random() * this.PlaceHolder.length)];
            }, 3000);
        }
        setTimeout(() => {
            this.showWrapper = true;
        }, 2000);
        setTimeout(() => {
            this.showText = true;
        }, 2500);
        let t = setInterval(() => {
            if (document.querySelectorAll('.bot-answer')) {
                let elems = document.querySelectorAll('.bot-answer');
                if (elems.length > 0) {
                    let index = 0, length = elems.length;
                    let rep = true;
                    for (; index < length; index++) {
                        let temp = elems[index];
                        if (temp.style.opacity == '0') {
                            rep = false;
                        }
                    }
                    this.anim_done = rep;
                    if (this.anim_done) {
                        clearInterval(t);
                    }
                }
            }
        }, 100);
        //run.run();
        setInterval(() => {
            if (this.botListeningTimer > 0) {
                this.botListeningTimer -= 1;
                if (this.botListeningTimer > 0) {
                    document.getElementById('bot').className = 'a-cue-voice speaking';
                    document.getElementById('bot-icon').className = 'a-cue-icon speakingicon';
                }
                else {
                    document.getElementById('bot').className = 'a-cue-voice';
                    document.getElementById('bot-icon').className = 'a-cue-icon';
                }
                this.botListening = this.botListeningTimer > 0;
            }
        }, 500);
    }
    userWriting(key) {
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
    }
    emit($event) {
        this.firstVisit = false;
        this.readySend.emit(true);
    }
    _send() {
        var _a;
        if (((_a = this.LastBotAnswer) === null || _a === void 0 ? void 0 : _a.endOfTopic) && this.LastUserInput) {
            this.LastUserInput.message = '';
        }
        this.botListening = false;
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
    scroll(scrollHeight) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(0);
                }, 300);
            });
        });
    }
    byPassUserInput(botdata, i) {
        /*const buttons: NodeListOf<HTMLElement> = document.querySelectorAll('.show-btn');
        for (let btn of Array.from(buttons)) {
          btn.classList.add('hidden-btn');
        }*/
        const buttons = document.querySelectorAll('.bot-answer');
        for (let btn of Array.from(buttons)) {
            btn.classList.add('hidden-btn');
        }
        this.sendBotCommand.emit(botdata);
        setTimeout(() => {
            const buttons = document.querySelectorAll('.bot-answer');
            for (let btn of Array.from(buttons)) {
                btn.classList.remove('hidden-btn');
            }
        }, 1000);
    }
}
DesktopFullScreenComponent.ɵfac = function DesktopFullScreenComponent_Factory(t) { return new (t || DesktopFullScreenComponent)(ɵɵdirectiveInject(TranslateService), ɵɵdirectiveInject(KonversoService)); };
DesktopFullScreenComponent.ɵcmp = ɵɵdefineComponent({ type: DesktopFullScreenComponent, selectors: [["bot-full-screen"]], inputs: { AssistantMode: "AssistantMode", assets: "assets", firstVisit: "firstVisit", firstUsageStory: "firstUsageStory", displayData: "displayData", disableUserInput: "disableUserInput", LastUserInput: "LastUserInput", LastBotAnswer: "LastBotAnswer", PlaceHolder: "PlaceHolder", IsMobile: "IsMobile", showInput: "showInput", NumberPlaceHolder: "NumberPlaceHolder" }, outputs: { readySend: "readySend", send: "send", sendBotCommand: "sendBotCommand", sendEvent: "sendEvent" }, features: [ɵɵNgOnChangesFeature], decls: 4, vars: 7, consts: [["xmlns", "http://www.w3.org/1999/html", 1, "bot-container"], [1, "bot-view"], [4, "ngIf"], [3, "firstUsageStory", "assets", "ready"], ["id", "exit-btn", 2, "display", "none", 3, "click"], ["class", "bot-assistant-wrapper", 4, "ngIf"], ["class", "bot-chat-wrapper", 4, "ngIf"], [1, "bot-assistant-wrapper"], [1, "bot-logo", "bot-listening", 3, "ngStyle"], [1, "m-carl-notification", 3, "ngStyle"], [1, "m-carl-notification-cue", "m-cue"], ["class", "a-cue-voice", "id", "bot", 4, "ngIf"], ["id", "bot-icon", 1, "a-cue-icon"], [1, "bot-discussion-wrapper", 2, "min-height", "60%", "max-height", "60%", "height", "60%", "/*max-height", "120px"], [1, "bot-input-wrapper"], ["class", "bot-input", "id", "bot-input-div", 4, "ngIf"], ["class", "bot-input-disable", 4, "ngIf"], ["id", "bot", 1, "a-cue-voice"], [1, "a-cue-voice-el", "voice1"], [1, "a-cue-voice-el", "voice2"], [1, "a-cue-voice-el", "voice3"], [1, "a-cue-voice-el", "voice4"], [1, "a-cue-voice-el"], ["class", "user-input", 4, "ngIf"], [1, "user-input"], [1, "data"], [1, "time"], [1, "bot-answer"], ["class", "fade", 3, "innerHTML", 4, "ngIf"], ["class", "fade", "id", "loading-creation", 4, "ngIf"], [1, "fade", 3, "innerHTML"], ["id", "loading-creation", 1, "fade"], [4, "ngFor", "ngForOf"], ["class", "bot-button bot-button-left show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], ["class", "bot-button bot-button-right show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], ["class", "bot-button bot-button-grey show-btn", 3, "style", "innerHTML", "click", 4, "ngIf"], [1, "bot-button", "bot-button-left", "show-btn", 3, "innerHTML", "click"], [1, "bot-button", "bot-button-right", "show-btn", 3, "innerHTML", "click"], [1, "bot-button", "bot-button-grey", "show-btn", 3, "innerHTML", "click"], ["id", "bot-input-div", 1, "bot-input"], [1, "bot-button", 3, "disabled", "click"], ["min", "2", 3, "type", "ngModel", "max", "placeholder", "ngModelChange", "keyup.enter", "keyup"], [3, "type", "ngModel", "maxlength", "placeholder", "ngModelChange", "keyup.enter", "keyup"], [1, "bot-input-disable"], [1, "bot-chat-wrapper"], [1, "bot-discussion-wrapper", 3, "scrollTop"], ["scrollMe", ""], [1, "bot-chat"], ["class", "bot-input", 4, "ngIf"], [1, "bot-logo"], [3, "src"], ["class", "bot-button fade", 3, "style", "innerHTML", "click", 4, "ngIf"], [1, "bot-button", "fade", 3, "innerHTML", "click"], [1, "bot-input"], ["type", "text", "maxlength", "200", 3, "ngModel", "placeholder", "ngModelChange", "keyup.enter", "keyup"], ["class", "bot-button", 3, "style", "disabled", "click", 4, "ngIf"]], template: function DesktopFullScreenComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_2_Template, 2, 2, "ng-container", 2);
        ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_Template, 4, 2, "ng-container", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵstyleMap(ɵɵpureFunction0(6, _c5));
        ɵɵclassMap(ctx.IsMobile ? "bot-mobile" : "");
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.firstVisit && ctx.firstUsageStory);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.firstVisit || !ctx.firstUsageStory);
    } }, directives: [NgIf, FirstVisitComponent, NgStyle, NgForOf, DefaultValueAccessor, NgControlStatus, NgModel, MaxLengthValidator], pipes: [SafeHtmlPipe], styles: ["@-webkit-keyframes gradient{0%,100%{background-position:50% 0}50%{background-position:50% 100%}}@keyframes gradient{0%,100%{background-position:50% 0}50%{background-position:50% 100%}}@keyframes pulsebot{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}@-webkit-keyframes pulsebot{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}.bot-listening[_ngcontent-%COMP%]{height:100%;background:0 0}.bot-listening[_ngcontent-%COMP%]:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:0 0}.bot-listening[_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:0 0}@media screen and (min--moz-device-pixel-ratio:0){.m-carl-notification[_ngcontent-%COMP%]{transform:translate(0)!important}}.m-carl-notification[_ngcontent-%COMP%]{position:relative;top:50%}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-icon[_ngcontent-%COMP%]{position:absolute;width:100px;height:100px;transform:translateX(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9d107d 1px,#9d107d 3%,#580b58 60%);box-shadow:0 0 10px 5px rgb(0 0 0 / 25%);-webkit-animation:3.5s infinite pulsebot;animation:3.5s infinite pulsebot}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice[_ngcontent-%COMP%]{transform-origin:center center;height:130px;width:130px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]{position:absolute;width:130px;height:130px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1[_ngcontent-%COMP%]{background:#9a147f!important}.voice2[_ngcontent-%COMP%]{background:#773691!important}.voice3[_ngcontent-%COMP%]{background:#4e5ca8!important}.voice4[_ngcontent-%COMP%]{background:#abc1f1!important}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(1){animation:6s infinite reverse both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(2){-webkit-animation:7s infinite both hovering;animation:7s infinite both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(3){animation:8s infinite reverse both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(4){-webkit-animation:9s infinite both hovering;animation:9s infinite both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(5){animation:10s infinite reverse both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .speaking[_ngcontent-%COMP%]{-webkit-animation:2s infinite pulse;animation:2s infinite pulse}.m-carl-notification[_ngcontent-%COMP%]   .a-caption[_ngcontent-%COMP%]{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification[_ngcontent-%COMP%]   .a-caption.speaking[_ngcontent-%COMP%]{text-shadow:0 0 0;opacity:.4}@-webkit-keyframes hovering{from{transform:rotate(0) translateX(18px) rotate(0)}to{transform:rotate(360deg) translateX(18px) rotate(-360deg)}}@keyframes hovering{from{transform:rotate(0) translateX(18px) rotate(0)}to{transform:rotate(360deg) translateX(18px) rotate(-360deg)}}@-webkit-keyframes pulse{0%,40%,60%{transform:scale(1)}10%,80%{transform:scale(1.15)}15%,50%,90%{transform:scale(1.25)}100%,20%{transform:scale(1.05)}30%,65%{transform:scale(1.3)}55%{transform:scale(1.1)}70%{transform:scale(1.2)}}@keyframes pulse{0%,40%,60%{transform:scale(1)}10%,80%{transform:scale(1.15)}15%,50%,90%{transform:scale(1.25)}100%,20%{transform:scale(1.05)}30%,65%{transform:scale(1.3)}55%{transform:scale(1.1)}70%{transform:scale(1.2)}}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(DesktopFullScreenComponent, [{
        type: Component,
        args: [{
                selector: 'bot-full-screen',
                templateUrl: './desktop-full-screen.component.html',
                styleUrls: ['./desktop-full-screen.component.css']
            }]
    }], function () { return [{ type: TranslateService }, { type: KonversoService }]; }, { AssistantMode: [{
            type: Input
        }], assets: [{
            type: Input
        }], firstVisit: [{
            type: Input
        }], firstUsageStory: [{
            type: Input
        }], displayData: [{
            type: Input
        }], disableUserInput: [{
            type: Input
        }], LastUserInput: [{
            type: Input
        }], LastBotAnswer: [{
            type: Input
        }], PlaceHolder: [{
            type: Input
        }], IsMobile: [{
            type: Input
        }], showInput: [{
            type: Input
        }], NumberPlaceHolder: [{
            type: Input
        }], readySend: [{
            type: Output
        }], send: [{
            type: Output
        }], sendBotCommand: [{
            type: Output
        }], sendEvent: [{
            type: Output
        }] }); })();

// @ts-ignore
class KonversoComponent {
    constructor(service) {
        this.service = service;
        this._ready = new EventEmitter();
        this.ready = new EventEmitter();
        this.sended = new EventEmitter();
        this.showInput = true;
        this.AssistantMode = false;
        this.disableUserInput = false;
        if (service._auth) {
            this.service.authentication.subscribe(() => {
                this.ngOnInit();
            });
        }
        this.service.emulationTrigger.subscribe((response) => {
            console.log(response);
            if (response) {
                if (!this.LastUserInput) {
                    this.LastUserInput = {
                        message: '',
                        date: '',
                        error: null
                    };
                }
                this.LastUserInput.message += ' ' + response.input;
                this.LastUserInput.date = new Date().toISOString();
                this.triggerKbotResponse(response);
            }
        });
    }
    triggerKbotResponse(response) {
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
    }
    ngOnInit() {
        console.log('user agent', navigator.userAgent, navigator.userAgent.match(/iPhone|iPad|iPod/i));
        this.isMobile = this._isMobile();
        this.assets = this.service.assets;
        this.firstVisit = this.service.firstVisit;
        this.firstUsageStory = this.service.firstUsageStory;
        this.AssistantMode = this.service.AssistantMode;
        this.PlaceHolder = this.service.PlaceHolder;
        this.NumberPlaceHolder = this.service.NumberPlaceHolder;
        this.Welcome = this.service.Welcome;
        this.sendBotCommand('exit', false).catch((err) => console.log('fail reset session'));
        this.History = [];
        if (this.service.ColorSet) {
            this.colorSet = this.service.ColorSet;
        }
        this._ready.subscribe((ready) => {
            if (ready) {
                this.firstVisit = false;
                this.service.firstVisit = false;
                this.ready.emit(ready);
            }
        });
        if (this.Welcome) {
            const customWelcome = BotMessageSample;
            customWelcome.text = this.Welcome;
            this.LastBotAnswer = customWelcome;
            this.History.push(customWelcome);
        }
    }
    send($event) {
        return __awaiter(this, void 0, void 0, function* () {
            if ($event.message === 'exit') {
                this.sendBotCommand('exit', false).catch((err) => console.log('fail reset session'));
                return false;
            }
            this.sended.emit(true);
            this.LastBotAnswer.text = '<br>' + DotLoaderTemplate(this.service.ColorSet.Primary);
            if (parseInt($event.message) == NaN) {
                this.History.push($event);
            }
            console.log(parseInt($event.message));
            if (this.AssistantMode) {
                if (this.LastUserInput) {
                    if (parseInt($event.message) == NaN) {
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
            const index = this.History.length - 1;
            const response = yield this.service.send($event.message).catch((err) => {
                console.log('We got an error ', err);
                // @ts-ignore
                this.History[index].error = true;
            });
            this.triggerKbotResponse(response);
        });
    }
    sendBotCommand($event, push = true) {
        return __awaiter(this, void 0, void 0, function* () {
            this.LastBotAnswer.text = '<br>' + DotLoaderTemplate(this.service.ColorSet.Primary);
            if ($event === 'yes_response' || $event === 'no_response' || $event == 'exit') {
                this.LastUserInput = null;
            }
            const response = yield this.service.send($event).catch((err) => {
                console.log('We got an error ', err);
            });
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
KonversoComponent.ɵcmp = ɵɵdefineComponent({ type: KonversoComponent, selectors: [["ngx-konverso"]], inputs: { showInput: "showInput" }, outputs: { ready: "ready", sended: "sended" }, decls: 1, vars: 14, consts: [[3, "assets", "firstVisit", "firstUsageStory", "displayData", "disableUserInput", "LastBotAnswer", "LastUserInput", "AssistantMode", "PlaceHolder", "NumberPlaceHolder", "IsMobile", "showInput", "send", "sendBotCommand", "readySend"]], template: function KonversoComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "bot-full-screen", 0);
        ɵɵlistener("send", function KonversoComponent_Template_bot_full_screen_send_0_listener($event) { return ctx.send($event); })("sendBotCommand", function KonversoComponent_Template_bot_full_screen_sendBotCommand_0_listener($event) { return ctx.sendBotCommand($event); })("readySend", function KonversoComponent_Template_bot_full_screen_readySend_0_listener($event) { return ctx._ready.emit($event); });
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵclassMap(ctx.isMobile ? "bot-mobile" : "");
        ɵɵproperty("assets", ctx.assets)("firstVisit", ctx.firstVisit)("firstUsageStory", ctx.firstUsageStory)("displayData", ctx.History)("disableUserInput", ctx.disableUserInput)("LastBotAnswer", ctx.LastBotAnswer)("LastUserInput", ctx.LastUserInput)("AssistantMode", ctx.AssistantMode)("PlaceHolder", ctx.PlaceHolder)("NumberPlaceHolder", ctx.NumberPlaceHolder)("IsMobile", ctx.isMobile)("showInput", ctx.showInput);
    } }, directives: [DesktopFullScreenComponent], styles: ["ngx-konverso{overflow:hidden;display:block;min-height:100%;height:100%}  ngx-konverso .hidden-btn{transform:translateY(-100vh)!important;transition:transform .5s ease-in-out!important;animation:.5s fadeout;-moz-animation:.5s fadeout;-webkit-animation:.5s fadeout;-o-animation:.5s fadeout}@keyframes fadeout{from{opacity:1}to{opacity:0}}@-webkit-keyframes fadeout{from{opacity:1}to{opacity:0}}@-webkit-keyframes dot-keyframes{0%,100%{opacity:.4;transform:scale(1,1)}50%{opacity:1;transform:scale(1.2,1.2)}}@keyframes dot-keyframes{0%,100%{opacity:.4;transform:scale(1,1)}50%{opacity:1;transform:scale(1.2,1.2)}}  ngx-konverso .loading-dots{text-align:center;width:100%}  ngx-konverso .loading-dots--dot{-webkit-animation:1.5s ease-in-out infinite dot-keyframes;animation:1.5s ease-in-out infinite dot-keyframes;border-radius:10px;display:inline-block;height:10px;width:10px}  ngx-konverso .loading-dots--dot:nth-child(2){-webkit-animation-delay:.5s;animation-delay:.5s}  ngx-konverso .loading-dots--dot:nth-child(3){-webkit-animation-delay:1s;animation-delay:1s}  ngx-konverso bot-first-visit,   ngx-konverso bot-full-screen{display:table;min-height:100%;height:100%;width:100%}  ngx-konverso bot-full-screen button:focus,   ngx-konverso bot-full-screen input:focus{outline:0!important}  ngx-konverso bot-full-screen .bot-button>*{position:relative}  ngx-konverso bot-full-screen .button-lg{padding:10px!important;font-size:16px!important}  ngx-konverso bot-full-screen .bot-button{cursor:pointer;opacity:.9;min-width:150px;border-radius:25px;padding:5px;position:relative;overflow:hidden;border-width:0;outline:0;box-shadow:0 1px 4px rgba(0,0,0,.6);transition:opacity .3s}  ngx-konverso bot-full-screen .bot-button span{display:block;padding:12px 24px}  ngx-konverso bot-full-screen .bot-button:focus,   ngx-konverso bot-full-screen .bot-button:hover{opacity:1}  ngx-konverso bot-full-screen .bot-button:before{content:\"\";position:absolute;top:50%;left:50%;display:block;width:0;padding-top:0;border-radius:100%;background-color:rgba(236,240,241,.3);transform:translate(-50%,-50%)}  ngx-konverso bot-full-screen .bot-button:active:before{width:120%;padding-top:120%;transition:width .2s ease-out,padding-top .2s ease-out}  ngx-konverso bot-full-screen .bot-button-left{background:linear-gradient(107deg,#4862ab 0,#9d107d 100%) no-repeat padding-box;border-radius:22px;color:#fff!important;font:12px/19px nexa;height:44px;display:inline-block;letter-spacing:0;margin-right:25px}  ngx-konverso bot-full-screen .bot-button-right{background:no-repeat padding-box #e5e8EE54;border:2px solid #c2c8d5!important;color:#404e6b!important;border-radius:22px;font:12px/19px nexa;height:44px;letter-spacing:0;display:inline-block}@-webkit-keyframes movetop2{from{opacity:0;margin-top:5%}to{opacity:1;margin-top:0}}@keyframes movetop2{from{opacity:0;margin-top:5%}to{opacity:1;margin-top:0}}  ngx-konverso bot-full-screen .bot-button-grey{background:0 0!important;border:2px solid #171f26!important;border-radius:25px;min-height:44px!important;font:16px/25px \"Nexa Text\";letter-spacing:0;color:#171f26!important;display:inline-block;margin-right:25px;animation:.3s ease-in .3s both movetop2!important;-moz-animation:.3s ease-in .3s both movetop2!important;-webkit-animation:.3s ease-in .3s both movetop2!important;-o-animation:.3s ease-in .3s both movetop2!important}  ngx-konverso bot-full-screen .bot-container{font-family:nexa,Roboto;width:100%;height:70vh;display:table;margin:auto;background-size:contain}@media screen and (max-width:500px){  ngx-konverso bot-full-screen .bot-container{height:90vh}}  ngx-konverso bot-full-screen .bot-container>.bot-view{background-size:contain;width:auto;margin:auto;height:100%;display:table-cell;vertical-align:middle}  ngx-konverso bot-full-screen .bot-container>.bot-view img{margin:auto}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper{padding-top:5%;width:100%;margin:auto;vertical-align:middle}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:20px;text-align:center}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step{margin-top:5%;text-align:center}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step .bot-init-dot{border:1px solid;display:inline-block;width:12px;height:12px;margin-left:2.5px;margin-right:2.5px;border-radius:50%}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-button-wrapper{display:block;width:100%;text-align:center;margin-top:8%;margin-right:auto;margin-left:auto}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper{display:table;height:100%;width:100%;position:relative}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-logo{width:100%;margin:0 auto auto;vertical-align:middle;animation:.4s ease-in 1.8s both movetop!important;-moz-animation:.4s ease-in 1.8s both movetop!important;-webkit-animation:.4s ease-in 1.8s both movetop!important;-o-animation:.4s ease-in 1.8s both movetop!important}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-logo img{margin-left:auto;margin-right:auto;display:block;width:150px}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper{display:-ms-grid;display:grid;-ms-grid-columns:1fr;grid-template-columns:1fr;-ms-grid-rows:.3fr 0 1fr 0 .7fr;grid-template-rows:.3fr 1fr .7fr;gap:0 0;grid-template-areas:\"user-input\" \"bot-answer\" \"bot-input-wrapper\";overflow:auto!important}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer{-ms-grid-row:3;-ms-grid-column:1;width:600px;text-align:center;margin:auto;font-size:18px;grid-area:bot-answer}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input{-ms-grid-row:1;-ms-grid-column:1;font-size:15px;margin:auto;display:block;grid-area:user-input}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input .data{padding:10px 20px;border-radius:23px 23px 0;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:5% auto auto;background:no-repeat padding-box #171f26}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input .time{font-weight:300;position:absolute;width:200px;display:none;margin-left:95%;bottom:-1%;color:#000;font-size:10px}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper{-ms-grid-row:5;-ms-grid-column:1;text-align:center;width:100%;bottom:2%;animation:.4s ease-in 3.2s both fadeinanswer;-moz-animation:.4s ease-in 3.2s both fadeinanswer;-webkit-animation:.4s ease-in 3.2s both fadeinanswer;-o-animation:.4s ease-in 3.2s both fadeinanswer;grid-area:bot-input-wrapper}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper input{text-align:left;display:inline-block;padding:10px;color:#000;width:40%;background:0 0;border:2px solid #171f26;border-radius:6px;margin-right:10px}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper button{background:no-repeat padding-box #171f26!important;border:2px solid #171f26;border-radius:6px;display:inline-block;width:calc(10% - 15px);padding:11px}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper{width:100%;display:table;height:100%}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo{max-width:100px;position:absolute;top:2%;left:2%}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo img{max-width:100px}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper{width:100%;position:relative;max-width:600px;height:60%!important;padding:15px 30px;margin:0 auto;overflow-y:scroll;direction:rtl;display:-ms-grid;display:grid;-ms-grid-columns:1fr;grid-template-columns:1fr;-ms-grid-rows:.3fr 0 1fr 0 .7fr;grid-template-rows:.3fr 1fr .7fr;gap:0 0;grid-template-areas:\"user-input\" \"bot-answer\" \"bot-input-wrapper\";overflow:auto}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper::-webkit-scrollbar{width:0!important}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat{position:absolute;overflow-x:hidden;display:flex;flex-direction:column-reverse;justify-content:flex-end;transform:rotate(180deg);min-height:100%;width:94%}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer{-ms-grid-row:3;-ms-grid-column:1;font-size:15px;padding:10px 20px;border-radius:25px;color:#000;height:60%;background-color:transparent;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;margin:15px 0;word-break:break-all;transform:rotate(180deg);direction:ltr;grid-area:bot-answer}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer button{padding:10px;border:1px solid}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input{-ms-grid-row:1;-ms-grid-column:1;font-size:15px;transform:rotate(180deg);direction:ltr;grid-area:user-input}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .data{padding:10px 20px;border-radius:23px 23px 0;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:15px 0 15px auto;background:no-repeat padding-box #171f26}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .time{font-weight:300;position:absolute;width:200px;display:none;margin-left:95%;bottom:-1%;color:#000;font-size:10px}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper{-ms-grid-row:5;-ms-grid-column:1;bottom:2%;display:table;width:100%;margin:auto;grid-area:bot-input-wrapper}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input-disable{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5% .3%;text-align:center}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5%}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input input{display:inline-block;padding:10px;border-radius:25px;color:#000;width:60%;margin-right:15px;border:1px solid rgba(0,0,0,.2)}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input button{display:inline-block;width:calc(36% - 15px);padding:11px}  ngx-konverso .bot-mobile{font-family:nexa,Roboto;width:96vw!important;height:100vh;display:table;margin:auto;background-size:contain}  ngx-konverso .bot-mobile .bot-view bot-first-visit{position:relative}  ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-logo-init-wrapper{margin-top:2.5vh}  ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block;max-width:150px}  ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:15px!important;text-align:center}  ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-init-button-wrapper{position:absolute;top:70%}  ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-answer{width:70vw!important;text-align:center;margin:15.5% auto auto!important;font-size:15px!important}  ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-input-wrapper{background:0 0!important;bottom:10vh!important}  ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-input-wrapper input{width:90%!important}@keyframes movetop{from{margin-top:5%}to{margin-top:0}}@-webkit-keyframes movetop{from{margin-top:5%}to{margin-top:0}}.fade[_ngcontent-%COMP%]{animation:.7s ease-in .2s both fadeinanswer!important;-moz-animation:.7s ease-in .2s both fadeinanswer!important;-webkit-animation:.7s ease-in .2s both fadeinanswer!important;-o-animation:.7s ease-in .2s both fadeinanswer!important;display:block}.fade[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{animation:.7s ease-in .2s both fadeinanswer!important;-moz-animation:.7s ease-in .2s both fadeinanswer!important;-webkit-animation:.7s ease-in .2s both fadeinanswer!important;-o-animation:.7s ease-in .2s both fadeinanswer!important}@-webkit-keyframes fadeinbutton{from{opacity:0}to{opacity:1}}@keyframes fadeinbutton{from{opacity:0}to{opacity:1}}@keyframes fadeinanswer{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadeinanswer{from{opacity:0}to{opacity:1}}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(KonversoComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-konverso',
                templateUrl: 'konverso.component.html',
                styleUrls: ['../../assets/main.scss']
            }]
    }], function () { return [{ type: KonversoService }]; }, { ready: [{
            type: Output
        }], sended: [{
            type: Output
        }], showInput: [{
            type: Input
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
