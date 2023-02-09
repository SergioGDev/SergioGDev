import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IdiomasService {

  idioma: string = 'api/idioma';

  constructor(
    private http: HttpClient
  ) { }

  getIdiomasCompleto(): Observable<any> {
    return this.http.get<any>(`${environment.backendUrl}/${this.idioma}`)
  }
}
