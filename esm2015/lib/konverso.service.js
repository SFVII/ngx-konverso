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
        this.readyState = false;
        this.token = new BehaviorSubject(null);
        // tslint:disable-next-line:variable-name
        this._token = this.token.asObservable();
        this.lang = new BehaviorSubject('');
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
                        this.http.post(this.endpoint + '?t=' + new Date().getTime(), preparedData, options)
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
        this._auth = !!config.auth;
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
                    var _a, _b, _c, _d, _e, _f, _g, _h;
                    if (!user.lang && config.lang) {
                        user.lang = config.lang;
                    }
                    this.locale = (_a = user) === null || _a === void 0 ? void 0 : _a.lang;
                    this.lang.next(this.locale);
                    if (config.InputPlaceHolder && config.InputPlaceHolder[this.locale]) {
                        this.PlaceHolder = config.InputPlaceHolder[this.locale];
                    }
                    if (config.CustomWelcome && config.BotInitMessage.Welcome && config.BotInitMessage.Welcome[this.locale]) {
                        this.Welcome = mustache.render(config.BotInitMessage.Welcome[this.locale], user);
                    }
                    if ((_b = user) === null || _b === void 0 ? void 0 : _b.token) {
                        this.token.next((_c = user) === null || _c === void 0 ? void 0 : _c.token);
                    }
                    if ((_d = user) === null || _d === void 0 ? void 0 : _d.firstVisit) {
                        this.firstVisit = true;
                        delete user.firstVisit;
                        if (((_f = (_e = config) === null || _e === void 0 ? void 0 : _e.BotInitMessage) === null || _f === void 0 ? void 0 : _f.FirstUsage) &&
                            this.locale && ((_h = (_g = config) === null || _g === void 0 ? void 0 : _g.BotInitMessage) === null || _h === void 0 ? void 0 : _h.FirstUsage[this.locale])) {
                            this.firstUsageStory = [];
                            for (const history of config.BotInitMessage.FirstUsage[this.locale]) {
                                this.firstUsageStory.push(mustache.render(history, user));
                            }
                        }
                    }
                    this.user = user;
                    this.readyState = true;
                });
            }
            else if (config.lang) {
                this.locale = config.lang;
                this.lang.next(this.locale);
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
                this.readyState = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29udmVyc28uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2tvbnZlcnNvLyIsInNvdXJjZXMiOlsibGliL2tvbnZlcnNvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUvRCxPQUFPLEVBQUMsVUFBVSxFQUFFLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzdELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDckMsT0FBTyxLQUFLLFFBQVEsTUFBTSxVQUFVLENBQUM7QUFHckMsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQW9CMUIsWUFBdUMsTUFBeUIsRUFBVSxJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBbkJuRixtQkFBYyxHQUErQixJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQUU5RSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBSW5CLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRXRCLGVBQVUsR0FBYSxLQUFLLENBQUM7UUFFNUIsVUFBSyxHQUE0QixJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUMsQ0FBQztRQUMzRSx5Q0FBeUM7UUFDakMsV0FBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFLcEMsU0FBSSxHQUFHLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBR3BDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7O09BR0c7SUFDVSxJQUFJLENBQUMsS0FBYTs7WUFDN0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFDckMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FB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QUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFDeEMsU0FBUyxFQUFFLElBQUksSUFDZjtJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSyxJQUFJO1FBQ1YsSUFBSSxNQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7aUJBQzdDLFFBQVEsQ0FBQyxFQUFFLENBQUM7aUJBQ1osU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQztRQUNGLE9BQU8sTUFBTSxFQUFFLEdBQUcsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLE1BQU0sRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQ3ZILENBQUM7Q0FDRixDQUFBOzs0Q0FqSmMsTUFBTSxTQUFDLGlCQUFpQjtZQUEyQyxVQUFVOztBQXBCL0UsZUFBZTtJQUQzQixVQUFVLEVBQUU7SUFxQkUsV0FBQSxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtHQXBCM0IsZUFBZSxDQXFLM0I7U0FyS1ksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRFbWl0dGVyLCBJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb2xvclNldCwgRGVmYXVsdEFzc2V0cywgS29udmVyc29JbnRlcmZhY2UsIEtvbnZlcnNvUXVlcnksIEtvbnZlcnNvVXNlcn0gZnJvbSAnLi4vaW50ZXJmYWNlL0tvbnZlcnNvSW50ZXJmYWNlJztcbmltcG9ydCB7SHR0cENsaWVudCwgSHR0cEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIG11c3RhY2hlIGZyb20gJ211c3RhY2hlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEtvbnZlcnNvU2VydmljZSB7XG4gIHB1YmxpYyBhdXRoZW50aWNhdGlvbjogRXZlbnRFbWl0dGVyPEtvbnZlcnNvVXNlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPEtvbnZlcnNvVXNlcj4oKTtcbiAgcHVibGljIGFzc2V0czogRGVmYXVsdEFzc2V0cztcbiAgcHVibGljIGZpcnN0VmlzaXQgPSBmYWxzZTtcbiAgcHVibGljIGZpcnN0VXNhZ2VTdG9yeTogc3RyaW5nW107XG4gIHB1YmxpYyBDb2xvclNldDogQ29sb3JTZXQ7XG4gIHB1YmxpYyBQbGFjZUhvbGRlcjogc3RyaW5nW107XG4gIHB1YmxpYyBBc3Npc3RhbnRNb2RlID0gZmFsc2U7XG4gIHB1YmxpYyBXZWxjb21lOiBzdHJpbmc7XG4gIHB1YmxpYyByZWFkeVN0YXRlIDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgbG9jYWxlOiBzdHJpbmc7XG4gIHByaXZhdGUgdG9rZW46IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF90b2tlbiA9IHRoaXMudG9rZW4uYXNPYnNlcnZhYmxlKCk7XG4gIHByaXZhdGUgdXNlcjogS29udmVyc29Vc2VyO1xuICBwcml2YXRlIGhlYWRlcjogSHR0cEhlYWRlcnM7XG4gIHByaXZhdGUgZW5kcG9pbnQ6IHN0cmluZztcbiAgcHVibGljIF9hdXRoOiBib29sZWFuO1xuICBwdWJsaWMgbGFuZyA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ19fTmd4S29udmVyc29fXycpIGNvbmZpZzogS29udmVyc29JbnRlcmZhY2UsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICAgIHRoaXMuYnVpbGRIZWFkZXJzKCk7XG4gICAgdGhpcy5pbml0SW5zdGFuY2UoY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIFF1ZXJ5IFRvIGJhY2tlbmQgc2VydmVyIGFuZCBnZXQgYSByZXNwb25zZVxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICovXG4gIHB1YmxpYyBhc3luYyBzZW5kKHF1ZXJ5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAocXVlcnkgJiYgcXVlcnkucmVwbGFjZShuZXcgUmVnRXhwKCcgJywgJ2cnKSwgJycpKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWRlcikge1xuICAgICAgICAgIGNvbnN0IHByZXBhcmVkRGF0YSA9IHRoaXMuYnVpbGRRdWVyeShxdWVyeSk7XG4gICAgICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuaHR0cC5wb3N0KHRoaXMuZW5kcG9pbnQgKyAnP3Q9JyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpLCBwcmVwYXJlZERhdGEsIG9wdGlvbnMpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0hlYWRlciBpcyBub3Qgc2V0LCBwbGVhc2UgcHJvdmlkZSBhIHRva2VuIHRob3VnaCB1c2VyIHNldHRpbmcgb3IgdGhvdWdoIG1vZHVsZSBjb25maWd1cmF0aW9uJykpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKCdDdXJyZW50IGlucHV0IGlzIGVtcHR5LCBwbGVhc2UgdHJ5IGFnYWluJykpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEdlbmVyYXRlIEhlYWRlciBmb3IgYmFja2VuZCBjYWxsXG4gICAqL1xuICBwcml2YXRlIGJ1aWxkSGVhZGVycygpIHtcbiAgICB0aGlzLl90b2tlbi5zdWJzY3JpYmUoKHRva2VuOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGJlYXJlcjogc3RyaW5nID0gJ0JlYXJlciAnICsgdG9rZW47XG4gICAgICB0aGlzLmhlYWRlciA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgIC8vJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgLy8gJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4sXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogYmVhcmVyXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gY29uZmlnXG4gICAqIEBwcml2YXRlXG4gICAqIEluaXRpYWxpemUgRGF0YSBmb3IgVXNlciBJbnN0YW5jZVxuICAgKi9cbiAgcHJpdmF0ZSBpbml0SW5zdGFuY2UoY29uZmlnOiBLb252ZXJzb0ludGVyZmFjZSkge1xuICAgIHRoaXMuX2F1dGggPSAhIWNvbmZpZy5hdXRoO1xuICAgIGlmIChjb25maWcuZW5kcG9pbnQpIHtcbiAgICAgIHRoaXMuZW5kcG9pbnQgPSBjb25maWcuZW5kcG9pbnQ7XG4gICAgICBpZiAoY29uZmlnLkFzc2lzdGFudE1vZGUpIHtcbiAgICAgICAgdGhpcy5Bc3Npc3RhbnRNb2RlID0gY29uZmlnLkFzc2lzdGFudE1vZGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcuZGVmYXVsdEFzc2V0cykge1xuICAgICAgICB0aGlzLmFzc2V0cyA9IGNvbmZpZy5kZWZhdWx0QXNzZXRzO1xuICAgICAgICBpZiAoY29uZmlnLmRlZmF1bHRBc3NldHMuQ29sb3JTZXQpIHtcbiAgICAgICAgICB0aGlzLkNvbG9yU2V0ID0gY29uZmlnLmRlZmF1bHRBc3NldHMuQ29sb3JTZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uLnN1YnNjcmliZSgodXNlcjogS29udmVyc29Vc2VyKSA9PiB7XG4gICAgICAgICAgaWYgKCF1c2VyLmxhbmcgJiYgY29uZmlnLmxhbmcpIHtcbiAgICAgICAgICAgIHVzZXIubGFuZyA9IGNvbmZpZy5sYW5nO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmxvY2FsZSA9IHVzZXI/Lmxhbmc7XG4gICAgICAgICAgdGhpcy5sYW5nLm5leHQodGhpcy5sb2NhbGUpO1xuICAgICAgICAgIGlmIChjb25maWcuSW5wdXRQbGFjZUhvbGRlciAmJiBjb25maWcuSW5wdXRQbGFjZUhvbGRlclt0aGlzLmxvY2FsZV0pIHtcbiAgICAgICAgICAgIHRoaXMuUGxhY2VIb2xkZXIgPSBjb25maWcuSW5wdXRQbGFjZUhvbGRlclt0aGlzLmxvY2FsZV07XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjb25maWcuQ3VzdG9tV2VsY29tZSAmJiBjb25maWcuQm90SW5pdE1lc3NhZ2UuV2VsY29tZSAmJiBjb25maWcuQm90SW5pdE1lc3NhZ2UuV2VsY29tZVt0aGlzLmxvY2FsZV0pIHtcbiAgICAgICAgICAgIHRoaXMuV2VsY29tZSA9IG11c3RhY2hlLnJlbmRlcihjb25maWcuQm90SW5pdE1lc3NhZ2UuV2VsY29tZVt0aGlzLmxvY2FsZV0sIHVzZXIpO1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh1c2VyPy50b2tlbikge1xuICAgICAgICAgICAgdGhpcy50b2tlbi5uZXh0KHVzZXI/LnRva2VuKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHVzZXI/LmZpcnN0VmlzaXQpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RWaXNpdCA9IHRydWU7XG4gICAgICAgICAgICBkZWxldGUgdXNlci5maXJzdFZpc2l0O1xuICAgICAgICAgICAgaWYgKGNvbmZpZz8uQm90SW5pdE1lc3NhZ2U/LkZpcnN0VXNhZ2UgJiZcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgJiZcbiAgICAgICAgICAgICAgY29uZmlnPy5Cb3RJbml0TWVzc2FnZT8uRmlyc3RVc2FnZVt0aGlzLmxvY2FsZV0pIHtcbiAgICAgICAgICAgICAgdGhpcy5maXJzdFVzYWdlU3RvcnkgPSBbXTtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBoaXN0b3J5IG9mIGNvbmZpZy5Cb3RJbml0TWVzc2FnZS5GaXJzdFVzYWdlW3RoaXMubG9jYWxlXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RVc2FnZVN0b3J5LnB1c2gobXVzdGFjaGUucmVuZGVyKGhpc3RvcnksIHVzZXIpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChjb25maWcubGFuZykge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGNvbmZpZy5sYW5nO1xuICAgICAgICB0aGlzLmxhbmcubmV4dCh0aGlzLmxvY2FsZSk7XG4gICAgICAgIGlmIChjb25maWcuSW5wdXRQbGFjZUhvbGRlciAmJiBjb25maWcuSW5wdXRQbGFjZUhvbGRlclt0aGlzLmxvY2FsZV0pIHtcbiAgICAgICAgICB0aGlzLlBsYWNlSG9sZGVyID0gY29uZmlnLklucHV0UGxhY2VIb2xkZXJbdGhpcy5sb2NhbGVdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcuQ3VzdG9tV2VsY29tZSAmJiBjb25maWcuQm90SW5pdE1lc3NhZ2UuV2VsY29tZSAmJiBjb25maWcuQm90SW5pdE1lc3NhZ2UuV2VsY29tZVt0aGlzLmxvY2FsZV0pIHtcbiAgICAgICAgICB0aGlzLldlbGNvbWUgPSBjb25maWcuQm90SW5pdE1lc3NhZ2UuV2VsY29tZVt0aGlzLmxvY2FsZV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51c2VyID0ge1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5ndWlkKCksXG4gICAgICAgICAgbGFuZzogY29uZmlnLmxhbmdcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChjb25maWcudG9rZW4pIHtcbiAgICAgICAgdGhpcy50b2tlbi5uZXh0KGNvbmZpZy50b2tlbik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1BsZWFzZSBwcm92aWRlIGVuZHBvaW50Jyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcHJpdmF0ZVxuICAgKiBwcmVwYXJlIHNldCBkYXRhIHRvIHB1c2ggdG8gYmFja2VuZCBzZXJ2ZXJcbiAgICovXG4gIHByaXZhdGUgYnVpbGRRdWVyeShxdWVyeTogc3RyaW5nKTogS29udmVyc29RdWVyeSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLnVzZXIsXG4gICAgICBxdWVyeTogcXVlcnkucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKSxcbiAgICAgIGlzU2VuZGluZzogdHJ1ZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogR2VuZXJhdGUgUmFuZG9tIHVuaXEgSWQgZm9yIEtvbnZlcnNvIEluc3RhbmNlXG4gICAqL1xuICBwcml2YXRlIGd1aWQoKSB7XG4gICAgbGV0IHJhbmRvbSA9ICgpID0+IHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxuICAgICAgICAudG9TdHJpbmcoMTYpXG4gICAgICAgIC5zdWJzdHJpbmcoMSk7XG4gICAgfTtcbiAgICByZXR1cm4gcmFuZG9tKCkgKyByYW5kb20oKSArICctJyArIHJhbmRvbSgpICsgJy0nICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArICctJyArIHJhbmRvbSgpICsgcmFuZG9tKCkgKyByYW5kb20oKTtcbiAgfVxufVxuIl19