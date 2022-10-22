import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PreguntaComponent } from './components/pregunta/pregunta.component';
import { ResultadoComponent } from './components/resultado/resultado.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'pregunta', component: PreguntaComponent},
  {path: 'resultado', component: ResultadoComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: '**', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
