import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl:string = "https://localhost:44351/api/";
  constructor(private httpClient:HttpClient) { }

getCars():Observable<listResponseModel<Car>>{
  return this.httpClient.get<listResponseModel<Car>>(this.apiUrl + 'cars/getall');
}


}
