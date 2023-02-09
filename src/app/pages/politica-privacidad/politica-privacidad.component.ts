import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politica-privacidad',
  templateUrl: './politica-privacidad.component.html',
  styleUrls: ['./politica-privacidad.component.css']
})
export class PoliticaPrivacidadComponent implements OnInit {

  pathImagen: string = "../../../assets/img/fondo-legal.jpg";
  titulo: string = "Política de privacidad";

  constructor() { }

  ngOnInit(): void {
  }

}
