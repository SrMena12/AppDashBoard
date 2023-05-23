import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProveedoresService } from '../services/proveedores.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-proveedoresaniadir',
  templateUrl: './proveedoresaniadir.component.html',
  styleUrls: ['./proveedoresaniadir.component.scss']
})
export class ProveedoresaniadirComponent implements OnInit {
  empForm: FormGroup;

  constructor(
    private _fb: FormBuilder, 
    private _empService: ProveedoresService, 
    private _dialogRef: MatDialogRef<ProveedoresaniadirComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    ){
    this.empForm = this._fb.group({
      Nombre: '',
      Apellidos: '',
      // email: '',
      // gender: '',
      // education: '',           //DEJO SOLO NOMBRE Y APELLIDO
      // dob: ''
    });
  }

  ngOnInit(): void {
      this.empForm.patchValue(this.data);
  }

  onFormSubmit(){
    if(this.empForm.valid){
      if(this.data) {
        this._empService
        .updateProveedor(this.data.id, this.empForm.value)
        .subscribe({
          next: (val: any) => {
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }else {
        this._empService
        .addProveedor(this.empForm.value).subscribe({
          next: (val: any) => {
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
      
    }
  }

}