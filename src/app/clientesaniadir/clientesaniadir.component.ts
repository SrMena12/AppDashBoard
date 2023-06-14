import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientesService } from '../services/clientes.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-clientesaniadir',
  templateUrl: './clientesaniadir.component.html',
  styleUrls: ['./clientesaniadir.component.scss']
})
export class ClientesaniadirComponent implements OnInit {
  empForm: FormGroup;

  constructor(
    private _fb: FormBuilder, 
    private _empService: ClientesService, 
    private _dialogRef: MatDialogRef<ClientesaniadirComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    ){
    this.empForm = this._fb.group({
    id: '',
    Razon_social: '',
    Persona_de_contacto: '',
    Direccion: '',
    Ciudad: '',
    Provincia: '',
    Codigo_Postal: '',
    Telefono: '',
    Movil: '',
    Descuento: '',
    recargo_Eq: '',
    Observaciones: '',
    Foto: '',
    Correo_E: '',
    Login: '',
    Password: '',
    Tarifa: '',
    });
  }

  ngOnInit(): void {
      this.empForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this._empService
          .updateClient(this.data.id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this._dialogRef.close(); // Cierra el diálogo después de guardar los datos
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._empService.addClient(this.empForm.value).subscribe({
          next: (val: any) => {
            this._dialogRef.close(); // Cierra el diálogo después de guardar los datos
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}