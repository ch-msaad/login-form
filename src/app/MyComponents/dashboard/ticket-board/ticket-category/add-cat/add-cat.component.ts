import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.css']
})
export class AddCatComponent implements OnInit {

  ticketcat!: any[];
  Category_ID!: number;
  Category_Name!: string;
  error: boolean = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  postData() {
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
    this.http.post<any>('http://localhost:8080/addTicketCat', 
      JSON.stringify({"Category_ID": this.Category_ID, "Category_Name": this.Category_Name}),
      httpOptions).subscribe((req: any) => {
        console.log(req.sqlMessage)
        if(req.sqlMessage){
          alert(req.sqlMessage);
        }
        else if(req.affectedRows>0){
          alert("Ticket Category Successfully Added!");
          window.location.reload();
        }
        // else if(req.sqlMessage){
        //   alert(req.sqlMessage);
        // }
      });

  }

}
