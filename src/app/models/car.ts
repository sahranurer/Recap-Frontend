export interface Car{
    carId:number,
    carName:string,
    brandId:number,
    colorId:number,
    modelYear:string,
    dailyPrice:string,
    description:string
    
}


export interface CarDetail extends Car{
    brandName:string,
    colorName:string,
}