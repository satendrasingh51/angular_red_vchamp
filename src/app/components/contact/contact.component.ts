import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  
contact = ['-SELECT-','ANDAMAN AND NICOBAR ISLANDS','ANDHRA PRADESH','ARUNACHAL PRADESH','ASSAM','BIHAR','DADRA AND NAGAR HAVELI',
'DAMAN AND DIU','DELHI','GOA','GUJARAT','HARYANA','HIMACHAL PRADESH','JAMMU AND KASHMIR','KARNATAKA','KERALA','LAKHSWADEEP',
'MADHYA PRADESH','MAHARASHTRA','MANIPUR','MEGHALAYA','MIZORAM','NAGALAND','ORISSA','PONDICHERRY','PUNJAB','RAJASTHAN',
'SIKKIM','TAMILNADU','TRIPURA','UTTAR PRADESH','WEST BENGAL','CHHATISHGARH','UTTRAKHAND','JHARKHAND','TELANGANA','ADDRESS OF DEFENCE EMPLOYEES',
'FOREIGN ADDRESS'];

  ngOnInit() {
  }

}
