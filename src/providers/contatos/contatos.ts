import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ContatosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContatosProvider {
  pessoas: Observable<any[]>;
  pessoasRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.pessoas = db.list('pessoas').valueChanges();
    this.pessoasRef = db.list('pessoas');
  }

  addContato (id, nome, endereco, cep, lat, long, email) {
    this.pessoasRef.push({ id, nome, endereco, cep, lat, long, email });
  }

  getContatos(): Observable<any[]> {
    return this.pessoas;
  }

  updateContato (id, nome, endereco, cep, lat, long, email) {
    console.log('editContato')
    let c = this.getContatoById(id);
  }

  getContatoById (id) {
    console.log(id)
    let pessoa = this.pessoasRef.query.orderByChild('id').equalTo(id);
    return pessoa;
  }

}
