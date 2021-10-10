import { Component, EventEmitter, OnInit, Output, Injectable  } from '@angular/core';
import {SharedService} from "../../shared/shared.service";
import { event } from "../../event"
import { ActivatedRoute, Params, Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { Observable } from 'rxjs';


@Injectable({

  providedIn: 'root'
 
 })

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  events: any;
  tickets: any;
  users: any;
  totalEvents: any;
  totalTickets: any;
  totalUsers: any;
 // event_ID!: any;
  sno:any;
  // bar chart
  // public barChartOptions: ChartOptions = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  // };
  // public barChartLabels: Label[] = [['Total', 'Events'], ['Total', 'Tickets'], ['Total', 'Users']];
  // public barChartType: ChartType = 'bar';
  // public barChartLegend = true;
  // public barChartPlugins = [];

  // public barChartData: ChartDataSets[] = [
  //   { data: [], label: 'Series A' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  // ];

   // Pie
   public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  public pieChartLabels: Label[] = [['Total', 'Events'], ['Total', 'Tickets'], ['Total', 'Users']];
  public pieChartData: SingleDataSet = [300, 500, 1000];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  // PolarArea
  public polarChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  public polarAreaChartLabels: Label[] = [['Total', 'Events'], ['Total', 'Tickets'], ['Total', 'Users']];
  public polarAreaChartData: SingleDataSet = [300, 500, 100];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';

  constructor(private shared:SharedService, private route: Router, private http : HttpClient, private router: ActivatedRoute) {
    console.log(this.tickets);
    this.tickets = this.shared.getTicket();
    console.log(this.tickets);
    
    
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
      this.totalEvents=this.events.length;
     });
     this.http.get("http://localhost:8080/ticket-board").subscribe((Response: any)=>{
      //console.log(Response)
        this.tickets=Response.data;
        console.log(this.tickets)
        this.shared.setTicket(this.tickets);
        console.log(this.tickets)
        this.totalTickets = this.tickets.length;

  })
  this.http.get("http://localhost:8080/user-board").subscribe((Response: any)=>{
      //console.log(Response)
        this.users=Response.data;
        console.log(this.users)
        this.shared.setUser(this.users);
        console.log(this.users)
        this.totalUsers = this.users.length;

  })
  
     monkeyPatchChartJsTooltip();
     monkeyPatchChartJsLegend();
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  public chartColors: any[] = [
    { 
      backgroundColor:["#FF7360", "#6FC8CE", "#c5eb88", "#FFFCC4"] 
    }];

    logout(){
      localStorage.setItem("Token", "");
      //this.route.navigate(['/login-page']);
    }  

    
      del(asd: any){
        if (confirm("Are you sure you want to delete this event?")){
          this.http.delete(`http://localhost:8080/delEvent/${asd}`).subscribe((Response: any)=>{
          console.log(Response);
          console.log(Response.sqlMessage);
          if(Response.sqlMessage){            
            alert(Response.sqlMessage);
          }
          else {
            window.location.reload();
          }
        });
    }
    }
    
  edit(asd: any=[]){
    console.log(asd);
    let a=[];

    a.push(asd)
    this.shared.setEvents(a);
    console.log(a);
  }

}
