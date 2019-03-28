import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-reportcomponent',
  templateUrl: './reportcomponent.component.html',
  styleUrls: ['./reportcomponent.component.css']
})
export class ReportcomponentComponent implements OnInit{
  constructor(private api:ApiService) { }
 vehicles:any;
 data2:any;
 Date1:any;
  ngOnInit() {
    this.api.getData().subscribe(data => {
      this.vehicles = data;
      this.vehicles.forEach(element => {
        element.parked_at = new Date(element.parked_at);
        element.Unparked_at = new Date(element.Unparked_at);
      });

    });

    this.api.getSlotno(1234).subscribe(data =>{
      this.data2= data;
      console.log(this.data2);
    })
  }
}
