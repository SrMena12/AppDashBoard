import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { DashComponent } from './dash/dash.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'link1', component: ClientesComponent },
  { path: 'link2', component: ProveedoresComponent },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
