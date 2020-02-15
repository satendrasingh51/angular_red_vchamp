import { Component, OnInit } from '@angular/core';
import { PanApiService } from '../authontication/pan-api.service';

@Component({
  selector: 'app-pan-detail',
  templateUrl: './pan-detail.component.html',
  styleUrls: ['./pan-detail.component.css']
})
export class PanDetailComponent implements OnInit {

  Pan:any = [];
  constructor(private panApiService: PanApiService) {
    this.readPan();
   }

  ngOnInit() {
  }

  readPan(){
    this.panApiService.getPans().subscribe((data)=>{
      this.Pan = data;
    })
  }

  

}
