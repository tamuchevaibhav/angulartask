import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PagingComponent} from './components/paging-component/pagination.component';
import {PagingService} from './service/paging-service.service';

@NgModule({
  declarations: [
    AppComponent,
    PagingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ PagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
