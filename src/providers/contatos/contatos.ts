import { Injectable } from '@angular/core';

/*
  Generated class for the ContatosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContatosProvider {
  pessoas: Array<{nome: string, endereco: string, cep: string, lat: number, long: number, email: string}> = [];

  constructor() {
    this.pessoas.push({
      nome: 'Jonathan Cruz', endereco: 'Rua O Tronco do Ipê - 85', cep: '30640-800',
      lat: -19.9679803, long: -43.9540716, email: 'joohncruzrocha@gmail.com'
    })
  }

  addContato (nome, endereco, cep, lat, long, email) {
    this.pessoas.push({ nome, endereco, cep, lat, long, email });
  }

  getContatos(): Array<{nome: string, endereco: string, cep: string, lat: number, long: number, email: string}> {
    return this.pessoas;
  }

}
