import { contextConnect, useContextSystem } from '@wp-g2/context';
import { css, cx } from '@wp-g2/styles';
import React from 'react';

import { View } from '../View';
import * as styles from './Icon.styles';

function Icon(props, forwardedRef) {
	const {
		children,
		color,
		icon,
		inline,
		size = 20,
		...otherProps
	} = useContextSystem(props, 'Icon');

	if (!icon) return null;
	const sx = {};

	sx.color = css({
		color,
	});

	sx.size = css({
		height: size,
		width: size,
	});

	const IconComponent = React.cloneElement(icon, {
		height: size,
		ref: forwardedRef,
		size,
		width: size,
	});

	const __css = cx(
		styles.Wrapper,
		sx.color,
		sx.size,
		inline && styles.inline,
	);

	return (
		<View {...otherProps} cx={__css}>
			{IconComponent}
		</View>
	);
}

export default contextConnect(Icon, 'Icon');
