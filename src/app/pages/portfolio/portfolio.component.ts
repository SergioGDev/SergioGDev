import { Component, OnInit } from '@angular/core';
import { ItemPortfolio } from '../../interfaces/links.interface';
import { PortfolioService } from '../../services/portfolio.service';
import { FirebasePortfolioService } from '../../services/firebase-portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  
  /* DATOS PANEL SUPERIOR */
  pathImagen: string = "../../../assets/img/fondo-portfolio.jpg";
  titulo: string = "Portfolio";

  vPortfolio: ItemPortfolio[] = [];
  cargandoPortfolio: boolean = false;

  constructor(
    private fbPortfolioService: FirebasePortfolioService
  ) { }

  ngOnInit(): void {
    this.cargandoPortfolio = true;
    this.fbPortfolioService.getPortfolioCompleto()
      .subscribe( (data) => {
        this.vPortfolio = data;
        this.cargandoPortfolio = false;
      })
  }
}
