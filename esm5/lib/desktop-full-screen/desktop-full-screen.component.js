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
        service.lang.subscribe(function (r) {
            if (service.locale) {
                _this.sendBtn = translate.translate(service.locale, 'SEND');
                _this.select = translate.translate(service.locale, 'SELECT');
            }
        });
    }
    DesktopFullScreenComponent.prototype.ngOnChanges = function () {
        var _this = this;
        var _a, _b, _c, _d, _e;
        this.changed = false;
        if (document.getElementById('text') && !((_a = this.LastBotAnswer) === null || _a === void 0 ? void 0 : _a.text.includes("loading-dots"))) {
            document.getElementById('text').innerHTML = '';
            //this.newMessage = true;
        }
        console.log(this.LastBotAnswer);
        if (this.LastBotAnswer && !((_b = this.LastBotAnswer) === null || _b === void 0 ? void 0 : _b.text.includes("loading-dots"))) {
            var string = (_c = this.LastBotAnswer) === null || _c === void 0 ? void 0 : _c.text;
            if (this.messageCurrent != ((_d = this.LastBotAnswer) === null || _d === void 0 ? void 0 : _d.text)) {
                this.newMessage = true;
                this.messageCurrent = (_e = this.LastBotAnswer) === null || _e === void 0 ? void 0 : _e.text;
                this.launchLoop();
            }
            this.msgArray = string.split("");
            var timer;
            //this.looper(array, timer);
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
                document.getElementById('text').innerHTML = '';
                _this.newMessage = false;
                _this.msgArray = _this.messageCurrent.split("");
                clearInterval(timer);
                _this.launchLoop();
            }
            _this.looper(_this.msgArray);
        }, 30);
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
    };
    DesktopFullScreenComponent.prototype.emit = function ($event) {
        this.firstVisit = false;
        this.readySend.emit(true);
    };
    DesktopFullScreenComponent.prototype._send = function () {
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
            template: "<!--<div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"-->\n<div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{'background-color' : '#100652 0% 0% no-repeat padding-box;'}\"\n     xmlns=\"http://www.w3.org/1999/html\">\n  <div class=\"bot-view\">\n    <ng-container *ngIf=\"firstVisit && firstUsageStory\">\n      <bot-first-visit [firstUsageStory]=\"firstUsageStory\" [assets]=\"assets\"\n                       (ready)=\"emit($event)\"></bot-first-visit>\n    </ng-container>\n    <ng-container *ngIf=\"!firstVisit\">\n      <div class=\"bot-assistant-wrapper\" *ngIf=\"AssistantMode\">\n        <div class=\"bot-logo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>\n        <div class=\"bot-discussion-wrapper\">\n          <ng-container *ngIf=\"LastUserInput\">\n            <div class=\"user-input\" *ngIf=\"LastUserInput\">\n              <div class=\"data\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n                    }\">\n                {{LastUserInput.message}}\n              </div>\n              <span class=\"time\">{{LastUserInput.date}}</span>\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"LastBotAnswer\">\n            <div class=\"bot-answer\">\n              <ng-container>\n\n              </ng-container>\n              <ng-container *ngIf=\"LastBotAnswer.text\">\n                <span id=\"text\"></span><br>\n                <!--<span *ngIf=\"changed\" class=\"fade\" [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span><br>-->\n              </ng-container>\n              <ng-container *ngIf=\"LastBotAnswer.medias && LastBotAnswer.medias.length\n                   && LastBotAnswer.medias[0].required_actions\n                   && LastBotAnswer.medias[0].required_actions.length > 0\n                   && !LastBotAnswer.text.includes('loading-dots')\">\n                <ng-container *ngFor=\"let suggest of LastBotAnswer.medias[0].required_actions; let i = index\">\n                  <ng-container *ngIf=\"suggest.format === 'button'\"  >\n                    <button *ngIf=\"suggest.value?.title == 'Terminer' && changed || suggest.value?.title == 'Quit' && changed\" [style]=\"{\n                      borderColor : assets?.ColorSet?.Primary,\n                      color : assets?.ColorSet?.Primary\n             }\"  class=\"bot-button bot-button-left show-btn c\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                             [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                    <button *ngIf=\"suggest.value?.title == 'Nouvelle Demande' && changed || suggest.value?.title == 'New Request' && changed\" [style]=\"{\n                      borderColor : assets?.ColorSet?.Primary,\n                      color : assets?.ColorSet?.Primary\n             }\"  class=\"bot-button bot-button-right show-btn fade\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                             [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                    <button *ngIf=\"suggest.value?.title && suggest.value?.title != 'Terminer' && suggest.value?.title != 'Quit' && suggest.value?.title != 'Nouvelle Demande' && suggest.value?.title != 'New Request' && changed\" \n                    [style]=\"{\n                     borderColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Primary\n            }\"  class=\"bot-button bot-button-grey show-btn fade\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                            [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                  </ng-container>\n                </ng-container>\n              </ng-container>\n\n            </div>\n          </ng-container>\n          <div class=\"bot-input-wrapper\">\n            <div class=\"bot-input\" id=\"bot-input-div\" *ngIf=\"!disableUserInput\">\n              <input type=\"text\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" maxlength=\"200\"\n                     [placeholder]=\"currentPlaceHolder\">\n              <button class=\"bot-button\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n            }\" (click)=\"_send()\" [disabled]=\"!userInput\">{{ sendBtn }}\n              </button>\n            </div>\n            <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\n              <i>{{ select }}</i>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"bot-chat-wrapper\" *ngIf=\"!AssistantMode\">\n        {{AssistantMode}}\n        <div class=\"bot-discussion-wrapper\" #scrollMe [scrollTop]=\"scrollMe.scrollTo(0, 9999999)\">\n          <div class=\"bot-chat\">\n\n            <ng-container *ngFor=\"let entry of displayData\">\n              <ng-container *ngIf=\"entry.date\">\n                <div class=\"user-input\">\n                  <div class=\"data\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n                    }\">\n                    {{entry.message}}\n                  </div>\n                  <span class=\"time\">{{entry.date}}</span>\n                </div>\n              </ng-container>\n              <ng-container *ngIf=\"!entry.date\">\n                <div class=\"bot-answer\">\n                  <ng-container *ngIf=\"entry.text\">\n                    <span *ngIf=\"changed\" class=\"fade\" [innerHTML]=\"entry.text | safeHtml\"></span><br>\n                  </ng-container>\n                  <ng-container *ngIf=\"entry.medias && entry.medias.length\n                   && entry.medias[0].required_actions\n                   && entry.medias[0].required_actions.length\">\n                    <ng-container *ngFor=\"let suggest of entry.medias[0].required_actions\">\n                      <ng-container *ngIf=\"suggest.format === 'button'\">\n                        <button *ngIf=\"changed\" [style]=\"{\n                     borderColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Primary\n            }\" class=\"bot-button fade\" (click)=\"byPassUserInput(suggest?.value?.onClick)\"\n                                [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \"></button>\n                      </ng-container>\n                    </ng-container>\n                  </ng-container>\n\n                </div>\n              </ng-container>\n            </ng-container>\n          </div>\n        </div>\n        <div class=\"bot-input-wrapper\">\n          <div class=\"bot-input\" *ngIf=\"!disableUserInput\">\n            <input type=\"text\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" maxlength=\"200\"\n                   [placeholder]=\"currentPlaceHolder\">\n            <button *ngIf=\"changed\" class=\"bot-button\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n            }\" (click)=\"_send()\" [disabled]=\"!userInput\">{{ sendBtn }}\n            </button>\n          </div>\n          <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\n            <i>{{ select }}</i>\n          </div>\n        </div>\n        <div class=\"bot-logo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>\n      </div>\n    </ng-container>\n\n  </div>\n</div>\n",
            styles: [""]
        })
    ], DesktopFullScreenComponent);
    return DesktopFullScreenComponent;
}());
export { DesktopFullScreenComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rb252ZXJzby8iLCJzb3VyY2VzIjpbImxpYi9kZXNrdG9wLWZ1bGwtc2NyZWVuL2Rlc2t0b3AtZnVsbC1zY3JlZW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFPeEQ7SUF5QkUsb0NBQVksU0FBMkIsRUFBVSxPQUF3QjtRQUF6RSxpQkFPQztRQVBnRCxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQXhCaEUsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFFL0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQU81QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRXpCLGNBQVMsR0FBMEIsSUFBSSxZQUFZLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDcEUsU0FBSSxHQUE0QixJQUFJLFlBQVksQ0FBWSxJQUFJLENBQUMsQ0FBQztRQUNsRSxtQkFBYyxHQUF5QixJQUFJLFlBQVksQ0FBUyxJQUFJLENBQUMsQ0FBQztRQUN0RSxjQUFTLEdBQXlCLElBQUksWUFBWSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBRXBFLHVCQUFrQixHQUFXLEVBQUUsQ0FBQztRQUNoQyxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDZixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLG1CQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFHcEIsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMs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RTtJQUNwRTtRQUFULE1BQU0sRUFBRTs0REFBbUU7SUFDbEU7UUFBVCxNQUFNLEVBQUU7c0VBQXVFO0lBQ3RFO1FBQVQsTUFBTSxFQUFFO2lFQUFrRTtJQWZoRSwwQkFBMEI7UUFMdEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixtdlBBQW1EOztTQUVwRCxDQUFDO09BQ1csMEJBQTBCLENBOEl0QztJQUFELGlDQUFDO0NBQUEsQUE5SUQsSUE4SUM7U0E5SVksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEZWZhdWx0QXNzZXRzLCBPcGVuQ2hhdEJvdFJlc3BvbnNlLCBVc2VySW5wdXR9IGZyb20gJy4uLy4uL2ludGVyZmFjZS9Lb252ZXJzb0ludGVyZmFjZSc7XG5pbXBvcnQgeyBLb252ZXJzb1NlcnZpY2UgfSBmcm9tICcuLi9rb252ZXJzby5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi90cmFuc2xhdGUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JvdC1mdWxsLXNjcmVlbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kZXNrdG9wLWZ1bGwtc2NyZWVuLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGVza3RvcEZ1bGxTY3JlZW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIEBJbnB1dCgpIEFzc2lzdGFudE1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgYXNzZXRzOiBEZWZhdWx0QXNzZXRzO1xuICBASW5wdXQoKSBmaXJzdFZpc2l0OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZpcnN0VXNhZ2VTdG9yeTogc3RyaW5nW107XG4gIEBJbnB1dCgpIGRpc3BsYXlEYXRhOiAoVXNlcklucHV0IHwgT3BlbkNoYXRCb3RSZXNwb25zZSlbXTtcbiAgQElucHV0KCkgZGlzYWJsZVVzZXJJbnB1dDogYm9vbGVhbjtcbiAgQElucHV0KCkgTGFzdFVzZXJJbnB1dDogVXNlcklucHV0O1xuICBASW5wdXQoKSBMYXN0Qm90QW5zd2VyOiBPcGVuQ2hhdEJvdFJlc3BvbnNlO1xuICBASW5wdXQoKSBQbGFjZUhvbGRlcjogc3RyaW5nW107XG4gIEBJbnB1dCgpIElzTW9iaWxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIHJlYWR5U2VuZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPihmYWxzZSk7XG4gIEBPdXRwdXQoKSBzZW5kOiBFdmVudEVtaXR0ZXI8VXNlcklucHV0PiA9IG5ldyBFdmVudEVtaXR0ZXI8VXNlcklucHV0PihudWxsKTtcbiAgQE91dHB1dCgpIHNlbmRCb3RDb21tYW5kOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPihudWxsKTtcbiAgQE91dHB1dCgpIHNlbmRFdmVudDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4obnVsbCk7XG4gIHB1YmxpYyB1c2VySW5wdXQ6IHN0cmluZztcbiAgcHVibGljIGN1cnJlbnRQbGFjZUhvbGRlcjogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBzZW5kQnRuID0gJyc7XG4gIHB1YmxpYyBzZWxlY3QgPSAnJztcbiAgcHVibGljIGNoYW5nZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBuZXdNZXNzYWdlID0gZmFsc2U7XG4gIHByaXZhdGUgbWVzc2FnZUN1cnJlbnQgPSAnJztcbiAgcHJpdmF0ZSBtc2dBcnJheSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSwgcHJpdmF0ZSBzZXJ2aWNlOiBLb252ZXJzb1NlcnZpY2UpIHtcbiAgICBzZXJ2aWNlLmxhbmcuc3Vic2NyaWJlKChyKSA9PiB7XG4gICAgICBpZiAoc2VydmljZS5sb2NhbGUpIHtcbiAgICAgICAgdGhpcy5zZW5kQnRuID0gdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ1NFTkQnKTtcbiAgICAgICAgdGhpcy5zZWxlY3QgPSB0cmFuc2xhdGUudHJhbnNsYXRlKHNlcnZpY2UubG9jYWxlLCAnU0VMRUNUJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcblxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpICYmICF0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHQuaW5jbHVkZXMoXCJsb2FkaW5nLWRvdHNcIikpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykuaW5uZXJIVE1MID0gJyc7XG4gICAgICAvL3RoaXMubmV3TWVzc2FnZSA9IHRydWU7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRoaXMuTGFzdEJvdEFuc3dlcik7XG5cbiAgICBpZiAodGhpcy5MYXN0Qm90QW5zd2VyICYmICF0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHQuaW5jbHVkZXMoXCJsb2FkaW5nLWRvdHNcIikpIHtcbiAgICAgIHZhciBzdHJpbmcgPSB0aGlzLkxhc3RCb3RBbnN3ZXI/LnRleHQ7XG5cbiAgICAgIGlmICh0aGlzLm1lc3NhZ2VDdXJyZW50ICE9IHRoaXMuTGFzdEJvdEFuc3dlcj8udGV4dCkge1xuICAgICAgICB0aGlzLm5ld01lc3NhZ2UgPSB0cnVlO1xuICAgICAgICB0aGlzLm1lc3NhZ2VDdXJyZW50ID0gdGhpcy5MYXN0Qm90QW5zd2VyPy50ZXh0O1xuICAgICAgICB0aGlzLmxhdW5jaExvb3AoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubXNnQXJyYXkgPSBzdHJpbmcuc3BsaXQoXCJcIik7XG4gICAgICB2YXIgdGltZXI7XG4gICAgICAvL3RoaXMubG9vcGVyKGFycmF5LCB0aW1lcik7XG4gICAgfVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZWQgPSB0cnVlO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBsYXVuY2hMb29wKCkge1xuICAgIGxldCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLm1zZ0FycmF5Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubmV3TWVzc2FnZSkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dCcpLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5uZXdNZXNzYWdlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubXNnQXJyYXkgPSB0aGlzLm1lc3NhZ2VDdXJyZW50LnNwbGl0KFwiXCIpO1xuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgdGhpcy5sYXVuY2hMb29wKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmxvb3Blcih0aGlzLm1zZ0FycmF5KTtcbiAgICB9LCAzMCk7XG4gIH1cblxuICBsb29wZXIoYXJyYXkpIHtcbiAgICAgIGlmKCBhcnJheS5sZW5ndGggPiAwICkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHQnKSkge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0JykuaW5uZXJIVE1MICs9IGFycmF5LnNoaWZ0KCk7XG4gICAgICAgIH1cbiAgICAgIH0vKmVsc2Uge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgfSovXG4gICAgICAvKnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMubG9vcGVyKGFycmF5LCB0aW1lcik7XG4gICAgICB9LCAzMCk7Ki9cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLlBsYWNlSG9sZGVyKSB7XG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY3VycmVudFBsYWNlSG9sZGVyID0gdGhpcy5QbGFjZUhvbGRlcltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLlBsYWNlSG9sZGVyLmxlbmd0aCldO1xuICAgICAgfSwgMzAwMCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGVtaXQoJGV2ZW50KSB7XG4gICAgdGhpcy5maXJzdFZpc2l0ID0gZmFsc2U7XG4gICAgdGhpcy5yZWFkeVNlbmQuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIHB1YmxpYyBfc2VuZCgpIHtcbiAgICBjb25zdCB1c2VyRGF0YTogVXNlcklucHV0ID0ge1xuICAgICAgbWVzc2FnZTogdGhpcy51c2VySW5wdXQsXG4gICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZyhuYXZpZ2F0b3IubGFuZ3VhZ2UsIHtcbiAgICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgICBtaW51dGU6ICcyLWRpZ2l0J1xuICAgICAgfSlcbiAgICB9O1xuICAgIHRoaXMuc2VuZC5lbWl0KHVzZXJEYXRhKTtcbiAgICB0aGlzLnVzZXJJbnB1dCA9IG51bGw7XG4gIH1cblxuICBhc3luYyBzY3JvbGwoc2Nyb2xsSGVpZ2h0OiBudW1iZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8bnVtYmVyPigocmVzb2x2ZSkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoMCk7XG4gICAgICB9LCAzMDApO1xuICAgIH0pO1xuXG4gIH1cblxuICBieVBhc3NVc2VySW5wdXQoYm90ZGF0YTogc3RyaW5nLCBpPzogbnVtYmVyKSB7XG4gICAgLypjb25zdCBidXR0b25zOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaG93LWJ0bicpO1xuICAgIGZvciAobGV0IGJ0biBvZiBBcnJheS5mcm9tKGJ1dHRvbnMpKSB7XG4gICAgICBidG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuLWJ0bicpO1xuICAgIH0qL1xuICAgIGNvbnN0IGJ1dHRvbnM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvdC1hbnN3ZXInKTtcbiAgICBmb3IgKGxldCBidG4gb2YgQXJyYXkuZnJvbShidXR0b25zKSkge1xuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1idG4nKTtcbiAgICB9XG4gICAgdGhpcy5zZW5kQm90Q29tbWFuZC5lbWl0KGJvdGRhdGEpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgYnV0dG9uczogTm9kZUxpc3RPZjxIVE1MRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm90LWFuc3dlcicpO1xuICAgICAgZm9yIChsZXQgYnRuIG9mIEFycmF5LmZyb20oYnV0dG9ucykpIHtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi1idG4nKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfVxufVxuIl19