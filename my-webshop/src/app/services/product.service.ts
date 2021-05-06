import {Product} from 'src/app/models/product.model';

export class ProductService{
    private products: Product[] = [
        new Product(1,'Minus', 'This is a blouse made by vanilla', "assets/image/sweatshirt.jpg", 200, 1), new Product(2, 'Ripped shirt', 'As the title says ripped', "assets/image/co-ord.jpg", 300, 1), new Product(3, 'Jacked shirt', 'Made by famous Jack', "assets/image/whole.jpg", 400, 1), new Product(4, 'Cali', 'More like Cali flower', "assets/image/sweatshirt.jpg", 200, 1), new Product(5, 'Hello', 'Makes you want to say Hello to the world', "assets/image/sweatshirt.jpg", 300, 1),
        new Product(6, 'Shirt1', 'Just a shirt', "assets/image/co-ord.jpg", 300, 1), new Product(7, 'Shirt2', 'Just another shirt', "assets/image/whole.jpg", 200, 1)
      ];

      getProduct(){
          return this.products.slice();
      }
}