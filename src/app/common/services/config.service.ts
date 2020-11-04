import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ApiConfig } from '../types/api-config';

@Injectable()
export class ConfigService {
    private apiConfigData: ApiConfig;

    constructor(private http: HttpClient) { 
    }

    loadConfigData(): Promise<any> {
        return this.loadApiConfigData();
    }
    
    getApiConfig(): ApiConfig {
        return this.apiConfigData;
    }

    private loadApiConfigData() {
        console.debug("Getting API config data");

        const setter = (config) => { 
            this.apiConfigData = config; 
            console.debug("Successfully got API config data");
        };

        return this.http.get<ApiConfig>("/assets/api-config.json").pipe(tap(setter)).toPromise();
    }
}
