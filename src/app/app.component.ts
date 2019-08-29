import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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