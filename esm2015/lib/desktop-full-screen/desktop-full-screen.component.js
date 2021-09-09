import { __awaiter, __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KonversoService } from '../konverso.service';
import { TranslateService } from '../translate.service';
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
        service.lang.subscribe((r) => {
            if (service.locale) {
                this.sendBtn = translate.translate(service.locale, 'SEND');
                this.select = translate.translate(service.locale, 'SELECT');
            }
        });
    }
    ngOnChanges() {
        var _a, _b, _c;
        this.changed = false;
        if (document.getElementById('text') && !((_a = this.LastBotAnswer) === null || _a === void 0 ? void 0 : _a.text.includes("loading-dots"))) {
            document.getElementById('text').innerHTML = '';
        }
        console.log(this.LastBotAnswer);
        if (this.LastBotAnswer && !((_b = this.LastBotAnswer) === null || _b === void 0 ? void 0 : _b.text.includes("loading-dots"))) {
            var string = (_c = this.LastBotAnswer) === null || _c === void 0 ? void 0 : _c.text.split('&eacute;').join('é').split('&egrave;').join('è').replace(/<[^>]*>?/gm, '').split('&nbsp;').join('');
            if (this.messageCurrent != string) {
                this.newMessage = true;
                this.messageCurrent = string;
                this.launchLoop();
            }
            this.msgArray = string.split("");
            var timer;
            //this.looper(array, timer);
        }
        setTimeout(() => {
            this.changed = true;
        }, 100);
    }
    launchLoop() {
        let timer = setInterval(() => {
            if (this.msgArray.length == 0) {
                clearInterval(timer);
            }
            if (this.newMessage) {
                if (document.getElementById('text')) {
                    document.getElementById('text').innerHTML = '';
                }
                this.newMessage = false;
                this.msgArray = this.messageCurrent.split("");
                clearInterval(timer);
                this.launchLoop();
            }
            this.looper(this.msgArray);
        }, 30);
    }
    looper(array) {
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
    }
    ngOnInit() {
        if (this.PlaceHolder) {
            setInterval(() => {
                this.currentPlaceHolder = this.PlaceHolder[Math.floor(Math.random() * this.PlaceHolder.length)];
            }, 3000);
        }
    }
    userWriting() {
        this.botListening = true;
        setTimeout(() => {
            this.botListening = false;
        }, 2000);
    }
    emit($event) {
        this.firstVisit = false;
        this.readySend.emit(true);
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
        template: "<!--<div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"-->\n<div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"\n     xmlns=\"http://www.w3.org/1999/html\">\n  <div class=\"bot-view\">\n    <ng-container *ngIf=\"firstVisit && firstUsageStory\">\n      <bot-first-visit [firstUsageStory]=\"firstUsageStory\" [assets]=\"assets\"\n                       (ready)=\"emit($event)\"></bot-first-visit>\n    </ng-container>\n    <ng-container *ngIf=\"!firstVisit\">\n      <div class=\"bot-assistant-wrapper\" *ngIf=\"AssistantMode\">\n        <div *ngIf=\"!botListening\" class=\"bot-logo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>\n        <div *ngIf=\"botListening\" class=\"bot-listening\">\n          <div class=\"m-carl-notification\">\n            <div class=\"m-carl-notification-cue m-cue\">\n              <div class=\"a-cue-voice\">\n                <div class=\"a-cue-voice-el\"></div>\n                <div class=\"a-cue-voice-el\"></div>\n                <div class=\"a-cue-voice-el\"></div>\n                <div class=\"a-cue-voice-el\"></div>\n                <div class=\"a-cue-voice-el\"></div>\n              </div>\n              <div class=\"a-cue-icon\"></div>\n            </div>\n          </div>\n        </div>\n        <div class=\"bot-discussion-wrapper\">\n          <ng-container *ngIf=\"LastUserInput\">\n            <div class=\"user-input\" *ngIf=\"LastUserInput\">\n              <div class=\"data\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n                    }\">\n                {{LastUserInput.message}}\n              </div>\n              <span class=\"time\">{{LastUserInput.date}}</span>\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"LastBotAnswer\">\n            <div class=\"bot-answer\">\n              <ng-container>\n\n              </ng-container>\n              <ng-container *ngIf=\"LastBotAnswer.text\">\n                <span *ngIf=\"!LastBotAnswer.text.includes('loading-dots')\" id=\"text\"></span><br>\n                <span *ngIf=\"changed && LastBotAnswer.text.includes('loading-dots')\" class=\"fade\" [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span><br>\n              </ng-container>\n              <ng-container *ngIf=\"LastBotAnswer.medias && LastBotAnswer.medias.length\n                   && LastBotAnswer.medias[0].required_actions\n                   && LastBotAnswer.medias[0].required_actions.length > 0\n                   && !LastBotAnswer.text.includes('loading-dots')\">\n                <ng-container *ngFor=\"let suggest of LastBotAnswer.medias[0].required_actions; let i = index\">\n                  <ng-container *ngIf=\"suggest.format === 'button'\"  >\n                    <button *ngIf=\"suggest.value?.title == 'Terminer' && changed || suggest.value?.title == 'Quit' && changed\" [style]=\"{\n                      borderColor : assets?.ColorSet?.Primary,\n                      color : assets?.ColorSet?.Primary\n             }\"  class=\"bot-button bot-button-left show-btn c\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                             [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                    <button *ngIf=\"suggest.value?.title == 'Nouvelle Demande' && changed || suggest.value?.title == 'New Request' && changed\" [style]=\"{\n                      borderColor : assets?.ColorSet?.Primary,\n                      color : assets?.ColorSet?.Primary\n             }\"  class=\"bot-button bot-button-right show-btn fade\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                             [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                    <button *ngIf=\"suggest.value?.title && suggest.value?.title != 'Terminer' && suggest.value?.title != 'Quit' && suggest.value?.title != 'Nouvelle Demande' && suggest.value?.title != 'New Request' && changed\" \n                    [style]=\"{\n                     borderColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Primary\n            }\"  class=\"bot-button bot-button-grey show-btn fade\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                            [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                  </ng-container>\n                </ng-container>\n              </ng-container>\n\n            </div>\n          </ng-container>\n          <div class=\"bot-input-wrapper\">\n            <div class=\"bot-input\" id=\"bot-input-div\" *ngIf=\"!disableUserInput\">\n              <input type=\"text\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" maxlength=\"200\"\n                     [placeholder]=\"currentPlaceHolder\">\n              <button class=\"bot-button\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n            }\" (click)=\"_send()\" [disabled]=\"!userInput\">{{ sendBtn }}\n              </button>\n            </div>\n            <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\n              <i>{{ select }}</i>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"bot-chat-wrapper\" *ngIf=\"!AssistantMode\">\n        {{AssistantMode}}\n        <div class=\"bot-discussion-wrapper\" #scrollMe [scrollTop]=\"scrollMe.scrollTo(0, 9999999)\">\n          <div class=\"bot-chat\">\n\n            <ng-container *ngFor=\"let entry of displayData\">\n              <ng-container *ngIf=\"entry.date\">\n                <div class=\"user-input\">\n                  <div class=\"data\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n                    }\">\n                    {{entry.message}}\n                  </div>\n                  <span class=\"time\">{{entry.date}}</span>\n                </div>\n              </ng-container>\n              <ng-container *ngIf=\"!entry.date\">\n                <div class=\"bot-answer\">\n                  <ng-container *ngIf=\"entry.text\">\n                    <span *ngIf=\"changed\" class=\"fade\" [innerHTML]=\"entry.text | safeHtml\"></span><br>\n                  </ng-container>\n                  <ng-container *ngIf=\"entry.medias && entry.medias.length\n                   && entry.medias[0].required_actions\n                   && entry.medias[0].required_actions.length\">\n                    <ng-container *ngFor=\"let suggest of entry.medias[0].required_actions\">\n                      <ng-container *ngIf=\"suggest.format === 'button'\">\n                        <button *ngIf=\"changed\" [style]=\"{\n                     borderColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Primary\n            }\" class=\"bot-button fade\" (click)=\"byPassUserInput(suggest?.value?.onClick)\"\n                                [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \"></button>\n                      </ng-container>\n                    </ng-container>\n                  </ng-container>\n\n                </div>\n              </ng-container>\n            </ng-container>\n          </div>\n        </div>\n        <div class=\"bot-input-wrapper\">\n          <div class=\"bot-input\" *ngIf=\"!disableUserInput\">\n            <input type=\"text\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" (keyup)=\"userWriting()\" maxlength=\"200\"\n                   [placeholder]=\"currentPlaceHolder\">\n            <button *ngIf=\"changed\" class=\"bot-button\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n            }\" (click)=\"_send()\" [disabled]=\"!userInput\">{{ sendBtn }}\n            </button>\n          </div>\n          <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\n            <i>{{ select }}</i>\n          </div>\n        </div>\n        <div class=\"bot-logo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>\n      </div>\n    </ng-container>\n\n  </div>\n</div>\n",
        styles: [".bot-listening{height:100%;background:linear-gradient(135deg,#dbecf8 0,#e4f0f8 85%,#ebf3f9 100%)}.bot-listening:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:rgba(238,238,238,.04)}.bot-listening:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:rgba(238,238,238,.04)}.m-carl-notification{position:relative;top:50%;transform:translateY(-60%)}.m-carl-notification .m-cue{width:168px;height:168px;margin:0 auto 50px}.m-carl-notification .m-cue .a-cue-icon{position:absolute;width:163px;height:163px;transform:translateX(5px) translateY(5px);border-radius:50%;background:linear-gradient(180deg,#5bcade 0,#39a3d7 100%);box-shadow:0 0 0 10px rgba(255,255,255,.5)}.m-carl-notification .m-cue .a-cue-voice-el{position:absolute;width:168px;height:168px;border-radius:50%;background:#fff;opacity:.2}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(1){animation:6s infinite reverse both hovering}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(2){-webkit-animation:7s infinite both hovering;animation:7s infinite both hovering}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(3){animation:8s infinite reverse both hovering}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(4){-webkit-animation:9s infinite both hovering;animation:9s infinite both hovering}.m-carl-notification .m-cue .a-cue-voice-el:nth-child(5){animation:10s infinite reverse both hovering}.m-carl-notification .m-cue .a-cue-voice{transform-origin:center center;height:168px;width:168px;position:absolute;-webkit-animation:2s infinite pulse;animation:2s infinite pulse}.m-carl-notification .a-caption{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification .a-caption.speaking{text-shadow:0 0 0;opacity:.4}@-webkit-keyframes hovering{from{transform:rotate(0) translateX(18px) rotate(0)}to{transform:rotate(360deg) translateX(18px) rotate(-360deg)}}@keyframes hovering{from{transform:rotate(0) translateX(18px) rotate(0)}to{transform:rotate(360deg) translateX(18px) rotate(-360deg)}}@-webkit-keyframes pulse{0%,40%,60%{transform:scale(1)}10%,80%{transform:scale(1.15)}15%,50%,90%{transform:scale(1.25)}100%,20%{transform:scale(1.05)}30%,65%{transform:scale(1.3)}55%{transform:scale(1.1)}70%{transform:scale(1.2)}}@keyframes pulse{0%,40%,60%{transform:scale(1)}10%,80%{transform:scale(1.15)}15%,50%,90%{transform:scale(1.25)}100%,20%{transform:scale(1.05)}30%,65%{transform:scale(1.3)}55%{transform:scale(1.1)}70%{transform:scale(1.2)}}"]
    })
], DesktopFullScreenComponent);
export { DesktopFullScreenComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rb252ZXJzby8iLCJzb3VyY2VzIjpbImxpYi9kZXNrdG9wLWZ1bGwtc2NyZWVuL2Rlc2t0b3AtZnVsbC1zY3JlZW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFPeEQsSUFBYSwwQkFBMEIsR0FBdkMsTUFBYSwwQkFBMEI7SUEwQnJDLFlBQVksU0FBMkIsRUFBVSxPQUF3QjtRQUF4QixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQXpCaEUsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFFL0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQU81QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRXpCLGNBQVMsR0FBMEIsSUFBSSxZQUFZLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDcEUsU0FBSSxHQUE0QixJQUFJLFlBQVksQ0FBWSxJQUFJLENBQUMsQ0FBQztRQUNsRSxtQkFBYyxHQUF5QixJQUFJLFlBQVksQ0FBUyxJQUFJLENBQUMsQ0FBQztRQUN0RSxjQUFTLEdBQXlCLElBQUksWUFBWSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBRXBFLHVCQUFrQixHQUFXLEVBQUUsQ0FBQztRQUNoQyxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDZixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZixpQkFBWSxHQUFHLEtB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QUFDdEI7SUFBUixLQUFLLEVBQUU7OERBQTZCO0FBQzVCO0lBQVIsS0FBSyxFQUFFO21FQUEyQjtBQUMxQjtJQUFSLEtBQUssRUFBRTsrREFBa0Q7QUFDakQ7SUFBUixLQUFLLEVBQUU7b0VBQTJCO0FBQzFCO0lBQVIsS0FBSyxFQUFFO2lFQUEwQjtBQUN6QjtJQUFSLEtBQUssRUFBRTtpRUFBb0M7QUFDbkM7SUFBUixLQUFLLEVBQUU7K0RBQXVCO0FBQ3RCO0lBQVIsS0FBSyxFQUFFOzREQUEyQjtBQUV6QjtJQUFULE1BQU0sRUFBRTs2REFBcUU7QUFDcEU7SUFBVCxNQUFNLEVBQUU7d0RBQW1FO0FBQ2xFO0lBQVQsTUFBTSxFQUFFO2tFQUF1RTtBQUN0RTtJQUFULE1BQU0sRUFBRTs2REFBa0U7QUFmaEUsMEJBQTBCO0lBTHRDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsaStRQUFtRDs7S0FFcEQsQ0FBQztHQUNXLDBCQUEwQixDQTJKdEM7U0EzSlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEZWZhdWx0QXNzZXRzLCBPcGVuQ2hhdEJvdFJlc3BvbnNlLCBVc2VySW5wdXR9IGZyb20gJy4uLy4uL2ludGVyZmFjZS9Lb252ZXJzb0ludGVyZmFjZSc7XG5pbXBvcnQgeyBLb252ZXJzb1NlcnZpY2UgfSBmcm9tICcuLi9rb252ZXJzby5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi90cmFuc2xhdGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JvdC1mdWxsLXNjcmVlbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kZXNrdG9wLWZ1bGwtc2NyZWVuLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGVza3RvcEZ1bGxTY3JlZW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIEBJbnB1dCgpIEFzc2lzdGFudE1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgYXNzZXRzOiBEZWZhdWx0QXNzZXRzO1xuICBASW5wdXQoKSBmaXJzdFZpc2l0OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZpcnN0VXNhZ2VTdG9yeTogc3RyaW5nW107XG4gIEBJbnB1dCgpIGRpc3BsYXlEYXRhOiAoVXNlcklucHV0IHwgT3BlbkNoYXRCb3RSZXNwb25zZSlbXTtcbiAgQElucHV0KCkgZGlzYWJsZVVzZXJJbnB1dDogYm9vbGVhbjtcbiAgQElucHV0KCkgTGFzdFVzZXJJbnB1dDogVXNlcklucHV0O1xuICBASW5wdXQoKSBMYXN0Qm90QW5zd2VyOiBPcGVuQ2hhdEJvdFJlc3BvbnNlO1xuICBASW5wdXQoKSBQbGFjZUhvbGRlcjogc3RyaW5nW107XG4gIEBJbnB1dCgpIElzTW9iaWxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIHJlYWR5U2VuZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPihmYWxzZSk7XG4gIEBPdXRwdXQoKSBzZW5kOiBFdmVudEVtaXR0ZXI8VXNlcklucHV0PiA9IG5ldyBFdmVudEVtaXR0ZXI8VXNlcklucHV0PihudWxsKTtcbiAgQE91dHB1dCgpIHNlbmRCb3RDb21tYW5kOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPihudWxsKTtcbiAgQE91dHB1dCgpIHNlbmRFdmVudDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4obnVsbCk7XG4gIHB1YmxpYyB1c2VySW5wdXQ6IHN0cmluZztcbiAgcHVibGljIGN1cnJlbnRQbGFjZUhvbGRlcjogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBzZW5kQnRuID0gJyc7XG4gIHB1YmxpYyBzZWxlY3QgPSAnJztcbiAgcHVibGljIGNoYW5nZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBuZXdNZXNzYWdlID0gZmFsc2U7XG4gIHByaXZhdGUgbWVzc2FnZUN1cnJlbnQgPSAnJztcbiAgcHJpdmF0ZSBtc2dBcnJheSA9IFtdO1xuICBwdWJsaWMgYm90TGlzdGVuaW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IodHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLCBwcml2YXRlIHNlcnZpY2U6IEtvbnZlcnNvU2VydmljZSkge1xuICAgIHNlcnZpY2UubGFuZy5zdWJzY3JpYmUoKHIpID0+IHtcbiAgICAgIGlmIChzZXJ2aWNlLmxvY2FsZSkge1xuICAgICAgICB0aGlzLnNlbmRCdG4gPSB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnU0VORCcpO1xuICAgICAgICB0aGlzLnNlbGVjdCA9IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdTRUxFQ1QnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykgJiYgIXRoaXMuTGFzdEJvdEFuc3dlcj8udGV4dC5pbmNsdWRlcyhcImxvYWRpbmctZG90c1wiKSkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKS5pbm5lckhUTUwgPSAnJztcbiAgICB9XG4gICAgY29uc29sZS5sb2codGhpcy5MYXN0Qm90QW5zd2VyKTtcblxuICAgIGlmICh0aGlzLkxhc3RCb3RBbnN3ZXIgJiYgIXRoaXMuTGFzdEJvdEFuc3dlcj8udGV4dC5pbmNsdWRlcyhcImxvYWRpbmctZG90c1wiKSkge1xuICAgICAgdmFyIHN0cmluZyA9IHRoaXMuTGFzdEJvdEFuc3dlcj8udGV4dFxuICAgICAgICAuc3BsaXQoJyZlYWN1dGU7Jykuam9pbignw6knKVxuICAgICAgICAuc3BsaXQoJyZlZ3JhdmU7Jykuam9pbignw6gnKVxuICAgICAgICAucmVwbGFjZSgvPFtePl0qPj8vZ20sICcnKVxuICAgICAgICAuc3BsaXQoJyZuYnNwOycpLmpvaW4oJycpO1xuXG4gICAgICBpZiAodGhpcy5tZXNzYWdlQ3VycmVudCAhPSBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5uZXdNZXNzYWdlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tZXNzYWdlQ3VycmVudCA9IHN0cmluZztcbiAgICAgICAgdGhpcy5sYXVuY2hMb29wKCk7XG4gICAgICB9XG4gICAgICB0aGlzLm1zZ0FycmF5ID0gc3RyaW5nLnNwbGl0KFwiXCIpO1xuICAgICAgdmFyIHRpbWVyO1xuICAgICAgLy90aGlzLmxvb3BlcihhcnJheSwgdGltZXIpO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jaGFuZ2VkID0gdHJ1ZTtcbiAgICB9LCAxMDApO1xuICB9XG5cbiAgbGF1bmNoTG9vcCgpIHtcbiAgICBsZXQgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5tc2dBcnJheS5sZW5ndGggPT0gMCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm5ld01lc3NhZ2UpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykpIHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5ld01lc3NhZ2UgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tc2dBcnJheSA9IHRoaXMubWVzc2FnZUN1cnJlbnQuc3BsaXQoXCJcIik7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICB0aGlzLmxhdW5jaExvb3AoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubG9vcGVyKHRoaXMubXNnQXJyYXkpO1xuICAgIH0sIDMwKTtcbiAgfVxuXG4gIGxvb3BlcihhcnJheSkge1xuICAgICAgaWYoIGFycmF5Lmxlbmd0aCA+IDAgKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKS5pbm5lckhUTUwgKz0gYXJyYXkuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgfS8qZWxzZSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB9Ki9cbiAgICAgIC8qdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5sb29wZXIoYXJyYXksIHRpbWVyKTtcbiAgICAgIH0sIDMwKTsqL1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuUGxhY2VIb2xkZXIpIHtcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy5jdXJyZW50UGxhY2VIb2xkZXIgPSB0aGlzLlBsYWNlSG9sZGVyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuUGxhY2VIb2xkZXIubGVuZ3RoKV07XG4gICAgICB9LCAzMDAwKTtcbiAgICB9XG4gIH1cblxuICB1c2VyV3JpdGluZygpIHtcbiAgICB0aGlzLmJvdExpc3RlbmluZyA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmJvdExpc3RlbmluZyA9IGZhbHNlO1xuICAgIH0sIDIwMDApXG4gIH1cblxuICBwdWJsaWMgZW1pdCgkZXZlbnQpIHtcbiAgICB0aGlzLmZpcnN0VmlzaXQgPSBmYWxzZTtcbiAgICB0aGlzLnJlYWR5U2VuZC5lbWl0KHRydWUpO1xuICB9XG5cbiAgcHVibGljIF9zZW5kKCkge1xuICAgIGNvbnN0IHVzZXJEYXRhOiBVc2VySW5wdXQgPSB7XG4gICAgICBtZXNzYWdlOiB0aGlzLnVzZXJJbnB1dCxcbiAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKG5hdmlnYXRvci5sYW5ndWFnZSwge1xuICAgICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICAgIG1pbnV0ZTogJzItZGlnaXQnXG4gICAgICB9KVxuICAgIH07XG4gICAgdGhpcy5zZW5kLmVtaXQodXNlckRhdGEpO1xuICAgIHRoaXMudXNlcklucHV0ID0gbnVsbDtcbiAgfVxuXG4gIGFzeW5jIHNjcm9sbChzY3JvbGxIZWlnaHQ6IG51bWJlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxudW1iZXI+KChyZXNvbHZlKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgwKTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGJ5UGFzc1VzZXJJbnB1dChib3RkYXRhOiBzdHJpbmcsIGk/OiBudW1iZXIpIHtcbiAgICAvKmNvbnN0IGJ1dHRvbnM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNob3ctYnRuJyk7XG4gICAgZm9yIChsZXQgYnRuIG9mIEFycmF5LmZyb20oYnV0dG9ucykpIHtcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tYnRuJyk7XG4gICAgfSovXG4gICAgY29uc3QgYnV0dG9uczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm90LWFuc3dlcicpO1xuICAgIGZvciAobGV0IGJ0biBvZiBBcnJheS5mcm9tKGJ1dHRvbnMpKSB7XG4gICAgICBidG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuLWJ0bicpO1xuICAgIH1cbiAgICB0aGlzLnNlbmRCb3RDb21tYW5kLmVtaXQoYm90ZGF0YSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBidXR0b25zOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3QtYW5zd2VyJyk7XG4gICAgICBmb3IgKGxldCBidG4gb2YgQXJyYXkuZnJvbShidXR0b25zKSkge1xuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuLWJ0bicpO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICB9XG59XG4iXX0=