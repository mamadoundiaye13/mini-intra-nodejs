import { Injectable } from "@angular/core";
import { IAppConfig } from ".";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

/**
 * Load from the back the application configuration.
 * The URL of the configuration file is read from the environment.ts
 */
@Injectable()
export class ConfigService {

  public config: IAppConfig;

  constructor(private http: HttpClient) {
  }

  load() {
    const configUrl = environment.configUrl;
    console.info(`Load configuration from ${configUrl}`);
    return new Promise<void>((resolve, reject) => {
      this.http.get<IAppConfig>(configUrl).subscribe({
        next: (config) => {
          this.config = config;
          resolve();
        },
        error: (error) => {
          console.error("Error while loading configuration from the back", error);
          reject(error);
        }
      });
    });
  }
}
