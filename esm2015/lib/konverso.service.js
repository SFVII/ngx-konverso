import { __awaiter } from "tslib";
import { EventEmitter, Inject, Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import * as mustache from 'mustache';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class KonversoService {
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
        this.customData = new BehaviorSubject(null);
        this.emulationTrigger = new BehaviorSubject(null);
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
KonversoService.ɵfac = function KonversoService_Factory(t) { return new (t || KonversoService)(i0.ɵɵinject('__NgxKonverso__'), i0.ɵɵinject(i1.HttpClient)); };
KonversoService.ɵprov = i0.ɵɵdefineInjectable({ token: KonversoService, factory: KonversoService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(KonversoService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['__NgxKonverso__']
            }] }, { type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29udmVyc28uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2tvbnZlcnNvLyIsInNvdXJjZXMiOlsibGliL2tvbnZlcnNvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUvRCxPQUFPLEVBQWEsV0FBVyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUNyQyxPQUFPLEtBQUssUUFBUSxNQUFNLFVBQVUsQ0FBQzs7O0FBR3JDLE1BQU0sT0FBTyxlQUFlO0lBc0J4QixZQUF1QyxNQUF5QixFQUFVLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFyQm5GLG1CQUFjLEdBQStCLElBQUksWUFBWSxFQUFnQixDQUFDO1FBRTlFLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFJbkIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFdEIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUUzQixVQUFLLEdBQTRCLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBQzNFLHlDQUF5QztRQUNqQyxXQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUtwQyxTQUFJLEdBQUcsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0IsZUFBVSxHQUE0QyxJQUFJLGVBQWUsQ0FBeUIsSUFBSSxDQUFDLENBQUM7UUFDeEcscUJBQWdCLEdBQXlCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBR3RFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7O09BR0c7SUFDVSxJQUFJLENBQUMsS0FBYTs7WUFDM0IsT0FBTyxJQUFJLE9B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O0lBQ3pILENBQUM7OzhFQXJMUSxlQUFlLGNBc0JKLGlCQUFpQjt1REF0QjVCLGVBQWUsV0FBZixlQUFlO2tEQUFmLGVBQWU7Y0FEM0IsVUFBVTs7c0JBdUJNLE1BQU07dUJBQUMsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbG9yU2V0LCBEZWZhdWx0QXNzZXRzLCBLb252ZXJzb0ludGVyZmFjZSwgS29udmVyc29RdWVyeSwgS29udmVyc29Vc2VyfSBmcm9tICcuLi9pbnRlcmZhY2UvS29udmVyc29JbnRlcmZhY2UnO1xuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgbXVzdGFjaGUgZnJvbSAnbXVzdGFjaGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgS29udmVyc29TZXJ2aWNlIHtcbiAgICBwdWJsaWMgYXV0aGVudGljYXRpb246IEV2ZW50RW1pdHRlcjxLb252ZXJzb1VzZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxLb252ZXJzb1VzZXI+KCk7XG4gICAgcHVibGljIGFzc2V0czogRGVmYXVsdEFzc2V0cztcbiAgICBwdWJsaWMgZmlyc3RWaXNpdCA9IGZhbHNlO1xuICAgIHB1YmxpYyBmaXJzdFVzYWdlU3Rvcnk6IHN0cmluZ1tdO1xuICAgIHB1YmxpYyBDb2xvclNldDogQ29sb3JTZXQ7XG4gICAgcHVibGljIFBsYWNlSG9sZGVyOiBzdHJpbmdbXTtcbiAgICBwdWJsaWMgQXNzaXN0YW50TW9kZSA9IGZhbHNlO1xuICAgIHB1YmxpYyBXZWxjb21lOiBzdHJpbmc7XG4gICAgcHVibGljIHJlYWR5U3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgbG9jYWxlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSB0b2tlbjogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgICBwcml2YXRlIF90b2tlbiA9IHRoaXMudG9rZW4uYXNPYnNlcnZhYmxlKCk7XG4gICAgcHJpdmF0ZSB1c2VyOiBLb252ZXJzb1VzZXI7XG4gICAgcHJpdmF0ZSBoZWFkZXI6IEh0dHBIZWFkZXJzO1xuICAgIHByaXZhdGUgZW5kcG9pbnQ6IHN0cmluZztcbiAgICBwdWJsaWMgX2F1dGg6IGJvb2xlYW47XG4gICAgcHVibGljIGxhbmcgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KCcnKTtcbiAgICBwdWJsaWMgY3VzdG9tRGF0YTogQmVoYXZpb3JTdWJqZWN0PHsgW2tleTogc3RyaW5nXTogYW55IH0+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDx7IFtrZXk6IHN0cmluZ106IGFueSB9PihudWxsKTtcbiAgICBwdWJsaWMgZW11bGF0aW9uVHJpZ2dlcjogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXG4gICAgY29uc3RydWN0b3IoQEluamVjdCgnX19OZ3hLb252ZXJzb19fJykgY29uZmlnOiBLb252ZXJzb0ludGVyZmFjZSwgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgICAgIHRoaXMuYnVpbGRIZWFkZXJzKCk7XG4gICAgICAgIHRoaXMuaW5pdEluc3RhbmNlKGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VuZCBRdWVyeSBUbyBiYWNrZW5kIHNlcnZlciBhbmQgZ2V0IGEgcmVzcG9uc2VcbiAgICAgKiBAcGFyYW0gcXVlcnlcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgc2VuZChxdWVyeTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBhbnk+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChxdWVyeSAmJiBxdWVyeS5yZXBsYWNlKG5ldyBSZWdFeHAoJyAnLCAnZycpLCAnJykpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oZWFkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJlcGFyZWREYXRhID0gdGhpcy5idWlsZFF1ZXJ5KHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5odHRwLnBvc3QodGhpcy5lbmRwb2ludCArICc/dD0nICsgbmV3IERhdGUoKS5nZXRUaW1lKCksIHByZXBhcmVkRGF0YSwgb3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdIZWFkZXIgaXMgbm90IHNldCwgcGxlYXNlIHByb3ZpZGUgYSB0b2tlbiB0aG91Z2ggdXNlciBzZXR0aW5nIG9yIHRob3VnaCBtb2R1bGUgY29uZmlndXJhdGlvbicpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0N1cnJlbnQgaW5wdXQgaXMgZW1wdHksIHBsZWFzZSB0cnkgYWdhaW4nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVtdWxhdGUgdXNlciBlbnRyeSBRdWVyeSBUbyBiYWNrZW5kIHNlcnZlciBhbmQgZ2V0IGEgcmVzcG9uc2VcbiAgICAgKiBAcGFyYW0gcXVlcnlcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgc2VuZFRyaWdnZXJFbXVsYXRpb24ocXVlcnk6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VuZChxdWVyeSkuY2F0Y2goKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgdHJpZ2dlciBlbXVsYXRpb24nLCBlcnIpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0aGlzLmVtdWxhdGlvblRyaWdnZXIubmV4dCh7aW5wdXQgOiBxdWVyeSwgLi4ucmVzcG9uc2V9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBHZW5lcmF0ZSBIZWFkZXIgZm9yIGJhY2tlbmQgY2FsbFxuICAgICAqL1xuICAgIHByaXZhdGUgYnVpbGRIZWFkZXJzKCkge1xuICAgICAgICB0aGlzLl90b2tlbi5zdWJzY3JpYmUoKHRva2VuOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJlYXJlcjogc3RyaW5nID0gJ0JlYXJlciAnICsgdG9rZW47XG4gICAgICAgICAgICB0aGlzLmhlYWRlciA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICAgICAgICAgLy8nQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIC8vICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLFxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYmVhcmVyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqIEBwcml2YXRlXG4gICAgICogSW5pdGlhbGl6ZSBEYXRhIGZvciBVc2VyIEluc3RhbmNlXG4gICAgICovXG4gICAgcHJpdmF0ZSBpbml0SW5zdGFuY2UoY29uZmlnOiBLb252ZXJzb0ludGVyZmFjZSkge1xuICAgICAgICB0aGlzLl9hdXRoID0gISFjb25maWcuYXV0aDtcbiAgICAgICAgaWYgKGNvbmZpZy5lbmRwb2ludCkge1xuICAgICAgICAgICAgdGhpcy5lbmRwb2ludCA9IGNvbmZpZy5lbmRwb2ludDtcbiAgICAgICAgICAgIGlmIChjb25maWcuQXNzaXN0YW50TW9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuQXNzaXN0YW50TW9kZSA9IGNvbmZpZy5Bc3Npc3RhbnRNb2RlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY29uZmlnLmRlZmF1bHRBc3NldHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFzc2V0cyA9IGNvbmZpZy5kZWZhdWx0QXNzZXRzO1xuICAgICAgICAgICAgICAgIGlmIChjb25maWcuZGVmYXVsdEFzc2V0cy5Db2xvclNldCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkNvbG9yU2V0ID0gY29uZmlnLmRlZmF1bHRBc3NldHMuQ29sb3JTZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoZW50aWNhdGlvbi5zdWJzY3JpYmUoKHVzZXI6IEtvbnZlcnNvVXNlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXVzZXIubGFuZyAmJiBjb25maWcubGFuZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5sYW5nID0gY29uZmlnLmxhbmc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSB1c2VyPy5sYW5nO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmcubmV4dCh0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcuSW5wdXRQbGFjZUhvbGRlciAmJiBjb25maWcuSW5wdXRQbGFjZUhvbGRlclt0aGlzLmxvY2FsZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUGxhY2VIb2xkZXIgPSBjb25maWcuSW5wdXRQbGFjZUhvbGRlclt0aGlzLmxvY2FsZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5DdXN0b21XZWxjb21lICYmIGNvbmZpZy5Cb3RJbml0TWVzc2FnZS5XZWxjb21lICYmIGNvbmZpZy5Cb3RJbml0TWVzc2FnZS5XZWxjb21lW3RoaXMubG9jYWxlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5XZWxjb21lID0gbXVzdGFjaGUucmVuZGVyKGNvbmZpZy5Cb3RJbml0TWVzc2FnZS5XZWxjb21lW3RoaXMubG9jYWxlXSwgdXNlcik7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlcj8udG9rZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW4ubmV4dCh1c2VyPy50b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXI/LmZpcnN0VmlzaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RWaXNpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdXNlci5maXJzdFZpc2l0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZz8uQm90SW5pdE1lc3NhZ2U/LkZpcnN0VXNhZ2UgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZz8uQm90SW5pdE1lc3NhZ2U/LkZpcnN0VXNhZ2VbdGhpcy5sb2NhbGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdFVzYWdlU3RvcnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGhpc3Rvcnkgb2YgY29uZmlnLkJvdEluaXRNZXNzYWdlLkZpcnN0VXNhZ2VbdGhpcy5sb2NhbGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RVc2FnZVN0b3J5LnB1c2gobXVzdGFjaGUucmVuZGVyKGhpc3RvcnksIHVzZXIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29uZmlnLmxhbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9IGNvbmZpZy5sYW5nO1xuICAgICAgICAgICAgICAgIHRoaXMubGFuZy5uZXh0KHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnLklucHV0UGxhY2VIb2xkZXIgJiYgY29uZmlnLklucHV0UGxhY2VIb2xkZXJbdGhpcy5sb2NhbGVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUGxhY2VIb2xkZXIgPSBjb25maWcuSW5wdXRQbGFjZUhvbGRlclt0aGlzLmxvY2FsZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb25maWcuQ3VzdG9tV2VsY29tZSAmJiBjb25maWcuQm90SW5pdE1lc3NhZ2UuV2VsY29tZSAmJiBjb25maWcuQm90SW5pdE1lc3NhZ2UuV2VsY29tZVt0aGlzLmxvY2FsZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5XZWxjb21lID0gY29uZmlnLkJvdEluaXRNZXNzYWdlLldlbGNvbWVbdGhpcy5sb2NhbGVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogdGhpcy5ndWlkKCksXG4gICAgICAgICAgICAgICAgICAgIGxhbmc6IGNvbmZpZy5sYW5nXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbmZpZy50b2tlbikge1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW4ubmV4dChjb25maWcudG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcignUGxlYXNlIHByb3ZpZGUgZW5kcG9pbnQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBxdWVyeVxuICAgICAqIEBwcml2YXRlXG4gICAgICogcHJlcGFyZSBzZXQgZGF0YSB0byBwdXNoIHRvIGJhY2tlbmQgc2VydmVyXG4gICAgICovXG4gICAgcHJpdmF0ZSBidWlsZFF1ZXJ5KHF1ZXJ5OiBzdHJpbmcpOiBLb252ZXJzb1F1ZXJ5IHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBjdXN0b206IGFueSA9IHRoaXMuY3VzdG9tRGF0YS5nZXRWYWx1ZSgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uY3VzdG9tLFxuICAgICAgICAgICAgLi4udGhpcy51c2VyLFxuICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5LnJlcGxhY2UoL1xccysvZywgJyAnKS50cmltKCksXG4gICAgICAgICAgICBpc1NlbmRpbmc6IHRydWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEdlbmVyYXRlIFJhbmRvbSB1bmlxIElkIGZvciBLb252ZXJzbyBJbnN0YW5jZVxuICAgICAqL1xuICAgIHByaXZhdGUgZ3VpZCgpIHtcbiAgICAgICAgbGV0IHJhbmRvbSA9ICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxuICAgICAgICAgICAgICAgIC50b1N0cmluZygxNilcbiAgICAgICAgICAgICAgICAuc3Vic3RyaW5nKDEpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmFuZG9tKCkgKyByYW5kb20oKSArICctJyArIHJhbmRvbSgpICsgJy0nICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArICctJyArIHJhbmRvbSgpICsgcmFuZG9tKCkgKyByYW5kb20oKTtcbiAgICB9XG59XG4iXX0=