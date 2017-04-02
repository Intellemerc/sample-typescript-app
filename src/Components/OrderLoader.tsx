import * as React from 'react';
import * as resActions from '../Common/resourceActions';

export default ({getAction}: {getAction: resActions.resourceFnById}) => {
    let orderIdInput: HTMLInputElement;     
    return (
            <div>
                <input 
                    placeholder="Order Id" 
                    label="OrderId" 
                    ref={(input) => orderIdInput = input as HTMLInputElement} 
                />
                <button onClick={() => getAction(orderIdInput.value)}>
                    Load Orders
                </button>
            </div>
        );
};