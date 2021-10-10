import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ticket } from 'src/app/ticket';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  styleUrls: ['./edit-cat.component.css']
})
export class EditCatComponent implements OnInit {

  ticketcat!: any[];
  Category_ID!: number;
  Category_Name!: string;
  
  error: boolean = false;
  constructor(private http: HttpClient, private shared:SharedService, private route: Router) { }

  ngOnInit(): void {
    this.ticketcat=this.shared.getTicket();
    console.log(this.ticketcat);
    this.Category_ID=this.ticketcat[0]['Category_ID']
    this.Category_Name=this.ticketcat[0]['Category_Name']
  }

  postData(asd: any) {
    console.log(this.Category_ID)
    console.log(this.Category_Name)

    if (this.Category_Name == null || this.Category_Name == '' || this.Category_ID == null) {
      this.error = true;
    }
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.put<any>(`http://localhost:8080/editTicketCat/${asd}`, JSON.stringify({ "Category_ID": this.Category_ID, "Category_Name": this.Category_Name}),
      httpOptions).subscribe((req: any) => {
        console.log(req)
        if(req.affectedRows>0){
          alert("Updated Successfully!!");
         // window.location.reload();
         this.route.navigate(["/TicketCat"]);
      }
      });

  }

}
