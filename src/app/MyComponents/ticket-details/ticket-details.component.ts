import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/MyServices/cart.service';
import { ticket } from 'src/app/ticket';
import {SharedService} from "../../shared/shared.service";
import { Store } from '@ngrx/store';
import { addProduct } from '../../store/action';
import { Product } from '../../entity/product';


@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {

  @Input() 
  eventId:any;
  tickets!: ticket[]
  ticketcat!: any
  Category_Name!: any
  index!: any
  events!: any[]
  constructor(private shared:SharedService, private route: Router, private http : HttpClient, private router: ActivatedRoute,
     private cartService : CartService, private store: Store) { }


  ngOnInit(): void {
    this.index=this.shared.getIndex();
    console.log(this.index);
    this.tickets=this.shared.getTicket()
    console.log(this.tickets)
    this.ticketcat=this.shared.getTicketcat()
    console.log(this.ticketcat)
    // this.Category_Name = this.ticketcat.Category_Name;
    console.log(this.ticketcat)
    // console.log(this.Category_Name)
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
        console.log(this.events[0]['title']);
      }
     });
    this.http.get(`http://localhost:8080/getCat/${this.ticketcat}&${this.index}`).subscribe((Response: any)=>{
      console.log(Response[0])
      this.tickets=Response;
        // this.Category_Name= Response[0];
        console.log(this.tickets)
        // this.shared.setTicketcat(this.Category_Name);
        //console.log(this.ticket_cat)
  })
    //console.log(this.eventId)
    // this.http.get(`http://localhost:8080/ticket/${this.eventId}`).subscribe((Response: any)=>{
      // console.log(Response)
      // this.tickets=Response.data;
      //if(this.tickets && this.eventId){
        //this.shared.getEvents;
        //console.log(this.eventId)
        console.log(this.shared);
        
        console.log(this.tickets)

      // this.tickets = this.tickets.filter(x=> x.Category_ID === this.ticketcat);
      // console.log(this.tickets)
    //}
    //    });
  }
  addtocart(item: any){
    console.log(this.shared);
    console.log(item);
    this.shared.setCart(item);
  }
  public buyProduct(product: any) {
    this.store.dispatch(addProduct(product));
  }
}
