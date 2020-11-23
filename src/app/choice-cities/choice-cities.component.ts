import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CitiesGuys } from './city.interface';
import { DistanceService } from './distance.service';
import { DistanceComponent } from './distance/distance.component';

@Component({
  selector: 'app-choice-cities',
  templateUrl: './choice-cities.component.html',
  styleUrls: ['./choice-cities.component.scss']
})
export class ChoiceCitiesComponent implements OnInit {

  originCity: string = "";
  destinationCity: string = "";
  citiesGuys: CitiesGuys = new CitiesGuys('', '');

  constructor(public dialog: MatDialog, private DistanceService: DistanceService) { }

  ngOnInit(): void {

  }

  openResulte(): void {
    let distance;
    if (this.destinationCity == "" || this.originCity == "") {
      alert("חובה למלא את 2 השדות")
    }
    else {
      this.citiesGuys.destinationCity = this.destinationCity;
      this.citiesGuys.originCity = this.originCity;
      this.DistanceService.getDistance(this.citiesGuys).subscribe(x => {
        distance = JSON.stringify(x);
        distance = distance.toString().replace('\"', '');
        distance = distance.toString().replace('\"', '');
        if (distance == "שם העיר אינו תקין") {
          alert(distance)
          this.originCity = "";
          this.destinationCity = "";
        }
        else
          this.seeDistance(distance)
      });
    }
  }

  seeDistance(distance: string) {
    const dialogRef = this.dialog.open(DistanceComponent, {
      width: '100%',
      height: '100%',
      data: { distance: distance }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.originCity = "";
      this.destinationCity = "";
      console.log('The dialog was closed');
    });
  }

}
