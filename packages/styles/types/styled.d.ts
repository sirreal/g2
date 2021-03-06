import * as React from 'react';
import {
	CreatePolymorphicComponent,
	PolymorphicComponentProps,
} from './components/Box';

export interface StyledTags {
	/**
	 * Create a styled component from a base HTML tag or from another component.
	 *
	 * @example
	 * ```jsx
	 * import { styled, View } from `@wp-g2/styled`
	 *
	 * const StyledButton = styled.button`
	 * 	background: blue;
	 * `
	 * const StyledView = styled(View)`
	 * 	background: green;
	 * `
	 * ```
	 */
	(component: React.ReactElement | string): CreatePolymorphicComponent<{}>;
	/**
	 * @desc
	 * HTML tags
	 */
	a: CreatePolymorphicComponent<{}, 'a'>;
	abbr: CreatePolymorphicComponent<{}, 'abbr'>;
	address: CreatePolymorphicComponent<{}, 'address'>;
	area: CreatePolymorphicComponent<{}, 'area'>;
	article: CreatePolymorphicComponent<{}, 'article'>;
	aside: CreatePolymorphicComponent<{}, 'aside'>;
	audio: CreatePolymorphicComponent<{}, 'audio'>;
	b: CreatePolymorphicComponent<{}, 'b'>;
	base: CreatePolymorphicComponent<{}, 'base'>;
	bdi: CreatePolymorphicComponent<{}, 'bdi'>;
	bdo: CreatePolymorphicComponent<{}, 'bdo'>;
	big: CreatePolymorphicComponent<{}, 'big'>;
	blockquote: CreatePolymorphicComponent<{}, 'blockquote'>;
	body: CreatePolymorphicComponent<{}, 'body'>;
	br: CreatePolymorphicComponent<{}, 'br'>;
	button: CreatePolymorphicComponent<{}, 'button'>;
	canvas: CreatePolymorphicComponent<{}, 'canvas'>;
	caption: CreatePolymorphicComponent<{}, 'caption'>;
	cite: CreatePolymorphicComponent<{}, 'cite'>;
	code: CreatePolymorphicComponent<{}, 'code'>;
	col: CreatePolymorphicComponent<{}, 'col'>;
	colgroup: CreatePolymorphicComponent<{}, 'colgroup'>;
	data: CreatePolymorphicComponent<{}, 'data'>;
	datalist: CreatePolymorphicComponent<{}, 'datalist'>;
	dd: CreatePolymorphicComponent<{}, 'dd'>;
	del: CreatePolymorphicComponent<{}, 'del'>;
	details: CreatePolymorphicComponent<{}, 'details'>;
	dfn: CreatePolymorphicComponent<{}, 'dfn'>;
	dialog: CreatePolymorphicComponent<{}, 'dialog'>;
	div: CreatePolymorphicComponent<{}, 'div'>;
	dl: CreatePolymorphicComponent<{}, 'dl'>;
	dt: CreatePolymorphicComponent<{}, 'dt'>;
	em: CreatePolymorphicComponent<{}, 'em'>;
	embed: CreatePolymorphicComponent<{}, 'embed'>;
	fieldset: CreatePolymorphicComponent<{}, 'fieldset'>;
	figcaption: CreatePolymorphicComponent<{}, 'figcaption'>;
	figure: CreatePolymorphicComponent<{}, 'figure'>;
	footer: CreatePolymorphicComponent<{}, 'footer'>;
	form: CreatePolymorphicComponent<{}, 'form'>;
	h1: CreatePolymorphicComponent<{}, 'h1'>;
	h2: CreatePolymorphicComponent<{}, 'h2'>;
	h3: CreatePolymorphicComponent<{}, 'h3'>;
	h4: CreatePolymorphicComponent<{}, 'h4'>;
	h5: CreatePolymorphicComponent<{}, 'h5'>;
	h6: CreatePolymorphicComponent<{}, 'h6'>;
	head: CreatePolymorphicComponent<{}, 'head'>;
	header: CreatePolymorphicComponent<{}, 'header'>;
	hgroup: CreatePolymorphicComponent<{}, 'hgroup'>;
	hr: CreatePolymorphicComponent<{}, 'hr'>;
	html: CreatePolymorphicComponent<{}, 'html'>;
	i: CreatePolymorphicComponent<{}, 'i'>;
	iframe: CreatePolymorphicComponent<{}, 'iframe'>;
	img: CreatePolymorphicComponent<{}, 'img'>;
	input: CreatePolymorphicComponent<{}, 'input'>;
	ins: CreatePolymorphicComponent<{}, 'ins'>;
	kbd: CreatePolymorphicComponent<{}, 'kbd'>;
	keygen: CreatePolymorphicComponent<{}, 'keygen'>;
	label: CreatePolymorphicComponent<{}, 'label'>;
	legend: CreatePolymorphicComponent<{}, 'legend'>;
	li: CreatePolymorphicComponent<{}, 'li'>;
	link: CreatePolymorphicComponent<{}, 'link'>;
	main: CreatePolymorphicComponent<{}, 'main'>;
	map: CreatePolymorphicComponent<{}, 'map'>;
	mark: CreatePolymorphicComponent<{}, 'mark'>;
	/**
	 * @desc
	 * marquee tag is not supported by @types/react
	 */
	// marquee: CreatePolymorphicComponent<{}, 'marquee'>;
	menu: CreatePolymorphicComponent<{}, 'menu'>;
	menuitem: CreatePolymorphicComponent<{}, 'menuitem'>;
	meta: CreatePolymorphicComponent<{}, 'meta'>;
	meter: CreatePolymorphicComponent<{}, 'meter'>;
	nav: CreatePolymorphicComponent<{}, 'nav'>;
	noscript: CreatePolymorphicComponent<{}, 'noscript'>;
	object: CreatePolymorphicComponent<{}, 'object'>;
	ol: CreatePolymorphicComponent<{}, 'ol'>;
	optgroup: CreatePolymorphicComponent<{}, 'optgroup'>;
	option: CreatePolymorphicComponent<{}, 'option'>;
	output: CreatePolymorphicComponent<{}, 'output'>;
	p: CreatePolymorphicComponent<{}, 'p'>;
	param: CreatePolymorphicComponent<{}, 'param'>;
	picture: CreatePolymorphicComponent<{}, 'picture'>;
	pre: CreatePolymorphicComponent<{}, 'pre'>;
	progress: CreatePolymorphicComponent<{}, 'progress'>;
	q: CreatePolymorphicComponent<{}, 'q'>;
	rp: CreatePolymorphicComponent<{}, 'rp'>;
	rt: CreatePolymorphicComponent<{}, 'rt'>;
	ruby: CreatePolymorphicComponent<{}, 'ruby'>;
	s: CreatePolymorphicComponent<{}, 's'>;
	samp: CreatePolymorphicComponent<{}, 'samp'>;
	script: CreatePolymorphicComponent<{}, 'script'>;
	section: CreatePolymorphicComponent<{}, 'section'>;
	select: CreatePolymorphicComponent<{}, 'select'>;
	small: CreatePolymorphicComponent<{}, 'small'>;
	source: CreatePolymorphicComponent<{}, 'source'>;
	span: CreatePolymorphicComponent<{}, 'span'>;
	strong: CreatePolymorphicComponent<{}, 'strong'>;
	style: CreatePolymorphicComponent<{}, 'style'>;
	sub: CreatePolymorphicComponent<{}, 'sub'>;
	summary: CreatePolymorphicComponent<{}, 'summary'>;
	sup: CreatePolymorphicComponent<{}, 'sup'>;
	table: CreatePolymorphicComponent<{}, 'table'>;
	tbody: CreatePolymorphicComponent<{}, 'tbody'>;
	td: CreatePolymorphicComponent<{}, 'td'>;
	textarea: CreatePolymorphicComponent<{}, 'textarea'>;
	tfoot: CreatePolymorphicComponent<{}, 'tfoot'>;
	th: CreatePolymorphicComponent<{}, 'th'>;
	thead: CreatePolymorphicComponent<{}, 'thead'>;
	time: CreatePolymorphicComponent<{}, 'time'>;
	title: CreatePolymorphicComponent<{}, 'title'>;
	tr: CreatePolymorphicComponent<{}, 'tr'>;
	track: CreatePolymorphicComponent<{}, 'track'>;
	u: CreatePolymorphicComponent<{}, 'u'>;
	ul: CreatePolymorphicComponent<{}, 'ul'>;
	var: CreatePolymorphicComponent<{}, 'var'>;
	video: CreatePolymorphicComponent<{}, 'video'>;
	wbr: CreatePolymorphicComponent<{}, 'wbr'>;

	// SVG
	circle: CreatePolymorphicComponent<{}, 'circle'>;
	clipPath: CreatePolymorphicComponent<{}, 'clipPath'>;
	defs: CreatePolymorphicComponent<{}, 'defs'>;
	ellipse: CreatePolymorphicComponent<{}, 'ellipse'>;
	foreignObject: CreatePolymorphicComponent<{}, 'foreignObject'>;
	g: CreatePolymorphicComponent<{}, 'g'>;
	image: CreatePolymorphicComponent<{}, 'image'>;
	line: CreatePolymorphicComponent<{}, 'line'>;
	linearGradient: CreatePolymorphicComponent<{}, 'linearGradient'>;
	mask: CreatePolymorphicComponent<{}, 'mask'>;
	path: CreatePolymorphicComponent<{}, 'path'>;
	pattern: CreatePolymorphicComponent<{}, 'pattern'>;
	polygon: CreatePolymorphicComponent<{}, 'polygon'>;
	polyline: CreatePolymorphicComponent<{}, 'polyline'>;
	radialGradient: CreatePolymorphicComponent<{}, 'radialGradient'>;
	rect: CreatePolymorphicComponent<{}, 'rect'>;
	stop: CreatePolymorphicComponent<{}, 'stop'>;
	svg: CreatePolymorphicComponent<{}, 'svg'>;
	text: CreatePolymorphicComponent<{}, 'text'>;
	tspan: CreatePolymorphicComponent<{}, 'tspan'>;
}

export declare const styled: StyledTags;
