import { Component, Input, OnInit } from '@angular/core';
import { ItemCurriculumEmpleo } from '../../interfaces/links.interface';

@Component({
  selector: 'app-item-curriculum-empleo',
  templateUrl: './item-curriculum-empleo.component.html',
  styleUrls: ['./item-curriculum-empleo.component.css']
})
export class ItemCurriculumEmpleoComponent implements OnInit {

  @Input() item!: ItemCurriculumEmpleo;

  constructor() { }

  ngOnInit(): void {
  }

}
