import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../first-visit/first-visit.component";
import * as i3 from "@angular/forms";
import * as i4 from "../pipe/safe-html.pipe";
function DesktopFullScreenComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r1076 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "bot-first-visit", 3);
    i0.ɵɵlistener("ready", function DesktopFullScreenComponent_ng_container_2_Template_bot_first_visit_ready_1_listener($event) { i0.ɵɵrestoreView(_r1076); const ctx_r1075 = i0.ɵɵnextContext(); return ctx_r1075.ready.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1073 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("firstUsageStory", ctx_r1073.firstUsageStory)("assets", ctx_r1073.assets);
} }
const _c0 = function (a0, a1) { return { backgroundColor: a0, color: a1 }; };
function DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 14);
    i0.ɵɵelementStart(2, "div", 15);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 16);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r1078 = i0.ɵɵnextContext().$implicit;
    const ctx_r1079 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(4, _c0, ctx_r1079.assets == null ? null : ctx_r1079.assets.ColorSet == null ? null : ctx_r1079.assets.ColorSet.Primary, ctx_r1079.assets == null ? null : ctx_r1079.assets.ColorSet == null ? null : ctx_r1079.assets.ColorSet.Secondary));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", entry_r1078.message, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r1078.date);
} }
function DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 18);
    i0.ɵɵpipe(2, "safeHtml");
    i0.ɵɵelement(3, "br");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r1078 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(2, 1, entry_r1078.text), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r1090 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 19);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r1090); const suggest_r1086 = i0.ɵɵnextContext().$implicit; const ctx_r1088 = i0.ɵɵnextContext(5); return ctx_r1088.byPassUserInput(suggest_r1086 == null ? null : suggest_r1086.value == null ? null : suggest_r1086.value.onClick); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const suggest_r1086 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("innerHTML", suggest_r1086.label || (suggest_r1086.value == null ? null : suggest_r1086.value.displayedMessage) || (suggest_r1086.value == null ? null : suggest_r1086.value.title), i0.ɵɵsanitizeHtml);
} }
function DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_ng_container_3_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const suggest_r1086 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", suggest_r1086.format === "button");
} }
function DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r1078 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", entry_r1078.medias[0].required_actions);
} }
function DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 17);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_ng_container_2_Template, 4, 3, "ng-container", 2);
    i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_ng_container_3_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r1078 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", entry_r1078.text);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", entry_r1078.medias && entry_r1078.medias.length && entry_r1078.medias[0].required_actions && entry_r1078.medias[0].required_actions.length);
} }
function DesktopFullScreenComponent_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_1_Template, 6, 7, "ng-container", 2);
    i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_3_ng_container_4_ng_container_2_Template, 4, 2, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const entry_r1078 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", entry_r1078.date);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !entry_r1078.date);
} }
function DesktopFullScreenComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r1095 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵelementStart(2, "div", 5);
    i0.ɵɵelementStart(3, "div", 6);
    i0.ɵɵtemplate(4, DesktopFullScreenComponent_ng_container_3_ng_container_4_Template, 3, 2, "ng-container", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 8);
    i0.ɵɵelementStart(6, "div", 9);
    i0.ɵɵelementStart(7, "input", 10);
    i0.ɵɵlistener("ngModelChange", function DesktopFullScreenComponent_ng_container_3_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r1095); const ctx_r1094 = i0.ɵɵnextContext(); return ctx_r1094.userInput = $event; })("keyup.enter", function DesktopFullScreenComponent_ng_container_3_Template_input_keyup_enter_7_listener() { i0.ɵɵrestoreView(_r1095); const ctx_r1096 = i0.ɵɵnextContext(); return ctx_r1096.userInput && ctx_r1096._send(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 11);
    i0.ɵɵlistener("click", function DesktopFullScreenComponent_ng_container_3_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r1095); const ctx_r1097 = i0.ɵɵnextContext(); return ctx_r1097._send(); });
    i0.ɵɵtext(9, "Envoyer ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 12);
    i0.ɵɵelement(11, "img", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1074 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1074.displayData);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r1074.userInput);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(i0.ɵɵpureFunction2(6, _c0, ctx_r1074.assets == null ? null : ctx_r1074.assets.ColorSet == null ? null : ctx_r1074.assets.ColorSet.Primary, ctx_r1074.assets == null ? null : ctx_r1074.assets.ColorSet == null ? null : ctx_r1074.assets.ColorSet.Secondary));
    i0.ɵɵproperty("disabled", !ctx_r1074.userInput);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("src", ctx_r1074.assets.FullSizeLogo, i0.ɵɵsanitizeUrl);
} }
const _c1 = function (a0) { return { backgroundImage: a0 }; };
export class DesktopFullScreenComponent {
    constructor() {
        this.firstVisit = false;
        this.ready = new EventEmitter(false);
        this.send = new EventEmitter(null);
        this.sendBotCommand = new EventEmitter(null);
    }
    ngOnInit() {
        this.ready.subscribe((ready) => {
            this.firstVisit = false;
        });
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
    byPassUserInput(botdata) {
        this.sendBotCommand.emit(botdata);
    }
}
DesktopFullScreenComponent.ɵfac = function DesktopFullScreenComponent_Factory(t) { return new (t || DesktopFullScreenComponent)(); };
DesktopFullScreenComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DesktopFullScreenComponent, selectors: [["bot-full-screen"]], inputs: { assets: "assets", firstVisit: "firstVisit", firstUsageStory: "firstUsageStory", displayData: "displayData" }, outputs: { ready: "ready", send: "send", sendBotCommand: "sendBotCommand" }, decls: 4, vars: 6, consts: [["xmlns", "http://www.w3.org/1999/html", 1, "bot-container"], [1, "bot-view"], [4, "ngIf"], [3, "firstUsageStory", "assets", "ready"], [1, "bot-chat-wrapper"], [1, "bot-discussion-wrapper"], [1, "bot-chat"], [4, "ngFor", "ngForOf"], [1, "bot-input-wrapper"], [1, "bot-input"], ["type", "text", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "bot-button", 3, "disabled", "click"], [1, "bot-logo"], [3, "src"], [1, "user-input"], [1, "data"], [1, "time"], [1, "bot-answer"], [3, "innerHTML"], [1, "bot-button", 3, "innerHTML", "click"]], template: function DesktopFullScreenComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, DesktopFullScreenComponent_ng_container_2_Template, 2, 2, "ng-container", 2);
        i0.ɵɵtemplate(3, DesktopFullScreenComponent_ng_container_3_Template, 12, 9, "ng-container", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleMap(i0.ɵɵpureFunction1(4, _c1, "url(" + ctx.assets.Background + ")"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.firstVisit && ctx.firstUsageStory);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.firstVisit);
    } }, directives: [i1.NgIf, i2.FirstVisitComponent, i1.NgForOf, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel], pipes: [i4.SafeHtmlPipe], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DesktopFullScreenComponent, [{
        type: Component,
        args: [{
                selector: 'bot-full-screen',
                templateUrl: './desktop-full-screen.component.html',
                styleUrls: ['./desktop-full-screen.component.css']
            }]
    }], function () { return []; }, { assets: [{
            type: Input
        }], firstVisit: [{
            type: Input
        }], firstUsageStory: [{
            type: Input
        }], displayData: [{
            type: Input
        }], ready: [{
            type: Output
        }], send: [{
            type: Output
        }], sendBotCommand: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rb252ZXJzby8iLCJzb3VyY2VzIjpbImxpYi9kZXNrdG9wLWZ1bGwtc2NyZWVuL2Rlc2t0b3AtZnVsbC1zY3JlZW4uY29tcG9uZW50LnRzIiwibGliL2Rlc2t0b3AtZnVsbC1zY3JlZW4vZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztJQ0d6RSw2QkFDRTtJQUFBLDBDQUNnRTtJQUEvQyxxTUFBUyw0QkFBa0IsSUFBQztJQUFDLGlCQUFrQjtJQUNsRSwwQkFBZTs7O0lBRkksZUFBbUM7SUFBbkMsMkRBQW1DLDRCQUFBOzs7O0lBUTVDLDZCQUNFO0lBQUEsK0JBQ0U7SUFBQSwrQkFJRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBTTtJQUNOLGdDQUFtQjtJQUFBLFlBQWM7SUFBQSxpQkFBTztJQUMxQyxpQkFBTTtJQUNSLDBCQUFlOzs7O0lBUk8sZUFHZDtJQUhjLDJRQUdkO0lBQ0YsZUFDRjtJQURFLG9EQUNGO0lBQ21CLGVBQWM7SUFBZCxzQ0FBYzs7O0lBS2pDLDZCQUNFO0lBQUEsMkJBQWlEOztJQUFBLHFCQUNuRDtJQUFBLDBCQUFlOzs7SUFEUCxlQUFtQztJQUFuQyxxRkFBbUM7Ozs7SUFNdkMsNkJBQ0U7SUFBQSxrQ0FDd0c7SUFEN0Usb2JBQWtEO0lBQ2tCLGlCQUFTO0lBQzFHLDBCQUFlOzs7SUFETCxlQUFzRjtJQUF0RixxTkFBc0Y7OztJQUhsRyw2QkFDRTtJQUFBLHdLQUNFO0lBR0osMEJBQWU7OztJQUpDLGVBQW1DO0lBQW5DLHdEQUFtQzs7O0lBSnJELDZCQUdFO0lBQUEseUpBQ0U7SUFLSiwwQkFBZTs7O0lBTkMsZUFBd0Q7SUFBeEQsZ0VBQXdEOzs7SUFSNUUsNkJBQ0U7SUFBQSwrQkFDRTtJQUFBLDBJQUNFO0lBRUYsMElBR0U7SUFRSixpQkFBTTtJQUNSLDBCQUFlOzs7SUFmRyxlQUFrQjtJQUFsQix1Q0FBa0I7SUFHbEIsZUFFOEI7SUFGOUIsaUtBRThCOzs7SUFuQmxELDZCQUNFO0lBQUEsMkhBQ0U7SUFVRiwySEFDRTtJQWlCSiwwQkFBZTs7O0lBN0JDLGVBQWtCO0lBQWxCLHVDQUFrQjtJQVdsQixlQUFtQjtJQUFuQix3Q0FBbUI7Ozs7SUFoQjNDLDZCQUNFO0lBQUEsOEJBQ0U7SUFBQSw4QkFDRTtJQUFBLDhCQUNFO0lBQUEsNEdBQ0U7SUE4QkosaUJBQU07SUFDUixpQkFBTTtJQUNOLDhCQUNFO0lBQUEsOEJBQ0U7SUFBQSxpQ0FDQTtJQURtQiwyT0FBdUIsZ09BQUE7SUFBMUMsaUJBQ0E7SUFBQSxrQ0FHNkM7SUFBMUMsMk1BQWlCO0lBQXlCLHdCQUM3QztJQUFBLGlCQUFTO0lBQ1gsaUJBQU07SUFDUixpQkFBTTtJQUNOLGdDQUNFO0lBQUEsMkJBQ0Y7SUFBQSxpQkFBTTtJQUNSLGlCQUFNO0lBQ1IsMEJBQWU7OztJQS9DTyxlQUFpQztJQUFqQywrQ0FBaUM7SUFtQzVCLGVBQXVCO0lBQXZCLDZDQUF1QjtJQUNmLGVBR3pCO0lBSHlCLDJRQUd6QjtJQUFtQiwrQ0FBdUI7SUFLekMsZUFBMkI7SUFBM0IscUVBQTJCOzs7QUQvQzFDLE1BQU0sT0FBTywwQkFBMEI7SUFVckM7UUFSUyxlQUFVLEdBQVksS0FBSyxDQUFDO1FBRzNCLFVBQUssR0FBMEIsSUFBSSxZQUFZLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDaEUsU0FBSSxHQUE0QixJQUFJLFlBQVksQ0FBWSxJQUFJLENBQUMsQ0FBQztRQUNsRSxtQkFBYyxHQUF5QixJQUFJLFlBQVksQ0FBUyxJQUFJLENBQUMsQ0FBQztJQUloRixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBYyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sS0FBSztRQUNWLE1BQU0sUUFBUSxHQUFjO1lBQzFCLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUztZQUN2QixJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO2dCQUN0RCxJQUFJLEVBQUUsU0FBUztnQkFDZixNQUFNLEVBQUUsU0FBUzthQUNsQixDQUFDO1NBQ0gsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxlQUFlLENBQUMsT0FBZTtRQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDOztvR0FqQ1UsMEJBQTBCOytEQUExQiwwQkFBMEI7UUNSdkMsOEJBRUU7UUFBQSw4QkFDRTtRQUFBLDZGQUNFO1FBR0YsOEZBQ0U7UUFtREosaUJBQU07UUFDUixpQkFBTTs7UUE1RHFCLCtFQUEwRDtRQUduRSxlQUFxQztRQUFyQyw0REFBcUM7UUFJckMsZUFBbUI7UUFBbkIsc0NBQW1COztrRERDeEIsMEJBQTBCO2NBTHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixXQUFXLEVBQUUsc0NBQXNDO2dCQUNuRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQzthQUNuRDs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsTUFBTTs7a0JBQ04sTUFBTTs7a0JBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RlZmF1bHRBc3NldHMsIE9wZW5DaGF0Qm90UmVzcG9uc2UsIFVzZXJJbnB1dH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL0tvbnZlcnNvSW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYm90LWZ1bGwtc2NyZWVuJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Rlc2t0b3AtZnVsbC1zY3JlZW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kZXNrdG9wLWZ1bGwtc2NyZWVuLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEZXNrdG9wRnVsbFNjcmVlbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGFzc2V0czogRGVmYXVsdEFzc2V0cztcbiAgQElucHV0KCkgZmlyc3RWaXNpdDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBmaXJzdFVzYWdlU3Rvcnk6IHN0cmluZ1tdO1xuICBASW5wdXQoKSBkaXNwbGF5RGF0YTogKFVzZXJJbnB1dCB8IE9wZW5DaGF0Qm90UmVzcG9uc2UpW107XG4gIEBPdXRwdXQoKSByZWFkeTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPihmYWxzZSk7XG4gIEBPdXRwdXQoKSBzZW5kOiBFdmVudEVtaXR0ZXI8VXNlcklucHV0PiA9IG5ldyBFdmVudEVtaXR0ZXI8VXNlcklucHV0PihudWxsKTtcbiAgQE91dHB1dCgpIHNlbmRCb3RDb21tYW5kOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPihudWxsKTtcbiAgcHVibGljIHVzZXJJbnB1dDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZWFkeS5zdWJzY3JpYmUoKHJlYWR5OiBib29sZWFuKSA9PiB7XG4gICAgICB0aGlzLmZpcnN0VmlzaXQgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBfc2VuZCgpIHtcbiAgICBjb25zdCB1c2VyRGF0YTogVXNlcklucHV0ID0ge1xuICAgICAgbWVzc2FnZTogdGhpcy51c2VySW5wdXQsXG4gICAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZyhuYXZpZ2F0b3IubGFuZ3VhZ2UsIHtcbiAgICAgICAgaG91cjogJzItZGlnaXQnLFxuICAgICAgICBtaW51dGU6ICcyLWRpZ2l0J1xuICAgICAgfSlcbiAgICB9O1xuICAgIHRoaXMuc2VuZC5lbWl0KHVzZXJEYXRhKTtcbiAgICB0aGlzLnVzZXJJbnB1dCA9IG51bGw7XG4gIH1cblxuICBieVBhc3NVc2VySW5wdXQoYm90ZGF0YTogc3RyaW5nKSB7XG4gICAgdGhpcy5zZW5kQm90Q29tbWFuZC5lbWl0KGJvdGRhdGEpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiYm90LWNvbnRhaW5lclwiIFtzdHlsZV09XCJ7YmFja2dyb3VuZEltYWdlIDogJ3VybCgnK2Fzc2V0cy5CYWNrZ3JvdW5kKycpJ31cIlxuICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkvaHRtbFwiPlxuICA8ZGl2IGNsYXNzPVwiYm90LXZpZXdcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmlyc3RWaXNpdCAmJiBmaXJzdFVzYWdlU3RvcnlcIj5cbiAgICAgIDxib3QtZmlyc3QtdmlzaXQgW2ZpcnN0VXNhZ2VTdG9yeV09XCJmaXJzdFVzYWdlU3RvcnlcIiBbYXNzZXRzXT1cImFzc2V0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgIChyZWFkeSk9XCJyZWFkeS5lbWl0KCRldmVudClcIj48L2JvdC1maXJzdC12aXNpdD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWZpcnN0VmlzaXRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJib3QtY2hhdC13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3QtZGlzY3Vzc2lvbi13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1jaGF0XCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBlbnRyeSBvZiBkaXNwbGF5RGF0YVwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZW50cnkuZGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YVwiIFtzdHlsZV09XCJ7XG4gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5LFxuICAgICAgICAgICAgICAgICAgICAgY29sb3IgOiBhc3NldHM/LkNvbG9yU2V0Py5TZWNvbmRhcnlcbiAgICAgICAgICAgICAgICAgICAgfVwiPlxuICAgICAgICAgICAgICAgICAgICB7e2VudHJ5Lm1lc3NhZ2V9fVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpbWVcIj57e2VudHJ5LmRhdGV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZW50cnkuZGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3QtYW5zd2VyXCI+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZW50cnkudGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImVudHJ5LnRleHQgfCBzYWZlSHRtbFwiPjwvc3Bhbj48YnI+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJlbnRyeS5tZWRpYXMgJiYgZW50cnkubWVkaWFzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICYmIGVudHJ5Lm1lZGlhc1swXS5yZXF1aXJlZF9hY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgJiYgZW50cnkubWVkaWFzWzBdLnJlcXVpcmVkX2FjdGlvbnMubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHN1Z2dlc3Qgb2YgZW50cnkubWVkaWFzWzBdLnJlcXVpcmVkX2FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic3VnZ2VzdC5mb3JtYXQgPT09ICdidXR0b24nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYm90LWJ1dHRvblwiIChjbGljayk9XCJieVBhc3NVc2VySW5wdXQoc3VnZ2VzdD8udmFsdWU/Lm9uQ2xpY2spXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lubmVySFRNTF09XCJzdWdnZXN0LmxhYmVsfHwgc3VnZ2VzdC52YWx1ZT8uZGlzcGxheWVkTWVzc2FnZSB8fCBzdWdnZXN0LnZhbHVlPy50aXRsZSBcIj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1pbnB1dC13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJvdC1pbnB1dFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJ1c2VySW5wdXRcIiAoa2V5dXAuZW50ZXIpPVwidXNlcklucHV0ICYmIF9zZW5kKClcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJib3QtYnV0dG9uXCIgW3N0eWxlXT1cIntcbiAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnksXG4gICAgICAgICAgICAgICAgICAgICBjb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlNlY29uZGFyeVxuICAgICAgICAgICAgfVwiIChjbGljayk9XCJfc2VuZCgpXCIgW2Rpc2FibGVkXT1cIiF1c2VySW5wdXRcIj5FbnZveWVyXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3QtbG9nb1wiPlxuICAgICAgICAgIDxpbWcgW3NyY109XCJhc3NldHMuRnVsbFNpemVMb2dvXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=