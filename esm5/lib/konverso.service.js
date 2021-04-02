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
                                _this.http.post(_this.endpoint, preparedData, options)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29udmVyc28uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2tvbnZlcnNvLyIsInNvdXJjZXMiOlsibGliL2tvbnZlcnNvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUUvRCxPQUFPLEVBQUMsVUFBVSxFQUFFLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzdELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDckMsT0FBTyxLQUFLLFFBQVEsTUFBTSxVQUFVLENBQUM7QUFHckM7SUFpQkUseUJBQXVDLE1BQXlCLEVBQVUsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQWhCbkYsbUJBQWMsR0FBK0IsSUFBSSxZQUFZLEVBQWdCLENBQUM7UUFFOUUsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUluQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUdyQixVQUFLLEdBQTRCLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBQzNFLHlDQUF5QztRQUNqQyxXQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQU16QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7OztPQUdHO0lBQ1UsOEJBQUksR0FBakIsVUFBa0IsS0FBYTs7OztnQkFDN0Isc0JBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTt3QkFDakMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7NEJBQ3BELElBQUksS0FBSSxDQUFDLE1BQU0sRUFBRTtnQ0FDZixJ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TSxFQUFFLEdBQUcsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxNQUFNLEVBQUUsR0FBRyxNQUFNLEVBQUUsQ0FBQztJQUN2SCxDQUFDOztnREE1SVksTUFBTSxTQUFDLGlCQUFpQjtnQkFBMkMsVUFBVTs7SUFqQi9FLGVBQWU7UUFEM0IsVUFBVSxFQUFFO1FBa0JFLFdBQUEsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUE7T0FqQjNCLGVBQWUsQ0E4SjNCO0lBQUQsc0JBQUM7Q0FBQSxBQTlKRCxJQThKQztTQTlKWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudEVtaXR0ZXIsIEluamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbG9yU2V0LCBEZWZhdWx0QXNzZXRzLCBLb252ZXJzb0ludGVyZmFjZSwgS29udmVyc29RdWVyeSwgS29udmVyc29Vc2VyfSBmcm9tICcuLi9pbnRlcmZhY2UvS29udmVyc29JbnRlcmZhY2UnO1xuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3R9IGZyb20gJ3J4anMnO1xuaW1wb3J0ICogYXMgbXVzdGFjaGUgZnJvbSAnbXVzdGFjaGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgS29udmVyc29TZXJ2aWNlIHtcbiAgcHVibGljIGF1dGhlbnRpY2F0aW9uOiBFdmVudEVtaXR0ZXI8S29udmVyc29Vc2VyPiA9IG5ldyBFdmVudEVtaXR0ZXI8S29udmVyc29Vc2VyPigpO1xuICBwdWJsaWMgYXNzZXRzOiBEZWZhdWx0QXNzZXRzO1xuICBwdWJsaWMgZmlyc3RWaXNpdCA9IGZhbHNlO1xuICBwdWJsaWMgZmlyc3RVc2FnZVN0b3J5OiBzdHJpbmdbXTtcbiAgcHVibGljIENvbG9yU2V0OiBDb2xvclNldDtcbiAgcHVibGljIFBsYWNlSG9sZGVyOiBzdHJpbmdbXTtcbiAgcHVibGljIEFzc2lzdGFudE1vZGUgPSBmYWxzZTtcbiAgcHVibGljIFdlbGNvbWU6IHN0cmluZztcbiAgcHJpdmF0ZSBsb2NhbGU6IHN0cmluZztcbiAgcHJpdmF0ZSB0b2tlbjogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gIHByaXZhdGUgX3Rva2VuID0gdGhpcy50b2tlbi5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSB1c2VyOiBLb252ZXJzb1VzZXI7XG4gIHByaXZhdGUgaGVhZGVyOiBIdHRwSGVhZGVycztcbiAgcHJpdmF0ZSBlbmRwb2ludDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ19fTmd4S29udmVyc29fXycpIGNvbmZpZzogS29udmVyc29JbnRlcmZhY2UsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICAgIHRoaXMuYnVpbGRIZWFkZXJzKCk7XG4gICAgdGhpcy5pbml0SW5zdGFuY2UoY29uZmlnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kIFF1ZXJ5IFRvIGJhY2tlbmQgc2VydmVyIGFuZCBnZXQgYSByZXNwb25zZVxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICovXG4gIHB1YmxpYyBhc3luYyBzZW5kKHF1ZXJ5OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IGFueT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAocXVlcnkgJiYgcXVlcnkucmVwbGFjZShuZXcgUmVnRXhwKCcgJywgJ2cnKSwgJycpKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWRlcikge1xuICAgICAgICAgIGNvbnN0IHByZXBhcmVkRGF0YSA9IHRoaXMuYnVpbGRRdWVyeShxdWVyeSk7XG4gICAgICAgICAgY29uc3Qgb3B0aW9uczogYW55ID0ge1xuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMuaHR0cC5wb3N0KHRoaXMuZW5kcG9pbnQsIHByZXBhcmVkRGF0YSwgb3B0aW9ucylcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignSGVhZGVyIGlzIG5vdCBzZXQsIHBsZWFzZSBwcm92aWRlIGEgdG9rZW4gdGhvdWdoIHVzZXIgc2V0dGluZyBvciB0aG91Z2ggbW9kdWxlIGNvbmZpZ3VyYXRpb24nKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0N1cnJlbnQgaW5wdXQgaXMgZW1wdHksIHBsZWFzZSB0cnkgYWdhaW4nKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogR2VuZXJhdGUgSGVhZGVyIGZvciBiYWNrZW5kIGNhbGxcbiAgICovXG4gIHByaXZhdGUgYnVpbGRIZWFkZXJzKCkge1xuICAgIHRoaXMuX3Rva2VuLnN1YnNjcmliZSgodG9rZW46IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgYmVhcmVyOiBzdHJpbmcgPSAnQmVhcmVyICcgKyB0b2tlbjtcbiAgICAgIHRoaXMuaGVhZGVyID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgLy8nQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgIC8vICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IGJlYXJlclxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIGNvbmZpZ1xuICAgKiBAcHJpdmF0ZVxuICAgKiBJbml0aWFsaXplIERhdGEgZm9yIFVzZXIgSW5zdGFuY2VcbiAgICovXG4gIHByaXZhdGUgaW5pdEluc3RhbmNlKGNvbmZpZzogS29udmVyc29JbnRlcmZhY2UpIHtcbiAgICBpZiAoY29uZmlnLmVuZHBvaW50KSB7XG4gICAgICB0aGlzLmVuZHBvaW50ID0gY29uZmlnLmVuZHBvaW50O1xuICAgICAgaWYgKGNvbmZpZy5Bc3Npc3RhbnRNb2RlKSB7XG4gICAgICAgIHRoaXMuQXNzaXN0YW50TW9kZSA9IGNvbmZpZy5Bc3Npc3RhbnRNb2RlO1xuICAgICAgfVxuXG5cbiAgICAgIGlmIChjb25maWcuZGVmYXVsdEFzc2V0cykge1xuICAgICAgICB0aGlzLmFzc2V0cyA9IGNvbmZpZy5kZWZhdWx0QXNzZXRzO1xuICAgICAgICBpZiAoY29uZmlnLmRlZmF1bHRBc3NldHMuQ29sb3JTZXQpIHtcbiAgICAgICAgICB0aGlzLkNvbG9yU2V0ID0gY29uZmlnLmRlZmF1bHRBc3NldHMuQ29sb3JTZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uLnN1YnNjcmliZSgodXNlcjogS29udmVyc29Vc2VyKSA9PiB7XG4gICAgICAgICAgaWYgKCF1c2VyLmxhbmcgJiYgY29uZmlnLmxhbmcpIHtcbiAgICAgICAgICAgIHVzZXIubGFuZyA9IGNvbmZpZy5sYW5nO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmxvY2FsZSA9IHVzZXIubGFuZztcbiAgICAgICAgICBpZiAoY29uZmlnLklucHV0UGxhY2VIb2xkZXIgJiYgY29uZmlnLklucHV0UGxhY2VIb2xkZXJbdGhpcy5sb2NhbGVdKSB7XG4gICAgICAgICAgICB0aGlzLlBsYWNlSG9sZGVyID0gY29uZmlnLklucHV0UGxhY2VIb2xkZXJbdGhpcy5sb2NhbGVdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY29uZmlnLkN1c3RvbVdlbGNvbWUgJiYgY29uZmlnLkJvdEluaXRNZXNzYWdlLldlbGNvbWUgJiYgY29uZmlnLkJvdEluaXRNZXNzYWdlLldlbGNvbWVbdGhpcy5sb2NhbGVdKSB7XG4gICAgICAgICAgICB0aGlzLldlbGNvbWUgPSBtdXN0YWNoZS5yZW5kZXIoY29uZmlnLkJvdEluaXRNZXNzYWdlLldlbGNvbWVbdGhpcy5sb2NhbGVdLCB1c2VyKTtcblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodXNlci50b2tlbikge1xuICAgICAgICAgICAgdGhpcy50b2tlbi5uZXh0KHVzZXIudG9rZW4pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodXNlci5maXJzdFZpc2l0KSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0VmlzaXQgPSB0cnVlO1xuICAgICAgICAgICAgZGVsZXRlIHVzZXIuZmlyc3RWaXNpdDtcbiAgICAgICAgICAgIGlmIChjb25maWc/LkJvdEluaXRNZXNzYWdlPy5GaXJzdFVzYWdlICYmXG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlICYmXG4gICAgICAgICAgICAgIGNvbmZpZz8uQm90SW5pdE1lc3NhZ2U/LkZpcnN0VXNhZ2VbdGhpcy5sb2NhbGVdKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmlyc3RVc2FnZVN0b3J5ID0gW107XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgaGlzdG9yeSBvZiBjb25maWcuQm90SW5pdE1lc3NhZ2UuRmlyc3RVc2FnZVt0aGlzLmxvY2FsZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0VXNhZ2VTdG9yeS5wdXNoKG11c3RhY2hlLnJlbmRlcihoaXN0b3J5LCB1c2VyKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGNvbmZpZy5sYW5nKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gY29uZmlnLmxhbmc7XG4gICAgICAgIGlmIChjb25maWcuSW5wdXRQbGFjZUhvbGRlciAmJiBjb25maWcuSW5wdXRQbGFjZUhvbGRlclt0aGlzLmxvY2FsZV0pIHtcbiAgICAgICAgICB0aGlzLlBsYWNlSG9sZGVyID0gY29uZmlnLklucHV0UGxhY2VIb2xkZXJbdGhpcy5sb2NhbGVdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb25maWcuQ3VzdG9tV2VsY29tZSAmJiBjb25maWcuQm90SW5pdE1lc3NhZ2UuV2VsY29tZSAmJiBjb25maWcuQm90SW5pdE1lc3NhZ2UuV2VsY29tZVt0aGlzLmxvY2FsZV0pIHtcbiAgICAgICAgICB0aGlzLldlbGNvbWUgPSBjb25maWcuQm90SW5pdE1lc3NhZ2UuV2VsY29tZVt0aGlzLmxvY2FsZV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51c2VyID0ge1xuICAgICAgICAgIHVzZXJJZDogdGhpcy5ndWlkKCksXG4gICAgICAgICAgbGFuZzogY29uZmlnLmxhbmdcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmIChjb25maWcudG9rZW4pIHtcbiAgICAgICAgdGhpcy50b2tlbi5uZXh0KGNvbmZpZy50b2tlbik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1BsZWFzZSBwcm92aWRlIGVuZHBvaW50Jyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcHJpdmF0ZVxuICAgKiBwcmVwYXJlIHNldCBkYXRhIHRvIHB1c2ggdG8gYmFja2VuZCBzZXJ2ZXJcbiAgICovXG4gIHByaXZhdGUgYnVpbGRRdWVyeShxdWVyeTogc3RyaW5nKTogS29udmVyc29RdWVyeSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLnVzZXIsXG4gICAgICBxdWVyeTogcXVlcnkucmVwbGFjZSgvXFxzKy9nLCAnICcpLnRyaW0oKSxcbiAgICAgIGlzU2VuZGluZzogdHJ1ZVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogR2VuZXJhdGUgUmFuZG9tIHVuaXEgSWQgZm9yIEtvbnZlcnNvIEluc3RhbmNlXG4gICAqL1xuICBwcml2YXRlIGd1aWQoKSB7XG4gICAgbGV0IHJhbmRvbSA9ICgpID0+IHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxuICAgICAgICAudG9TdHJpbmcoMTYpXG4gICAgICAgIC5zdWJzdHJpbmcoMSk7XG4gICAgfTtcbiAgICByZXR1cm4gcmFuZG9tKCkgKyByYW5kb20oKSArICctJyArIHJhbmRvbSgpICsgJy0nICsgcmFuZG9tKCkgKyAnLScgKyByYW5kb20oKSArICctJyArIHJhbmRvbSgpICsgcmFuZG9tKCkgKyByYW5kb20oKTtcbiAgfVxufVxuIl19