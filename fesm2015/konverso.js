import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class KonversoService {
    constructor() { }
}
KonversoService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: KonversoService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
KonversoService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: KonversoService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: KonversoService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class KonversoComponent {
    constructor() { }
    ngOnInit() {
    }
}
KonversoComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: KonversoComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
KonversoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: KonversoComponent, selector: "lib-konverso", ngImport: i0, template: `
    <p>
      konverso works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: KonversoComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-konverso',
                    template: `
    <p>
      konverso works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class KonversoModule {
}
KonversoModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: KonversoModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
KonversoModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: KonversoModule, declarations: [KonversoComponent], exports: [KonversoComponent] });
KonversoModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: KonversoModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: KonversoModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        KonversoComponent
                    ],
                    imports: [],
                    exports: [
                        KonversoComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of konverso
 */

/**
 * Generated bundle index. Do not edit.
 */

export { KonversoComponent, KonversoModule, KonversoService };
//# sourceMappingURL=konverso.js.map
