import { Component, OnInit } from '@angular/core';

import { ItemEmpresa, ItemEmpresaDuo, RedSocial, Option } from '../../interfaces/links.interface';
import { LinksService } from '../../services/links.service';
import { FirebaseExperienciaLaboralService } from '../../services/firebase-experiencia-laboral.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  // ********   PANEL SUPERIOR   ******** //
  textoSubtitulo: string = "Desarrollador FullStack";

  // ********   INFORMACIÓN PERSONAL   ******** //
  tituloInfoPersonal: string = "¿Quién soy?";
  msgNombre: string = "Sergio García";
  msgQuienSoy1: string = "Mi nombre es ";
  msgQuienSoy2: string = " y soy desarrollador de software. Empecé en el mundo de la programación buscando un "
  + "futuro que me aportase desafíos a nivel intelectual y una nueva forma de vida. Cada día busco nuevas formas de seguir "
  + "disfrutando del desarrollo de software y nuevas tecnologías que me permitan ser un desarrollador más completo."
  msgQuienSoy3: string = "Pienso que en la vida siempre se puede aprender algo nuevo que nos haga crecer como personas y como profesionales.";

  nombreApellido: string = 'Sergio García';
  lugar: string = 'Plasencia (Extremadura)';

  edad: number = this.calcularEdad(28, 4, 1993);

  pathFotoSergio: string = "../../../assets/img/foto_sergio.jpeg";


  // ********    EMPRESAS    ******** //
  cargandoEmpresas: boolean = false;
  tituloEmpresas: string = "Estas empresas han confiado en mí";
  vEmpresas: ItemEmpresa[] = [];
  vEmpresasDuo: ItemEmpresaDuo[] = [];
  // vEmpresas: ItemEmpresa[] = this.dataService.getEmpresas();
  // vEmpresasDuo: ItemEmpresaDuo[] = this.dataService.getEmpresasDuo();

  // ********    BÚSCAME EN MIS REDES SOCIALES    ******** //
  tituloRedesSociales: string = "Búscame en mis redes sociales";
  redesSociales: RedSocial[] = this.linkService.getRedesSocialesGrandes();

  // ********    CONOCEME MEJOR    ******** //
  tituloConocemeMejor: string = "Conóceme mejor";
  vOpcionesConocemeMejor: Option[] = this.linkService.getOpcionesConocemeMejor();


  constructor(
    private fbExperienciaLaboralService: FirebaseExperienciaLaboralService,
    private linkService: LinksService
    ) { }

  ngOnInit(): void {
    this.cargandoEmpresas = true;
    this.fbExperienciaLaboralService.getExperienciaEmpresasConfiado().pipe(
    ).subscribe( (data) => {
      this.vEmpresas = data;
      this.vEmpresas.reverse();
      this.vEmpresasDuo = this.fbExperienciaLaboralService.getEmpresasDuo(this.vEmpresas);
      this.cargandoEmpresas = false;
    }, err => {
      console.log(err);
    })
  }

  calcularEdad(diaNacimiento: number, mesNacimiento: number, anioNacimiento: number): number {

    var obj = {
      diaNacimiento: diaNacimiento,
      mesNacimiento: mesNacimiento,
      anioNacimiento: anioNacimiento
    }

    var fecha_hoy = new Date();
    var ahora_ano = fecha_hoy.getFullYear();
    var ahora_mes = fecha_hoy.getMonth();
    var ahora_dia = fecha_hoy.getDate();

    var edad = ahora_ano - obj.anioNacimiento;

    if (ahora_mes < (obj.mesNacimiento - 1)) {

      edad--;
    }

    if (((obj.mesNacimiento - 1) == ahora_mes) && (ahora_dia < obj.diaNacimiento)) {
      edad--;
    }

    return edad;
  }

}
