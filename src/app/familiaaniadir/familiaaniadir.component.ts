import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientesService } from '../services/clientes.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-familiaaniadir',
  templateUrl: './familiaaniadir.component.html',
  styleUrls: ['./familiaaniadir.component.css']
})
export class FamiliaaniadirComponent implements OnInit {
  empForm:FormGroup;
  constructor(
    private _fb: FormBuilder, 
    private _empService: ClientesService, 
    private _dialogRef: MatDialogRef<FamiliaaniadirComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) { 
    this.empForm = this._fb.group({
      Familia: '',
      });
  }

  ngOnInit() {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit(){
    if(this.empForm.valid){
      if(this.data) {
        this._empService
        .updateCliente(this.data.id, this.empForm.value)
        .subscribe({
          next: (val: any) => {
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }else {
        this._empService
        .addCliente(this.empForm.value).subscribe({
          next: (val: any) => {
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
      
    }
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      // Aquí puedes procesar el archivo seleccionado, como cargarlo en tu servidor
      // Puedes acceder al archivo a través de la variable 'file'
      console.log(file);
    }
  }

  openFilePicker() {
    const fileInput = document.getElementById('Foto');
    if (fileInput) {
      fileInput.click();
    }
  }
}
