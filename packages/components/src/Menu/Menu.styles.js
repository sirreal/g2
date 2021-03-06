import { css, highContrastMode, ui } from '@wp-g2/styles';

export const Menu = css`
	outline: none;
	padding: 0;
	position: relative;
`;

export const MenuItem = css`
	${ui.font.color.text};
	${ui.font.size()};
	border-color: transparent;
	border-width: ${ui.get('menuItemBorderWidth')};
	box-sizing: border-box;
	cursor: pointer;
	outline: none;
	position: relative;
	text-decoration: none;
	transition: background ${ui.get('transitionDurationFastest')} linear,
		border-color ${ui.get('transitionDurationFastest')} linear;
	width: 100%;

	a:hover > &,
	&:hover {
		background: ${ui.get('controlBackgroundBrightColor')};
	}

	a:focus > &,
	&:focus {
		${ui.zIndex('ControlFocus')};
		background-color: ${ui.get('menuItemFocusBackgroundColor')};
		border-color: ${ui.get('menuItemFocusBorderColor')};
		box-shadow: ${ui.get('menuItemFocusBoxShadow')};
		color: ${ui.get('menuItemFocusTextColor')};
	}

	a:active > &,
	&:active {
		background: ${ui.get('menuItemActiveBackgroundColor')};
		border-color: ${ui.get('menuItemActiveBorderColor')};
		box-shadow: ${ui.get('menuItemActiveBoxShadow')};
		color: ${ui.get('menuItemActiveTextColor')};
	}

	&.is-active,
	&[aria-current='page'],
	&[aria-selected='true'] {
		background-color: ${ui.get('surfaceBackgroundSubtleColor')};
		color: ${ui.color.text};

		&:active {
			color: ${ui.color.textInverted};
		}

		&:hover,
		&:focus {
			background-color: ${ui.get('surfaceBackgroundSubtleColor')};
		}

		&:focus {
			border-color: ${ui.get('surfaceBackgroundSubtleColor')};
		}

		&:active {
			background-color: ${ui.color.text};
		}
	}

	${highContrastMode`
		&:hover,
		&:focus {
			border-color: ${ui.get('controlBorderColor')};
		}
	`}
`;

export const MenuHeader = css`
	align-items: center;
	display: flex;
	min-height: ${ui.get('controlHeight')};
	padding-bottom: ${ui.space(1)};
	padding-left: ${ui.get('controlPaddingX')};
	padding-right: ${ui.get('controlPaddingX')};
	padding-top: ${ui.space(1)};
`;

export const offset = css`
	${ui.margin.x(-2)};
	${ui.margin.y(-1)};
	${ui.padding.y(2)};
	min-height: calc(${ui.get('controlHeight')} + ${ui.space(1)});
	width: calc(100% + ${ui.space(4)});
`;

export const showArrow = css`
	${ui.padding.right(1)};
`;

export const showBackArrow = css`
	${ui.padding.left(1)};
`;
