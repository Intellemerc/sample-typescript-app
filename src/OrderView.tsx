import * as React from 'react';

import Order from './Resources/Order';
import resourceHoc from './Common/resourceHoc';

const OrderView = ({Order, loaded, isLoading}: {Order: Order, loaded: boolean, isLoading: boolean}) => {
    if (!loaded) {
        return <button>Load Orders</button>;
    }
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h3>Orders: </h3>
            <div>Id: {Order.id}</div>
            <div>Description: {Order.description}</div>
            <div>Items: {Order.items}</div>
            {isLoading ? 'true' : 'false'}
        </div>
    );
};

export default resourceHoc(Order)(OrderView);