import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ticket } from 'src/app/ticket';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';
import { event } from '../../../../event'



@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {

  events!: event[];
  tickets!: ticket[];
  Category_ID!: any;
  Category_Name!: any;
  Quantity!: number;
  title!: any;
  price!: any;
  error: boolean = false;
  Event_ID!: number;
  ticketcat!: any[];

  constructor(private http: HttpClient, private shared:SharedService, private route: Router) { }

  ngOnInit(): void {
    this.tickets=this.shared.getTicket();
    console.log(this.tickets);
    this.Category_ID=this.tickets[0]['Category_ID'];
    this.Category_Name=this.tickets[0]["Category_Name"];
    this.price=this.tickets[0]["price"];
    this.Quantity=this.tickets[0]["Quantity"];
    this.Event_ID=this.tickets[0]["Event_ID"];

    //events
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
    this.http.get("http://localhost:8080/events", httpOptions).subscribe((Response: any)=>{
      console.log(Response)
      //console.log(localStorage.getItem('Token'))
      this.events=Response.data;
     });
     //ticketcat
     this.http.get("http://localhost:8080/ticketcat").subscribe((Response: any)=>{
      console.log(Response)
      //console.log(localStorage.getItem('Token'))
      this.ticketcat=Response.data;
      console.log(this.ticketcat);
      
     });
  }

  postData(asd: any) {
    console.log(this.Event_ID)
    console.log(this.Category_ID)
    console.log(this.Quantity)
    console.log(this.price)

    if (this.price == null || this.Quantity == null || this.Category_ID == null) {
      this.error = true;
    }
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.put<any>(`http://localhost:8080/editTicket/${asd}`, JSON.stringify({ "Event_ID": this.Event_ID,
     "Category_ID": this.Category_ID,  "price": this.price, "Quantity": this.Quantity}),
      httpOptions).subscribe((req: any) => {
        console.log(req)
        if(req.affectedRows>0){
          alert("Updated Successfully!!");
         // window.location.reload();
         this.route.navigate(["/ticket-dashboard"]);
      }
      });

  }
}
