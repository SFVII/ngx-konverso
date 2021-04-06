import { __awaiter, __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
let DesktopFullScreenComponent = class DesktopFullScreenComponent {
    constructor() {
        this.AssistantMode = false;
        this.firstVisit = false;
        this.IsMobile = false;
        this.readySend = new EventEmitter(false);
        this.send = new EventEmitter(null);
        this.sendBotCommand = new EventEmitter(null);
    }
    ngOnInit() {
        if (this.PlaceHolder) {
            setInterval(() => {
                this.currentPlaceHolder = this.PlaceHolder[Math.floor(Math.random() * this.PlaceHolder.length)];
            }, 3000);
        }
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
    byPassUserInput(botdata) {
        this.sendBotCommand.emit(botdata);
    }
};
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
DesktopFullScreenComponent = __decorate([
    Component({
        selector: 'bot-full-screen',
        template: "<div class=\"bot-container\"  [class]=\"IsMobile ? 'bot-mobile' : ''\" [style]=\"{backgroundImage : 'url('+assets.Background+')'}\"\n     xmlns=\"http://www.w3.org/1999/html\">\n  <div class=\"bot-view\">\n    <ng-container *ngIf=\"firstVisit && firstUsageStory\">\n      <bot-first-visit [firstUsageStory]=\"firstUsageStory\" [assets]=\"assets\"\n                       (ready)=\"emit($event)\"></bot-first-visit>\n    </ng-container>\n    <ng-container *ngIf=\"!firstVisit\">\n      <div class=\"bot-assistant-wrapper\" *ngIf=\"AssistantMode\">\n        <div class=\"bot-logo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>\n        <div class=\"bot-discussion-wrapper\">\n          <ng-container *ngIf=\"LastUserInput\">\n            <div class=\"user-input\" *ngIf=\"LastUserInput\">\n              <div class=\"data\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n                    }\">\n                {{LastUserInput.message}}\n              </div>\n              <span class=\"time\">{{LastUserInput.date}}</span>\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"LastBotAnswer\">\n            <div class=\"bot-answer\">\n              <ng-container>\n\n              </ng-container>\n              <ng-container *ngIf=\"LastBotAnswer.text\">\n                <span [innerHTML]=\"LastBotAnswer.text | safeHtml\"></span><br>\n              </ng-container>\n              <ng-container *ngIf=\"LastBotAnswer.medias && LastBotAnswer.medias.length\n                   && LastBotAnswer.medias[0].required_actions\n                   && LastBotAnswer.medias[0].required_actions.length\">\n                <ng-container *ngFor=\"let suggest of LastBotAnswer.medias[0].required_actions\">\n                  <ng-container *ngIf=\"suggest.format === 'button'\">\n                    <button [style]=\"{\n                     borderColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Primary\n            }\" class=\"bot-button\" (click)=\"byPassUserInput(suggest?.value?.onClick)\"\n                            [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \"></button>\n                  </ng-container>\n                </ng-container>\n              </ng-container>\n\n            </div>\n          </ng-container>\n          <div class=\"bot-input-wrapper\">\n            <div class=\"bot-input\" *ngIf=\"!disableUserInput\">\n              <input type=\"text\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" maxlength=\"200\"\n                     [placeholder]=\"currentPlaceHolder\">\n              <button class=\"bot-button\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n            }\" (click)=\"_send()\" [disabled]=\"!userInput\">Envoyer\n              </button>\n            </div>\n            <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\n              <i>Vous devez s\u00E9lectionner une r\u00E9ponse</i>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"bot-chat-wrapper\" *ngIf=\"!AssistantMode\">\n        {{AssistantMode}}\n        <div class=\"bot-discussion-wrapper\" #scrollMe [scrollTop]=\"scrollMe.scrollTo(0, 9999999)\">\n          <div class=\"bot-chat\">\n\n            <ng-container *ngFor=\"let entry of displayData\">\n              <ng-container *ngIf=\"entry.date\">\n                <div class=\"user-input\">\n                  <div class=\"data\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n                    }\">\n                    {{entry.message}}\n                  </div>\n                  <span class=\"time\">{{entry.date}}</span>\n                </div>\n              </ng-container>\n              <ng-container *ngIf=\"!entry.date\">\n                <div class=\"bot-answer\">\n                  <ng-container *ngIf=\"entry.text\">\n                    <span [innerHTML]=\"entry.text | safeHtml\"></span><br>\n                  </ng-container>\n                  <ng-container *ngIf=\"entry.medias && entry.medias.length\n                   && entry.medias[0].required_actions\n                   && entry.medias[0].required_actions.length\">\n                    <ng-container *ngFor=\"let suggest of entry.medias[0].required_actions\">\n                      <ng-container *ngIf=\"suggest.format === 'button'\">\n                        <button [style]=\"{\n                     borderColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Primary\n            }\" class=\"bot-button\" (click)=\"byPassUserInput(suggest?.value?.onClick)\"\n                                [innerHTML]=\"suggest.label|| suggest.value?.displayedMessage || suggest.value?.title \"></button>\n                      </ng-container>\n                    </ng-container>\n                  </ng-container>\n\n                </div>\n              </ng-container>\n            </ng-container>\n          </div>\n        </div>\n        <div class=\"bot-input-wrapper\">\n          <div class=\"bot-input\" *ngIf=\"!disableUserInput\">\n            <input type=\"text\" [(ngModel)]=\"userInput\" (keyup.enter)=\"userInput && _send()\" maxlength=\"200\"\n                   [placeholder]=\"currentPlaceHolder\">\n            <button class=\"bot-button\" [style]=\"{\n                     backgroundColor : assets?.ColorSet?.Primary,\n                     color : assets?.ColorSet?.Secondary\n            }\" (click)=\"_send()\" [disabled]=\"!userInput\">Envoyer\n            </button>\n          </div>\n          <div class=\"bot-input-disable\" *ngIf=\"disableUserInput\">\n            <i>Vous devez s\u00E9lectionner une r\u00E9ponse</i>\n          </div>\n        </div>\n        <div class=\"bot-logo\">\n          <img [src]=\"assets.FullSizeLogo\">\n        </div>\n      </div>\n    </ng-container>\n\n  </div>\n</div>\n",
        styles: [""]
    })
], DesktopFullScreenComponent);
export { DesktopFullScreenComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rb252ZXJzby8iLCJzb3VyY2VzIjpbImxpYi9kZXNrdG9wLWZ1bGwtc2NyZWVuL2Rlc2t0b3AtZnVsbC1zY3JlZW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBUTdFLElBQWEsMEJBQTBCLEdBQXZDLE1BQWEsMEJBQTBCO0lBa0JyQztRQWpCUyxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUUvQixlQUFVLEdBQVksS0FBSyxDQUFDO1FBTzVCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFekIsY0FBUyxHQUEwQixJQUFJLFlBQVksQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUNwRSxTQUFJLEdBQTRCLElBQUksWUFBWSxDQUFZLElBQUksQ0FBQyxDQUFDO1FBQ2xFLG1CQUFjLEdBQXlCLElBQUksWUFBWSxDQUFTLElBQUksQ0FBQyxDQUFDO0lBS2hGLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLFdBQVcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2xHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNWO0lBQ0gsQ0FBQztJQUVNLElBQUksQ0FBQyxNQUFNO1FBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDTSxLQUFLO1FBQ1YsTUFBTSxRQUFRLEdBQWM7WUFDMUIsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3ZCLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3RELElBQUksRUFBRSxTQUFTO2dCQUNmLE1BQU0sRUFBRSxTQUFTO2FBQ2xCLENBQUM7U0FDSCxDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVLLE1BQU0sQ0FBQyxZQUFvQjs7WUFDL0IsT0FBTyxJQUFJLE9BQU8sQ0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUNyQyxVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNkLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDYixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDVixDQUFDLENBQUMsQ0FBQztRQUVMLENBQUM7S0FBQTtJQUVELGVBQWUsQ0FBQyxPQUFlO1FBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDRixDQUFBO0FBeERVO0lBQVIsS0FBSyxFQUFFO2lFQUFnQztBQUMvQjtJQUFSLEtBQUssRUFBRTswREFBdUI7QUFDdEI7SUFBUixLQUFLLEVBQUU7OERBQTZCO0FBQzVCO0lBQVIsS0FBSyxFQUFFO21FQUEyQjtBQUMxQjtJQUFSLEtBQUssRUFBRTsrREFBa0Q7QUFDakQ7SUFBUixLQUFLLEVBQUU7b0VBQTJCO0FBQzFCO0lBQVIsS0FBSyxFQUFFO2lFQUEwQjtBQUN6QjtJQUFSLEtBQUssRUFBRTtpRUFBb0M7QUFDbkM7SUFBUixLQUFLLEVBQUU7K0RBQXVCO0FBQ3RCO0lBQVIsS0FBSyxFQUFFOzREQUEyQjtBQUV6QjtJQUFULE1BQU0sRUFBRTs2REFBcUU7QUFDcEU7SUFBVCxNQUFNLEVBQUU7d0RBQW1FO0FBQ2xFO0lBQVQsTUFBTSxFQUFFO2tFQUF1RTtBQWRyRSwwQkFBMEI7SUFMdEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQix3aE1BQW1EOztLQUVwRCxDQUFDO0dBQ1csMEJBQTBCLENBeUR0QztTQXpEWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEZWZhdWx0QXNzZXRzLCBPcGVuQ2hhdEJvdFJlc3BvbnNlLCBVc2VySW5wdXR9IGZyb20gJy4uLy4uL2ludGVyZmFjZS9Lb252ZXJzb0ludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JvdC1mdWxsLXNjcmVlbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kZXNrdG9wLWZ1bGwtc2NyZWVuLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGVza3RvcEZ1bGxTY3JlZW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBBc3Npc3RhbnRNb2RlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIGFzc2V0czogRGVmYXVsdEFzc2V0cztcbiAgQElucHV0KCkgZmlyc3RWaXNpdDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBmaXJzdFVzYWdlU3Rvcnk6IHN0cmluZ1tdO1xuICBASW5wdXQoKSBkaXNwbGF5RGF0YTogKFVzZXJJbnB1dCB8IE9wZW5DaGF0Qm90UmVzcG9uc2UpW107XG4gIEBJbnB1dCgpIGRpc2FibGVVc2VySW5wdXQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIExhc3RVc2VySW5wdXQ6IFVzZXJJbnB1dDtcbiAgQElucHV0KCkgTGFzdEJvdEFuc3dlcjogT3BlbkNoYXRCb3RSZXNwb25zZTtcbiAgQElucHV0KCkgUGxhY2VIb2xkZXI6IHN0cmluZ1tdO1xuICBASW5wdXQoKSBJc01vYmlsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSByZWFkeVNlbmQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oZmFsc2UpO1xuICBAT3V0cHV0KCkgc2VuZDogRXZlbnRFbWl0dGVyPFVzZXJJbnB1dD4gPSBuZXcgRXZlbnRFbWl0dGVyPFVzZXJJbnB1dD4obnVsbCk7XG4gIEBPdXRwdXQoKSBzZW5kQm90Q29tbWFuZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4obnVsbCk7XG4gIHB1YmxpYyB1c2VySW5wdXQ6IHN0cmluZztcbiAgcHVibGljIGN1cnJlbnRQbGFjZUhvbGRlcjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuUGxhY2VIb2xkZXIpIHtcbiAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgdGhpcy5jdXJyZW50UGxhY2VIb2xkZXIgPSB0aGlzLlBsYWNlSG9sZGVyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuUGxhY2VIb2xkZXIubGVuZ3RoKV07XG4gICAgICB9LCAzMDAwKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZW1pdCgkZXZlbnQpIHtcbiAgICB0aGlzLmZpcnN0VmlzaXQgPSBmYWxzZTtcbiAgICB0aGlzLnJlYWR5U2VuZC5lbWl0KHRydWUpO1xuICB9XG4gIHB1YmxpYyBfc2VuZCgpIHtcbiAgICBjb25zdCB1c2VyRGF0YTogVXNlcklucHV0ID0ge1xuICAgICAgbWVzc2FnZTogdGhpcy51c2VySW5wdXQsXG4gICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZyhuYXZpZ2F0b3IubGFuZ3VhZ2UsIHtcbiAgICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgICBtaW51dGU6ICcyLWRpZ2l0J1xuICAgICAgfSlcbiAgICB9O1xuICAgIHRoaXMuc2VuZC5lbWl0KHVzZXJEYXRhKTtcbiAgICB0aGlzLnVzZXJJbnB1dCA9IG51bGw7XG4gIH1cblxuICBhc3luYyBzY3JvbGwoc2Nyb2xsSGVpZ2h0OiBudW1iZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8bnVtYmVyPigocmVzb2x2ZSkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoMCk7XG4gICAgICB9LCAzMDApO1xuICAgIH0pO1xuXG4gIH1cblxuICBieVBhc3NVc2VySW5wdXQoYm90ZGF0YTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZW5kQm90Q29tbWFuZC5lbWl0KGJvdGRhdGEpO1xuICB9XG59XG4iXX0=