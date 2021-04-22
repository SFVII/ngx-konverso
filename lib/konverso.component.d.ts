import { EventEmitter, OnInit } from '@angular/core';
import { KonversoService } from './konverso.service';
import { ColorSet, DefaultAssets, OpenChatBotResponse, UserInput } from '../interface/KonversoInterface';
import * as i0 from "@angular/core";
export declare class KonversoComponent implements OnInit {
    private service;
    ready: EventEmitter<boolean>;
    query: string;
    isMobile: boolean;
    assets: DefaultAssets;
    firstVisit: boolean;
    firstUsageStory: string[];
    colorSet: ColorSet;
    History: (UserInput | OpenChatBotResponse)[];
    constructor(service: KonversoService);
    ngOnInit(): void;
    send($event: UserInput): Promise<void>;
    sendBotCommand($event: string): Promise<void>;
    private _isMobile;
    static ɵfac: i0.ɵɵFactoryDef<KonversoComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<KonversoComponent, "ngx-konverso", never, {}, { "ready": "ready"; }, never>;
}
