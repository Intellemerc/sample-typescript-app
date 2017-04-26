import * as React from 'react';

export class Foo {
    a: string;
    b: string;
}
interface Props {
    stringField?: string;
    numberField?: number;
    booleanField?: boolean;
    objField?: Foo;
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