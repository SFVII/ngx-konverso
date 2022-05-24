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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rb252ZXJzby8iLCJzb3VyY2VzIjpbImxpYi90cmFuc2xhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0M7SUFnQ0U7UUEvQlEsU0FBSSxHQUFHO1lBQ1gsSUFBSSxFQUFFO2dCQUNGLElBQUksRUFBRSxhQUFhO2dCQUNuQixNQUFNLEVBQUUsU0FBUztnQkFDakIsUUFBUSxFQUFFLHFDQUFxQztnQkFDL0MsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixXQUFXLEVBQUUsVUFBVTtnQkFDdkIsVUFBVSxFQUFFLE9BQU87Z0JBQ25CLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixZQUFZLEVBQUUsYUFBYTthQUM5QjtZQUNELElBQUksRUFBRTtnQkFDRixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFNBQVMsRUFBRSxTQUFTO2dCQUNwQixXQUFXLEVBQUUsV0FBVztnQkFDeEIsVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixVQUFVLEVBQUUsVUFBVTtnQkFDdEIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixZQUFZLEVBQUUsWUFBWTthQUM3QjtTQUNKLENBQUE7SUFFZSxDQUFDO0lBRVYsb0NBQVMsR0FBaEIsVUFBaUIsQ0FBQyxFQUFFLElBQUk7UUFDdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7O0lBcENVLGdCQUFnQjtRQUg1QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csZ0JBQWdCLENBcUM1QjsyQkExQ0Q7Q0EwQ0MsQUFyQ0QsSUFxQ0M7U0FyQ1ksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsYW5nID0ge1xuICAgICAgJ2ZyJzoge1xuICAgICAgICAgICdHTyc6IGBDJ2VzdCBwYXJ0aWAsXG4gICAgICAgICAgJ1NFTkQnOiAnRW52b3llcicsXG4gICAgICAgICAgJ1NFTEVDVCc6ICdWb3VzIGRldmV6IHPDqWxlY3Rpb25uZXIgdW5lIHLDqXBvbnNlJyxcbiAgICAgICAgICAnTU9OREFZJzogJ0x1bmRpJyxcbiAgICAgICAgICBcIlRVRVNEQVlcIjogJ01hcmRpJyxcbiAgICAgICAgICBcIldFRE5FU0RBWVwiOiAnTWVyY3JlZGknLFxuICAgICAgICAgIFwiVEhVUlNEQVlcIjogJ0pldWRpJyxcbiAgICAgICAgICBcIkZSSURBWVwiOiAnVmVuZHJlZGknLFxuICAgICAgICAgIFwiU0FUVVJEQVlcIjogJ1NhbWVkaScsXG4gICAgICAgICAgXCJTVU5EQVlcIjogJ0RpbWFuY2hlJyxcbiAgICAgICAgICBcIk9USEVSXCI6IFwiQXV0cmVcIixcbiAgICAgICAgICBcIkZSRUVfRklFTERcIjogJ0NoYW1wIGxpYnJlJyxcbiAgICAgIH0sXG4gICAgICAnZW4nOiB7XG4gICAgICAgICAgJ0dPJzogYExldCdzIGdvYCxcbiAgICAgICAgICAnU0VORCc6ICdTZW5kJyxcbiAgICAgICAgICAnU0VMRUNUJzogJ1lvdSBtdXN0IHNlbGVjdCBhbiBhbnN3ZXInLFxuICAgICAgICAgICdNT05EQVknOiAnTW9uZGF5JyxcbiAgICAgICAgICBcIlRVRVNEQVlcIjogJ1R1ZXNkYXknLFxuICAgICAgICAgIFwiV0VETkVTREFZXCI6ICdXZWRuZXNkYXknLFxuICAgICAgICAgIFwiVEhVUlNEQVlcIjogJ1RodXJzZGF5JyxcbiAgICAgICAgICBcIkZSSURBWVwiOiAnRnJpZGF5JyxcbiAgICAgICAgICBcIlNBVFVSREFZXCI6ICdTYXR1cmRheScsXG4gICAgICAgICAgXCJTVU5EQVlcIjogJ1N1bmRheScsXG4gICAgICAgICAgXCJPVEhFUlwiOiAnT3RoZXInLFxuICAgICAgICAgIFwiRlJFRV9GSUVMRFwiOiAnRnJlZSBmaWVsZCcsXG4gICAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHB1YmxpYyB0cmFuc2xhdGUobCwgd29yZCkge1xuICAgIHJldHVybiB0aGlzLmxhbmdbbF1bd29yZF07XG4gIH1cbn1cbiJdfQ==