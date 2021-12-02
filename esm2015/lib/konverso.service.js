import { __awaiter, __decorate, __param } from "tslib";
import { EventEmitter, Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
// @ts-ignore
import * as mustache from 'mustache';
const render = mustache.render;
let KonversoService = class KonversoService {
    constructor(config, http) {
        this.http = http;
        this.authentication = new EventEmitter();
        this.firstVisit = false;
        this.AssistantMode = false;
        this.readyState = false;
        this.lang = new BehaviorSubject('');
        this.customData = new BehaviorSubject(null);
        this.emulationTrigger = new BehaviorSubject(null);
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
     * Emulate user entry Query To backend server and get a response
     * @param query
     */
    sendTriggerEmulation(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.send(query).catch((err) => {
                console.log('error trigger emulation', err);
            });
            if (response) {
                this.emulationTrigger.next(Object.assign({ input: query }, response));
            }
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
                        this.Welcome = render(config.BotInitMessage.Welcome[this.locale], user);
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
                                this.firstUsageStory.push(render(history, user));
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
        const custom = this.customData.getValue();
        return Object.assign(Object.assign(Object.assign({}, custom), this.user), { query: query.replace(/\s+/g, ' ').trim(), isSending: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29udmVyc28uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2tvbnZlcnNvLyIsInNvdXJjZXMiOlsibGliL2tvbnZlcnNvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUvRCxPQUFPLEVBQUMsVUFBVSxFQUFFLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzdELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDckMsYUFBYTtBQUNiLE9BQU8sS0FBSyxRQUFRLE1BQU0sVUFBVSxDQUFDO0FBRXJDLE1BQU0sTUFBTSxHQUEyQixRQUFRLENBQUMsTUFBTSxDQUFDO0FBR3ZELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFzQnhCLFlBQXVDLE1BQXlCLEVBQVUsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQXJCbkYsbUJBQWMsR0FBK0IsSUFBSSxZQUFZLEVBQWdCLENBQUM7UUFFOUUsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUluQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUV0QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBRzVCLFNBQUksR0FBRyxJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQixlQUFVLEdBQTRDLElBQUksZUFBZSxDQUF5QixJQUFJLENBQUMsQ0FBQztRQUN4RyxxQkFBZ0IsR0FBeUIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEUsVUFBSyxHQUE0QixJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUMsQ0FBQztRQUMzRSx5Q0FBeUM7UUFDakMsV0FBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFNdkMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7T0FHRztJQUNVLElBQUksQ0FBQyxLQUFhOztZQUMzQixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUNuQyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtvQkFDbEQsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO3dCQUNiLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzVDLE1BQU0sT0FBTyxHQUFROzRCQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU07eUJBQ3ZCLENBQUM7d0JBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDOzZCQUM5RSxTQUFTLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTs0QkFDckIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNsQixDQUFDLENBQUMsQ0FBQztxQkFDVjt5QkFBTTt3QkFDSCxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsOEZBQThGLENBQUMsQ0FBQyxDQUFDO3FCQUNySDtpQkFDSjtxQkFBTTtvQkFDSCxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsMENBQTBDLENBQUMsQ0FBQyxDQUFDO2lCQUNqRTtZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0lBRUQ7OztPQUdHO0lBQ1Usb0JBQW9CLENBQUMsS0FBYTs7WUFDM0MsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO2dCQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ2hELENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksaUJBQUUsS0FBSyxFQUFFLEtBQUssSUFBSyxRQUFRLEVBQUUsQ0FBQzthQUMzRDtRQUNMLENBQUM7S0FBQTtJQUVEOzs7T0FHRztJQUNLLFlBQVk7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFhLEVBQUUsRUFBRTtZQUNwQyxNQUFNLE1BQU0sR0FBVyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxXQUFXLENBQUM7Z0JBQzFCLHFDQUFxQztnQkFDckMseURBQXlEO2dCQUN6RCxlQUFlLEVBQUUsTUFBTTthQUMxQixDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssWUFBWSxDQUFDLE1BQXlCO1FBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDM0IsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQzthQUM3QztZQUVELElBQUksTUFBTSxDQUFDLGFBQWEsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO2dCQUNuQyxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFO29CQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO2lCQUNqRDthQUNKO1lBQ0QsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNiLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBa0IsRUFBRSxFQUFFOztvQkFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksRUFBRTt3QkFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO3FCQUMzQjtvQkFDRCxJQUFJLENBQUMsTUFBTSxTQUFHLElBQUksMENBQUUsSUFBSSxDQUFDO29CQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzVCLElBQUksTUFBTSxDQUFDLGdCQUFnQixJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7d0JBQ2pFLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDM0Q7b0JBQ0QsSUFBSSxNQUFNLENBQUMsYUFBYSxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTt3QkFDckcsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO3FCQUUzRTtvQkFDRCxVQUFJLElBQUksMENBQUUsS0FBSyxFQUFFO3dCQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFDLElBQUksMENBQUUsS0FBSyxDQUFDLENBQUM7cUJBQ2hDO29CQUNELFVBQUksSUFBSSwwQ0FBRSxVQUFVLEVBQUU7d0JBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO3dCQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7d0JBQ3ZCLElBQUksYUFBQSxNQUFNLDBDQUFFLGNBQWMsMENBQUUsVUFBVTs0QkFDbEMsSUFBSSxDQUFDLE1BQU0saUJBQ1gsTUFBTSwwQ0FBRSxjQUFjLDBDQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLEVBQUU7NEJBQ2pELElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDOzRCQUMxQixLQUFLLE1BQU0sT0FBTyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQ0FDakUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDOzZCQUNwRDt5QkFDSjtxQkFDSjtvQkFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxDQUFDO2FBQ047aUJBQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDNUIsSUFBSSxNQUFNLENBQUMsZ0JBQWdCLElBQUksTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDakUsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUMzRDtnQkFDRCxJQUFJLE1BQU0sQ0FBQyxhQUFhLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUNyRyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDN0Q7Z0JBQ0QsSUFBSSxDQUFDLElBQUksR0FBRztvQkFDUixNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDbkIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO2lCQUNwQixDQUFDO2dCQUNGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2FBQzFCO1lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO2dCQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNqQztTQUNKO2FBQU07WUFDSCxPQUFPLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7U0FDL0M7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLFVBQVUsQ0FBQyxLQUFhO1FBQzVCLGFBQWE7UUFDYixNQUFNLE1BQU0sR0FBUSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQy9DLHFEQUNPLE1BQU0sR0FDTixJQUFJLENBQUMsSUFBSSxLQUNaLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFDeEMsU0FBUyxFQUFFLElBQUksSUFDakI7SUFDTixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssSUFBSTtRQUNSLElBQUksTUFBTSxHQUFHLEdBQUcsRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7aUJBQzNDLFFBQVEsQ0FBQyxFQUFFLENBQUM7aUJBQ1osU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQztRQUNGLE9BQU8sTUFBTSxFQUFFLEdBQUcsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLE1BQU0sRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQ3pILENBQUM7Q0FDSixDQUFBOzs0Q0FoS2dCLE1BQU0sU0FBQyxpQkFBaUI7WUFBMkMsVUFBVTs7QUF0QmpGLGVBQWU7SUFEM0IsVUFBVSxFQUFFO0lBdUJJLFdBQUEsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUE7R0F0QjdCLGVBQWUsQ0FzTDNCO1NBdExZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50RW1pdHRlciwgSW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29sb3JTZXQsIERlZmF1bHRBc3NldHMsIEtvbnZlcnNvSW50ZXJmYWNlLCBLb252ZXJzb1F1ZXJ5LCBLb252ZXJzb1VzZXJ9IGZyb20gJy4uL2ludGVyZmFjZS9Lb252ZXJzb0ludGVyZmFjZSc7XG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcyc7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgKiBhcyBtdXN0YWNoZSBmcm9tICdtdXN0YWNoZSc7XG5cbmNvbnN0IHJlbmRlcjogdHlwZW9mIG11c3RhY2hlLnJlbmRlciA9IG11c3RhY2hlLnJlbmRlcjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEtvbnZlcnNvU2VydmljZSB7XG4gICAgcHVibGljIGF1dGhlbnRpY2F0aW9uOiBFdmVudEVtaXR0ZXI8S29udmVyc29Vc2VyPiA9IG5ldyBFdmVudEVtaXR0ZXI8S29udmVyc29Vc2VyPigpO1xuICAgIHB1YmxpYyBhc3NldHM6IERlZmF1bHRBc3NldHM7XG4gICAgcHVibGljIGZpcnN0VmlzaXQgPSBmYWxzZTtcbiAgICBwdWJsaWMgZmlyc3RVc2FnZVN0b3J5OiBzdHJpbmdbXTtcbiAgICBwdWJsaWMgQ29sb3JTZXQ6IENvbG9yU2V0O1xuICAgIHB1YmxpYyBQbGFjZUhvbGRlcjogc3RyaW5nW107XG4gICAgcHVibGljIEFzc2lzdGFudE1vZGUgPSBmYWxzZTtcbiAgICBwdWJsaWMgV2VsY29tZTogc3RyaW5nO1xuICAgIHB1YmxpYyByZWFkeVN0YXRlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIGxvY2FsZTogc3RyaW5nO1xuICAgIHB1YmxpYyBfYXV0aDogYm9vbGVhbjtcbiAgICBwdWJsaWMgbGFuZyA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xuICAgIHB1YmxpYyBjdXN0b21EYXRhOiBCZWhhdmlvclN1YmplY3Q8eyBba2V5OiBzdHJpbmddOiBhbnkgfT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHsgW2tleTogc3RyaW5nXTogYW55IH0+KG51bGwpO1xuICAgIHB1YmxpYyBlbXVsYXRpb25UcmlnZ2VyOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG4gICAgcHJpdmF0ZSB0b2tlbjogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgICBwcml2YXRlIF90b2tlbiA9IHRoaXMudG9rZW4uYXNPYnNlcnZhYmxlKCk7XG4gICAgcHJpdmF0ZSB1c2VyOiBLb252ZXJzb1VzZXI7XG4gICAgcHJpdmF0ZSBoZWFkZXI6IEh0dHBIZWFkZXJzO1xuICAgIHByaXZhdGUgZW5kcG9pbnQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoJ19fTmd4S29udmVyc29fXycpIGNvbmZpZzogS29udmVyc29JbnRlcmZhY2UsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICAgICAgICB0aGlzLmJ1aWxkSGVhZGVycygpO1xuICAgICAgICB0aGlzLmluaXRJbnN0YW5jZShjb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbmQgUXVlcnkgVG8gYmFja2VuZCBzZXJ2ZXIgYW5kIGdldCBhIHJlc3BvbnNlXG4gICAgICogQHBhcmFtIHF1ZXJ5XG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHNlbmQocXVlcnk6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgYW55PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAocXVlcnkgJiYgcXVlcnkucmVwbGFjZShuZXcgUmVnRXhwKCcgJywgJ2cnKSwgJycpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXBhcmVkRGF0YSA9IHRoaXMuYnVpbGRRdWVyeShxdWVyeSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5wb3N0KHRoaXMuZW5kcG9pbnQgKyAnP3Q9JyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpLCBwcmVwYXJlZERhdGEsIG9wdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignSGVhZGVyIGlzIG5vdCBzZXQsIHBsZWFzZSBwcm92aWRlIGEgdG9rZW4gdGhvdWdoIHVzZXIgc2V0dGluZyBvciB0aG91Z2ggbW9kdWxlIGNvbmZpZ3VyYXRpb24nKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdDdXJyZW50IGlucHV0IGlzIGVtcHR5LCBwbGVhc2UgdHJ5IGFnYWluJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbXVsYXRlIHVzZXIgZW50cnkgUXVlcnkgVG8gYmFja2VuZCBzZXJ2ZXIgYW5kIGdldCBhIHJlc3BvbnNlXG4gICAgICogQHBhcmFtIHF1ZXJ5XG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHNlbmRUcmlnZ2VyRW11bGF0aW9uKHF1ZXJ5OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlbmQocXVlcnkpLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIHRyaWdnZXIgZW11bGF0aW9uJywgZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgdGhpcy5lbXVsYXRpb25UcmlnZ2VyLm5leHQoe2lucHV0OiBxdWVyeSwgLi4ucmVzcG9uc2V9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogR2VuZXJhdGUgSGVhZGVyIGZvciBiYWNrZW5kIGNhbGxcbiAgICAgKi9cbiAgICBwcml2YXRlIGJ1aWxkSGVhZGVycygpIHtcbiAgICAgICAgdGhpcy5fdG9rZW4uc3Vic2NyaWJlKCh0b2tlbjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBiZWFyZXI6IHN0cmluZyA9ICdCZWFyZXIgJyArIHRva2VuO1xuICAgICAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgICAgIC8vJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAvLyAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogd2luZG93LmxvY2F0aW9uLm9yaWdpbixcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGJlYXJlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb25maWdcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEluaXRpYWxpemUgRGF0YSBmb3IgVXNlciBJbnN0YW5jZVxuICAgICAqL1xuICAgIHByaXZhdGUgaW5pdEluc3RhbmNlKGNvbmZpZzogS29udmVyc29JbnRlcmZhY2UpIHtcbiAgICAgICAgdGhpcy5fYXV0aCA9ICEhY29uZmlnLmF1dGg7XG4gICAgICAgIGlmIChjb25maWcuZW5kcG9pbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZW5kcG9pbnQgPSBjb25maWcuZW5kcG9pbnQ7XG4gICAgICAgICAgICBpZiAoY29uZmlnLkFzc2lzdGFudE1vZGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLkFzc2lzdGFudE1vZGUgPSBjb25maWcuQXNzaXN0YW50TW9kZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbmZpZy5kZWZhdWx0QXNzZXRzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc3NldHMgPSBjb25maWcuZGVmYXVsdEFzc2V0cztcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmRlZmF1bHRBc3NldHMuQ29sb3JTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Db2xvclNldCA9IGNvbmZpZy5kZWZhdWx0QXNzZXRzLkNvbG9yU2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXV0aGVudGljYXRpb24uc3Vic2NyaWJlKCh1c2VyOiBLb252ZXJzb1VzZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF1c2VyLmxhbmcgJiYgY29uZmlnLmxhbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIubGFuZyA9IGNvbmZpZy5sYW5nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gdXNlcj8ubGFuZztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYW5nLm5leHQodGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLklucHV0UGxhY2VIb2xkZXIgJiYgY29uZmlnLklucHV0UGxhY2VIb2xkZXJbdGhpcy5sb2NhbGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYWNlSG9sZGVyID0gY29uZmlnLklucHV0UGxhY2VIb2xkZXJbdGhpcy5sb2NhbGVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcuQ3VzdG9tV2VsY29tZSAmJiBjb25maWcuQm90SW5pdE1lc3NhZ2UuV2VsY29tZSAmJiBjb25maWcuQm90SW5pdE1lc3NhZ2UuV2VsY29tZVt0aGlzLmxvY2FsZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuV2VsY29tZSA9IHJlbmRlcihjb25maWcuQm90SW5pdE1lc3NhZ2UuV2VsY29tZVt0aGlzLmxvY2FsZV0sIHVzZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXI/LnRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRva2VuLm5leHQodXNlcj8udG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh1c2VyPy5maXJzdFZpc2l0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0VmlzaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHVzZXIuZmlyc3RWaXNpdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maWc/LkJvdEluaXRNZXNzYWdlPy5GaXJzdFVzYWdlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWc/LkJvdEluaXRNZXNzYWdlPy5GaXJzdFVzYWdlW3RoaXMubG9jYWxlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RVc2FnZVN0b3J5ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBoaXN0b3J5IG9mIGNvbmZpZy5Cb3RJbml0TWVzc2FnZS5GaXJzdFVzYWdlW3RoaXMubG9jYWxlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0VXNhZ2VTdG9yeS5wdXNoKHJlbmRlcihoaXN0b3J5LCB1c2VyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZy5sYW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBjb25maWcubGFuZztcbiAgICAgICAgICAgICAgICB0aGlzLmxhbmcubmV4dCh0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5JbnB1dFBsYWNlSG9sZGVyICYmIGNvbmZpZy5JbnB1dFBsYWNlSG9sZGVyW3RoaXMubG9jYWxlXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLlBsYWNlSG9sZGVyID0gY29uZmlnLklucHV0UGxhY2VIb2xkZXJbdGhpcy5sb2NhbGVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnLkN1c3RvbVdlbGNvbWUgJiYgY29uZmlnLkJvdEluaXRNZXNzYWdlLldlbGNvbWUgJiYgY29uZmlnLkJvdEluaXRNZXNzYWdlLldlbGNvbWVbdGhpcy5sb2NhbGVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuV2VsY29tZSA9IGNvbmZpZy5Cb3RJbml0TWVzc2FnZS5XZWxjb21lW3RoaXMubG9jYWxlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyID0ge1xuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IHRoaXMuZ3VpZCgpLFxuICAgICAgICAgICAgICAgICAgICBsYW5nOiBjb25maWcubGFuZ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb25maWcudG9rZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2VuLm5leHQoY29uZmlnLnRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1BsZWFzZSBwcm92aWRlIGVuZHBvaW50Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gcXVlcnlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIHByZXBhcmUgc2V0IGRhdGEgdG8gcHVzaCB0byBiYWNrZW5kIHNlcnZlclxuICAgICAqL1xuICAgIHByaXZhdGUgYnVpbGRRdWVyeShxdWVyeTogc3RyaW5nKTogS29udmVyc29RdWVyeSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgY3VzdG9tOiBhbnkgPSB0aGlzLmN1c3RvbURhdGEuZ2V0VmFsdWUoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmN1c3RvbSxcbiAgICAgICAgICAgIC4uLnRoaXMudXNlcixcbiAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeS5yZXBsYWNlKC9cXHMrL2csICcgJykudHJpbSgpLFxuICAgICAgICAgICAgaXNTZW5kaW5nOiB0cnVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBHZW5lcmF0ZSBSYW5kb20gdW5pcSBJZCBmb3IgS29udmVyc28gSW5zdGFuY2VcbiAgICAgKi9cbiAgICBwcml2YXRlIGd1aWQoKSB7XG4gICAgICAgIGxldCByYW5kb20gPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoMTYpXG4gICAgICAgICAgICAgICAgLnN1YnN0cmluZygxKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJhbmRvbSgpICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArICctJyArIHJhbmRvbSgpICsgJy0nICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArIHJhbmRvbSgpICsgcmFuZG9tKCk7XG4gICAgfVxufVxuIl19