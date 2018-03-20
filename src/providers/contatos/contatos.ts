import { Injectable } from '@angular/core';

/*
  Generated class for the ContatosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContatosProvider {
  pessoas: Array<{id: number, nome: string, endereco: string, cep: string, lat: number, long: number, email: string}> = [];

  constructor() {
    this.pessoas.push({
      id: 1, nome: 'Jonathan Cruz', endereco: 'Rua O Tronco do Ipê - 85', cep: '30640-800',
      lat: -19.9679803, long: -43.9540716, email: 'joohncruzrocha@gmail.com'
    })
  }

  addContato ( nome, endereco, cep, lat, long, email) {
    let id = this.pessoas.length + 1;
    console.log(this.pessoas)
    console.log(id)
    this.pessoas.push({ id, nome, endereco, cep, lat, long, email });
  }

  getContatos(): Array<{id: number, nome: string, endereco: string, cep: string, lat: number, long: number, email: string}> {
    return this.pessoas;
  }

  editContato ( id, nome, endereco, cep, lat, long, email ) {
    this.pessoas.forEach((pessoa) => {
      if(pessoa.id === id) {
        console.log('pessoa.id === id')
        pessoa.nome = nome
        pessoa.endereco = endereco
        pessoa.cep = cep
        pessoa.lat = lat
        pessoa.long = long
        pessoa.email = email
      }
    })
  }

}
