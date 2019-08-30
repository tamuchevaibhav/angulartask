import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PagingComponent} from './components/paging-component/pagination.component';
import {PagingService} from './service/paging-service.service';
import { HttpClientModule }    from '@angular/common/http';
import {DataService} from './service/http.service';


@NgModule({
  declarations: [
    AppComponent,
    PagingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ PagingService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
