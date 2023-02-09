import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseFormacionAcademicaService {

  private formacionAcademicaData: Observable<any>;

  constructor( private db: AngularFirestore) {
    this.formacionAcademicaData = this.db.collection('formacion-academica').valueChanges();
  }

  getFormacionAcademicaCompleta(): Observable<any> {
    return this.formacionAcademicaData;
  }
}
