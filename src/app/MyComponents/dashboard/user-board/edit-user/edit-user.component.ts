import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { user } from 'src/app/user';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  users!: user[];
  Username!: any;
  Email!: string;
  Password!: number;
  error: boolean = false;
  Event_ID!: number;
  constructor(private http: HttpClient, private shared:SharedService, private route: Router) { }

  ngOnInit(): void {
    this.users=this.shared.getUser();
    console.log(this.users);
    this.Username=this.users[0]['Username'];
    this.Email=this.users[0]['Email'];

  }
  postData(asd: any) {
    console.log(this.Username)
    console.log(this.Email)
    console.log(this.Password)

    if (this.Password == null || this.Email == null || this.Email == '' || this.Username == null) {
      this.error = true;
    }
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.put<any>(`http://localhost:8080/editUser/${asd}`, JSON.stringify({ "Username": this.Username,
     "Email": this.Email, "Password": this.Password}),
      httpOptions).subscribe((req: any) => {
        console.log(req)
        if(req.affectedRows>0){
          alert("Updated Successfully!!");
         // window.location.reload();
         this.route.navigate(["/user-dashboard"]);
      }
        else if (req.sqlMessage) {
          alert(req.sqlMessage);
        }

      });

  }

}
