import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  username!: string;
  email!: string;
  password!: string;
  error: boolean = false;
  constructor(private http: HttpClient) { }

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
        if(req.sqlMessage){
          alert(req.sqlMessage);
        }
        else if(req.affectedRows>0){
          alert("User Successfully Added!");
          window.location.reload();
        }
      });

  }
}
