(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('konverso', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.konverso = {}, global.ng.core));
})(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var KonversoService = /** @class */ (function () {
        function KonversoService() {
        }
        return KonversoService;
    }());
    KonversoService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: KonversoService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    KonversoService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: KonversoService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: KonversoService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var KonversoComponent = /** @class */ (function () {
        function KonversoComponent() {
        }
        KonversoComponent.prototype.ngOnInit = function () {
        };
        return KonversoComponent;
    }());
    KonversoComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: KonversoComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    KonversoComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: KonversoComponent, selector: "lib-konverso", ngImport: i0__namespace, template: "\n    <p>\n      konverso works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: KonversoComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-konverso',
                        template: "\n    <p>\n      konverso works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var KonversoModule = /** @class */ (function () {
        function KonversoModule() {
        }
        return KonversoModule;
    }());
    KonversoModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: KonversoModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    KonversoModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: KonversoModule, declarations: [KonversoComponent], exports: [KonversoComponent] });
    KonversoModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: KonversoModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0__namespace, type: KonversoModule, decorators: [{
                type: i0.NgModule,
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

    exports.KonversoComponent = KonversoComponent;
    exports.KonversoModule = KonversoModule;
    exports.KonversoService = KonversoService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=konverso.umd.js.map
