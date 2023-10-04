import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RentalResponseModel } from '../models/rentalResponseModel';
import { Observable } from 'rxjs';
import { RentalDetailResponseModel } from '../models/rentalDetailResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44323/api/rentals/getall';

  constructor(private HttpClient: HttpClient) {}

  getRentals(): Observable<RentalResponseModel> {
    return this.HttpClient.get<RentalResponseModel>(this.apiUrl);
  }

  getDetails(): Observable<RentalDetailResponseModel> {
    return this.HttpClient.get<RentalDetailResponseModel>(this.apiUrl);
  }
}
