import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-Value',
  templateUrl: './Value.component.html',
  styleUrls: ['./Value.component.scss']
})
export class ValueComponent implements OnInit {
value: any;
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getValues();
  }


// tslint:disable-next-line:typedef
getValues()  {
    this.http.get('http://localhost:5000/api/weatherforecast/5').subscribe(resp => {
      this.value = resp;
    },
    error => {
      console.log(error);
    });
  }

}
