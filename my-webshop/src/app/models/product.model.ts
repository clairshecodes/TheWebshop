import {Category} from './category.model';
export class Product{
    id:String;
    name:String
    description:String
    richDescription:String
    image:String
    images:String[]//arry of string
    brand :String
    price:Number
    category:Category // category collection
    countInStock:Number
    rating:Number
    isFeatured:Boolean
    numReviews:Number
    dateCreated:Date
}