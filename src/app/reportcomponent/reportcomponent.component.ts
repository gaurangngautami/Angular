import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-reportcomponent',
  templateUrl: './reportcomponent.component.html',
  styleUrls: ['./reportcomponent.component.css']
})
export class ReportcomponentComponent implements OnInit{
  constructor(private api:ApiService) { }
 data1:any;
 data2:any;
 Date1:any;
  ngOnInit() {
    this.api.getData().subscribe(data => {
      this.data1 = data;
      console.log(data);
      this.Date1 = new Date(this.data1[6].parked_at);
      console.log(this.data1[6].parked_at);
    });

    this.api.getSlotno(1234).subscribe(data =>{
      this.data2= data;
      console.log(this.data2);
    })
  }
}
