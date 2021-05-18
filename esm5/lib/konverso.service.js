import { __assign, __awaiter, __decorate, __generator, __param, __values } from "tslib";
import { EventEmitter, Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import * as mustache from 'mustache';
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
                    var _b, _c, _d, _e;
                    if (!user.lang && config.lang) {
                        user.lang = config.lang;
                    }
                    _this.locale = user.lang;
                    if (config.InputPlaceHolder && config.InputPlaceHolder[_this.locale]) {
                        _this.PlaceHolder = config.InputPlaceHolder[_this.locale];
                    }
                    if (config.CustomWelcome && config.BotInitMessage.Welcome && config.BotInitMessage.Welcome[_this.locale]) {
                        _this.Welcome = mustache.render(config.BotInitMessage.Welcome[_this.locale], user);
                    }
                    if (user.token) {
                        _this.token.next(user.token);
                    }
                    if (user.firstVisit) {
                        _this.firstVisit = true;
                        delete user.firstVisit;
                        if (((_c = (_b = config) === null || _b === void 0 ? void 0 : _b.BotInitMessage) === null || _c === void 0 ? void 0 : _c.FirstUsage) &&
                            _this.locale && ((_e = (_d = config) === null || _d === void 0 ? void 0 : _d.BotInitMessage) === null || _e === void 0 ? void 0 : _e.FirstUsage[_this.locale])) {
                            _this.firstUsageStory = [];
                            try {
                                for (var _f = __values(config.BotInitMessage.FirstUsage[_this.locale]), _g = _f.next(); !_g.done; _g = _f.next()) {
                                    var history_1 = _g.value;
                                    _this.firstUsageStory.push(mustache.render(history_1, user));
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (_g && !_g.done && (_a = _f.return)) _a.call(_f);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                        }
                    }
                    _this.user = user;
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
            this.readyState = true;
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
        return __assign(__assign({}, this.user), { query: query.replace(/\s+/g, ' ').trim(), isSending: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29udmVyc28uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2tvbnZlcnNvLyIsInNvdXJjZXMiOlsibGliL2tvbnZlcnNvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUvRCxPQUFPLEVBQUMsVUFBVSxFQUFFLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzdELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDckMsT0FBTyxLQUFLLFFBQVEsTUFBTSxVQUFVLENBQUM7QUFHckM7SUFrQkUseUJBQXVDLE1BQXlCLEVBQVUsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQWpCbkYsbUJBQWMsR0FBK0IsSUFBSSxZQUFZLEVBQWdCLENBQUM7UUFFOUUsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUluQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUV0QixlQUFVLEdBQWEsS0FBSyxDQUFDO1FBRTVCLFVBQUssR0FBNEIsSUFBSSxlQUFlLENBQVMsSUFBSSxDQUFDLENBQUM7UUFDM0UseUNBQXlDO1FBQ2pDLFdBQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBTXpDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7O09BR0c7SUFDVSw4QkFBSSxHQUFqQixVQUFrQixLQUFhOzs7O2dCQUM3QixzQkFBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO3dCQUNqQyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTs0QkFDcEQsSUFBSSxL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QUMsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQztRQUNGLE9BQU8sTUFBTSxFQUFFLEdBQUcsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLE1BQU0sRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFDO0lBQ3ZILENBQUM7O2dEQTVJWSxNQUFNLFNBQUMsaUJBQWlCO2dCQUEyQyxVQUFVOztJQWxCL0UsZUFBZTtRQUQzQixVQUFVLEVBQUU7UUFtQkUsV0FBQSxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtPQWxCM0IsZUFBZSxDQStKM0I7SUFBRCxzQkFBQztDQUFBLEFBL0pELElBK0pDO1NBL0pZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50RW1pdHRlciwgSW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q29sb3JTZXQsIERlZmF1bHRBc3NldHMsIEtvbnZlcnNvSW50ZXJmYWNlLCBLb252ZXJzb1F1ZXJ5LCBLb252ZXJzb1VzZXJ9IGZyb20gJy4uL2ludGVyZmFjZS9Lb252ZXJzb0ludGVyZmFjZSc7XG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyBtdXN0YWNoZSBmcm9tICdtdXN0YWNoZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBLb252ZXJzb1NlcnZpY2Uge1xuICBwdWJsaWMgYXV0aGVudGljYXRpb246IEV2ZW50RW1pdHRlcjxLb252ZXJzb1VzZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxLb252ZXJzb1VzZXI+KCk7XG4gIHB1YmxpYyBhc3NldHM6IERlZmF1bHRBc3NldHM7XG4gIHB1YmxpYyBmaXJzdFZpc2l0ID0gZmFsc2U7XG4gIHB1YmxpYyBmaXJzdFVzYWdlU3Rvcnk6IHN0cmluZ1tdO1xuICBwdWJsaWMgQ29sb3JTZXQ6IENvbG9yU2V0O1xuICBwdWJsaWMgUGxhY2VIb2xkZXI6IHN0cmluZ1tdO1xuICBwdWJsaWMgQXNzaXN0YW50TW9kZSA9IGZhbHNlO1xuICBwdWJsaWMgV2VsY29tZTogc3RyaW5nO1xuICBwdWJsaWMgcmVhZHlTdGF0ZSA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBsb2NhbGU6IHN0cmluZztcbiAgcHJpdmF0ZSB0b2tlbjogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX3Rva2VuID0gdGhpcy50b2tlbi5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSB1c2VyOiBLb252ZXJzb1VzZXI7XG4gIHByaXZhdGUgaGVhZGVyOiBIdHRwSGVhZGVycztcbiAgcHJpdmF0ZSBlbmRwb2ludDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ19fTmd4S29udmVyc29fXycpIGNvbmZpZzogS29udmVyc29JbnRlcmZhY2UsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICAgIHRoaXMuYnVpbGRIZWFkZXJzKCk7XG4gICAgdGhpcy5pbml0SW5zdGFuY2UoY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIFF1ZXJ5IFRvIGJhY2tlbmQgc2VydmVyIGFuZCBnZXQgYSByZXNwb25zZVxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICovXG4gIHB1YmxpYyBhc3luYyBzZW5kKHF1ZXJ5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAocXVlcnkgJiYgcXVlcnkucmVwbGFjZShuZXcgUmVnRXhwKCcgJywgJ2cnKSwgJycpKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWRlcikge1xuICAgICAgICAgIGNvbnN0IHByZXBhcmVkRGF0YSA9IHRoaXMuYnVpbGRRdWVyeShxdWVyeSk7XG4gICAgICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuaHR0cC5wb3N0KHRoaXMuZW5kcG9pbnQgKyAnP3Q9JyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpLCBwcmVwYXJlZERhdGEsIG9wdGlvbnMpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0hlYWRlciBpcyBub3Qgc2V0LCBwbGVhc2UgcHJvdmlkZSBhIHRva2VuIHRob3VnaCB1c2VyIHNldHRpbmcgb3IgdGhvdWdoIG1vZHVsZSBjb25maWd1cmF0aW9uJykpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKCdDdXJyZW50IGlucHV0IGlzIGVtcHR5LCBwbGVhc2UgdHJ5IGFnYWluJykpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEdlbmVyYXRlIEhlYWRlciBmb3IgYmFja2VuZCBjYWxsXG4gICAqL1xuICBwcml2YXRlIGJ1aWxkSGVhZGVycygpIHtcbiAgICB0aGlzLl90b2tlbi5zdWJzY3JpYmUoKHRva2VuOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGJlYXJlcjogc3RyaW5nID0gJ0JlYXJlciAnICsgdG9rZW47XG4gICAgICB0aGlzLmhlYWRlciA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgIC8vJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgLy8gJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4sXG4gICAgICAgICdBdXRob3JpemF0aW9uJzogYmVhcmVyXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gY29uZmlnXG4gICAqIEBwcml2YXRlXG4gICAqIEluaXRpYWxpemUgRGF0YSBmb3IgVXNlciBJbnN0YW5jZVxuICAgKi9cbiAgcHJpdmF0ZSBpbml0SW5zdGFuY2UoY29uZmlnOiBLb252ZXJzb0ludGVyZmFjZSkge1xuICAgIGlmIChjb25maWcuZW5kcG9pbnQpIHtcbiAgICAgIHRoaXMuZW5kcG9pbnQgPSBjb25maWcuZW5kcG9pbnQ7XG4gICAgICBpZiAoY29uZmlnLkFzc2lzdGFudE1vZGUpIHtcbiAgICAgICAgdGhpcy5Bc3Npc3RhbnRNb2RlID0gY29uZmlnLkFzc2lzdGFudE1vZGU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcuZGVmYXVsdEFzc2V0cykge1xuICAgICAgICB0aGlzLmFzc2V0cyA9IGNvbmZpZy5kZWZhdWx0QXNzZXRzO1xuICAgICAgICBpZiAoY29uZmlnLmRlZmF1bHRBc3NldHMuQ29sb3JTZXQpIHtcbiAgICAgICAgICB0aGlzLkNvbG9yU2V0ID0gY29uZmlnLmRlZmF1bHRBc3NldHMuQ29sb3JTZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uLnN1YnNjcmliZSgodXNlcjogS29udmVyc29Vc2VyKSA9PiB7XG4gICAgICAgICAgaWYgKCF1c2VyLmxhbmcgJiYgY29uZmlnLmxhbmcpIHtcbiAgICAgICAgICAgIHVzZXIubGFuZyA9IGNvbmZpZy5sYW5nO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmxvY2FsZSA9IHVzZXIubGFuZztcbiAgICAgICAgICBpZiAoY29uZmlnLklucHV0UGxhY2VIb2xkZXIgJiYgY29uZmlnLklucHV0UGxhY2VIb2xkZXJbdGhpcy5sb2NhbGVdKSB7XG4gICAgICAgICAgICB0aGlzLlBsYWNlSG9sZGVyID0gY29uZmlnLklucHV0UGxhY2VIb2xkZXJbdGhpcy5sb2NhbGVdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY29uZmlnLkN1c3RvbVdlbGNvbWUgJiYgY29uZmlnLkJvdEluaXRNZXNzYWdlLldlbGNvbWUgJiYgY29uZmlnLkJvdEluaXRNZXNzYWdlLldlbGNvbWVbdGhpcy5sb2NhbGVdKSB7XG4gICAgICAgICAgICB0aGlzLldlbGNvbWUgPSBtdXN0YWNoZS5yZW5kZXIoY29uZmlnLkJvdEluaXRNZXNzYWdlLldlbGNvbWVbdGhpcy5sb2NhbGVdLCB1c2VyKTtcblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodXNlci50b2tlbikge1xuICAgICAgICAgICAgdGhpcy50b2tlbi5uZXh0KHVzZXIudG9rZW4pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodXNlci5maXJzdFZpc2l0KSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0VmlzaXQgPSB0cnVlO1xuICAgICAgICAgICAgZGVsZXRlIHVzZXIuZmlyc3RWaXNpdDtcbiAgICAgICAgICAgIGlmIChjb25maWc/LkJvdEluaXRNZXNzYWdlPy5GaXJzdFVzYWdlICYmXG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlICYmXG4gICAgICAgICAgICAgIGNvbmZpZz8uQm90SW5pdE1lc3NhZ2U/LkZpcnN0VXNhZ2VbdGhpcy5sb2NhbGVdKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmlyc3RVc2FnZVN0b3J5ID0gW107XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgaGlzdG9yeSBvZiBjb25maWcuQm90SW5pdE1lc3NhZ2UuRmlyc3RVc2FnZVt0aGlzLmxvY2FsZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0VXNhZ2VTdG9yeS5wdXNoKG11c3RhY2hlLnJlbmRlcihoaXN0b3J5LCB1c2VyKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGNvbmZpZy5sYW5nKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gY29uZmlnLmxhbmc7XG4gICAgICAgIGlmIChjb25maWcuSW5wdXRQbGFjZUhvbGRlciAmJiBjb25maWcuSW5wdXRQbGFjZUhvbGRlclt0aGlzLmxvY2FsZV0pIHtcbiAgICAgICAgICB0aGlzLlBsYWNlSG9sZGVyID0gY29uZmlnLklucHV0UGxhY2VIb2xkZXJbdGhpcy5sb2NhbGVdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcuQ3VzdG9tV2VsY29tZSAmJiBjb25maWcuQm90SW5pdE1lc3NhZ2UuV2VsY29tZSAmJiBjb25maWcuQm90SW5pdE1lc3NhZ2UuV2VsY29tZVt0aGlzLmxvY2FsZV0pIHtcbiAgICAgICAgICB0aGlzLldlbGNvbWUgPSBjb25maWcuQm90SW5pdE1lc3NhZ2UuV2VsY29tZVt0aGlzLmxvY2FsZV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51c2VyID0ge1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5ndWlkKCksXG4gICAgICAgICAgbGFuZzogY29uZmlnLmxhbmdcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmIChjb25maWcudG9rZW4pIHtcbiAgICAgICAgdGhpcy50b2tlbi5uZXh0KGNvbmZpZy50b2tlbik7XG4gICAgICB9XG4gICAgICB0aGlzLnJlYWR5U3RhdGUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKCdQbGVhc2UgcHJvdmlkZSBlbmRwb2ludCcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICogQHByaXZhdGVcbiAgICogcHJlcGFyZSBzZXQgZGF0YSB0byBwdXNoIHRvIGJhY2tlbmQgc2VydmVyXG4gICAqL1xuICBwcml2YXRlIGJ1aWxkUXVlcnkocXVlcnk6IHN0cmluZyk6IEtvbnZlcnNvUXVlcnkge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4ge1xuICAgICAgLi4udGhpcy51c2VyLFxuICAgICAgcXVlcnk6IHF1ZXJ5LnJlcGxhY2UoL1xccysvZywgJyAnKS50cmltKCksXG4gICAgICBpc1NlbmRpbmc6IHRydWVcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEdlbmVyYXRlIFJhbmRvbSB1bmlxIElkIGZvciBLb252ZXJzbyBJbnN0YW5jZVxuICAgKi9cbiAgcHJpdmF0ZSBndWlkKCkge1xuICAgIGxldCByYW5kb20gPSAoKSA9PiB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcbiAgICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgICAuc3Vic3RyaW5nKDEpO1xuICAgIH07XG4gICAgcmV0dXJuIHJhbmRvbSgpICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArICctJyArIHJhbmRvbSgpICsgJy0nICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArIHJhbmRvbSgpICsgcmFuZG9tKCk7XG4gIH1cbn1cbiJdfQ==