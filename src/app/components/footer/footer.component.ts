import { Component, OnInit } from '@angular/core';
import { LinksService } from '../../services/links.service';
import { Option, RedSocial } from '../../interfaces/links.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private linkService: LinksService
  ) { }

  ngOnInit(): void {
  }

  options: Option[] = this.linkService.getOpciones();
  redesSociales: RedSocial[] = this.linkService.getRedesSociales();
  enlacesLegales: Option[] = this.linkService.getEnlacesLegales();

}
