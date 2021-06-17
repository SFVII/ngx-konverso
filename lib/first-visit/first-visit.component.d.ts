import { EventEmitter, OnInit } from '@angular/core';
import { DefaultAssets } from '../../interface/KonversoInterface';
import { TranslateService } from '../translate.service';
export declare class FirstVisitComponent implements OnInit {
    firstUsageStory: string[];
    assets: DefaultAssets;
    ready: EventEmitter<boolean>;
    position: number;
    current: string;
    go: string;
    constructor(translate: TranslateService);
    ngOnInit(): void;
    goTo(pos: number): void;
    start(): void;
}
