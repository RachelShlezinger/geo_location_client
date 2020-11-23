export class DialogCity {
  constructor(distance: string) {
    this.distance = distance;
  }
  distance: string;
}

export class CitiesGuys {
  constructor(originCity: string,
      destinationCity: string) {
      this.destinationCity = destinationCity;
      this.originCity = originCity;
  }
  originCity: string;
  destinationCity: string;
}

export class Populary {
  constructor(origin_city: string, destination_city: string, num_searches: number) {
    this.origin_city = origin_city;
    this.destination_city = destination_city;
    this.num_searches = num_searches;
  }
  origin_city: string;
  destination_city: string;
  num_searches: number;
}

