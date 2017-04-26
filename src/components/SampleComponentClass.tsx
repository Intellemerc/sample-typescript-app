import TodoItemModel from '../models/todoItemModel';
import * as React from 'react';

interface Props {
    stringField?: string;
    numberField?: number;
    booleanField?: boolean;
    objField?: TodoItemModel;
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