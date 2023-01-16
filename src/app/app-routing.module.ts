import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './home/calculadora/calculadora.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'calculadora', component:CalculadoraComponent},
  {path:'**', pathMatch:'full', redirectTo: 'calculadora'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
