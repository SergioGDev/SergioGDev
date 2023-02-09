import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// **********    Componentes    ********** //
import { BarraRedesSocialesComponent } from './components/barra-redes-sociales/barra-redes-sociales.component';
import { FotoRedondaComponent } from './components/foto-redonda/foto-redonda.component';
import { ItemCurriculumEmpleoComponent } from './components/item-curriculum-empleo/item-curriculum-empleo.component';
import { ItemDosEmpresasComponent } from './components/item-dos-empresas/item-dos-empresas.component';
import { ItemEmpresaComponent } from './components/item-empresa/item-empresa.component';
import { FooterComponent } from './components/footer/footer.component';
import { PanelSuperiorComponent } from './components/panel-superior/panel-superior.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

// **********    Páginas    ********** //
import { AvisoLegalComponent } from './pages/aviso-legal/aviso-legal.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CurriculumComponent } from './pages/curriculum/curriculum.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PoliticaCookiesComponent } from './pages/politica-cookies/politica-cookies.component';
import { PoliticaPrivacidadComponent } from './pages/politica-privacidad/politica-privacidad.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

import { MaterialModule } from './material/material.module';
import { ItemCurriculumFormacionComponent } from './components/item-curriculum-formacion/item-curriculum-formacion.component';
import { ItemCurriculumIdiomaComponent } from './components/item-curriculum-idioma/item-curriculum-idioma.component';
import { ItemPortfolioComponent } from './components/item-portfolio/item-portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemConocemeMejorComponent } from './components/item-conoceme-mejor/item-conoceme-mejor.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';

@NgModule({
  declarations: [
    AppComponent,

    // Componentes
    BarraRedesSocialesComponent,
    ItemCurriculumEmpleoComponent,
    ItemDosEmpresasComponent,
    ItemEmpresaComponent,
    FooterComponent,
    FotoRedondaComponent,
    PanelSuperiorComponent,
    ToolbarComponent,

    // Páginas
    AvisoLegalComponent,
    BlogComponent,
    ContactoComponent,
    CurriculumComponent,
    InicioComponent,
    PoliticaCookiesComponent,
    PoliticaPrivacidadComponent,
    PortfolioComponent,
    ItemCurriculumFormacionComponent,
    ItemCurriculumIdiomaComponent,
    ItemPortfolioComponent,
    ItemConocemeMejorComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    // Google Analitics
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [ 
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
