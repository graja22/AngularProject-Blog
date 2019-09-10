import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
ta;
  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.http.get('https://5d11b9d484e90600145764c0.mockapi.io/table')
    .toPromise()
    .then((response)=>{
      this.ta=response;
    },
    (error)=>{
      console.log(error);
    }
    );
  }

}
