import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
let FirstVisitComponent = class FirstVisitComponent {
    constructor() {
        this.ready = new EventEmitter();
        this.position = 0;
        this.current = '';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3QtdmlzaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8va29udmVyc28vIiwic291cmNlcyI6WyJsaWIvZmlyc3QtdmlzaXQvZmlyc3QtdmlzaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBUTdFLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBTzlCO1FBSlUsVUFBSyxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBQzlELGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixZQUFPLEdBQUcsRUFBRSxDQUFDO0lBR3BCLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRCxNQUFNLEtBQUssR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFO1lBQzdCLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNyRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDdEQ7aUJBQU07Z0JBQ0wsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELElBQUksQ0FBQyxHQUFXO1FBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsS0FBSztRQUNILHdCQUF3QjtRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0NBRUYsQ0FBQTtBQTlCVTtJQUFSLEtBQUssRUFBRTs0REFBMkI7QUFDMUI7SUFBUixLQUFLLEVBQUU7bURBQXVCO0FBQ3JCO0lBQVQsTUFBTSxFQUFFO2tEQUE0RDtBQUgxRCxtQkFBbUI7SUFML0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixrOUJBQTJDOztLQUU1QyxDQUFDO0dBQ1csbUJBQW1CLENBK0IvQjtTQS9CWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEZWZhdWx0QXNzZXRzfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UvS29udmVyc29JbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdib3QtZmlyc3QtdmlzaXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlyc3QtdmlzaXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maXJzdC12aXNpdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZpcnN0VmlzaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmaXJzdFVzYWdlU3Rvcnk6IHN0cmluZ1tdO1xuICBASW5wdXQoKSBhc3NldHM6IERlZmF1bHRBc3NldHM7XG4gIEBPdXRwdXQoKSByZWFkeTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBwdWJsaWMgcG9zaXRpb24gPSAwO1xuICBwdWJsaWMgY3VycmVudCA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5maXJzdFVzYWdlU3RvcnlbdGhpcy5wb3NpdGlvbl07XG4gICAgY29uc3QgY2xlYXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wb3NpdGlvbiA8ICh0aGlzLmZpcnN0VXNhZ2VTdG9yeS5sZW5ndGggLSAxKSkge1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmZpcnN0VXNhZ2VTdG9yeVsrK3RoaXMucG9zaXRpb25dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjbGVhcik7XG4gICAgICB9XG4gICAgfSwgNTAwMCk7XG4gIH1cblxuICBnb1RvKHBvczogbnVtYmVyKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvcztcbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmZpcnN0VXNhZ2VTdG9yeVt0aGlzLnBvc2l0aW9uXTtcbiAgfVxuXG4gIHN0YXJ0KCk6IHZvaWQge1xuICAgIC8vY29uc29sZS5sb2coJ09PT0tLS0snKVxuICAgIHRoaXMucmVhZHkuZW1pdCh0cnVlKTtcbiAgfVxuXG59XG4iXX0=