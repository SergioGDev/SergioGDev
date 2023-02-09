import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-foto-redonda',
  templateUrl: './foto-redonda.component.html',
  styleUrls: ['./foto-redonda.component.css']
})
export class FotoRedondaComponent implements OnInit {

  @Input() pathFoto!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
