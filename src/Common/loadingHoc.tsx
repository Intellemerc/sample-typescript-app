import * as React from 'react';
import './loading.css';

interface ILoadingProps {
	isLoading: boolean;
}
export default (Component: any) => (props: ILoadingProps) => {
	const comp = <Component  {...props} />;
	if (props.isLoading) {
		return (
			<div>
				<div className="spinner">
					<div className="double-bounce1" />
					<div className="double-bounce2" />
				</div>
				<div className="loadingDiv">
					{comp}
				</div>
			</div>
		);
	} else {
		return comp;
	}
};
