import { EventEmitter, OnInit } from '@angular/core';
import { DefaultAssets, OpenChatBotResponse, UserInput } from '../../interface/KonversoInterface';
export declare class DesktopFullScreenComponent implements OnInit {
    AssistantMode: boolean;
    assets: DefaultAssets;
    firstVisit: boolean;
    firstUsageStory: string[];
    displayData: (UserInput | OpenChatBotResponse)[];
    disableUserInput: boolean;
    LastUserInput: UserInput;
    LastBotAnswer: OpenChatBotResponse;
    PlaceHolder: string[];
    ready: EventEmitter<boolean>;
    send: EventEmitter<UserInput>;
    sendBotCommand: EventEmitter<string>;
    userInput: string;
    currentPlaceHolder: string;
    constructor();
    ngOnInit(): void;
    _send(): void;
    scroll(scrollHeight: number): Promise<number>;
    byPassUserInput(botdata: string): void;
}
