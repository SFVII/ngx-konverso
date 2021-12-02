import { __assign, __awaiter, __decorate, __generator, __param, __values } from "tslib";
import { EventEmitter, Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import mustache from 'mustache';
var KonversoService = /** @class */ (function () {
    function KonversoService(config, http) {
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
    KonversoService.prototype.send = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (query && query.replace(new RegExp(' ', 'g'), '')) {
                            if (_this.header) {
                                var preparedData = _this.buildQuery(query);
                                var options = {
                                    headers: _this.header
                                };
                                _this.http.post(_this.endpoint + '?t=' + new Date().getTime(), preparedData, options)
                                    .subscribe(function (data) {
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
                    })];
            });
        });
    };
    /**
     * Emulate user entry Query To backend server and get a response
     * @param query
     */
    KonversoService.prototype.sendTriggerEmulation = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.send(query).catch(function (err) {
                            console.log('error trigger emulation', err);
                        })];
                    case 1:
                        response = _a.sent();
                        if (response) {
                            this.emulationTrigger.next(__assign({ input: query }, response));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * Generate Header for backend call
     */
    KonversoService.prototype.buildHeaders = function () {
        var _this = this;
        this._token.subscribe(function (token) {
            var bearer = 'Bearer ' + token;
            _this.header = new HttpHeaders({
                //'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': window.location.origin,
                'Authorization': bearer
            });
        });
    };
    /**
     * @param config
     * @private
     * Initialize Data for User Instance
     */
    KonversoService.prototype.initInstance = function (config) {
        var _this = this;
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
                this.authentication.subscribe(function (user) {
                    var e_1, _a;
                    var _b, _c, _d, _e, _f, _g, _h, _j;
                    if (!user.lang && config.lang) {
                        user.lang = config.lang;
                    }
                    _this.locale = (_b = user) === null || _b === void 0 ? void 0 : _b.lang;
                    _this.lang.next(_this.locale);
                    if (config.InputPlaceHolder && config.InputPlaceHolder[_this.locale]) {
                        _this.PlaceHolder = config.InputPlaceHolder[_this.locale];
                    }
                    if (config.CustomWelcome && config.BotInitMessage.Welcome && config.BotInitMessage.Welcome[_this.locale]) {
                        _this.Welcome = mustache.render(config.BotInitMessage.Welcome[_this.locale], user);
                    }
                    if ((_c = user) === null || _c === void 0 ? void 0 : _c.token) {
                        _this.token.next((_d = user) === null || _d === void 0 ? void 0 : _d.token);
                    }
                    if ((_e = user) === null || _e === void 0 ? void 0 : _e.firstVisit) {
                        _this.firstVisit = true;
                        delete user.firstVisit;
                        if (((_g = (_f = config) === null || _f === void 0 ? void 0 : _f.BotInitMessage) === null || _g === void 0 ? void 0 : _g.FirstUsage) &&
                            _this.locale && ((_j = (_h = config) === null || _h === void 0 ? void 0 : _h.BotInitMessage) === null || _j === void 0 ? void 0 : _j.FirstUsage[_this.locale])) {
                            _this.firstUsageStory = [];
                            try {
                                for (var _k = __values(config.BotInitMessage.FirstUsage[_this.locale]), _l = _k.next(); !_l.done; _l = _k.next()) {
                                    var history_1 = _l.value;
                                    _this.firstUsageStory.push(mustache.render(history_1, user));
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (_l && !_l.done && (_a = _k.return)) _a.call(_k);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                        }
                    }
                    _this.user = user;
                    _this.readyState = true;
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
    };
    /**
     * @param query
     * @private
     * prepare set data to push to backend server
     */
    KonversoService.prototype.buildQuery = function (query) {
        // @ts-ignore
        var custom = this.customData.getValue();
        return __assign(__assign(__assign({}, custom), this.user), { query: query.replace(/\s+/g, ' ').trim(), isSending: true });
    };
    /**
     * @private
     * Generate Random uniq Id for Konverso Instance
     */
    KonversoService.prototype.guid = function () {
        var random = function () {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        return random() + random() + '-' + random() + '-' + random() + '-' + random() + '-' + random() + random() + random();
    };
    KonversoService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: ['__NgxKonverso__',] }] },
        { type: HttpClient }
    ]; };
    KonversoService = __decorate([
        Injectable(),
        __param(0, Inject('__NgxKonverso__'))
    ], KonversoService);
    return KonversoService;
}());
export { KonversoService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29udmVyc28uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2tvbnZlcnNvLyIsInNvdXJjZXMiOlsibGliL2tvbnZlcnNvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUvRCxPQUFPLEVBQUMsVUFBVSxFQUFFLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzdELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDckMsT0FBTyxRQUFRLE1BQU0sVUFBVSxDQUFDO0FBR2hDO0lBc0JJLHlCQUF1QyxNQUF5QixFQUFVLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFyQm5GLG1CQUFjLEdBQStCLElBQUksWUFBWSxFQUFnQixDQUFDO1FBRTlFLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFJbkIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFdEIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUUzQixVQUFLLEdBQTRCLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBQzNFLHlDQUF5QztRQUNqQyxXQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUtwQyxTQUFJLEdBQUcsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDL0IsZUFBVSxHQUE0QyxJQUFJLGVBQWUsQ0FBeUIsSUFBSSxDQUFDLENBQUM7UUFDeEcscUJBQWdCLEdBQXlCLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBR3RFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7O09BR0c7SUFDVSw4QkFBSSxHQUFqQixVQUFrQixLQUFhOzs7O2dCQUMzQixzQkFBTyxJQUFJLE9B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TUFBTSxFQUFFLEdBQUcsTUFBTSxFQUFFLEdBQUcsTUFBTSxFQUFFLENBQUM7SUFDekgsQ0FBQzs7Z0RBL0pZLE1BQU0sU0FBQyxpQkFBaUI7Z0JBQTJDLFVBQVU7O0lBdEJqRixlQUFlO1FBRDNCLFVBQVUsRUFBRTtRQXVCSSxXQUFBLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO09BdEI3QixlQUFlLENBc0wzQjtJQUFELHNCQUFDO0NBQUEsQUF0TEQsSUFzTEM7U0F0TFksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRFbWl0dGVyLCBJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb2xvclNldCwgRGVmYXVsdEFzc2V0cywgS29udmVyc29JbnRlcmZhY2UsIEtvbnZlcnNvUXVlcnksIEtvbnZlcnNvVXNlcn0gZnJvbSAnLi4vaW50ZXJmYWNlL0tvbnZlcnNvSW50ZXJmYWNlJztcbmltcG9ydCB7SHR0cENsaWVudCwgSHR0cEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcbmltcG9ydCBtdXN0YWNoZSBmcm9tICdtdXN0YWNoZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBLb252ZXJzb1NlcnZpY2Uge1xuICAgIHB1YmxpYyBhdXRoZW50aWNhdGlvbjogRXZlbnRFbWl0dGVyPEtvbnZlcnNvVXNlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPEtvbnZlcnNvVXNlcj4oKTtcbiAgICBwdWJsaWMgYXNzZXRzOiBEZWZhdWx0QXNzZXRzO1xuICAgIHB1YmxpYyBmaXJzdFZpc2l0ID0gZmFsc2U7XG4gICAgcHVibGljIGZpcnN0VXNhZ2VTdG9yeTogc3RyaW5nW107XG4gICAgcHVibGljIENvbG9yU2V0OiBDb2xvclNldDtcbiAgICBwdWJsaWMgUGxhY2VIb2xkZXI6IHN0cmluZ1tdO1xuICAgIHB1YmxpYyBBc3Npc3RhbnRNb2RlID0gZmFsc2U7XG4gICAgcHVibGljIFdlbGNvbWU6IHN0cmluZztcbiAgICBwdWJsaWMgcmVhZHlTdGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBsb2NhbGU6IHN0cmluZztcbiAgICBwcml2YXRlIHRva2VuOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICAgIHByaXZhdGUgX3Rva2VuID0gdGhpcy50b2tlbi5hc09ic2VydmFibGUoKTtcbiAgICBwcml2YXRlIHVzZXI6IEtvbnZlcnNvVXNlcjtcbiAgICBwcml2YXRlIGhlYWRlcjogSHR0cEhlYWRlcnM7XG4gICAgcHJpdmF0ZSBlbmRwb2ludDogc3RyaW5nO1xuICAgIHB1YmxpYyBfYXV0aDogYm9vbGVhbjtcbiAgICBwdWJsaWMgbGFuZyA9IG5ldyBCZWhhdmlvclN1YmplY3QoJycpO1xuICAgIHB1YmxpYyBjdXN0b21EYXRhOiBCZWhhdmlvclN1YmplY3Q8eyBba2V5OiBzdHJpbmddOiBhbnkgfT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHsgW2tleTogc3RyaW5nXTogYW55IH0+KG51bGwpO1xuICAgIHB1YmxpYyBlbXVsYXRpb25UcmlnZ2VyOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KCdfX05neEtvbnZlcnNvX18nKSBjb25maWc6IEtvbnZlcnNvSW50ZXJmYWNlLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICAgICAgdGhpcy5idWlsZEhlYWRlcnMoKTtcbiAgICAgICAgdGhpcy5pbml0SW5zdGFuY2UoY29uZmlnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZW5kIFF1ZXJ5IFRvIGJhY2tlbmQgc2VydmVyIGFuZCBnZXQgYSByZXNwb25zZVxuICAgICAqIEBwYXJhbSBxdWVyeVxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBzZW5kKHF1ZXJ5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5ICYmIHF1ZXJ5LnJlcGxhY2UobmV3IFJlZ0V4cCgnICcsICdnJyksICcnKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhlYWRlcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmVwYXJlZERhdGEgPSB0aGlzLmJ1aWxkUXVlcnkocXVlcnkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlclxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmh0dHAucG9zdCh0aGlzLmVuZHBvaW50ICsgJz90PScgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKSwgcHJlcGFyZWREYXRhLCBvcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0hlYWRlciBpcyBub3Qgc2V0LCBwbGVhc2UgcHJvdmlkZSBhIHRva2VuIHRob3VnaCB1c2VyIHNldHRpbmcgb3IgdGhvdWdoIG1vZHVsZSBjb25maWd1cmF0aW9uJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignQ3VycmVudCBpbnB1dCBpcyBlbXB0eSwgcGxlYXNlIHRyeSBhZ2FpbicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRW11bGF0ZSB1c2VyIGVudHJ5IFF1ZXJ5IFRvIGJhY2tlbmQgc2VydmVyIGFuZCBnZXQgYSByZXNwb25zZVxuICAgICAqIEBwYXJhbSBxdWVyeVxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBzZW5kVHJpZ2dlckVtdWxhdGlvbihxdWVyeTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZW5kKHF1ZXJ5KS5jYXRjaCgoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciB0cmlnZ2VyIGVtdWxhdGlvbicsIGVycik7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRoaXMuZW11bGF0aW9uVHJpZ2dlci5uZXh0KHtpbnB1dCA6IHF1ZXJ5LCAuLi5yZXNwb25zZX0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEdlbmVyYXRlIEhlYWRlciBmb3IgYmFja2VuZCBjYWxsXG4gICAgICovXG4gICAgcHJpdmF0ZSBidWlsZEhlYWRlcnMoKSB7XG4gICAgICAgIHRoaXMuX3Rva2VuLnN1YnNjcmliZSgodG9rZW46IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmVhcmVyOiBzdHJpbmcgPSAnQmVhcmVyICcgKyB0b2tlbjtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAgICAgICAvLydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgLy8gJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4sXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBiZWFyZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBJbml0aWFsaXplIERhdGEgZm9yIFVzZXIgSW5zdGFuY2VcbiAgICAgKi9cbiAgICBwcml2YXRlIGluaXRJbnN0YW5jZShjb25maWc6IEtvbnZlcnNvSW50ZXJmYWNlKSB7XG4gICAgICAgIHRoaXMuX2F1dGggPSAhIWNvbmZpZy5hdXRoO1xuICAgICAgICBpZiAoY29uZmlnLmVuZHBvaW50KSB7XG4gICAgICAgICAgICB0aGlzLmVuZHBvaW50ID0gY29uZmlnLmVuZHBvaW50O1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5Bc3Npc3RhbnRNb2RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5Bc3Npc3RhbnRNb2RlID0gY29uZmlnLkFzc2lzdGFudE1vZGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb25maWcuZGVmYXVsdEFzc2V0cykge1xuICAgICAgICAgICAgICAgIHRoaXMuYXNzZXRzID0gY29uZmlnLmRlZmF1bHRBc3NldHM7XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5kZWZhdWx0QXNzZXRzLkNvbG9yU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQ29sb3JTZXQgPSBjb25maWcuZGVmYXVsdEFzc2V0cy5Db2xvclNldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uLnN1YnNjcmliZSgodXNlcjogS29udmVyc29Vc2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdXNlci5sYW5nICYmIGNvbmZpZy5sYW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyLmxhbmcgPSBjb25maWcubGFuZztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZSA9IHVzZXI/Lmxhbmc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFuZy5uZXh0KHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5JbnB1dFBsYWNlSG9sZGVyICYmIGNvbmZpZy5JbnB1dFBsYWNlSG9sZGVyW3RoaXMubG9jYWxlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGFjZUhvbGRlciA9IGNvbmZpZy5JbnB1dFBsYWNlSG9sZGVyW3RoaXMubG9jYWxlXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLkN1c3RvbVdlbGNvbWUgJiYgY29uZmlnLkJvdEluaXRNZXNzYWdlLldlbGNvbWUgJiYgY29uZmlnLkJvdEluaXRNZXNzYWdlLldlbGNvbWVbdGhpcy5sb2NhbGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLldlbGNvbWUgPSBtdXN0YWNoZS5yZW5kZXIoY29uZmlnLkJvdEluaXRNZXNzYWdlLldlbGNvbWVbdGhpcy5sb2NhbGVdLCB1c2VyKTtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh1c2VyPy50b2tlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tlbi5uZXh0KHVzZXI/LnRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlcj8uZmlyc3RWaXNpdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdFZpc2l0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB1c2VyLmZpcnN0VmlzaXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnPy5Cb3RJbml0TWVzc2FnZT8uRmlyc3RVc2FnZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnPy5Cb3RJbml0TWVzc2FnZT8uRmlyc3RVc2FnZVt0aGlzLmxvY2FsZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0VXNhZ2VTdG9yeSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaGlzdG9yeSBvZiBjb25maWcuQm90SW5pdE1lc3NhZ2UuRmlyc3RVc2FnZVt0aGlzLmxvY2FsZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdFVzYWdlU3RvcnkucHVzaChtdXN0YWNoZS5yZW5kZXIoaGlzdG9yeSwgdXNlcikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb25maWcubGFuZykge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gY29uZmlnLmxhbmc7XG4gICAgICAgICAgICAgICAgdGhpcy5sYW5nLm5leHQodGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgICAgIGlmIChjb25maWcuSW5wdXRQbGFjZUhvbGRlciAmJiBjb25maWcuSW5wdXRQbGFjZUhvbGRlclt0aGlzLmxvY2FsZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5QbGFjZUhvbGRlciA9IGNvbmZpZy5JbnB1dFBsYWNlSG9sZGVyW3RoaXMubG9jYWxlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5DdXN0b21XZWxjb21lICYmIGNvbmZpZy5Cb3RJbml0TWVzc2FnZS5XZWxjb21lICYmIGNvbmZpZy5Cb3RJbml0TWVzc2FnZS5XZWxjb21lW3RoaXMubG9jYWxlXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLldlbGNvbWUgPSBjb25maWcuQm90SW5pdE1lc3NhZ2UuV2VsY29tZVt0aGlzLmxvY2FsZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudXNlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkOiB0aGlzLmd1aWQoKSxcbiAgICAgICAgICAgICAgICAgICAgbGFuZzogY29uZmlnLmxhbmdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29uZmlnLnRva2VuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbi5uZXh0KGNvbmZpZy50b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdQbGVhc2UgcHJvdmlkZSBlbmRwb2ludCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHF1ZXJ5XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBwcmVwYXJlIHNldCBkYXRhIHRvIHB1c2ggdG8gYmFja2VuZCBzZXJ2ZXJcbiAgICAgKi9cbiAgICBwcml2YXRlIGJ1aWxkUXVlcnkocXVlcnk6IHN0cmluZyk6IEtvbnZlcnNvUXVlcnkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGN1c3RvbTogYW55ID0gdGhpcy5jdXN0b21EYXRhLmdldFZhbHVlKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5jdXN0b20sXG4gICAgICAgICAgICAuLi50aGlzLnVzZXIsXG4gICAgICAgICAgICBxdWVyeTogcXVlcnkucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKSxcbiAgICAgICAgICAgIGlzU2VuZGluZzogdHJ1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogR2VuZXJhdGUgUmFuZG9tIHVuaXEgSWQgZm9yIEtvbnZlcnNvIEluc3RhbmNlXG4gICAgICovXG4gICAgcHJpdmF0ZSBndWlkKCkge1xuICAgICAgICBsZXQgcmFuZG9tID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgICAgICAgICAgIC5zdWJzdHJpbmcoMSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiByYW5kb20oKSArIHJhbmRvbSgpICsgJy0nICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArICctJyArIHJhbmRvbSgpICsgJy0nICsgcmFuZG9tKCkgKyByYW5kb20oKSArIHJhbmRvbSgpO1xuICAgIH1cbn1cbiJdfQ==