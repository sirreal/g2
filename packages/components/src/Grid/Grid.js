import React from 'react';
import { useResponsiveValue } from '@g2/css';
import { BaseView } from '../BaseView';

export function Grid({
	columns = 2,
	align,
	justify,
	rows,
	spacing = 3,
	templateColumns,
	templateRows,
	...props
}) {
	const column = useResponsiveValue(columns);
	const row = useResponsiveValue(rows);

	const gridTemplateColumns =
		templateColumns || (column && `repeat(${column}, 1fr)`);
	const gridTemplateRows = templateRows || (rows && `repeat(${row}, 1fr)`);

	return (
		<BaseView
			__sx={{
				alignItems: align,
				display: 'grid',
				gridTemplateColumns,
				gridTemplateRows,
				gap: spacing,
				justifyContent: justify,
			}}
			{...props}
		/>
	);
}
