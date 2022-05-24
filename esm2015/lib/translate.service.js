import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
let TranslateService = class TranslateService {
    constructor() {
        this.lang = {
            'fr': {
                'GO': `C'est parti`,
                'SEND': 'Envoyer',
                'SELECT': 'Vous devez sélectionner une réponse',
                'MONDAY': 'Lundi',
                "TUESDAY": 'Mardi',
                "WEDNESDAY": 'Mercredi',
                "THURSDAY": 'Jeudi',
                "FRIDAY": 'Vendredi',
                "SATURDAY": 'Samedi',
                "SUNDAY": 'Dimanche',
            },
            'en': {
                'GO': `Let's go`,
                'SEND': 'Send',
                'SELECT': 'You must select an answer',
                'MONDAY': 'Monday',
                "TUESDAY": 'Tuesday',
                "WEDNESDAY": 'Wednesday',
                "THURSDAY": 'Thursday',
                "FRIDAY": 'Friday',
                "SATURDAY": 'Saturday',
                "SUNDAY": 'Sunday',
            }
        };
    }
    translate(l, word) {
        return this.lang[l][word];
    }
};
TranslateService.ɵprov = i0.ɵɵdefineInjectable({ factory: function TranslateService_Factory() { return new TranslateService(); }, token: TranslateService, providedIn: "root" });
TranslateService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TranslateService);
export { TranslateService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rb252ZXJzby8iLCJzb3VyY2VzIjpbImxpYi90cmFuc2xhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUE0QjNCO1FBM0JRLFNBQUksR0FBRztZQUNYLElBQUksRUFBRTtnQkFDRixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLFFBQVEsRUFBRSxxQ0FBcUM7Z0JBQy9DLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixTQUFTLEVBQUUsT0FBTztnQkFDbEIsV0FBVyxFQUFFLFVBQVU7Z0JBQ3ZCLFVBQVUsRUFBRSxPQUFPO2dCQUNuQixRQUFRLEVBQUUsVUFBVTtnQkFDcEIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLFFBQVEsRUFBRSxVQUFVO2FBQ3ZCO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLElBQUksRUFBRSxVQUFVO2dCQUNoQixNQUFNLEVBQUUsTUFBTTtnQkFDZCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLFdBQVcsRUFBRSxXQUFXO2dCQUN4QixVQUFVLEVBQUUsVUFBVTtnQkFDdEIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFVBQVUsRUFBRSxVQUFVO2dCQUN0QixRQUFRLEVBQUUsUUFBUTthQUNyQjtTQUNKLENBQUE7SUFFZSxDQUFDO0lBRVYsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0YsQ0FBQTs7QUFqQ1ksZ0JBQWdCO0lBSDVCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxnQkFBZ0IsQ0FpQzVCO1NBakNZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlU2VydmljZSB7XG4gIHByaXZhdGUgbGFuZyA9IHtcbiAgICAgICdmcic6IHtcbiAgICAgICAgICAnR08nOiBgQydlc3QgcGFydGlgLFxuICAgICAgICAgICdTRU5EJzogJ0Vudm95ZXInLFxuICAgICAgICAgICdTRUxFQ1QnOiAnVm91cyBkZXZleiBzw6lsZWN0aW9ubmVyIHVuZSByw6lwb25zZScsXG4gICAgICAgICAgJ01PTkRBWSc6ICdMdW5kaScsXG4gICAgICAgICAgXCJUVUVTREFZXCI6ICdNYXJkaScsXG4gICAgICAgICAgXCJXRURORVNEQVlcIjogJ01lcmNyZWRpJyxcbiAgICAgICAgICBcIlRIVVJTREFZXCI6ICdKZXVkaScsXG4gICAgICAgICAgXCJGUklEQVlcIjogJ1ZlbmRyZWRpJyxcbiAgICAgICAgICBcIlNBVFVSREFZXCI6ICdTYW1lZGknLFxuICAgICAgICAgIFwiU1VOREFZXCI6ICdEaW1hbmNoZScsXG4gICAgICB9LFxuICAgICAgJ2VuJzoge1xuICAgICAgICAgICdHTyc6IGBMZXQncyBnb2AsXG4gICAgICAgICAgJ1NFTkQnOiAnU2VuZCcsXG4gICAgICAgICAgJ1NFTEVDVCc6ICdZb3UgbXVzdCBzZWxlY3QgYW4gYW5zd2VyJyxcbiAgICAgICAgICAnTU9OREFZJzogJ01vbmRheScsXG4gICAgICAgICAgXCJUVUVTREFZXCI6ICdUdWVzZGF5JyxcbiAgICAgICAgICBcIldFRE5FU0RBWVwiOiAnV2VkbmVzZGF5JyxcbiAgICAgICAgICBcIlRIVVJTREFZXCI6ICdUaHVyc2RheScsXG4gICAgICAgICAgXCJGUklEQVlcIjogJ0ZyaWRheScsXG4gICAgICAgICAgXCJTQVRVUkRBWVwiOiAnU2F0dXJkYXknLFxuICAgICAgICAgIFwiU1VOREFZXCI6ICdTdW5kYXknLFxuICAgICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwdWJsaWMgdHJhbnNsYXRlKGwsIHdvcmQpIHtcbiAgICByZXR1cm4gdGhpcy5sYW5nW2xdW3dvcmRdO1xuICB9XG59XG4iXX0=