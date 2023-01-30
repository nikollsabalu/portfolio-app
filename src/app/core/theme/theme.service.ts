import { Injectable } from '@angular/core';
import { DevThemeModule } from './theme.module';

@Injectable({
  providedIn: DevThemeModule
})
export class DevThemeService {
  private isDark = true;

    get theme(): string {
      return this.isDark  ? 'dark-theme' : '';
    }

  setDarkTheme(): void {
      this.isDark   = true;
    }

    setLightTheme(): void {
      this.isDark   = false;
  }
}
