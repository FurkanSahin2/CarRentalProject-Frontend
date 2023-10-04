import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarResponseModel } from '../models/carResponseModel';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { CarDetailResponseModel } from '../models/carDetailResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl = 'https://localhost:44323/api/cars/getall';

  constructor(private HttpClient: HttpClient) {}

  getCars(): Observable<CarResponseModel> {
    return this.HttpClient.get<CarResponseModel>(this.apiUrl);
  }

  getDetails(): Observable<CarDetailResponseModel> {
    return this.HttpClient.get<CarDetailResponseModel>(this.apiUrl);
  }
}
