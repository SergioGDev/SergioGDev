import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebasePortfolioService {

  private portfolioData: Observable<any>;

  constructor( private db: AngularFirestore ) {
    this.portfolioData = this.db.collection('portfolio').valueChanges();
  }

  getPortfolioCompleto(): Observable<any> {
    return this.portfolioData;
  }
}
