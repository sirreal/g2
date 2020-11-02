---
title: Truncate
description: 'Truncate is a typography primitive that trims text content.'
type: typography
slug: /components/truncate/
keywords: ['truncate', 'text', 'ellipsis', 'trim', 'clip']
---

# Truncate

`Truncate` is a typography primitive that trims text content. For almost all cases, it is recommended that `Text`, `Heading`, or `Subheading` is used to render text content. However, `Truncate` is available for custom implementations.

## Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

-   [Usage](#usage)
-   [Props](#props)
-   [See Also](#see-also)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<!-- Automatically Generated. DO NOT EDIT THIS FILE. -->
<!-- Instead, edit packages/website/src/docs/components/typography/truncate.mdx -->

<!-- props -->

<!-- Automatically Generated -->

## Usage

```jsx live
import { Truncate } from '@wp-g2/components';

function Example() {
	return (
		<Truncate>
			Where the north wind meets the sea, there's a river full of memory.
			Sleep, my darling, safe and sound, for in this river all is found.
			In her waters, deep and true, lay the answers and a path for you.
			Dive down deep into her sound, but not too far or you'll be drowned
		</Truncate>
	);
}
```

## Props

##### ellipsis

**Type**: `string`

The ellipsis string when `truncate` is set.

##### ellipsizeMode

**Type**: `"auto"`,`"head"`,`"tail"`,`"middle"`

Determines where to truncate. For example, we can truncate text right in the middle. To do this, we need to set `ellipsizeMode` to `middle` and a text `limit`.

-   `auto`: Trims content at the end automatically without a `limit`.
-   `head`: Trims content at the beginning. Requires a `limit`.
-   `middle`: Trims content in the middle. Requires a `limit`.
-   `tail`: Trims content at the end. Requires a `limit`.

##### limit

**Type**: `number`

Determines the max characters when `truncate` is set.

##### numberOfLines

**Type**: `number`

Clamps the text content to the specifiec `numberOfLines`, adding the `ellipsis` at the end.

```jsx live
import { Truncate } from '@wp-g2/components';

function Example() {
	return (
		<Truncate numberOfLines={2}>
			Where the north wind meets the sea, there's a river full of memory.
			Sleep, my darling, safe and sound, for in this river all is found.
			In her waters, deep and true, lay the answers and a path for you.
			Dive down deep into her sound, but not too far or you'll be drowned
		</Truncate>
	);
}
```

<!-- /Automatically Generated -->
<!-- /props -->

## See Also

-   [`Text`](../text/)
-   [`Heading`](../heading/)
-   [`Subheading`](../subheading/)