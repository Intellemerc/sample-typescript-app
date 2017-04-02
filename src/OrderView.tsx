import * as React from 'react';

import Order from './Resources/Order';
import resourceHoc, * as resHoc from './Common/resourceHoc';

interface IOrderIdFieldProps {
    getAction: any;
};
const  OrderIdField = ({getAction}: IOrderIdFieldProps) => {
    let orderIdInput: HTMLInputElement;     
    return (
            <div>
                <input label="OrderId" ref={(input) => orderIdInput = input as HTMLInputElement} />
                <button onClick={() => getAction(orderIdInput.value)}>
                    Load Orders
                </button>
            </div>
        );
};

const OrderView = ({resource, isLoaded, isLoading, getAction}: resHoc.IResourceProps<Order>) => {
        if (isLoading) {
            return <div>Loading...</div>;
        }
        return (
            <div>
                <OrderIdField getAction={getAction}/>
                {isLoaded ? 
                    (
                        <div>
                            <h3>Orders: </h3>
                            <div>Id: {resource.id}</div>
                            <div>Description: {resource.description}</div>
                            <div>Items: {resource.items}</div>
                        </div>
                    )
                    : <h3>Nothing Loaded</h3>
                }
            </div>
        );
};

export default resourceHoc(Order)(OrderView);