import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormacionAcademicaService {

  formacionAcademica: string = 'api/formacion-academica';

  constructor(
    private http: HttpClient
  ) { }

  // *****    FORMACIÓN ACADÉMICA    ***** //
  getFormacionAcademicaCompleta(): Observable<any> {
    return this.http.get<any>(`${environment.backendUrl}/${this.formacionAcademica}`);
  }
  
}
