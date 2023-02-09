import { Component, Input, OnInit } from '@angular/core';
import { Option } from '../../interfaces/links.interface';

@Component({
  selector: 'app-item-conoceme-mejor',
  templateUrl: './item-conoceme-mejor.component.html',
  styleUrls: ['./item-conoceme-mejor.component.css']
})
export class ItemConocemeMejorComponent implements OnInit {

  @Input() item!: Option;

  constructor() { }

  ngOnInit(): void {
  }

}
