import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  title!: string;
  desc!: string;
  venue!: string;
  date!: string;
  time!: string;
  error: boolean = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  postData() {
    console.log(this.title)
    console.log(this.desc)
    console.log(this.venue)

    if (this.venue == null || this.venue == '' || this.desc == null || this.desc == '' || this.title == null || this.title == '') {
      this.error = true;
    }
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post<any>('http://localhost:8080/addEvent', JSON.stringify({ "title": this.title, "desc": this.desc, "venue": this.venue, "date": this.date}),
      httpOptions).subscribe((req: any) => {
        console.log(req)
          if(req.affectedRows>0){
            alert("Event Successfully Added!");
            window.location.reload();
          }
      });

  }
}
