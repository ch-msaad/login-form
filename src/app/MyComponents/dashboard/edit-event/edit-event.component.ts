import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { event } from 'src/app/event';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  events!: event[];
  title!: string;
  desc!: string;
  venue!: string;
  date!: string;
  time!: string;
  error: boolean = false;
  Event_ID!: number;
  constructor(private http: HttpClient, private shared:SharedService, private route: Router) { }

  ngOnInit(): void {
    this.events=this.shared.getEvents();
    console.log(this.events[0]['date']);
    this.title=this.events[0]['title'];
    this.desc=this.events[0]['desc'];
    this.venue=this.events[0]['venue'];
    this.date=this.events[0]['date'].split(".")[0];
    //this.Event_ID=this.events.sno;
    
  }

  postData(asd: any) {
    console.log(this.title)
    console.log(this.desc)
    console.log(this.venue)

    if (this.venue == null || this.venue == '' || this.desc == null || this.desc == '' || this.title == null || this.title == '') {
      this.error = true;
    }
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.put<any>(`http://localhost:8080/editEvent/${asd}`, JSON.stringify({ "title": this.title,
     "desc": this.desc, "venue": this.venue, "date": this.date, "time": this.time}),
      httpOptions).subscribe((req: any) => {
        console.log(req)
        if(req.affectedRows>0){
            alert("Updated Successfully!!");
           // window.location.reload();
           this.route.navigate(["/event-dashboard"]);
        }

      });

  }

}
