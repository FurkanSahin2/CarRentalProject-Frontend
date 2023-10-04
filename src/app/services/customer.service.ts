import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerResponseModel } from '../models/customerResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = 'https://localhost:44323/api/customers/getall';

  constructor(private HttpClient: HttpClient) {}

  getCustomers(): Observable<CustomerResponseModel> {
    return this.HttpClient.get<CustomerResponseModel>(this.apiUrl);
  }
}
