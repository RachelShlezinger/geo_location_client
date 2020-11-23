import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogCity, Populary } from '../city.interface';
import { DistanceService } from '../distance.service';

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.scss']
})
export class DistanceComponent implements OnInit {

  resPopular: Array<Populary> = [];
  resMaxPopular = new Populary('', '', 0);

  constructor(
    public dialogRef: MatDialogRef<DistanceComponent>, @Inject(MAT_DIALOG_DATA)
     public data: DialogCity,
    public DistanceService: DistanceService) { }

  ngOnInit(): void {
    this.DistanceService.getPouplary().subscribe(x => {
      for (let i = 0; i < x.length; i++) {
        let resPopularTemporary = new Populary('', '', 0);
        resPopularTemporary.origin_city = x[i].origin_city;
        resPopularTemporary.destination_city = x[i].destination_city;
        resPopularTemporary.num_searches = x[i].num_searches;
        this.resPopular.push(resPopularTemporary)
      }

      let max = Math.max.apply(Math, this.resPopular.map(function (o) { return o.num_searches; }))
      let maxSearch = this.resPopular.find(x => x.num_searches == max);
      if (maxSearch != undefined) {
        this.resMaxPopular.num_searches = maxSearch.num_searches;
        this.resMaxPopular.destination_city = maxSearch.destination_city;
        this.resMaxPopular.origin_city = maxSearch.origin_city;
      }
    });
  }

  endSearche(): void {
    this.dialogRef.close();
  }

}
