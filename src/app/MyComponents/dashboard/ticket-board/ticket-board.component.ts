import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { ticket } from 'src/app/ticket';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';



@Component({
  selector: 'app-ticket-board',
  templateUrl: './ticket-board.component.html',
  styleUrls: ['./ticket-board.component.css']
})
export class TicketBoardComponent implements OnInit {

  @Input() 
  eventId:any;
  tickets!: any[];
  constructor(private http : HttpClient, private shared:SharedService, private route: Router,
    private ngPopups: NgPopupsService) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/ticket-board").subscribe((Response: any)=>{
      //console.log(Response)
        this.tickets=Response.data;
        console.log(this.tickets)
        this.shared.setTicket(this.tickets);
        console.log(this.tickets)
  })
  this.tickets=this.shared.getTicket();
  console.log(this.tickets);
  }
  logout(){
    localStorage.setItem("Token", "");
    //this.route.navigate(['/login-page']);
  }  
  del(asd: any){
    this.ngPopups.confirm('Do you really want to delete?')
  .subscribe(res => {
    if (res) {
      console.log('You clicked OK.');
      this.http.delete(`http://localhost:8080/delTicket/${asd}`).subscribe((Response: any)=>{});
      window.location.reload();
    } else {
      console.log('You clicked Cancel.');
    }
  });
  }
  edit(asd: any=[]){
    console.log(asd);
    let a=[];

    a.push(asd)
    this.shared.setTicket(a);
    console.log(a);
  }
}
