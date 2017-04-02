import BaseModel from './BaseModel';

export class OrderItem extends BaseModel {
    // id: number; // inherited
    price: number;
    quantity: number;
}

export class Order extends BaseModel {
    // id: number; // inherited
    description: string;
    items: OrderItem[];
}