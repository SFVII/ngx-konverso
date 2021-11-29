import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../translate.service";
import * as i2 from "../konverso.service";
import * as i3 from "@angular/common";
import * as i4 from "../pipe/safe-html.pipe";
const _c0 = function (a0, a1) { return { backgroundColor: a0, borderColor: a1 }; };
function FirstVisitComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r76 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 9);
    i0.ɵɵlistener("click", function FirstVisitComponent_span_8_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r76); const pos_r74 = ctx.index; const ctx_r75 = i0.ɵɵnextContext(); return ctx_r75.goTo(pos_r74); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pos_r74 = ctx.index;
    const ctx_r72 = i0.ɵɵnextContext();
    i0.ɵɵstyleMap(pos_r74 === ctx_r72.position ? i0.ɵɵpureFunction2(2, _c0, ctx_r72.assets == null ? null : ctx_r72.assets.ColorSet == null ? null : ctx_r72.assets.ColorSet.Primary, ctx_r72.assets == null ? null : ctx_r72.assets.ColorSet == null ? null : ctx_r72.assets.ColorSet.Primary) : i0.ɵɵpureFunction2(5, _c0, ctx_r72.assets == null ? null : ctx_r72.assets.ColorSet == null ? null : ctx_r72.assets.ColorSet.Secondary, ctx_r72.assets == null ? null : ctx_r72.assets.ColorSet == null ? null : ctx_r72.assets.ColorSet.Primary));
} }
const _c1 = function (a1) { return { backgroundColor: "#171F26", color: a1 }; };
export class FirstVisitComponent {
    constructor(translate, service) {
        this.service = service;
        this.ready = new EventEmitter();
        this.position = 0;
        this.current = '';
        this.go = '';
        service.lang.subscribe((r) => {
            if (service.locale) {
                this.go = translate.translate(service.locale, 'GO');
            }
        });
    }
    ngOnInit() {
        this.current = this.firstUsageStory[this.position];
        const clear = setInterval(() => {
            if (this.position < (this.firstUsageStory.length - 1)) {
                this.current = this.firstUsageStory[++this.position];
            }
            else {
                clearInterval(clear);
            }
        }, 5000);
    }
    goTo(pos) {
        this.position = pos;
        this.current = this.firstUsageStory[this.position];
    }
    start() {
        //console.log('OOOKKKK')
        this.ready.emit(true);
    }
}
FirstVisitComponent.ɵfac = function FirstVisitComponent_Factory(t) { return new (t || FirstVisitComponent)(i0.ɵɵdirectiveInject(i1.TranslateService), i0.ɵɵdirectiveInject(i2.KonversoService)); };
FirstVisitComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FirstVisitComponent, selectors: [["bot-first-visit"]], inputs: { firstUsageStory: "firstUsageStory", assets: "assets" }, outputs: { ready: "ready" }, decls: 12, vars: 9, consts: [[1, "bot-logo-init-wrapper"], [1, "m-carl-notification"], [1, "m-carl-notification-cue", "m-cue"], ["id", "bot-icon", 1, "a-cue-icon"], [1, "bot-init-text", 3, "innerHTML"], [1, "bot-init-bullet-step"], ["class", "bot-init-dot", 3, "style", "click", 4, "ngFor", "ngForOf"], [1, "bot-init-button-wrapper"], ["mat-button", "", 1, "bot-button", "button-lg", 3, "click"], [1, "bot-init-dot", 3, "click"]], template: function FirstVisitComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵelement(4, "div", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(5, "div", 4);
        i0.ɵɵpipe(6, "safeHtml");
        i0.ɵɵelementStart(7, "div", 5);
        i0.ɵɵtemplate(8, FirstVisitComponent_span_8_Template, 1, 8, "span", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 7);
        i0.ɵɵelementStart(10, "button", 8);
        i0.ɵɵlistener("click", function FirstVisitComponent_Template_button_click_10_listener() { return ctx.start(); });
        i0.ɵɵtext(11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(6, 5, ctx.current), i0.ɵɵsanitizeHtml);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.firstUsageStory);
        i0.ɵɵadvance(2);
        i0.ɵɵstyleMap(i0.ɵɵpureFunction1(7, _c1, ctx.assets == null ? null : ctx.assets.ColorSet == null ? null : ctx.assets.ColorSet.Secondary));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx.go);
    } }, directives: [i3.NgForOf], pipes: [i4.SafeHtmlPipe], styles: ["@keyframes pulsebot{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}@-webkit-keyframes pulsebot{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}.bot-listening[_ngcontent-%COMP%]{height:100%;background:0 0}.bot-listening[_ngcontent-%COMP%]:before{content:\"\";position:absolute;top:-60vw;left:-80vw;width:150vw;height:150vw;border-radius:50%;background:0 0}.bot-listening[_ngcontent-%COMP%]:after{content:\"\";position:absolute;top:-40vw;left:-50vw;width:90vw;height:90vw;border-radius:50%;background:0 0}.m-carl-notification[_ngcontent-%COMP%]{position:relative;top:50%}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]{width:168px;height:168px;margin:0 auto 50px;display:flex;justify-content:center;align-items:center}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-icon[_ngcontent-%COMP%]{position:absolute;width:100px;height:100px;transform:translateX(5px) translateY(5px);border-radius:50%;background:radial-gradient(circle at 50% 50%,#9d107d 1px,#9d107d 3%,#580b58 60%);box-shadow:0 0 10px 5px rgba(0,0,0,.25);-webkit-animation:3.5s infinite pulsebot;animation:3.5s infinite pulsebot}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice[_ngcontent-%COMP%]{transform-origin:center center;height:190px;width:190px;position:absolute;display:flex;justify-content:center;align-items:center}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]{position:absolute;width:150px;height:150px;border-radius:50%;background:#fff;opacity:.2;filter:blur(2px)}.voice1[_ngcontent-%COMP%]{background:#9a147f!important}.voice2[_ngcontent-%COMP%]{background:#773691!important}.voice3[_ngcontent-%COMP%]{background:#4e5ca8!important}.voice4[_ngcontent-%COMP%]{background:#abc1f1!important}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(1){animation:6s infinite reverse both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(2){-webkit-animation:7s infinite both hovering;animation:7s infinite both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(3){animation:8s infinite reverse both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(4){-webkit-animation:9s infinite both hovering;animation:9s infinite both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .a-cue-voice-el[_ngcontent-%COMP%]:nth-child(5){animation:10s infinite reverse both hovering}.m-carl-notification[_ngcontent-%COMP%]   .m-cue[_ngcontent-%COMP%]   .speaking[_ngcontent-%COMP%]{-webkit-animation:2s infinite pulse;animation:2s infinite pulse}.m-carl-notification[_ngcontent-%COMP%]   .a-caption[_ngcontent-%COMP%]{color:#fff;font-size:1.5em;line-height:1.8em;text-shadow:0 1px 2px rgba(0,0,0,.26);text-align:center}.m-carl-notification[_ngcontent-%COMP%]   .a-caption.speaking[_ngcontent-%COMP%]{text-shadow:0 0 0;opacity:.4}@-webkit-keyframes hovering{from{transform:rotate(0) translateX(18px) rotate(0)}to{transform:rotate(360deg) translateX(18px) rotate(-360deg)}}@keyframes hovering{from{transform:rotate(0) translateX(18px) rotate(0)}to{transform:rotate(360deg) translateX(18px) rotate(-360deg)}}@-webkit-keyframes pulse{0%,40%,60%{transform:scale(1)}10%,80%{transform:scale(1.15)}15%,50%,90%{transform:scale(1.25)}100%,20%{transform:scale(1.05)}30%,65%{transform:scale(1.3)}55%{transform:scale(1.1)}70%{transform:scale(1.2)}}@keyframes pulse{0%,40%,60%{transform:scale(1)}10%,80%{transform:scale(1.15)}15%,50%,90%{transform:scale(1.25)}100%,20%{transform:scale(1.05)}30%,65%{transform:scale(1.3)}55%{transform:scale(1.1)}70%{transform:scale(1.2)}}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FirstVisitComponent, [{
        type: Component,
        args: [{
                selector: 'bot-first-visit',
                templateUrl: './first-visit.component.html',
                styleUrls: ['./first-visit.component.scss']
            }]
    }], function () { return [{ type: i1.TranslateService }, { type: i2.KonversoService }]; }, { firstUsageStory: [{
            type: Input
        }], assets: [{
            type: Input
        }], ready: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3QtdmlzaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8va29udmVyc28vIiwic291cmNlcyI6WyJsaWIvZmlyc3QtdmlzaXQvZmlyc3QtdmlzaXQuY29tcG9uZW50LnRzIiwibGliL2ZpcnN0LXZpc2l0L2ZpcnN0LXZpc2l0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztJQ1d2RSwrQkFRTztJQURNLHFOQUFtQjtJQUNoQyxpQkFBTzs7OztJQVBELCtnQkFNTTs7O0FEUmxCLE1BQU0sT0FBTyxtQkFBbUI7SUFROUIsWUFBWSxTQUEyQixFQUFVLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBTC9ELFVBQUssR0FBMEIsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUM5RCxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLE9BQUUsR0FBRyxFQUFFLENBQUM7UUFHYixPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQzNCLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtnQkFDbEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDckQ7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRCxNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFO1lBQzdCLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNyRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDdEQ7aUJBQU07Z0JBQ0wsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELElBQUksQ0FBQyxHQUFXO1FBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsS0FBSztRQUNILHdCQUF3QjtRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDOztzRkFuQ1UsbUJBQW1CO3dEQUFuQixtQkFBbUI7UUNWaEMsNkJBQ0U7UUFBQSw4QkFDRTtRQUNBLDhCQUNFO1FBQUEsOEJBQ0U7UUFBQSx5QkFBNEM7UUFDOUMsaUJBQU07UUFDUixpQkFBTTtRQUNSLGlCQUFNO1FBQ04seUJBQWtFOztRQUNsRSw4QkFDSTtRQUFBLHNFQVFBO1FBQ0osaUJBQU07UUFDTiw4QkFDRTtRQUFBLGtDQUdxQjtRQUFsQixpR0FBUyxXQUFPLElBQUM7UUFBQyxhQUFRO1FBQUEsaUJBQVM7UUFDeEMsaUJBQU07UUFFUiwwQkFBZTs7UUFuQmMsZUFBZ0M7UUFBaEMsZ0ZBQWdDO1FBRWpELGVBQXNEO1FBQXRELDZDQUFzRDtRQVdkLGVBRzlDO1FBSDhDLHlJQUc5QztRQUFtQixlQUFRO1FBQVIsNEJBQVE7O2tERGZwQixtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDOztrQkFFRSxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGVmYXVsdEFzc2V0c30gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL0tvbnZlcnNvSW50ZXJmYWNlJztcbmltcG9ydCB7IEtvbnZlcnNvU2VydmljZSB9IGZyb20gJy4uL2tvbnZlcnNvLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4uL3RyYW5zbGF0ZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYm90LWZpcnN0LXZpc2l0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZpcnN0LXZpc2l0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmlyc3QtdmlzaXQuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBGaXJzdFZpc2l0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZmlyc3RVc2FnZVN0b3J5OiBzdHJpbmdbXTtcbiAgQElucHV0KCkgYXNzZXRzOiBEZWZhdWx0QXNzZXRzO1xuICBAT3V0cHV0KCkgcmVhZHk6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgcHVibGljIHBvc2l0aW9uID0gMDtcbiAgcHVibGljIGN1cnJlbnQgPSAnJztcbiAgcHVibGljIGdvID0gJyc7XG5cbiAgY29uc3RydWN0b3IodHJhbnNsYXRlOiBUcmFuc2xhdGVTZXJ2aWNlLCBwcml2YXRlIHNlcnZpY2U6IEtvbnZlcnNvU2VydmljZSkge1xuICAgIHNlcnZpY2UubGFuZy5zdWJzY3JpYmUoKHIpID0+IHtcbiAgICAgIGlmIChzZXJ2aWNlLmxvY2FsZSkge1xuICAgICAgICB0aGlzLmdvID0gdHJhbnNsYXRlLnRyYW5zbGF0ZShzZXJ2aWNlLmxvY2FsZSwgJ0dPJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmZpcnN0VXNhZ2VTdG9yeVt0aGlzLnBvc2l0aW9uXTtcbiAgICBjb25zdCBjbGVhciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnBvc2l0aW9uIDwgKHRoaXMuZmlyc3RVc2FnZVN0b3J5Lmxlbmd0aCAtIDEpKSB7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMuZmlyc3RVc2FnZVN0b3J5WysrdGhpcy5wb3NpdGlvbl07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGVhckludGVydmFsKGNsZWFyKTtcbiAgICAgIH1cbiAgICB9LCA1MDAwKTtcbiAgfVxuXG4gIGdvVG8ocG9zOiBudW1iZXIpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zO1xuICAgIHRoaXMuY3VycmVudCA9IHRoaXMuZmlyc3RVc2FnZVN0b3J5W3RoaXMucG9zaXRpb25dO1xuICB9XG5cbiAgc3RhcnQoKTogdm9pZCB7XG4gICAgLy9jb25zb2xlLmxvZygnT09PS0tLSycpXG4gICAgdGhpcy5yZWFkeS5lbWl0KHRydWUpO1xuICB9XG5cbn1cbiIsIjxuZy1jb250YWluZXI+XG4gIDxkaXYgY2xhc3M9XCJib3QtbG9nby1pbml0LXdyYXBwZXJcIj5cbiAgICA8IS0tPGltZyBbc3JjXT1cImFzc2V0cy5GdWxsU2l6ZUxvZ29cIj4tLT5cbiAgICA8ZGl2IGNsYXNzPVwibS1jYXJsLW5vdGlmaWNhdGlvblwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm0tY2FybC1ub3RpZmljYXRpb24tY3VlIG0tY3VlXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhLWN1ZS1pY29uXCIgaWQ9XCJib3QtaWNvblwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiYm90LWluaXQtdGV4dFwiIFtpbm5lckhUTUxdPVwiY3VycmVudCB8IHNhZmVIdG1sXCI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJib3QtaW5pdC1idWxsZXQtc3RlcFwiPlxuICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IGVsZW0gb2YgZmlyc3RVc2FnZVN0b3J5IDsgbGV0IHBvcyA9IGluZGV4XCIgY2xhc3M9XCJib3QtaW5pdC1kb3RcIlxuICAgICAgICAgICAgW3N0eWxlXT1cInBvcyA9PT0gcG9zaXRpb24gPyB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvciA6IGFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnksXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yIDphc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5XG4gICAgICAgICAgICAgIH06e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvciA6YXNzZXRzPy5Db2xvclNldD8uU2Vjb25kYXJ5LFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yIDphc3NldHM/LkNvbG9yU2V0Py5QcmltYXJ5XG4gICAgICAgICAgICAgICAgfVwiIChjbGljayk9XCJnb1RvKHBvcylcIj5cbiAgICAgIDwvc3Bhbj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJib3QtaW5pdC1idXR0b24td3JhcHBlclwiPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cImJvdC1idXR0b24gYnV0dG9uLWxnXCIgW3N0eWxlXT1cIntcbiAgICAgIGJhY2tncm91bmRDb2xvciA6ICcjMTcxRjI2JyxcbiAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uU2Vjb25kYXJ5XG4gICAgfVwiIChjbGljayk9XCJzdGFydCgpXCI+e3sgZ28gfX08L2J1dHRvbj5cbiAgPC9kaXY+XG5cbjwvbmctY29udGFpbmVyPlxuIl19