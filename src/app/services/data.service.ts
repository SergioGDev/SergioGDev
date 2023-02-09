import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemEmpresa, ItemEmpresaDuo, ItemCurriculumEmpleo, ItemCurriculumFormacion, ItemCurriculumIdioma, ItemPortfolio, MensajeFormulario } from '../interfaces/links.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  pathAssets: string = "../../../assets/img/";
  urlFormulario: string = "/api/contacta-conmigo";

  // Obtiene un array de empresas divididas en items de dos empresas para mostrarlo en la vista de una forma correcta
  getEmpresasDuo(): ItemEmpresaDuo[] {
    const vEmpresas: ItemEmpresa[] = this.getEmpresas();
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

  // Obtiene un array de las empresas en las que se ha trabajado
  getEmpresas(): ItemEmpresa[] {
    return [
      {
        nombre: "Everis | NTT Data",
        direccion: "Carbajosa de la Sagrada (Salamanca)",
        pathFoto: this.pathAssets + "logo-everis.jpeg",
        url: "https://www.everis.com/spain/es/home-spain",
        descripcion: '"Somos everis an NTT DATA Company, nos dedicamos a la consultoría y outsourcing abarcando todos los sectores del ámbito económico, llegando a facturar en el último ejercicio fiscal 1.454 millones de euros. Somos una gran familia formada por más de 27.000 profesionales repartidos por Europa, USA y Latinoamérica."'
      },
      {
        nombre: "Metaphase07",
        direccion: "Alburquerque (Badajoz)",
        pathFoto: this.pathAssets + "logo-metaphase.jpeg",
        url: "https://metaphase07.es/",
        descripcion: '"Consultora especializada en diseño, desarrollo e implementación de soluciones digitales centradas en personas, con más de diez años de experiencia abordamos cada proyecto desde un enfoque de alto rendimiento."'
      }
    ]
  }

  getItemsCurrirulumEmpresas(): ItemCurriculumEmpleo[] {
    return [
      {
        empresa: "Everis",
        puesto: "Centers Junior",
        descripcionPuesto: "Desarrollos web, tanto en la parte backend como en la frontend",
        direccion: "Carbajosa de la Sagrada (Salamanca)",
        fechaDesde: "Febrero de 2021",
        fechaHasta: "Trabajando actualmente",
        descripcionBackend: "Spring Framework con Java, JPA, Hibernate, Maven y MVC",
        descripcionFrontend: "JSF, HTML5, CSS3, JavaScript, jQuery y Ajax",
        otrosDatosDesarrollo: "Creación de scripts SQL para trabajar con bases de datos relacionales, creación de plantillas Jasper",
        otraDescripcion: "RTC y Jira"
      },
      {
        empresa: "Metaphase07",
        puesto: "Desarrollador FullStack",
        descripcionPuesto: "Desarrollo de aplicaciones Android y de desarrollos web, tanto en la parte backend como en frontend",
        direccion: "Alburquerque (Badajoz)",
        fechaDesde: "Julio de 2020",
        fechaHasta: "Diciembre de 2020",
        descripcionAplicaciones: "Aplicaciones Android con Java (XML, JSON, peticiones rest, trabajo con WebSockets, SQLite, Firebase, Google Analitics)",
        descripcionBackend: "Golang",
        descripcionFrontend: "HTML5, CSS3, JavaScript, jQuery y Ajax",
        otrosDatosDesarrollo: "Trabajo con scripts SQL para trabajar con bases de datos relacionales.",
        otraDescripcion: "Github y Jira. Metodología Agile"
      }
    ]
  }

  getItemsCurrirulumFormacionAcademica(): ItemCurriculumFormacion[] {
    return [
      {
        titulo: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma",
        dondeSeObtuvo: "IES Valle del Jerte. Plasencia (Cáceres)"
      },
      {
        titulo: "Estudiante de Ingeniería Informática",
        dondeSeObtuvo: "Universidad Nacional de Educación a Distancia (UNED)"
      }
    ]
  }

  getItemsCurrirulumFormacionComplementaria(): ItemCurriculumFormacion[] {
    return [
      {
        titulo: "Spring Framework",
        dondeSeObtuvo: "Openwebinars"
      },
      {
        titulo: "Angular: De cero a experto",
        dondeSeObtuvo: "Udemy"
      },
      {
        titulo: "SQL: Creación de Bases de Datos (de cero a profesional)",
        dondeSeObtuvo: "Udemy"
      },
      {
        titulo: "Java 8 desde cero",
        dondeSeObtuvo: "Udemy"
      },
      {
        titulo: "Programación Avanzada de Aplicaciones Android",
        dondeSeObtuvo: "Universidad de Extremadura"
      },
      {
        titulo: "Programación Web",
        dondeSeObtuvo: "Universidad de Extremadura"
      },
    ]
  }

  getItemsCurrirulumIdiomas(): ItemCurriculumIdioma[] {
    return [
      {
        idioma: "Inglés",
        nivel: "B1",
        dondeSeObtuvo: "Escuela Oficial de Idiomas (EOI)"
      }
    ]
  }

  getItemsPortfolio(): ItemPortfolio[] {
    return [
      {
        nombre: "SergioGDev",
        pathWeb: "https://sergiogdev.com/",
        pathImagen: this.pathAssets + "logo-sergiogdev-negro.png",
        descripcion: "Web currículum de Sergio García, desarrollador fullstack. En ella se muestra el portfolio, el currículum, un blog y un formulario de contacto con el desarrollador.",
        tecnologiasFrontend: "Desarrollada en Angular (HTML5, CSS3, TypeScript). Se han utilizado las librerías AngularFlex, Angular Material y Animate Style."
      }
    ]
  }

  enviarFormularioContacto(datos: MensajeFormulario) : Observable<any> {
    return this.http.post(this.urlFormulario, datos);
  }
}
