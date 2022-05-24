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
                'MONDAY': 'Lundi',
                "TUESDAY": 'Mardi',
                "WEDNESDAY": 'Mercredi',
                "THURSDAY": 'Jeudi',
                "FRIDAY": 'Vendredi',
                "SATURDAY": 'Samedi',
                "SUNDAY": 'Dimanche',
            },
            'en': {
                'GO': "Let's go",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rb252ZXJzby8iLCJzb3VyY2VzIjpbImxpYi90cmFuc2xhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0M7SUE0QkU7UUEzQlEsU0FBSSxHQUFHO1lBQ1gsSUFBSSxFQUFFO2dCQUNGLElBQUksRUFBRSxhQUFhO2dCQUNuQixNQUFNLEVBQUUsU0FBUztnQkFDakIsUUFBUSxFQUFFLHFDQUFxQztnQkFDL0MsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixXQUFXLEVBQUUsVUFBVTtnQkFDdkIsVUFBVSxFQUFFLE9BQU87Z0JBQ25CLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsUUFBUSxFQUFFLFVBQVU7YUFDdkI7WUFDRCxJQUFJLEVBQUU7Z0JBQ0YsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixTQUFTLEVBQUUsU0FBUztnQkFDcEIsV0FBVyxFQUFFLFdBQVc7Z0JBQ3hCLFVBQVUsRUFBRSxVQUFVO2dCQUN0QixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCLFFBQVEsRUFBRSxRQUFRO2FBQ3JCO1NBQ0osQ0FBQTtJQUVlLENBQUM7SUFFVixvQ0FBUyxHQUFoQixVQUFpQixDQUFDLEVBQUUsSUFBSTtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7SUFoQ1UsZ0JBQWdCO1FBSDVCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxnQkFBZ0IsQ0FpQzVCOzJCQXRDRDtDQXNDQyxBQWpDRCxJQWlDQztTQWpDWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVNlcnZpY2Uge1xuICBwcml2YXRlIGxhbmcgPSB7XG4gICAgICAnZnInOiB7XG4gICAgICAgICAgJ0dPJzogYEMnZXN0IHBhcnRpYCxcbiAgICAgICAgICAnU0VORCc6ICdFbnZveWVyJyxcbiAgICAgICAgICAnU0VMRUNUJzogJ1ZvdXMgZGV2ZXogc8OpbGVjdGlvbm5lciB1bmUgcsOpcG9uc2UnLFxuICAgICAgICAgICdNT05EQVknOiAnTHVuZGknLFxuICAgICAgICAgIFwiVFVFU0RBWVwiOiAnTWFyZGknLFxuICAgICAgICAgIFwiV0VETkVTREFZXCI6ICdNZXJjcmVkaScsXG4gICAgICAgICAgXCJUSFVSU0RBWVwiOiAnSmV1ZGknLFxuICAgICAgICAgIFwiRlJJREFZXCI6ICdWZW5kcmVkaScsXG4gICAgICAgICAgXCJTQVRVUkRBWVwiOiAnU2FtZWRpJyxcbiAgICAgICAgICBcIlNVTkRBWVwiOiAnRGltYW5jaGUnLFxuICAgICAgfSxcbiAgICAgICdlbic6IHtcbiAgICAgICAgICAnR08nOiBgTGV0J3MgZ29gLFxuICAgICAgICAgICdTRU5EJzogJ1NlbmQnLFxuICAgICAgICAgICdTRUxFQ1QnOiAnWW91IG11c3Qgc2VsZWN0IGFuIGFuc3dlcicsXG4gICAgICAgICAgJ01PTkRBWSc6ICdNb25kYXknLFxuICAgICAgICAgIFwiVFVFU0RBWVwiOiAnVHVlc2RheScsXG4gICAgICAgICAgXCJXRURORVNEQVlcIjogJ1dlZG5lc2RheScsXG4gICAgICAgICAgXCJUSFVSU0RBWVwiOiAnVGh1cnNkYXknLFxuICAgICAgICAgIFwiRlJJREFZXCI6ICdGcmlkYXknLFxuICAgICAgICAgIFwiU0FUVVJEQVlcIjogJ1NhdHVyZGF5JyxcbiAgICAgICAgICBcIlNVTkRBWVwiOiAnU3VuZGF5JyxcbiAgICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIHRyYW5zbGF0ZShsLCB3b3JkKSB7XG4gICAgcmV0dXJuIHRoaXMubGFuZ1tsXVt3b3JkXTtcbiAgfVxufVxuIl19