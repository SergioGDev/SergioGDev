import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// **********    Páginas    ********** //
import { AvisoLegalComponent } from './pages/aviso-legal/aviso-legal.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PoliticaCookiesComponent } from './pages/politica-cookies/politica-cookies.component';
import { PoliticaPrivacidadComponent } from './pages/politica-privacidad/politica-privacidad.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

const routes: Routes = [
  { path: '', component: InicioComponent, children: [] },
  { path: 'curriculum', component: CurriculumComponent, children: [] },
  { path: 'portfolio', component: PortfolioComponent, children: [] },
  // { path: 'blog', component: BlogComponent, children: [] },
  { path: 'contacto', component: ContactoComponent, children: [] },
  { path: 'aviso-legal', component: AvisoLegalComponent, children: [] },
  { path: 'politica-cookies', component: PoliticaCookiesComponent, children: [] },
  { path: 'politica-privacidad', component: PoliticaPrivacidadComponent, children: [] },
  { path: '', component: InicioComponent, children: [] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
