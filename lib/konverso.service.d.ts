import { EventEmitter } from '@angular/core';
import { ColorSet, DefaultAssets, KonversoInterface, KonversoUser } from '../interface/KonversoInterface';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class KonversoService {
    private http;
    authentication: EventEmitter<KonversoUser>;
    assets: DefaultAssets;
    firstVisit: boolean;
    firstUsageStory: string[];
    ColorSet: ColorSet;
    private locale;
    private token;
    private _token;
    private user;
    private header;
    private endpoint;
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
    static ɵfac: i0.ɵɵFactoryDef<KonversoService>;
    static ɵprov: i0.ɵɵInjectableDef<KonversoService>;
}
