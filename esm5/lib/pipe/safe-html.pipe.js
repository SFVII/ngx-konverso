import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var SafeHtmlPipe = /** @class */ (function () {
    function SafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    SafeHtmlPipe = __decorate([
        Pipe({
            name: 'safeHtml'
        })
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
}());
export { SafeHtmlPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS1odG1sLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rb252ZXJzby8iLCJzb3VyY2VzIjpbImxpYi9waXBlL3NhZmUtaHRtbC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFLdkQ7SUFDRSxzQkFBc0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUFHLENBQUM7SUFDMUMsZ0NBQVMsR0FBaEIsVUFBaUIsS0FBVTtRQUN6QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7Z0JBSGdDLFlBQVk7O0lBRGxDLFlBQVk7UUFIeEIsSUFBSSxDQUFDO1lBQ0osSUFBSSxFQUFFLFVBQVU7U0FDakIsQ0FBQztPQUNXLFlBQVksQ0FLeEI7SUFBRCxtQkFBQztDQUFBLEFBTEQsSUFLQztTQUxZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RvbVNhbml0aXplcn0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3NhZmVIdG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBTYWZlSHRtbFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7fVxuICBwdWJsaWMgdHJhbnNmb3JtKHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==