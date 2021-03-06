import { css } from '../style-system';

export function opacity(opacity) {
	return css({ opacity });
}

opacity.subtle = opacity(0.7);
opacity.muted = opacity(0.5);
opacity.hidden = opacity(0);
