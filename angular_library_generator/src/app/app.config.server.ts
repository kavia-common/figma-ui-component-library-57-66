import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { appConfig } from './app.config';

/**
 * Server-only application configuration.
 * - provideServerRendering enables Angular SSR rendering.
 * - provideNoopAnimations ensures animations providers do not initialize browser animation engine on the server.
 */
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideNoopAnimations(),
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
