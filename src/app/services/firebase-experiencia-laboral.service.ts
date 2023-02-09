import { Injectable } from '@angular/core';
import { collection, Firestore, CollectionReference, doc, getDoc } from 'firebase/firestore';
import {AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ItemEmpresa, ItemEmpresaDuo } from '../interfaces/links.interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseExperienciaLaboralService {

  private experienciaLaboralData: Observable<any>;
  private experienciaEmpresasConfiadoData: Observable<any>;

  constructor( private db: AngularFirestore ) {
    this.experienciaLaboralData = this.db.collection('experiencia-laboral').valueChanges();
    this.experienciaEmpresasConfiadoData = this.db.collection('empresas-confiado').valueChanges();
  }

  getExperienciaLaboralCompleta(): Observable<any> {
    return this.experienciaLaboralData;
  }

  getExperienciaEmpresasConfiado(): Observable<any> {
    return this.experienciaEmpresasConfiadoData;
  }

  getEmpresasDuo(vEmpresas: ItemEmpresa[]): ItemEmpresaDuo[] {
    let vEmpresasDuo: ItemEmpresaDuo[] = []; 
    let itemEmpresaDuo: ItemEmpresaDuo;

    for (let i = 0; i < vEmpresas.length; i++) {

      // Item en posición PAR y es el último del array: añadimos un itemDuo con un solo elemento
      if (i % 2 === 0 && i === vEmpresas.length - 1) { 

        itemEmpresaDuo = { empresaUno: vEmpresas[i] }
        vEmpresasDuo.push(itemEmpresaDuo);

      } else if (i % 2 !== 0) { // Item en posición IMPAR
        itemEmpresaDuo = {
          empresaUno: vEmpresas[i-1],
          empresaDos: vEmpresas[i]
        }

        vEmpresasDuo.push(itemEmpresaDuo);
      }
    }

    return vEmpresasDuo;
  }
}
