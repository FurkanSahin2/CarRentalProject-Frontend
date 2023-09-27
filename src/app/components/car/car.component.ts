import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { HttpClient } from '@angular/common/http';
import { CarResponseModel } from 'src/app/models/carResponseModel';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  apiUrl = 'https://localhost:44323/api/cars/getall';
  constructor(private HttpClient: HttpClient) {}

  ngOnInit(): void {
    console.log('Init çalıştı');
  }

  getCars() {
    this.HttpClient.get<CarResponseModel>(this.apiUrl).subscribe(
      (response) => {
        this.cars = response.data
      }
    );
  }
}
