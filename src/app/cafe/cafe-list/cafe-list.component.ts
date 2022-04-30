import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../services/cafe.service';
@Component({
  selector: 'app-cafe-detail',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {
  cafes: Array<Cafe> = [];
  Cafeblend: Array<Cafe> = [];
  CafeOrigen: Array<Cafe> = [];
  constructor(
    private cafeService: CafeService) { }

  getCafes(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;
    });
  }

  ngOnInit(): void {
    this.getCafes();
    this.FilterCafes();
  }

  FilterCafes(): void{
    this.cafeService.getCafes().subscribe((searchcafes) =>{
      for (let i = 0; i < searchcafes.length; i++) {
        if(searchcafes[i].tipo == 'Blend'){
         this.Cafeblend.push(searchcafes[i]);
        } else{
          if(searchcafes[i].tipo == 'Café de Origen'){
            this.CafeOrigen.push(searchcafes[i]);
          }
        }
      }
    });
  }

}
