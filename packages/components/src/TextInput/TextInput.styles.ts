import { css, ui } from '@wp-g2/styles';

export { scrollableScrollbar } from '../Scrollable/Scrollable.styles';

export const focus = css`
	border-color: ${ui.color.admin};
	z-index: 1;
`;

export const multiline = css`
	padding-left: 0;
	padding-right: 0;
`;

export const inputMultiline = css`
	padding-left: 8px;
	padding-right: 8px;
`;

export const Input = css`
	appearance: none;
	background: transparent;
	border: none;
	border-radius: ${ui.get('controlBorderRadius')};
	box-shadow: none;
	box-sizing: border-box;
	color: ${ui.color.text};
	display: block;
	flex: 1;
	font-size: ${ui.get('fontSizeInputMobile')};
	line-height: 18px;
	min-height: calc(${ui.get('controlHeight')} - 2px);
	outline: none;
	padding: 0;
	padding-bottom: calc((${ui.get('controlHeight')} - 2px - 18px) / 2);
	padding-top: calc((${ui.get('controlHeight')} - 2px - 18px) / 2);
	resize: none;
	width: 100%;

	@media (min-width: 36em) {
		font-size: ${ui.get('fontSize')};
	}

	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	&[type='number'] {
		-moz-appearance: textfield;
	}
`;

export const large = css`
	min-height: calc(${ui.get('controlHeightLarge')} - 2px);
	padding-bottom: calc((${ui.get('controlHeightLarge')} - 2px - 18px) / 2);
	padding-top: calc((${ui.get('controlHeightLarge')} - 2px - 18px) / 2);
`;

export const small = css`
	min-height: calc(${ui.get('controlHeightSmall')} - 2px);
	padding-bottom: calc((${ui.get('controlHeightSmall')} - 2px - 18px) / 2);
	padding-top: calc((${ui.get('controlHeightSmall')} - 2px - 18px) / 2);
`;

export const resizable = css`
	resize: vertical;
`;

export const Spinner = css`
	cursor: pointer;
	margin: 0 -4px 0 0 !important;
	opacity: 0.8;
	user-select: none;
`;

export const SpinnerArrow = css`
	border-radius: ${ui.get('controlBorderRadius')};
	color: ${ui.get('colorText')};
	padding: 0 4px;

	&:hover:active {
		background-color: ${ui.get('controlBackgroundColor')};
	}
`;

export const SpinnerArrowUp = css`
	${SpinnerArrow};
	margin-bottom: -1px;
`;

export const SpinnerArrowDown = css`
	${SpinnerArrow};
	margin-top: -1px;
`;

export const globalDraggableX = css`
	* {
		cursor: ew-resize;
	}
`;

export const globalDraggableY = css`
	* {
		cursor: ns-resize;
	}
`;
