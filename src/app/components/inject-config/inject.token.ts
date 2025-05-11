export interface AppConfigs {
    apiEndPoint:string,
    theme:string,
    cachetime:number
}


import { InjectionToken } from "@angular/core";

export const App_config = new InjectionToken<AppConfigs>('app.config')