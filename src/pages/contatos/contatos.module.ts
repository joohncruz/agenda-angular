import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContatosPage } from './contatos';

@NgModule({
  declarations: [
    ContatosPage,
  ],
  imports: [
    IonicPageModule.forChild(ContatosPage),
  ],
})
export class ContatosPageModule {}
