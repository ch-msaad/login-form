import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from "../../shared/shared.service";
import { ticket } from 'src/app/ticket';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { EventDetailsComponent } from '../event-listing/event-details/event-details.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-ticket-listing',
  templateUrl: './ticket-listing.component.html',
  styleUrls: ['./ticket-listing.component.css']
})
export class TicketListingComponent implements OnInit {
  @Input() 
  eventId:any;
  tickets!: ticket[];
  ticket_cat: any;
  Category_Name!: any
  
  constructor(private shared:SharedService, private route: Router, private http : HttpClient, private router: ActivatedRoute) {   }
  

  ngOnInit(): void {

    //this.tickets = this.tickets.filter(x=> x.id === this.eventId);
    
    // this.shared.setTicket(this.tickets);
    // console.log(this.tickets)
    console.log(this.eventId)
    //this.shared.setId(this.eventId);
    // console.log(this.tickets)
    this.http.get(`http://localhost:8080/joins/${this.eventId}`).subscribe((Response: any)=>{
      this.tickets=Response.data;
        console.log(this.tickets)
        this.shared.setTicket(this.tickets);
        console.log(this.tickets)
    });
    // this.http.get(`http://localhost:8080/ticket/${this.eventId}`).subscribe((Response: any)=>{
    //   //console.log(Response)
    //     this.tickets=Response.data;
    //     console.log(this.tickets)
    //     this.shared.setTicket(this.tickets);
    //     console.log(this.tickets)
    //     // this.ticket_cat=this.tickets.Category_ID;

    // // this.router.params.subscribe((params: Params)=>{
    // //   this.eventId= +params.id;
    //   //console.log(this.eventId)
    //   // this.http.get(`http://localhost:8080/ticket/${this.eventId}`).subscribe((Response: any)=>{
    //   // console.log(Response)
    //   // this.tickets=Response.data;
    //   // if(this.tickets && this.eventId){
    //   //   this.tickets = this.tickets.filter(x=> x.Event_ID === this.eventId);
    //   // }
    // //  });

    // });
                        //   this.http.get(`http://localhost:8080/getCat/${this.ticket_cat}`).subscribe((Response: any)=>{
                        //     console.log(Response)
                        //       this.ticket_cat=Response;
                        //       console.log(this.ticket_cat)
                        //       //this.shared.setTicketcat(this.ticket_cat);
                        //       //console.log(this.ticket_cat)
                        // })
  //   this.http.get(`http://localhost:8080/ticketcat/${Category_ID}`).subscribe((Response: any)=>{
  //     //console.log(Response)
  //       this.ticket_cat=Response.data;
  //       console.log(this.ticket_cat)
  //       this.shared.setTicketcat(this.ticket_cat);
  //       console.log(this.ticket_cat)
  // })
    // console.log(this.tickets)
  }
 
  ticketcat(tickets: any, tickets1: any){
    console.log(tickets);
    console.log(tickets1);
    
  //   this.http.get(`http://localhost:8080/getCat/${tickets}`).subscribe((Response: any)=>{
  //     console.log(Response)
  //       this.ticket_cat=Response;
  //       console.log(this.ticket_cat)
  //       this.shared.setTicketcat(this.ticket_cat);
  //       //console.log(this.ticket_cat)
  // })
    console.log(tickets);
    //console.log(this.eventId);
    this.shared.setTicketcat(tickets);
    //this.shared.setEvents();
    //this.shared.setEvent_ID(tickets);
    this.route.navigate(["ticket-details"])
  }

}
