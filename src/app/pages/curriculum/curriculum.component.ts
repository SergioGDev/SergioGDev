import { Component, OnInit } from '@angular/core';
import { ItemCurriculumFormacion, ItemCurriculumEmpleo, ItemCurriculumIdioma } from '../../interfaces/links.interface';
import { FirebaseExperienciaLaboralService } from '../../services/firebase-experiencia-laboral.service';
import { FirebaseFormacionAcademicaService } from '../../services/firebase-formacion-academica.service';
import { FirebaseFormacionComplementariaService } from '../../services/firebase-formacion-complementaria.service';
import { FirebaseIdiomasService } from '../../services/firebase-idiomas.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {
  
    /**********   IMÁGEN DE FONDO PARA EL TÍTULO   **********/
    pathImagen: string = "../../../assets/img/fondo-currirulum.jpg";
    titulo: string = "Curriculum";
  
    /**********   EMPLEOS   **********/
    tituloEmpleo: string = "Experiencia laboral";
    vExperienciaLaboral: ItemCurriculumEmpleo[] = [];
    cargandoVExperienciaLaboral: boolean = false;
  
    /**********   FORMACIÓN ACADÉMICA   **********/
    tituloFormacionAcademica: string = "Formación académica";
    vFormacionAcademica: ItemCurriculumFormacion[] = [];
    cargandoVFormacionAcademica: boolean = false;
  
    /**********   FORMACIÓN COMPLEMENTARIA   **********/
    tituloFormacionComplementaria: string = "Formacion complementaria";
    vFormacionComplementaria: ItemCurriculumFormacion[] = [];
    cargandoVFormacionComplementaria: boolean = false;
  
    /**********   IDIOMAS   **********/
    tituloIdiomas: string = "Idiomas";
    vIdiomas: ItemCurriculumIdioma[] = [];
    cargandoVIdiomas: boolean = false;

  constructor(
    private fbExperienciaLaboralService: FirebaseExperienciaLaboralService,
    private fbFormacionAcademicaService: FirebaseFormacionAcademicaService,
    private fbFormacionComplementariaService: FirebaseFormacionComplementariaService,
    private fbIdiomasService: FirebaseIdiomasService
  ) { }

  ngOnInit(): void {

    // Cargar Experiencia Laboral
    this.cargandoVExperienciaLaboral = true;
    this.fbExperienciaLaboralService.getExperienciaLaboralCompleta()
      .subscribe( (respData) => {
        this.vExperienciaLaboral = respData;
        this.vExperienciaLaboral.sort( (a, b) => a.orden > b.orden ? -1 : 1)
        this.cargandoVExperienciaLaboral = false;
      })

    // Formación academica
    this.cargandoVFormacionAcademica = true;
    this.fbFormacionAcademicaService.getFormacionAcademicaCompleta()
      .subscribe( (data) => {
        this.vFormacionAcademica = data;
        this.cargandoVFormacionAcademica = false;
      })

    // Formación complementaria
    this.cargandoVFormacionComplementaria = true;
    this.fbFormacionComplementariaService.getFormacionComplementariaCompleta()
      .subscribe( (data) => {
        this.vFormacionComplementaria = data;
        this.cargandoVFormacionComplementaria = false;
      })

    // Idiomas
    this.cargandoVIdiomas = true;
    this.fbIdiomasService.getIdiomasCompleto()
      .subscribe( (data) => {
        this.vIdiomas = data;
        this.cargandoVIdiomas = false;
      })
  }

  cargandoDatos(): boolean {
    return this.cargandoVExperienciaLaboral && this.cargandoVFormacionAcademica 
      && this.cargandoVFormacionComplementaria && this.cargandoVIdiomas;
  }



}
