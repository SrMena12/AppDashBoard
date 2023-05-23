import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { DashComponent } from './dash/dash.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { FamiliaComponent } from './familia/familia.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { FacgastosComponent } from './facgastos/facgastos.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'link1', component: ClientesComponent },
  { path: 'link2', component: ProveedoresComponent },
  { path: 'link3', component: ArticulosComponent },
  { path: 'link4', component: FamiliaComponent },
  { path: 'link5', component: FacgastosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
