import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class KonversoService {
    constructor() { }
}
KonversoService.ɵprov = i0.ɵɵdefineInjectable({ factory: function KonversoService_Factory() { return new KonversoService(); }, token: KonversoService, providedIn: "root" });
KonversoService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
KonversoService.ctorParameters = () => [];

class KonversoComponent {
    constructor() { }
    ngOnInit() {
    }
}
KonversoComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-konverso',
                template: `
    <p>
      konverso works!
    </p>
  `
            },] }
];
KonversoComponent.ctorParameters = () => [];

class KonversoModule {
}
KonversoModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    KonversoComponent
                ],
                imports: [],
                exports: [
                    KonversoComponent
                ]
            },] }
];

/*
 * Public API Surface of konverso
 */

/**
 * Generated bundle index. Do not edit.
 */

export { KonversoComponent, KonversoModule, KonversoService };
//# sourceMappingURL=konverso.js.map
