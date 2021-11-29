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
    KonversoService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function KonversoService_Factory() { return new KonversoService(); }, token: KonversoService, providedIn: "root" });
    KonversoService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    KonversoService.ctorParameters = function () { return []; };

    var KonversoComponent = /** @class */ (function () {
        function KonversoComponent() {
        }
        KonversoComponent.prototype.ngOnInit = function () {
        };
        return KonversoComponent;
    }());
    KonversoComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-konverso',
                    template: "\n    <p>\n      konverso works!\n    </p>\n  "
                },] }
    ];
    KonversoComponent.ctorParameters = function () { return []; };

    var KonversoModule = /** @class */ (function () {
        function KonversoModule() {
        }
        return KonversoModule;
    }());
    KonversoModule.decorators = [
        { type: i0.NgModule, args: [{
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

    exports.KonversoComponent = KonversoComponent;
    exports.KonversoModule = KonversoModule;
    exports.KonversoService = KonversoService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=konverso.umd.js.map
