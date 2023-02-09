import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemEmpresa, ItemEmpresaDuo } from '../interfaces/links.interface';
import { HttpClient } from '@angular/common/http';
import { HttpTokenService } from './http-token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLaboralService {

  empresasConfiado: string = 'api/empresas-confiado';
  experienciaLaboral: string = 'api/experiencia-laboral';

  constructor(
    private http: HttpClient,
    private httpTokenService: HttpTokenService
  ) { }

  // EXPERIENCIA LABORAL
  getExperienciaLaboralCompleta(): Observable<any> {
    return this.http.get<any>(`${environment.backendUrl}/${this.experienciaLaboral}`);
  }
  
  // EMPRESAS QUE HAN CONFIADO EN MI
  getExperienciaEmpresasConfiado(): Observable<any> {
    return this.http.get<any>(`${environment.backendUrl}/${this.empresasConfiado}`);
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
