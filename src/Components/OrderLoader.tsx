import * as React from 'react';
import * as resActions from '../Common/resourceActions';

export default ({getAction, isDisabled}: {getAction: resActions.resourceFnById, isDisabled: boolean}) => {
    let orderIdInput: HTMLInputElement;     
    return (
            <div>
                <input 
                    placeholder="Order Id" 
                    label="OrderId" 
                    ref={(input) => orderIdInput = input as HTMLInputElement} 
                    disabled={isDisabled}
                />
                <button 
                    onClick={() => getAction(orderIdInput.value)}
                    disabled={isDisabled}
                >
                    Load Orders
                </button>
            </div>
        );
};