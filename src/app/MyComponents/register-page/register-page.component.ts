import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  username!: string;
  email!: string;
  password!: string;
  error: boolean = false;

  constructor(private http: HttpClient, private route: Router) { }
  ngOnInit(): void {

  }
  postData() {
    console.log(this.username)
    console.log(this.email)
    console.log(this.password)

    if (this.password == null || this.password == '' || this.email == null || this.email == '' || this.username == null || this.username == '') {
      this.error = true;
    }
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post<any>('http://localhost:8080/register-page', JSON.stringify({ "username": this.username, "email": this.email, "password": this.password }),
      httpOptions).subscribe((req: any) => {
        console.log(req)
        if(req.affectedRows>0){
          alert("Registered Successfully!!");
         // window.location.reload();
         this.route.navigate(["/login-page"]);
      }
        else if (req.sqlMessage) {
          alert(req.sqlMessage);
        }
      });

  }
}
