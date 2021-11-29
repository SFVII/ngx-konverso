import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var TranslateService = /** @class */ (function () {
    function TranslateService() {
        this.lang = {
            'fr': {
                'GO': "C'est parti",
                'SEND': 'Envoyer',
                'SELECT': 'Vous devez sélectionner une réponse',
            },
            'en': {
                'GO': "Let's go",
                'SEND': 'Send',
                'SELECT': 'You must select an answer',
            }
        };
    }
    TranslateService.prototype.translate = function (l, word) {
        return this.lang[l][word];
    };
    TranslateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TranslateService_Factory() { return new TranslateService(); }, token: TranslateService, providedIn: "root" });
    TranslateService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], TranslateService);
    return TranslateService;
}());
export { TranslateService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rb252ZXJzby8iLCJzb3VyY2VzIjpbImxpYi90cmFuc2xhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0M7SUFjRTtRQWJRLFNBQUksR0FBRztZQUNYLElBQUksRUFBRTtnQkFDRixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLFFBQVEsRUFBRSxxQ0FBcUM7YUFDbEQ7WUFDRCxJQUFJLEVBQUU7Z0JBQ0YsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLFFBQVEsRUFBRSwyQkFBMkI7YUFDeEM7U0FDSixDQUFBO0lBRWUsQ0FBQztJQUVWLG9DQUFTLEdBQWhCLFVBQWlCLENBQUMsRUFBRSxJQUFJO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOztJQWxCVSxnQkFBZ0I7UUFINUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGdCQUFnQixDQW1CNUI7MkJBeEJEO0NBd0JDLEFBbkJELElBbUJDO1NBbkJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlU2VydmljZSB7XG4gIHByaXZhdGUgbGFuZyA9IHtcbiAgICAgICdmcic6IHtcbiAgICAgICAgICAnR08nOiBgQydlc3QgcGFydGlgLFxuICAgICAgICAgICdTRU5EJzogJ0Vudm95ZXInLFxuICAgICAgICAgICdTRUxFQ1QnOiAnVm91cyBkZXZleiBzw6lsZWN0aW9ubmVyIHVuZSByw6lwb25zZScsXG4gICAgICB9LFxuICAgICAgJ2VuJzoge1xuICAgICAgICAgICdHTyc6IGBMZXQncyBnb2AsXG4gICAgICAgICAgJ1NFTkQnOiAnU2VuZCcsXG4gICAgICAgICAgJ1NFTEVDVCc6ICdZb3UgbXVzdCBzZWxlY3QgYW4gYW5zd2VyJyxcbiAgICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIHRyYW5zbGF0ZShsLCB3b3JkKSB7XG4gICAgcmV0dXJuIHRoaXMubGFuZ1tsXVt3b3JkXTtcbiAgfVxufVxuIl19