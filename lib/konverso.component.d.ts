import { EventEmitter, OnInit } from '@angular/core';
import { KonversoService } from './konverso.service';
import { ColorSet, DefaultAssets, OpenChatBotResponse, UserInput } from '../interface/KonversoInterface';
export declare class KonversoComponent implements OnInit {
    private service;
    _ready: EventEmitter<boolean>;
    ready: EventEmitter<boolean>;
    sended: EventEmitter<boolean>;
    query: string | null | undefined;
    isMobile: boolean | null;
    assets: DefaultAssets;
    firstVisit: boolean | null;
    firstUsageStory: string[];
    AssistantMode: boolean;
    colorSet: ColorSet;
    History: (UserInput | OpenChatBotResponse)[];
    disableUserInput: boolean;
    LastUserInput: UserInput | null;
    LastBotAnswer: OpenChatBotResponse;
    PlaceHolder: string[];
    Welcome: string | null | undefined;
    constructor(service: KonversoService);
    private triggerKbotResponse;
    ngOnInit(): void;
    send($event: UserInput): Promise<void | boolean>;
    sendBotCommand($event: string, push?: boolean): Promise<void>;
    private _isMobile;
}
