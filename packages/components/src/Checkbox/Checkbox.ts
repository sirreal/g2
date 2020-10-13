import { contextConnect, useContextSystem } from '@wp-g2/context';
import React from 'react';

import { ControlLabel } from '../ControlLabel';
import { FormGroup } from '../FormGroup';
import CheckboxElement from './CheckboxElement';

function Checkbox(props, forwardedRef) {
	const {
		gap,
		label,
		templateColumns = 'auto 1fr',
		...otherProps
	} = useContextSystem(props, 'Checkbox');

	if (!label) return <CheckboxElement {...otherProps} ref={forwardedRef} />;

	return (
		<FormGroup gap={gap} isInline templateColumns={templateColumns}>
			<CheckboxElement {...otherProps} ref={forwardedRef} />
			<ControlLabel>{label}</ControlLabel>
		</FormGroup>
	);
}

export default contextConnect(Checkbox, 'Checkbox');
