import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {SharedService} from "../../shared/shared.service";
import { event } from "../../event"
import { ActivatedRoute, Params, Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.css']
})
export class EventListingComponent implements OnInit {

  //sno!: number;
  events: any;
  //@Output() index: EventEmitter<event> = new EventEmitter();

  constructor(private shared:SharedService, private route: Router, private http : HttpClient, private router: ActivatedRoute) { 
  //   this.events = [
  //   {
  //     sno: 1,
  //     title: "Event 1",
  //     desc: "Description 1",
  //     venue: "venue 1",
  //     date: "1-1-2021",
  //     time: "9:00",
  //     active: true
  //   },
  //   {
  //     sno: 2,
  //     title: "Event 2",
  //     desc: "Description 2",
  //     venue: "venue 1",
  //     date: "1-1-2021",
  //     time: "9:00",
  //     active: true  
  //   },
  //   {
  //     sno: 3,
  //     title: "Event 3",
  //     desc: "Description 3",
  //     venue: "venue 1",
  //     date: "1-1-2021",
  //     time: "9:00",
  //     active: true
  //   },
  //   {
  //     sno: 4,
  //     title: "Event 4",
  //     desc: "Description 4",
  //     venue: "venue 1",
  //     date: "1-1-2021",
  //     time: "9:00",
  //     active: true
  //   }
  // ]
  }

  ngOnInit(): void {
    this.shared.setEvents(this.events);
    //this.shared.setIndex(this.index);
    console.log(localStorage.getItem('Token'))
    let TOKEN = JSON.stringify(localStorage.getItem('Token'));
    TOKEN = TOKEN.replace(/['"]+/g, '');
    console.log(TOKEN)
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ` + TOKEN
      })
    };
    console.log(localStorage.getItem('Token'))
    // this.router.params.subscribe((params: Params)=>{
    //   this.sno= +params.sno;
    //   console.log(this.sno);
    // })
    this.http.get("http://localhost:8080/events", httpOptions).subscribe((Response: any)=>{
      console.log(Response)
      //console.log(localStorage.getItem('Token'))
      this.events=Response.data;
     });

  }
  index(events: any){
   
    const id=events
    this.shared.setIndex(events);
    console.log(events)
    this.route.navigate(["/event-details", events])
    //this.index.emit(id);
  };
}
