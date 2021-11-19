import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { HiddenComponent } from './hidden/hidden.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { CreatebookComponent } from './createbook/createbook.component';
import { CreatebookissueComponent } from './createbookissue/createbookissue.component';
import { UserrecordComponent } from './userrecord/userrecord.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { CreatereturnbookComponent } from './createreturnbook/createreturnbook.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { SearchuserComponent } from './searchuser/searchuser.component';
import { SearchbookComponent } from './searchbook/searchbook.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
         HomeComponent,
         AboutusComponent,
         BooklistComponent,
         BookdetailsComponent,
         HiddenComponent,
         ContactComponent,
         ServicesComponent,
         CreatebookComponent,
         CreatebookissueComponent,
         UserrecordComponent,
         CreateuserComponent,
         UserlistComponent,
         CreatereturnbookComponent,
         UpdateuserComponent,
         SearchuserComponent,
         SearchbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule 


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
