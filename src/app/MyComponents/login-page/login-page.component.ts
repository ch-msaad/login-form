import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  email!: string;
  password!: string;
  constructor(private http : HttpClient, private route: Router, private ngPopups: NgPopupsService) { }

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
    this.http.post<any>('http://localhost:8080/login', JSON.stringify({"email": this.email, "password": this.password}),
     httpOptions).subscribe((req: any)=>{
      if(req.status ==200){
        localStorage.setItem("Token", req.accessToken);
        this.route.navigate(["events"]);
        console.log(req.accessToken);
        
      }
      else if (req.sqlMessage) {
        this.ngPopups.alert(req.sqlMessage).subscribe(res => {
          if (res) {
            window.location.reload();
          }
      });      
    }
      else if(req.msg){
        this.ngPopups.alert("Invalid Username or Password!").subscribe(res => {
          if (res) {
            window.location.reload();
          }
      });
    }
      else if (req.msg1){
        this.ngPopups.alert("Invalid Username or Password!").subscribe(res => {
          if (res) {
            window.location.reload();
          }
      });
    }
     });
  } 
}
