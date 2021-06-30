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
        service.lang.subscribe(function (r) {
            if (service.locale) {
                _this.sendBtn = translate.translate(service.locale, 'SEND');
                _this.select = translate.translate(service.locale, 'SELECT');
            }
        });
    }
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
        var buttons = document.querySelectorAll('.show-btn');
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
            template: "<div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{backgroundImage : 'url('+assets.Background+')'}\"\n     xmlns=\"http://www.w3.org/1999/html\">\n  <div class=\"bot-view\">\n    <ng-container *ngIf=\"firstVisit && firstUsageStory\">\n      <bot-first-visit [firstUsageStory]=\"firstUsageStory\" [assets]=\"assets\"\n                       (ready)=\"emit($event)\"></bot-first-visit>\n    </ng-container>\n    <ng-container *ngIf=\"!firstVisit\">\n      <div class=\"bot-assistant-wrapper\" *ngIf=\"AssistantMode\">\n        <div class=\"bot-logo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>\n        <div class=\"bot-discussion-wrapper\">\n          <ng-container *ngIf=\"LastUserInput\">\n            <div class=\"user-input\" *ngIf=\"LastUserInput\">\n              <div class=\"data\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n                    }\">\n                {{LastUserInput.message}}\n              </div>\n              <span class=\"time\">{{LastUserInput.date}}</span>\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"LastBotAnswer\">\n            <div class=\"bot-answer\">\n              <ng-container>\n\n              </ng-container>\n              <ng-container *ngIf=\"LastBotAnswer.text\">\n                <span [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span><br>\n              </ng-container>\n              <ng-container *ngIf=\"LastBotAnswer.medias && LastBotAnswer.medias.length\n                   && LastBotAnswer.medias[0].required_actions\n                   && LastBotAnswer.medias[0].required_actions.length\">\n                <ng-container *ngFor=\"let suggest of LastBotAnswer.medias[0].required_actions; let i = index\">\n                  <ng-container *ngIf=\"suggest.format === 'button'\"  >\n                    <button *ngIf=\"suggest.value?.title == 'Terminer' || suggest.value?.title == 'Quit'\" [style]=\"{\n                      borderColor : assets?.ColorSet?.Primary,\n                      color : assets?.ColorSet?.Primary\n             }\"  class=\"bot-button bot-button-left show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                             [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                    <button *ngIf=\"suggest.value?.title == 'Nouvelle Demande' || suggest.value?.title == 'New Request'\" [style]=\"{\n                      borderColor : assets?.ColorSet?.Primary,\n                      color : assets?.ColorSet?.Primary\n             }\"  class=\"bot-button bot-button-right show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                             [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                    <button *ngIf=\"suggest.value?.title != 'Terminer' && suggest.value?.title != 'Quit' && suggest.value?.title != 'Nouvelle Demande' && suggest.value?.title != 'New Request'\" \n                    [style]=\"{\n                     borderColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Primary\n            }\"  class=\"bot-button bot-button-grey show-btn\" (click)=\"byPassUserInput(suggest?.value?.onClick, i)\"\n                            [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \">\n                    </button>\n                  </ng-container>\n                </ng-container>\n              </ng-container>\n\n            </div>\n          </ng-container>\n          <div class=\"bot-input-wrapper\">\n            <div class=\"bot-input\" *ngIf=\"!disableUserInput\">\n              <input type=\"text\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" maxlength=\"200\"\n                     [placeholder]=\"currentPlaceHolder\">\n              <button class=\"bot-button\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n            }\" (click)=\"_send()\" [disabled]=\"!userInput\">{{ sendBtn }}\n              </button>\n            </div>\n            <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\n              <i>{{ select }}</i>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"bot-chat-wrapper\" *ngIf=\"!AssistantMode\">\n        {{AssistantMode}}\n        <div class=\"bot-discussion-wrapper\" #scrollMe [scrollTop]=\"scrollMe.scrollTo(0, 9999999)\">\n          <div class=\"bot-chat\">\n\n            <ng-container *ngFor=\"let entry of displayData\">\n              <ng-container *ngIf=\"entry.date\">\n                <div class=\"user-input\">\n                  <div class=\"data\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n                    }\">\n                    {{entry.message}}\n                  </div>\n                  <span class=\"time\">{{entry.date}}</span>\n                </div>\n              </ng-container>\n              <ng-container *ngIf=\"!entry.date\">\n                <div class=\"bot-answer\">\n                  <ng-container *ngIf=\"entry.text\">\n                    <span [innerHTML]=\"entry.text | safeHtml\"></span><br>\n                  </ng-container>\n                  <ng-container *ngIf=\"entry.medias && entry.medias.length\n                   && entry.medias[0].required_actions\n                   && entry.medias[0].required_actions.length\">\n                    <ng-container *ngFor=\"let suggest of entry.medias[0].required_actions\">\n                      <ng-container *ngIf=\"suggest.format === 'button'\">\n                        <button [style]=\"{\n                     borderColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Primary\n            }\" class=\"bot-button\" (click)=\"byPassUserInput(suggest?.value?.onClick)\"\n                                [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \"></button>\n                      </ng-container>\n                    </ng-container>\n                  </ng-container>\n\n                </div>\n              </ng-container>\n            </ng-container>\n          </div>\n        </div>\n        <div class=\"bot-input-wrapper\">\n          <div class=\"bot-input\" *ngIf=\"!disableUserInput\">\n            <input type=\"text\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" maxlength=\"200\"\n                   [placeholder]=\"currentPlaceHolder\">\n            <button class=\"bot-button\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n            }\" (click)=\"_send()\" [disabled]=\"!userInput\">{{ sendBtn }}\n            </button>\n          </div>\n          <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\n            <i>{{ select }}</i>\n          </div>\n        </div>\n        <div class=\"bot-logo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>\n      </div>\n    </ng-container>\n\n  </div>\n</div>\n",
            styles: [""]
        })
    ], DesktopFullScreenComponent);
    return DesktopFullScreenComponent;
}());
export { DesktopFullScreenComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rb252ZXJzby8iLCJzb3VyY2VzIjpbImxpYi9kZXNrdG9wLWZ1bGwtc2NyZWVuL2Rlc2t0b3AtZnVsbC1zY3JlZW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTdFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQU94RDtJQXFCRSxvQ0FBWSxTQUEyQixFQUFVLE9BQXdCO1FBQXpFLGlCQU9DO1FBUGdELFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBcEJoRSxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUUvQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBTzVCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFekIsY0FBUyxHQUEwQixJQUFJLFlBQVksQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUNwRSxTQUFJLEdBQTRCLElBQUksWUFBWSxDQUFZLElBQUksQ0FBQyxDQUFDO1FBQ2xFLG1CQUFjLEdBQXlCLElBQUksWUFBWSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBQ3RFLGNBQVMsR0FBeUIsSUFBSSxZQUFZLENBQVMsSUFBSSxDQUFDLENBQUM7UUFFcEUsdUJBQWtCLEdBQVcsRUFBRSxDQUFDO1FBQ2hDLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBR2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUMsQ0FBQztZQUN2QixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xCLEtBQUksQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxF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QztPQUNXLDBCQUEwQixDQXVFdEM7SUFBRCxpQ0FBQztDQUFBLEFBdkVELElBdUVDO1NBdkVZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RlZmF1bHRBc3NldHMsIE9wZW5DaGF0Qm90UmVzcG9uc2UsIFVzZXJJbnB1dH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL0tvbnZlcnNvSW50ZXJmYWNlJztcbmltcG9ydCB7IEtvbnZlcnNvU2VydmljZSB9IGZyb20gJy4uL2tvbnZlcnNvLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4uL3RyYW5zbGF0ZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYm90LWZ1bGwtc2NyZWVuJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Rlc2t0b3AtZnVsbC1zY3JlZW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kZXNrdG9wLWZ1bGwtc2NyZWVuLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEZXNrdG9wRnVsbFNjcmVlbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIEFzc2lzdGFudE1vZGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgYXNzZXRzOiBEZWZhdWx0QXNzZXRzO1xuICBASW5wdXQoKSBmaXJzdFZpc2l0OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGZpcnN0VXNhZ2VTdG9yeTogc3RyaW5nW107XG4gIEBJbnB1dCgpIGRpc3BsYXlEYXRhOiAoVXNlcklucHV0IHwgT3BlbkNoYXRCb3RSZXNwb25zZSlbXTtcbiAgQElucHV0KCkgZGlzYWJsZVVzZXJJbnB1dDogYm9vbGVhbjtcbiAgQElucHV0KCkgTGFzdFVzZXJJbnB1dDogVXNlcklucHV0O1xuICBASW5wdXQoKSBMYXN0Qm90QW5zd2VyOiBPcGVuQ2hhdEJvdFJlc3BvbnNlO1xuICBASW5wdXQoKSBQbGFjZUhvbGRlcjogc3RyaW5nW107XG4gIEBJbnB1dCgpIElzTW9iaWxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIHJlYWR5U2VuZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPihmYWxzZSk7XG4gIEBPdXRwdXQoKSBzZW5kOiBFdmVudEVtaXR0ZXI8VXNlcklucHV0PiA9IG5ldyBFdmVudEVtaXR0ZXI8VXNlcklucHV0PihudWxsKTtcbiAgQE91dHB1dCgpIHNlbmRCb3RDb21tYW5kOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPihudWxsKTtcbiAgQE91dHB1dCgpIHNlbmRFdmVudDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4obnVsbCk7XG4gIHB1YmxpYyB1c2VySW5wdXQ6IHN0cmluZztcbiAgcHVibGljIGN1cnJlbnRQbGFjZUhvbGRlcjogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBzZW5kQnRuID0gJyc7XG4gIHB1YmxpYyBzZWxlY3QgPSAnJztcblxuICBjb25zdHJ1Y3Rvcih0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsIHByaXZhdGUgc2VydmljZTogS29udmVyc29TZXJ2aWNlKSB7XG4gICAgc2VydmljZS5sYW5nLnN1YnNjcmliZSgocikgPT4ge1xuICAgICAgaWYgKHNlcnZpY2UubG9jYWxlKSB7XG4gICAgICAgIHRoaXMuc2VuZEJ0biA9IHRyYW5zbGF0ZS50cmFuc2xhdGUoc2VydmljZS5sb2NhbGUsICdTRU5EJyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ID0gdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ1NFTEVDVCcpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuUGxhY2VIb2xkZXIpIHtcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy5jdXJyZW50UGxhY2VIb2xkZXIgPSB0aGlzLlBsYWNlSG9sZGVyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuUGxhY2VIb2xkZXIubGVuZ3RoKV07XG4gICAgICB9LCAzMDAwKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZW1pdCgkZXZlbnQpIHtcbiAgICB0aGlzLmZpcnN0VmlzaXQgPSBmYWxzZTtcbiAgICB0aGlzLnJlYWR5U2VuZC5lbWl0KHRydWUpO1xuICB9XG5cbiAgcHVibGljIF9zZW5kKCkge1xuICAgIGNvbnN0IHVzZXJEYXRhOiBVc2VySW5wdXQgPSB7XG4gICAgICBtZXNzYWdlOiB0aGlzLnVzZXJJbnB1dCxcbiAgICAgIGRhdGU6IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKG5hdmlnYXRvci5sYW5ndWFnZSwge1xuICAgICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICAgIG1pbnV0ZTogJzItZGlnaXQnXG4gICAgICB9KVxuICAgIH07XG4gICAgdGhpcy5zZW5kLmVtaXQodXNlckRhdGEpO1xuICAgIHRoaXMudXNlcklucHV0ID0gbnVsbDtcbiAgfVxuXG4gIGFzeW5jIHNjcm9sbChzY3JvbGxIZWlnaHQ6IG51bWJlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxudW1iZXI+KChyZXNvbHZlKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgwKTtcbiAgICAgIH0sIDMwMCk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGJ5UGFzc1VzZXJJbnB1dChib3RkYXRhOiBzdHJpbmcsIGk/OiBudW1iZXIpIHtcbiAgICBjb25zdCBidXR0b25zOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaG93LWJ0bicpO1xuICAgIGZvciAobGV0IGJ0biBvZiBBcnJheS5mcm9tKGJ1dHRvbnMpKSB7XG4gICAgICBidG4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuLWJ0bicpO1xuICAgIH1cbiAgICB0aGlzLnNlbmRCb3RDb21tYW5kLmVtaXQoYm90ZGF0YSk7XG4gIH1cbn1cbiJdfQ==