import { ModuleWithProviders } from '@angular/core';
import { KonversoInterface } from '../interface/KonversoInterface';
import * as i0 from "@angular/core";
import * as i1 from "./konverso.component";
import * as i2 from "./desktop-full-screen/desktop-full-screen.component";
import * as i3 from "./first-visit/first-visit.component";
import * as i4 from "./pipe/safe-html.pipe";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/common/http";
import * as i7 from "@angular/common";
export declare class KonversoModule {
    constructor(parentModule?: KonversoModule);
    static forRoot(config: KonversoInterface): ModuleWithProviders<KonversoModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<KonversoModule, [typeof i1.KonversoComponent, typeof i2.DesktopFullScreenComponent, typeof i3.FirstVisitComponent, typeof i4.SafeHtmlPipe], [typeof i5.FormsModule, typeof i6.HttpClientModule, typeof i7.CommonModule], [typeof i1.KonversoComponent]>;
    static ɵinj: i0.ɵɵInjectorDef<KonversoModule>;
}
