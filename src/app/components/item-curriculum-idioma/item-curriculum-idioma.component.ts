import { Component, Input, OnInit } from '@angular/core';
import { ItemCurriculumIdioma } from '../../interfaces/links.interface';

@Component({
  selector: 'app-item-curriculum-idioma',
  templateUrl: './item-curriculum-idioma.component.html',
  styleUrls: ['./item-curriculum-idioma.component.css']
})
export class ItemCurriculumIdiomaComponent implements OnInit {

  @Input() item!: ItemCurriculumIdioma;

  constructor() { }

  ngOnInit(): void {
  }

}
