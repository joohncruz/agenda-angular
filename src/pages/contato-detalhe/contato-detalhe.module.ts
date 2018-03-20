import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContatoDetalhePage } from './contato-detalhe';

@NgModule({
  declarations: [
    ContatoDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(ContatoDetalhePage),
  ],
})
export class ContatoDetalhePageModule {}
