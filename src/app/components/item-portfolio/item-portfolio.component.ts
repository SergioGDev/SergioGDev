import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ItemPortfolio } from '../../interfaces/links.interface';

@Component({
  selector: 'app-item-portfolio',
  templateUrl: './item-portfolio.component.html',
  styleUrls: ['./item-portfolio.component.css']
})
export class ItemPortfolioComponent implements OnInit {

  @Input() item!: ItemPortfolio;

  constructor() { }

  ngOnInit(): void {
  }

  getPathFoto(nombreFoto: string) {
    return `${environment.backendUrl}/api/imagen/${nombreFoto}`;
  }

}
