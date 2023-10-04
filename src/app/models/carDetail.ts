export interface CarDetail {
  id:number;
  brandId:number;
  colorId:number;
  brandName:string;
  colorName:string;
  modelYear: Date;
  dailyPrice:number;
  description:string;
  carImagesUrl: Array<string>
}
