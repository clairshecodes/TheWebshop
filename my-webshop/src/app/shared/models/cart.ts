import uuid from 'uuid';

export interface ICart {
    id: string;
    items: ICartItem[];
    clientSecret?: string;
    paymentIntentId?: string;
    deliveryMethodId?: number;
    shippingPrice?: number;
}

export interface ICartItem {
    id: number;
    productName: string;
    price: number;
    quantity: number;
    pictureUrl: string;
    brand: string;
    type: string;
}

export class Cart implements ICart {
    id = uuid();
    items: ICartItem[] = [];
}

export interface ICartTotals {
    shipping: number;
    subtotal: number;
    total: number;
}
