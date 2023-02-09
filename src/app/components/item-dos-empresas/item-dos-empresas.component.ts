import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { ItemEmpresaDuo } from '../../interfaces/links.interface';

@Component({
  selector: 'app-item-dos-empresas',
  templateUrl: './item-dos-empresas.component.html',
  styleUrls: ['./item-dos-empresas.component.css']
})
export class ItemDosEmpresasComponent implements OnInit {

  @Input() itemEmpresaDuo!: ItemEmpresaDuo;

  constructor() { }

  ngOnInit(): void {
  }

  getPathFoto(nombreFoto: string) {
    return `${nombreFoto}`;
  }
}
