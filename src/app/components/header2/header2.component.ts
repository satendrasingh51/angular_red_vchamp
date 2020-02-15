import { Component, OnInit } from '@angular/core';
import { RegAuthService } from '../authontication/reg-auth.service';
@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {

  constructor(private _regAuthService: RegAuthService ) { }

  ngOnInit() {
  }
}
//logoutUser