import { __awaiter, __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { KonversoService } from './konverso.service';
import { BotMessageSample } from '../Sample/BotMessageSample';
import { DotLoaderTemplate } from '../Sample/DotLoader';
// @ts-ignore
let KonversoComponent = class KonversoComponent {
    constructor(service) {
        this.service = service;
        this._ready = new EventEmitter();
        this.ready = new EventEmitter();
        this.AssistantMode = false;
        this.disableUserInput = false;
        if (service._auth) {
            this.service.authentication.subscribe(() => {
                this.ngOnInit();
            });
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
            const index = this.History.length - 1;
            const response = yield this.service.send($event.message).catch((err) => {
                console.log('We got an error ', err);
                // @ts-ignore
                this.History[index].error = true;
            });
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
        });
    }
    sendBotCommand($event, push = true) {
        return __awaiter(this, void 0, void 0, function* () {
            this.LastBotAnswer.text = '<br>' + DotLoaderTemplate(this.service.ColorSet.Primary);
            if ($event === 'yes_response' || $event === 'no_response') {
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
};
KonversoComponent.ctorParameters = () => [
    { type: KonversoService }
];
__decorate([
    Output()
], KonversoComponent.prototype, "ready", void 0);
KonversoComponent = __decorate([
    Component({
        selector: 'ngx-konverso',
        template: "<bot-full-screen [class]=\"isMobile ? 'bot-mobile' : ''\"\n                 [assets]=\"assets\"\n                 [firstVisit]=\"firstVisit\"\n                 [firstUsageStory]=\"firstUsageStory\"\n                 (send)=\"send($event)\"\n                 (sendBotCommand)=\"sendBotCommand($event)\"\n                 [displayData]=\"History\"\n                 [disableUserInput]=\"disableUserInput\"\n                 [LastBotAnswer]=\"LastBotAnswer\"\n                 [LastUserInput]=\"LastUserInput\"\n                 [AssistantMode]=\"AssistantMode\"\n                 [PlaceHolder]=\"PlaceHolder\"\n                 [IsMobile]=\"isMobile\"\n                 (readySend)=\"_ready.emit($event)\"\n></bot-full-screen>\n\n\n",
        styles: ["::ng-deep ngx-konverso{overflow:hidden;display:block;min-height:100%;height:100%}::ng-deep ngx-konverso .hidden-btn{transform:translateY(-100vh)!important;transition:transform .5s ease-in-out!important;animation:.5s fadeout;-moz-animation:.5s fadeout;-webkit-animation:.5s fadeout;-o-animation:.5s fadeout}@keyframes fadeout{from{opacity:1}to{opacity:0}}@-webkit-keyframes fadeout{from{opacity:1}to{opacity:0}}@-webkit-keyframes dot-keyframes{0%,100%{opacity:.4;transform:scale(1,1)}50%{opacity:1;transform:scale(1.2,1.2)}}@keyframes dot-keyframes{0%,100%{opacity:.4;transform:scale(1,1)}50%{opacity:1;transform:scale(1.2,1.2)}}::ng-deep ngx-konverso .loading-dots{text-align:center;width:100%}::ng-deep ngx-konverso .loading-dots--dot{-webkit-animation:1.5s ease-in-out infinite dot-keyframes;animation:1.5s ease-in-out infinite dot-keyframes;border-radius:10px;display:inline-block;height:10px;width:10px}::ng-deep ngx-konverso .loading-dots--dot:nth-child(2){-webkit-animation-delay:.5s;animation-delay:.5s}::ng-deep ngx-konverso .loading-dots--dot:nth-child(3){-webkit-animation-delay:1s;animation-delay:1s}::ng-deep ngx-konverso bot-first-visit,::ng-deep ngx-konverso bot-full-screen{display:table;min-height:100%;height:100%;width:100%}::ng-deep ngx-konverso bot-full-screen button:focus,::ng-deep ngx-konverso bot-full-screen input:focus{outline:0!important}::ng-deep ngx-konverso bot-full-screen .bot-button>*{position:relative}::ng-deep ngx-konverso bot-full-screen .button-lg{padding:10px!important;font-size:16px!important}::ng-deep ngx-konverso bot-full-screen .bot-button{cursor:pointer;opacity:.9;min-width:150px;border-radius:25px;padding:5px;position:relative;margin:30px auto;overflow:hidden;border-width:0;outline:0;box-shadow:0 1px 4px rgba(0,0,0,.6);transition:opacity .3s}::ng-deep ngx-konverso bot-full-screen .bot-button span{display:block;padding:12px 24px}::ng-deep ngx-konverso bot-full-screen .bot-button:focus,::ng-deep ngx-konverso bot-full-screen .bot-button:hover{opacity:1}::ng-deep ngx-konverso bot-full-screen .bot-button:before{content:\"\";position:absolute;top:50%;left:50%;display:block;width:0;padding-top:0;border-radius:100%;background-color:rgba(236,240,241,.3);transform:translate(-50%,-50%)}::ng-deep ngx-konverso bot-full-screen .bot-button:active:before{width:120%;padding-top:120%;transition:width .2s ease-out,padding-top .2s ease-out}::ng-deep ngx-konverso bot-full-screen .bot-button-left{background:linear-gradient(107deg,#4862ab 0,#9d107d 100%) no-repeat padding-box;border-radius:22px;color:#fff!important;font:12px/19px nexa;height:44px;display:inline-block;letter-spacing:0;margin-right:25px}::ng-deep ngx-konverso bot-full-screen .bot-button-right{background:no-repeat padding-box #e5e8EE54;border:2px solid #c2c8d5!important;color:#404e6b!important;border-radius:22px;font:12px/19px nexa;height:44px;letter-spacing:0;display:inline-block}::ng-deep ngx-konverso bot-full-screen .bot-button-grey{background:no-repeat padding-box #e5e8ee!important;border:2px solid #c2c8d5!important;border-radius:10px!important;min-height:44px!important;color:#77839b!important;display:inline-block!important;margin-right:25px!important}::ng-deep ngx-konverso bot-full-screen .bot-container{font-family:nexa,Roboto;width:100%;height:100%;display:table;margin:auto;background-size:contain}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view{background-size:contain;width:auto;margin:auto;height:100%;display:table-cell;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view img{margin:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper{padding-top:5%;width:100%;margin:auto;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:20px;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step{margin-top:5%;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step .bot-init-dot{border:1px solid;display:inline-block;width:12px;height:12px;margin-left:2.5px;margin-right:2.5px;border-radius:50%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-button-wrapper{display:block;width:100%;text-align:center;margin-top:8%;margin-right:auto;margin-left:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper{display:table;height:100%;max-height:100%;overflow:hidden;width:100%;position:relative}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-logo{padding-top:2.5%;width:100%;margin:auto;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-logo img{margin-left:auto;margin-right:auto;display:block;width:150px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-answer{width:600px;text-align:center;margin:2.5% auto auto;font-size:25px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .user-input{font-size:15px;margin:auto;display:block}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .user-input .data{padding:10px 20px;border-radius:25px 25px 0;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:5% auto auto;background-color:#00a9de}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .user-input .time{font-weight:300;position:absolute;width:200px;display:none;margin-left:95%;bottom:-1%;color:#000;font-size:10px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-input-wrapper{text-align:center;position:absolute;width:100%;bottom:2%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-input-wrapper input{text-align:center;display:inline-block;padding:10px;border-radius:25px;color:#000;width:40%!important;border:1px solid rgba(0,0,0,.2);background:no-repeat padding-box #e5e8ee;margin-right:10px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-input-wrapper button{display:inline-block;width:calc(10% - 15px);padding:11px;background:linear-gradient(243deg,#9d107d 0,#4862ab 100%) no-repeat padding-box!important;border-radius:25px!important}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper{width:100%;display:table;height:100%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo{max-width:100px;position:absolute;top:2%;left:2%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo img{max-width:100px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper{width:100%;position:relative;max-width:600px;height:calc(85vh - 50px);padding:15px 30px;margin:0 auto;overflow-y:scroll;direction:rtl}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper::-webkit-scrollbar{width:0!important}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat{position:absolute;overflow-x:hidden;display:flex;flex-direction:column-reverse;justify-content:flex-end;transform:rotate(180deg);min-height:100%;width:94%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer{font-size:15px;padding:10px 20px;border-radius:25px;color:#000;background-color:transparent;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;margin:15px 0;word-break:break-all;transform:rotate(180deg);direction:ltr}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer button{padding:10px;border:1px solid}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input{font-size:15px;transform:rotate(180deg);direction:ltr}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .data{padding:10px 20px;border-radius:25px 25px 0;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:15px 0 15px auto;background-color:#00a9de}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .time{font-weight:300;position:absolute;width:200px;display:none;margin-left:95%;bottom:-1%;color:#000;font-size:10px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper{display:table;width:100%;margin:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input-disable{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5% .3%;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input input{display:inline-block;padding:10px;border-radius:25px;color:#000;width:60%;margin-right:15px;border:1px solid rgba(0,0,0,.2)}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input button{display:inline-block;width:calc(36% - 15px);padding:11px}::ng-deep ngx-konverso .bot-mobile{font-family:nexa,Roboto;width:96vw!important;height:100vh;display:table;margin:auto;background-size:contain}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit{position:relative}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-logo-init-wrapper{margin-top:2.5vh}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block;max-width:150px}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:15px!important;text-align:center}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-init-button-wrapper{position:absolute;top:70vh}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-answer{width:70vw!important;text-align:center;margin:15.5% auto auto!important;font-size:15px!important}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-input-wrapper{background:#fff;bottom:10vh!important}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-input-wrapper input{width:90%!important}span{color:#fff!important}"]
    })
], KonversoComponent);
export { KonversoComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29udmVyc28uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8va29udmVyc28vIiwic291cmNlcyI6WyJsaWIva29udmVyc28uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRXRELGFBQWE7QUFNYixJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQWlCNUIsWUFBb0IsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFoQnJDLFdBQU0sR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN6RCxVQUFLLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFNOUQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFHdEIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBTzlCLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUN6QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUE7UUFDOUYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FB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QUdGLENBQUE7O1lBN0g4QixlQUFlOztBQWZsQztJQUFULE1BQU0sRUFBRTtnREFBNEQ7QUFGMUQsaUJBQWlCO0lBTDdCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLHN1QkFBc0M7O0tBRXZDLENBQUM7R0FDVyxpQkFBaUIsQ0E4STdCO1NBOUlZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7S29udmVyc29TZXJ2aWNlfSBmcm9tICcuL2tvbnZlcnNvLnNlcnZpY2UnO1xuaW1wb3J0IHtDb2xvclNldCwgRGVmYXVsdEFzc2V0cywgS29udmVyc29BbnN3ZXIsIE9wZW5DaGF0Qm90UmVzcG9uc2UsIFVzZXJJbnB1dH0gZnJvbSAnLi4vaW50ZXJmYWNlL0tvbnZlcnNvSW50ZXJmYWNlJztcbmltcG9ydCB7Qm90TWVzc2FnZVNhbXBsZX0gZnJvbSAnLi4vU2FtcGxlL0JvdE1lc3NhZ2VTYW1wbGUnO1xuaW1wb3J0IHtEb3RMb2FkZXJUZW1wbGF0ZX0gZnJvbSAnLi4vU2FtcGxlL0RvdExvYWRlcic7XG5cbi8vIEB0cy1pZ25vcmVcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1rb252ZXJzbycsXG4gIHRlbXBsYXRlVXJsOiAna29udmVyc28uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi4vLi4vYXNzZXRzL21haW4uc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEtvbnZlcnNvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIF9yZWFkeTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgcmVhZHk6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgcHVibGljIHF1ZXJ5OiBzdHJpbmc7XG4gIHB1YmxpYyBpc01vYmlsZTogYm9vbGVhbjtcbiAgcHVibGljIGFzc2V0czogRGVmYXVsdEFzc2V0cztcbiAgcHVibGljIGZpcnN0VmlzaXQ6IGJvb2xlYW47XG4gIHB1YmxpYyBmaXJzdFVzYWdlU3Rvcnk6IHN0cmluZ1tdO1xuICBwdWJsaWMgQXNzaXN0YW50TW9kZSA9IGZhbHNlO1xuICBwdWJsaWMgY29sb3JTZXQ6IENvbG9yU2V0O1xuICBwdWJsaWMgSGlzdG9yeTogKFVzZXJJbnB1dCB8IE9wZW5DaGF0Qm90UmVzcG9uc2UpW107XG4gIHB1YmxpYyBkaXNhYmxlVXNlcklucHV0ID0gZmFsc2U7XG4gIHB1YmxpYyBMYXN0VXNlcklucHV0OiBVc2VySW5wdXQ7XG4gIHB1YmxpYyBMYXN0Qm90QW5zd2VyOiBPcGVuQ2hhdEJvdFJlc3BvbnNlO1xuICBwdWJsaWMgUGxhY2VIb2xkZXI6IHN0cmluZ1tdO1xuICBwdWJsaWMgV2VsY29tZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogS29udmVyc29TZXJ2aWNlKSB7XG4gICAgaWYgKHNlcnZpY2UuX2F1dGgpIHtcbiAgICAgIHRoaXMuc2VydmljZS5hdXRoZW50aWNhdGlvbi5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKCd1c2VyIGFnZW50JywgbmF2aWdhdG9yLnVzZXJBZ2VudCwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBob25lfGlQYWR8aVBvZC9pKSlcbiAgICB0aGlzLmlzTW9iaWxlID0gdGhpcy5faXNNb2JpbGUoKTtcbiAgICB0aGlzLmFzc2V0cyA9IHRoaXMuc2VydmljZS5hc3NldHM7XG4gICAgdGhpcy5maXJzdFZpc2l0ID0gdGhpcy5zZXJ2aWNlLmZpcnN0VmlzaXQ7XG4gICAgdGhpcy5maXJzdFVzYWdlU3RvcnkgPSB0aGlzLnNlcnZpY2UuZmlyc3RVc2FnZVN0b3J5O1xuICAgIHRoaXMuQXNzaXN0YW50TW9kZSA9IHRoaXMuc2VydmljZS5Bc3Npc3RhbnRNb2RlO1xuICAgIHRoaXMuUGxhY2VIb2xkZXIgPSB0aGlzLnNlcnZpY2UuUGxhY2VIb2xkZXI7XG4gICAgdGhpcy5XZWxjb21lID0gdGhpcy5zZXJ2aWNlLldlbGNvbWU7XG4gICAgdGhpcy5zZW5kQm90Q29tbWFuZCgnZXhpdCcsIGZhbHNlKS5jYXRjaCgoZXJyOiBhbnkpID0+IGNvbnNvbGUubG9nKCdmYWlsIHJlc2V0IHNlc3Npb24nKSk7XG4gICAgdGhpcy5IaXN0b3J5ID0gW107XG4gICAgaWYgKHRoaXMuc2VydmljZS5Db2xvclNldCkge1xuICAgICAgdGhpcy5jb2xvclNldCA9IHRoaXMuc2VydmljZS5Db2xvclNldDtcbiAgICB9XG4gICAgdGhpcy5fcmVhZHkuc3Vic2NyaWJlKChyZWFkeTogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKHJlYWR5KSB7XG4gICAgICAgIHRoaXMuZmlyc3RWaXNpdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlcnZpY2UuZmlyc3RWaXNpdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJlYWR5LmVtaXQocmVhZHkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0aGlzLldlbGNvbWUpIHtcbiAgICAgIGNvbnN0IGN1c3RvbVdlbGNvbWU6IE9wZW5DaGF0Qm90UmVzcG9uc2UgPSBCb3RNZXNzYWdlU2FtcGxlO1xuICAgICAgY3VzdG9tV2VsY29tZS50ZXh0ID0gdGhpcy5XZWxjb21lO1xuICAgICAgdGhpcy5MYXN0Qm90QW5zd2VyID0gY3VzdG9tV2VsY29tZTtcbiAgICAgIHRoaXMuSGlzdG9yeS5wdXNoKGN1c3RvbVdlbGNvbWUpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHNlbmQoJGV2ZW50OiBVc2VySW5wdXQpIHtcbiAgICBpZiAoJGV2ZW50Lm1lc3NhZ2UgPT09ICdleGl0Jykge1xuICAgICAgdGhpcy5zZW5kQm90Q29tbWFuZCgnZXhpdCcsIGZhbHNlKS5jYXRjaCgoZXJyOiBhbnkpID0+IGNvbnNvbGUubG9nKCdmYWlsIHJlc2V0IHNlc3Npb24nKSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuTGFzdEJvdEFuc3dlci50ZXh0ID0gJzxicj4nICsgRG90TG9hZGVyVGVtcGxhdGUodGhpcy5zZXJ2aWNlLkNvbG9yU2V0LlByaW1hcnkpO1xuICAgIHRoaXMuSGlzdG9yeS5wdXNoKCRldmVudCk7XG4gICAgaWYgKHRoaXMuQXNzaXN0YW50TW9kZSkge1xuICAgICAgaWYgKHRoaXMuTGFzdFVzZXJJbnB1dCkge1xuICAgICAgICB0aGlzLkxhc3RVc2VySW5wdXQubWVzc2FnZSArPSAnICcgKyAkZXZlbnQubWVzc2FnZTtcbiAgICAgICAgdGhpcy5MYXN0VXNlcklucHV0LmRhdGUgPSAkZXZlbnQuZGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuTGFzdFVzZXJJbnB1dCA9ICRldmVudDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5MYXN0VXNlcklucHV0ID0gJGV2ZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSB0aGlzLkhpc3RvcnkubGVuZ3RoIC0gMTtcbiAgICBjb25zdCByZXNwb25zZTogS29udmVyc29BbnN3ZXIgPSBhd2FpdCB0aGlzLnNlcnZpY2Uuc2VuZCgkZXZlbnQubWVzc2FnZSkuY2F0Y2goKGVycjogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnV2UgZ290IGFuIGVycm9yICcsIGVycik7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLkhpc3RvcnlbaW5kZXhdLmVycm9yID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UucmVzcG9uc2UpIHtcbiAgICAgIGlmIChyZXNwb25zZS5yZXNwb25zZS5tZWRpYXMgJiYgcmVzcG9uc2UucmVzcG9uc2UubWVkaWFzWzBdICYmIHJlc3BvbnNlLnJlc3BvbnNlLm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zICYmXG4gICAgICAgIHJlc3BvbnNlLnJlc3BvbnNlLm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmRpc2FibGVVc2VySW5wdXQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlVXNlcklucHV0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLkxhc3RCb3RBbnN3ZXIgPSByZXNwb25zZS5yZXNwb25zZTtcbiAgICAgIHRoaXMuSGlzdG9yeS5wdXNoKHJlc3BvbnNlLnJlc3BvbnNlKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBzZW5kQm90Q29tbWFuZCgkZXZlbnQ6IHN0cmluZywgcHVzaDogYm9vbGVhbiA9IHRydWUpIHtcbiAgICB0aGlzLkxhc3RCb3RBbnN3ZXIudGV4dCA9ICc8YnI+JyArIERvdExvYWRlclRlbXBsYXRlKHRoaXMuc2VydmljZS5Db2xvclNldC5QcmltYXJ5KTtcbiAgICBpZiAoJGV2ZW50ID09PSAneWVzX3Jlc3BvbnNlJyB8fCAkZXZlbnQgPT09ICdub19yZXNwb25zZScpIHtcbiAgICAgIHRoaXMuTGFzdFVzZXJJbnB1dCA9IG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHJlc3BvbnNlOiBLb252ZXJzb0Fuc3dlciA9IGF3YWl0IHRoaXMuc2VydmljZS5zZW5kKCRldmVudCkuY2F0Y2goKGVycjogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnV2UgZ290IGFuIGVycm9yICcsIGVycik7XG4gICAgfSk7XG4gICAgaWYgKHJlc3BvbnNlLnJlc3BvbnNlLm1lZGlhcyAmJiByZXNwb25zZS5yZXNwb25zZS5tZWRpYXNbMF0gJiYgcmVzcG9uc2UucmVzcG9uc2UubWVkaWFzWzBdLnJlcXVpcmVkX2FjdGlvbnMgJiZcbiAgICAgIHJlc3BvbnNlLnJlc3BvbnNlLm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zLmxlbmd0aCkge1xuICAgICAgdGhpcy5kaXNhYmxlVXNlcklucHV0ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNhYmxlVXNlcklucHV0ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5yZXNwb25zZSAmJiBwdXNoKSB7XG4gICAgICB0aGlzLkxhc3RCb3RBbnN3ZXIgPSByZXNwb25zZS5yZXNwb25zZTtcbiAgICAgIHRoaXMuSGlzdG9yeS5wdXNoKHJlc3BvbnNlLnJlc3BvbnNlKTtcbiAgICB9IGVsc2UgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnJlc3BvbnNlICYmICFwdXNoKSB7XG4gICAgICB0aGlzLkxhc3RVc2VySW5wdXQgPSBudWxsO1xuICAgICAgdGhpcy5MYXN0Qm90QW5zd2VyID0gcmVzcG9uc2UucmVzcG9uc2U7XG4gICAgICB0aGlzLkhpc3RvcnkucHVzaChyZXNwb25zZS5yZXNwb25zZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuTGFzdFVzZXJJbnB1dCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaXNNb2JpbGUoKTogYm9vbGVhbiB7XG5cbiAgICBjb25zdCBpc01vYmlsZSA9IHtcbiAgICAgIEFuZHJvaWQ6ICgpOiBib29sZWFuID0+IHtcbiAgICAgICAgcmV0dXJuICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKTtcbiAgICAgIH0sXG4gICAgICBCbGFja0JlcnJ5OiAoKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIHJldHVybiAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSk7XG4gICAgICB9LFxuICAgICAgaU9TOiAoKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIHJldHVybiAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZXxpUGFkfGlQb2QvaSk7XG4gICAgICB9LFxuICAgICAgT3BlcmE6ICgpOiBib29sZWFuID0+IHtcbiAgICAgICAgcmV0dXJuICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvT3BlcmEgTWluaS9pKTtcbiAgICAgIH0sXG4gICAgICBXaW5kb3dzOiAoKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIHJldHVybiAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0lFTW9iaWxlL2kpIHx8ICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvV1BEZXNrdG9wL2kpO1xuICAgICAgfSxcbiAgICAgIGFueTogKCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICByZXR1cm4gISEoaXNNb2JpbGUuQW5kcm9pZCgpIHx8IGlzTW9iaWxlLkJsYWNrQmVycnkoKSB8fCBpc01vYmlsZS5pT1MoKSB8fCBpc01vYmlsZS5PcGVyYSgpIHx8IGlzTW9iaWxlLldpbmRvd3MoKSk7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gaXNNb2JpbGUuYW55KCk7XG4gIH1cblxuXG59XG4iXX0=