import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { event } from '../../../../event'



@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  events!: event[];
  ticketcat!: any[];
  Event_ID!: any;
  Category_ID!: any;
  category!: any;
  price!: any;
  Quantity!: number;
  error: boolean = false;
  catID!: number;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
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
    this.http.get("http://localhost:8080/ticketcat").subscribe((Response: any)=>{
      console.log(Response)
      //console.log(localStorage.getItem('Token'))
      this.ticketcat=Response.data;
      console.log(this.ticketcat);
      
     });
  }

  postData() {
    console.log(this.Event_ID)
    console.log(this.Category_ID)
    console.log(this.category)
    console.log(this.catID)

    if (this.Event_ID == null || this.Quantity == null || this.Category_ID == null || this.price == null) {
      this.error = true;
    }
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post<any>('http://localhost:8080/addTicket', 
      JSON.stringify({ "Event_ID": this.Event_ID, "Category_ID": this.Category_ID, "price": this.price, "Quantity": this.Quantity}),
      httpOptions).subscribe((req: any) => {
        console.log(req)
        if(req.affectedRows>0){
          alert("Ticket Successfully Added!");
          window.location.reload();
        }
      });

  }
}
