import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-facgastos',
  templateUrl: './facgastos.component.html',
  styleUrls: ['./facgastos.component.css']
})
export class FacgastosComponent implements OnInit {
  displayedColumns: string[] = [
    'Nombre',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor() { }

  ngOnInit() {
  }

}
