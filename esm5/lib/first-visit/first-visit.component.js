import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '../translate.service';
var FirstVisitComponent = /** @class */ (function () {
    function FirstVisitComponent(translate) {
        this.ready = new EventEmitter();
        this.position = 0;
        this.current = '';
        this.go = '';
        this.go = translate.translate('fr', 'GO');
    }
    FirstVisitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.current = this.firstUsageStory[this.position];
        var clear = setInterval(function () {
            if (_this.position < (_this.firstUsageStory.length - 1)) {
                _this.current = _this.firstUsageStory[++_this.position];
            }
            else {
                clearInterval(clear);
            }
        }, 5000);
    };
    FirstVisitComponent.prototype.goTo = function (pos) {
        this.position = pos;
        this.current = this.firstUsageStory[this.position];
    };
    FirstVisitComponent.prototype.start = function () {
        //console.log('OOOKKKK')
        this.ready.emit(true);
    };
    FirstVisitComponent.ctorParameters = function () { return [
        { type: TranslateService }
    ]; };
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
            template: "<ng-container>\n  <div class=\"bot-logo-init-wrapper\">\n    <img [src]=\"assets.FullSizeLogo\">\n  </div>\n  <div class=\"bot-init-text\" [innerHTML]=\"current | safeHtml\"></div>\n  <div class=\"bot-init-bullet-step\">\n      <span *ngFor=\"let elem of firstUsageStory ; let pos = index\" class=\"bot-init-dot\"\n            [style]=\"pos === position ? {\n              backgroundColor : assets?.ColorSet?.Primary,\n              borderColor :assets?.ColorSet?.Primary\n              }:{\n                backgroundColor :assets?.ColorSet?.Secondary,\n                borderColor :assets?.ColorSet?.Primary\n                }\" (click)=\"goTo(pos)\">\n      </span>\n  </div>\n  <div class=\"bot-init-button-wrapper\">\n    <button mat-button class=\"bot-button button-lg\" [style]=\"{\n      backgroundColor : assets?.ColorSet?.Primary,\n      color : assets?.ColorSet?.Secondary\n    }\" (click)=\"start()\">{{ go }}</button>\n  </div>\n\n</ng-container>\n",
            styles: [""]
        })
    ], FirstVisitComponent);
    return FirstVisitComponent;
}());
export { FirstVisitComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3QtdmlzaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8va29udmVyc28vIiwic291cmNlcyI6WyJsaWIvZmlyc3QtdmlzaXQvZmlyc3QtdmlzaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRTdFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBT3hEO0lBUUUsNkJBQVksU0FBMkI7UUFMN0IsVUFBSyxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDO1FBQzlELGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsT0FBRSxHQUFHLEVBQUUsQ0FBQztRQUdiLElBQUksQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsSUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDO1lBQ3hCLElBQUksS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNyRCxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDdEQ7aUJBQU07Z0JBQ0wsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGtDQUFJLEdBQUosVUFBSyxHQUFXO1FBQ2QsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsbUNBQUssR0FBTDtRQUNFLHdCQUF3QjtRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDOztnQkF2QnNCLGdCQUFnQjs7SUFQOUI7UUFBUixLQUFLLEVBQUU7Z0VBQTJCO0lBQzFCO1FBQVIsS0FBSyxFQUFFO3VEQUF1QjtJQUNyQjtRQUFULE1BQU0sRUFBRTtzREFBNEQ7SUFIMUQsbUJBQW1CO1FBTC9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsNjhCQUEyQzs7U0FFNUMsQ0FBQztPQUNXLG1CQUFtQixDQWlDL0I7SUFBRCwwQkFBQztDQUFBLEFBakNELElBaUNDO1NBakNZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RlZmF1bHRBc3NldHN9IGZyb20gJy4uLy4uL2ludGVyZmFjZS9Lb252ZXJzb0ludGVyZmFjZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vdHJhbnNsYXRlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdib3QtZmlyc3QtdmlzaXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmlyc3QtdmlzaXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9maXJzdC12aXNpdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZpcnN0VmlzaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBmaXJzdFVzYWdlU3Rvcnk6IHN0cmluZ1tdO1xuICBASW5wdXQoKSBhc3NldHM6IERlZmF1bHRBc3NldHM7XG4gIEBPdXRwdXQoKSByZWFkeTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBwdWJsaWMgcG9zaXRpb24gPSAwO1xuICBwdWJsaWMgY3VycmVudCA9ICcnO1xuICBwdWJsaWMgZ28gPSAnJztcblxuICBjb25zdHJ1Y3Rvcih0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UpIHtcbiAgICB0aGlzLmdvID0gdHJhbnNsYXRlLnRyYW5zbGF0ZSgnZnInLCAnR08nKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY3VycmVudCA9IHRoaXMuZmlyc3RVc2FnZVN0b3J5W3RoaXMucG9zaXRpb25dO1xuICAgIGNvbnN0IGNsZWFyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucG9zaXRpb24gPCAodGhpcy5maXJzdFVzYWdlU3RvcnkubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5maXJzdFVzYWdlU3RvcnlbKyt0aGlzLnBvc2l0aW9uXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwoY2xlYXIpO1xuICAgICAgfVxuICAgIH0sIDUwMDApO1xuICB9XG5cbiAgZ29Ubyhwb3M6IG51bWJlcikge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3M7XG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5maXJzdFVzYWdlU3RvcnlbdGhpcy5wb3NpdGlvbl07XG4gIH1cblxuICBzdGFydCgpOiB2b2lkIHtcbiAgICAvL2NvbnNvbGUubG9nKCdPT09LS0tLJylcbiAgICB0aGlzLnJlYWR5LmVtaXQodHJ1ZSk7XG4gIH1cblxufVxuIl19