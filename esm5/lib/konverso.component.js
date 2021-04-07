import { __awaiter, __decorate, __generator } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { KonversoService } from './konverso.service';
import { BotMessageSample } from '../Sample/BotMessageSample';
import { DotLoaderTemplate } from '../Sample/DotLoader';
// @ts-ignore
var KonversoComponent = /** @class */ (function () {
    function KonversoComponent(service) {
        this.service = service;
        this._ready = new EventEmitter();
        this.ready = new EventEmitter();
        this.AssistantMode = false;
        this.disableUserInput = false;
    }
    KonversoComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var customWelcome;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isMobile = this._isMobile();
                        this.assets = this.service.assets;
                        this.firstVisit = this.service.firstVisit;
                        this.firstUsageStory = this.service.firstUsageStory;
                        this.AssistantMode = this.service.AssistantMode;
                        this.PlaceHolder = this.service.PlaceHolder;
                        this.Welcome = this.service.Welcome;
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
                        return [4 /*yield*/, this.sendBotCommand('exit', false).catch(function (err) { return console.log('fail reset session'); })];
                    case 1:
                        _a.sent();
                        if (this.Welcome) {
                            customWelcome = BotMessageSample;
                            customWelcome.text = this.Welcome;
                            this.LastBotAnswer = customWelcome;
                            this.History.push(customWelcome);
                        }
                        return [2 /*return*/];
                }
            });
        });
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
                        this.LastBotAnswer.text += '<br>' + DotLoaderTemplate(this.service.ColorSet.Primary);
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
                        this.LastBotAnswer.text += '<br>' + DotLoaderTemplate(this.service.ColorSet.Primary);
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
            styles: ["::ng-deep ngx-konverso{overflow:hidden;display:block;min-height:100%;height:100%}@-webkit-keyframes dot-keyframes{0%,100%{opacity:.4;transform:scale(1,1)}50%{opacity:1;transform:scale(1.2,1.2)}}@keyframes dot-keyframes{0%,100%{opacity:.4;transform:scale(1,1)}50%{opacity:1;transform:scale(1.2,1.2)}}::ng-deep ngx-konverso .loading-dots{text-align:center;width:100%}::ng-deep ngx-konverso .loading-dots--dot{-webkit-animation:1.5s ease-in-out infinite dot-keyframes;animation:1.5s ease-in-out infinite dot-keyframes;border-radius:10px;display:inline-block;height:10px;width:10px}::ng-deep ngx-konverso .loading-dots--dot:nth-child(2){-webkit-animation-delay:.5s;animation-delay:.5s}::ng-deep ngx-konverso .loading-dots--dot:nth-child(3){-webkit-animation-delay:1s;animation-delay:1s}::ng-deep ngx-konverso bot-first-visit,::ng-deep ngx-konverso bot-full-screen{display:table;min-height:100%;height:100%;width:100%}::ng-deep ngx-konverso bot-full-screen button:focus,::ng-deep ngx-konverso bot-full-screen input:focus{outline:0!important}::ng-deep ngx-konverso bot-full-screen .bot-button>*{position:relative}::ng-deep ngx-konverso bot-full-screen .button-lg{padding:10px!important;font-size:16px!important}::ng-deep ngx-konverso bot-full-screen .bot-button{cursor:pointer;opacity:.9;min-width:150px;border-radius:25px;padding:5px;position:relative;display:block;margin:30px auto;overflow:hidden;border-width:0;outline:0;box-shadow:0 1px 4px rgba(0,0,0,.6);transition:opacity .3s}::ng-deep ngx-konverso bot-full-screen .bot-button span{display:block;padding:12px 24px}::ng-deep ngx-konverso bot-full-screen .bot-button:focus,::ng-deep ngx-konverso bot-full-screen .bot-button:hover{opacity:1}::ng-deep ngx-konverso bot-full-screen .bot-button:before{content:\"\";position:absolute;top:50%;left:50%;display:block;width:0;padding-top:0;border-radius:100%;background-color:rgba(236,240,241,.3);transform:translate(-50%,-50%)}::ng-deep ngx-konverso bot-full-screen .bot-button:active:before{width:120%;padding-top:120%;transition:width .2s ease-out,padding-top .2s ease-out}::ng-deep ngx-konverso bot-full-screen .bot-container{font-family:nexa,Roboto;width:100%;height:100%;display:table;margin:auto;background-size:contain}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view{background-size:contain;width:auto;margin:auto;height:100%;display:table-cell;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view img{margin:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper{padding-top:5%;width:100%;margin:auto;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:20px;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step{margin-top:5%;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step .bot-init-dot{border:1px solid;display:inline-block;width:12px;height:12px;margin-left:2.5px;margin-right:2.5px;border-radius:50%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-button-wrapper{display:block;width:100%;text-align:center;margin-top:8%;margin-right:auto;margin-left:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper{display:table;height:100%;max-height:100%;overflow:hidden;width:100%;position:relative}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-logo{padding-top:2.5%;width:100%;margin:auto;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-logo img{margin-left:auto;margin-right:auto;display:block;width:150px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-answer{width:600px;text-align:center;margin:2.5% auto auto;font-size:25px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .user-input{font-size:15px;margin:auto;display:block}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .user-input .data{padding:10px 20px;border-radius:25px 25px 0;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:5% auto auto;background-color:#00a9de}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .user-input .time{font-weight:300;position:absolute;width:200px;display:block;margin-left:95%;bottom:-1%;color:#000;font-size:10px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-input-wrapper{text-align:center;position:absolute;width:100%;bottom:2%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-input-wrapper input{text-align:center;display:block;padding:10px;border-radius:25px;color:#000;width:60%;margin:auto;border:1px solid rgba(0,0,0,.2)}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-input-wrapper button{display:block;width:calc(36% - 15px);padding:11px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper{width:100%;display:table;height:100%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo{max-width:100px;position:absolute;top:2%;left:2%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo img{max-width:100px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper{width:100%;position:relative;max-width:600px;height:calc(85vh - 50px);padding:15px 30px;margin:0 auto;overflow-y:scroll;direction:rtl}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper::-webkit-scrollbar{width:0!important}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat{position:absolute;overflow-x:hidden;display:flex;flex-direction:column-reverse;justify-content:flex-end;transform:rotate(180deg);min-height:100%;width:94%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer{font-size:15px;padding:10px 20px;border-radius:25px;color:#000;background-color:transparent;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;margin:15px 0;word-break:break-all;transform:rotate(180deg);direction:ltr}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer button{padding:10px;border:1px solid}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input{font-size:15px;transform:rotate(180deg);direction:ltr}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .data{padding:10px 20px;border-radius:25px 25px 0;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:15px 0 15px auto;background-color:#00a9de}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .time{font-weight:300;position:absolute;width:200px;display:block;margin-left:95%;bottom:-1%;color:#000;font-size:10px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper{display:table;width:100%;margin:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input-disable{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5% .3%;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input input{display:inline-block;padding:10px;border-radius:25px;color:#000;width:60%;margin-right:15px;border:1px solid rgba(0,0,0,.2)}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input button{display:inline-block;width:calc(36% - 15px);padding:11px}::ng-deep ngx-konverso .bot-mobile{font-family:nexa,Roboto;width:96vw!important;height:100vh;display:table;margin:auto;background-size:contain}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit{position:relative}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-logo-init-wrapper{margin-top:2.5vh}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block;max-width:150px}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:15px!important;text-align:center}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-init-button-wrapper{position:absolute;top:70vh}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-answer{width:70vw!important;text-align:center;margin:15.5% auto auto!important;font-size:15px!important}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-input-wrapper{background:#fff;bottom:10vh!important}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-input-wrapper input{width:90%!important}"]
        })
    ], KonversoComponent);
    return KonversoComponent;
}());
export { KonversoComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29udmVyc28uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8va29udmVyc28vIiwic291cmNlcyI6WyJsaWIva29udmVyc28uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRXRELGFBQWE7QUFNYjtJQWlCRSwyQkFBb0IsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFoQnJDLFdBQU0sR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN6RCxVQUFLLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFNOUQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFHdEIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO0lBT2hDLENBQUM7SUFFSyxvQ0FBUSxHQUFkOzs7Ozs7O3dCQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO3dCQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO3dCQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO3dCQUMxQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDO3dCQUNwRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO3dCQUNoRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO3dCQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO3dCQUVwQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQzt3QkFDbEIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTs0QkFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQzt5QkFDdkM7d0JBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFjOzRCQUNuQyxJQUFJLEtBQUssRUFBRTtnQ0FDVCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQ0FDeEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dDQUNoQyxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs2QkFDeEI7d0JBQ0gsQ0FBQyxDQUFDLENBQUM7d0JBQ0gscUJBQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBUSxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFqQyxDQUFpQyxDQUFDLEVBQUE7O3dCQUEvRixTQUErRixDQUFDO3dCQUNoRyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7NEJBQ1YsYUFBYSxHQUF3QixnQkFBZ0IsQ0FBQzs0QkFDNUQsYUFBYSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDOzRCQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQzs0QkFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7eUJBQ2xDOzs7OztLQUNGO0lBRUssZ0NBQUksR0FBVixVQUFXLE1BQWlCOzs7Ozs7O3dCQUMxQixJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssTUFBTSxFQUFFOzRCQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFRLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLEVBQWpDLENBQWlDLENBQUMsQ0FBQzs0QkFDMUYsc0JBQU8sS0FBSyxFQUFDO3lCQUNkO3dCQUNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDckYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQzFCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTs0QkFDdEIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO2dDQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztnQ0FDbkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQzs2QkFDdkM7aUNBQU07Z0NBQ0wsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUM7NkJBQzdCO3lCQUNGOzZCQUFNOzRCQUNMLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO3lCQUM3Qjt3QkFFSyxLQUFLLEdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUNiLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFXO2dDQUN6RixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxDQUFDO2dDQUNyQyxhQUFhO2dDQUNiLEtBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzs0QkFDbkMsQ0FBQyxDQUFDLEVBQUE7O3dCQUpJLFFBQVEsR0FBbUIsU0FJL0I7d0JBQ0YsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRTs0QkFDakMsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0I7Z0NBQ3pHLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtnQ0FDckQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQzs2QkFDOUI7aUNBQU07Z0NBQ0wsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQzs2QkFDL0I7NEJBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDOzRCQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7eUJBQ3RDOzs7OztLQUNGO0lBRUssMENBQWMsR0FBcEIsVUFBcUIsTUFBYyxFQUFFLElBQW9CO1FBQXBCLHFCQUFBLEVBQUEsV0FBb0I7Ozs7Ozt3QkFDdkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksTUFBTSxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNwRCxxQkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFXO2dDQUNqRixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxDQUFDOzRCQUN2QyxDQUFDLENBQUMsRUFBQTs7d0JBRkksUUFBUSxHQUFtQixTQUUvQjt3QkFDRixJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQjs0QkFDekcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFOzRCQUNyRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO3lCQUM5Qjs2QkFBTTs0QkFDTCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO3lCQUMvQjt3QkFDRCxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsUUFBUSxJQUFJLElBQUksRUFBRTs0QkFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDOzRCQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7eUJBQ3RDOzZCQUFNLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7NEJBQ2pELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDOzRCQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7NEJBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzt5QkFDdEM7NkJBQU07NEJBQ0wsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7eUJBQzNCOzs7OztLQUNGO0lBRU8scUNBQVMsR0FBakI7UUFDRSxJQUFNLFFBQVEsR0FBRztZQUNmLE9BQU8sRUFBRTtnQkFDUCxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNqRCxDQUFDO1lBQ0QsVUFBVSxFQUFFO2dCQUNWLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BELENBQUM7WUFDRCxHQUFHLEVBQUU7Z0JBQ0gsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUMxRCxDQUFDO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3BELENBQUM7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQy9GLENBQUM7WUFDRCxHQUFHLEVBQUU7Z0JBQ0gsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDckgsQ0FBQztTQUNGLENBQUM7UUFDRixPQUFPLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDOztnQkFqSDRCLGVBQWU7O0lBZmxDO1FBQVQsTUFBTSxFQUFFO29EQUE0RDtJQUYxRCxpQkFBaUI7UUFMN0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsc3VCQUFzQzs7U0FFdkMsQ0FBQztPQUNXLGlCQUFpQixDQXFJN0I7SUFBRCx3QkFBQztDQUFBLEFBcklELElBcUlDO1NBcklZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7S29udmVyc29TZXJ2aWNlfSBmcm9tICcuL2tvbnZlcnNvLnNlcnZpY2UnO1xuaW1wb3J0IHtDb2xvclNldCwgRGVmYXVsdEFzc2V0cywgS29udmVyc29BbnN3ZXIsIE9wZW5DaGF0Qm90UmVzcG9uc2UsIFVzZXJJbnB1dH0gZnJvbSAnLi4vaW50ZXJmYWNlL0tvbnZlcnNvSW50ZXJmYWNlJztcbmltcG9ydCB7Qm90TWVzc2FnZVNhbXBsZX0gZnJvbSAnLi4vU2FtcGxlL0JvdE1lc3NhZ2VTYW1wbGUnO1xuaW1wb3J0IHtEb3RMb2FkZXJUZW1wbGF0ZX0gZnJvbSAnLi4vU2FtcGxlL0RvdExvYWRlcic7XG5cbi8vIEB0cy1pZ25vcmVcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1rb252ZXJzbycsXG4gIHRlbXBsYXRlVXJsOiAna29udmVyc28uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi4vLi4vYXNzZXRzL21haW4uc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEtvbnZlcnNvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIF9yZWFkeTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgcmVhZHk6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgcHVibGljIHF1ZXJ5OiBzdHJpbmc7XG4gIHB1YmxpYyBpc01vYmlsZTogYm9vbGVhbjtcbiAgcHVibGljIGFzc2V0czogRGVmYXVsdEFzc2V0cztcbiAgcHVibGljIGZpcnN0VmlzaXQ6IGJvb2xlYW47XG4gIHB1YmxpYyBmaXJzdFVzYWdlU3Rvcnk6IHN0cmluZ1tdO1xuICBwdWJsaWMgQXNzaXN0YW50TW9kZSA9IGZhbHNlO1xuICBwdWJsaWMgY29sb3JTZXQ6IENvbG9yU2V0O1xuICBwdWJsaWMgSGlzdG9yeTogKFVzZXJJbnB1dCB8IE9wZW5DaGF0Qm90UmVzcG9uc2UpW107XG4gIHB1YmxpYyBkaXNhYmxlVXNlcklucHV0ID0gZmFsc2U7XG4gIHB1YmxpYyBMYXN0VXNlcklucHV0OiBVc2VySW5wdXQ7XG4gIHB1YmxpYyBMYXN0Qm90QW5zd2VyOiBPcGVuQ2hhdEJvdFJlc3BvbnNlO1xuICBwdWJsaWMgUGxhY2VIb2xkZXI6IHN0cmluZ1tdO1xuICBwdWJsaWMgV2VsY29tZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogS29udmVyc29TZXJ2aWNlKSB7XG4gIH1cblxuICBhc3luYyBuZ09uSW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzTW9iaWxlID0gdGhpcy5faXNNb2JpbGUoKTtcbiAgICB0aGlzLmFzc2V0cyA9IHRoaXMuc2VydmljZS5hc3NldHM7XG4gICAgdGhpcy5maXJzdFZpc2l0ID0gdGhpcy5zZXJ2aWNlLmZpcnN0VmlzaXQ7XG4gICAgdGhpcy5maXJzdFVzYWdlU3RvcnkgPSB0aGlzLnNlcnZpY2UuZmlyc3RVc2FnZVN0b3J5O1xuICAgIHRoaXMuQXNzaXN0YW50TW9kZSA9IHRoaXMuc2VydmljZS5Bc3Npc3RhbnRNb2RlO1xuICAgIHRoaXMuUGxhY2VIb2xkZXIgPSB0aGlzLnNlcnZpY2UuUGxhY2VIb2xkZXI7XG4gICAgdGhpcy5XZWxjb21lID0gdGhpcy5zZXJ2aWNlLldlbGNvbWU7XG5cbiAgICB0aGlzLkhpc3RvcnkgPSBbXTtcbiAgICBpZiAodGhpcy5zZXJ2aWNlLkNvbG9yU2V0KSB7XG4gICAgICB0aGlzLmNvbG9yU2V0ID0gdGhpcy5zZXJ2aWNlLkNvbG9yU2V0O1xuICAgIH1cbiAgICB0aGlzLl9yZWFkeS5zdWJzY3JpYmUoKHJlYWR5OiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAocmVhZHkpIHtcbiAgICAgICAgdGhpcy5maXJzdFZpc2l0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VydmljZS5maXJzdFZpc2l0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmVhZHkuZW1pdChyZWFkeSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgYXdhaXQgdGhpcy5zZW5kQm90Q29tbWFuZCgnZXhpdCcsIGZhbHNlKS5jYXRjaCgoZXJyOiBhbnkpID0+IGNvbnNvbGUubG9nKCdmYWlsIHJlc2V0IHNlc3Npb24nKSk7XG4gICAgaWYgKHRoaXMuV2VsY29tZSkge1xuICAgICAgY29uc3QgY3VzdG9tV2VsY29tZTogT3BlbkNoYXRCb3RSZXNwb25zZSA9IEJvdE1lc3NhZ2VTYW1wbGU7XG4gICAgICBjdXN0b21XZWxjb21lLnRleHQgPSB0aGlzLldlbGNvbWU7XG4gICAgICB0aGlzLkxhc3RCb3RBbnN3ZXIgPSBjdXN0b21XZWxjb21lO1xuICAgICAgdGhpcy5IaXN0b3J5LnB1c2goY3VzdG9tV2VsY29tZSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgc2VuZCgkZXZlbnQ6IFVzZXJJbnB1dCkge1xuICAgIGlmICgkZXZlbnQubWVzc2FnZSA9PT0gJ2V4aXQnKSB7XG4gICAgICB0aGlzLnNlbmRCb3RDb21tYW5kKCdleGl0JywgZmFsc2UpLmNhdGNoKChlcnI6IGFueSkgPT4gY29uc29sZS5sb2coJ2ZhaWwgcmVzZXQgc2Vzc2lvbicpKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5MYXN0Qm90QW5zd2VyLnRleHQgKz0gJzxicj4nICsgRG90TG9hZGVyVGVtcGxhdGUodGhpcy5zZXJ2aWNlLkNvbG9yU2V0LlByaW1hcnkpO1xuICAgIHRoaXMuSGlzdG9yeS5wdXNoKCRldmVudCk7XG4gICAgaWYgKHRoaXMuQXNzaXN0YW50TW9kZSkge1xuICAgICAgaWYgKHRoaXMuTGFzdFVzZXJJbnB1dCkge1xuICAgICAgICB0aGlzLkxhc3RVc2VySW5wdXQubWVzc2FnZSArPSAnICcgKyAkZXZlbnQubWVzc2FnZTtcbiAgICAgICAgdGhpcy5MYXN0VXNlcklucHV0LmRhdGUgPSAkZXZlbnQuZGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuTGFzdFVzZXJJbnB1dCA9ICRldmVudDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5MYXN0VXNlcklucHV0ID0gJGV2ZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSB0aGlzLkhpc3RvcnkubGVuZ3RoIC0gMTtcbiAgICBjb25zdCByZXNwb25zZTogS29udmVyc29BbnN3ZXIgPSBhd2FpdCB0aGlzLnNlcnZpY2Uuc2VuZCgkZXZlbnQubWVzc2FnZSkuY2F0Y2goKGVycjogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnV2UgZ290IGFuIGVycm9yICcsIGVycik7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLkhpc3RvcnlbaW5kZXhdLmVycm9yID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UucmVzcG9uc2UpIHtcbiAgICAgIGlmIChyZXNwb25zZS5yZXNwb25zZS5tZWRpYXMgJiYgcmVzcG9uc2UucmVzcG9uc2UubWVkaWFzWzBdICYmIHJlc3BvbnNlLnJlc3BvbnNlLm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zICYmXG4gICAgICAgIHJlc3BvbnNlLnJlc3BvbnNlLm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmRpc2FibGVVc2VySW5wdXQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlVXNlcklucHV0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLkxhc3RCb3RBbnN3ZXIgPSByZXNwb25zZS5yZXNwb25zZTtcbiAgICAgIHRoaXMuSGlzdG9yeS5wdXNoKHJlc3BvbnNlLnJlc3BvbnNlKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBzZW5kQm90Q29tbWFuZCgkZXZlbnQ6IHN0cmluZywgcHVzaDogYm9vbGVhbiA9IHRydWUpIHtcbiAgICB0aGlzLkxhc3RCb3RBbnN3ZXIudGV4dCArPSAnPGJyPicgKyBEb3RMb2FkZXJUZW1wbGF0ZSh0aGlzLnNlcnZpY2UuQ29sb3JTZXQuUHJpbWFyeSk7XG4gICAgY29uc3QgcmVzcG9uc2U6IEtvbnZlcnNvQW5zd2VyID0gYXdhaXQgdGhpcy5zZXJ2aWNlLnNlbmQoJGV2ZW50KS5jYXRjaCgoZXJyOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdXZSBnb3QgYW4gZXJyb3IgJywgZXJyKTtcbiAgICB9KTtcbiAgICBpZiAocmVzcG9uc2UucmVzcG9uc2UubWVkaWFzICYmIHJlc3BvbnNlLnJlc3BvbnNlLm1lZGlhc1swXSAmJiByZXNwb25zZS5yZXNwb25zZS5tZWRpYXNbMF0ucmVxdWlyZWRfYWN0aW9ucyAmJlxuICAgICAgcmVzcG9uc2UucmVzcG9uc2UubWVkaWFzWzBdLnJlcXVpcmVkX2FjdGlvbnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmRpc2FibGVVc2VySW5wdXQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc2FibGVVc2VySW5wdXQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnJlc3BvbnNlICYmIHB1c2gpIHtcbiAgICAgIHRoaXMuTGFzdEJvdEFuc3dlciA9IHJlc3BvbnNlLnJlc3BvbnNlO1xuICAgICAgdGhpcy5IaXN0b3J5LnB1c2gocmVzcG9uc2UucmVzcG9uc2UpO1xuICAgIH0gZWxzZSBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UucmVzcG9uc2UgJiYgIXB1c2gpIHtcbiAgICAgIHRoaXMuTGFzdFVzZXJJbnB1dCA9IG51bGw7XG4gICAgICB0aGlzLkxhc3RCb3RBbnN3ZXIgPSByZXNwb25zZS5yZXNwb25zZTtcbiAgICAgIHRoaXMuSGlzdG9yeS5wdXNoKHJlc3BvbnNlLnJlc3BvbnNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5MYXN0VXNlcklucHV0ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pc01vYmlsZSgpOiBib29sZWFuIHtcbiAgICBjb25zdCBpc01vYmlsZSA9IHtcbiAgICAgIEFuZHJvaWQ6ICgpOiBib29sZWFuID0+IHtcbiAgICAgICAgcmV0dXJuICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKTtcbiAgICAgIH0sXG4gICAgICBCbGFja0JlcnJ5OiAoKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIHJldHVybiAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSk7XG4gICAgICB9LFxuICAgICAgaU9TOiAoKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIHJldHVybiAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZXxpUGFkfGlQb2QvaSk7XG4gICAgICB9LFxuICAgICAgT3BlcmE6ICgpOiBib29sZWFuID0+IHtcbiAgICAgICAgcmV0dXJuICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvT3BlcmEgTWluaS9pKTtcbiAgICAgIH0sXG4gICAgICBXaW5kb3dzOiAoKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIHJldHVybiAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0lFTW9iaWxlL2kpIHx8ICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvV1BEZXNrdG9wL2kpO1xuICAgICAgfSxcbiAgICAgIGFueTogKCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICByZXR1cm4gISEoaXNNb2JpbGUuQW5kcm9pZCgpIHx8IGlzTW9iaWxlLkJsYWNrQmVycnkoKSB8fCBpc01vYmlsZS5pT1MoKSB8fCBpc01vYmlsZS5PcGVyYSgpIHx8IGlzTW9iaWxlLldpbmRvd3MoKSk7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gaXNNb2JpbGUuYW55KCk7XG4gIH1cblxuXG59XG4iXX0=