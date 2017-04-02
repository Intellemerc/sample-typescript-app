import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import BaseModel from '../Resources/BaseModel';
import { IAppState } from '../rootReducer';
import resourceActions, * as ResActions from './resourceActions';
import * as ResReducer from '../Common/resourceReducer';

export interface IResourceProps<T extends BaseModel> 
		extends ResReducer.IResourceEntry<T>, ResActions.IResourceActionList {

}

export default <T extends BaseModel>(ctor: { new (): T }) => (Component: any) => {
	const mapDispatchToProps = (dispatch: Dispatch<T>): ResActions.IResourceActionList => {
		const actions = resourceActions(ctor).actions;
		return bindActionCreators(
			{
				getAction: actions.getAction,
				putAction: actions.putAction,
				postAction: actions.postAction,
				deleteAction: actions.deleteAction
			},
			dispatch
		);
	};

	const mapStateToProps = (state: IAppState): ResReducer.IResourceEntry<T> => {
		const resource = state[ctor.name];

		return {
			resource: resource.resource,
			isLoaded: resource.isLoaded,
			isLoading: resource.isLoading
		};

	};

	return connect(
		mapStateToProps,
		mapDispatchToProps
	)(Component);
};