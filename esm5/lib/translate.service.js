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
                "MORNING_ALL": '(Tous les) matins',
                "AFTERNOON_ALL": '(Tous les) après-midi',
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
                "MORNING_ALL": '(All the) mornings',
                "AFTERNOON_ALL": '(All the) afternoons',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rb252ZXJzby8iLCJzb3VyY2VzIjpbImxpYi90cmFuc2xhdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0M7SUE0Q0U7UUEzQ1EsU0FBSSxHQUFHO1lBQ1gsSUFBSSxFQUFFO2dCQUNGLElBQUksRUFBRSxhQUFhO2dCQUNuQixNQUFNLEVBQUUsU0FBUztnQkFDakIsUUFBUSxFQUFFLHFDQUFxQztnQkFDL0MsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFNBQVMsRUFBRSxPQUFPO2dCQUNsQixXQUFXLEVBQUUsVUFBVTtnQkFDdkIsVUFBVSxFQUFFLE9BQU87Z0JBQ25CLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixZQUFZLEVBQUUsYUFBYTtnQkFDM0IsVUFBVSxFQUFFLFNBQVM7Z0JBQ3JCLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixTQUFTLEVBQUUsT0FBTztnQkFDbEIsV0FBVyxFQUFFLFlBQVk7Z0JBQ3pCLGFBQWEsRUFBRSxtQkFBbUI7Z0JBQ2xDLGVBQWUsRUFBRSx1QkFBdUI7YUFDM0M7WUFDRCxJQUFJLEVBQUU7Z0JBQ0YsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixTQUFTLEVBQUUsU0FBUztnQkFDcEIsV0FBVyxFQUFFLFdBQVc7Z0JBQ3hCLFVBQVUsRUFBRSxVQUFVO2dCQUN0QixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixPQUFPLEVBQUUsT0FBTztnQkFDaEIsWUFBWSxFQUFFLFlBQVk7Z0JBQzFCLFVBQVUsRUFBRSxVQUFVO2dCQUN0QixNQUFNLEVBQUUsTUFBTTtnQkFDZCxTQUFTLEVBQUUsU0FBUztnQkFDcEIsV0FBVyxFQUFFLFdBQVc7Z0JBQ3hCLGFBQWEsRUFBRSxvQkFBb0I7Z0JBQ25DLGVBQWUsRUFBRSxzQkFBc0I7YUFDMUM7U0FDSixDQUFBO0lBRWUsQ0FBQztJQUVWLG9DQUFTLEdBQWhCLFVBQWlCLENBQUMsRUFBRSxJQUFJO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOztJQWhEVSxnQkFBZ0I7UUFINUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGdCQUFnQixDQWlENUI7MkJBdEREO0NBc0RDLEFBakRELElBaURDO1NBakRZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlU2VydmljZSB7XG4gIHByaXZhdGUgbGFuZyA9IHtcbiAgICAgICdmcic6IHtcbiAgICAgICAgICAnR08nOiBgQydlc3QgcGFydGlgLFxuICAgICAgICAgICdTRU5EJzogJ0Vudm95ZXInLFxuICAgICAgICAgICdTRUxFQ1QnOiAnVm91cyBkZXZleiBzw6lsZWN0aW9ubmVyIHVuZSByw6lwb25zZScsXG4gICAgICAgICAgJ01PTkRBWSc6ICdMdW5kaScsXG4gICAgICAgICAgXCJUVUVTREFZXCI6ICdNYXJkaScsXG4gICAgICAgICAgXCJXRURORVNEQVlcIjogJ01lcmNyZWRpJyxcbiAgICAgICAgICBcIlRIVVJTREFZXCI6ICdKZXVkaScsXG4gICAgICAgICAgXCJGUklEQVlcIjogJ1ZlbmRyZWRpJyxcbiAgICAgICAgICBcIlNBVFVSREFZXCI6ICdTYW1lZGknLFxuICAgICAgICAgIFwiU1VOREFZXCI6ICdEaW1hbmNoZScsXG4gICAgICAgICAgXCJPVEhFUlwiOiBcIkF1dHJlXCIsXG4gICAgICAgICAgXCJGUkVFX0ZJRUxEXCI6ICdDaGFtcCBsaWJyZScsXG4gICAgICAgICAgXCJWQUxJREFURVwiOiAnVmFsaWRlcicsXG4gICAgICAgICAgXCJTS0lQXCI6ICdQYXNzZXInLFxuICAgICAgICAgIFwiTU9STklOR1wiOiBcIk1hdGluXCIsXG4gICAgICAgICAgXCJBRlRFUk5PT05cIjogXCJBcHLDqHMtbWlkaVwiLFxuICAgICAgICAgIFwiTU9STklOR19BTExcIjogJyhUb3VzIGxlcykgbWF0aW5zJyxcbiAgICAgICAgICBcIkFGVEVSTk9PTl9BTExcIjogJyhUb3VzIGxlcykgYXByw6hzLW1pZGknLFxuICAgICAgfSxcbiAgICAgICdlbic6IHtcbiAgICAgICAgICAnR08nOiBgTGV0J3MgZ29gLFxuICAgICAgICAgICdTRU5EJzogJ1NlbmQnLFxuICAgICAgICAgICdTRUxFQ1QnOiAnWW91IG11c3Qgc2VsZWN0IGFuIGFuc3dlcicsXG4gICAgICAgICAgJ01PTkRBWSc6ICdNb25kYXknLFxuICAgICAgICAgIFwiVFVFU0RBWVwiOiAnVHVlc2RheScsXG4gICAgICAgICAgXCJXRURORVNEQVlcIjogJ1dlZG5lc2RheScsXG4gICAgICAgICAgXCJUSFVSU0RBWVwiOiAnVGh1cnNkYXknLFxuICAgICAgICAgIFwiRlJJREFZXCI6ICdGcmlkYXknLFxuICAgICAgICAgIFwiU0FUVVJEQVlcIjogJ1NhdHVyZGF5JyxcbiAgICAgICAgICBcIlNVTkRBWVwiOiAnU3VuZGF5JyxcbiAgICAgICAgICBcIk9USEVSXCI6ICdPdGhlcicsXG4gICAgICAgICAgXCJGUkVFX0ZJRUxEXCI6ICdGcmVlIGZpZWxkJyxcbiAgICAgICAgICBcIlZBTElEQVRFXCI6ICdWYWxpZGF0ZScsXG4gICAgICAgICAgXCJTS0lQXCI6ICdTa2lwJyxcbiAgICAgICAgICBcIk1PUk5JTkdcIjogXCJNb3JuaW5nXCIsXG4gICAgICAgICAgXCJBRlRFUk5PT05cIjogXCJBZnRlcm5vb25cIixcbiAgICAgICAgICBcIk1PUk5JTkdfQUxMXCI6ICcoQWxsIHRoZSkgbW9ybmluZ3MnLFxuICAgICAgICAgIFwiQUZURVJOT09OX0FMTFwiOiAnKEFsbCB0aGUpIGFmdGVybm9vbnMnLFxuICAgICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBwdWJsaWMgdHJhbnNsYXRlKGwsIHdvcmQpIHtcbiAgICByZXR1cm4gdGhpcy5sYW5nW2xdW3dvcmRdO1xuICB9XG59XG4iXX0=