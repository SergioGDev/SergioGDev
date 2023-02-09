import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseFormacionComplementariaService {

  private formacionComplementariaData: Observable<any>;

  constructor( private db: AngularFirestore ) {
    this.formacionComplementariaData = this.db.collection('formacion-complementaria').valueChanges();
  }

  getFormacionComplementariaCompleta(): Observable<any> {
    return this.formacionComplementariaData;
  }
}
