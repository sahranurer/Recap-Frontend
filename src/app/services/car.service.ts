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
  let newPath = this.apiUrl + 'cars/getall';
  return this.httpClient.get<listResponseModel<Car>>(newPath);
}

getCarsByBrand(brandId:number):Observable<listResponseModel<Car>>{
  let newPath = this.apiUrl + 'cars/getcarsbybrandid?id=' + brandId;
  return this.httpClient.get<listResponseModel<Car>>(newPath );
}

getCarsByColor(colorId:number):Observable<listResponseModel<Car>>{
  let newPath = this.apiUrl + 'cars/getcarsbycolorid?id=' + colorId;
  return this.httpClient.get<listResponseModel<Car>>(newPath);
}

 getCarDetails(carId:number):Observable<listResponseModel<Car>>{
   let newPath = this.apiUrl + 'cars/getcardetails?id=' + carId;
   return this.httpClient.get<listResponseModel<Car>>(newPath);
 }

}
