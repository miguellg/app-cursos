import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';
import { CursoFormPage } from '../curso-form/curso-form'

@Component({
  selector: 'page-curso-lista',
  templateUrl: 'curso-lista.html',
})
export class CursoListaPage {
  itens:any = [    
    {
      id: 4,
      titulo: 'Matemática Financeira',
      descricao: 'Curso completo de Matemática Financeira'
    },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
    this.api.get('/cursos').subscribe((data) => {
      this.itens = data
    });
  }

  matricular(curso){
    this.navCtrl.push(CursoFormPage, {params: curso})
  }

}
