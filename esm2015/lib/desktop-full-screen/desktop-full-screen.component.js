import { __awaiter, __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KonversoService } from '../konverso.service';
import { TranslateService } from '../translate.service';
//import * as run from 'projects/konverso/assets/animatedback.js';
let DesktopFullScreenComponent = class DesktopFullScreenComponent {
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
        this.newMessage = false;
        this.messageCurrent = '';
        this.msgArray = [];
        this.botListening = false;
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
        this.changed = false;
        if (document.getElementById('text') && !((_a = this.LastBotAnswer) === null || _a === void 0 ? void 0 : _a.text.includes("loading-dots"))) {
            document.getElementById('text').innerHTML = '';
        }
        console.log(this.LastBotAnswer);
        if (!this.anim_done) {
            let t2 = setInterval(() => {
                var _a, _b;
                if (this.LastBotAnswer && !((_a = this.LastBotAnswer) === null || _a === void 0 ? void 0 : _a.text.includes("loading-dots")) && this.anim_done) {
                    clearInterval(t2);
                    var string = (_b = this.LastBotAnswer) === null || _b === void 0 ? void 0 : _b.text.split('<br/>').join(` `).split('&eacute;').join('é').split('&egrave;').join('è').replace(/<[^>]*>?/gm, '').split('&nbsp;').join('');
                    this.msgArray = string.split("");
                    if (this.messageCurrent != string) {
                        this.newMessage = true;
                        this.messageCurrent = string;
                        this.launchLoop();
                    }
                    //this.looper(array, timer);
                }
            }, 100);
        }
        else {
            var string = (_b = this.LastBotAnswer) === null || _b === void 0 ? void 0 : _b.text.split('<br/>').join(` `).split('&eacute;').join('é').split('&egrave;').join('è').replace(/<[^>]*>?/gm, '').split('&nbsp;').join('');
            this.msgArray = string.split("");
            if (this.messageCurrent != string && string != '') {
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
        let timer = setInterval(() => {
            console.log(this.reloaded);
            if (this.reloaded) {
                clearInterval(timer);
                console.log(this.msgArray);
                this.reloaded = false;
                this.newMessage = true;
            }
            if (this.msgArray.length == 0) {
                clearInterval(timer);
            }
            if (this.newMessage) {
                if (document.getElementById('text')) {
                    document.getElementById('text').innerHTML = '';
                }
                this.newMessage = false;
                //this.msgArray = this.messageCurrent.split("");
                clearInterval(timer);
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
        if (this.PlaceHolder) {
            setInterval(() => {
                this.currentPlaceHolder = this.PlaceHolder[Math.floor(Math.random() * this.PlaceHolder.length)];
            }, 3000);
        }
        console.log('on passe ici');
        this.reloaded = true;
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
                this.botListening = this.botListeningTimer > 0;
            }
        }, 500);
    }
    userWriting(key) {
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
    }
    emit($event) {
        this.firstVisit = false;
        this.readySend.emit(true);
    }
    _send() {
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
};
DesktopFullScreenComponent.ctorParameters = () => [
    { type: TranslateService },
    { type: KonversoService }
];
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
export { DesktopFullScreenComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rb252ZXJzby8iLCJzb3VyY2VzIjpbImxpYi9kZXNrdG9wLWZ1bGwtc2NyZWVuL2Rlc2t0b3AtZnVsbC1zY3JlZW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsa0VBQWtFO0FBT2xFLElBQWEsMEJBQTBCLEdBQXZDLE1BQWEsMEJBQTBCO0lBNkJyQyxZQUFZLFNBQTJCLEVBQVUsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUE1QmhFLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBRS9CLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFPNUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUV6QixjQUFTLEdBQTBCLElBQUksWUFBWSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBQ3BFLFNBQUksR0FBNEIsSUFBSSxZQUFZLENBQVksSUFBSSxDQUFDLENBQUM7UUFDbEUsbUJBQWMsR0FBeUIsSUFBSSxZQUFZLENBQVMsSUFBSSxDQUFDLENBQUM7UUFDdEUsY0FBUyxHQUF5QixJQUFJLFlBQVksQ0FBUyxJQUFJLENBQUMsQ0FBQztRQUVwRSx1QkFBa0IsR0FBVyxFQUFFLENBQUM7UUFDaEMsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2YsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2Ys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Q2hhbmdlcywgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEZWZhdWx0QXNzZXRzLCBPcGVuQ2hhdEJvdFJlc3BvbnNlLCBVc2VySW5wdXR9IGZyb20gJy4uLy4uL2ludGVyZmFjZS9Lb252ZXJzb0ludGVyZmFjZSc7XG5pbXBvcnQgeyBLb252ZXJzb1NlcnZpY2UgfSBmcm9tICcuLi9rb252ZXJzby5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi90cmFuc2xhdGUuc2VydmljZSc7XG4vL2ltcG9ydCAqIGFzIHJ1biBmcm9tICdwcm9qZWN0cy9rb252ZXJzby9hc3NldHMvYW5pbWF0ZWRiYWNrLmpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYm90LWZ1bGwtc2NyZWVuJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Rlc2t0b3AtZnVsbC1zY3JlZW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kZXNrdG9wLWZ1bGwtc2NyZWVuLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEZXNrdG9wRnVsbFNjcmVlbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgQElucHV0KCkgQXNzaXN0YW50TW9kZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBhc3NldHM6IERlZmF1bHRBc3NldHM7XG4gIEBJbnB1dCgpIGZpcnN0VmlzaXQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgZmlyc3RVc2FnZVN0b3J5OiBzdHJpbmdbXTtcbiAgQElucHV0KCkgZGlzcGxheURhdGE6IChVc2VySW5wdXQgfCBPcGVuQ2hhdEJvdFJlc3BvbnNlKVtdO1xuICBASW5wdXQoKSBkaXNhYmxlVXNlcklucHV0OiBib29sZWFuO1xuICBASW5wdXQoKSBMYXN0VXNlcklucHV0OiBVc2VySW5wdXQ7XG4gIEBJbnB1dCgpIExhc3RCb3RBbnN3ZXI6IE9wZW5DaGF0Qm90UmVzcG9uc2U7XG4gIEBJbnB1dCgpIFBsYWNlSG9sZGVyOiBzdHJpbmdbXTtcbiAgQElucHV0KCkgSXNNb2JpbGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgcmVhZHlTZW5kOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KGZhbHNlKTtcbiAgQE91dHB1dCgpIHNlbmQ6IEV2ZW50RW1pdHRlcjxVc2VySW5wdXQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxVc2VySW5wdXQ+KG51bGwpO1xuICBAT3V0cHV0KCkgc2VuZEJvdENvbW1hbmQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KG51bGwpO1xuICBAT3V0cHV0KCkgc2VuZEV2ZW50OiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPihudWxsKTtcbiAgcHVibGljIHVzZXJJbnB1dDogc3RyaW5nO1xuICBwdWJsaWMgY3VycmVudFBsYWNlSG9sZGVyOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIHNlbmRCdG4gPSAnJztcbiAgcHVibGljIHNlbGVjdCA9ICcnO1xuICBwdWJsaWMgY2hhbmdlZCA9IGZhbHNlO1xuICBwcml2YXRlIG5ld01lc3NhZ2UgPSBmYWxzZTtcbiAgcHJpdmF0ZSBtZXNzYWdlQ3VycmVudCA9ICcnO1xuICBwcml2YXRlIG1zZ0FycmF5ID0gW107XG4gIHB1YmxpYyBib3RMaXN0ZW5pbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBib3RMaXN0ZW5pbmdUaW1lciA9IDA7XG4gIHByaXZhdGUgYW5pbV9kb25lID0gZmFsc2U7XG4gIHByaXZhdGUgcmVsb2FkZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsIHByaXZhdGUgc2VydmljZTogS29udmVyc29TZXJ2aWNlKSB7XG4gICAgc2VydmljZS5sYW5nLnN1YnNjcmliZSgocikgPT4ge1xuICAgICAgaWYgKHNlcnZpY2UubG9jYWxlKSB7XG4gICAgICAgIHRoaXMuc2VuZEJ0biA9IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdTRU5EJyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ID0gdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ1NFTEVDVCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XG5cbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKSAmJiAhdGhpcy5MYXN0Qm90QW5zd2VyPy50ZXh0LmluY2x1ZGVzKFwibG9hZGluZy1kb3RzXCIpKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpLmlubmVySFRNTCA9ICcnO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLkxhc3RCb3RBbnN3ZXIpO1xuXG4gICAgaWYgKCF0aGlzLmFuaW1fZG9uZSkge1xuICAgICAgbGV0IHQyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5MYXN0Qm90QW5zd2VyICYmICF0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHQuaW5jbHVkZXMoXCJsb2FkaW5nLWRvdHNcIikgJiYgdGhpcy5hbmltX2RvbmUpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKHQyKTtcbiAgICAgICAgICB2YXIgc3RyaW5nID0gdGhpcy5MYXN0Qm90QW5zd2VyPy50ZXh0XG4gICAgICAgICAgICAuc3BsaXQoJzxici8+Jykuam9pbihgIGApXG4gICAgICAgICAgICAuc3BsaXQoJyZlYWN1dGU7Jykuam9pbignw6knKVxuICAgICAgICAgICAgLnNwbGl0KCcmZWdyYXZlOycpLmpvaW4oJ8OoJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC88W14+XSo+Py9nbSwgJycpXG4gICAgICAgICAgICAuc3BsaXQoJyZuYnNwOycpLmpvaW4oJycpO1xuICBcbiAgICAgICAgICB0aGlzLm1zZ0FycmF5ID0gc3RyaW5nLnNwbGl0KFwiXCIpO1xuICAgICAgICAgIGlmICh0aGlzLm1lc3NhZ2VDdXJyZW50ICE9IHN0cmluZykge1xuICAgICAgICAgICAgdGhpcy5uZXdNZXNzYWdlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZUN1cnJlbnQgPSBzdHJpbmc7XG4gICAgICAgICAgICB0aGlzLmxhdW5jaExvb3AoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy90aGlzLmxvb3BlcihhcnJheSwgdGltZXIpO1xuICAgICAgICB9XG4gICAgICB9LCAxMDApXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzdHJpbmcgPSB0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHRcbiAgICAgICAgICAuc3BsaXQoJzxici8+Jykuam9pbihgIGApXG4gICAgICAgICAgLnNwbGl0KCcmZWFjdXRlOycpLmpvaW4oJ8OpJylcbiAgICAgICAgICAuc3BsaXQoJyZlZ3JhdmU7Jykuam9pbignw6gnKVxuICAgICAgICAgIC5yZXBsYWNlKC88W14+XSo+Py9nbSwgJycpXG4gICAgICAgICAgLnNwbGl0KCcmbmJzcDsnKS5qb2luKCcnKTtcblxuICAgICAgICB0aGlzLm1zZ0FycmF5ID0gc3RyaW5nLnNwbGl0KFwiXCIpO1xuICAgICAgICBpZiAodGhpcy5tZXNzYWdlQ3VycmVudCAhPSBzdHJpbmcgJiYgc3RyaW5nICE9ICcnKSB7XG4gICAgICAgICAgdGhpcy5uZXdNZXNzYWdlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2VDdXJyZW50ID0gc3RyaW5nO1xuICAgICAgICAgIHRoaXMubGF1bmNoTG9vcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZWQgPSB0cnVlO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBsYXVuY2hMb29wKCkge1xuICAgIGxldCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVsb2FkZWQpO1xuICAgICAgaWYgKHRoaXMucmVsb2FkZWQpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubXNnQXJyYXkpXG4gICAgICAgIHRoaXMucmVsb2FkZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5uZXdNZXNzYWdlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm1zZ0FycmF5Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubmV3TWVzc2FnZSkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKSkge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMubmV3TWVzc2FnZSA9IGZhbHNlO1xuICAgICAgICAvL3RoaXMubXNnQXJyYXkgPSB0aGlzLm1lc3NhZ2VDdXJyZW50LnNwbGl0KFwiXCIpO1xuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgdGhpcy5sYXVuY2hMb29wKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmxvb3BlcigpO1xuICAgIH0sIDYwKTtcbiAgfVxuXG4gIGxvb3BlcigpIHtcbiAgICAgIGlmKHRoaXMubXNnQXJyYXkubGVuZ3RoID4gMCAmJiAhdGhpcy5yZWxvYWRlZCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKSkge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykuaW5uZXJIVE1MICs9IHRoaXMubXNnQXJyYXkuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgfS8qZWxzZSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB9Ki9cbiAgICAgIC8qdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5sb29wZXIoYXJyYXksIHRpbWVyKTtcbiAgICAgIH0sIDMwKTsqL1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuUGxhY2VIb2xkZXIpIHtcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy5jdXJyZW50UGxhY2VIb2xkZXIgPSB0aGlzLlBsYWNlSG9sZGVyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuUGxhY2VIb2xkZXIubGVuZ3RoKV07XG4gICAgICB9LCAzMDAwKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnb24gcGFzc2UgaWNpJyk7XG4gICAgdGhpcy5yZWxvYWRlZCA9IHRydWU7XG5cbiAgICBsZXQgdCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm90LWFuc3dlcicpKSB7XG4gICAgICAgIGxldCBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3QtYW5zd2VyJylcbiAgICAgICAgaWYgKGVsZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IDAsIGxlbmd0aCA9IGVsZW1zLmxlbmd0aDtcbiAgICAgICAgICAgIGxldCByZXAgPSB0cnVlO1xuICAgICAgICAgICAgZm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gZWxlbXNbaW5kZXhdIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgICAgIGlmICh0ZW1wLnN0eWxlLm9wYWNpdHkgPT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgICByZXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFuaW1fZG9uZSA9IHJlcDtcbiAgICAgICAgICAgIGlmICh0aGlzLmFuaW1fZG9uZSkge1xuICAgICAgICAgICAgICBjbGVhckludGVydmFsKHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMTAwKTtcblxuICAgIC8vcnVuLnJ1bigpO1xuXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuYm90TGlzdGVuaW5nVGltZXIgPiAwKSB7XG4gICAgICAgIHRoaXMuYm90TGlzdGVuaW5nVGltZXIgLT0gMTtcblxuICAgICAgICB0aGlzLmJvdExpc3RlbmluZyA9IHRoaXMuYm90TGlzdGVuaW5nVGltZXIgPiAwO1xuICAgICAgfVxuICAgIH0sIDUwMClcbiAgfVxuXG4gIHVzZXJXcml0aW5nKGtleSkge1xuICAgIGlmIChrZXkuY29kZSA9PSAnRW50ZXInKSB7XG4gICAgICB0aGlzLmJvdExpc3RlbmluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5ib3RMaXN0ZW5pbmdUaW1lciA9IDA7XG4gICAgfSBlbHNlIGlmIChrZXkuY29kZSA9PSAnQmFja3NwYWNlJykge1xuICAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYm90TGlzdGVuaW5nID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLmJvdExpc3RlbmluZ1RpbWVyID09IDApIHtcbiAgICAgICAgdGhpcy5ib3RMaXN0ZW5pbmdUaW1lciArPSAyO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmJvdExpc3RlbmluZ1RpbWVyIDwgNSkge1xuICAgICAgICB0aGlzLmJvdExpc3RlbmluZ1RpbWVyICs9IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGVtaXQoJGV2ZW50KSB7XG4gICAgdGhpcy5maXJzdFZpc2l0ID0gZmFsc2U7XG4gICAgdGhpcy5yZWFkeVNlbmQuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyBfc2VuZCgpIHtcbiAgICB0aGlzLmJvdExpc3RlbmluZyA9IGZhbHNlO1xuICAgIGNvbnN0IHVzZXJEYXRhOiBVc2VySW5wdXQgPSB7XG4gICAgICBtZXNzYWdlOiB0aGlzLnVzZXJJbnB1dCxcbiAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKG5hdmlnYXRvci5sYW5ndWFnZSwge1xuICAgICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICAgIG1pbnV0ZTogJzItZGlnaXQnXG4gICAgICB9KVxuICAgIH07XG4gICAgdGhpcy5zZW5kLmVtaXQodXNlckRhdGEpO1xuICAgIHRoaXMudXNlcklucHV0ID0gbnVsbDtcbiAgfVxuXG4gIGFzeW5jIHNjcm9sbChzY3JvbGxIZWlnaHQ6IG51bWJlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxudW1iZXI+KChyZXNvbHZlKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgwKTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGJ5UGFzc1VzZXJJbnB1dChib3RkYXRhOiBzdHJpbmcsIGk/OiBudW1iZXIpIHtcbiAgICAvKmNvbnN0IGJ1dHRvbnM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNob3ctYnRuJyk7XG4gICAgZm9yIChsZXQgYnRuIG9mIEFycmF5LmZyb20oYnV0dG9ucykpIHtcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tYnRuJyk7XG4gICAgfSovXG4gICAgY29uc3QgYnV0dG9uczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm90LWFuc3dlcicpO1xuICAgIGZvciAobGV0IGJ0biBvZiBBcnJheS5mcm9tKGJ1dHRvbnMpKSB7XG4gICAgICBidG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuLWJ0bicpO1xuICAgIH1cbiAgICB0aGlzLnNlbmRCb3RDb21tYW5kLmVtaXQoYm90ZGF0YSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBidXR0b25zOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3QtYW5zd2VyJyk7XG4gICAgICBmb3IgKGxldCBidG4gb2YgQXJyYXkuZnJvbShidXR0b25zKSkge1xuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuLWJ0bicpO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICB9XG59XG4iXX0=