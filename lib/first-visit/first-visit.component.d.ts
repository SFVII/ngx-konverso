import { EventEmitter, OnInit } from '@angular/core';
import { DefaultAssets } from '../../interface/KonversoInterface';
import { KonversoService } from '../konverso.service';
import { TranslateService } from '../translate.service';
export declare class FirstVisitComponent implements OnInit {
    private service;
    firstUsageStory: string[];
    assets: DefaultAssets;
    ready: EventEmitter<boolean>;
    position: number;
    current: string;
    go: string;
    constructor(translate: TranslateService, service: KonversoService);
    ngOnInit(): void;
    goTo(pos: number): void;
    start(): void;
}
