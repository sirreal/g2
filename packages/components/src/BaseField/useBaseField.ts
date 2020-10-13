import { useContextSystem } from '@wp-g2/context';
import { cx } from '@wp-g2/styles';
import { useMemo } from 'react';

import { useControlGroupContext } from '../ControlGroup';
import { useFlex } from '../Flex';
import * as styles from './BaseField.styles';

export function useBaseField(props) {
	const {
		className,
		isClickable = false,
		isFocused = false,
		isSubtle = false,
		...otherProps
	} = useContextSystem(props, 'BaseField');

	const { styles: controlGroupStyles } = useControlGroupContext();

	const classes = useMemo(
		() =>
			cx(
				styles.BaseField,
				controlGroupStyles,
				isClickable && styles.clickable,
				isFocused && styles.focus,
				isSubtle && styles.subtle,
				className,
			),
		[className, controlGroupStyles, isClickable, isFocused, isSubtle],
	);

	const flexProps = useFlex(
		Object.assign(otherProps, { className: classes }),
	);

	return flexProps;
}
