import { __awaiter, __decorate, __generator, __values } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KonversoService } from '../konverso.service';
import { TranslateService } from '../translate.service';
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
        Input()
    ], DesktopFullScreenComponent.prototype, "showInput", void 0);
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
            template: "<!--<div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"-->\n\n  <!--<canvas class=\"orb-canvas\"></canvas>\n  <div class=\"overlay\">\n    <div class=\"overlay__inner\">\n    </div>\n  </div>-->\n  <div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"\n     xmlns=\"http://www.w3.org/1999/html\">\n  <div class=\"bot-view\">\n    <ng-container *ngIf=\"firstVisit && firstUsageStory\">\n      <bot-first-visit [firstUsageStory]=\"firstUsageStory\" [assets]=\"assets\"\n                       (ready)=\"emit($event)\"></bot-first-visit>\n    </ng-container>\n    <ng-container *ngIf=\"!firstVisit || !firstUsageStory\">\n      <button (click)=\"byPassUserInput('exit', 0)\" id=\"exit-btn\" style=\"display: none;\"></button>\n\n      <div class=\"bot-assistant-wrapper\" *ngIf=\"AssistantMode\">\n        <!--<div *ngIf=\"!botListening\" class=\"bot-logo\" id=\"botlogo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>-->\n        <div [ngStyle]=\"{'height': '40%'}\" class=\"bot-logo bot-listening\">\n          <div [ngStyle]=\"{'transform': 'translateY(-10vh)'}\" class=\"m-carl-notification\">\n            <div class=\"m-carl-notification-cue m-cue\">\n              <div *ngIf=\"botListening\" class=\"a-cue-voice\" id=\"bot\">\n                <div class=\"a-cue-voice-el voice1\"></div>\n                <div class=\"a-cue-voice-el voice2\"></div>\n                <div class=\"a-cue-voice-el voice3\"></div>\n                <div class=\"a-cue-voice-el voice4\"></div>\n                <div class=\"a-cue-voice-el\"></div>\n              </div>\n              <div class=\"a-cue-icon\" id=\"bot-icon\"></div>\n            </div>\n          </div>\n        </div>\n        <div class=\"bot-discussion-wrapper\" style=\"min-height: 60%; max-height: 60%; height: 60%; /*max-height: 120px;*/\">\n          <ng-container *ngIf=\"LastUserInput\">\n            <div class=\"user-input\" *ngIf=\"LastUserInput && LastUserInput?.message != ''\">\n              <div class=\"data\" [style]=\"{\n                     color : assets?.ColorSet?.Secondary\n                    }\">\n                {{LastUserInput.message}}\n              </div>\n              <span class=\"time\">{{LastUserInput.date}}</span>\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"LastBotAnswer\">\n            <div class=\"bot-answer\">\n              <ng-container>\n\n              </ng-container>\n              <ng-container *ngIf=\"LastBotAnswer.text\">\n                <!--<span *ngIf=\"!LastBotAnswer.text.includes('loading-dots')\" id=\"text\"></span><br>\n                <span *ngIf=\"changed && LastBotAnswer.text.includes('loading-dots')\" class=\"fade\" [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span><br>\n                -->\n                <span *ngIf=\"!LastBotAnswer.text.includes('loading-dots') && changed && showText\" class=\"fade\" [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span>\n                <span *ngIf=\"LastBotAnswer.text.includes('loading-dots')\" class=\"fade\" id=\"loading-creation\"></span>\n                <!--<br>-->\n              </ng-container>\n              <ng-container *ngIf=\"LastBotAnswer.medias && LastBotAnswer.medias.length\n                   && LastBotAnswer.medias[0].required_actions\n                   && LastBotAnswer.medias[0].required_actions.length > 0\n                   && !LastBotAnswer.text.includes('loading-dots')\">\n                <ng-container *ngFor=\"let suggest of LastBotAnswer.medias[0].required_actions; let i = index\">\n                  <ng-container *ngIf=\"suggest.format === 'button'\"  >\n                    <button *ngIf=\"suggest.value?.title == 'Terminer' && changed || suggest.value?.title == 'Quit' && changed\" [style]=\"{\n                      borderColor : assets?.ColorSet?.Primary,\n                      color : assets?.ColorSet?.Primary\n             }\"  class=\"bot-button bot-button-left show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                             [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                    <button *ngIf=\"suggest.value?.title == 'Nouvelle Demande' && changed || suggest.value?.title == 'New Request' && changed\" [style]=\"{\n                      borderColor : assets?.ColorSet?.Primary,\n                      color : assets?.ColorSet?.Primary\n             }\"  class=\"bot-button bot-button-right show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                             [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                    <button *ngIf=\"suggest.value?.title && suggest.value?.title != 'Terminer' && suggest.value?.title != 'Quit' && suggest.value?.title != 'Nouvelle Demande' && suggest.value?.title != 'New Request' && changed\" \n                    [style]=\"{\n                     borderColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Primary\n            }\"  class=\"bot-button bot-button-grey show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                            [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                  </ng-container>\n                </ng-container>\n              </ng-container>\n\n            </div>\n          </ng-container>\n          <div class=\"bot-input-wrapper\">\n            <div class=\"bot-input\" id=\"bot-input-div\" *ngIf=\"!disableUserInput && showInput\">\n              <input type=\"text\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" maxlength=\"200\"\n                     [placeholder]=\"currentPlaceHolder\">\n              <button class=\"bot-button\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n            }\" (click)=\"_send()\" [disabled]=\"!userInput\">{{ sendBtn }}\n              </button>\n            </div>\n            <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\n              <i>{{ select }}</i>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"bot-chat-wrapper\" *ngIf=\"!AssistantMode\">\n        {{AssistantMode}}\n        <div class=\"bot-discussion-wrapper\" #scrollMe [scrollTop]=\"scrollMe.scrollTo(0, 9999999)\">\n          <div class=\"bot-chat\">\n\n            <ng-container *ngFor=\"let entry of displayData\">\n              <ng-container *ngIf=\"entry.date\">\n                <div class=\"user-input\">\n                  <div class=\"data\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n                    }\">\n                    {{entry.message}}\n                  </div>\n                  <span class=\"time\">{{entry.date}}</span>\n                </div>\n              </ng-container>\n              <ng-container *ngIf=\"!entry.date\">\n                <div class=\"bot-answer\">\n                  <ng-container *ngIf=\"entry.text\">\n                    <span *ngIf=\"changed\" class=\"fade\" [innerHTML]=\"entry.text | safeHtml\"></span>\n                    <!--<br>-->\n                  </ng-container>\n                  <ng-container *ngIf=\"entry.medias && entry.medias.length\n                   && entry.medias[0].required_actions\n                   && entry.medias[0].required_actions.length\">\n                    <ng-container *ngFor=\"let suggest of entry.medias[0].required_actions\">\n                      <ng-container *ngIf=\"suggest.format === 'button'\">\n                        <button *ngIf=\"changed\" [style]=\"{\n                     borderColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Primary\n            }\" class=\"bot-button fade\" (click)=\"byPassUserInput(suggest?.value?.onClick)\"\n                                [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \"></button>\n                      </ng-container>\n                    </ng-container>\n                  </ng-container>\n\n                </div>\n              </ng-container>\n            </ng-container>\n          </div>\n        </div>\n        <div class=\"bot-input-wrapper\">\n          <div class=\"bot-input\" *ngIf=\"!disableUserInput && showInput\">\n            <input type=\"text\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting($event)\" maxlength=\"200\"\n                   [placeholder]=\"currentPlaceHolder\">\n            <button *ngIf=\"changed\" class=\"bot-button\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n            }\" (click)=\"_send()\" [disabled]=\"!userInput\">{{ sendBtn }}\n            </button>\n          </div>\n          <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\n            <i>{{ select }}</i>\n          </div>\n        </div>\n        <div class=\"bot-logo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>\n      </div>\n    </ng-container>\n\n  </div>\n</div>\n",
            styles: ["@-webkit-keyframes gradient{0%,100%{background-position:50% 0}50%{background-position:50% 100%}}@keyframes gradient{0%,100%{background-position:50% 0}50%{background-position:50% 100%}}@keyframes pulsebot{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}@-webkit-keyframes pulsebot{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}.bot-listening{height:100%;background:0 0}.bot-listening:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:0 0}.bot-listening:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:0 0}@media screen and (min--moz-device-pixel-ratio:0){.m-carl-notification{transform:translate(0)!important}}.m-carl-notification{position:relative;top:50%}.m-carl-notification .m-cue{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-icon{position:absolute;width:100px;height:100px;transform:translateX(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9d107d 1px,#9d107d 3%,#580b58 60%);box-shadow:0 0 10px 5px rgb(0 0 0 / 25%);-webkit-animation:3.5s infinite pulsebot;animation:3.5s infinite pulsebot}.m-carl-notification .m-cue .a-cue-voice{transform-origin:center center;height:130px;width:130px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification .m-cue .a-cue-voice-el{position:absolute;width:130px;height:130px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1{background:#9a147f!important}.voice2{background:#773691!important}.voice3{background:#4e5ca8!important}.voice4{background:#abc1f1!important}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(1){animation:6s infinite reverse both hovering}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(2){-webkit-animation:7s infinite both hovering;animation:7s infinite both hovering}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(3){animation:8s infinite reverse both hovering}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(4){-webkit-animation:9s infinite both hovering;animation:9s infinite both hovering}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(5){animation:10s infinite reverse both hovering}.m-carl-notification .m-cue .speaking{-webkit-animation:2s infinite pulse;animation:2s infinite pulse}.m-carl-notification .a-caption{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification .a-caption.speaking{text-shadow:0 0 0;opacity:.4}@-webkit-keyframes hovering{from{transform:rotate(0) translateX(18px) rotate(0)}to{transform:rotate(360deg) translateX(18px) rotate(-360deg)}}@keyframes hovering{from{transform:rotate(0) translateX(18px) rotate(0)}to{transform:rotate(360deg) translateX(18px) rotate(-360deg)}}@-webkit-keyframes pulse{0%,40%,60%{transform:scale(1)}10%,80%{transform:scale(1.15)}15%,50%,90%{transform:scale(1.25)}100%,20%{transform:scale(1.05)}30%,65%{transform:scale(1.3)}55%{transform:scale(1.1)}70%{transform:scale(1.2)}}@keyframes pulse{0%,40%,60%{transform:scale(1)}10%,80%{transform:scale(1.15)}15%,50%,90%{transform:scale(1.25)}100%,20%{transform:scale(1.05)}30%,65%{transform:scale(1.3)}55%{transform:scale(1.1)}70%{transform:scale(1.2)}}"]
        })
    ], DesktopFullScreenComponent);
    return DesktopFullScreenComponent;
}());
export { DesktopFullScreenComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rb252ZXJzby8iLCJzb3VyY2VzIjpbImxpYi9kZXNrdG9wLWZ1bGwtc2NyZWVuL2Rlc2t0b3AtZnVsbC1zY3JlZW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFVeEQ7SUFpQ0Usb0NBQVksU0FBMkIsRUFBVSxPQUF3QjtRQUF6RSxpQkFPQztRQVBnRCxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQWhDaEUsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFFL0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQU81QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBR3pCLGNBQVMsR0FBMEIsSUFBSSxZQUFZLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDcEUsU0FBSSxHQUE0QixJQUFJLFlBQVksQ0FBWSxJQUFJLENBQUMsQ0FBQztRQUNsRSxtQkFBYyxHQUF5QixJQUFJLFlBQVksQ0FBUyxJQUFJLENBQUMsQ0FBQztRQUN0RSxjQUFTLEdBQXlCLElBQUksWUFBWSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBRXBFLHVCQUFrQixHQUFXLEVBQUUsQ0FBQztRQUNoQyxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDZixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNwQixzQkFB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QUFNLEVBQUU7NERBQW1FO0lBQ2xFO1FBQVQsTUFBTSxFQUFFO3NFQUF1RTtJQUN0RTtRQUFULE1BQU0sRUFBRTtpRUFBa0U7SUFoQmhFLDBCQUEwQjtRQUx0QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLDIyU0FBbUQ7O1NBRXBELENBQUM7T0FDVywwQkFBMEIsQ0FzUXRDO0lBQUQsaUNBQUM7Q0FBQSxBQXRRRCxJQXNRQztTQXRRWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RlZmF1bHRBc3NldHMsIE9wZW5DaGF0Qm90UmVzcG9uc2UsIFVzZXJJbnB1dH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL0tvbnZlcnNvSW50ZXJmYWNlJztcbmltcG9ydCB7IEtvbnZlcnNvU2VydmljZSB9IGZyb20gJy4uL2tvbnZlcnNvLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4uL3RyYW5zbGF0ZS5zZXJ2aWNlJztcbi8vaW1wb3J0ICogYXMgcnVuIGZyb20gJ3Byb2plY3RzL2tvbnZlcnNvL2Fzc2V0cy9hbmltYXRlZGJhY2suanMnO1xuLy9pbXBvcnQge0thd2FzZUJsdXJGaWx0ZXJ9IGZyb20gXCIuLi8uLi9maWx0ZXJzL2thd2FzZS1ibHVyL3NyYy9LYXdhc2VCbHVyRmlsdGVyXCI7XG5kZWNsYXJlIHZhciBQSVhJOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JvdC1mdWxsLXNjcmVlbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kZXNrdG9wLWZ1bGwtc2NyZWVuLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGVza3RvcEZ1bGxTY3JlZW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIEBJbnB1dCgpIEFzc2lzdGFudE1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgYXNzZXRzOiBEZWZhdWx0QXNzZXRzO1xuICBASW5wdXQoKSBmaXJzdFZpc2l0OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZpcnN0VXNhZ2VTdG9yeTogc3RyaW5nW107XG4gIEBJbnB1dCgpIGRpc3BsYXlEYXRhOiAoVXNlcklucHV0IHwgT3BlbkNoYXRCb3RSZXNwb25zZSlbXTtcbiAgQElucHV0KCkgZGlzYWJsZVVzZXJJbnB1dDogYm9vbGVhbjtcbiAgQElucHV0KCkgTGFzdFVzZXJJbnB1dDogVXNlcklucHV0O1xuICBASW5wdXQoKSBMYXN0Qm90QW5zd2VyOiBPcGVuQ2hhdEJvdFJlc3BvbnNlO1xuICBASW5wdXQoKSBQbGFjZUhvbGRlcjogc3RyaW5nW107XG4gIEBJbnB1dCgpIElzTW9iaWxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNob3dJbnB1dDogYm9vbGVhbjtcblxuICBAT3V0cHV0KCkgcmVhZHlTZW5kOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KGZhbHNlKTtcbiAgQE91dHB1dCgpIHNlbmQ6IEV2ZW50RW1pdHRlcjxVc2VySW5wdXQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxVc2VySW5wdXQ+KG51bGwpO1xuICBAT3V0cHV0KCkgc2VuZEJvdENvbW1hbmQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KG51bGwpO1xuICBAT3V0cHV0KCkgc2VuZEV2ZW50OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPihudWxsKTtcbiAgcHVibGljIHVzZXJJbnB1dDogc3RyaW5nO1xuICBwdWJsaWMgY3VycmVudFBsYWNlSG9sZGVyOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIHNlbmRCdG4gPSAnJztcbiAgcHVibGljIHNlbGVjdCA9ICcnO1xuICBwdWJsaWMgY2hhbmdlZCA9IGZhbHNlO1xuICBwcml2YXRlIG5ld01lc3NhZ2UgPSBmYWxzZTtcbiAgcHJpdmF0ZSBtZXNzYWdlQ3VycmVudCA9ICcnO1xuICBwcml2YXRlIG1zZ0FycmF5ID0gW107XG4gIHB1YmxpYyBib3RMaXN0ZW5pbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBib3RMaXN0ZW5pbmdUaW1lciA9IDA7XG4gIHByaXZhdGUgYW5pbV9kb25lID0gZmFsc2U7XG4gIHByaXZhdGUgcmVsb2FkZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSB0aW1lcjtcbiAgcHVibGljIHNob3dXcmFwcGVyID0gZmFsc2U7XG4gIHB1YmxpYyBzaG93VGV4dCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSwgcHJpdmF0ZSBzZXJ2aWNlOiBLb252ZXJzb1NlcnZpY2UpIHtcbiAgICBzZXJ2aWNlLmxhbmcuc3Vic2NyaWJlKChyKSA9PiB7XG4gICAgICBpZiAoc2VydmljZS5sb2NhbGUpIHtcbiAgICAgICAgdGhpcy5zZW5kQnRuID0gdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ1NFTkQnKTtcbiAgICAgICAgdGhpcy5zZWxlY3QgPSB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnU0VMRUNUJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICBsZXQgdCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm90LWFuc3dlcicpKSB7XG4gICAgICAgIGxldCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3QtYW5zd2VyJylcbiAgICAgICAgaWYgKGVsZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IDAsIGxlbmd0aCA9IGVsZW1zLmxlbmd0aDtcbiAgICAgICAgICAgIGxldCByZXAgPSB0cnVlO1xuICAgICAgICAgICAgZm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gZWxlbXNbaW5kZXhdIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgICAgIGlmICh0ZW1wLnN0eWxlLm9wYWNpdHkgPT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgICB0ZW1wLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hbmltX2RvbmUgPSByZXA7XG4gICAgICAgICAgICBpZiAodGhpcy5hbmltX2RvbmUpIHtcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwMCk7XG5cbiAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpICYmICF0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHQuaW5jbHVkZXMoXCJsb2FkaW5nLWRvdHNcIikpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2codGhpcy5MYXN0Qm90QW5zd2VyKTtcblxuICAgIGlmICghdGhpcy5hbmltX2RvbmUpIHtcbiAgICAgIGxldCB0MiA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuTGFzdEJvdEFuc3dlciAmJiAhdGhpcy5MYXN0Qm90QW5zd2VyPy50ZXh0LmluY2x1ZGVzKFwibG9hZGluZy1kb3RzXCIpICYmIHRoaXMuYW5pbV9kb25lKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0Mik7XG4gICAgICAgICAgdmFyIHN0cmluZyA9IHRoaXMuTGFzdEJvdEFuc3dlcj8udGV4dFxuICAgICAgICAgICAgLnNwbGl0KCc8YnIvPicpLmpvaW4oYCBgKVxuICAgICAgICAgICAgLnNwbGl0KCcmZWFjdXRlOycpLmpvaW4oJ8OpJylcbiAgICAgICAgICAgIC5zcGxpdCgnJmVncmF2ZTsnKS5qb2luKCfDqCcpXG4gICAgICAgICAgICAucmVwbGFjZSgvPFtePl0qPj8vZ20sICcnKVxuICAgICAgICAgICAgLnNwbGl0KCcmbmJzcDsnKS5qb2luKCcnKTtcbiAgXG4gICAgICAgICAgdGhpcy5tc2dBcnJheSA9IHN0cmluZy5zcGxpdChcIlwiKTtcbiAgICAgICAgICBpZiAodGhpcy5tZXNzYWdlQ3VycmVudCAhPSBzdHJpbmcpIHtcbiAgICAgICAgICAgIHRoaXMubmV3TWVzc2FnZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VDdXJyZW50ID0gc3RyaW5nO1xuICAgICAgICAgICAgdGhpcy5sYXVuY2hMb29wKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vdGhpcy5sb29wZXIoYXJyYXksIHRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc3RyaW5nID0gdGhpcy5MYXN0Qm90QW5zd2VyPy50ZXh0XG4gICAgICAgICAgLnNwbGl0KCc8YnIvPicpLmpvaW4oYCBgKVxuICAgICAgICAgIC5zcGxpdCgnJmVhY3V0ZTsnKS5qb2luKCfDqScpXG4gICAgICAgICAgLnNwbGl0KCcmZWdyYXZlOycpLmpvaW4oJ8OoJylcbiAgICAgICAgICAucmVwbGFjZSgvPFtePl0qPj8vZ20sICcnKVxuICAgICAgICAgIC5zcGxpdCgnJm5ic3A7Jykuam9pbignJyk7XG5cbiAgICAgICAgdGhpcy5tc2dBcnJheSA9IHN0cmluZy5zcGxpdChcIlwiKTtcbiAgICAgICAgaWYgKHRoaXMubWVzc2FnZUN1cnJlbnQgIT0gc3RyaW5nICYmIHN0cmluZyAhPSAnJykge1xuICAgICAgICAgIHRoaXMubmV3TWVzc2FnZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlQ3VycmVudCA9IHN0cmluZztcbiAgICAgICAgICB0aGlzLmxhdW5jaExvb3AoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2VkID0gdHJ1ZTtcbiAgICB9LCAxMDApO1xuICB9XG5cbiAgbGF1bmNoTG9vcCgpIHtcbiAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubXNnQXJyYXkubGVuZ3RoID09IDApIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm5ld01lc3NhZ2UpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykpIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5ld01lc3NhZ2UgPSBmYWxzZTtcbiAgICAgICAgLy90aGlzLm1zZ0FycmF5ID0gdGhpcy5tZXNzYWdlQ3VycmVudC5zcGxpdChcIlwiKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgICAgICAgdGhpcy5sYXVuY2hMb29wKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmxvb3BlcigpO1xuICAgIH0sIDYwKTtcbiAgfVxuXG4gIGxvb3BlcigpIHtcbiAgICAgIGlmKHRoaXMubXNnQXJyYXkubGVuZ3RoID4gMCAmJiAhdGhpcy5yZWxvYWRlZCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKSkge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykuaW5uZXJIVE1MICs9IHRoaXMubXNnQXJyYXkuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgfS8qZWxzZSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB9Ki9cbiAgICAgIC8qdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5sb29wZXIoYXJyYXksIHRpbWVyKTtcbiAgICAgIH0sIDMwKTsqL1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuUGxhY2VIb2xkZXIpIHtcbiAgICAgIHRoaXMuY3VycmVudFBsYWNlSG9sZGVyID0gdGhpcy5QbGFjZUhvbGRlcltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLlBsYWNlSG9sZGVyLmxlbmd0aCldO1xuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0aGlzLmN1cnJlbnRQbGFjZUhvbGRlciA9IHRoaXMuUGxhY2VIb2xkZXJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5QbGFjZUhvbGRlci5sZW5ndGgpXTtcbiAgICAgIH0sIDMwMDApO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5zaG93V3JhcHBlciA9IHRydWU7XG4gICAgfSwgMjAwMCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2hvd1RleHQgPSB0cnVlO1xuICAgIH0sIDI1MDApO1xuXG4gICAgbGV0IHQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvdC1hbnN3ZXInKSkge1xuICAgICAgICBsZXQgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm90LWFuc3dlcicpXG4gICAgICAgIGlmIChlbGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSAwLCBsZW5ndGggPSBlbGVtcy5sZW5ndGg7XG4gICAgICAgICAgICBsZXQgcmVwID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdGVtcCA9IGVsZW1zW2luZGV4XSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgICAgICBpZiAodGVtcC5zdHlsZS5vcGFjaXR5ID09ICcwJykge1xuICAgICAgICAgICAgICAgICAgcmVwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hbmltX2RvbmUgPSByZXA7XG4gICAgICAgICAgICBpZiAodGhpcy5hbmltX2RvbmUpIHtcbiAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwMCk7XG5cbiAgICAvL3J1bi5ydW4oKTtcblxuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmJvdExpc3RlbmluZ1RpbWVyID4gMCkge1xuICAgICAgICB0aGlzLmJvdExpc3RlbmluZ1RpbWVyIC09IDE7XG5cbiAgICAgICAgaWYgKHRoaXMuYm90TGlzdGVuaW5nVGltZXIgPiAwKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvdCcpLmNsYXNzTmFtZSA9ICdhLWN1ZS12b2ljZSBzcGVha2luZydcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm90LWljb24nKS5jbGFzc05hbWUgPSAnYS1jdWUtaWNvbiBzcGVha2luZ2ljb24nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvdCcpLmNsYXNzTmFtZSA9ICdhLWN1ZS12b2ljZSc7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvdC1pY29uJykuY2xhc3NOYW1lID0gJ2EtY3VlLWljb24nXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJvdExpc3RlbmluZyA9IHRoaXMuYm90TGlzdGVuaW5nVGltZXIgPiAwO1xuICAgICAgfVxuICAgIH0sIDUwMClcbiAgfVxuXG4gIHVzZXJXcml0aW5nKGtleSkge1xuICAgIGlmIChrZXkuY29kZSA9PSAnRW50ZXInKSB7XG4gICAgICB0aGlzLmJvdExpc3RlbmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5ib3RMaXN0ZW5pbmdUaW1lciA9IDA7XG4gICAgfSBlbHNlIGlmIChrZXkuY29kZSA9PSAnQmFja3NwYWNlJykge1xuICAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYm90TGlzdGVuaW5nID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLmJvdExpc3RlbmluZ1RpbWVyID09IDApIHtcbiAgICAgICAgdGhpcy5ib3RMaXN0ZW5pbmdUaW1lciArPSAyO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmJvdExpc3RlbmluZ1RpbWVyIDwgNSkge1xuICAgICAgICB0aGlzLmJvdExpc3RlbmluZ1RpbWVyICs9IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGVtaXQoJGV2ZW50KSB7XG4gICAgdGhpcy5maXJzdFZpc2l0ID0gZmFsc2U7XG4gICAgdGhpcy5yZWFkeVNlbmQuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyBfc2VuZCgpIHtcbiAgICBpZiAodGhpcy5MYXN0Qm90QW5zd2VyPy5lbmRPZlRvcGljICYmIHRoaXMuTGFzdFVzZXJJbnB1dCkge1xuICAgICAgdGhpcy5MYXN0VXNlcklucHV0Lm1lc3NhZ2UgPSAnJztcbiAgICB9XG5cbiAgICB0aGlzLmJvdExpc3RlbmluZyA9IGZhbHNlO1xuICAgIGNvbnN0IHVzZXJEYXRhOiBVc2VySW5wdXQgPSB7XG4gICAgICBtZXNzYWdlOiB0aGlzLnVzZXJJbnB1dCxcbiAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKG5hdmlnYXRvci5sYW5ndWFnZSwge1xuICAgICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICAgIG1pbnV0ZTogJzItZGlnaXQnXG4gICAgICB9KVxuICAgIH07XG4gICAgdGhpcy5zZW5kLmVtaXQodXNlckRhdGEpO1xuICAgIHRoaXMudXNlcklucHV0ID0gbnVsbDtcbiAgfVxuXG4gIGFzeW5jIHNjcm9sbChzY3JvbGxIZWlnaHQ6IG51bWJlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxudW1iZXI+KChyZXNvbHZlKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgwKTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGJ5UGFzc1VzZXJJbnB1dChib3RkYXRhOiBzdHJpbmcsIGk/OiBudW1iZXIpIHtcbiAgICAvKmNvbnN0IGJ1dHRvbnM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNob3ctYnRuJyk7XG4gICAgZm9yIChsZXQgYnRuIG9mIEFycmF5LmZyb20oYnV0dG9ucykpIHtcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tYnRuJyk7XG4gICAgfSovXG4gICAgY29uc3QgYnV0dG9uczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm90LWFuc3dlcicpO1xuICAgIGZvciAobGV0IGJ0biBvZiBBcnJheS5mcm9tKGJ1dHRvbnMpKSB7XG4gICAgICBidG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuLWJ0bicpO1xuICAgIH1cbiAgICB0aGlzLnNlbmRCb3RDb21tYW5kLmVtaXQoYm90ZGF0YSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBidXR0b25zOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3QtYW5zd2VyJyk7XG4gICAgICBmb3IgKGxldCBidG4gb2YgQXJyYXkuZnJvbShidXR0b25zKSkge1xuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuLWJ0bicpO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICB9XG59XG4iXX0=