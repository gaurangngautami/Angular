import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-parkcomponent',
  templateUrl: './parkcomponent.component.html',
  styleUrls: ['./parkcomponent.component.css']
})
export class ParkcomponentComponent implements OnInit {

  constructor(private api:ApiService) { }
  Park_no:any;
  Parking_slot:any;
  Show:boolean=false;
  ngOnInit() {
  
  }
  Park():void{
    this.Parking_slot=this.api.sorted[0];
    this.api.ParkNew(this.Park_no).subscribe();
    this.Show = true;
  }
}
