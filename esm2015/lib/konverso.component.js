import { __awaiter } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./konverso.service";
import * as i2 from "@angular/common";
import * as i3 from "./desktop-full-screen/desktop-full-screen.component";
function KonversoComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, " Mobile\n");
    i0.ɵɵelementContainerEnd();
} }
function KonversoComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r1071 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "bot-full-screen", 1);
    i0.ɵɵlistener("send", function KonversoComponent_ng_container_1_Template_bot_full_screen_send_1_listener($event) { i0.ɵɵrestoreView(_r1071); const ctx_r1070 = i0.ɵɵnextContext(); return ctx_r1070.send($event); })("sendBotCommand", function KonversoComponent_ng_container_1_Template_bot_full_screen_sendBotCommand_1_listener($event) { i0.ɵɵrestoreView(_r1071); const ctx_r1072 = i0.ɵɵnextContext(); return ctx_r1072.sendBotCommand($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1069 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("assets", ctx_r1069.assets)("firstVisit", ctx_r1069.firstVisit)("firstUsageStory", ctx_r1069.firstUsageStory)("displayData", ctx_r1069.History);
} }
// @ts-ignore
export class KonversoComponent {
    constructor(service) {
        this.service = service;
        this.ready = new EventEmitter();
    }
    ngOnInit() {
        this.isMobile = this._isMobile();
        this.assets = this.service.assets;
        this.firstVisit = this.service.firstVisit;
        this.firstUsageStory = this.service.firstUsageStory;
        this.History = [];
        if (this.service.ColorSet) {
            this.colorSet = this.service.ColorSet;
        }
        this.ready.subscribe((ready) => {
            if (ready) {
                this.firstVisit = false;
                this.service.firstVisit = false;
            }
        });
    }
    send($event) {
        return __awaiter(this, void 0, void 0, function* () {
            this.History.push($event);
            const index = this.History.length - 1;
            const response = yield this.service.send($event.message).catch((err) => {
                console.log('We got an error ', err);
                // @ts-ignore
                this.History[index].error = true;
            });
            if (response && response.response) {
                console.log(response);
                this.History.push(response.response);
            }
        });
    }
    sendBotCommand($event) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.service.send($event).catch((err) => {
                console.log('We got an error ', err);
            });
            if (response && response.response) {
                console.log(response);
                this.History.push(response.response);
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
KonversoComponent.ɵfac = function KonversoComponent_Factory(t) { return new (t || KonversoComponent)(i0.ɵɵdirectiveInject(i1.KonversoService)); };
KonversoComponent.ɵcmp = i0.ɵɵdefineComponent({ type: KonversoComponent, selectors: [["ngx-konverso"]], outputs: { ready: "ready" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "assets", "firstVisit", "firstUsageStory", "displayData", "send", "sendBotCommand"]], template: function KonversoComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, KonversoComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
        i0.ɵɵtemplate(1, KonversoComponent_ng_container_1_Template, 2, 4, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isMobile);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.isMobile);
    } }, directives: [i2.NgIf, i3.DesktopFullScreenComponent], styles: ["ngx-konverso{overflow:hidden;display:block;min-height:100%;height:100%}  ngx-konverso bot-first-visit,   ngx-konverso bot-full-screen{display:table;min-height:100%;height:100%;width:100%}  ngx-konverso bot-full-screen button:focus,   ngx-konverso bot-full-screen input:focus{outline:0!important}  ngx-konverso bot-full-screen .bot-button>*{position:relative}  ngx-konverso bot-full-screen .button-lg{padding:10px!important;font-size:16px!important}  ngx-konverso bot-full-screen .bot-button{cursor:pointer;opacity:.9;min-width:150px;border-radius:25px;padding:5px;position:relative;display:block;margin:30px auto;overflow:hidden;border-width:0;outline:0;box-shadow:0 1px 4px rgba(0,0,0,.6);transition:opacity .3s}  ngx-konverso bot-full-screen .bot-button span{display:block;padding:12px 24px}  ngx-konverso bot-full-screen .bot-button:focus,   ngx-konverso bot-full-screen .bot-button:hover{opacity:1}  ngx-konverso bot-full-screen .bot-button:before{content:\"\";position:absolute;top:50%;left:50%;display:block;width:0;padding-top:0;border-radius:100%;background-color:rgba(236,240,241,.3);transform:translate(-50%,-50%)}  ngx-konverso bot-full-screen .bot-button:active:before{width:120%;padding-top:120%;transition:width .2s ease-out,padding-top .2s ease-out}  ngx-konverso bot-full-screen .bot-container{font-family:nexa,Roboto;width:100%;height:100%;display:table;margin:auto;background-size:contain}  ngx-konverso bot-full-screen .bot-container>.bot-view{background-size:contain;width:auto;margin:auto;height:100%;display:table-cell;vertical-align:middle}  ngx-konverso bot-full-screen .bot-container>.bot-view img{margin:auto}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper{padding-top:5%;width:100%;margin:auto;vertical-align:middle}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-logo-init-wrapper img{margin-left:auto;margin-right:auto;display:block}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-text{margin-top:4%;width:100%;min-height:150px;font-size:20px;text-align:center}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step{margin-top:5%;text-align:center}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-bullet-step .bot-init-dot{border:1px solid;display:inline-block;width:12px;height:12px;margin-left:2.5px;margin-right:2.5px;border-radius:50%}  ngx-konverso bot-full-screen .bot-container>.bot-view bot-first-visit .bot-init-button-wrapper{display:block;width:100%;text-align:center;margin-top:8%;margin-right:auto;margin-left:auto}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper{width:100%;display:table;height:100%}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo{max-width:100px;position:absolute;top:2%;left:2%}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-logo img{max-width:100px}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper{width:100%;max-width:600px;height:calc(85vh - 50px);padding:15px 30px;margin:0 auto;overflow-y:scroll;transform:rotate(180deg);direction:rtl}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat{overflow-x:hidden;display:flex;flex-direction:column-reverse;justify-content:flex-end}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .bot-answer{font-size:15px;padding:10px 20px;border-radius:25px;color:#000;background-color:transparent;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;margin:15px 0;word-break:break-all;transform:rotate(180deg);direction:ltr}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input{font-size:15px;transform:rotate(180deg);direction:ltr}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .data{padding:10px 20px;border-radius:25px 25px 0;max-width:550px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;word-break:break-all;color:#fff;margin:15px 0 15px auto;background-color:#00a9de}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-discussion-wrapper .bot-chat .user-input .time{font-weight:300;position:absolute;width:200px;display:block;margin-left:95%;bottom:-1%;color:#000;font-size:10px}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper{display:table;width:100%;margin:auto}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input{width:100%;max-width:600px;margin:auto auto 10px;min-height:100px;max-height:200px;padding:2.5% 2.5% .5%}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input input{display:inline-block;padding:10px;border-radius:25px;color:#000;width:60%;margin-right:15px;border:1px solid rgba(0,0,0,.2)}  ngx-konverso bot-full-screen .bot-container>.bot-view .bot-chat-wrapper .bot-input-wrapper .bot-input button{display:inline-block;width:calc(36% - 15px);padding:11px}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(KonversoComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-konverso',
                templateUrl: 'konverso.component.html',
                styleUrls: ['../../assets/main.scss']
            }]
    }], function () { return [{ type: i1.KonversoService }]; }, { ready: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29udmVyc28uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8va29udmVyc28vIiwic291cmNlcyI6WyJsaWIva29udmVyc28uY29tcG9uZW50LnRzIiwibGliL2tvbnZlcnNvLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ0F0RSw2QkFDRTtJQUFBLHlCQUNGO0lBQUEsMEJBQWU7Ozs7SUFDZiw2QkFDRTtJQUFBLDBDQU9tQjtJQUhqQixvTkFBcUIscU9BQUE7SUFHdEIsaUJBQWtCO0lBQ3JCLDBCQUFlOzs7SUFQWCxlQUFpQjtJQUFqQix5Q0FBaUIsb0NBQUEsOENBQUEsa0NBQUE7O0FERHJCLGFBQWE7QUFNYixNQUFNLE9BQU8saUJBQWlCO0lBVTVCLFlBQW9CLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBVGxDLFVBQUssR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQVVyRSxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUMxQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDO1FBQ3BELElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7WUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztTQUN2QztRQUNELElBQUksQ0FBQyxLQUFLLENBQUMs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LENBQUMsR0FBRyxFQUFFLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ3JILENBQUM7U0FDRixDQUFDO1FBQ0YsT0FBTyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7a0ZBNUVVLGlCQUFpQjtzREFBakIsaUJBQWlCO1FDVjlCLG9GQUNFO1FBRUYsb0ZBQ0U7O1FBSlksbUNBQWdCO1FBR2hCLGVBQWlCO1FBQWpCLG9DQUFpQjs7a0RET2xCLGlCQUFpQjtjQUw3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3RDOztrQkFFRSxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtLb252ZXJzb1NlcnZpY2V9IGZyb20gJy4va29udmVyc28uc2VydmljZSc7XG5pbXBvcnQge0NvbG9yU2V0LCBEZWZhdWx0QXNzZXRzLCBLb252ZXJzb0Fuc3dlciwgT3BlbkNoYXRCb3RSZXNwb25zZSwgVXNlcklucHV0fSBmcm9tICcuLi9pbnRlcmZhY2UvS29udmVyc29JbnRlcmZhY2UnO1xuXG4vLyBAdHMtaWdub3JlXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gta29udmVyc28nLFxuICB0ZW1wbGF0ZVVybDogJ2tvbnZlcnNvLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4uLy4uL2Fzc2V0cy9tYWluLnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBLb252ZXJzb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBPdXRwdXQoKSByZWFkeTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBwdWJsaWMgcXVlcnk6IHN0cmluZztcbiAgcHVibGljIGlzTW9iaWxlOiBib29sZWFuO1xuICBwdWJsaWMgYXNzZXRzOiBEZWZhdWx0QXNzZXRzO1xuICBwdWJsaWMgZmlyc3RWaXNpdDogYm9vbGVhbjtcbiAgcHVibGljIGZpcnN0VXNhZ2VTdG9yeTogc3RyaW5nW107XG4gIHB1YmxpYyBjb2xvclNldDogQ29sb3JTZXQ7XG4gIHB1YmxpYyBIaXN0b3J5OiAoVXNlcklucHV0IHwgT3BlbkNoYXRCb3RSZXNwb25zZSlbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IEtvbnZlcnNvU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc01vYmlsZSA9IHRoaXMuX2lzTW9iaWxlKCk7XG4gICAgdGhpcy5hc3NldHMgPSB0aGlzLnNlcnZpY2UuYXNzZXRzO1xuICAgIHRoaXMuZmlyc3RWaXNpdCA9IHRoaXMuc2VydmljZS5maXJzdFZpc2l0O1xuICAgIHRoaXMuZmlyc3RVc2FnZVN0b3J5ID0gdGhpcy5zZXJ2aWNlLmZpcnN0VXNhZ2VTdG9yeTtcbiAgICB0aGlzLkhpc3RvcnkgPSBbXTtcbiAgICBpZiAodGhpcy5zZXJ2aWNlLkNvbG9yU2V0KSB7XG4gICAgICB0aGlzLmNvbG9yU2V0ID0gdGhpcy5zZXJ2aWNlLkNvbG9yU2V0O1xuICAgIH1cbiAgICB0aGlzLnJlYWR5LnN1YnNjcmliZSgocmVhZHk6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmIChyZWFkeSkge1xuICAgICAgICB0aGlzLmZpcnN0VmlzaXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmZpcnN0VmlzaXQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHNlbmQoJGV2ZW50OiBVc2VySW5wdXQpIHtcbiAgICB0aGlzLkhpc3RvcnkucHVzaCgkZXZlbnQpO1xuICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSB0aGlzLkhpc3RvcnkubGVuZ3RoIC0gMTtcbiAgICBjb25zdCByZXNwb25zZTogS29udmVyc29BbnN3ZXIgPSBhd2FpdCB0aGlzLnNlcnZpY2Uuc2VuZCgkZXZlbnQubWVzc2FnZSkuY2F0Y2goKGVycjogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnV2UgZ290IGFuIGVycm9yICcsIGVycik7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB0aGlzLkhpc3RvcnlbaW5kZXhdLmVycm9yID0gdHJ1ZTtcbiAgICB9KTtcbiAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UucmVzcG9uc2UpIHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgIHRoaXMuSGlzdG9yeS5wdXNoKHJlc3BvbnNlLnJlc3BvbnNlKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBzZW5kQm90Q29tbWFuZCgkZXZlbnQ6IHN0cmluZykge1xuICAgIGNvbnN0IHJlc3BvbnNlOiBLb252ZXJzb0Fuc3dlciA9IGF3YWl0IHRoaXMuc2VydmljZS5zZW5kKCRldmVudCkuY2F0Y2goKGVycjogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnV2UgZ290IGFuIGVycm9yICcsIGVycik7XG4gICAgfSk7XG4gICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnJlc3BvbnNlKSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICB0aGlzLkhpc3RvcnkucHVzaChyZXNwb25zZS5yZXNwb25zZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaXNNb2JpbGUoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNNb2JpbGUgPSB7XG4gICAgICBBbmRyb2lkOiAoKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIHJldHVybiAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FuZHJvaWQvaSk7XG4gICAgICB9LFxuICAgICAgQmxhY2tCZXJyeTogKCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICByZXR1cm4gISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9CbGFja0JlcnJ5L2kpO1xuICAgICAgfSxcbiAgICAgIGlPUzogKCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICByZXR1cm4gISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmV8aVBhZHxpUG9kL2kpO1xuICAgICAgfSxcbiAgICAgIE9wZXJhOiAoKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIHJldHVybiAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL09wZXJhIE1pbmkvaSk7XG4gICAgICB9LFxuICAgICAgV2luZG93czogKCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICByZXR1cm4gISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9JRU1vYmlsZS9pKSB8fCAhIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1dQRGVza3RvcC9pKTtcbiAgICAgIH0sXG4gICAgICBhbnk6ICgpOiBib29sZWFuID0+IHtcbiAgICAgICAgcmV0dXJuICEhKGlzTW9iaWxlLkFuZHJvaWQoKSB8fCBpc01vYmlsZS5CbGFja0JlcnJ5KCkgfHwgaXNNb2JpbGUuaU9TKCkgfHwgaXNNb2JpbGUuT3BlcmEoKSB8fCBpc01vYmlsZS5XaW5kb3dzKCkpO1xuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIGlzTW9iaWxlLmFueSgpO1xuICB9XG5cblxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzTW9iaWxlXCI+XG4gIE1vYmlsZVxuPC9uZy1jb250YWluZXI+XG48bmctY29udGFpbmVyICpuZ0lmPVwiIWlzTW9iaWxlXCI+XG4gIDxib3QtZnVsbC1zY3JlZW5cbiAgICBbYXNzZXRzXT1cImFzc2V0c1wiXG4gICAgW2ZpcnN0VmlzaXRdPVwiZmlyc3RWaXNpdFwiXG4gICAgW2ZpcnN0VXNhZ2VTdG9yeV09XCJmaXJzdFVzYWdlU3RvcnlcIlxuICAgIChzZW5kKT1cInNlbmQoJGV2ZW50KVwiXG4gICAgKHNlbmRCb3RDb21tYW5kKT1cInNlbmRCb3RDb21tYW5kKCRldmVudClcIlxuICAgIFtkaXNwbGF5RGF0YV09XCJIaXN0b3J5XCJcbiAgPjwvYm90LWZ1bGwtc2NyZWVuPlxuPC9uZy1jb250YWluZXI+XG5cbiJdfQ==