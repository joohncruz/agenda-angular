import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContatosProvider } from '../../providers/contatos/contatos';
import { ContatoDetalhePage } from '../../pages/contato-detalhe/contato-detalhe';

/**
 * Generated class for the ContatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contatos',
  templateUrl: 'contatos.html',
})
export class ContatosPage {
  contatos: Array<{nome: string, endereco: string, cep: string, lat: number, long: number, email: string}> = [];

  constructor (public navCtrl: NavController, public navParams: NavParams, private contatosProvider: ContatosProvider) {
    this.contatos = contatosProvider.getContatos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContatosPage');
  }

  addContato() {
    this.navCtrl.push(ContatoDetalhePage);
  }

  editContato(contato) {
    this.navCtrl.push(ContatoDetalhePage, { cttParam: contato });
  }

}
