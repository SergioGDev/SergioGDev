import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseIdiomasService {

  private idiomasData: Observable<any>;

  constructor( private db: AngularFirestore ) {
    this.idiomasData = this.db.collection('idiomas').valueChanges();
  }

  getIdiomasCompleto(): Observable<any> {
    return this.idiomasData;
  }
}
