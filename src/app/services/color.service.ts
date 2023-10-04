import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColorResponseModel } from '../models/colorResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  apiUrl = 'https://localhost:44323/api/colors/getall';

  constructor(private HttpClient: HttpClient) {}

  getColors(): Observable<ColorResponseModel> {
    return this.HttpClient.get<ColorResponseModel>(this.apiUrl);
  }
}
