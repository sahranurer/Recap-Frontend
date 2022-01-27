import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { listResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  apiUrl: string = 'https://localhost:44351/api/';
  constructor(private httpClient: HttpClient) {}

  getBrands(): Observable<listResponseModel<Brand>> {
    return this.httpClient.get<listResponseModel<Brand>>(
      this.apiUrl + 'brands/getall'
    );
  }
}
