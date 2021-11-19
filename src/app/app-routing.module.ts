import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';
import { BooklistComponent } from './booklist/booklist.component';
import { ContactComponent } from './contact/contact.component';
import { CreatebookComponent } from './createbook/createbook.component';
import { CreatebookissueComponent } from './createbookissue/createbookissue.component';
import { CreatereturnbookComponent } from './createreturnbook/createreturnbook.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { HiddenComponent } from './hidden/hidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchbookComponent } from './searchbook/searchbook.component';
import { SearchuserComponent } from './searchuser/searchuser.component';
import { ServicesComponent } from './services/services.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserrecordComponent } from './userrecord/userrecord.component';

  const routes: Routes = [
    {path: '',component: LoginComponent},
    {path: 'userrecord',component: UserrecordComponent},
    {path: 'createissue',component: CreatebookissueComponent},
    {path: 'createuser',component: CreateuserComponent},
    {path: 'searchuser/:name',component:SearchuserComponent},
    {path: 'searchbook/:title',component:SearchbookComponent},
    {path: 'returnbook',component: CreatereturnbookComponent},
    {path: 'updateuser/:userid',component: UpdateuserComponent},
    {path: 'userlist',component: UserlistComponent},
    {path: 'home',component: HomeComponent},
    {path: 'aboutus',component: AboutusComponent},
    {path: 'booklist',component: BooklistComponent},
    {path: 'booknamelist',component: BookdetailsComponent},
    {path: 'hide',component: HiddenComponent},
    {path: 'contact',component: ContactComponent},
    {path: 'services',component: ServicesComponent},
    {path: 'createBook', component: CreatebookComponent}




   
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
