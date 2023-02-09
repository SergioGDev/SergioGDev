import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politica-cookies',
  templateUrl: './politica-cookies.component.html',
  styleUrls: ['./politica-cookies.component.css']
})
export class PoliticaCookiesComponent implements OnInit {

  pathImagen: string = "../../../assets/img/fondo-legal.jpg";
  titulo: string = "Política de cookies";

  constructor() { }

  ngOnInit(): void {
  }

}
