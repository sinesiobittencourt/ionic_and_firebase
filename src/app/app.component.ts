import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// ALTERAÇÃO 01 PASSO 8°
// Remoção da importação desnecessária
//import { TabsPage } from '../pages/tabs/tabs';
// Importação da página de login
import { LoginPage } from '../pages/login/login';
// FIM DA ALTERAÇÃO 01
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 
  // ALTERAÇÃO 02 PASSO 8°
  //rootPage:any = TabsPage;
  // Substituição da página principal para a pádina de login
  // assim o usuário ao entrar no aplicativo já irá para página de login
  rootPage:any = LoginPage;
  // FIM DA ALTERAÇÃO 02
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}