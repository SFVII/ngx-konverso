import { ModuleWithProviders } from '@angular/core';
import { KonversoInterface } from '../interface/KonversoInterface';
export declare class KonversoModule {
    constructor(parentModule?: KonversoModule);
    static forRoot(config: KonversoInterface): ModuleWithProviders<KonversoModule>;
}
