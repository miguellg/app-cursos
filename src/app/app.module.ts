import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Firebase } from '@ionic-native/firebase';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { CursoFormPage } from '../pages/curso-form/curso-form';
import { CursoListaPage } from '../pages/curso-lista/curso-lista';
import { HomePage } from '../pages/home/home';
import { ApiProvider } from '../providers/api/api';
import { PushNotifyProvider } from '../providers/push-notify/push-notify';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CursoListaPage,
    CursoFormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CursoListaPage,
    CursoFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    PushNotifyProvider,
    Firebase
  ]
})
export class AppModule {}
