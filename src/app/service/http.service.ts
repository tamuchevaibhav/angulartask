import {HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {
    public http:HttpClient;
    public static PATH:string = 'https://api.github.com/search/users?q=Varun'    

    constructor(http:HttpClient) {
        this.http=http;
    }

    getHalls() {
    // ########### No map
         return this.http.get(DataService.PATH).pipe(map((res)=> {
            console.log(res)           
            return res;
          }));
          
    }
}