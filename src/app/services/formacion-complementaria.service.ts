import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormacionComplementariaService {

  formacionComplementaria: string = 'api/formacion-complementaria';

  constructor(
    private http: HttpClient
  ) { }

  getFormacionComplementariaCompleta(): Observable<any> {
    return this.http.get<any>(`${environment.backendUrl}/${this.formacionComplementaria}`);
  }
}
