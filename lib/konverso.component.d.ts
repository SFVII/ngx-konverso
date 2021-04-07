import { EventEmitter, OnInit } from '@angular/core';
import { KonversoService } from './konverso.service';
import { ColorSet, DefaultAssets, OpenChatBotResponse, UserInput } from '../interface/KonversoInterface';
export declare class KonversoComponent implements OnInit {
    private service;
    _ready: EventEmitter<boolean>;
    ready: EventEmitter<boolean>;
    query: string;
    isMobile: boolean;
    assets: DefaultAssets;
    firstVisit: boolean;
    firstUsageStory: string[];
    AssistantMode: boolean;
    colorSet: ColorSet;
    History: (UserInput | OpenChatBotResponse)[];
    disableUserInput: boolean;
    LastUserInput: UserInput;
    LastBotAnswer: OpenChatBotResponse;
    PlaceHolder: string[];
    Welcome: string;
    constructor(service: KonversoService);
    ngOnInit(): void;
    send($event: UserInput): Promise<boolean>;
    sendBotCommand($event: string, push?: boolean): Promise<void>;
    private _isMobile;
}
