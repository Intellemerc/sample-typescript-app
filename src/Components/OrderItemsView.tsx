import * as React from 'react';
import { OrderItem } from '../Resources/Order';

interface IOrderItemProps {
    item: OrderItem;
};
const orderItemStyle = {
    padding: 10,
    border: '1px solid #999'
};
export default ({item}: IOrderItemProps) => (
    <div style={orderItemStyle}>
        <span>Id: {item.id}</span>,&nbsp;
        <span>Price: {item.price}</span>,&nbsp;
        <span>Quantity: {item.quantity}</span>,&nbsp;
        <span style={{fontWeight: 'bold'}}>Total: {item.price * item.quantity}</span>
    </div>
);