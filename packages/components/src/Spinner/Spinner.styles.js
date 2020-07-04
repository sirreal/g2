import { css, styled, toPx } from '@g2/css';

import { WRAPPER_SIZE } from './Spinner.utils';

const baseStyles = ({ size }) => css`
	display: flex;
	height: ${toPx(size)};
	pointer-events: none;
	position: relative;
	width: ${toPx(size)};
`;

export const ContainerView = styled.div`
	${baseStyles};
`;

const barsWrapperStyles = ({ theme }) => {
	const { config } = theme;

	return css`
		height: ${toPx(WRAPPER_SIZE)};
		left: 0;
		opacity: ${config.spinnerOpacity};
		position: absolute;
		top: 0;
		transform-origin: top left;
		width: ${toPx(WRAPPER_SIZE)};
	`;
};

export const BarsWrapperView = styled.div`
	${barsWrapperStyles};
`;

const barsStyles = ({ spinnerColor, theme }) => {
	const { config } = theme;

	return css`
		color: ${spinnerColor};
		display: inline-flex;
		height: 54px;
		left: 50%;
		padding: 10px;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 54px;

		> div {
			animation: ComponentsUISpinnerFadeAnimation
				${config.spinnerAnimationDuration} linear infinite;
			background: currentColor;
			border-radius: 50px;
			height: 16%;
			left: 49%;
			opacity: 0;
			position: absolute;
			top: 43%;
			width: 6%;
		}

		@keyframes ComponentsUISpinnerFadeAnimation {
			from {
				opacity: 1;
			}
			to {
				opacity: 0.25;
			}
		}

		.InnerBar1 {
			animation-delay: 0s;
			transform: rotate(0deg) translate(0, -130%);
		}

		.InnerBar2 {
			animation-delay: -0.9167s;
			transform: rotate(30deg) translate(0, -130%);
		}

		.InnerBar3 {
			animation-delay: -0.833s;
			transform: rotate(60deg) translate(0, -130%);
		}
		.InnerBar4 {
			animation-delay: -0.7497s;
			transform: rotate(90deg) translate(0, -130%);
		}
		.InnerBar5 {
			animation-delay: -0.667s;
			transform: rotate(120deg) translate(0, -130%);
		}
		.InnerBar6 {
			animation-delay: -0.5837s;
			transform: rotate(150deg) translate(0, -130%);
		}
		.InnerBar7 {
			animation-delay: -0.5s;
			transform: rotate(180deg) translate(0, -130%);
		}
		.InnerBar8 {
			animation-delay: -0.4167s;
			transform: rotate(210deg) translate(0, -130%);
		}
		.InnerBar9 {
			animation-delay: -0.333s;
			transform: rotate(240deg) translate(0, -130%);
		}
		.InnerBar10 {
			animation-delay: -0.2497s;
			transform: rotate(270deg) translate(0, -130%);
		}
		.InnerBar11 {
			animation-delay: -0.167s;
			transform: rotate(300deg) translate(0, -130%);
		}
		.InnerBar12 {
			animation-delay: -0.0833s;
			transform: rotate(330deg) translate(0, -130%);
		}
	`;
};

export const BarsView = styled.div`
	${barsStyles};
`;