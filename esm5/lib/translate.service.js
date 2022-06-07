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
                "OTHER": "Autre",
                "FREE_FIELD": 'Champ libre',
                "VALIDATE": 'Valider',
                "SKIP": 'Passer',
                "MORNING": "Matin",
                "AFTERNOON": "Après-midi",
                "MORNING_ALL": 'Matin (tous)',
                "AFTERNOON_ALL": 'Après-midi (tous)',
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
                "OTHER": 'Other',
                "FREE_FIELD": 'Free field',
                "VALIDATE": 'Validate',
                "SKIP": 'Skip',
                "MORNING": "Morning",
                "AFTERNOON": "Afternoon",
                "MORNING_ALL": 'Morning (all)',
                "AFTERNOON_ALL": 'Afternoon (all)',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rb252ZXJzby8iLCJzb3VyY2VzIjpbImxpYi90cmFuc2xhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0M7SUE0Q0U7UUEzQ1EsU0FBSSxHQUFHO1lBQ1gsSUFBSSxFQUFFO2dCQUNGLElBQUksRUFBRSxhQUFhO2dCQUNuQixNQUFNLEVBQUUsU0FBUztnQkFDakIsUUFBUSxFQUFFLHFDQUFxQztnQkFDL0MsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixXQUFXLEVBQUUsVUFBVTtnQkFDdkIsVUFBVSxFQUFFLE9BQU87Z0JBQ25CLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixZQUFZLEVBQUUsYUFBYTtnQkFDM0IsVUFBVSxFQUFFLFNBQVM7Z0JBQ3JCLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixTQUFTLEVBQUUsT0FBTztnQkFDbEIsV0FBVyxFQUFFLFlBQVk7Z0JBQ3pCLGFBQWEsRUFBRSxjQUFjO2dCQUM3QixlQUFlLEVBQUUsbUJBQW1CO2FBQ3ZDO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLElBQUksRUFBRSxVQUFVO2dCQUNoQixNQUFNLEVBQUUsTUFBTTtnQkFDZCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLFdBQVcsRUFBRSxXQUFXO2dCQUN4QixVQUFVLEVBQUUsVUFBVTtnQkFDdEIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFVBQVUsRUFBRSxVQUFVO2dCQUN0QixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLFlBQVksRUFBRSxZQUFZO2dCQUMxQixVQUFVLEVBQUUsVUFBVTtnQkFDdEIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLFdBQVcsRUFBRSxXQUFXO2dCQUN4QixhQUFhLEVBQUUsZUFBZTtnQkFDOUIsZUFBZSxFQUFFLGlCQUFpQjthQUNyQztTQUNKLENBQUE7SUFFZSxDQUFDO0lBRVYsb0NBQVMsR0FBaEIsVUFBaUIsQ0FBQyxFQUFFLElBQUk7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7O0lBaERVLGdCQUFnQjtRQUg1QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csZ0JBQWdCLENBaUQ1QjsyQkF0REQ7Q0FzREMsQUFqREQsSUFpREM7U0FqRFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsYW5nID0ge1xuICAgICAgJ2ZyJzoge1xuICAgICAgICAgICdHTyc6IGBDJ2VzdCBwYXJ0aWAsXG4gICAgICAgICAgJ1NFTkQnOiAnRW52b3llcicsXG4gICAgICAgICAgJ1NFTEVDVCc6ICdWb3VzIGRldmV6IHPDqWxlY3Rpb25uZXIgdW5lIHLDqXBvbnNlJyxcbiAgICAgICAgICAnTU9OREFZJzogJ0x1bmRpJyxcbiAgICAgICAgICBcIlRVRVNEQVlcIjogJ01hcmRpJyxcbiAgICAgICAgICBcIldFRE5FU0RBWVwiOiAnTWVyY3JlZGknLFxuICAgICAgICAgIFwiVEhVUlNEQVlcIjogJ0pldWRpJyxcbiAgICAgICAgICBcIkZSSURBWVwiOiAnVmVuZHJlZGknLFxuICAgICAgICAgIFwiU0FUVVJEQVlcIjogJ1NhbWVkaScsXG4gICAgICAgICAgXCJTVU5EQVlcIjogJ0RpbWFuY2hlJyxcbiAgICAgICAgICBcIk9USEVSXCI6IFwiQXV0cmVcIixcbiAgICAgICAgICBcIkZSRUVfRklFTERcIjogJ0NoYW1wIGxpYnJlJyxcbiAgICAgICAgICBcIlZBTElEQVRFXCI6ICdWYWxpZGVyJyxcbiAgICAgICAgICBcIlNLSVBcIjogJ1Bhc3NlcicsXG4gICAgICAgICAgXCJNT1JOSU5HXCI6IFwiTWF0aW5cIixcbiAgICAgICAgICBcIkFGVEVSTk9PTlwiOiBcIkFwcsOocy1taWRpXCIsXG4gICAgICAgICAgXCJNT1JOSU5HX0FMTFwiOiAnTWF0aW4gKHRvdXMpJyxcbiAgICAgICAgICBcIkFGVEVSTk9PTl9BTExcIjogJ0FwcsOocy1taWRpICh0b3VzKScsXG4gICAgICB9LFxuICAgICAgJ2VuJzoge1xuICAgICAgICAgICdHTyc6IGBMZXQncyBnb2AsXG4gICAgICAgICAgJ1NFTkQnOiAnU2VuZCcsXG4gICAgICAgICAgJ1NFTEVDVCc6ICdZb3UgbXVzdCBzZWxlY3QgYW4gYW5zd2VyJyxcbiAgICAgICAgICAnTU9OREFZJzogJ01vbmRheScsXG4gICAgICAgICAgXCJUVUVTREFZXCI6ICdUdWVzZGF5JyxcbiAgICAgICAgICBcIldFRE5FU0RBWVwiOiAnV2VkbmVzZGF5JyxcbiAgICAgICAgICBcIlRIVVJTREFZXCI6ICdUaHVyc2RheScsXG4gICAgICAgICAgXCJGUklEQVlcIjogJ0ZyaWRheScsXG4gICAgICAgICAgXCJTQVRVUkRBWVwiOiAnU2F0dXJkYXknLFxuICAgICAgICAgIFwiU1VOREFZXCI6ICdTdW5kYXknLFxuICAgICAgICAgIFwiT1RIRVJcIjogJ090aGVyJyxcbiAgICAgICAgICBcIkZSRUVfRklFTERcIjogJ0ZyZWUgZmllbGQnLFxuICAgICAgICAgIFwiVkFMSURBVEVcIjogJ1ZhbGlkYXRlJyxcbiAgICAgICAgICBcIlNLSVBcIjogJ1NraXAnLFxuICAgICAgICAgIFwiTU9STklOR1wiOiBcIk1vcm5pbmdcIixcbiAgICAgICAgICBcIkFGVEVSTk9PTlwiOiBcIkFmdGVybm9vblwiLFxuICAgICAgICAgIFwiTU9STklOR19BTExcIjogJ01vcm5pbmcgKGFsbCknLFxuICAgICAgICAgIFwiQUZURVJOT09OX0FMTFwiOiAnQWZ0ZXJub29uIChhbGwpJyxcbiAgICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIHRyYW5zbGF0ZShsLCB3b3JkKSB7XG4gICAgcmV0dXJuIHRoaXMubGFuZ1tsXVt3b3JkXTtcbiAgfVxufVxuIl19