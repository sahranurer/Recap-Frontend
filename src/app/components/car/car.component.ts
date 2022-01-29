import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[]=[];
  dataLoaded=false;
  currentCar:Car;
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }
      else if(params["carId"]){
        this.getCarDetails(params["carId"])
      }
      else{
        this.getCars();
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response=>{
          this.cars = response.data;
          this.dataLoaded=true;

    })
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
          this.cars = response.data;
          this.dataLoaded=true;

    })
  }

  setCurrentCar(car:Car){
      this.currentCar = car
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars = response.data;
      this.dataLoaded=true;
    })
  }

  getCarDetails(carId:number){
    this.carService.getCarDetails(carId).subscribe(response=>{
      this.cars = response.data;
      this.dataLoaded=true;
    })
  }

  getCurrentCarClass(car:Car){
    if(car== this.currentCar){
          return "table-danger"
    }
    else{
      return "table-info"
    }
  }
 getAllCurrentCarClass(){
   if(!this.currentCar){
    return "table-danger"
   }else{
    return "table-info"
   }
 }

}
