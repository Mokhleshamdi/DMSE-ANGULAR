import { Component, OnInit } from '@angular/core';
import {Http, HttpModule ,Response} from '@angular/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  private posts: any[];
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (response: Response)=>{
       // console.log(response.json());
        this.posts=response.json();
      },
    (err:Error)=>{
        console.log('ERROR');
    },
    ()=>{
        console.log('complete transmission');
    }
    )
  }

}
