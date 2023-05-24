import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  product :any;
  title = 'Dashboard';

  constructor(private http: HttpClient){}

  ngOnInit(){
    const headers = { 'Authorization' : 'my-token'}
    this.http.get<any>('https://testapi.jasonwatmore.com/products/1', {headers})
    .subscribe(data => this.product = data);
  }
}
