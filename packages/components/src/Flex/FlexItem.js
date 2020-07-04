import { BaseView } from '@g2/css';
import { connect } from '@g2/provider';
import React from 'react';

function FlexItem({ display, isBlock = false, ...props }) {
	return (
		<BaseView
			{...props}
			__sx={{
				display: isBlock ? 'block' : display,
				flex: isBlock ? 1 : null,
				maxWidth: '100%',
				minWidth: 0,
			}}
		/>
	);
}

export default connect(FlexItem);