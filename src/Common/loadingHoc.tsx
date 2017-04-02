import * as React from 'react';
import './loading.css';

interface ILoadingProps {
	isLoading: boolean;
}
export default (Component: any) => ({ isLoading, ...rest }: ILoadingProps) => {
	if (isLoading) {
		return (
			<div>
				<div className="spinner">
					<div className="double-bounce1" />
					<div className="double-bounce2" />
				</div>
				<div className="loadingDiv">
					<Component  {...rest} />
				</div>
			</div>
		);
	} else {
		return <Component {...rest} />;
	}
};
