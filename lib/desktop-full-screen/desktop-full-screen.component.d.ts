import { EventEmitter, OnInit } from '@angular/core';
import { DefaultAssets, OpenChatBotResponse, UserInput } from '../../interface/KonversoInterface';
import * as i0 from "@angular/core";
export declare class DesktopFullScreenComponent implements OnInit {
    assets: DefaultAssets;
    firstVisit: boolean;
    firstUsageStory: string[];
    displayData: (UserInput | OpenChatBotResponse)[];
    ready: EventEmitter<boolean>;
    send: EventEmitter<UserInput>;
    sendBotCommand: EventEmitter<string>;
    userInput: string;
    constructor();
    ngOnInit(): void;
    _send(): void;
    byPassUserInput(botdata: string): void;
    static ɵfac: i0.ɵɵFactoryDef<DesktopFullScreenComponent>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DesktopFullScreenComponent, "bot-full-screen", never, { "assets": "assets"; "firstVisit": "firstVisit"; "firstUsageStory": "firstUsageStory"; "displayData": "displayData"; }, { "ready": "ready"; "send": "send"; "sendBotCommand": "sendBotCommand"; }, never>;
}
