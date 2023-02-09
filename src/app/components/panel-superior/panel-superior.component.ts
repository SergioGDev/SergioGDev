import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-superior',
  templateUrl: './panel-superior.component.html',
  styleUrls: ['./panel-superior.component.css']
})
export class PanelSuperiorComponent implements OnInit {

  @Input() titulo!: string;
  @Input() pathImagen!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
