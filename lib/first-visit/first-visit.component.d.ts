import { EventEmitter, OnInit } from '@angular/core';
import { DefaultAssets } from '../../interface/KonversoInterface';
export declare class FirstVisitComponent implements OnInit {
    firstUsageStory: string[];
    assets: DefaultAssets;
    ready: EventEmitter<boolean>;
    position: number;
    current: string;
    constructor();
    ngOnInit(): void;
    goTo(pos: number): void;
    start(): void;
}
