import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../pipe/safe-html.pipe";
const _c0 = function (a0, a1) { return { backgroundColor: a0, borderColor: a1 }; };
function FirstVisitComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r1102 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵlistener("click", function FirstVisitComponent_span_6_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r1102); const pos_r1100 = ctx.index; const ctx_r1101 = i0.ɵɵnextContext(); return ctx_r1101.goTo(pos_r1100); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pos_r1100 = ctx.index;
    const ctx_r1098 = i0.ɵɵnextContext();
    i0.ɵɵstyleMap(pos_r1100 === ctx_r1098.position ? i0.ɵɵpureFunction2(2, _c0, ctx_r1098.assets == null ? null : ctx_r1098.assets.ColorSet == null ? null : ctx_r1098.assets.ColorSet.Primary, ctx_r1098.assets == null ? null : ctx_r1098.assets.ColorSet == null ? null : ctx_r1098.assets.ColorSet.Primary) : i0.ɵɵpureFunction2(5, _c0, ctx_r1098.assets == null ? null : ctx_r1098.assets.ColorSet == null ? null : ctx_r1098.assets.ColorSet.Secondary, ctx_r1098.assets == null ? null : ctx_r1098.assets.ColorSet == null ? null : ctx_r1098.assets.ColorSet.Primary));
} }
const _c1 = function (a0, a1) { return { backgroundColor: a0, color: a1 }; };
export class FirstVisitComponent {
    constructor() {
        this.ready = new EventEmitter(false);
        this.position = 0;
        this.current = null;
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
        this.ready.emit(true);
    }
}
FirstVisitComponent.ɵfac = function FirstVisitComponent_Factory(t) { return new (t || FirstVisitComponent)(); };
FirstVisitComponent.ɵcmp = i0.ɵɵdefineComponent({ type: FirstVisitComponent, selectors: [["bot-first-visit"]], inputs: { firstUsageStory: "firstUsageStory", assets: "assets" }, outputs: { ready: "ready" }, decls: 10, vars: 10, consts: [[1, "bot-logo-init-wrapper"], [3, "src"], [1, "bot-init-text", 3, "innerHTML"], [1, "bot-init-bullet-step"], ["class", "bot-init-dot", 3, "style", "click", 4, "ngFor", "ngForOf"], [1, "bot-init-button-wrapper"], ["mat-button", "", 1, "bot-button", "button-lg", 3, "click"], [1, "bot-init-dot", 3, "click"]], template: function FirstVisitComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵelement(2, "img", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "div", 2);
        i0.ɵɵpipe(4, "safeHtml");
        i0.ɵɵelementStart(5, "div", 3);
        i0.ɵɵtemplate(6, FirstVisitComponent_span_6_Template, 1, 8, "span", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 5);
        i0.ɵɵelementStart(8, "button", 6);
        i0.ɵɵlistener("click", function FirstVisitComponent_Template_button_click_8_listener() { return ctx.start(); });
        i0.ɵɵtext(9, "C'est parti !");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("src", ctx.assets.FullSizeLogo, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind1(4, 5, ctx.current), i0.ɵɵsanitizeHtml);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.firstUsageStory);
        i0.ɵɵadvance(2);
        i0.ɵɵstyleMap(i0.ɵɵpureFunction2(7, _c1, ctx.assets == null ? null : ctx.assets.ColorSet == null ? null : ctx.assets.ColorSet.Primary, ctx.assets == null ? null : ctx.assets.ColorSet == null ? null : ctx.assets.ColorSet.Secondary));
    } }, directives: [i1.NgForOf], pipes: [i2.SafeHtmlPipe], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FirstVisitComponent, [{
        type: Component,
        args: [{
                selector: 'bot-first-visit',
                templateUrl: './first-visit.component.html',
                styleUrls: ['./first-visit.component.scss']
            }]
    }], function () { return []; }, { firstUsageStory: [{
            type: Input
        }], assets: [{
            type: Input
        }], ready: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3QtdmlzaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8va29udmVyc28vIiwic291cmNlcyI6WyJsaWIvZmlyc3QtdmlzaXQvZmlyc3QtdmlzaXQuY29tcG9uZW50LnRzIiwibGliL2ZpcnN0LXZpc2l0L2ZpcnN0LXZpc2l0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNNdkUsK0JBUU87SUFETSwrTkFBbUI7SUFDaEMsaUJBQU87Ozs7SUFQRCwyaUJBTU07OztBRExsQixNQUFNLE9BQU8sbUJBQW1CO0lBTzlCO1FBSlUsVUFBSyxHQUEwQixJQUFJLFlBQVksQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUNuRSxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsWUFBTyxHQUFHLElBQUksQ0FBQztJQUd0QixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUM3QixJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3REO2lCQUFNO2dCQUNMLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN0QjtRQUNILENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxJQUFJLENBQUMsR0FBVztRQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDOztzRkE1QlUsbUJBQW1CO3dEQUFuQixtQkFBbUI7UUNSaEMsNkJBQ0U7UUFBQSw4QkFDRTtRQUFBLHlCQUNGO1FBQUEsaUJBQU07UUFDTix5QkFBa0U7O1FBQ2xFLDhCQUNJO1FBQUEsc0VBUUE7UUFDSixpQkFBTTtRQUNOLDhCQUNFO1FBQUEsaUNBR3FCO1FBQWxCLGdHQUFTLFdBQU8sSUFBQztRQUFDLDZCQUFhO1FBQUEsaUJBQVM7UUFDN0MsaUJBQU07UUFFUiwwQkFBZTs7UUFyQk4sZUFBMkI7UUFBM0IsK0RBQTJCO1FBRVAsZUFBZ0M7UUFBaEMsZ0ZBQWdDO1FBRWpELGVBQXNEO1FBQXRELDZDQUFzRDtRQVdkLGVBRzlDO1FBSDhDLHVPQUc5Qzs7a0REWk8sbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1Qzs7a0JBRUUsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RlZmF1bHRBc3NldHN9IGZyb20gJy4uLy4uL2ludGVyZmFjZS9Lb252ZXJzb0ludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JvdC1maXJzdC12aXNpdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9maXJzdC12aXNpdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZpcnN0LXZpc2l0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmlyc3RWaXNpdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGZpcnN0VXNhZ2VTdG9yeTogc3RyaW5nW107XG4gIEBJbnB1dCgpIGFzc2V0czogRGVmYXVsdEFzc2V0cztcbiAgQE91dHB1dCgpIHJlYWR5OiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KGZhbHNlKTtcbiAgcHVibGljIHBvc2l0aW9uID0gMDtcbiAgcHVibGljIGN1cnJlbnQgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5maXJzdFVzYWdlU3RvcnlbdGhpcy5wb3NpdGlvbl07XG4gICAgY29uc3QgY2xlYXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wb3NpdGlvbiA8ICh0aGlzLmZpcnN0VXNhZ2VTdG9yeS5sZW5ndGggLSAxKSkge1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmZpcnN0VXNhZ2VTdG9yeVsrK3RoaXMucG9zaXRpb25dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjbGVhcik7XG4gICAgICB9XG4gICAgfSwgNTAwMCk7XG4gIH1cblxuICBnb1RvKHBvczogbnVtYmVyKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvcztcbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmZpcnN0VXNhZ2VTdG9yeVt0aGlzLnBvc2l0aW9uXTtcbiAgfVxuXG4gIHN0YXJ0KCk6IHZvaWQge1xuICAgIHRoaXMucmVhZHkuZW1pdCh0cnVlKTtcbiAgfVxuXG59XG4iLCI8bmctY29udGFpbmVyPlxuICA8ZGl2IGNsYXNzPVwiYm90LWxvZ28taW5pdC13cmFwcGVyXCI+XG4gICAgPGltZyBbc3JjXT1cImFzc2V0cy5GdWxsU2l6ZUxvZ29cIj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJib3QtaW5pdC10ZXh0XCIgW2lubmVySFRNTF09XCJjdXJyZW50IHwgc2FmZUh0bWxcIj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImJvdC1pbml0LWJ1bGxldC1zdGVwXCI+XG4gICAgICA8c3BhbiAqbmdGb3I9XCJsZXQgZWxlbSBvZiBmaXJzdFVzYWdlU3RvcnkgOyBsZXQgcG9zID0gaW5kZXhcIiBjbGFzcz1cImJvdC1pbml0LWRvdFwiXG4gICAgICAgICAgICBbc3R5bGVdPVwicG9zID09PSBwb3NpdGlvbiA/IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeSxcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3IgOmFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnlcbiAgICAgICAgICAgICAgfTp7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yIDphc3NldHM/LkNvbG9yU2V0Py5TZWNvbmRhcnksXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3IgOmFzc2V0cz8uQ29sb3JTZXQ/LlByaW1hcnlcbiAgICAgICAgICAgICAgICB9XCIgKGNsaWNrKT1cImdvVG8ocG9zKVwiPlxuICAgICAgPC9zcGFuPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImJvdC1pbml0LWJ1dHRvbi13cmFwcGVyXCI+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwiYm90LWJ1dHRvbiBidXR0b24tbGdcIiBbc3R5bGVdPVwie1xuICAgICAgYmFja2dyb3VuZENvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uUHJpbWFyeSxcbiAgICAgIGNvbG9yIDogYXNzZXRzPy5Db2xvclNldD8uU2Vjb25kYXJ5XG4gICAgfVwiIChjbGljayk9XCJzdGFydCgpXCI+Qydlc3QgcGFydGkgITwvYnV0dG9uPlxuICA8L2Rpdj5cblxuPC9uZy1jb250YWluZXI+XG4iXX0=