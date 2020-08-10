import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { PushNotifyProvider } from '../../providers/push-notify/push-notify';
import { ApiProvider } from '../../providers/api/api';
import { CursoListaPage } from '../curso-lista/curso-lista';

@Component({
  selector: 'page-curso-form',
  templateUrl: 'curso-form.html',
})

export class CursoFormPage {
  curso: string
  form: any = {}

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alert: AlertController,
    public api: ApiProvider,
    public pushNotify: PushNotifyProvider) {
    let params = this.navParams.get('params')
    this.curso = params.titulo;
    this.form.curso = params.id;
  }

  handleSubmit() {
    this.pushNotify.getToken().then(tk => {

      this.api.post('/matricular', {
        nome: this.form.nome,
        idade: this.form.idade,
        telefone: this.form.fone,
        email: this.form.email,
        token: tk,
        curso: this.form.curso
      }).subscribe((res) => {

        this.alert.create({
          title: 'Parabéns!!',
          subTitle: 'Matricula realizada com sucesso!',
          buttons: [{
            text: 'Ok',
            handler: data => {
              this.navCtrl.push(CursoListaPage)
            }
          }]
        })
      }, error => {
        this.alert.create({
          title: 'Ops!!',
          subTitle: 'Ocorreu um problema com a solicitação, tente novamente mais tarde!',
          buttons: ['Ok']
        }).present()
      })
    })
  }
}
