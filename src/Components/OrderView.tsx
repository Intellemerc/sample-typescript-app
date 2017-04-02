import * as React from 'react';

import { Order } from '../Resources/Order';
import resourceHoc, * as resHoc from '../Common/resourceHoc';

import OrderItemsView from './OrderItemsView';
import OrderLoader from './OrderLoader';

const OrderView = ({resource, isLoaded, isLoading, getAction}: resHoc.IResourceProps<Order>) => {
        if (isLoading) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <OrderLoader getAction={getAction}/>
                {isLoaded ? 
                    (
                        <div>
                            <h3>Orders: </h3>
                            <div>Id: {resource.id}</div>
                            <div>Description: {resource.description}</div>
                            <div style={{pading: 20, width: 400, margin: 'auto'}}>
                                {resource.items.map((orderItem) => 
                                    <OrderItemsView key={orderItem.id} item={orderItem} />)
                                }
                            </div>
                        </div>
                    )
                    : <h3>Enter an Order Id and click Load Orders</h3>
                }
            </div>
        );
};

export default resourceHoc(Order)(OrderView);