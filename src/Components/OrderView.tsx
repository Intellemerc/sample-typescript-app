import * as React from 'react';

import { Order } from '../Resources/Order';
import resourceHoc, * as resHoc from '../Common/resourceHoc';

import OrderItemsView from './OrderItemsView';
import OrderLoader from './OrderLoader';

const OrderView = ({resourceObj, isLoaded, isLoading, getAction, className}: resHoc.IResourceProps<Order>) => {
        return (
            <div>
                <OrderLoader getAction={getAction} isDisabled={isLoading}/>
                {isLoaded ? 
                    (
                        <div>
                            <h3>Orders: </h3>
                            <div>Id: {resourceObj.id}</div>
                            <div>Description: {resourceObj.description}</div>
                            <div style={{pading: 20, width: 400, margin: 'auto'}}>
                                {resourceObj.items.map((orderItem) => 
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