import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import BaseModel from '../Resources/BaseModel';
import {IAppState} from '../rootReducer';

export default <T extends BaseModel>(ctor: { new (): T }) => (Component: any) => {
	const mapDispatchToProps = (dispatch: Dispatch<T>) => {
		return bindActionCreators(
            {
                // get: getResource(ctor.name)
            }, 
            dispatch
        );
	};

	const mapStateToProps = (state: IAppState) => {
		const resource = state[ctor.name];
		return {
			[ctor.name]: resource && resource.items,
			loaded: resource.loaded,
			isLoading: resource.isLoading 
		};

	};

	return connect(
			mapStateToProps,
			mapDispatchToProps
		)(Component);
};