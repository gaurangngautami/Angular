import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-unparkcomponent',
  templateUrl: './unparkcomponent.component.html',
  styleUrls: ['./unparkcomponent.component.css']
})
export class UnparkcomponentComponent implements OnInit {

  constructor(private api:ApiService) { }
  Unpark_no:any;
  response:any;
  ngOnInit() {
  }
  Unpark(){
    this.api.Unpark(this.Unpark_no).subscribe(data => { this.response = data});
    console.log(this.response);
  }

}
