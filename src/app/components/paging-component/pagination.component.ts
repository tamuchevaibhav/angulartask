import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Page } from './pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PagingComponent implements OnInit {

  @Input() maxPages: number;
  @Input() current: number;
  @Input() postsPerPage: number[];
  @Input() itemsPerPage: number;

  @Output() changePage = new EventEmitter();

  pages: any[] = [];
  pageModel: Page = {
    page: this.current,
    itemsPerPage: this.itemsPerPage
  };

  constructor() {
    console.log(this.maxPages)
   }

  ngOnInit() {
    if (this.maxPages) {
      this.createPages();
    }
  }

  setPage(page: number, perPage: number) {
    this.pageModel.page = page;
    this.pageModel.itemsPerPage = perPage;
    this.changePage.emit(this.pageModel);
  }

  createPages() {
    for(let i=1; i <= this.maxPages; i++) {
      this.pages.push(i);
    }
  }

}