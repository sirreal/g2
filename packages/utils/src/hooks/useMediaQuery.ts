import { useEffect, useState } from 'react';

import { is } from '../is';
import { json2mq } from '../mediaQueries';
import { noop } from '../other';

// For SSR
let __window = {};
if (typeof window !== 'undefined') {
	__window = window;
}

function mockMatchMedia() {
	return {
		addListener: noop,
		removeListener: noop,
	};
}

/**
 * Source:
 * https://github.com/jaredpalmer/the-platform
 */
export function useMediaQuery(query, defaultMatches = true) {
	const [matches, setMatches] = useState(defaultMatches);
	const matchMedia = __window.matchMedia || mockMatchMedia;

	useEffect(() => {
		const mediaQueryList = matchMedia(
			is.string(query) ? query : json2mq(query),
		);
		let active = true;

		const listener = () => {
			if (!active) {
				return;
			}

			if (mediaQueryList.matches) {
				setMatches(true);
			} else {
				setMatches(false);
			}
		};

		mediaQueryList.addListener(listener);
		setMatches(mediaQueryList.matches);

		return () => {
			active = false;
			mediaQueryList.removeListener(listener);
		};
	}, [matchMedia, query]);

	return matches;
}
