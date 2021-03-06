import { contextConnect, useContextSystem } from '@wp-g2/context';
import { css, cx } from '@wp-g2/styles';
import { getValidChildren } from '@wp-g2/utils';
import React from 'react';

import { AspectRatioResizer, AspectRatioView } from './AspectRatio.styles';
import * as styles from './AspectRatio.styles';

function AspectRatio(props, forwardedRef) {
	const { children, ratio = 1, width, ...otherProps } = useContextSystem(
		props,
		'AspectRatio',
	);

	const validChildren = getValidChildren(children);
	const [child] = validChildren;

	const clonedChild =
		child &&
		React.cloneElement(child, {
			className: cx(styles.content, child.className),
		});

	const __css = cx(css({ maxWidth: width }));
	const __cssResizer = cx(
		css({
			paddingBottom: `${(1 / ratio) * 100}%`,
		}),
	);

	return (
		<AspectRatioView {...otherProps} cx={__css} ref={forwardedRef}>
			{clonedChild}
			<AspectRatioResizer aria-hidden cx={__cssResizer} />
		</AspectRatioView>
	);
}

export default contextConnect(AspectRatio, 'AspectRatio');
