import { __awaiter, __decorate, __generator } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { KonversoService } from './konverso.service';
import { BotMessageSample } from '../Sample/BotMessageSample';
import { DotLoaderTemplate } from '../Sample/DotLoader';
// @ts-ignore
var KonversoComponent = /** @class */ (function () {
    function KonversoComponent(service) {
        var _this = this;
        this.service = service;
        this._ready = new EventEmitter();
        this.ready = new EventEmitter();
        this.AssistantMode = false;
        this.disableUserInput = false;
        if (service._auth) {
            this.service.authentication.subscribe(function () {
                _this.ngOnInit();
            });
        }
    }
    KonversoComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('user agent', navigator.userAgent, navigator.userAgent.match(/iPhone|iPad|iPod/i));
        this.isMobile = this._isMobile();
        this.assets = this.service.assets;
        this.firstVisit = this.service.firstVisit;
        this.firstUsageStory = this.service.firstUsageStory;
        this.AssistantMode = this.service.AssistantMode;
        this.PlaceHolder = this.service.PlaceHolder;
        this.Welcome = this.service.Welcome;
        this.sendBotCommand('exit', false).catch(function (err) { return console.log('fail reset session'); });
        this.History = [];
        if (this.service.ColorSet) {
            this.colorSet = this.service.ColorSet;
        }
        this._ready.subscribe(function (ready) {
            if (ready) {
                _this.firstVisit = false;
                _this.service.firstVisit = false;
                _this.ready.emit(ready);
            }
        });
        if (this.Welcome) {
            var customWelcome = BotMessageSample;
            customWelcome.text = this.Welcome;
            this.LastBotAnswer = customWelcome;
            this.History.push(customWelcome);
        }
    };
    KonversoComponent.prototype.send = function ($event) {
        return __awaiter(this, void 0, void 0, function () {
            var index, response;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if ($event.message === 'exit') {
                            this.sendBotCommand('exit', false).catch(function (err) { return console.log('fail reset session'); });
                            return [2 /*return*/, false];
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
                        index = this.History.length - 1;
                        return [4 /*yield*/, this.service.send($event.message).catch(function (err) {
                                console.log('We got an error ', err);
                                // @ts-ignore
                                _this.History[index].error = true;
                            })];
                    case 1:
                        response = _a.sent();
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
                        return [2 /*return*/];
                }
            });
        });
    };
    KonversoComponent.prototype.sendBotCommand = function ($event, push) {
        if (push === void 0) { push = true; }
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.LastBotAnswer.text = '<br>' + DotLoaderTemplate(this.service.ColorSet.Primary);
                        if ($event === 'yes_response' || $event === 'no_response') {
                            this.LastUserInput = null;
                        }
                        return [4 /*yield*/, this.service.send($event).catch(function (err) {
                                console.log('We got an error ', err);
                            })];
                    case 1:
                        response = _a.sent();
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
    KonversoComponent.ctorParameters = function () { return [
        { type: KonversoService }
    ]; };
    __decorate([
        Output()
    ], KonversoComponent.prototype, "ready", void 0);
    KonversoComponent = __decorate([
        Component({
            selector: 'ngx-konverso',
            template: "<bot-full-screen [class]=\"isMobile ? 'bot-mobile' : ''\"\n                 [assets]=\"assets\"\n                 [firstVisit]=\"firstVisit\"\n                 [firstUsageStory]=\"firstUsageStory\"\n                 (send)=\"send($event)\"\n                 (sendBotCommand)=\"sendBotCommand($event)\"\n                 [displayData]=\"History\"\n                 [disableUserInput]=\"disableUserInput\"\n                 [LastBotAnswer]=\"LastBotAnswer\"\n                 [LastUserInput]=\"LastUserInput\"\n                 [AssistantMode]=\"AssistantMode\"\n                 [PlaceHolder]=\"PlaceHolder\"\n                 [IsMobile]=\"isMobile\"\n                 (readySend)=\"_ready.emit($event)\"\n></bot-full-screen>\n\n\n",
            styles: ["::ng-deep ngx-konverso{overflow:hidden;display:block;min-height:100%;height:100%}::ng-deep ngx-konverso .hidden-btn{visibility:hidden!important}@-webkit-keyframes dot-keyframes{0%,100%{opacity:.4;transform:scale(1,1)}50%{opacity:1;transform:scale(1.2,1.2)}}@keyframes dot-keyframes{0%,100%{opacity:.4;transform:scale(1,1)}50%{opacity:1;transform:scale(1.2,1.2)}}::ng-deep ngx-konverso .loading-dots{text-align:center;width:100%}::ng-deep ngx-konverso .loading-dots--dot{-webkit-animation:1.5s ease-in-out infinite dot-keyframes;animation:1.5s ease-in-out infinite dot-keyframes;border-radius:10px;display:inline-block;height:10px;width:10px}::ng-deep ngx-konverso .loading-dots--dot:nth-child(2){-webkit-animation-delay:.5s;animation-delay:.5s}::ng-deep ngx-konverso .loading-dots--dot:nth-child(3){-webkit-animation-delay:1s;animation-delay:1s}::ng-deep ngx-konverso bot-first-visit,::ng-deep ngx-konverso bot-full-screen{display:table;min-height:100%;height:100%;width:100%}::ng-deep ngx-konverso bot-full-screen button:focus,::ng-deep ngx-konverso bot-full-screen input:focus{outline:0!important}::ng-deep ngx-konverso bot-full-screen .bot-button>*{position:relative}::ng-deep ngx-konverso bot-full-screen .button-lg{padding:10px!important;font-size:16px!important}::ng-deep ngx-konverso bot-full-screen .bot-button{cursor:pointer;opacity:.9;min-width:150px;border-radius:25px;padding:5px;position:relative;margin:30px auto;overflow:hidden;border-width:0;outline:0;box-shadow:0 1px 4px rgba(0,0,0,.6);transition:opacity .3s}::ng-deep ngx-konverso bot-full-screen .bot-button span{display:block;padding:12px 24px}::ng-deep ngx-konverso bot-full-screen .bot-button:focus,::ng-deep ngx-konverso bot-full-screen .bot-button:hover{opacity:1}::ng-deep ngx-konverso bot-full-screen .bot-button:before{content:\"\";position:absolute;top:50%;left:50%;display:block;width:0;padding-top:0;border-radius:100%;background-color:rgba(236,240,241,.3);transform:translate(-50%,-50%)}::ng-deep ngx-konverso bot-full-screen .bot-button:active:before{width:120%;padding-top:120%;transition:width .2s ease-out,padding-top .2s ease-out}::ng-deep ngx-konverso bot-full-screen .bot-button-left{background:linear-gradient(107deg,#4862ab 0,#9d107d 100%) no-repeat padding-box;border-radius:22px;color:#fff!important;font:12px/19px nexa;height:44px;display:inline-block;letter-spacing:0;margin-right:25px}::ng-deep ngx-konverso bot-full-screen .bot-button-right{background:no-repeat padding-box #e5e8EE54;border:2px solid #c2c8d5!important;color:#404e6b!important;border-radius:22px;font:12px/19px nexa;height:44px;letter-spacing:0;display:inline-block}::ng-deep ngx-konverso bot-full-screen .bot-button-grey{background:no-repeat padding-box #e5e8ee!important;border:2px solid #c2c8d5!important;border-radius:10px!important;min-height:44px!important;color:#77839b!important;display:inline-block!important;margin-right:25px!important}::ng-deep ngx-konverso bot-full-screen .bot-container{font-family:nexa,Roboto;width:100%;height:100%;display:table;margin:auto;background-size:contain}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view{background-size:contain;width:auto;margin:auto;height:100%;display:table-cell;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view img{margin:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper{padding-top:5%;width:100%;margin:auto;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:20px;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step{margin-top:5%;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step .bot-init-dot{border:1px solid;display:inline-block;width:12px;height:12px;margin-left:2.5px;margin-right:2.5px;border-radius:50%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-button-wrapper{display:block;width:100%;text-align:center;margin-top:8%;margin-right:auto;margin-left:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper{display:table;height:100%;max-height:100%;overflow:hidden;width:100%;position:relative}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-logo{padding-top:2.5%;width:100%;margin:auto;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-logo img{margin-left:auto;margin-right:auto;display:block;width:150px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-answer{width:600px;text-align:center;margin:2.5% auto auto;font-size:25px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .user-input{font-size:15px;margin:auto;display:block}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .user-input .data{padding:10px 20px;border-radius:25px 25px 0;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:5% auto auto;background-color:#00a9de}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .user-input .time{font-weight:300;position:absolute;width:200px;display:block;margin-left:95%;bottom:-1%;color:#000;font-size:10px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-input-wrapper{text-align:center;position:absolute;width:100%;bottom:2%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-input-wrapper input{text-align:center;display:inline-block;padding:10px;border-radius:25px;color:#000;width:40%;border:1px solid rgba(0,0,0,.2);background:no-repeat padding-box #e5e8ee;margin-right:10px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-input-wrapper button{display:inline-block;width:calc(10% - 15px);padding:11px;background:linear-gradient(243deg,#9d107d 0,#4862ab 100%) no-repeat padding-box!important;border-radius:25px!important}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper{width:100%;display:table;height:100%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo{max-width:100px;position:absolute;top:2%;left:2%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo img{max-width:100px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper{width:100%;position:relative;max-width:600px;height:calc(85vh - 50px);padding:15px 30px;margin:0 auto;overflow-y:scroll;direction:rtl}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper::-webkit-scrollbar{width:0!important}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat{position:absolute;overflow-x:hidden;display:flex;flex-direction:column-reverse;justify-content:flex-end;transform:rotate(180deg);min-height:100%;width:94%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer{font-size:15px;padding:10px 20px;border-radius:25px;color:#000;background-color:transparent;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;margin:15px 0;word-break:break-all;transform:rotate(180deg);direction:ltr}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer button{padding:10px;border:1px solid}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input{font-size:15px;transform:rotate(180deg);direction:ltr}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .data{padding:10px 20px;border-radius:25px 25px 0;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:15px 0 15px auto;background-color:#00a9de}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .time{font-weight:300;position:absolute;width:200px;display:block;margin-left:95%;bottom:-1%;color:#000;font-size:10px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper{display:table;width:100%;margin:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input-disable{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5% .3%;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input input{display:inline-block;padding:10px;border-radius:25px;color:#000;width:60%;margin-right:15px;border:1px solid rgba(0,0,0,.2)}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input button{display:inline-block;width:calc(36% - 15px);padding:11px}::ng-deep ngx-konverso .bot-mobile{font-family:nexa,Roboto;width:96vw!important;height:100vh;display:table;margin:auto;background-size:contain}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit{position:relative}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-logo-init-wrapper{margin-top:2.5vh}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block;max-width:150px}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:15px!important;text-align:center}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-init-button-wrapper{position:absolute;top:70vh}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-answer{width:70vw!important;text-align:center;margin:15.5% auto auto!important;font-size:15px!important}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-input-wrapper{background:#fff;bottom:10vh!important}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-input-wrapper input{width:90%!important}"]
        })
    ], KonversoComponent);
    return KonversoComponent;
}());
export { KonversoComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29udmVyc28uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8va29udmVyc28vIiwic291cmNlcyI6WyJsaWIva29udmVyc28uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRXRELGFBQWE7QUFNYjtJQWlCRSwyQkFBb0IsT0FBd0I7UUFBNUMsaUJBTUM7UUFObUIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFoQnJDLFdBQU0sR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN6RCxVQUFLLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFNOUQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFHdEIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBTzlCLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7Z0JBQ3BDLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFBQSxpQkEyQkM7UUExQkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUE7UUFDOUYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENB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bEM7UUFBVCxNQUFNLEVBQUU7b0RBQTREO0lBRjFELGlCQUFpQjtRQUw3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixzdUJBQXNDOztTQUV2QyxDQUFDO09BQ1csaUJBQWlCLENBOEk3QjtJQUFELHdCQUFDO0NBQUEsQUE5SUQsSUE4SUM7U0E5SVksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtLb252ZXJzb1NlcnZpY2V9IGZyb20gJy4va29udmVyc28uc2VydmljZSc7XG5pbXBvcnQge0NvbG9yU2V0LCBEZWZhdWx0QXNzZXRzLCBLb252ZXJzb0Fuc3dlciwgT3BlbkNoYXRCb3RSZXNwb25zZSwgVXNlcklucHV0fSBmcm9tICcuLi9pbnRlcmZhY2UvS29udmVyc29JbnRlcmZhY2UnO1xuaW1wb3J0IHtCb3RNZXNzYWdlU2FtcGxlfSBmcm9tICcuLi9TYW1wbGUvQm90TWVzc2FnZVNhbXBsZSc7XG5pbXBvcnQge0RvdExvYWRlclRlbXBsYXRlfSBmcm9tICcuLi9TYW1wbGUvRG90TG9hZGVyJztcblxuLy8gQHRzLWlnbm9yZVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWtvbnZlcnNvJyxcbiAgdGVtcGxhdGVVcmw6ICdrb252ZXJzby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuLi8uLi9hc3NldHMvbWFpbi5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgS29udmVyc29Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgX3JlYWR5OiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSByZWFkeTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBwdWJsaWMgcXVlcnk6IHN0cmluZztcbiAgcHVibGljIGlzTW9iaWxlOiBib29sZWFuO1xuICBwdWJsaWMgYXNzZXRzOiBEZWZhdWx0QXNzZXRzO1xuICBwdWJsaWMgZmlyc3RWaXNpdDogYm9vbGVhbjtcbiAgcHVibGljIGZpcnN0VXNhZ2VTdG9yeTogc3RyaW5nW107XG4gIHB1YmxpYyBBc3Npc3RhbnRNb2RlID0gZmFsc2U7XG4gIHB1YmxpYyBjb2xvclNldDogQ29sb3JTZXQ7XG4gIHB1YmxpYyBIaXN0b3J5OiAoVXNlcklucHV0IHwgT3BlbkNoYXRCb3RSZXNwb25zZSlbXTtcbiAgcHVibGljIGRpc2FibGVVc2VySW5wdXQgPSBmYWxzZTtcbiAgcHVibGljIExhc3RVc2VySW5wdXQ6IFVzZXJJbnB1dDtcbiAgcHVibGljIExhc3RCb3RBbnN3ZXI6IE9wZW5DaGF0Qm90UmVzcG9uc2U7XG4gIHB1YmxpYyBQbGFjZUhvbGRlcjogc3RyaW5nW107XG4gIHB1YmxpYyBXZWxjb21lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBLb252ZXJzb1NlcnZpY2UpIHtcbiAgICBpZiAoc2VydmljZS5fYXV0aCkge1xuICAgICAgdGhpcy5zZXJ2aWNlLmF1dGhlbnRpY2F0aW9uLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2coJ3VzZXIgYWdlbnQnLCBuYXZpZ2F0b3IudXNlckFnZW50LCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmV8aVBhZHxpUG9kL2kpKVxuICAgIHRoaXMuaXNNb2JpbGUgPSB0aGlzLl9pc01vYmlsZSgpO1xuICAgIHRoaXMuYXNzZXRzID0gdGhpcy5zZXJ2aWNlLmFzc2V0cztcbiAgICB0aGlzLmZpcnN0VmlzaXQgPSB0aGlzLnNlcnZpY2UuZmlyc3RWaXNpdDtcbiAgICB0aGlzLmZpcnN0VXNhZ2VTdG9yeSA9IHRoaXMuc2VydmljZS5maXJzdFVzYWdlU3Rvcnk7XG4gICAgdGhpcy5Bc3Npc3RhbnRNb2RlID0gdGhpcy5zZXJ2aWNlLkFzc2lzdGFudE1vZGU7XG4gICAgdGhpcy5QbGFjZUhvbGRlciA9IHRoaXMuc2VydmljZS5QbGFjZUhvbGRlcjtcbiAgICB0aGlzLldlbGNvbWUgPSB0aGlzLnNlcnZpY2UuV2VsY29tZTtcbiAgICB0aGlzLnNlbmRCb3RDb21tYW5kKCdleGl0JywgZmFsc2UpLmNhdGNoKChlcnI6IGFueSkgPT4gY29uc29sZS5sb2coJ2ZhaWwgcmVzZXQgc2Vzc2lvbicpKTtcbiAgICB0aGlzLkhpc3RvcnkgPSBbXTtcbiAgICBpZiAodGhpcy5zZXJ2aWNlLkNvbG9yU2V0KSB7XG4gICAgICB0aGlzLmNvbG9yU2V0ID0gdGhpcy5zZXJ2aWNlLkNvbG9yU2V0O1xuICAgIH1cbiAgICB0aGlzLl9yZWFkeS5zdWJzY3JpYmUoKHJlYWR5OiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAocmVhZHkpIHtcbiAgICAgICAgdGhpcy5maXJzdFZpc2l0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VydmljZS5maXJzdFZpc2l0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVhZHkuZW1pdChyZWFkeSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHRoaXMuV2VsY29tZSkge1xuICAgICAgY29uc3QgY3VzdG9tV2VsY29tZTogT3BlbkNoYXRCb3RSZXNwb25zZSA9IEJvdE1lc3NhZ2VTYW1wbGU7XG4gICAgICBjdXN0b21XZWxjb21lLnRleHQgPSB0aGlzLldlbGNvbWU7XG4gICAgICB0aGlzLkxhc3RCb3RBbnN3ZXIgPSBjdXN0b21XZWxjb21lO1xuICAgICAgdGhpcy5IaXN0b3J5LnB1c2goY3VzdG9tV2VsY29tZSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgc2VuZCgkZXZlbnQ6IFVzZXJJbnB1dCkge1xuICAgIGlmICgkZXZlbnQubWVzc2FnZSA9PT0gJ2V4aXQnKSB7XG4gICAgICB0aGlzLnNlbmRCb3RDb21tYW5kKCdleGl0JywgZmFsc2UpLmNhdGNoKChlcnI6IGFueSkgPT4gY29uc29sZS5sb2coJ2ZhaWwgcmVzZXQgc2Vzc2lvbicpKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5MYXN0Qm90QW5zd2VyLnRleHQgPSAnPGJyPicgKyBEb3RMb2FkZXJUZW1wbGF0ZSh0aGlzLnNlcnZpY2UuQ29sb3JTZXQuUHJpbWFyeSk7XG4gICAgdGhpcy5IaXN0b3J5LnB1c2goJGV2ZW50KTtcbiAgICBpZiAodGhpcy5Bc3Npc3RhbnRNb2RlKSB7XG4gICAgICBpZiAodGhpcy5MYXN0VXNlcklucHV0KSB7XG4gICAgICAgIHRoaXMuTGFzdFVzZXJJbnB1dC5tZXNzYWdlICs9ICcgJyArICRldmVudC5tZXNzYWdlO1xuICAgICAgICB0aGlzLkxhc3RVc2VySW5wdXQuZGF0ZSA9ICRldmVudC5kYXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5MYXN0VXNlcklucHV0ID0gJGV2ZW50O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLkxhc3RVc2VySW5wdXQgPSAkZXZlbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgaW5kZXg6IG51bWJlciA9IHRoaXMuSGlzdG9yeS5sZW5ndGggLSAxO1xuICAgIGNvbnN0IHJlc3BvbnNlOiBLb252ZXJzb0Fuc3dlciA9IGF3YWl0IHRoaXMuc2VydmljZS5zZW5kKCRldmVudC5tZXNzYWdlKS5jYXRjaCgoZXJyOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdXZSBnb3QgYW4gZXJyb3IgJywgZXJyKTtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHRoaXMuSGlzdG9yeVtpbmRleF0uZXJyb3IgPSB0cnVlO1xuICAgIH0pO1xuICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5yZXNwb25zZSkge1xuICAgICAgaWYgKHJlc3BvbnNlLnJlc3BvbnNlLm1lZGlhcyAmJiByZXNwb25zZS5yZXNwb25zZS5tZWRpYXNbMF0gJiYgcmVzcG9uc2UucmVzcG9uc2UubWVkaWFzWzBdLnJlcXVpcmVkX2FjdGlvbnMgJiZcbiAgICAgICAgcmVzcG9uc2UucmVzcG9uc2UubWVkaWFzWzBdLnJlcXVpcmVkX2FjdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZVVzZXJJbnB1dCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpc2FibGVVc2VySW5wdXQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuTGFzdEJvdEFuc3dlciA9IHJlc3BvbnNlLnJlc3BvbnNlO1xuICAgICAgdGhpcy5IaXN0b3J5LnB1c2gocmVzcG9uc2UucmVzcG9uc2UpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHNlbmRCb3RDb21tYW5kKCRldmVudDogc3RyaW5nLCBwdXNoOiBib29sZWFuID0gdHJ1ZSkge1xuICAgIHRoaXMuTGFzdEJvdEFuc3dlci50ZXh0ID0gJzxicj4nICsgRG90TG9hZGVyVGVtcGxhdGUodGhpcy5zZXJ2aWNlLkNvbG9yU2V0LlByaW1hcnkpO1xuICAgIGlmICgkZXZlbnQgPT09ICd5ZXNfcmVzcG9uc2UnIHx8ICRldmVudCA9PT0gJ25vX3Jlc3BvbnNlJykge1xuICAgICAgdGhpcy5MYXN0VXNlcklucHV0ID0gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgcmVzcG9uc2U6IEtvbnZlcnNvQW5zd2VyID0gYXdhaXQgdGhpcy5zZXJ2aWNlLnNlbmQoJGV2ZW50KS5jYXRjaCgoZXJyOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdXZSBnb3QgYW4gZXJyb3IgJywgZXJyKTtcbiAgICB9KTtcbiAgICBpZiAocmVzcG9uc2UucmVzcG9uc2UubWVkaWFzICYmIHJlc3BvbnNlLnJlc3BvbnNlLm1lZGlhc1swXSAmJiByZXNwb25zZS5yZXNwb25zZS5tZWRpYXNbMF0ucmVxdWlyZWRfYWN0aW9ucyAmJlxuICAgICAgcmVzcG9uc2UucmVzcG9uc2UubWVkaWFzWzBdLnJlcXVpcmVkX2FjdGlvbnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmRpc2FibGVVc2VySW5wdXQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc2FibGVVc2VySW5wdXQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnJlc3BvbnNlICYmIHB1c2gpIHtcbiAgICAgIHRoaXMuTGFzdEJvdEFuc3dlciA9IHJlc3BvbnNlLnJlc3BvbnNlO1xuICAgICAgdGhpcy5IaXN0b3J5LnB1c2gocmVzcG9uc2UucmVzcG9uc2UpO1xuICAgIH0gZWxzZSBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UucmVzcG9uc2UgJiYgIXB1c2gpIHtcbiAgICAgIHRoaXMuTGFzdFVzZXJJbnB1dCA9IG51bGw7XG4gICAgICB0aGlzLkxhc3RCb3RBbnN3ZXIgPSByZXNwb25zZS5yZXNwb25zZTtcbiAgICAgIHRoaXMuSGlzdG9yeS5wdXNoKHJlc3BvbnNlLnJlc3BvbnNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5MYXN0VXNlcklucHV0ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pc01vYmlsZSgpOiBib29sZWFuIHtcblxuICAgIGNvbnN0IGlzTW9iaWxlID0ge1xuICAgICAgQW5kcm9pZDogKCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICByZXR1cm4gISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpO1xuICAgICAgfSxcbiAgICAgIEJsYWNrQmVycnk6ICgpOiBib29sZWFuID0+IHtcbiAgICAgICAgcmV0dXJuICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQmxhY2tCZXJyeS9pKTtcbiAgICAgIH0sXG4gICAgICBpT1M6ICgpOiBib29sZWFuID0+IHtcbiAgICAgICAgcmV0dXJuICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVBob25lfGlQYWR8aVBvZC9pKTtcbiAgICAgIH0sXG4gICAgICBPcGVyYTogKCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICByZXR1cm4gISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9PcGVyYSBNaW5pL2kpO1xuICAgICAgfSxcbiAgICAgIFdpbmRvd3M6ICgpOiBib29sZWFuID0+IHtcbiAgICAgICAgcmV0dXJuICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvSUVNb2JpbGUvaSkgfHwgISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9XUERlc2t0b3AvaSk7XG4gICAgICB9LFxuICAgICAgYW55OiAoKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIHJldHVybiAhIShpc01vYmlsZS5BbmRyb2lkKCkgfHwgaXNNb2JpbGUuQmxhY2tCZXJyeSgpIHx8IGlzTW9iaWxlLmlPUygpIHx8IGlzTW9iaWxlLk9wZXJhKCkgfHwgaXNNb2JpbGUuV2luZG93cygpKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBpc01vYmlsZS5hbnkoKTtcbiAgfVxuXG5cbn1cbiJdfQ==