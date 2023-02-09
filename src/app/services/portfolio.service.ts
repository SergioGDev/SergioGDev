import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  portfolio: string = 'api/portfolio';

  constructor(
    private http: HttpClient
  ) { }

  getPortfolioCompleto(): Observable<any> {
    return this.http.get<any>(`${environment.backendUrl}/${this.portfolio}`);
  }
}
