import { __awaiter } from "tslib";
import { EventEmitter, Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import * as mustache from 'mustache';
export class KonversoService {
    // @ts-ignore
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
            //if (token) {
            const bearer = 'Bearer ' + token;
            this.header = new HttpHeaders({
            //'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': window.location.origin,
            //   'Authorization': bearer
            });
            //}
        });
    }
    /**
     * @param config
     * @private
     * Initialize Data for User Instance
     */
    // @ts-ignore
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
                    var _a, _b;
                    if (!user.lang && config.lang) {
                        user.lang = config.lang;
                    }
                    this.locale = user === null || user === void 0 ? void 0 : user.lang;
                    this.lang.next(this.locale);
                    if (this.locale && config.InputPlaceHolder && config.InputPlaceHolder[this.locale]) {
                        this.PlaceHolder = config.InputPlaceHolder[this.locale];
                    }
                    // @ts-ignore
                    if (this.locale && config.CustomWelcome && config.BotInitMessage.Welcome && config.BotInitMessage.Welcome[this.locale]) {
                        // @ts-ignore
                        this.Welcome = mustache.render(config.BotInitMessage.Welcome[this.locale], user);
                    }
                    if (user === null || user === void 0 ? void 0 : user.token) {
                        this.token.next(user === null || user === void 0 ? void 0 : user.token);
                    }
                    if (user === null || user === void 0 ? void 0 : user.firstVisit) {
                        this.firstVisit = true;
                        delete user.firstVisit;
                        if (((_a = config === null || config === void 0 ? void 0 : config.BotInitMessage) === null || _a === void 0 ? void 0 : _a.FirstUsage) &&
                            this.locale &&
                            ((_b = config === null || config === void 0 ? void 0 : config.BotInitMessage) === null || _b === void 0 ? void 0 : _b.FirstUsage[this.locale])) {
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
                // @ts-ignore
                if (config.CustomWelcome && config.BotInitMessage.Welcome && config.BotInitMessage.Welcome[this.locale]) {
                    // @ts-ignore
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
}
KonversoService.decorators = [
    { type: Injectable }
];
KonversoService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: ['__NgxKonverso__',] }] },
    { type: HttpClient }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29udmVyc28uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2tvbnZlcnNvL3NyYy9saWIva29udmVyc28uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRS9ELE9BQU8sRUFBQyxVQUFVLEVBQUUsV0FBVyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNyQyxPQUFPLEtBQUssUUFBUSxNQUFNLFVBQVUsQ0FBQztBQUdyQyxNQUFNLE9BQU8sZUFBZTtJQXNCMUIsYUFBYTtJQUNiLFlBQXVDLE1BQXlCLEVBQVUsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQXRCbkYsbUJBQWMsR0FBK0IsSUFBSSxZQUFZLEVBQWdCLENBQUM7UUFFOUUsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUluQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUV0QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBRzVCLFNBQUksR0FBRyxJQUFJLGVBQWUsQ0FBTSxFQUFFLENBQUMsQ0FBQztRQUNwQyxlQUFVLEdBQW1ELElBQUksZUFBZSxDQUFnQyxJQUFJLENBQUMsQ0FBQztRQUN0SCxxQkFBZ0IsR0FBeUIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEUsVUFBSyxHQUFtQyxJQUFJLGVBQWUsQ0FBZ0IsSUFBSSxDQUFDLENBQUM7UUFDekYseUNBQXlDO1FBQ2pDLFdBQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBT3pDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7O09BR0c7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SSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDO2lCQUM3QyxRQUFRLENBQUMsRUFBRSxDQUFDO2lCQUNaLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixDQUFDLENBQUM7UUFDRixPQUFPLE1BQU0sRUFBRSxHQUFHLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxNQUFNLEVBQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQztJQUN2SCxDQUFDOzs7WUFuTUYsVUFBVTs7OzRDQXdCSSxNQUFNLFNBQUMsaUJBQWlCO1lBNUIvQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbG9yU2V0LCBEZWZhdWx0QXNzZXRzLCBLb252ZXJzb0ludGVyZmFjZSwgS29udmVyc29RdWVyeSwgS29udmVyc29Vc2VyfSBmcm9tICcuLi9pbnRlcmZhY2UvS29udmVyc29JbnRlcmZhY2UnO1xuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgbXVzdGFjaGUgZnJvbSAnbXVzdGFjaGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgS29udmVyc29TZXJ2aWNlIHtcbiAgcHVibGljIGF1dGhlbnRpY2F0aW9uOiBFdmVudEVtaXR0ZXI8S29udmVyc29Vc2VyPiA9IG5ldyBFdmVudEVtaXR0ZXI8S29udmVyc29Vc2VyPigpO1xuICBwdWJsaWMgYXNzZXRzOiBEZWZhdWx0QXNzZXRzO1xuICBwdWJsaWMgZmlyc3RWaXNpdCA9IGZhbHNlO1xuICBwdWJsaWMgZmlyc3RVc2FnZVN0b3J5OiBzdHJpbmdbXTtcbiAgcHVibGljIENvbG9yU2V0OiBDb2xvclNldDtcbiAgcHVibGljIFBsYWNlSG9sZGVyOiBzdHJpbmdbXTtcbiAgcHVibGljIEFzc2lzdGFudE1vZGUgPSBmYWxzZTtcbiAgcHVibGljIFdlbGNvbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG4gIHB1YmxpYyByZWFkeVN0YXRlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBsb2NhbGU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG4gIHB1YmxpYyBfYXV0aDogYm9vbGVhbjtcbiAgcHVibGljIGxhbmcgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oJycpO1xuICBwdWJsaWMgY3VzdG9tRGF0YTogQmVoYXZpb3JTdWJqZWN0PHsgW2tleTogc3RyaW5nXTogYW55IH0gfCBudWxsPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8eyBba2V5OiBzdHJpbmddOiBhbnkgfSB8IG51bGw+KG51bGwpO1xuICBwdWJsaWMgZW11bGF0aW9uVHJpZ2dlcjogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBwcml2YXRlIHRva2VuOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nIHwgbnVsbD4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZyB8IG51bGw+KG51bGwpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICBwcml2YXRlIF90b2tlbiA9IHRoaXMudG9rZW4uYXNPYnNlcnZhYmxlKCk7XG4gIHByaXZhdGUgdXNlcjogS29udmVyc29Vc2VyO1xuICBwcml2YXRlIGhlYWRlcjogSHR0cEhlYWRlcnM7XG4gIHByaXZhdGUgZW5kcG9pbnQ6IHN0cmluZztcblxuICAvLyBAdHMtaWdub3JlXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ19fTmd4S29udmVyc29fXycpIGNvbmZpZzogS29udmVyc29JbnRlcmZhY2UsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICAgIHRoaXMuYnVpbGRIZWFkZXJzKCk7XG4gICAgdGhpcy5pbml0SW5zdGFuY2UoY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIFF1ZXJ5IFRvIGJhY2tlbmQgc2VydmVyIGFuZCBnZXQgYSByZXNwb25zZVxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICovXG4gIHB1YmxpYyBhc3luYyBzZW5kKHF1ZXJ5OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKHF1ZXJ5ICYmIHF1ZXJ5LnJlcGxhY2UobmV3IFJlZ0V4cCgnICcsICdnJyksICcnKSkge1xuICAgICAgICBpZiAodGhpcy5oZWFkZXIpIHtcbiAgICAgICAgICBjb25zdCBwcmVwYXJlZERhdGEgPSB0aGlzLmJ1aWxkUXVlcnkocXVlcnkpO1xuICAgICAgICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVyXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLmh0dHAucG9zdCh0aGlzLmVuZHBvaW50ICsgJz90PScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSwgcHJlcGFyZWREYXRhLCBvcHRpb25zKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdIZWFkZXIgaXMgbm90IHNldCwgcGxlYXNlIHByb3ZpZGUgYSB0b2tlbiB0aG91Z2ggdXNlciBzZXR0aW5nIG9yIHRob3VnaCBtb2R1bGUgY29uZmlndXJhdGlvbicpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignQ3VycmVudCBpbnB1dCBpcyBlbXB0eSwgcGxlYXNlIHRyeSBhZ2FpbicpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbXVsYXRlIHVzZXIgZW50cnkgUXVlcnkgVG8gYmFja2VuZCBzZXJ2ZXIgYW5kIGdldCBhIHJlc3BvbnNlXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKi9cbiAgcHVibGljIGFzeW5jIHNlbmRUcmlnZ2VyRW11bGF0aW9uKHF1ZXJ5OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VuZChxdWVyeSkuY2F0Y2goKGVycjogYW55KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IgdHJpZ2dlciBlbXVsYXRpb24nLCBlcnIpO1xuICAgIH0pO1xuICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgdGhpcy5lbXVsYXRpb25UcmlnZ2VyLm5leHQoe2lucHV0OiBxdWVyeSwgLi4ucmVzcG9uc2V9KVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBHZW5lcmF0ZSBIZWFkZXIgZm9yIGJhY2tlbmQgY2FsbFxuICAgKi9cbiAgcHJpdmF0ZSBidWlsZEhlYWRlcnMoKSB7XG4gICAgdGhpcy5fdG9rZW4uc3Vic2NyaWJlKCh0b2tlbjogc3RyaW5nIHwgbnVsbCkgPT4ge1xuICAgICAgLy9pZiAodG9rZW4pIHtcbiAgICAgICAgY29uc3QgYmVhcmVyOiBzdHJpbmcgPSAnQmVhcmVyICcgKyB0b2tlbjtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgIC8vJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAvLyAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogd2luZG93LmxvY2F0aW9uLm9yaWdpbixcbiAgICAgICAvLyAgICdBdXRob3JpemF0aW9uJzogYmVhcmVyXG4gICAgICAgIH0pO1xuICAgICAgLy99XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIGNvbmZpZ1xuICAgKiBAcHJpdmF0ZVxuICAgKiBJbml0aWFsaXplIERhdGEgZm9yIFVzZXIgSW5zdGFuY2VcbiAgICovXG5cbiAgLy8gQHRzLWlnbm9yZVxuICBwcml2YXRlIGluaXRJbnN0YW5jZShjb25maWc6IEtvbnZlcnNvSW50ZXJmYWNlKSB7XG4gICAgdGhpcy5fYXV0aCA9ICEhY29uZmlnLmF1dGg7XG4gICAgaWYgKGNvbmZpZy5lbmRwb2ludCkge1xuICAgICAgdGhpcy5lbmRwb2ludCA9IGNvbmZpZy5lbmRwb2ludDtcbiAgICAgIGlmIChjb25maWcuQXNzaXN0YW50TW9kZSkge1xuICAgICAgICB0aGlzLkFzc2lzdGFudE1vZGUgPSBjb25maWcuQXNzaXN0YW50TW9kZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5kZWZhdWx0QXNzZXRzKSB7XG4gICAgICAgIHRoaXMuYXNzZXRzID0gY29uZmlnLmRlZmF1bHRBc3NldHM7XG4gICAgICAgIGlmIChjb25maWcuZGVmYXVsdEFzc2V0cy5Db2xvclNldCkge1xuICAgICAgICAgIHRoaXMuQ29sb3JTZXQgPSBjb25maWcuZGVmYXVsdEFzc2V0cy5Db2xvclNldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRpb24uc3Vic2NyaWJlKCh1c2VyOiBLb252ZXJzb1VzZXIpID0+IHtcbiAgICAgICAgICBpZiAoIXVzZXIubGFuZyAmJiBjb25maWcubGFuZykge1xuICAgICAgICAgICAgdXNlci5sYW5nID0gY29uZmlnLmxhbmc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMubG9jYWxlID0gdXNlcj8ubGFuZztcbiAgICAgICAgICB0aGlzLmxhbmcubmV4dCh0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgaWYgKHRoaXMubG9jYWxlICYmIGNvbmZpZy5JbnB1dFBsYWNlSG9sZGVyICYmIGNvbmZpZy5JbnB1dFBsYWNlSG9sZGVyW3RoaXMubG9jYWxlXSkge1xuICAgICAgICAgICAgdGhpcy5QbGFjZUhvbGRlciA9IGNvbmZpZy5JbnB1dFBsYWNlSG9sZGVyW3RoaXMubG9jYWxlXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgaWYgKHRoaXMubG9jYWxlICYmIGNvbmZpZy5DdXN0b21XZWxjb21lICYmIGNvbmZpZy5Cb3RJbml0TWVzc2FnZS5XZWxjb21lICYmIGNvbmZpZy5Cb3RJbml0TWVzc2FnZS5XZWxjb21lW3RoaXMubG9jYWxlXSkge1xuXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB0aGlzLldlbGNvbWUgPSBtdXN0YWNoZS5yZW5kZXIoY29uZmlnLkJvdEluaXRNZXNzYWdlLldlbGNvbWVbdGhpcy5sb2NhbGVdLCB1c2VyKTtcblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodXNlcj8udG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW4ubmV4dCh1c2VyPy50b2tlbik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh1c2VyPy5maXJzdFZpc2l0KSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0VmlzaXQgPSB0cnVlO1xuICAgICAgICAgICAgZGVsZXRlIHVzZXIuZmlyc3RWaXNpdDtcbiAgICAgICAgICAgIGlmIChjb25maWc/LkJvdEluaXRNZXNzYWdlPy5GaXJzdFVzYWdlICYmXG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlICYmXG4gICAgICAgICAgICAgIGNvbmZpZz8uQm90SW5pdE1lc3NhZ2U/LkZpcnN0VXNhZ2VbdGhpcy5sb2NhbGVdKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmlyc3RVc2FnZVN0b3J5ID0gW107XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgaGlzdG9yeSBvZiBjb25maWcuQm90SW5pdE1lc3NhZ2UuRmlyc3RVc2FnZVt0aGlzLmxvY2FsZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0VXNhZ2VTdG9yeS5wdXNoKG11c3RhY2hlLnJlbmRlcihoaXN0b3J5LCB1c2VyKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoY29uZmlnLmxhbmcpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBjb25maWcubGFuZztcbiAgICAgICAgdGhpcy5sYW5nLm5leHQodGhpcy5sb2NhbGUpO1xuICAgICAgICBpZiAoY29uZmlnLklucHV0UGxhY2VIb2xkZXIgJiYgY29uZmlnLklucHV0UGxhY2VIb2xkZXJbdGhpcy5sb2NhbGVdKSB7XG4gICAgICAgICAgdGhpcy5QbGFjZUhvbGRlciA9IGNvbmZpZy5JbnB1dFBsYWNlSG9sZGVyW3RoaXMubG9jYWxlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKGNvbmZpZy5DdXN0b21XZWxjb21lICYmIGNvbmZpZy5Cb3RJbml0TWVzc2FnZS5XZWxjb21lICYmIGNvbmZpZy5Cb3RJbml0TWVzc2FnZS5XZWxjb21lW3RoaXMubG9jYWxlXSkge1xuXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIHRoaXMuV2VsY29tZSA9IGNvbmZpZy5Cb3RJbml0TWVzc2FnZS5XZWxjb21lW3RoaXMubG9jYWxlXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVzZXIgPSB7XG4gICAgICAgICAgdXNlcklkOiB0aGlzLmd1aWQoKSxcbiAgICAgICAgICBsYW5nOiBjb25maWcubGFuZ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGNvbmZpZy50b2tlbikge1xuICAgICAgICB0aGlzLnRva2VuLm5leHQoY29uZmlnLnRva2VuKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignUGxlYXNlIHByb3ZpZGUgZW5kcG9pbnQnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqIEBwcml2YXRlXG4gICAqIHByZXBhcmUgc2V0IGRhdGEgdG8gcHVzaCB0byBiYWNrZW5kIHNlcnZlclxuICAgKi9cbiAgcHJpdmF0ZSBidWlsZFF1ZXJ5KHF1ZXJ5OiBzdHJpbmcpOiBLb252ZXJzb1F1ZXJ5IHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgY3VzdG9tOiBhbnkgPSB0aGlzLmN1c3RvbURhdGEuZ2V0VmFsdWUoKTtcbiAgICByZXR1cm4ge1xuICAgICAgLi4uY3VzdG9tLFxuICAgICAgLi4udGhpcy51c2VyLFxuICAgICAgcXVlcnk6IHF1ZXJ5LnJlcGxhY2UoL1xccysvZywgJyAnKS50cmltKCksXG4gICAgICBpc1NlbmRpbmc6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEdlbmVyYXRlIFJhbmRvbSB1bmlxIElkIGZvciBLb252ZXJzbyBJbnN0YW5jZVxuICAgKi9cbiAgcHJpdmF0ZSBndWlkKCkge1xuICAgIGxldCByYW5kb20gPSAoKSA9PiB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcbiAgICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgICAuc3Vic3RyaW5nKDEpO1xuICAgIH07XG4gICAgcmV0dXJuIHJhbmRvbSgpICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArICctJyArIHJhbmRvbSgpICsgJy0nICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArIHJhbmRvbSgpICsgcmFuZG9tKCk7XG4gIH1cbn1cbiJdfQ==