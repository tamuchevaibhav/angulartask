import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {DataService} from './service/http.service';


interface Course {
  description: string;
  courseListIcon:string;
  iconUrl:string;
  longDescription:string;
  url:string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 

  list: any;

  constructor(private http:HttpClient,private _service:DataService){

  }

  ngOnInit(): void {
      this.http.get('https://api.github.com/search/users?q=Varun').pipe(map(data => {
        let liss:any = data ? data : []
        this.list  = liss.items;
      })).subscribe(result => {
    });
  }

  pagination = {
    maxPages: 5,
    current: 1,
    postsPerPage: 10,
    itemsPerPage: 10
  };

  myChanges(event) {
    this.pagination.maxPages = event.maxPages;
    this.pagination.current = event.current;
    this.pagination.postsPerPage = event.postsPerPage;
    this.pagination.itemsPerPage = event.itemsPerPage;
  }
}