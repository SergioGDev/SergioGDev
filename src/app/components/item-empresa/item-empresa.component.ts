import { Component, Input, OnInit } from '@angular/core';
import { ItemEmpresa } from 'src/app/interfaces/links.interface';

@Component({
  selector: 'app-item-empresa',
  templateUrl: './item-empresa.component.html',
  styleUrls: ['./item-empresa.component.css']
})
export class ItemEmpresaComponent implements OnInit {

  @Input() empresa!: ItemEmpresa;

  constructor() { }

  ngOnInit(): void {
  }

}
