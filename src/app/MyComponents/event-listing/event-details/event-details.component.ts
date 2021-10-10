import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from "../../../shared/shared.service";
import { event } from '../../../event';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  events!: event[]
  index: any
  id: any
  constructor(private shared:SharedService, private http : HttpClient) { }

  ngOnInit(): void {
  
  // console.log(this.shared);
  
  this.events= this.shared.getEvents();
  console.log(this.events);
  
  this.index=this.shared.getIndex();
  console.log(this.index);
  
  this.id=this.shared.setId(this.index);
  console.log(this.id);
  
  let TOKEN = JSON.stringify(localStorage.getItem('Token'));
    TOKEN = TOKEN.replace(/['"]+/g, '');
    console.log(TOKEN)
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ` + TOKEN
      })
    };
  this.http.get('http://localhost:8080/events', httpOptions).subscribe((Response: any)=>{
      console.log(Response)
      this.events=Response.data;
      if(this.events && this.index){
        this.events = this.events.filter(x=> x.sno === this.index);
      }
     });
  
  // this.shared.index.subscribe(event=>{
  //   console.log(event);
  // });
  // console.log(this.index);
  // console.log(this.id)

  

  }

}
