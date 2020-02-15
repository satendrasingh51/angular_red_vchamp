import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './components/authontication/auth.guard';
import { NewpanComponent } from './components/newpan/newpan.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ServiceComponent } from './components/service/service.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNoteFoundComponent } from './components/page-note-found/page-note-found.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { EventsComponent } from './components/events/events.component';
import { SpecialEventsComponent } from './components/special-events/special-events.component';
import { PanDetailComponent } from './components/pan-detail/pan-detail.component';
import { EditPanComponent } from './components/edit-pan/edit-pan.component';


const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full'},
  { path: 'register', component: RegisterComponent},
  { path: 'events', component: EventsComponent},
  { path: 'special', component: SpecialEventsComponent, canActivate:[AuthGuard]},
  { path: 'home', component:HomeComponent},
  { path: 'login', component: LoginComponent},
  {path: 'newpan', component: NewpanComponent, canActivate: [AuthGuard]},
  { path: 'userProfile', component: UserProfileComponent,canActivate: [AuthGuard]},
  {path: 'about', component: AboutusComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard]},
  { path: 'panDetail', component: PanDetailComponent, canActivate: [AuthGuard]},
  { path: 'editPan/:id', component: EditPanComponent, canActivate: [AuthGuard]},
  { path: '**', component: PageNoteFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
