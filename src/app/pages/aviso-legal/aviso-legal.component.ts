import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aviso-legal',
  templateUrl: './aviso-legal.component.html',
  styleUrls: ['./aviso-legal.component.css']
})
export class AvisoLegalComponent implements OnInit {

  pathImagen: string = "../../../assets/img/fondo-legal.jpg";
  titulo: string = "Aviso legal";

  constructor() { }

  ngOnInit(): void {
  }

}
