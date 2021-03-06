import cssGridPlugin from 'styled-griddie';
import cssVariablesPlugin from 'stylis-plugin-css-variables';

import specificityPlugin from './extraSpecificity';
import rtlPlugin from './rtl';

const isProd = process.env.NODE_ENV === 'production';

/**
 * A collection of custom Stylis plugins to enhance the way the compiler (Emotion)
 * generates selectors and CSS rules.
 */
export function createPlugins({
	specificityLevel = 7,
	key = 'css',
	skipSupportedBrowsers = isProd,
}) {
	return [
		rtlPlugin,
		cssVariablesPlugin({ skipSupportedBrowsers }),
		specificityPlugin({ level: specificityLevel, key }),
		cssGridPlugin,
	];
}
