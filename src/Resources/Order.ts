import BaseModel from './BaseModel';

export class OrderItems extends BaseModel {
    // id: number; // inherited
    price: number;
    quantity: number;
}

export default class Order extends BaseModel {
    // id: number; // inherited
    description: string;
    items: OrderItems[];
}