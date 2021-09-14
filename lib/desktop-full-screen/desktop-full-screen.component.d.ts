import { EventEmitter, OnChanges, OnInit } from '@angular/core';
import { DefaultAssets, OpenChatBotResponse, UserInput } from '../../interface/KonversoInterface';
import { KonversoService } from '../konverso.service';
import { TranslateService } from '../translate.service';
export declare class DesktopFullScreenComponent implements OnChanges, OnInit {
    private service;
    AssistantMode: boolean;
    assets: DefaultAssets;
    firstVisit: boolean;
    firstUsageStory: string[];
    displayData: (UserInput | OpenChatBotResponse)[];
    disableUserInput: boolean;
    LastUserInput: UserInput;
    LastBotAnswer: OpenChatBotResponse;
    PlaceHolder: string[];
    IsMobile: boolean;
    readySend: EventEmitter<boolean>;
    send: EventEmitter<UserInput>;
    sendBotCommand: EventEmitter<string>;
    sendEvent: EventEmitter<string>;
    userInput: string;
    currentPlaceHolder: string;
    sendBtn: string;
    select: string;
    changed: boolean;
    private newMessage;
    private messageCurrent;
    private msgArray;
    botListening: boolean;
    private botListeningTimer;
    private anim_done;
    constructor(translate: TranslateService, service: KonversoService);
    ngOnChanges(): void;
    launchLoop(): void;
    looper(array: any): void;
    ngOnInit(): void;
    userWriting(key: any): void;
    emit($event: any): void;
    _send(): void;
    scroll(scrollHeight: number): Promise<number>;
    byPassUserInput(botdata: string, i?: number): void;
}
