import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase'

@Injectable()
export class PushNotifyProvider {

  constructor(public fb:  Firebase, public platform: Platform) {    
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
}
