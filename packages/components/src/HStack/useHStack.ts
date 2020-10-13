import { hasNamespace, useContextSystem } from '@wp-g2/context';
import { css, cx, ui } from '@wp-g2/styles';
import { getValidChildren } from '@wp-g2/utils';
import React, { useMemo } from 'react';

import { FlexItem, useFlex } from '../Flex';
import { getAlignmentProps } from './HStack.utils';

export function useHStack(props) {
	const {
		alignment = 'edge',
		children,
		className,
		spacing = 2,
		...otherProps
	} = useContextSystem(props, 'HStack');

	const align = getAlignmentProps(alignment);

	const validChildren = getValidChildren(children);
	const clonedChildren = validChildren.map((child, index) => {
		const _key = child.key || `hstack-${index}`;
		const _isSpacer = hasNamespace(child, ['Spacer']);

		if (_isSpacer) {
			return (
				<FlexItem
					isBlock
					key={_key}
					{...child.props}
					{...ui.$('Spacer')}
				/>
			);
		}

		return child;
	});

	const classes = useMemo(() => {
		return cx(
			css({
				[ui.createToken('HStackSpacing')]: ui.space(spacing),
			}),
			className,
		);
	}, [className, spacing]);

	const propsForFlex = Object.assign(
		{
			className: classes,
			children: clonedChildren,
			justify: 'center',
		},
		align,
		otherProps,
		{
			gap: spacing,
		},
	);

	const flexProps = useFlex(propsForFlex);

	return flexProps;
}
