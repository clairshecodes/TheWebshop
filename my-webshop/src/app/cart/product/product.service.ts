import {Names} from './product.model';

export class ProductService{
    totalAmount = 0;
    private names: Names[] = [
        new Names(1,'Minus', 'This is a blouse made by vanilla', "assets/image/sweatshirt.jpg", 200, 1), new Names(2, 'Ripped shirt', 'As the title says ripped', "assets/image/co-ord.jpg", 300, 1), new Names(3, 'Jacked shirt', 'Made by famous Jack', "assets/image/whole.jpg", 400, 1), new Names(4, 'Cali', 'More like Cali flower', "assets/image/sweatshirt.jpg", 200, 1), new Names(5, 'Hello', 'Makes you want to say Hello to the world', "assets/image/sweatshirt.jpg", 300, 1),
        new Names(6, 'Shirt1', 'Just a shirt', "assets/image/co-ord.jpg", 300, 1), new Names(7, 'Shirt2', 'Just another shirt', "assets/image/whole.jpg", 200, 1)
      ];

      getProduct(){
          return this.names.slice();
      }

      addProduct(product: Names){
        this.product.push(product);

      }
    onUpdateTotal(updatePrice: number, updateQuant: number){
        return this.totalAmount += updatePrice * updateQuant;
      }
}