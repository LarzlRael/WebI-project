import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
// importando las rutas
import { RouterModule, Route } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InicioComponent } from './inicio/inicio.component';
import { ClinicaComponent } from './clinica/clinica.component';
import { MascotaComponent } from './mascota/mascota.component';

import { DataService } from './data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//importando nuestro pipe perzonalizado
import { raiz_cuadrada } from './pipes/calculadora.pipe';
import { SecuenciaPipe } from './pipes/secuencia.pipe'
import { PotenciaPipe } from './pipes/potencia.pipe';
import { SaludoPipe } from './pipes/saludo.pipe';
import { ContantoComponent } from './contanto/contanto.component'
// Creando el array de rutas
const routes: Route[] = [

  { path: '', component: InicioComponent },
  { path: 'mascota', component: MascotaComponent },
  { path: 'clinica', component: ClinicaComponent },
  { path: 'clinica/:nombre/:seguidores', component: ClinicaComponent },
  { path :'contacto',component : ContantoComponent}

]

@NgModule({
  declarations: [
    AppComponent,

    InicioComponent,
    ClinicaComponent,
    MascotaComponent,
    raiz_cuadrada,
    SecuenciaPipe,
    PotenciaPipe,
    SaludoPipe,
    ContantoComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
