import { Component, OnInit } from '@angular/core';
import { LinksService } from '../../services/links.service';
import { RedSocial } from 'src/app/interfaces/links.interface';

@Component({
  selector: 'app-barra-redes-sociales',
  templateUrl: './barra-redes-sociales.component.html',
  styleUrls: ['./barra-redes-sociales.component.css']
})
export class BarraRedesSocialesComponent implements OnInit {

  constructor(private linksService: LinksService) { }

  redesSociales: RedSocial[] = this.linksService.getRedesSociales();

  ngOnInit(): void {
  }

}
