import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { ticket } from 'src/app/ticket';
import { HttpClient } from '@angular/common/http';
import { NgPopupsService } from 'ng-popups';


@Component({
  selector: 'app-ticket-category',
  templateUrl: './ticket-category.component.html',
  styleUrls: ['./ticket-category.component.css']
})

export class TicketCategoryComponent implements OnInit {

  @Input() 
  eventId:any;
  tickets!: ticket[];
  ticketcat!: any[];
  constructor(private http : HttpClient, private shared:SharedService,
    private ngPopups: NgPopupsService) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/ticketcat").subscribe((Response: any)=>{
      console.log(Response)
      //console.log(localStorage.getItem('Token'))
      this.ticketcat=Response.data;
      console.log(this.ticketcat);
     });
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
      this.http.delete(`http://localhost:8080/delTicketCat/${asd}`).subscribe((Response: any)=>{});
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
