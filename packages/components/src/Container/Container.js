import { connect } from '@wp-g2/context';
import { css, useResponsiveValue } from '@wp-g2/styles';
import React from 'react';

import * as styles from './Container.styles';
import { ContainerView } from './Container.styles';

function Container({ alignment = 'center', width = 1280, ...props }) {
	const maxWidth = useResponsiveValue(width);
	const __css = [css({ maxWidth }), styles[alignment]];

	return <ContainerView {...props} cx={__css} />;
}

export default connect(Container, 'Container');
