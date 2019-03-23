import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { map , catchError } from 'rxjs/operators';
import { parked_vehicle } from './parked_vehicle';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  available_slot=['A','B','C','D','E','F','G','H','I','J'];
  reserved_slot=[];
  total_slots = 10;
  reserved = 0;
  sorted = this.available_slot.sort();


  public getData() :Observable<any> {
    return this.http.get('/api/parked');
  }

  public getSlotno(rno: number) :Observable<any> {
    let v_reg_no = {rno: rno};
    return this.http.post('/api/findparked',v_reg_no);
  }
  public ParkNew(RNumber: number): Observable<any> {
    let json = {
      vno:1,
      slot:''
    };
    json.vno = RNumber;
    this.sorted = this.available_slot.sort();
    json.slot = this.sorted[0];
    this.reserved_slot.push(this.sorted[0]);
    this.available_slot.splice(this.available_slot.indexOf(this.sorted[0]),1);
    return this.http.post("/api/parkit", json);
  }


  public Unpark(RNumber: number):Observable<any> {
    let v_reg_no = {rno: RNumber};
    return this.http.delete('/api/unpark');
  }
}
