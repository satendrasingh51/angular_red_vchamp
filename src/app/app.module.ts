import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { RegAuthService } from './components/authontication/reg-auth.service';
import { AuthGuard } from './components/authontication/auth.guard';
import { TokenInterceptorService } from './components/authontication/token-interceptor.service';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Header2Component } from './components/header2/header2.component';
import { NewpanComponent } from './components/newpan/newpan.component';
import { ServiceComponent } from './components/service/service.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PageNoteFoundComponent } from './components/page-note-found/page-note-found.component';
import { EventsComponent } from './components/events/events.component';
import { SpecialEventsComponent } from './components/special-events/special-events.component';
import { PanApiService } from './components/authontication/pan-api.service';
import { PanDetailComponent } from './components/pan-detail/pan-detail.component';
import { EditPanComponent } from './components/edit-pan/edit-pan.component';

@NgModule({
  declarations: [ 
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AboutusComponent,
    ContactComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    Header2Component,
    NewpanComponent,
    ServiceComponent,
    UserProfileComponent,
    WelcomeComponent,
    PageNoteFoundComponent,
    EventsComponent,
    SpecialEventsComponent,
    PanDetailComponent,
    EditPanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [RegAuthService, AuthGuard, PanApiService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }