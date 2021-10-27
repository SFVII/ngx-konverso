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
            console.log($event.message);
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
        styles: ["::ng-deep ngx-konverso{overflow:hidden;display:block;min-height:100%;height:100%}::ng-deep ngx-konverso .hidden-btn{transform:translateY(-100vh)!important;transition:transform .5s ease-in-out!important;animation:.5s fadeout;-moz-animation:.5s fadeout;-webkit-animation:.5s fadeout;-o-animation:.5s fadeout}@keyframes fadeout{from{opacity:1}to{opacity:0}}@-webkit-keyframes fadeout{from{opacity:1}to{opacity:0}}@-webkit-keyframes dot-keyframes{0%,100%{opacity:.4;transform:scale(1,1)}50%{opacity:1;transform:scale(1.2,1.2)}}@keyframes dot-keyframes{0%,100%{opacity:.4;transform:scale(1,1)}50%{opacity:1;transform:scale(1.2,1.2)}}::ng-deep ngx-konverso .loading-dots{text-align:center;width:100%}::ng-deep ngx-konverso .loading-dots--dot{-webkit-animation:1.5s ease-in-out infinite dot-keyframes;animation:1.5s ease-in-out infinite dot-keyframes;border-radius:10px;display:inline-block;height:10px;width:10px}::ng-deep ngx-konverso .loading-dots--dot:nth-child(2){-webkit-animation-delay:.5s;animation-delay:.5s}::ng-deep ngx-konverso .loading-dots--dot:nth-child(3){-webkit-animation-delay:1s;animation-delay:1s}::ng-deep ngx-konverso bot-first-visit,::ng-deep ngx-konverso bot-full-screen{display:table;min-height:100%;height:100%;width:100%}::ng-deep ngx-konverso bot-full-screen button:focus,::ng-deep ngx-konverso bot-full-screen input:focus{outline:0!important}::ng-deep ngx-konverso bot-full-screen .bot-button>*{position:relative}::ng-deep ngx-konverso bot-full-screen .button-lg{padding:10px!important;font-size:16px!important}::ng-deep ngx-konverso bot-full-screen .bot-button{cursor:pointer;opacity:.9;min-width:150px;border-radius:25px;padding:5px;position:relative;overflow:hidden;border-width:0;outline:0;box-shadow:0 1px 4px rgba(0,0,0,.6);transition:opacity .3s}::ng-deep ngx-konverso bot-full-screen .bot-button span{display:block;padding:12px 24px}::ng-deep ngx-konverso bot-full-screen .bot-button:focus,::ng-deep ngx-konverso bot-full-screen .bot-button:hover{opacity:1}::ng-deep ngx-konverso bot-full-screen .bot-button:before{content:\"\";position:absolute;top:50%;left:50%;display:block;width:0;padding-top:0;border-radius:100%;background-color:rgba(236,240,241,.3);transform:translate(-50%,-50%)}::ng-deep ngx-konverso bot-full-screen .bot-button:active:before{width:120%;padding-top:120%;transition:width .2s ease-out,padding-top .2s ease-out}::ng-deep ngx-konverso bot-full-screen .bot-button-left{background:linear-gradient(107deg,#4862ab 0,#9d107d 100%) no-repeat padding-box;border-radius:22px;color:#fff!important;font:12px/19px nexa;height:44px;display:inline-block;letter-spacing:0;margin-right:25px}::ng-deep ngx-konverso bot-full-screen .bot-button-right{background:no-repeat padding-box #e5e8EE54;border:2px solid #c2c8d5!important;color:#404e6b!important;border-radius:22px;font:12px/19px nexa;height:44px;letter-spacing:0;display:inline-block}@-webkit-keyframes movetop2{from{opacity:0;margin-top:5%}to{opacity:1;margin-top:0}}@keyframes movetop2{from{opacity:0;margin-top:5%}to{opacity:1;margin-top:0}}::ng-deep ngx-konverso bot-full-screen .bot-button-grey{background:0 0!important;border:2px solid #171f26!important;border-radius:25px;min-height:44px!important;font:16px/25px \"Nexa Text\";letter-spacing:0;color:#171f26!important;display:inline-block;margin-right:25px;animation:.3s ease-in .3s both movetop2!important;-moz-animation:.3s ease-in .3s both movetop2!important;-webkit-animation:.3s ease-in .3s both movetop2!important;-o-animation:.3s ease-in .3s both movetop2!important}::ng-deep ngx-konverso bot-full-screen .bot-container{font-family:nexa,Roboto;width:100%;height:70vh;display:table;margin:auto;background-size:contain}@media screen and (max-width:500px){::ng-deep ngx-konverso bot-full-screen .bot-container{height:90vh}}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view{background-size:contain;width:auto;margin:auto;height:100%;display:table-cell;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view img{margin:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper{padding-top:5%;width:100%;margin:auto;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:20px;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step{margin-top:5%;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step .bot-init-dot{border:1px solid;display:inline-block;width:12px;height:12px;margin-left:2.5px;margin-right:2.5px;border-radius:50%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-button-wrapper{display:block;width:100%;text-align:center;margin-top:8%;margin-right:auto;margin-left:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper{display:table;height:100%;width:100%;position:relative}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-logo{width:100%;margin:0 auto auto;vertical-align:middle;animation:.4s ease-in 1.8s both movetop!important;-moz-animation:.4s ease-in 1.8s both movetop!important;-webkit-animation:.4s ease-in 1.8s both movetop!important;-o-animation:.4s ease-in 1.8s both movetop!important}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-logo img{margin-left:auto;margin-right:auto;display:block;width:150px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper{display:-ms-grid;display:grid;-ms-grid-columns:1fr;grid-template-columns:1fr;-ms-grid-rows:.3fr 0 1fr 0 .7fr;grid-template-rows:.3fr 1fr .7fr;gap:0 0;grid-template-areas:\"user-input\" \"bot-answer\" \"bot-input-wrapper\";overflow:auto!important}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer{-ms-grid-row:3;-ms-grid-column:1;width:600px;text-align:center;margin:auto;font-size:25px;grid-area:bot-answer}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input{-ms-grid-row:1;-ms-grid-column:1;font-size:15px;margin:auto;display:block;grid-area:user-input}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input .data{padding:10px 20px;border-radius:23px 23px 0;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:5% auto auto;background:no-repeat padding-box #171f26}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input .time{font-weight:300;position:absolute;width:200px;display:none;margin-left:95%;bottom:-1%;color:#000;font-size:10px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper{-ms-grid-row:5;-ms-grid-column:1;text-align:center;width:100%;bottom:2%;animation:.4s ease-in 3.2s both fadeinanswer;-moz-animation:.4s ease-in 3.2s both fadeinanswer;-webkit-animation:.4s ease-in 3.2s both fadeinanswer;-o-animation:.4s ease-in 3.2s both fadeinanswer;grid-area:bot-input-wrapper}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper input{text-align:left;display:inline-block;padding:10px;color:#000;width:40%;background:0 0;border:2px solid #171f26;border-radius:6px;margin-right:10px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper button{background:no-repeat padding-box #171f26!important;border:2px solid #171f26;border-radius:6px;display:inline-block;width:calc(10% - 15px);padding:11px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper{width:100%;display:table;height:100%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo{max-width:100px;position:absolute;top:2%;left:2%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo img{max-width:100px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper{width:100%;position:relative;max-width:600px;height:60%!important;padding:15px 30px;margin:0 auto;overflow-y:scroll;direction:rtl;display:-ms-grid;display:grid;-ms-grid-columns:1fr;grid-template-columns:1fr;-ms-grid-rows:.3fr 0 1fr 0 .7fr;grid-template-rows:.3fr 1fr .7fr;gap:0 0;grid-template-areas:\"user-input\" \"bot-answer\" \"bot-input-wrapper\";overflow:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper::-webkit-scrollbar{width:0!important}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat{position:absolute;overflow-x:hidden;display:flex;flex-direction:column-reverse;justify-content:flex-end;transform:rotate(180deg);min-height:100%;width:94%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer{-ms-grid-row:3;-ms-grid-column:1;font-size:15px;padding:10px 20px;border-radius:25px;color:#000;height:60%;background-color:transparent;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;margin:15px 0;word-break:break-all;transform:rotate(180deg);direction:ltr;grid-area:bot-answer}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer button{padding:10px;border:1px solid}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input{-ms-grid-row:1;-ms-grid-column:1;font-size:15px;transform:rotate(180deg);direction:ltr;grid-area:user-input}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .data{padding:10px 20px;border-radius:23px 23px 0;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:15px 0 15px auto;background:no-repeat padding-box #171f26}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .time{font-weight:300;position:absolute;width:200px;display:none;margin-left:95%;bottom:-1%;color:#000;font-size:10px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper{-ms-grid-row:5;-ms-grid-column:1;bottom:2%;display:table;width:100%;margin:auto;grid-area:bot-input-wrapper}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input-disable{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5% .3%;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input input{display:inline-block;padding:10px;border-radius:25px;color:#000;width:60%;margin-right:15px;border:1px solid rgba(0,0,0,.2)}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input button{display:inline-block;width:calc(36% - 15px);padding:11px}::ng-deep ngx-konverso .bot-mobile{font-family:nexa,Roboto;width:96vw!important;height:100vh;display:table;margin:auto;background-size:contain}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit{position:relative}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-logo-init-wrapper{margin-top:2.5vh}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block;max-width:150px}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:15px!important;text-align:center}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-init-button-wrapper{position:absolute;top:70%}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-answer{width:70vw!important;text-align:center;margin:15.5% auto auto!important;font-size:15px!important}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-input-wrapper{background:0 0!important;bottom:10vh!important}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-input-wrapper input{width:90%!important}@keyframes movetop{from{margin-top:5%}to{margin-top:0}}@-webkit-keyframes movetop{from{margin-top:5%}to{margin-top:0}}.fade,.fade p{animation:.7s ease-in .2s both fadeinanswer!important;-moz-animation:.7s ease-in .2s both fadeinanswer!important;-webkit-animation:.7s ease-in .2s both fadeinanswer!important;-o-animation:.7s ease-in .2s both fadeinanswer!important}@-webkit-keyframes fadeinbutton{from{opacity:0}to{opacity:1}}@keyframes fadeinbutton{from{opacity:0}to{opacity:1}}@keyframes fadeinanswer{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadeinanswer{from{opacity:0}to{opacity:1}}"]
    })
], KonversoComponent);
export { KonversoComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29udmVyc28uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8va29udmVyc28vIiwic291cmNlcyI6WyJsaWIva29udmVyc28uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRXRELGFBQWE7QUFNYixJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQWlCNUIsWUFBb0IsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFoQnJDLFdBQU0sR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN6RCxVQUFLLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFNOUQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFHdEIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBTzlCLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUN6QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUE7UUFDOUYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FB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QUM7WUFDckgsQ0FBQztTQUNGLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0NBR0YsQ0FBQTs7WUE5SDhCLGVBQWU7O0FBZmxDO0lBQVQsTUFBTSxFQUFFO2dEQUE0RDtBQUYxRCxpQkFBaUI7SUFMN0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGNBQWM7UUFDeEIsc3VCQUFzQzs7S0FFdkMsQ0FBQztHQUNXLGlCQUFpQixDQStJN0I7U0EvSVksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtLb252ZXJzb1NlcnZpY2V9IGZyb20gJy4va29udmVyc28uc2VydmljZSc7XG5pbXBvcnQge0NvbG9yU2V0LCBEZWZhdWx0QXNzZXRzLCBLb252ZXJzb0Fuc3dlciwgT3BlbkNoYXRCb3RSZXNwb25zZSwgVXNlcklucHV0fSBmcm9tICcuLi9pbnRlcmZhY2UvS29udmVyc29JbnRlcmZhY2UnO1xuaW1wb3J0IHtCb3RNZXNzYWdlU2FtcGxlfSBmcm9tICcuLi9TYW1wbGUvQm90TWVzc2FnZVNhbXBsZSc7XG5pbXBvcnQge0RvdExvYWRlclRlbXBsYXRlfSBmcm9tICcuLi9TYW1wbGUvRG90TG9hZGVyJztcblxuLy8gQHRzLWlnbm9yZVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWtvbnZlcnNvJyxcbiAgdGVtcGxhdGVVcmw6ICdrb252ZXJzby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuLi8uLi9hc3NldHMvbWFpbi5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgS29udmVyc29Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgX3JlYWR5OiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSByZWFkeTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBwdWJsaWMgcXVlcnk6IHN0cmluZztcbiAgcHVibGljIGlzTW9iaWxlOiBib29sZWFuO1xuICBwdWJsaWMgYXNzZXRzOiBEZWZhdWx0QXNzZXRzO1xuICBwdWJsaWMgZmlyc3RWaXNpdDogYm9vbGVhbjtcbiAgcHVibGljIGZpcnN0VXNhZ2VTdG9yeTogc3RyaW5nW107XG4gIHB1YmxpYyBBc3Npc3RhbnRNb2RlID0gZmFsc2U7XG4gIHB1YmxpYyBjb2xvclNldDogQ29sb3JTZXQ7XG4gIHB1YmxpYyBIaXN0b3J5OiAoVXNlcklucHV0IHwgT3BlbkNoYXRCb3RSZXNwb25zZSlbXTtcbiAgcHVibGljIGRpc2FibGVVc2VySW5wdXQgPSBmYWxzZTtcbiAgcHVibGljIExhc3RVc2VySW5wdXQ6IFVzZXJJbnB1dDtcbiAgcHVibGljIExhc3RCb3RBbnN3ZXI6IE9wZW5DaGF0Qm90UmVzcG9uc2U7XG4gIHB1YmxpYyBQbGFjZUhvbGRlcjogc3RyaW5nW107XG4gIHB1YmxpYyBXZWxjb21lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBLb252ZXJzb1NlcnZpY2UpIHtcbiAgICBpZiAoc2VydmljZS5fYXV0aCkge1xuICAgICAgdGhpcy5zZXJ2aWNlLmF1dGhlbnRpY2F0aW9uLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2coJ3VzZXIgYWdlbnQnLCBuYXZpZ2F0b3IudXNlckFnZW50LCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmV8aVBhZHxpUG9kL2kpKVxuICAgIHRoaXMuaXNNb2JpbGUgPSB0aGlzLl9pc01vYmlsZSgpO1xuICAgIHRoaXMuYXNzZXRzID0gdGhpcy5zZXJ2aWNlLmFzc2V0cztcbiAgICB0aGlzLmZpcnN0VmlzaXQgPSB0aGlzLnNlcnZpY2UuZmlyc3RWaXNpdDtcbiAgICB0aGlzLmZpcnN0VXNhZ2VTdG9yeSA9IHRoaXMuc2VydmljZS5maXJzdFVzYWdlU3Rvcnk7XG4gICAgdGhpcy5Bc3Npc3RhbnRNb2RlID0gdGhpcy5zZXJ2aWNlLkFzc2lzdGFudE1vZGU7XG4gICAgdGhpcy5QbGFjZUhvbGRlciA9IHRoaXMuc2VydmljZS5QbGFjZUhvbGRlcjtcbiAgICB0aGlzLldlbGNvbWUgPSB0aGlzLnNlcnZpY2UuV2VsY29tZTtcbiAgICB0aGlzLnNlbmRCb3RDb21tYW5kKCdleGl0JywgZmFsc2UpLmNhdGNoKChlcnI6IGFueSkgPT4gY29uc29sZS5sb2coJ2ZhaWwgcmVzZXQgc2Vzc2lvbicpKTtcbiAgICB0aGlzLkhpc3RvcnkgPSBbXTtcbiAgICBpZiAodGhpcy5zZXJ2aWNlLkNvbG9yU2V0KSB7XG4gICAgICB0aGlzLmNvbG9yU2V0ID0gdGhpcy5zZXJ2aWNlLkNvbG9yU2V0O1xuICAgIH1cbiAgICB0aGlzLl9yZWFkeS5zdWJzY3JpYmUoKHJlYWR5OiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAocmVhZHkpIHtcbiAgICAgICAgdGhpcy5maXJzdFZpc2l0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VydmljZS5maXJzdFZpc2l0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVhZHkuZW1pdChyZWFkeSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuV2VsY29tZSkge1xuICAgICAgY29uc3QgY3VzdG9tV2VsY29tZTogT3BlbkNoYXRCb3RSZXNwb25zZSA9IEJvdE1lc3NhZ2VTYW1wbGU7XG4gICAgICBjdXN0b21XZWxjb21lLnRleHQgPSB0aGlzLldlbGNvbWU7XG4gICAgICB0aGlzLkxhc3RCb3RBbnN3ZXIgPSBjdXN0b21XZWxjb21lO1xuICAgICAgdGhpcy5IaXN0b3J5LnB1c2goY3VzdG9tV2VsY29tZSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgc2VuZCgkZXZlbnQ6IFVzZXJJbnB1dCkge1xuICAgIGNvbnNvbGUubG9nKCRldmVudC5tZXNzYWdlKTtcbiAgICBpZiAoJGV2ZW50Lm1lc3NhZ2UgPT09ICdleGl0Jykge1xuICAgICAgdGhpcy5zZW5kQm90Q29tbWFuZCgnZXhpdCcsIGZhbHNlKS5jYXRjaCgoZXJyOiBhbnkpID0+IGNvbnNvbGUubG9nKCdmYWlsIHJlc2V0IHNlc3Npb24nKSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuTGFzdEJvdEFuc3dlci50ZXh0ID0gJzxicj4nICsgRG90TG9hZGVyVGVtcGxhdGUodGhpcy5zZXJ2aWNlLkNvbG9yU2V0LlByaW1hcnkpO1xuICAgIHRoaXMuSGlzdG9yeS5wdXNoKCRldmVudCk7XG4gICAgaWYgKHRoaXMuQXNzaXN0YW50TW9kZSkge1xuICAgICAgaWYgKHRoaXMuTGFzdFVzZXJJbnB1dCkge1xuICAgICAgICB0aGlzLkxhc3RVc2VySW5wdXQubWVzc2FnZSArPSAnICcgKyAkZXZlbnQubWVzc2FnZTtcbiAgICAgICAgdGhpcy5MYXN0VXNlcklucHV0LmRhdGUgPSAkZXZlbnQuZGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuTGFzdFVzZXJJbnB1dCA9ICRldmVudDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5MYXN0VXNlcklucHV0ID0gJGV2ZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSB0aGlzLkhpc3RvcnkubGVuZ3RoIC0gMTtcbiAgICBjb25zdCByZXNwb25zZTogS29udmVyc29BbnN3ZXIgPSBhd2FpdCB0aGlzLnNlcnZpY2Uuc2VuZCgkZXZlbnQubWVzc2FnZSkuY2F0Y2goKGVycjogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnV2UgZ290IGFuIGVycm9yICcsIGVycik7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLkhpc3RvcnlbaW5kZXhdLmVycm9yID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UucmVzcG9uc2UpIHtcbiAgICAgIGlmIChyZXNwb25zZS5yZXNwb25zZS5tZWRpYXMgJiYgcmVzcG9uc2UucmVzcG9uc2UubWVkaWFzWzBdICYmIHJlc3BvbnNlLnJlc3BvbnNlLm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zICYmXG4gICAgICAgIHJlc3BvbnNlLnJlc3BvbnNlLm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmRpc2FibGVVc2VySW5wdXQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlVXNlcklucHV0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLkxhc3RCb3RBbnN3ZXIgPSByZXNwb25zZS5yZXNwb25zZTtcbiAgICAgIHRoaXMuSGlzdG9yeS5wdXNoKHJlc3BvbnNlLnJlc3BvbnNlKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBzZW5kQm90Q29tbWFuZCgkZXZlbnQ6IHN0cmluZywgcHVzaDogYm9vbGVhbiA9IHRydWUpIHtcbiAgICB0aGlzLkxhc3RCb3RBbnN3ZXIudGV4dCA9ICc8YnI+JyArIERvdExvYWRlclRlbXBsYXRlKHRoaXMuc2VydmljZS5Db2xvclNldC5QcmltYXJ5KTtcbiAgICBpZiAoJGV2ZW50ID09PSAneWVzX3Jlc3BvbnNlJyB8fCAkZXZlbnQgPT09ICdub19yZXNwb25zZScgfHwgJGV2ZW50ID09ICdleGl0Jykge1xuICAgICAgdGhpcy5MYXN0VXNlcklucHV0ID0gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgcmVzcG9uc2U6IEtvbnZlcnNvQW5zd2VyID0gYXdhaXQgdGhpcy5zZXJ2aWNlLnNlbmQoJGV2ZW50KS5jYXRjaCgoZXJyOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdXZSBnb3QgYW4gZXJyb3IgJywgZXJyKTtcbiAgICB9KTtcbiAgICBpZiAocmVzcG9uc2UucmVzcG9uc2UubWVkaWFzICYmIHJlc3BvbnNlLnJlc3BvbnNlLm1lZGlhc1swXSAmJiByZXNwb25zZS5yZXNwb25zZS5tZWRpYXNbMF0ucmVxdWlyZWRfYWN0aW9ucyAmJlxuICAgICAgcmVzcG9uc2UucmVzcG9uc2UubWVkaWFzWzBdLnJlcXVpcmVkX2FjdGlvbnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmRpc2FibGVVc2VySW5wdXQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc2FibGVVc2VySW5wdXQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnJlc3BvbnNlICYmIHB1c2gpIHtcbiAgICAgIHRoaXMuTGFzdEJvdEFuc3dlciA9IHJlc3BvbnNlLnJlc3BvbnNlO1xuICAgICAgdGhpcy5IaXN0b3J5LnB1c2gocmVzcG9uc2UucmVzcG9uc2UpO1xuICAgIH0gZWxzZSBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UucmVzcG9uc2UgJiYgIXB1c2gpIHtcbiAgICAgIHRoaXMuTGFzdFVzZXJJbnB1dCA9IG51bGw7XG4gICAgICB0aGlzLkxhc3RCb3RBbnN3ZXIgPSByZXNwb25zZS5yZXNwb25zZTtcbiAgICAgIHRoaXMuSGlzdG9yeS5wdXNoKHJlc3BvbnNlLnJlc3BvbnNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5MYXN0VXNlcklucHV0ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pc01vYmlsZSgpOiBib29sZWFuIHtcblxuICAgIGNvbnN0IGlzTW9iaWxlID0ge1xuICAgICAgQW5kcm9pZDogKCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICByZXR1cm4gISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpO1xuICAgICAgfSxcbiAgICAgIEJsYWNrQmVycnk6ICgpOiBib29sZWFuID0+IHtcbiAgICAgICAgcmV0dXJuICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQmxhY2tCZXJyeS9pKTtcbiAgICAgIH0sXG4gICAgICBpT1M6ICgpOiBib29sZWFuID0+IHtcbiAgICAgICAgcmV0dXJuICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBob25lfGlQYWR8aVBvZC9pKTtcbiAgICAgIH0sXG4gICAgICBPcGVyYTogKCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICByZXR1cm4gISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9PcGVyYSBNaW5pL2kpO1xuICAgICAgfSxcbiAgICAgIFdpbmRvd3M6ICgpOiBib29sZWFuID0+IHtcbiAgICAgICAgcmV0dXJuICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvSUVNb2JpbGUvaSkgfHwgISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9XUERlc2t0b3AvaSk7XG4gICAgICB9LFxuICAgICAgYW55OiAoKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIHJldHVybiAhIShpc01vYmlsZS5BbmRyb2lkKCkgfHwgaXNNb2JpbGUuQmxhY2tCZXJyeSgpIHx8IGlzTW9iaWxlLmlPUygpIHx8IGlzTW9iaWxlLk9wZXJhKCkgfHwgaXNNb2JpbGUuV2luZG93cygpKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBpc01vYmlsZS5hbnkoKTtcbiAgfVxuXG5cbn1cbiJdfQ==