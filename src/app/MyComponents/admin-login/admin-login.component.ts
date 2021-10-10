import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  email!: string;
  password!: string;
  constructor(private http : HttpClient, private route: Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.email)
    console.log(this.password)
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }; 
    this.http.post<any>('http://localhost:8080/admin', JSON.stringify({ "email": this.email, "password": this.password }), httpOptions).subscribe((req: any) => {
      if (req.sqlMessage) {
        alert(req.sqlMessage);
      }
      else if (req.status == 200) {
        localStorage.setItem("Token", req.accessToken);
        this.route.navigate(["/dashboard"]);

      }
      else if (req.msg) {
        alert("Invalid Username or Password!");
      }
        // else{
        //   this.route.navigate(["/dashboard"]);
        // }
     });
}
}
