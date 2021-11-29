import { __awaiter } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { KonversoService } from './konverso.service';
import { BotMessageSample } from '../Sample/BotMessageSample';
import { DotLoaderTemplate } from '../Sample/DotLoader';
// @ts-ignore
export class KonversoComponent {
    constructor(service) {
        this.service = service;
        this._ready = new EventEmitter();
        this.ready = new EventEmitter();
        this.sended = new EventEmitter();
        this.AssistantMode = false;
        this.History = [];
        this.disableUserInput = false;
        if (service._auth) {
            this.service.authentication.subscribe(() => {
                this.ngOnInit();
            });
        }
        this.service.emulationTrigger.subscribe((response) => {
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
            // @ts-ignore
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
            // @ts-ignore
            if (response.response.medias && response.response.medias[0] && response.response.medias[0].required_actions && response.response.medias[0].required_actions.length) {
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
KonversoComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-konverso',
                template: "<bot-full-screen [class]=\"isMobile ? 'bot-mobile' : ''\"\n                 [assets]=\"assets\"\n                 [firstVisit]=\"firstVisit\"\n                 [firstUsageStory]=\"firstUsageStory\"\n                 (send)=\"send($event)\"\n                 (sendBotCommand)=\"sendBotCommand($event)\"\n                 [displayData]=\"History\"\n                 [disableUserInput]=\"disableUserInput\"\n                 [LastBotAnswer]=\"LastBotAnswer\"\n                 [LastUserInput]=\"LastUserInput\"\n                 [AssistantMode]=\"AssistantMode\"\n                 [PlaceHolder]=\"PlaceHolder\"\n                 [IsMobile]=\"isMobile\"\n                 (readySend)=\"_ready.emit($event)\"\n></bot-full-screen>\n\n\n",
                styles: ["::ng-deep ngx-konverso{overflow:hidden;display:block;min-height:100%;height:100%}::ng-deep ngx-konverso .hidden-btn{transform:translateY(-100vh)!important;transition:transform .5s ease-in-out!important;animation:fadeout .5s;-moz-animation:fadeout .5s;-webkit-animation:fadeout .5s;-o-animation:fadeout .5s}@keyframes fadeout{0%{opacity:1}to{opacity:0}}@keyframes dot-keyframes{0%{opacity:.4;transform:scale(1)}50%{opacity:1;transform:scale(1.2)}to{opacity:.4;transform:scale(1)}}::ng-deep ngx-konverso .loading-dots{text-align:center;width:100%}::ng-deep ngx-konverso .loading-dots--dot{animation:dot-keyframes 1.5s infinite ease-in-out;border-radius:10px;display:inline-block;height:10px;width:10px}::ng-deep ngx-konverso .loading-dots--dot:nth-child(2){animation-delay:.5s}::ng-deep ngx-konverso .loading-dots--dot:nth-child(3){animation-delay:1s}::ng-deep ngx-konverso bot-full-screen,::ng-deep ngx-konverso bot-first-visit{display:table;min-height:100%;height:100%;width:100%}::ng-deep ngx-konverso bot-full-screen button:focus,::ng-deep ngx-konverso bot-full-screen input:focus{outline:none!important}::ng-deep ngx-konverso bot-full-screen .bot-button>*{position:relative}::ng-deep ngx-konverso bot-full-screen .button-lg{padding:10px!important;font-size:16px!important}::ng-deep ngx-konverso bot-full-screen .bot-button{cursor:pointer;opacity:.9;min-width:150px;border-radius:25px;padding:5px;position:relative;overflow:hidden;border-width:0;outline:none;box-shadow:0 1px 4px #0009;transition:opacity .3s}::ng-deep ngx-konverso bot-full-screen .bot-button span{display:block;padding:12px 24px}::ng-deep ngx-konverso bot-full-screen .bot-button:hover,::ng-deep ngx-konverso bot-full-screen .bot-button:focus{opacity:1}::ng-deep ngx-konverso bot-full-screen .bot-button:before{content:\"\";position:absolute;top:50%;left:50%;display:block;width:0;padding-top:0;border-radius:100%;background-color:#ecf0f14d;transform:translate(-50%,-50%)}::ng-deep ngx-konverso bot-full-screen .bot-button:active:before{width:120%;padding-top:120%;transition:width .2s ease-out,padding-top .2s ease-out}::ng-deep ngx-konverso bot-full-screen .bot-button-left{background:transparent linear-gradient(107deg,#4862AB 0%,#9D107D 100%) 0% 0% no-repeat padding-box;border-radius:22px;color:#fff!important;font:normal normal normal 12px/19px \"nexa\";height:44px;display:inline-block;letter-spacing:0px;margin-right:25px}::ng-deep ngx-konverso bot-full-screen .bot-button-right{background:#E5E8EE54 0% 0% no-repeat padding-box;border:2px solid #C2C8D5!important;color:#404e6b!important;border-radius:22px;font:normal normal normal 12px/19px \"nexa\";height:44px;letter-spacing:0px;display:inline-block}@keyframes movetop2{0%{opacity:0;margin-top:5%}to{opacity:1;margin-top:0%}}::ng-deep ngx-konverso bot-full-screen .bot-button-grey{background:none!important;border:2px solid #171F26!important;border-radius:25px;min-height:44px!important;font:normal normal normal 16px/25px \"Nexa Text\";letter-spacing:0px;color:#171f26!important;display:inline-block;margin-right:25px;animation:movetop2 .3s ease-in .3s both!important;-moz-animation:movetop2 .3s ease-in .3s both!important;-webkit-animation:movetop2 .3s ease-in .3s both!important;-o-animation:movetop2 .3s ease-in .3s both!important}::ng-deep ngx-konverso bot-full-screen .bot-container{font-family:\"nexa\",\"Roboto\";width:100%;height:70vh;display:table;margin:auto;background-size:contain}@media screen and (max-width: 500px){::ng-deep ngx-konverso bot-full-screen .bot-container{height:90vh}}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view{background-size:contain;width:auto;margin:auto;height:100%;display:table-cell;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view img{margin:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper{padding-top:5%;width:100%;margin:auto;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:20px;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step{margin-top:5%;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step .bot-init-dot{border:1px solid;display:inline-block;width:12px;height:12px;margin-left:2.5px;margin-right:2.5px;border-radius:50%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-button-wrapper{display:block;width:100%;text-align:center;margin-top:8%;margin-right:auto;margin-left:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper{display:table;height:100%;width:100%;position:relative}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-logo{width:100%;margin:0 auto auto;vertical-align:middle;animation:movetop .4s ease-in 1.8s both!important;-moz-animation:movetop .4s ease-in 1.8s both!important;-webkit-animation:movetop .4s ease-in 1.8s both!important;-o-animation:movetop .4s ease-in 1.8s both!important}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-logo img{margin-left:auto;margin-right:auto;display:block;width:150px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper{display:grid;grid-template-columns:1fr;grid-template-rows:.3fr 1fr .7fr;grid-gap:0px 0px;gap:0px 0px;grid-template-areas:\"user-input\" \"bot-answer\" \"bot-input-wrapper\";overflow:auto!important}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-answer{width:600px;text-align:center;margin:auto;font-size:25px;grid-area:bot-answer}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input{font-size:15px;margin:auto;display:block;grid-area:user-input}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input .data{padding:10px 20px;max-width:550px;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:5% auto auto;background:#171F26 0% 0% no-repeat padding-box;border-radius:23px 23px 0}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .user-input .time{font-weight:300;position:absolute;width:200px;display:none;margin-left:95%;bottom:-1%;color:#000;font-size:10px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper{text-align:center;width:100%;bottom:2%;animation:fadeinanswer .4s ease-in 3.2s both;-moz-animation:fadeinanswer .4s ease-in 3.2s both;-webkit-animation:fadeinanswer .4s ease-in 3.2s both;-o-animation:fadeinanswer .4s ease-in 3.2s both;grid-area:bot-input-wrapper}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper input{text-align:left;display:inline-block;padding:10px;color:#000;width:40%;background:transparent;border:2px solid #171F26;border-radius:6px;margin-right:10px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-discussion-wrapper .bot-input-wrapper button{background:#171F26 0% 0% no-repeat padding-box!important;border:2px solid #171F26;border-radius:6px;display:inline-block;width:calc(10% - 15px);padding:11px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper{width:100%;display:table;height:100%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo{max-width:100px;position:absolute;top:2%;left:2%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo img{max-width:100px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper{width:100%;position:relative;max-width:600px;height:60%!important;padding:15px 30px;margin:0 auto;overflow-y:scroll;direction:rtl;display:grid;grid-template-columns:1fr;grid-template-rows:.3fr 1fr .7fr;grid-gap:0px 0px;gap:0px 0px;grid-template-areas:\"user-input\" \"bot-answer\" \"bot-input-wrapper\";overflow:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper::-webkit-scrollbar{width:0!important}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat{position:absolute;overflow-x:hidden;display:flex;flex-direction:column-reverse;justify-content:flex-end;transform:rotate(180deg);min-height:100%;width:94%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer{font-size:15px;padding:10px 20px;border-radius:25px;color:#000;height:60%;background-color:transparent;max-width:550px;width:-moz-fit-content;width:fit-content;position:relative;margin:15px 0;word-break:break-all;transform:rotate(180deg);direction:ltr;grid-area:bot-answer}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer button{padding:10px;border:1px solid}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input{font-size:15px;transform:rotate(180deg);direction:ltr;grid-area:user-input}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .data{padding:10px 20px;max-width:550px;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:15px 0 15px auto;background:#171F26 0% 0% no-repeat padding-box;border-radius:23px 23px 0}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .time{font-weight:300;position:absolute;width:200px;display:none;margin-left:95%;bottom:-1%;color:#000;font-size:10px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper{bottom:2%;display:table;width:100%;margin:auto;grid-area:bot-input-wrapper}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input-disable{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5% .3%;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input input{display:inline-block;padding:10px;border-radius:25px;color:#000;width:60%;margin-right:15px;border:1px solid rgba(0,0,0,.2)}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input button{display:inline-block;width:calc(36% - 15px);padding:11px}::ng-deep ngx-konverso .bot-mobile{font-family:\"nexa\",\"Roboto\";width:96vw!important;height:100vh;display:table;margin:auto;background-size:contain}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit{position:relative}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-logo-init-wrapper{margin-top:2.5vh}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block;max-width:150px}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:15px!important;text-align:center}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-init-button-wrapper{position:absolute;top:70%}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-answer{width:70vw!important;text-align:center;margin:15.5% auto auto!important;font-size:15px!important}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-input-wrapper{background:none!important;bottom:10vh!important}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-input-wrapper input{width:90%!important}@keyframes movetop{0%{margin-top:5%}to{margin-top:0%}}.fade{animation:fadeinanswer .7s ease-in .2s both!important;-moz-animation:fadeinanswer .7s ease-in .2s both!important;-webkit-animation:fadeinanswer .7s ease-in .2s both!important;-o-animation:fadeinanswer .7s ease-in .2s both!important}.fade p{animation:fadeinanswer .7s ease-in .2s both!important;-moz-animation:fadeinanswer .7s ease-in .2s both!important;-webkit-animation:fadeinanswer .7s ease-in .2s both!important;-o-animation:fadeinanswer .7s ease-in .2s both!important}@keyframes fadeinbutton{0%{opacity:0}to{opacity:1}}@keyframes fadeinanswer{0%{opacity:0}to{opacity:1}}\n"]
            },] }
];
KonversoComponent.ctorParameters = () => [
    { type: KonversoService }
];
KonversoComponent.propDecorators = {
    ready: [{ type: Output }],
    sended: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29udmVyc28uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMva29udmVyc28vc3JjL2xpYi9rb252ZXJzby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFFbkQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsYUFBYTtBQU1iLE1BQU0sT0FBTyxpQkFBaUI7SUFrQjFCLFlBQW9CLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBakJyQyxXQUFNLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFDekQsVUFBSyxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBQzNELFdBQU0sR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQU0vRCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUV0QixZQUFPLEdBQXdDLEVBQUUsQ0FBQztRQUNsRCxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFPNUIsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxDQUFBO1NBQ0w7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQWEsRUFBRSxFQUFFO1lBQ3RELElBQUksUUFBUSxFQUFFO2dCQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO29CQUNyQixJ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QVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3RELENBQUM7WUFDRCxHQUFHLEVBQUUsR0FBWSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDNUQsQ0FBQztZQUNELEtBQUssRUFBRSxHQUFZLEVBQUU7Z0JBQ2pCLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3RELENBQUM7WUFDRCxPQUFPLEVBQUUsR0FBWSxFQUFFO2dCQUNuQixPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDakcsQ0FBQztZQUNELEdBQUcsRUFBRSxHQUFZLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDdkgsQ0FBQztTQUNKLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7WUFyS0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxjQUFjO2dCQUN4QixzdUJBQXNDOzthQUV6Qzs7O1lBVk8sZUFBZTs7O29CQWFsQixNQUFNO3FCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0tvbnZlcnNvU2VydmljZX0gZnJvbSAnLi9rb252ZXJzby5zZXJ2aWNlJztcbmltcG9ydCB7Q29sb3JTZXQsIERlZmF1bHRBc3NldHMsIEtvbnZlcnNvQW5zd2VyLCBPcGVuQ2hhdEJvdFJlc3BvbnNlLCBVc2VySW5wdXR9IGZyb20gJy4uL2ludGVyZmFjZS9Lb252ZXJzb0ludGVyZmFjZSc7XG5pbXBvcnQge0JvdE1lc3NhZ2VTYW1wbGV9IGZyb20gJy4uL1NhbXBsZS9Cb3RNZXNzYWdlU2FtcGxlJztcbmltcG9ydCB7RG90TG9hZGVyVGVtcGxhdGV9IGZyb20gJy4uL1NhbXBsZS9Eb3RMb2FkZXInO1xuXG4vLyBAdHMtaWdub3JlXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1rb252ZXJzbycsXG4gICAgdGVtcGxhdGVVcmw6ICdrb252ZXJzby5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4uLy4uL2Fzc2V0cy9tYWluLnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBLb252ZXJzb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIF9yZWFkeTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgIEBPdXRwdXQoKSByZWFkeTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICAgIEBPdXRwdXQoKSBzZW5kZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgICBwdWJsaWMgcXVlcnk6IHN0cmluZyB8IG51bGwgIHwgdW5kZWZpbmVkO1xuICAgIHB1YmxpYyBpc01vYmlsZTogYm9vbGVhbiB8IG51bGw7XG4gICAgcHVibGljIGFzc2V0czogRGVmYXVsdEFzc2V0cztcbiAgICBwdWJsaWMgZmlyc3RWaXNpdDogYm9vbGVhbnwgbnVsbDtcbiAgICBwdWJsaWMgZmlyc3RVc2FnZVN0b3J5OiBzdHJpbmdbXTtcbiAgICBwdWJsaWMgQXNzaXN0YW50TW9kZSA9IGZhbHNlO1xuICAgIHB1YmxpYyBjb2xvclNldDogQ29sb3JTZXQ7XG4gICAgcHVibGljIEhpc3Rvcnk6IChVc2VySW5wdXQgfCBPcGVuQ2hhdEJvdFJlc3BvbnNlKVtdID0gW107XG4gICAgcHVibGljIGRpc2FibGVVc2VySW5wdXQgPSBmYWxzZTtcbiAgICBwdWJsaWMgTGFzdFVzZXJJbnB1dDogVXNlcklucHV0IHwgbnVsbDtcbiAgICBwdWJsaWMgTGFzdEJvdEFuc3dlcjogT3BlbkNoYXRCb3RSZXNwb25zZTtcbiAgICBwdWJsaWMgUGxhY2VIb2xkZXI6IHN0cmluZ1tdO1xuICAgIHB1YmxpYyBXZWxjb21lOiBzdHJpbmcgfCBudWxsICB8IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogS29udmVyc29TZXJ2aWNlKSB7XG4gICAgICAgIGlmIChzZXJ2aWNlLl9hdXRoKSB7XG4gICAgICAgICAgICB0aGlzLnNlcnZpY2UuYXV0aGVudGljYXRpb24uc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5nT25Jbml0KCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VydmljZS5lbXVsYXRpb25UcmlnZ2VyLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLkxhc3RVc2VySW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5MYXN0VXNlcklucHV0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSA6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuTGFzdFVzZXJJbnB1dC5tZXNzYWdlICs9ICcgJyArIHJlc3BvbnNlLmlucHV0O1xuICAgICAgICAgICAgICAgIHRoaXMuTGFzdFVzZXJJbnB1dC5kYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcktib3RSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0cmlnZ2VyS2JvdFJlc3BvbnNlKHJlc3BvbnNlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UucmVzcG9uc2UubWVkaWFzICYmIHJlc3BvbnNlLnJlc3BvbnNlLm1lZGlhc1swXSAmJiByZXNwb25zZS5yZXNwb25zZS5tZWRpYXNbMF0ucmVxdWlyZWRfYWN0aW9ucyAmJlxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLnJlc3BvbnNlLm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZVVzZXJJbnB1dCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZVVzZXJJbnB1dCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5MYXN0Qm90QW5zd2VyID0gcmVzcG9uc2UucmVzcG9uc2U7XG4gICAgICAgICAgICB0aGlzLkhpc3RvcnkucHVzaChyZXNwb25zZS5yZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3VzZXIgYWdlbnQnLCBuYXZpZ2F0b3IudXNlckFnZW50LCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmV8aVBhZHxpUG9kL2kpKVxuICAgICAgICB0aGlzLmlzTW9iaWxlID0gdGhpcy5faXNNb2JpbGUoKTtcbiAgICAgICAgdGhpcy5hc3NldHMgPSB0aGlzLnNlcnZpY2UuYXNzZXRzO1xuICAgICAgICB0aGlzLmZpcnN0VmlzaXQgPSB0aGlzLnNlcnZpY2UuZmlyc3RWaXNpdDtcbiAgICAgICAgdGhpcy5maXJzdFVzYWdlU3RvcnkgPSB0aGlzLnNlcnZpY2UuZmlyc3RVc2FnZVN0b3J5O1xuICAgICAgICB0aGlzLkFzc2lzdGFudE1vZGUgPSB0aGlzLnNlcnZpY2UuQXNzaXN0YW50TW9kZTtcbiAgICAgICAgdGhpcy5QbGFjZUhvbGRlciA9IHRoaXMuc2VydmljZS5QbGFjZUhvbGRlcjtcbiAgICAgICAgdGhpcy5XZWxjb21lID0gdGhpcy5zZXJ2aWNlLldlbGNvbWU7XG4gICAgICAgIHRoaXMuc2VuZEJvdENvbW1hbmQoJ2V4aXQnLCBmYWxzZSkuY2F0Y2goKGVycjogYW55KSA9PiBjb25zb2xlLmxvZygnZmFpbCByZXNldCBzZXNzaW9uJykpO1xuICAgICAgICB0aGlzLkhpc3RvcnkgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuc2VydmljZS5Db2xvclNldCkge1xuICAgICAgICAgICAgdGhpcy5jb2xvclNldCA9IHRoaXMuc2VydmljZS5Db2xvclNldDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yZWFkeS5zdWJzY3JpYmUoKHJlYWR5OiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVhZHkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0VmlzaXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2UuZmlyc3RWaXNpdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZHkuZW1pdChyZWFkeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5XZWxjb21lKSB7XG4gICAgICAgICAgICBjb25zdCBjdXN0b21XZWxjb21lOiBPcGVuQ2hhdEJvdFJlc3BvbnNlID0gQm90TWVzc2FnZVNhbXBsZTtcbiAgICAgICAgICAgIGN1c3RvbVdlbGNvbWUudGV4dCA9IHRoaXMuV2VsY29tZTtcbiAgICAgICAgICAgIHRoaXMuTGFzdEJvdEFuc3dlciA9IGN1c3RvbVdlbGNvbWU7XG4gICAgICAgICAgICB0aGlzLkhpc3RvcnkucHVzaChjdXN0b21XZWxjb21lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHNlbmQoJGV2ZW50OiBVc2VySW5wdXQpIDogUHJvbWlzZTx2b2lkIHwgYm9vbGVhbj4ge1xuICAgICAgICBpZiAoJGV2ZW50Lm1lc3NhZ2UgPT09ICdleGl0Jykge1xuICAgICAgICAgICAgdGhpcy5zZW5kQm90Q29tbWFuZCgnZXhpdCcsIGZhbHNlKS5jYXRjaCgoZXJyOiBhbnkpID0+IGNvbnNvbGUubG9nKCdmYWlsIHJlc2V0IHNlc3Npb24nKSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZW5kZWQuZW1pdCh0cnVlKTtcbiAgICAgICAgdGhpcy5MYXN0Qm90QW5zd2VyLnRleHQgPSAnPGJyPicgKyBEb3RMb2FkZXJUZW1wbGF0ZSh0aGlzLnNlcnZpY2UuQ29sb3JTZXQuUHJpbWFyeSk7XG4gICAgICAgIHRoaXMuSGlzdG9yeS5wdXNoKCRldmVudCk7XG4gICAgICAgIGlmICh0aGlzLkFzc2lzdGFudE1vZGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLkxhc3RVc2VySW5wdXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLkxhc3RVc2VySW5wdXQubWVzc2FnZSArPSAnICcgKyAkZXZlbnQubWVzc2FnZTtcbiAgICAgICAgICAgICAgICB0aGlzLkxhc3RVc2VySW5wdXQuZGF0ZSA9ICRldmVudC5kYXRlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLkxhc3RVc2VySW5wdXQgPSAkZXZlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLkxhc3RVc2VySW5wdXQgPSAkZXZlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbmRleDogbnVtYmVyID0gdGhpcy5IaXN0b3J5Lmxlbmd0aCAtIDE7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IEtvbnZlcnNvQW5zd2VyID0gYXdhaXQgdGhpcy5zZXJ2aWNlLnNlbmQoJGV2ZW50Lm1lc3NhZ2UpLmNhdGNoKChlcnI6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1dlIGdvdCBhbiBlcnJvciAnLCBlcnIpO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgdGhpcy5IaXN0b3J5W2luZGV4XS5lcnJvciA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRyaWdnZXJLYm90UmVzcG9uc2UocmVzcG9uc2UpO1xuICAgIH1cblxuICAgIGFzeW5jIHNlbmRCb3RDb21tYW5kKCRldmVudDogc3RyaW5nLCBwdXNoOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICB0aGlzLkxhc3RCb3RBbnN3ZXIudGV4dCA9ICc8YnI+JyArIERvdExvYWRlclRlbXBsYXRlKHRoaXMuc2VydmljZS5Db2xvclNldC5QcmltYXJ5KTtcbiAgICAgICAgaWYgKCRldmVudCA9PT0gJ3llc19yZXNwb25zZScgfHwgJGV2ZW50ID09PSAnbm9fcmVzcG9uc2UnIHx8ICRldmVudCA9PSAnZXhpdCcpIHtcbiAgICAgICAgICAgIHRoaXMuTGFzdFVzZXJJbnB1dCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzcG9uc2U6IEtvbnZlcnNvQW5zd2VyID0gYXdhaXQgdGhpcy5zZXJ2aWNlLnNlbmQoJGV2ZW50KS5jYXRjaCgoZXJyOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXZSBnb3QgYW4gZXJyb3IgJywgZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmIChyZXNwb25zZS5yZXNwb25zZS5tZWRpYXMgJiYgcmVzcG9uc2UucmVzcG9uc2UubWVkaWFzWzBdICYmIHJlc3BvbnNlLnJlc3BvbnNlLm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zICYmIHJlc3BvbnNlLnJlc3BvbnNlLm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlVXNlcklucHV0ID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZVVzZXJJbnB1dCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5yZXNwb25zZSAmJiBwdXNoKSB7XG4gICAgICAgICAgICB0aGlzLkxhc3RCb3RBbnN3ZXIgPSByZXNwb25zZS5yZXNwb25zZTtcbiAgICAgICAgICAgIHRoaXMuSGlzdG9yeS5wdXNoKHJlc3BvbnNlLnJlc3BvbnNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5yZXNwb25zZSAmJiAhcHVzaCkge1xuICAgICAgICAgICAgdGhpcy5MYXN0VXNlcklucHV0ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuTGFzdEJvdEFuc3dlciA9IHJlc3BvbnNlLnJlc3BvbnNlO1xuICAgICAgICAgICAgdGhpcy5IaXN0b3J5LnB1c2gocmVzcG9uc2UucmVzcG9uc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5MYXN0VXNlcklucHV0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2lzTW9iaWxlKCk6IGJvb2xlYW4ge1xuXG4gICAgICAgIGNvbnN0IGlzTW9iaWxlID0ge1xuICAgICAgICAgICAgQW5kcm9pZDogKCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FuZHJvaWQvaSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgQmxhY2tCZXJyeTogKCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaU9TOiAoKTogYm9vbGVhbiA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBob25lfGlQYWR8aVBvZC9pKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBPcGVyYTogKCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL09wZXJhIE1pbmkvaSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgV2luZG93czogKCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0lFTW9iaWxlL2kpIHx8ICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvV1BEZXNrdG9wL2kpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFueTogKCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAhIShpc01vYmlsZS5BbmRyb2lkKCkgfHwgaXNNb2JpbGUuQmxhY2tCZXJyeSgpIHx8IGlzTW9iaWxlLmlPUygpIHx8IGlzTW9iaWxlLk9wZXJhKCkgfHwgaXNNb2JpbGUuV2luZG93cygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGlzTW9iaWxlLmFueSgpO1xuICAgIH1cblxuXG59XG4iXX0=