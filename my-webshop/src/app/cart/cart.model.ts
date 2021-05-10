export interface IBasket {
    items: IBasketItem[];
    clientSecret?: string;
    paymentIntentId?: string;
    deliveryMethodId?: number;
    shippingPrice?: number;
}

export interface IBasketItem {
    id: number;
    productName: string;
    price: number;
    quantity: number;
    pictureUrl: string;
    brand: string;
    type: string;
}
export class Basket implements IBasket {
    items: IBasketItem[] = [];
}
export interface IBasketTotals {
    //shipping: number;
    subtotal: number;
    //total: number;
}