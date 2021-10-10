import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgPopupsService } from 'ng-popups';
import { SharedService } from 'src/app/shared/shared.service';
import { user } from 'src/app/user';

@Component({
  selector: 'app-user-board',
  templateUrl: './user-board.component.html',
  styleUrls: ['./user-board.component.css']
})
export class UserBoardComponent implements OnInit {

  users!: user[];
  constructor(private http : HttpClient, private shared:SharedService,
    private ngPopups: NgPopupsService) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/user-board").subscribe((Response: any)=>{
      //console.log(Response)
        this.users=Response.data;
        console.log(this.users)
        this.shared.setUser(this.users);
        console.log(this.users)
  })
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
      this.http.delete(`http://localhost:8080/delUser/${asd}`).subscribe((Response: any)=>{});
      window.location.reload();
    } else {
      console.log('You clicked Cancel. You smart.');
    }
  });
  }

  edit(asd: any=[]){
    console.log(asd);
    let a=[];

    a.push(asd)
    this.shared.setUser(a);
    console.log(a);
  }
}
