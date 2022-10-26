import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './componentes/barra-superior/barra-superior.component';
import { ImagenDeFondoComponent } from './componentes/imagen-de-fondo/imagen-de-fondo.component';
import { InfoBaseComponent } from './componentes/info-base/info-base.component';
import { BarraBotonesComponent } from './componentes/barra-botones/barra-botones.component';
import { ExperienciaEducacionComponent } from './componentes/experiencia-educacion/experiencia-educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    ImagenDeFondoComponent,
    InfoBaseComponent,
    BarraBotonesComponent,
    ExperienciaEducacionComponent,
    SkillsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
