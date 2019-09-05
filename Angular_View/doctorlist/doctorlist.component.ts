import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
  HttpParams
} from "@angular/common/http";

@Component({
  selector: 'doctor-list',
  styleUrls: ['doctorlist.component.css'],
  templateUrl: 'doctorlist.component.html',
})
export class DoctorlistComponent implements OnInit {
  dataSource;
  displayedColumns = [];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  columnNames = [{
    id: "url",
    value: "IMAGE"
  },
  {
    id: "uploadedOn",
    value: "Weight"
  },
  {
    id: "buttons",
    value: "Action"
  }
  ];
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.createTable();
    // this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  createTable() {
    this.http.get('http://localhost:8081/randomuser').subscribe(res => {
      var resData = res;
      let tableArr: Element[] = resData.data;
      this.dataSource = new MatTableDataSource(tableArr);
      this.dataSource.sort = this.sort;
    });

  }
  urls = [];
  files;
  @ViewChild('myInput')
  myInputVariable: ElementRef;

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      var list = 0
      for (let i = 0; i < filesAmount; i++) {
        debugger;
        if (event.target.files[i].type == "image/jpeg" || event.target.files[i].type == "image/jpg" || event.target.files[i].type == "image/png") {
          var reader = new FileReader();
          reader.onload = (event: any) => {
            this.urls.push(event.target.result);
          }
          reader.readAsDataURL(event.target.files[i]);
        } else {
          list++;
        }
      }
      if (list > 0) {
        alert(`${list} Invalid Files Upload!`)
      }
    }
    this.myInputVariable.nativeElement.value = "";
  }
  onDeleteFile(index) {
    this.urls.splice(index, 1);
  }

  onDelete(index) {
    let url = `http://localhost:8081/deleteimage`;
    this.http
      .post(url, { recordID: index })
      .subscribe(res => {
        this.createTable();
      });
  }

  onuplodImage() {
    let url = `http://localhost:8081/randomuser`;
    this.http
      .post(url, { url: this.urls })
      .subscribe(res => {
        this.createTable();
        this.urls = [];
      });
  }
}



export interface Element {
  url: string,
  uploadedOn: string,
  _id: string
}

export interface ElementR {
  data: [],
  status: string
}
