import { __awaiter, __decorate, __generator, __values } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KonversoService } from '../konverso.service';
import { TranslateService } from '../translate.service';
//import * as run from 'projects/konverso/assets/animatedback.js';
var DesktopFullScreenComponent = /** @class */ (function () {
    function DesktopFullScreenComponent(translate, service) {
        var _this = this;
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
        this.newMessage = false;
        this.messageCurrent = '';
        this.msgArray = [];
        this.botListening = false;
        this.botListeningTimer = 0;
        this.anim_done = false;
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
        this.changed = false;
        if (document.getElementById('text') && !((_a = this.LastBotAnswer) === null || _a === void 0 ? void 0 : _a.text.includes("loading-dots"))) {
            document.getElementById('text').innerHTML = '';
        }
        console.log(this.LastBotAnswer);
        console.log(this.msgArray);
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
        var timer = setInterval(function () {
            if (_this.msgArray.length == 0) {
                clearInterval(timer);
            }
            if (_this.newMessage) {
                if (document.getElementById('text')) {
                    document.getElementById('text').innerHTML = '';
                }
                _this.newMessage = false;
                //this.msgArray = this.messageCurrent.split("");
                clearInterval(timer);
                _this.launchLoop();
            }
            _this.looper(_this.msgArray);
        }, 60);
    };
    DesktopFullScreenComponent.prototype.looper = function (array) {
        if (array.length > 0) {
            if (document.getElementById('text')) {
                document.getElementById('text').innerHTML += array.shift();
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
            setInterval(function () {
                _this.currentPlaceHolder = _this.PlaceHolder[Math.floor(Math.random() * _this.PlaceHolder.length)];
            }, 3000);
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
        { type: KonversoService }
    ]; };
    __decorate([
        Input()
    ], DesktopFullScreenComponent.prototype, "AssistantMode", void 0);
    __decorate([
        Input()
    ], DesktopFullScreenComponent.prototype, "assets", void 0);
    __decorate([
        Input()
    ], DesktopFullScreenComponent.prototype, "firstVisit", void 0);
    __decorate([
        Input()
    ], DesktopFullScreenComponent.prototype, "firstUsageStory", void 0);
    __decorate([
        Input()
    ], DesktopFullScreenComponent.prototype, "displayData", void 0);
    __decorate([
        Input()
    ], DesktopFullScreenComponent.prototype, "disableUserInput", void 0);
    __decorate([
        Input()
    ], DesktopFullScreenComponent.prototype, "LastUserInput", void 0);
    __decorate([
        Input()
    ], DesktopFullScreenComponent.prototype, "LastBotAnswer", void 0);
    __decorate([
        Input()
    ], DesktopFullScreenComponent.prototype, "PlaceHolder", void 0);
    __decorate([
        Input()
    ], DesktopFullScreenComponent.prototype, "IsMobile", void 0);
    __decorate([
        Output()
    ], DesktopFullScreenComponent.prototype, "readySend", void 0);
    __decorate([
        Output()
    ], DesktopFullScreenComponent.prototype, "send", void 0);
    __decorate([
        Output()
    ], DesktopFullScreenComponent.prototype, "sendBotCommand", void 0);
    __decorate([
        Output()
    ], DesktopFullScreenComponent.prototype, "sendEvent", void 0);
    DesktopFullScreenComponent = __decorate([
        Component({
            selector: 'bot-full-screen',
            template: "<!--<div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"-->\n\n  <!--<canvas class=\"orb-canvas\"></canvas>\n  <div class=\"overlay\">\n    <div class=\"overlay__inner\">\n    </div>\n  </div>-->\n  <div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"\n     xmlns=\"http://www.w3.org/1999/html\">\n  <div class=\"bot-view\">\n    <ng-container *ngIf=\"firstVisit && firstUsageStory\">\n      <bot-first-visit [firstUsageStory]=\"firstUsageStory\" [assets]=\"assets\"\n                       (ready)=\"emit($event)\"></bot-first-visit>\n    </ng-container>\n    <ng-container *ngIf=\"!firstVisit\">\n      <div class=\"bot-assistant-wrapper\" *ngIf=\"AssistantMode\">\n        <div *ngIf=\"!botListening\" class=\"bot-logo\" id=\"botlogo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>\n        <div *ngIf=\"botListening\" class=\"bot-listening\">\n          <div class=\"m-carl-notification\">\n            <div class=\"m-carl-notification-cue m-cue\">\n              <div class=\"a-cue-voice\">\n                <div class=\"a-cue-voice-el\"></div>\n                <div class=\"a-cue-voice-el\"></div>\n                <div class=\"a-cue-voice-el\"></div>\n                <div class=\"a-cue-voice-el\"></div>\n                <div class=\"a-cue-voice-el\"></div>\n              </div>\n              <div class=\"a-cue-icon\"></div>\n            </div>\n          </div>\n        </div>\n        <div class=\"bot-discussion-wrapper\">\n          <ng-container *ngIf=\"LastUserInput\">\n            <div class=\"user-input\" *ngIf=\"LastUserInput\">\n              <div class=\"data\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n                    }\">\n                {{LastUserInput.message}}\n              </div>\n              <span class=\"time\">{{LastUserInput.date}}</span>\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"LastBotAnswer\">\n            <div class=\"bot-answer\">\n              <ng-container>\n\n              </ng-container>\n              <ng-container *ngIf=\"LastBotAnswer.text\">\n                <span *ngIf=\"!LastBotAnswer.text.includes('loading-dots')\" id=\"text\"></span><br>\n                <span *ngIf=\"changed && LastBotAnswer.text.includes('loading-dots')\" class=\"fade\" [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span><br>\n              </ng-container>\n              <ng-container *ngIf=\"LastBotAnswer.medias && LastBotAnswer.medias.length\n                   && LastBotAnswer.medias[0].required_actions\n                   && LastBotAnswer.medias[0].required_actions.length > 0\n                   && !LastBotAnswer.text.includes('loading-dots')\">\n                <ng-container *ngFor=\"let suggest of LastBotAnswer.medias[0].required_actions; let i = index\">\n                  <ng-container *ngIf=\"suggest.format === 'button'\"  >\n                    <button *ngIf=\"suggest.value?.title == 'Terminer' && changed || suggest.value?.title == 'Quit' && changed\" [style]=\"{\n                      borderColor : assets?.ColorSet?.Primary,\n                      color : assets?.ColorSet?.Primary\n             }\"  class=\"bot-button bot-button-left show-btn c\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                             [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                    <button *ngIf=\"suggest.value?.title == 'Nouvelle Demande' && changed || suggest.value?.title == 'New Request' && changed\" [style]=\"{\n                      borderColor : assets?.ColorSet?.Primary,\n                      color : assets?.ColorSet?.Primary\n             }\"  class=\"bot-button bot-button-right show-btn fade\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                             [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                    <button *ngIf=\"suggest.value?.title && suggest.value?.title != 'Terminer' && suggest.value?.title != 'Quit' && suggest.value?.title != 'Nouvelle Demande' && suggest.value?.title != 'New Request' && changed\" \n                    [style]=\"{\n                     borderColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Primary\n            }\"  class=\"bot-button bot-button-grey show-btn fade\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                            [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                  </ng-container>\n                </ng-container>\n              </ng-container>\n\n            </div>\n          </ng-container>\n          <div class=\"bot-input-wrapper\">\n            <div class=\"bot-input\" id=\"bot-input-div\" *ngIf=\"!disableUserInput\">\n              <input type=\"text\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" maxlength=\"200\"\n                     [placeholder]=\"currentPlaceHolder\">\n              <button class=\"bot-button\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n            }\" (click)=\"_send()\" [disabled]=\"!userInput\">{{ sendBtn }}\n              </button>\n            </div>\n            <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\n              <i>{{ select }}</i>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"bot-chat-wrapper\" *ngIf=\"!AssistantMode\">\n        {{AssistantMode}}\n        <div class=\"bot-discussion-wrapper\" #scrollMe [scrollTop]=\"scrollMe.scrollTo(0, 9999999)\">\n          <div class=\"bot-chat\">\n\n            <ng-container *ngFor=\"let entry of displayData\">\n              <ng-container *ngIf=\"entry.date\">\n                <div class=\"user-input\">\n                  <div class=\"data\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n                    }\">\n                    {{entry.message}}\n                  </div>\n                  <span class=\"time\">{{entry.date}}</span>\n                </div>\n              </ng-container>\n              <ng-container *ngIf=\"!entry.date\">\n                <div class=\"bot-answer\">\n                  <ng-container *ngIf=\"entry.text\">\n                    <span *ngIf=\"changed\" class=\"fade\" [innerHTML]=\"entry.text | safeHtml\"></span><br>\n                  </ng-container>\n                  <ng-container *ngIf=\"entry.medias && entry.medias.length\n                   && entry.medias[0].required_actions\n                   && entry.medias[0].required_actions.length\">\n                    <ng-container *ngFor=\"let suggest of entry.medias[0].required_actions\">\n                      <ng-container *ngIf=\"suggest.format === 'button'\">\n                        <button *ngIf=\"changed\" [style]=\"{\n                     borderColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Primary\n            }\" class=\"bot-button fade\" (click)=\"byPassUserInput(suggest?.value?.onClick)\"\n                                [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \"></button>\n                      </ng-container>\n                    </ng-container>\n                  </ng-container>\n\n                </div>\n              </ng-container>\n            </ng-container>\n          </div>\n        </div>\n        <div class=\"bot-input-wrapper\">\n          <div class=\"bot-input\" *ngIf=\"!disableUserInput\">\n            <input type=\"text\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" maxlength=\"200\"\n                   [placeholder]=\"currentPlaceHolder\">\n            <button *ngIf=\"changed\" class=\"bot-button\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n            }\" (click)=\"_send()\" [disabled]=\"!userInput\">{{ sendBtn }}\n            </button>\n          </div>\n          <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\n            <i>{{ select }}</i>\n          </div>\n        </div>\n        <div class=\"bot-logo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>\n      </div>\n    </ng-container>\n\n  </div>\n</div>\n",
            styles: ["@keyframes gradient{0%,100%{background-position:0 50%}50%{background-position:100% 50%}}@-webkit-keyframes gradient{0%,100%{background-position:0 50%}50%{background-position:100% 50%}}.bot-listening{height:100%;background:0 0}.bot-listening:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:0 0}.bot-listening:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:0 0}.m-carl-notification{position:relative;top:50%;transform:translateY(-60%)}.m-carl-notification .m-cue{width:168px;height:168px;margin:0 auto 50px}.m-carl-notification .m-cue .a-cue-icon{position:absolute;width:163px;height:163px;transform:translateX(5px) translateY(5px);border-radius:50%;background:linear-gradient(-45deg,#ee7752,#e73c7e,#23a6d5,#23d5ab);box-shadow:0 0 0 10px rgba(255,255,255,.5);-webkit-animation:10s infinite gradient!important;animation:10s infinite gradient!important;background-size:400% 400%}.m-carl-notification .m-cue .a-cue-voice-el{position:absolute;width:168px;height:168px;border-radius:50%;background:#fff;opacity:.2}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(1){animation:6s infinite reverse both hovering}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(2){-webkit-animation:7s infinite both hovering;animation:7s infinite both hovering}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(3){animation:8s infinite reverse both hovering}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(4){-webkit-animation:9s infinite both hovering;animation:9s infinite both hovering}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(5){animation:10s infinite reverse both hovering}.m-carl-notification .m-cue .a-cue-voice{transform-origin:center center;height:168px;width:168px;position:absolute;-webkit-animation:2s infinite pulse;animation:2s infinite pulse}.m-carl-notification .a-caption{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification .a-caption.speaking{text-shadow:0 0 0;opacity:.4}@-webkit-keyframes hovering{from{transform:rotate(0) translateX(18px) rotate(0)}to{transform:rotate(360deg) translateX(18px) rotate(-360deg)}}@keyframes hovering{from{transform:rotate(0) translateX(18px) rotate(0)}to{transform:rotate(360deg) translateX(18px) rotate(-360deg)}}@-webkit-keyframes pulse{0%,40%,60%{transform:scale(1)}10%,80%{transform:scale(1.15)}15%,50%,90%{transform:scale(1.25)}100%,20%{transform:scale(1.05)}30%,65%{transform:scale(1.3)}55%{transform:scale(1.1)}70%{transform:scale(1.2)}}@keyframes pulse{0%,40%,60%{transform:scale(1)}10%,80%{transform:scale(1.15)}15%,50%,90%{transform:scale(1.25)}100%,20%{transform:scale(1.05)}30%,65%{transform:scale(1.3)}55%{transform:scale(1.1)}70%{transform:scale(1.2)}}"]
        })
    ], DesktopFullScreenComponent);
    return DesktopFullScreenComponent;
}());
export { DesktopFullScreenComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rb252ZXJzby8iLCJzb3VyY2VzIjpbImxpYi9kZXNrdG9wLWZ1bGwtc2NyZWVuL2Rlc2t0b3AtZnVsbC1zY3JlZW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsa0VBQWtFO0FBT2xFO0lBNEJFLG9DQUFZLFNBQTJCLEVBQVUsT0FBd0I7UUFBekUsaUJBT0M7UUFQZ0QsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUEzQmhFLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBRS9CLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFPNUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUV6QixjQUFTLEdBQTBCLElBQUksWUFBWSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBQ3BFLFNBQUksR0FBNEIsSUFBSSxZQUFZLENBQVksSUFBSSxDQUFDLENBQUM7UUFDbEUsbUJBQWMsR0FBeUIsSUFBSSxZQUFZLENBQVMsSUFBSSxDQUFDLENBQUM7UUFDdEUsY0FBUyxHQUF5QixJQUFJLFlBQVksQ0FBUyxJQUFJLENBQUMsQ0FBQztRQUVwRSx1QkFBa0IsR0FBVyxFQUFFLENBQUM7UUFDaEMsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2YsaUJBQVksR0FBRyxLQUFLLENB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Qzs7Ozs7Ozs7O1FBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7Z0JBNUxzQixnQkFBZ0I7Z0JBQW1CLGVBQWU7O0lBM0JoRTtRQUFSLEtBQUssRUFBRTtxRUFBZ0M7SUFDL0I7UUFBUixLQUFLLEVBQUU7OERBQXVCO0lBQ3RCO1FBQVIsS0FBSyxFQUFFO2tFQUE2QjtJQUM1QjtRQUFSLEtBQUssRUFBRTt1RUFBMkI7SUFDMUI7UUFBUixLQUFLLEVBQUU7bUVBQWtEO0lBQ2pEO1FBQVIsS0FBSyxFQUFFO3dFQUEyQjtJQUMxQjtRQUFSLEtBQUssRUFBRTtxRUFBMEI7SUFDekI7UUFBUixLQUFLLEVBQUU7cUVBQW9DO0lBQ25DO1FBQVIsS0FBSyxFQUFFO21FQUF1QjtJQUN0QjtRQUFSLEtBQUssRUFBRTtnRUFBMkI7SUFFekI7UUFBVCxNQUFNLEVBQUU7aUVBQXFFO0lBQ3BFO1FBQVQsTUFBTSxFQUFFOzREQUFtRTtJQUNsRTtRQUFULE1BQU0sRUFBRTtzRUFBdUU7SUFDdEU7UUFBVCxNQUFNLEVBQUU7aUVBQWtFO0lBZmhFLDBCQUEwQjtRQUx0QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLGdxUkFBbUQ7O1NBRXBELENBQUM7T0FDVywwQkFBMEIsQ0F5TnRDO0lBQUQsaUNBQUM7Q0FBQSxBQXpORCxJQXlOQztTQXpOWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RlZmF1bHRBc3NldHMsIE9wZW5DaGF0Qm90UmVzcG9uc2UsIFVzZXJJbnB1dH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL0tvbnZlcnNvSW50ZXJmYWNlJztcbmltcG9ydCB7IEtvbnZlcnNvU2VydmljZSB9IGZyb20gJy4uL2tvbnZlcnNvLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4uL3RyYW5zbGF0ZS5zZXJ2aWNlJztcbi8vaW1wb3J0ICogYXMgcnVuIGZyb20gJ3Byb2plY3RzL2tvbnZlcnNvL2Fzc2V0cy9hbmltYXRlZGJhY2suanMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdib3QtZnVsbC1zY3JlZW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Rlc2t0b3AtZnVsbC1zY3JlZW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERlc2t0b3BGdWxsU2NyZWVuQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBASW5wdXQoKSBBc3Npc3RhbnRNb2RlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGFzc2V0czogRGVmYXVsdEFzc2V0cztcbiAgQElucHV0KCkgZmlyc3RWaXNpdDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBmaXJzdFVzYWdlU3Rvcnk6IHN0cmluZ1tdO1xuICBASW5wdXQoKSBkaXNwbGF5RGF0YTogKFVzZXJJbnB1dCB8IE9wZW5DaGF0Qm90UmVzcG9uc2UpW107XG4gIEBJbnB1dCgpIGRpc2FibGVVc2VySW5wdXQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIExhc3RVc2VySW5wdXQ6IFVzZXJJbnB1dDtcbiAgQElucHV0KCkgTGFzdEJvdEFuc3dlcjogT3BlbkNoYXRCb3RSZXNwb25zZTtcbiAgQElucHV0KCkgUGxhY2VIb2xkZXI6IHN0cmluZ1tdO1xuICBASW5wdXQoKSBJc01vYmlsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSByZWFkeVNlbmQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oZmFsc2UpO1xuICBAT3V0cHV0KCkgc2VuZDogRXZlbnRFbWl0dGVyPFVzZXJJbnB1dD4gPSBuZXcgRXZlbnRFbWl0dGVyPFVzZXJJbnB1dD4obnVsbCk7XG4gIEBPdXRwdXQoKSBzZW5kQm90Q29tbWFuZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4obnVsbCk7XG4gIEBPdXRwdXQoKSBzZW5kRXZlbnQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KG51bGwpO1xuICBwdWJsaWMgdXNlcklucHV0OiBzdHJpbmc7XG4gIHB1YmxpYyBjdXJyZW50UGxhY2VIb2xkZXI6IHN0cmluZyA9ICcnO1xuICBwdWJsaWMgc2VuZEJ0biA9ICcnO1xuICBwdWJsaWMgc2VsZWN0ID0gJyc7XG4gIHB1YmxpYyBjaGFuZ2VkID0gZmFsc2U7XG4gIHByaXZhdGUgbmV3TWVzc2FnZSA9IGZhbHNlO1xuICBwcml2YXRlIG1lc3NhZ2VDdXJyZW50ID0gJyc7XG4gIHByaXZhdGUgbXNnQXJyYXkgPSBbXTtcbiAgcHVibGljIGJvdExpc3RlbmluZyA9IGZhbHNlO1xuICBwcml2YXRlIGJvdExpc3RlbmluZ1RpbWVyID0gMDtcbiAgcHJpdmF0ZSBhbmltX2RvbmUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsIHByaXZhdGUgc2VydmljZTogS29udmVyc29TZXJ2aWNlKSB7XG4gICAgc2VydmljZS5sYW5nLnN1YnNjcmliZSgocikgPT4ge1xuICAgICAgaWYgKHNlcnZpY2UubG9jYWxlKSB7XG4gICAgICAgIHRoaXMuc2VuZEJ0biA9IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdTRU5EJyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ID0gdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ1NFTEVDVCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKSAmJiAhdGhpcy5MYXN0Qm90QW5zd2VyPy50ZXh0LmluY2x1ZGVzKFwibG9hZGluZy1kb3RzXCIpKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpLmlubmVySFRNTCA9ICcnO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLkxhc3RCb3RBbnN3ZXIpO1xuXG4gICAgY29uc29sZS5sb2codGhpcy5tc2dBcnJheSk7XG4gICAgaWYgKCF0aGlzLmFuaW1fZG9uZSkge1xuICAgICAgbGV0IHQyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5MYXN0Qm90QW5zd2VyICYmICF0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHQuaW5jbHVkZXMoXCJsb2FkaW5nLWRvdHNcIikgJiYgdGhpcy5hbmltX2RvbmUpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKHQyKTtcbiAgICAgICAgICB2YXIgc3RyaW5nID0gdGhpcy5MYXN0Qm90QW5zd2VyPy50ZXh0XG4gICAgICAgICAgICAuc3BsaXQoJzxici8+Jykuam9pbihgIGApXG4gICAgICAgICAgICAuc3BsaXQoJyZlYWN1dGU7Jykuam9pbignw6knKVxuICAgICAgICAgICAgLnNwbGl0KCcmZWdyYXZlOycpLmpvaW4oJ8OoJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC88W14+XSo+Py9nbSwgJycpXG4gICAgICAgICAgICAuc3BsaXQoJyZuYnNwOycpLmpvaW4oJycpO1xuICBcbiAgICAgICAgICB0aGlzLm1zZ0FycmF5ID0gc3RyaW5nLnNwbGl0KFwiXCIpO1xuICAgICAgICAgIGlmICh0aGlzLm1lc3NhZ2VDdXJyZW50ICE9IHN0cmluZykge1xuICAgICAgICAgICAgdGhpcy5uZXdNZXNzYWdlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUN1cnJlbnQgPSBzdHJpbmc7XG4gICAgICAgICAgICB0aGlzLmxhdW5jaExvb3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy90aGlzLmxvb3BlcihhcnJheSwgdGltZXIpO1xuICAgICAgICB9XG4gICAgICB9LCAxMDApXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzdHJpbmcgPSB0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHRcbiAgICAgICAgICAuc3BsaXQoJzxici8+Jykuam9pbihgIGApXG4gICAgICAgICAgLnNwbGl0KCcmZWFjdXRlOycpLmpvaW4oJ8OpJylcbiAgICAgICAgICAuc3BsaXQoJyZlZ3JhdmU7Jykuam9pbignw6gnKVxuICAgICAgICAgIC5yZXBsYWNlKC88W14+XSo+Py9nbSwgJycpXG4gICAgICAgICAgLnNwbGl0KCcmbmJzcDsnKS5qb2luKCcnKTtcblxuICAgICAgICB0aGlzLm1zZ0FycmF5ID0gc3RyaW5nLnNwbGl0KFwiXCIpO1xuICAgICAgICBpZiAodGhpcy5tZXNzYWdlQ3VycmVudCAhPSBzdHJpbmcgJiYgc3RyaW5nICE9ICcnKSB7XG4gICAgICAgICAgdGhpcy5uZXdNZXNzYWdlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VDdXJyZW50ID0gc3RyaW5nO1xuICAgICAgICAgIHRoaXMubGF1bmNoTG9vcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZWQgPSB0cnVlO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBsYXVuY2hMb29wKCkge1xuICAgIGxldCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLm1zZ0FycmF5Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubmV3TWVzc2FnZSkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKSkge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMubmV3TWVzc2FnZSA9IGZhbHNlO1xuICAgICAgICAvL3RoaXMubXNnQXJyYXkgPSB0aGlzLm1lc3NhZ2VDdXJyZW50LnNwbGl0KFwiXCIpO1xuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgdGhpcy5sYXVuY2hMb29wKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmxvb3Blcih0aGlzLm1zZ0FycmF5KTtcbiAgICB9LCA2MCk7XG4gIH1cblxuICBsb29wZXIoYXJyYXkpIHtcbiAgICAgIGlmKCBhcnJheS5sZW5ndGggPiAwICkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKSkge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykuaW5uZXJIVE1MICs9IGFycmF5LnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgIH0vKmVsc2Uge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgfSovXG4gICAgICAvKnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMubG9vcGVyKGFycmF5LCB0aW1lcik7XG4gICAgICB9LCAzMCk7Ki9cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLlBsYWNlSG9sZGVyKSB7XG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY3VycmVudFBsYWNlSG9sZGVyID0gdGhpcy5QbGFjZUhvbGRlcltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLlBsYWNlSG9sZGVyLmxlbmd0aCldO1xuICAgICAgfSwgMzAwMCk7XG4gICAgfVxuXG4gICAgbGV0IHQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvdC1hbnN3ZXInKSkge1xuICAgICAgICBsZXQgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm90LWFuc3dlcicpXG4gICAgICAgIGlmIChlbGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSAwLCBsZW5ndGggPSBlbGVtcy5sZW5ndGg7XG4gICAgICAgICAgICBsZXQgcmVwID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IGVsZW1zW2luZGV4XSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgICAgICBpZiAodGVtcC5zdHlsZS5vcGFjaXR5ID09ICcwJykge1xuICAgICAgICAgICAgICAgICAgcmVwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hbmltX2RvbmUgPSByZXA7XG4gICAgICAgICAgICBpZiAodGhpcy5hbmltX2RvbmUpIHtcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwMCk7XG5cbiAgICAvL3J1bi5ydW4oKTtcblxuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmJvdExpc3RlbmluZ1RpbWVyID4gMCkge1xuICAgICAgICB0aGlzLmJvdExpc3RlbmluZ1RpbWVyIC09IDE7XG5cbiAgICAgICAgdGhpcy5ib3RMaXN0ZW5pbmcgPSB0aGlzLmJvdExpc3RlbmluZ1RpbWVyID4gMDtcbiAgICAgIH1cbiAgICB9LCA1MDApXG4gIH1cblxuICB1c2VyV3JpdGluZyhrZXkpIHtcbiAgICBpZiAoa2V5LmNvZGUgPT0gJ0VudGVyJykge1xuICAgICAgdGhpcy5ib3RMaXN0ZW5pbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuYm90TGlzdGVuaW5nVGltZXIgPSAwO1xuICAgIH0gZWxzZSBpZiAoa2V5LmNvZGUgPT0gJ0JhY2tzcGFjZScpIHtcbiAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJvdExpc3RlbmluZyA9IHRydWU7XG4gICAgICBpZiAodGhpcy5ib3RMaXN0ZW5pbmdUaW1lciA9PSAwKSB7XG4gICAgICAgIHRoaXMuYm90TGlzdGVuaW5nVGltZXIgKz0gMjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5ib3RMaXN0ZW5pbmdUaW1lciA8IDUpIHtcbiAgICAgICAgdGhpcy5ib3RMaXN0ZW5pbmdUaW1lciArPSAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBlbWl0KCRldmVudCkge1xuICAgIHRoaXMuZmlyc3RWaXNpdCA9IGZhbHNlO1xuICAgIHRoaXMucmVhZHlTZW5kLmVtaXQodHJ1ZSk7XG4gIH1cblxuICBwdWJsaWMgX3NlbmQoKSB7XG4gICAgdGhpcy5ib3RMaXN0ZW5pbmcgPSBmYWxzZTtcbiAgICBjb25zdCB1c2VyRGF0YTogVXNlcklucHV0ID0ge1xuICAgICAgbWVzc2FnZTogdGhpcy51c2VySW5wdXQsXG4gICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZyhuYXZpZ2F0b3IubGFuZ3VhZ2UsIHtcbiAgICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgICBtaW51dGU6ICcyLWRpZ2l0J1xuICAgICAgfSlcbiAgICB9O1xuICAgIHRoaXMuc2VuZC5lbWl0KHVzZXJEYXRhKTtcbiAgICB0aGlzLnVzZXJJbnB1dCA9IG51bGw7XG4gIH1cblxuICBhc3luYyBzY3JvbGwoc2Nyb2xsSGVpZ2h0OiBudW1iZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8bnVtYmVyPigocmVzb2x2ZSkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoMCk7XG4gICAgICB9LCAzMDApO1xuICAgIH0pO1xuXG4gIH1cblxuICBieVBhc3NVc2VySW5wdXQoYm90ZGF0YTogc3RyaW5nLCBpPzogbnVtYmVyKSB7XG4gICAgLypjb25zdCBidXR0b25zOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaG93LWJ0bicpO1xuICAgIGZvciAobGV0IGJ0biBvZiBBcnJheS5mcm9tKGJ1dHRvbnMpKSB7XG4gICAgICBidG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuLWJ0bicpO1xuICAgIH0qL1xuICAgIGNvbnN0IGJ1dHRvbnM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvdC1hbnN3ZXInKTtcbiAgICBmb3IgKGxldCBidG4gb2YgQXJyYXkuZnJvbShidXR0b25zKSkge1xuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1idG4nKTtcbiAgICB9XG4gICAgdGhpcy5zZW5kQm90Q29tbWFuZC5lbWl0KGJvdGRhdGEpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgYnV0dG9uczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm90LWFuc3dlcicpO1xuICAgICAgZm9yIChsZXQgYnRuIG9mIEFycmF5LmZyb20oYnV0dG9ucykpIHtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi1idG4nKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfVxufVxuIl19