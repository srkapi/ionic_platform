import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import {LoginPageModule} from "../pages/login/login.module";
import {RegisterPageModule} from "../pages/register/register.module";
import {HomePageModule} from "../pages/home/home.module";
import {TabsPageModule} from "../pages/tabs/tabs.module";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    HomePageModule,
    TabsPageModule,
    RegisterPageModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
  ]
})
export class AppModule {}
