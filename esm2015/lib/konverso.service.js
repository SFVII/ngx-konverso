import { __awaiter, __decorate, __param } from "tslib";
import { EventEmitter, Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import * as mustache from 'mustache';
let KonversoService = class KonversoService {
    constructor(config, http) {
        this.http = http;
        this.authentication = new EventEmitter();
        this.firstVisit = false;
        this.AssistantMode = false;
        this.token = new BehaviorSubject(null);
        // tslint:disable-next-line:variable-name
        this._token = this.token.asObservable();
        this.buildHeaders();
        this.initInstance(config);
    }
    /**
     * Send Query To backend server and get a response
     * @param query
     */
    send(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (query && query.replace(new RegExp(' ', 'g'), '')) {
                    if (this.header) {
                        const preparedData = this.buildQuery(query);
                        const options = {
                            headers: this.header
                        };
                        this.http.post(this.endpoint, preparedData, options)
                            .subscribe((data) => {
                            resolve(data);
                        });
                    }
                    else {
                        reject(new Error('Header is not set, please provide a token though user setting or though module configuration'));
                    }
                }
                else {
                    reject(new Error('Current input is empty, please try again'));
                }
            });
        });
    }
    /**
     * @private
     * Generate Header for backend call
     */
    buildHeaders() {
        this._token.subscribe((token) => {
            const bearer = 'Bearer ' + token;
            this.header = new HttpHeaders({
                //'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': window.location.origin,
                'Authorization': bearer
            });
        });
    }
    /**
     * @param config
     * @private
     * Initialize Data for User Instance
     */
    initInstance(config) {
        if (config.endpoint) {
            this.endpoint = config.endpoint;
            if (config.AssistantMode) {
                this.AssistantMode = config.AssistantMode;
            }
            if (config.defaultAssets) {
                this.assets = config.defaultAssets;
                if (config.defaultAssets.ColorSet) {
                    this.ColorSet = config.defaultAssets.ColorSet;
                }
            }
            if (config.auth) {
                this.authentication.subscribe((user) => {
                    var _a, _b, _c, _d;
                    if (!user.lang && config.lang) {
                        user.lang = config.lang;
                    }
                    this.locale = user.lang;
                    if (config.InputPlaceHolder && config.InputPlaceHolder[this.locale]) {
                        this.PlaceHolder = config.InputPlaceHolder[this.locale];
                    }
                    if (config.CustomWelcome && config.BotInitMessage.Welcome && config.BotInitMessage.Welcome[this.locale]) {
                        this.Welcome = mustache.render(config.BotInitMessage.Welcome[this.locale], user);
                    }
                    if (user.token) {
                        this.token.next(user.token);
                    }
                    if (user.firstVisit) {
                        this.firstVisit = true;
                        delete user.firstVisit;
                        if (((_b = (_a = config) === null || _a === void 0 ? void 0 : _a.BotInitMessage) === null || _b === void 0 ? void 0 : _b.FirstUsage) &&
                            this.locale && ((_d = (_c = config) === null || _c === void 0 ? void 0 : _c.BotInitMessage) === null || _d === void 0 ? void 0 : _d.FirstUsage[this.locale])) {
                            this.firstUsageStory = [];
                            for (const history of config.BotInitMessage.FirstUsage[this.locale]) {
                                this.firstUsageStory.push(mustache.render(history, user));
                            }
                        }
                    }
                    this.user = user;
                });
            }
            else if (config.lang) {
                this.locale = config.lang;
                if (config.InputPlaceHolder && config.InputPlaceHolder[this.locale]) {
                    this.PlaceHolder = config.InputPlaceHolder[this.locale];
                }
                if (config.CustomWelcome && config.BotInitMessage.Welcome && config.BotInitMessage.Welcome[this.locale]) {
                    this.Welcome = config.BotInitMessage.Welcome[this.locale];
                }
                this.user = {
                    userId: this.guid(),
                    lang: config.lang
                };
            }
            if (config.token) {
                this.token.next(config.token);
            }
        }
        else {
            return new Error('Please provide endpoint');
        }
    }
    /**
     * @param query
     * @private
     * prepare set data to push to backend server
     */
    buildQuery(query) {
        // @ts-ignore
        return Object.assign(Object.assign({}, this.user), { query: query.replace(/\s+/g, ' ').trim(), isSending: true });
    }
    /**
     * @private
     * Generate Random uniq Id for Konverso Instance
     */
    guid() {
        let random = () => {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        return random() + random() + '-' + random() + '-' + random() + '-' + random() + '-' + random() + random() + random();
    }
};
KonversoService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['__NgxKonverso__',] }] },
    { type: HttpClient }
];
KonversoService = __decorate([
    Injectable(),
    __param(0, Inject('__NgxKonverso__'))
], KonversoService);
export { KonversoService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29udmVyc28uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2tvbnZlcnNvLyIsInNvdXJjZXMiOlsibGliL2tvbnZlcnNvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUvRCxPQUFPLEVBQUMsVUFBVSxFQUFFLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzdELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDckMsT0FBTyxLQUFLLFFBQVEsTUFBTSxVQUFVLENBQUM7QUFHckMsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQWlCMUIsWUFBdUMsTUFBeUIsRUFBVSxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBaEJuRixtQkFBYyxHQUErQixJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQUU5RSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBSW5CLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBR3JCLFVBQUssR0FBNEIsSUFBSSxlQUFlLENBQVMsSUFBSSxDQUFDLENBQUM7UUFDM0UseUNBQXlDO1FBQ2pDLFdBQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBTXpDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7O09BR0c7SUFDVSxJQUFJLENBQUMsS0FBYTs7WUFDN0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDckMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7b0JBQ3BELElBQUksSUFB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TSxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLE1BQU0sRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQ3ZILENBQUM7Q0FDRixDQUFBOzs0Q0E3SWMsTUFBTSxTQUFDLGlCQUFpQjtZQUEyQyxVQUFVOztBQWpCL0UsZUFBZTtJQUQzQixVQUFVLEVBQUU7SUFrQkUsV0FBQSxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtHQWpCM0IsZUFBZSxDQThKM0I7U0E5SlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRFbWl0dGVyLCBJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb2xvclNldCwgRGVmYXVsdEFzc2V0cywgS29udmVyc29JbnRlcmZhY2UsIEtvbnZlcnNvUXVlcnksIEtvbnZlcnNvVXNlcn0gZnJvbSAnLi4vaW50ZXJmYWNlL0tvbnZlcnNvSW50ZXJmYWNlJztcbmltcG9ydCB7SHR0cENsaWVudCwgSHR0cEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIG11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEtvbnZlcnNvU2VydmljZSB7XG4gIHB1YmxpYyBhdXRoZW50aWNhdGlvbjogRXZlbnRFbWl0dGVyPEtvbnZlcnNvVXNlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPEtvbnZlcnNvVXNlcj4oKTtcbiAgcHVibGljIGFzc2V0czogRGVmYXVsdEFzc2V0cztcbiAgcHVibGljIGZpcnN0VmlzaXQgPSBmYWxzZTtcbiAgcHVibGljIGZpcnN0VXNhZ2VTdG9yeTogc3RyaW5nW107XG4gIHB1YmxpYyBDb2xvclNldDogQ29sb3JTZXQ7XG4gIHB1YmxpYyBQbGFjZUhvbGRlcjogc3RyaW5nW107XG4gIHB1YmxpYyBBc3Npc3RhbnRNb2RlID0gZmFsc2U7XG4gIHB1YmxpYyBXZWxjb21lOiBzdHJpbmc7XG4gIHByaXZhdGUgbG9jYWxlOiBzdHJpbmc7XG4gIHByaXZhdGUgdG9rZW46IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF90b2tlbiA9IHRoaXMudG9rZW4uYXNPYnNlcnZhYmxlKCk7XG4gIHByaXZhdGUgdXNlcjogS29udmVyc29Vc2VyO1xuICBwcml2YXRlIGhlYWRlcjogSHR0cEhlYWRlcnM7XG4gIHByaXZhdGUgZW5kcG9pbnQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdfX05neEtvbnZlcnNvX18nKSBjb25maWc6IEtvbnZlcnNvSW50ZXJmYWNlLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICB0aGlzLmJ1aWxkSGVhZGVycygpO1xuICAgIHRoaXMuaW5pdEluc3RhbmNlKGNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogU2VuZCBRdWVyeSBUbyBiYWNrZW5kIHNlcnZlciBhbmQgZ2V0IGEgcmVzcG9uc2VcbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqL1xuICBwdWJsaWMgYXN5bmMgc2VuZChxdWVyeTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHF1ZXJ5ICYmIHF1ZXJ5LnJlcGxhY2UobmV3IFJlZ0V4cCgnICcsICdnJyksICcnKSkge1xuICAgICAgICBpZiAodGhpcy5oZWFkZXIpIHtcbiAgICAgICAgICBjb25zdCBwcmVwYXJlZERhdGEgPSB0aGlzLmJ1aWxkUXVlcnkocXVlcnkpO1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLmh0dHAucG9zdCh0aGlzLmVuZHBvaW50LCBwcmVwYXJlZERhdGEsIG9wdGlvbnMpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0hlYWRlciBpcyBub3Qgc2V0LCBwbGVhc2UgcHJvdmlkZSBhIHRva2VuIHRob3VnaCB1c2VyIHNldHRpbmcgb3IgdGhvdWdoIG1vZHVsZSBjb25maWd1cmF0aW9uJykpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKCdDdXJyZW50IGlucHV0IGlzIGVtcHR5LCBwbGVhc2UgdHJ5IGFnYWluJykpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEdlbmVyYXRlIEhlYWRlciBmb3IgYmFja2VuZCBjYWxsXG4gICAqL1xuICBwcml2YXRlIGJ1aWxkSGVhZGVycygpIHtcbiAgICB0aGlzLl90b2tlbi5zdWJzY3JpYmUoKHRva2VuOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGJlYXJlcjogc3RyaW5nID0gJ0JlYXJlciAnICsgdG9rZW47XG4gICAgICB0aGlzLmhlYWRlciA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgIC8vJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAvLyAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogd2luZG93LmxvY2F0aW9uLm9yaWdpbixcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBiZWFyZXJcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICogQHByaXZhdGVcbiAgICogSW5pdGlhbGl6ZSBEYXRhIGZvciBVc2VyIEluc3RhbmNlXG4gICAqL1xuICBwcml2YXRlIGluaXRJbnN0YW5jZShjb25maWc6IEtvbnZlcnNvSW50ZXJmYWNlKSB7XG4gICAgaWYgKGNvbmZpZy5lbmRwb2ludCkge1xuICAgICAgdGhpcy5lbmRwb2ludCA9IGNvbmZpZy5lbmRwb2ludDtcbiAgICAgIGlmIChjb25maWcuQXNzaXN0YW50TW9kZSkge1xuICAgICAgICB0aGlzLkFzc2lzdGFudE1vZGUgPSBjb25maWcuQXNzaXN0YW50TW9kZTtcbiAgICAgIH1cblxuXG4gICAgICBpZiAoY29uZmlnLmRlZmF1bHRBc3NldHMpIHtcbiAgICAgICAgdGhpcy5hc3NldHMgPSBjb25maWcuZGVmYXVsdEFzc2V0cztcbiAgICAgICAgaWYgKGNvbmZpZy5kZWZhdWx0QXNzZXRzLkNvbG9yU2V0KSB7XG4gICAgICAgICAgdGhpcy5Db2xvclNldCA9IGNvbmZpZy5kZWZhdWx0QXNzZXRzLkNvbG9yU2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbi5zdWJzY3JpYmUoKHVzZXI6IEtvbnZlcnNvVXNlcikgPT4ge1xuICAgICAgICAgIGlmICghdXNlci5sYW5nICYmIGNvbmZpZy5sYW5nKSB7XG4gICAgICAgICAgICB1c2VyLmxhbmcgPSBjb25maWcubGFuZztcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5sb2NhbGUgPSB1c2VyLmxhbmc7XG4gICAgICAgICAgaWYgKGNvbmZpZy5JbnB1dFBsYWNlSG9sZGVyICYmIGNvbmZpZy5JbnB1dFBsYWNlSG9sZGVyW3RoaXMubG9jYWxlXSkge1xuICAgICAgICAgICAgdGhpcy5QbGFjZUhvbGRlciA9IGNvbmZpZy5JbnB1dFBsYWNlSG9sZGVyW3RoaXMubG9jYWxlXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNvbmZpZy5DdXN0b21XZWxjb21lICYmIGNvbmZpZy5Cb3RJbml0TWVzc2FnZS5XZWxjb21lICYmIGNvbmZpZy5Cb3RJbml0TWVzc2FnZS5XZWxjb21lW3RoaXMubG9jYWxlXSkge1xuICAgICAgICAgICAgdGhpcy5XZWxjb21lID0gbXVzdGFjaGUucmVuZGVyKGNvbmZpZy5Cb3RJbml0TWVzc2FnZS5XZWxjb21lW3RoaXMubG9jYWxlXSwgdXNlcik7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHVzZXIudG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW4ubmV4dCh1c2VyLnRva2VuKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHVzZXIuZmlyc3RWaXNpdCkge1xuICAgICAgICAgICAgdGhpcy5maXJzdFZpc2l0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGRlbGV0ZSB1c2VyLmZpcnN0VmlzaXQ7XG4gICAgICAgICAgICBpZiAoY29uZmlnPy5Cb3RJbml0TWVzc2FnZT8uRmlyc3RVc2FnZSAmJlxuICAgICAgICAgICAgICB0aGlzLmxvY2FsZSAmJlxuICAgICAgICAgICAgICBjb25maWc/LkJvdEluaXRNZXNzYWdlPy5GaXJzdFVzYWdlW3RoaXMubG9jYWxlXSkge1xuICAgICAgICAgICAgICB0aGlzLmZpcnN0VXNhZ2VTdG9yeSA9IFtdO1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IGhpc3Rvcnkgb2YgY29uZmlnLkJvdEluaXRNZXNzYWdlLkZpcnN0VXNhZ2VbdGhpcy5sb2NhbGVdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdFVzYWdlU3RvcnkucHVzaChtdXN0YWNoZS5yZW5kZXIoaGlzdG9yeSwgdXNlcikpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChjb25maWcubGFuZykge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGNvbmZpZy5sYW5nO1xuICAgICAgICBpZiAoY29uZmlnLklucHV0UGxhY2VIb2xkZXIgJiYgY29uZmlnLklucHV0UGxhY2VIb2xkZXJbdGhpcy5sb2NhbGVdKSB7XG4gICAgICAgICAgdGhpcy5QbGFjZUhvbGRlciA9IGNvbmZpZy5JbnB1dFBsYWNlSG9sZGVyW3RoaXMubG9jYWxlXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29uZmlnLkN1c3RvbVdlbGNvbWUgJiYgY29uZmlnLkJvdEluaXRNZXNzYWdlLldlbGNvbWUgJiYgY29uZmlnLkJvdEluaXRNZXNzYWdlLldlbGNvbWVbdGhpcy5sb2NhbGVdKSB7XG4gICAgICAgICAgdGhpcy5XZWxjb21lID0gY29uZmlnLkJvdEluaXRNZXNzYWdlLldlbGNvbWVbdGhpcy5sb2NhbGVdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXNlciA9IHtcbiAgICAgICAgICB1c2VySWQ6IHRoaXMuZ3VpZCgpLFxuICAgICAgICAgIGxhbmc6IGNvbmZpZy5sYW5nXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAoY29uZmlnLnRva2VuKSB7XG4gICAgICAgIHRoaXMudG9rZW4ubmV4dChjb25maWcudG9rZW4pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdQbGVhc2UgcHJvdmlkZSBlbmRwb2ludCcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICogQHByaXZhdGVcbiAgICogcHJlcGFyZSBzZXQgZGF0YSB0byBwdXNoIHRvIGJhY2tlbmQgc2VydmVyXG4gICAqL1xuICBwcml2YXRlIGJ1aWxkUXVlcnkocXVlcnk6IHN0cmluZyk6IEtvbnZlcnNvUXVlcnkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4ge1xuICAgICAgLi4udGhpcy51c2VyLFxuICAgICAgcXVlcnk6IHF1ZXJ5LnJlcGxhY2UoL1xccysvZywgJyAnKS50cmltKCksXG4gICAgICBpc1NlbmRpbmc6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEdlbmVyYXRlIFJhbmRvbSB1bmlxIElkIGZvciBLb252ZXJzbyBJbnN0YW5jZVxuICAgKi9cbiAgcHJpdmF0ZSBndWlkKCkge1xuICAgIGxldCByYW5kb20gPSAoKSA9PiB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcbiAgICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgICAuc3Vic3RyaW5nKDEpO1xuICAgIH07XG4gICAgcmV0dXJuIHJhbmRvbSgpICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArICctJyArIHJhbmRvbSgpICsgJy0nICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArIHJhbmRvbSgpICsgcmFuZG9tKCk7XG4gIH1cbn1cbiJdfQ==