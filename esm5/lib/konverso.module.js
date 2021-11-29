import { __decorate, __param } from "tslib";
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { KonversoComponent } from './konverso.component';
import { KonversoService } from './konverso.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DesktopFullScreenComponent } from './desktop-full-screen/desktop-full-screen.component';
import { CommonModule } from '@angular/common';
import { FirstVisitComponent } from './first-visit/first-visit.component';
import { SafeHtmlPipe } from './pipe/safe-html.pipe';
// @ts-ignore
var KonversoModule = /** @class */ (function () {
    function KonversoModule(parentModule) {
        if (parentModule) {
            throw new Error('KonversoModule is already loaded. Import it in the AppModule only');
        }
    }
    KonversoModule_1 = KonversoModule;
    KonversoModule.forRoot = function (config) {
        return {
            ngModule: KonversoModule_1,
            providers: [
                { provide: '__NgxKonverso__', useValue: config },
                KonversoService
            ]
        };
    };
    var KonversoModule_1;
    KonversoModule.ctorParameters = function () { return [
        { type: KonversoModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    KonversoModule = KonversoModule_1 = __decorate([
        NgModule({
            declarations: [KonversoComponent, DesktopFullScreenComponent, FirstVisitComponent, SafeHtmlPipe],
            imports: [
                FormsModule,
                HttpClientModule,
                CommonModule,
            ],
            providers: [KonversoService],
            exports: [KonversoComponent]
        }),
        __param(0, Optional()), __param(0, SkipSelf())
    ], KonversoModule);
    return KonversoModule;
}());
export { KonversoModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29udmVyc28ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va29udmVyc28vIiwic291cmNlcyI6WyJsaWIva29udmVyc28ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQXNCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRXZELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDL0YsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVyRCxhQUFhO0FBV2I7SUFDRSx3QkFBb0MsWUFBNkI7UUFDL0QsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FDYixtRUFBbUUsQ0FBQyxDQUFDO1NBQ3hFO0lBQ0gsQ0FBQzt1QkFOVSxjQUFjO0lBUVgsc0JBQU8sR0FBckIsVUFBc0IsTUFBeUI7UUFDN0MsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1QsRUFBQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQztnQkFDOUMsZUFBZTthQUNoQjtTQUNGLENBQUM7SUFDSixDQUFDOzs7Z0JBZmtELGNBQWMsdUJBQXBELFFBQVEsWUFBSSxRQUFROztJQUR0QixjQUFjO1FBVjFCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLDBCQUEwQixFQUFFLG1CQUFtQixFQUFFLFlBQVksQ0FBQztZQUNoRyxPQUFPLEVBQUU7Z0JBQ1AsV0FBVztnQkFDWCxnQkFBZ0I7Z0JBQ2hCLFlBQVk7YUFDYjtZQUNELFNBQVMsRUFBRyxDQUFDLGVBQWUsQ0FBQztZQUM3QixPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztTQUM3QixDQUFDO1FBRWEsV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsUUFBUSxFQUFFLENBQUE7T0FEeEIsY0FBYyxDQWlCMUI7SUFBRCxxQkFBQztDQUFBLEFBakJELElBaUJDO1NBakJZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBPcHRpb25hbCwgU2tpcFNlbGZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtLb252ZXJzb0NvbXBvbmVudH0gZnJvbSAnLi9rb252ZXJzby5jb21wb25lbnQnO1xuaW1wb3J0IHtLb252ZXJzb0ludGVyZmFjZX0gZnJvbSAnLi4vaW50ZXJmYWNlL0tvbnZlcnNvSW50ZXJmYWNlJztcbmltcG9ydCB7S29udmVyc29TZXJ2aWNlfSBmcm9tICcuL2tvbnZlcnNvLnNlcnZpY2UnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0Rlc2t0b3BGdWxsU2NyZWVuQ29tcG9uZW50fSBmcm9tICcuL2Rlc2t0b3AtZnVsbC1zY3JlZW4vZGVza3RvcC1mdWxsLXNjcmVlbi5jb21wb25lbnQnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGaXJzdFZpc2l0Q29tcG9uZW50IH0gZnJvbSAnLi9maXJzdC12aXNpdC9maXJzdC12aXNpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2FmZUh0bWxQaXBlIH0gZnJvbSAnLi9waXBlL3NhZmUtaHRtbC5waXBlJztcblxuLy8gQHRzLWlnbm9yZVxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbS29udmVyc29Db21wb25lbnQsIERlc2t0b3BGdWxsU2NyZWVuQ29tcG9uZW50LCBGaXJzdFZpc2l0Q29tcG9uZW50LCBTYWZlSHRtbFBpcGVdLFxuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVycyA6IFtLb252ZXJzb1NlcnZpY2VdLFxuICBleHBvcnRzOiBbS29udmVyc29Db21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEtvbnZlcnNvTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlPzogS29udmVyc29Nb2R1bGUpIHtcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdLb252ZXJzb01vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWc6IEtvbnZlcnNvSW50ZXJmYWNlKTogTW9kdWxlV2l0aFByb3ZpZGVyczxLb252ZXJzb01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogS29udmVyc29Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge3Byb3ZpZGU6ICdfX05neEtvbnZlcnNvX18nLCB1c2VWYWx1ZTogY29uZmlnfSxcbiAgICAgICAgS29udmVyc29TZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19