import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
let FirstVisitComponent = class FirstVisitComponent {
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
};
__decorate([
    Input()
], FirstVisitComponent.prototype, "firstUsageStory", void 0);
__decorate([
    Input()
], FirstVisitComponent.prototype, "assets", void 0);
__decorate([
    Output()
], FirstVisitComponent.prototype, "ready", void 0);
FirstVisitComponent = __decorate([
    Component({
        selector: 'bot-first-visit',
        template: "<ng-container>\n  <div class=\"bot-logo-init-wrapper\">\n    <img [src]=\"assets.FullSizeLogo\">\n  </div>\n  <div class=\"bot-init-text\" [innerHTML]=\"current | safeHtml\"></div>\n  <div class=\"bot-init-bullet-step\">\n      <span *ngFor=\"let elem of firstUsageStory ; let pos = index\" class=\"bot-init-dot\"\n            [style]=\"pos === position ? {\n              backgroundColor : assets?.ColorSet?.Primary,\n              borderColor :assets?.ColorSet?.Primary\n              }:{\n                backgroundColor :assets?.ColorSet?.Secondary,\n                borderColor :assets?.ColorSet?.Primary\n                }\" (click)=\"goTo(pos)\">\n      </span>\n  </div>\n  <div class=\"bot-init-button-wrapper\">\n    <button mat-button class=\"bot-button button-lg\" [style]=\"{\n      backgroundColor : assets?.ColorSet?.Primary,\n      color : assets?.ColorSet?.Secondary\n    }\" (click)=\"start()\">C'est parti !</button>\n  </div>\n\n</ng-container>\n",
        styles: [""]
    })
], FirstVisitComponent);
export { FirstVisitComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3QtdmlzaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8va29udmVyc28vIiwic291cmNlcyI6WyJsaWIvZmlyc3QtdmlzaXQvZmlyc3QtdmlzaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBUTdFLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBTzlCO1FBSlUsVUFBSyxHQUEwQixJQUFJLFlBQVksQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUNuRSxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsWUFBTyxHQUFHLElBQUksQ0FBQztJQUd0QixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUM3QixJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3REO2lCQUFNO2dCQUNMLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN0QjtRQUNILENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxJQUFJLENBQUMsR0FBVztRQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0NBRUYsQ0FBQTtBQTdCVTtJQUFSLEtBQUssRUFBRTs0REFBMkI7QUFDMUI7SUFBUixLQUFLLEVBQUU7bURBQXVCO0FBQ3JCO0lBQVQsTUFBTSxFQUFFO2tEQUFpRTtBQUgvRCxtQkFBbUI7SUFML0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixrOUJBQTJDOztLQUU1QyxDQUFDO0dBQ1csbUJBQW1CLENBOEIvQjtTQTlCWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEZWZhdWx0QXNzZXRzfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvS29udmVyc29JbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdib3QtZmlyc3QtdmlzaXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlyc3QtdmlzaXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maXJzdC12aXNpdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZpcnN0VmlzaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmaXJzdFVzYWdlU3Rvcnk6IHN0cmluZ1tdO1xuICBASW5wdXQoKSBhc3NldHM6IERlZmF1bHRBc3NldHM7XG4gIEBPdXRwdXQoKSByZWFkeTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPihmYWxzZSk7XG4gIHB1YmxpYyBwb3NpdGlvbiA9IDA7XG4gIHB1YmxpYyBjdXJyZW50ID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY3VycmVudCA9IHRoaXMuZmlyc3RVc2FnZVN0b3J5W3RoaXMucG9zaXRpb25dO1xuICAgIGNvbnN0IGNsZWFyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucG9zaXRpb24gPCAodGhpcy5maXJzdFVzYWdlU3RvcnkubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5maXJzdFVzYWdlU3RvcnlbKyt0aGlzLnBvc2l0aW9uXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoY2xlYXIpO1xuICAgICAgfVxuICAgIH0sIDUwMDApO1xuICB9XG5cbiAgZ29Ubyhwb3M6IG51bWJlcikge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3M7XG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5maXJzdFVzYWdlU3RvcnlbdGhpcy5wb3NpdGlvbl07XG4gIH1cblxuICBzdGFydCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlYWR5LmVtaXQodHJ1ZSk7XG4gIH1cblxufVxuIl19