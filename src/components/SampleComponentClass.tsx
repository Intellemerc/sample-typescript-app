import * as React from 'react';

interface Props {
     stringField?: string;
    // numberField: number;
    // booleanField: boolean;
}

interface State {

}
export default class SampleClassComponent extends React.Component<Props, State> {
    constructor() {
        super();
    }
    render() {
        return <div>Sample Class Component</div>;
    }
}