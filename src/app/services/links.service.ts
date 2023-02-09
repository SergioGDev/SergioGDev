import { Injectable } from '@angular/core';
import { RedSocial, Option } from '../interfaces/links.interface';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor() { }

  pathAssets: string = "../../../assets/icons/";

  getOpciones(): Option[] {
    return [
      { text: 'Inicio', path: '/' },
      { text: 'Curriculum', path: '/curriculum' },
      { text: 'Portfolio', path: '/portfolio' },
      // { text: 'Blog', path: '/blog' },
      { text: 'Contacto', path: '/contacto' }
    ];
  }

  getOpcionesConocemeMejor(): Option[] {
    return [
      { text: 'Este es mi currículum', path: '/curriculum', pathImagen: this.pathAssets + 'cv.png' },
      { text: 'Este es mi portfolio', path: '/portfolio', pathImagen: this.pathAssets + 'portfolio.png' },
      { text: 'Contacta conmigo', path: '/contacto', pathImagen: this.pathAssets + 'contacto.png' }
    ];
  }

  getEnlacesLegales(): Option[] {
    return [
      { text: 'Aviso legal', path: '/aviso-legal' },
      { text: 'Política de privacidad', path: '/politica-privacidad' },
      { text: 'Política de cookies', path: '/politica-cookies' },
    ];
  }
 
  getRedesSociales(): RedSocial[] {
    return [
      {
        title: "Twitter",
        src: "https://twitter.com/SergioGDev_",
        path: this.pathAssets + "twitter-blanco.svg",
        pathNegro: this.pathAssets + "twitter-negro.svg",
        pathHover: this.pathAssets + "twitter-dorado.svg",
        pathUsed: this.pathAssets + "twitter-blanco.svg",
        pathResponsive: this.pathAssets + "twitter-negro.svg"
      },
      {
        title: "LinkedIn",
        src: "https://www.linkedin.com/in/sergio-garc%C3%ADa-hern%C3%A1ndez-727740114/",
        path: this.pathAssets + "linkedin-blanco.png",
        pathNegro: this.pathAssets + "linkedin-negro.png",
        pathHover: this.pathAssets + "linkedin-dorado.png",
        pathUsed: this.pathAssets + "linkedin-blanco.png",
        pathResponsive: this.pathAssets + "linkedin-negro.png"
      },
      {
        title: "Email",
        src: "mailto:contacto@sergiogdev.com",
        path: this.pathAssets + "email-blanco.svg",
        pathNegro: this.pathAssets + "email-negro.svg",
        pathHover: this.pathAssets + "email-dorado.svg",
        pathUsed: this.pathAssets + "email-blanco.svg",
        pathResponsive: this.pathAssets + "email-negro.svg"
      }
    ];
  }

  getRedesSocialesGrandes(): RedSocial[] {
    return [
      {
        title: "Twitter",
        src: "https://twitter.com/SergioGDev_",
        path: this.pathAssets + "twitter-blanco.svg",
        pathNegro: this.pathAssets + "twitter-negro.svg",
        pathHover: this.pathAssets + "twitter-dorado.svg",
        pathUsed: this.pathAssets + "twitter-negro.svg",
        pathResponsive: this.pathAssets + "twitter-negro.svg"
      },
      {
        title: "LinkedIn",
        src: "https://www.linkedin.com/in/sergio-garc%C3%ADa-hern%C3%A1ndez-727740114/",
        path: this.pathAssets + "linkedin-blanco.png",
        pathNegro: this.pathAssets + "linkedin-negro.png",
        pathHover: this.pathAssets + "linkedin-dorado.png",
        pathUsed: this.pathAssets + "linkedin-negro.png",
        pathResponsive: this.pathAssets + "linkedin-negro.png"
      },
      {
        title: "Email",
        src: "mailto:contacto@sergiogdev.com",
        path: this.pathAssets + "email-blanco.svg",
        pathNegro: this.pathAssets + "email-negro.svg",
        pathHover: this.pathAssets + "email-dorado.svg",
        pathUsed: this.pathAssets + "email-negro.svg",
        pathResponsive: this.pathAssets + "email-negro.svg"
      }
    ];
  }

}
