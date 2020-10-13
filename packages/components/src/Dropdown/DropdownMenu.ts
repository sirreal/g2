import { contextConnect, useContextSystem } from '@wp-g2/context';
import { css, cx } from '@wp-g2/styles';
import React from 'react';

import { Card } from '../Card';
import { Menu } from '../Menu';
import { Scrollable } from '../Scrollable';
import { useDropdownContext } from './Dropdown.Context';
import * as styles from './Dropdown.styles';

function DropdownMenu(props, forwardedRef) {
	const {
		children,
		className,
		elevation = 3,
		hideOnClickOutside = true,
		minWidth = 200,
		...otherProps
	} = useContextSystem(props, 'DropdownMenu');

	const { label, menu } = useDropdownContext();
	const classes = cx(styles.DropdownMenu, css({ minWidth }), className);

	return (
		<Menu
			aria-label={label}
			{...otherProps}
			className={classes}
			hideOnClickOutside={hideOnClickOutside}
			menu={menu}
			ref={forwardedRef}
		>
			<Card
				css={css({ maxHeight: '50vh', minHeight: 24 })}
				elevation={elevation}
			>
				<Scrollable css={css({ maxHeight: '50vh', padding: 4 })}>
					{children}
				</Scrollable>
			</Card>
		</Menu>
	);
}

export default contextConnect(DropdownMenu, 'DropdownMenu');
