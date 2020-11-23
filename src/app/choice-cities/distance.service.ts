import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CitiesGuys } from '../city.interface';
import { DialogCity, Populary } from './city.interface';

@Injectable()
export class DistanceService {

  data:DialogCity=new DialogCity('');

  constructor(private http:HttpClient) { }

  private url_city = "http://localhost:5000";
  getDistance(citiesGuys:CitiesGuys) {
      return this.http.post(this.url_city,citiesGuys);
  }

  private populary= "http://localhost:8200";
  getPouplary():Observable<Populary[]>{
    return this.http.get<Populary[]>(this.populary);
  }

}
