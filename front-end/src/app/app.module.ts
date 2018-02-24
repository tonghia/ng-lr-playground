import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginModule } from './pages/login/login.module';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { ErrorModule } from './pages/error/error.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { 
      useHash: false, 
      preloadingStrategy: PreloadAllModules ,
      enableTracing: false
    }),
    ErrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
