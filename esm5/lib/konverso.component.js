import { __awaiter, __decorate, __generator } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { KonversoService } from './konverso.service';
import { BotMessageSample } from '../Sample/BotMessageSample';
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
                    case 0: return [4 /*yield*/, this.service.send($event).catch(function (err) {
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
            styles: ["::ng-deep ngx-konverso{overflow:hidden;display:block;min-height:100%;height:100%}::ng-deep ngx-konverso bot-first-visit,::ng-deep ngx-konverso bot-full-screen{display:table;min-height:100%;height:100%;width:100%}::ng-deep ngx-konverso bot-full-screen button:focus,::ng-deep ngx-konverso bot-full-screen input:focus{outline:0!important}::ng-deep ngx-konverso bot-full-screen .bot-button>*{position:relative}::ng-deep ngx-konverso bot-full-screen .button-lg{padding:10px!important;font-size:16px!important}::ng-deep ngx-konverso bot-full-screen .bot-button{cursor:pointer;opacity:.9;min-width:150px;border-radius:25px;padding:5px;position:relative;display:block;margin:30px auto;overflow:hidden;border-width:0;outline:0;box-shadow:0 1px 4px rgba(0,0,0,.6);transition:opacity .3s}::ng-deep ngx-konverso bot-full-screen .bot-button span{display:block;padding:12px 24px}::ng-deep ngx-konverso bot-full-screen .bot-button:focus,::ng-deep ngx-konverso bot-full-screen .bot-button:hover{opacity:1}::ng-deep ngx-konverso bot-full-screen .bot-button:before{content:\"\";position:absolute;top:50%;left:50%;display:block;width:0;padding-top:0;border-radius:100%;background-color:rgba(236,240,241,.3);transform:translate(-50%,-50%)}::ng-deep ngx-konverso bot-full-screen .bot-button:active:before{width:120%;padding-top:120%;transition:width .2s ease-out,padding-top .2s ease-out}::ng-deep ngx-konverso bot-full-screen .bot-container{font-family:nexa,Roboto;width:100%;height:100%;display:table;margin:auto;background-size:contain}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view{background-size:contain;width:auto;margin:auto;height:100%;display:table-cell;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view img{margin:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper{padding-top:5%;width:100%;margin:auto;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:20px;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step{margin-top:5%;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step .bot-init-dot{border:1px solid;display:inline-block;width:12px;height:12px;margin-left:2.5px;margin-right:2.5px;border-radius:50%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-button-wrapper{display:block;width:100%;text-align:center;margin-top:8%;margin-right:auto;margin-left:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper{display:table;height:100%;max-height:100%;overflow:hidden;width:100%;position:relative}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-logo{padding-top:2.5%;width:100%;margin:auto;vertical-align:middle}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-logo img{margin-left:auto;margin-right:auto;display:block;width:150px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-answer{width:600px;text-align:center;margin:2.5% auto auto;font-size:25px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .user-input{font-size:15px;margin:auto;display:block}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .user-input .data{padding:10px 20px;border-radius:25px 25px 0;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:5% auto auto;background-color:#00a9de}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .user-input .time{font-weight:300;position:absolute;width:200px;display:block;margin-left:95%;bottom:-1%;color:#000;font-size:10px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-input-wrapper{text-align:center;position:absolute;width:100%;bottom:2%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-input-wrapper input{text-align:center;display:block;padding:10px;border-radius:25px;color:#000;width:60%;margin:auto;border:1px solid rgba(0,0,0,.2)}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-assistant-wrapper .bot-input-wrapper button{display:block;width:calc(36% - 15px);padding:11px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper{width:100%;display:table;height:100%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo{max-width:100px;position:absolute;top:2%;left:2%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo img{max-width:100px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper{width:100%;position:relative;max-width:600px;height:calc(85vh - 50px);padding:15px 30px;margin:0 auto;overflow-y:scroll;direction:rtl}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper::-webkit-scrollbar{width:0!important}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat{position:absolute;overflow-x:hidden;display:flex;flex-direction:column-reverse;justify-content:flex-end;transform:rotate(180deg);min-height:100%;width:94%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer{font-size:15px;padding:10px 20px;border-radius:25px;color:#000;background-color:transparent;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;margin:15px 0;word-break:break-all;transform:rotate(180deg);direction:ltr}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer button{padding:10px;border:1px solid}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input{font-size:15px;transform:rotate(180deg);direction:ltr}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .data{padding:10px 20px;border-radius:25px 25px 0;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:15px 0 15px auto;background-color:#00a9de}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .time{font-weight:300;position:absolute;width:200px;display:block;margin-left:95%;bottom:-1%;color:#000;font-size:10px}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper{display:table;width:100%;margin:auto}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input-disable{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5% .3%;text-align:center}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5%}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input input{display:inline-block;padding:10px;border-radius:25px;color:#000;width:60%;margin-right:15px;border:1px solid rgba(0,0,0,.2)}::ng-deep ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input button{display:inline-block;width:calc(36% - 15px);padding:11px}::ng-deep ngx-konverso .bot-mobile{font-family:nexa,Roboto;width:96vw!important;height:100vh;display:table;margin:auto;background-size:contain}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit{position:relative}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-logo-init-wrapper{margin-top:2.5vh}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block;max-width:150px}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:15px!important;text-align:center}::ng-deep ngx-konverso .bot-mobile .bot-view bot-first-visit .bot-init-button-wrapper{position:absolute;top:70vh}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-answer{width:70vw!important;text-align:center;margin:15.5% auto auto!important;font-size:15px!important}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-input-wrapper{background:#fff;bottom:5%!important}::ng-deep ngx-konverso .bot-mobile .bot-view .bot-assistant-wrapper .bot-input-wrapper input{width:90%!important}"]
        })
    ], KonversoComponent);
    return KonversoComponent;
}());
export { KonversoComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29udmVyc28uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8va29udmVyc28vIiwic291cmNlcyI6WyJsaWIva29udmVyc28uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRW5ELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBRTVELGFBQWE7QUFNYjtJQWlCRSwyQkFBb0IsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFoQnJDLFdBQU0sR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUN6RCxVQUFLLEdBQTBCLElBQUksWUFBWSxFQUFXLENBQUM7UUFNOUQsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFHdEIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO0lBT2hDLENBQUM7SUFFSyxvQ0FBUSxHQUFkOzs7Ozs7O3dCQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO3dCQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO3dCQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO3dCQUMxQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDO3dCQUNwRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO3dCQUNoRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO3dCQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxD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QyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMvRixDQUFDO1lBQ0QsR0FBRyxFQUFFO2dCQUNILE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ3JILENBQUM7U0FDRixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Z0JBL0c0QixlQUFlOztJQWZsQztRQUFULE1BQU0sRUFBRTtvREFBNEQ7SUFGMUQsaUJBQWlCO1FBTDdCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLHN1QkFBc0M7O1NBRXZDLENBQUM7T0FDVyxpQkFBaUIsQ0FtSTdCO0lBQUQsd0JBQUM7Q0FBQSxBQW5JRCxJQW1JQztTQW5JWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0tvbnZlcnNvU2VydmljZX0gZnJvbSAnLi9rb252ZXJzby5zZXJ2aWNlJztcbmltcG9ydCB7Q29sb3JTZXQsIERlZmF1bHRBc3NldHMsIEtvbnZlcnNvQW5zd2VyLCBPcGVuQ2hhdEJvdFJlc3BvbnNlLCBVc2VySW5wdXR9IGZyb20gJy4uL2ludGVyZmFjZS9Lb252ZXJzb0ludGVyZmFjZSc7XG5pbXBvcnQge0JvdE1lc3NhZ2VTYW1wbGV9IGZyb20gJy4uL1NhbXBsZS9Cb3RNZXNzYWdlU2FtcGxlJztcblxuLy8gQHRzLWlnbm9yZVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWtvbnZlcnNvJyxcbiAgdGVtcGxhdGVVcmw6ICdrb252ZXJzby5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuLi8uLi9hc3NldHMvbWFpbi5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgS29udmVyc29Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgX3JlYWR5OiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSByZWFkeTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBwdWJsaWMgcXVlcnk6IHN0cmluZztcbiAgcHVibGljIGlzTW9iaWxlOiBib29sZWFuO1xuICBwdWJsaWMgYXNzZXRzOiBEZWZhdWx0QXNzZXRzO1xuICBwdWJsaWMgZmlyc3RWaXNpdDogYm9vbGVhbjtcbiAgcHVibGljIGZpcnN0VXNhZ2VTdG9yeTogc3RyaW5nW107XG4gIHB1YmxpYyBBc3Npc3RhbnRNb2RlID0gZmFsc2U7XG4gIHB1YmxpYyBjb2xvclNldDogQ29sb3JTZXQ7XG4gIHB1YmxpYyBIaXN0b3J5OiAoVXNlcklucHV0IHwgT3BlbkNoYXRCb3RSZXNwb25zZSlbXTtcbiAgcHVibGljIGRpc2FibGVVc2VySW5wdXQgPSBmYWxzZTtcbiAgcHVibGljIExhc3RVc2VySW5wdXQ6IFVzZXJJbnB1dDtcbiAgcHVibGljIExhc3RCb3RBbnN3ZXI6IE9wZW5DaGF0Qm90UmVzcG9uc2U7XG4gIHB1YmxpYyBQbGFjZUhvbGRlcjogc3RyaW5nW107XG4gIHB1YmxpYyBXZWxjb21lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBLb252ZXJzb1NlcnZpY2UpIHtcbiAgfVxuXG4gIGFzeW5jIG5nT25Jbml0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNNb2JpbGUgPSB0aGlzLl9pc01vYmlsZSgpO1xuICAgIHRoaXMuYXNzZXRzID0gdGhpcy5zZXJ2aWNlLmFzc2V0cztcbiAgICB0aGlzLmZpcnN0VmlzaXQgPSB0aGlzLnNlcnZpY2UuZmlyc3RWaXNpdDtcbiAgICB0aGlzLmZpcnN0VXNhZ2VTdG9yeSA9IHRoaXMuc2VydmljZS5maXJzdFVzYWdlU3Rvcnk7XG4gICAgdGhpcy5Bc3Npc3RhbnRNb2RlID0gdGhpcy5zZXJ2aWNlLkFzc2lzdGFudE1vZGU7XG4gICAgdGhpcy5QbGFjZUhvbGRlciA9IHRoaXMuc2VydmljZS5QbGFjZUhvbGRlcjtcbiAgICB0aGlzLldlbGNvbWUgPSB0aGlzLnNlcnZpY2UuV2VsY29tZTtcblxuICAgIHRoaXMuSGlzdG9yeSA9IFtdO1xuICAgIGlmICh0aGlzLnNlcnZpY2UuQ29sb3JTZXQpIHtcbiAgICAgIHRoaXMuY29sb3JTZXQgPSB0aGlzLnNlcnZpY2UuQ29sb3JTZXQ7XG4gICAgfVxuICAgIHRoaXMuX3JlYWR5LnN1YnNjcmliZSgocmVhZHk6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmIChyZWFkeSkge1xuICAgICAgICB0aGlzLmZpcnN0VmlzaXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmZpcnN0VmlzaXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZWFkeS5lbWl0KHJlYWR5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBhd2FpdCB0aGlzLnNlbmRCb3RDb21tYW5kKCdleGl0JywgZmFsc2UpLmNhdGNoKChlcnI6IGFueSkgPT4gY29uc29sZS5sb2coJ2ZhaWwgcmVzZXQgc2Vzc2lvbicpKTtcbiAgICBpZiAodGhpcy5XZWxjb21lKSB7XG4gICAgICBjb25zdCBjdXN0b21XZWxjb21lOiBPcGVuQ2hhdEJvdFJlc3BvbnNlID0gQm90TWVzc2FnZVNhbXBsZTtcbiAgICAgIGN1c3RvbVdlbGNvbWUudGV4dCA9IHRoaXMuV2VsY29tZTtcbiAgICAgIHRoaXMuTGFzdEJvdEFuc3dlciA9IGN1c3RvbVdlbGNvbWU7XG4gICAgICB0aGlzLkhpc3RvcnkucHVzaChjdXN0b21XZWxjb21lKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBzZW5kKCRldmVudDogVXNlcklucHV0KSB7XG4gICAgaWYgKCRldmVudC5tZXNzYWdlID09PSAnZXhpdCcpIHtcbiAgICAgIHRoaXMuc2VuZEJvdENvbW1hbmQoJ2V4aXQnLCBmYWxzZSkuY2F0Y2goKGVycjogYW55KSA9PiBjb25zb2xlLmxvZygnZmFpbCByZXNldCBzZXNzaW9uJykpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLkhpc3RvcnkucHVzaCgkZXZlbnQpO1xuICAgIGlmICh0aGlzLkFzc2lzdGFudE1vZGUpIHtcbiAgICAgIGlmICh0aGlzLkxhc3RVc2VySW5wdXQpIHtcbiAgICAgICAgdGhpcy5MYXN0VXNlcklucHV0Lm1lc3NhZ2UgKz0gJyAnICsgJGV2ZW50Lm1lc3NhZ2U7XG4gICAgICAgIHRoaXMuTGFzdFVzZXJJbnB1dC5kYXRlID0gJGV2ZW50LmRhdGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLkxhc3RVc2VySW5wdXQgPSAkZXZlbnQ7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuTGFzdFVzZXJJbnB1dCA9ICRldmVudDtcbiAgICB9XG5cbiAgICBjb25zdCBpbmRleDogbnVtYmVyID0gdGhpcy5IaXN0b3J5Lmxlbmd0aCAtIDE7XG4gICAgY29uc3QgcmVzcG9uc2U6IEtvbnZlcnNvQW5zd2VyID0gYXdhaXQgdGhpcy5zZXJ2aWNlLnNlbmQoJGV2ZW50Lm1lc3NhZ2UpLmNhdGNoKChlcnI6IHN0cmluZykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1dlIGdvdCBhbiBlcnJvciAnLCBlcnIpO1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgdGhpcy5IaXN0b3J5W2luZGV4XS5lcnJvciA9IHRydWU7XG4gICAgfSk7XG4gICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnJlc3BvbnNlKSB7XG4gICAgICBpZiAocmVzcG9uc2UucmVzcG9uc2UubWVkaWFzICYmIHJlc3BvbnNlLnJlc3BvbnNlLm1lZGlhc1swXSAmJiByZXNwb25zZS5yZXNwb25zZS5tZWRpYXNbMF0ucmVxdWlyZWRfYWN0aW9ucyAmJlxuICAgICAgICByZXNwb25zZS5yZXNwb25zZS5tZWRpYXNbMF0ucmVxdWlyZWRfYWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlVXNlcklucHV0ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZVVzZXJJbnB1dCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5MYXN0Qm90QW5zd2VyID0gcmVzcG9uc2UucmVzcG9uc2U7XG4gICAgICB0aGlzLkhpc3RvcnkucHVzaChyZXNwb25zZS5yZXNwb25zZSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgc2VuZEJvdENvbW1hbmQoJGV2ZW50OiBzdHJpbmcsIHB1c2g6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgY29uc3QgcmVzcG9uc2U6IEtvbnZlcnNvQW5zd2VyID0gYXdhaXQgdGhpcy5zZXJ2aWNlLnNlbmQoJGV2ZW50KS5jYXRjaCgoZXJyOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdXZSBnb3QgYW4gZXJyb3IgJywgZXJyKTtcbiAgICB9KTtcbiAgICBpZiAocmVzcG9uc2UucmVzcG9uc2UubWVkaWFzICYmIHJlc3BvbnNlLnJlc3BvbnNlLm1lZGlhc1swXSAmJiByZXNwb25zZS5yZXNwb25zZS5tZWRpYXNbMF0ucmVxdWlyZWRfYWN0aW9ucyAmJlxuICAgICAgcmVzcG9uc2UucmVzcG9uc2UubWVkaWFzWzBdLnJlcXVpcmVkX2FjdGlvbnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmRpc2FibGVVc2VySW5wdXQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc2FibGVVc2VySW5wdXQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnJlc3BvbnNlICYmIHB1c2gpIHtcbiAgICAgIHRoaXMuTGFzdEJvdEFuc3dlciA9IHJlc3BvbnNlLnJlc3BvbnNlO1xuICAgICAgdGhpcy5IaXN0b3J5LnB1c2gocmVzcG9uc2UucmVzcG9uc2UpO1xuICAgIH0gZWxzZSBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UucmVzcG9uc2UgJiYgIXB1c2gpIHtcbiAgICAgIHRoaXMuTGFzdFVzZXJJbnB1dCA9IG51bGw7XG4gICAgICB0aGlzLkxhc3RCb3RBbnN3ZXIgPSByZXNwb25zZS5yZXNwb25zZTtcbiAgICAgIHRoaXMuSGlzdG9yeS5wdXNoKHJlc3BvbnNlLnJlc3BvbnNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5MYXN0VXNlcklucHV0ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pc01vYmlsZSgpOiBib29sZWFuIHtcbiAgICBjb25zdCBpc01vYmlsZSA9IHtcbiAgICAgIEFuZHJvaWQ6ICgpOiBib29sZWFuID0+IHtcbiAgICAgICAgcmV0dXJuICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKTtcbiAgICAgIH0sXG4gICAgICBCbGFja0JlcnJ5OiAoKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIHJldHVybiAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSk7XG4gICAgICB9LFxuICAgICAgaU9TOiAoKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIHJldHVybiAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZXxpUGFkfGlQb2QvaSk7XG4gICAgICB9LFxuICAgICAgT3BlcmE6ICgpOiBib29sZWFuID0+IHtcbiAgICAgICAgcmV0dXJuICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvT3BlcmEgTWluaS9pKTtcbiAgICAgIH0sXG4gICAgICBXaW5kb3dzOiAoKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIHJldHVybiAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0lFTW9iaWxlL2kpIHx8ICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvV1BEZXNrdG9wL2kpO1xuICAgICAgfSxcbiAgICAgIGFueTogKCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICByZXR1cm4gISEoaXNNb2JpbGUuQW5kcm9pZCgpIHx8IGlzTW9iaWxlLkJsYWNrQmVycnkoKSB8fCBpc01vYmlsZS5pT1MoKSB8fCBpc01vYmlsZS5PcGVyYSgpIHx8IGlzTW9iaWxlLldpbmRvd3MoKSk7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gaXNNb2JpbGUuYW55KCk7XG4gIH1cblxuXG59XG4iXX0=