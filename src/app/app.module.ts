import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DevThemeModule } from './core/theme/theme.module';
import { FilterModule } from './core/services/filter.module';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    DevThemeModule,
    FilterModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
