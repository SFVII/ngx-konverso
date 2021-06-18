import { EventEmitter } from '@angular/core';
import { ColorSet, DefaultAssets, KonversoInterface, KonversoUser } from '../interface/KonversoInterface';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
export declare class KonversoService {
    private http;
    authentication: EventEmitter<KonversoUser>;
    assets: DefaultAssets;
    firstVisit: boolean;
    firstUsageStory: string[];
    ColorSet: ColorSet;
    PlaceHolder: string[];
    AssistantMode: boolean;
    Welcome: string;
    readyState: boolean;
    locale: string;
    private token;
    private _token;
    private user;
    private header;
    private endpoint;
    _auth: boolean;
    lang: BehaviorSubject<string>;
    constructor(config: KonversoInterface, http: HttpClient);
    /**
     * Send Query To backend server and get a response
     * @param query
     */
    send(query: string): Promise<string | any>;
    /**
     * @private
     * Generate Header for backend call
     */
    private buildHeaders;
    /**
     * @param config
     * @private
     * Initialize Data for User Instance
     */
    private initInstance;
    /**
     * @param query
     * @private
     * prepare set data to push to backend server
     */
    private buildQuery;
    /**
     * @private
     * Generate Random uniq Id for Konverso Instance
     */
    private guid;
}
