import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './card/card.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesaniadirComponent } from './clientesaniadir/clientesaniadir.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ProveedoresaniadirComponent } from './proveedoresaniadir/proveedoresaniadir.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { FamiliaComponent } from './familia/familia.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { FacgastosComponent } from './facgastos/facgastos.component';
import { ArticulosaniadirComponent } from './articulosaniadir/articulosaniadir.component';
import { FamiliaaniadirComponent } from './familiaaniadir/familiaaniadir.component';
import { FacgastosaniadirComponent } from './facgastosaniadir/facgastosaniadir.component';


@NgModule({
  declarations: [							
    AppComponent,
    NavComponent,
    DashComponent,
    CardComponent,
    LineChartComponent,
    ClientesComponent,
    ClientesaniadirComponent,
    ProveedoresaniadirComponent,
    ProveedoresComponent,
      FamiliaComponent,
      ArticulosComponent,
      FacgastosComponent,
      ArticulosaniadirComponent,
      FamiliaaniadirComponent,
      FacgastosaniadirComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgChartsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
