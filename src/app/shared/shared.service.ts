import { EventEmitter, Injectable, Output } from '@angular/core';
import { event } from '../event';
import { ticket } from '../ticket';
import { user } from '../user';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  events!: event[];
  users!: user[];
  tickets!: ticket[];
  cart: any=[];
  //@Output() index: EventEmitter<event> = new EventEmitter();
  eventIndex: number = 0;
  ticketcat: string = "";
  id: number = 0
  Event_ID: number =0
  constructor() { }

  setEvents(event: event[]){
    this.events=event
    //this.index=this.index
    //this.index.emit();
  }
  setIndex(index: number){
    this.eventIndex=index;
  }
  setTicket(ticket: ticket[]){
    this.tickets=ticket;
  }
  setUser(user: any[]){
    this.users=user;
  }
  setId(eventIndex: number){
    this.id=this.eventIndex;
  }
  setTicketcat(ticketcat: any){
    this.ticketcat=ticketcat;
  }
  // setEvent_ID(Event_ID: number){
  //   this.Event_ID=this.Event_ID
  // }
  setCart(product: any){
    console.log(product);    
    this.cart.push(product);
    console.log(this.cart);
    localStorage.setItem('Cart', JSON.stringify(this.cart));
  }


  getEvents(){
    return this.events
  }
  getIndex(){
    return this.eventIndex;
  }
  getTicket(){
    return this.tickets;
  }
  getUser(){
    return this.users;
  }
  getTicketcat(){
    return this.ticketcat;
  }
  getId(){
    return this.id
  }
  // getEvent_ID(){
  //   return this.Event_ID
  // }
  getCart(){
    // this.cart = JSON.parse(localStorage.getItem("Cart"));
    this.cart = JSON.parse(localStorage.Cart);
    console.log(this.cart);
    return this.cart;
  }
}

