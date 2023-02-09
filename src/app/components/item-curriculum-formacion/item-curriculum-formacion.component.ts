import { Component, Input, OnInit } from '@angular/core';
import { ItemCurriculumFormacion } from '../../interfaces/links.interface';

@Component({
  selector: 'app-item-curriculum-formacion',
  templateUrl: './item-curriculum-formacion.component.html',
  styleUrls: ['./item-curriculum-formacion.component.css']
})
export class ItemCurriculumFormacionComponent implements OnInit {

  @Input() item!: ItemCurriculumFormacion;

  constructor() { }

  ngOnInit(): void {
  }

}
