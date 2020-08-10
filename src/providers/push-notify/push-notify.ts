import { Injectable } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase'

@Injectable()
export class PushNotifyProvider {

  constructor(public fb:  Firebase, public platform: Platform, public alertCtrl: AlertController,) {    
  }

  getToken(): Promise<string> {    
    return new Promise((resolve, reject) => {
      if(!this.platform.is('cordova')){
        return resolve('via-browser')
      }

      this.fb.hasPermission().then(() => {
        this.fb.onTokenRefresh().subscribe((token)=> {
          return resolve(token)
        }, (err) => {
          return reject('Erro ao gerar token: '+ JSON.stringify(err))
        })
      })
    })
  }

  controlNoty() {
    this.fb.onNotificationOpen().subscribe((noti: any) => {
      console.log(noti)
     
      
        const alert = this.alertCtrl.create({
            title: noti.title,
            message: noti.body,
            buttons: ['Ok']
        }).present();
    }    
  }
}
