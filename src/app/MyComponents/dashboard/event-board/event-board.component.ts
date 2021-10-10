import { Component, EventEmitter, OnInit, Output, Injectable } from '@angular/core';
import { SharedService } from "../../../shared/shared.service";
import { event } from "../../../event"
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { Observable } from 'rxjs';
import { NgPopupsService } from 'ng-popups';

@Component({
  selector: 'app-event-board',
  templateUrl: './event-board.component.html',
  styleUrls: ['./event-board.component.css']
})

export class EventBoardComponent implements OnInit {

  events: any;
  tickets: any;
  users: any;
  totalEvents: any;
  totalTickets: any;
  totalUsers: any;
  // event_ID!: any;
  sno: any;
  constructor(private shared: SharedService, private route: Router,
     private http: HttpClient, private router: ActivatedRoute,
    private ngPopups: NgPopupsService) {
    this.tickets = this.shared.getTicket();
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
    this.http.get("http://localhost:8080/events", httpOptions).subscribe((Response: any) => {
      console.log(Response)
      //console.log(localStorage.getItem('Token'))
      this.events = Response.data;
      this.totalEvents = this.events.length;
    });

  }

  logout() {
    localStorage.setItem("Token", "");
    //this.route.navigate(['/login-page']);
  }
  del(asd: any) {
    this.ngPopups.confirm('Do you really want to delete?')
      .subscribe(res => {
        if (res) {
          console.log('You clicked OK.');
          this.http.delete(`http://localhost:8080/delEvent/${asd}`).subscribe((Response: any) => {
            console.log(Response);
            console.log(Response.sqlMessage);
            if (Response.sqlMessage) {
              this.ngPopups.alert(Response.sqlMessage);
            }
            else {
              window.location.reload();
            }
          });
        } else {
          console.log('You clicked Cancel.');
        }
      });
  }
  edit(asd: any = []) {
    console.log(asd);
    let a = [];

    a.push(asd)
    this.shared.setEvents(a);
    console.log(a);
  }
}
