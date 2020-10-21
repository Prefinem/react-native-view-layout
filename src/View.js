import { View as RNView } from 'react-native';
import React from 'react';

const gutterProperties = [{ key: 'm', value: 'margin' }, { key: 'p', value: 'padding' }];
const gutterSizes = [
	{ key: '', value: 0 },
	{ key: 'none', value: 0 },
	{ key: 'xs', value: 2 },
	{ key: 'sm', value: 5 },
	{ key: 'md', value: 10 },
	{ key: 'lg', value: 15 },
	{ key: 'xl', value: 30 },
];
const gutterDirections = [
	{ key: '', values: ['Top', 'Bottom', 'Left', 'Right'] },
	{ key: 'all', values: ['Top', 'Bottom', 'Left', 'Right'] },
	{ key: 'top', values: ['Top'] },
	{ key: 'bottom', values: ['Bottom'] },
	{ key: 'left', values: ['Left'] },
	{ key: 'right', values: ['Right'] },
	{ key: 'horizontal', values: ['Left', 'Right'] },
	{ key: 'vertical', values: ['Top', 'Bottom'] },
];

const getGutterKey = (property, size, direction) =>
	`${property.key}${size.key ? `-${size.key}` : ''}${direction.key ? `-${direction.key}` : ''}`;

const gutters = gutterProperties.reduce(
	(propertyResult, property) => ({
		...propertyResult,
		...gutterSizes.reduce(
			(sizeResult, size) => ({
				...sizeResult,
				...gutterDirections.reduce(
					(directionResult, direction) => ({
						...directionResult,
						[getGutterKey(property, size, direction)]: direction.values.reduce(
							(sideResult, side) => ({
								...sideResult,
								[`${property.value}${side}`]: size.value,
							}),
							{},
						),
					}),
					{},
				),
			}),
			{},
		),
	}),
	{},
);

const positions = {
	bottom: {
		flexDirection: 'column',
		justifyContent: 'flex-end',
	},
	bottomCenter: {
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'flex-end',
	},
	bottomLeft: {
		alignItems: 'flex-start',
		flexDirection: 'column',
		justifyContent: 'flex-end',
	},
	bottomRight: {
		alignItems: 'flex-end',
		flexDirection: 'column',
		justifyContent: 'flex-end',
	},
	middle: {
		flexDirection: 'column',
		justifyContent: 'center',
	},
	middleCenter: {
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	middleLeft: {
		alignItems: 'flex-start',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	middleRight: {
		alignItems: 'flex-end',
		flexDirection: 'column',
		justifyContent: 'center',
	},
	top: {
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
	topCenter: {
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
	topLeft: {
		alignItems: 'flex-start',
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
	topRight: {
		alignItems: 'flex-end',
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
};

const gridLayoutStyles = {
	horizontal: {
		'h-center': { justifyContent: 'center' },
		'h-end': { justifyContent: 'flex-end' },
		'h-start': { justifyContent: 'flex-start' },
		'v-center': { alignItems: 'center' },
		'v-end': { alignItems: 'flex-end' },
		'v-start': { alignItems: 'flex-start' },
	},
	vertical: {
		'h-center': { alignItems: 'center' },
		'h-end': { alignItems: 'flex-end' },
		'h-start': { alignItems: 'flex-start' },
		'v-center': { justifyContent: 'center' },
		'v-end': { justifyContent: 'flex-end' },
		'v-start': { justifyContent: 'flex-start' },
	},
};

const columns = {
	'col-1': { flex: 1 },
	'col-2': { flex: 2 },
	'col-3': { flex: 3 },
	'col-4': { flex: 4 },
	'col-5': { flex: 5 },
	'col-6': { flex: 6 },
};

const gridLayout = (names) => {
	if (names.indexOf('horizontal') > -1) {
		return {
			// alignItems: 'flex-end',
			flexDirection: 'row',
			...names.reduce((result, name) => ({ ...result, ...(gridLayoutStyles.horizontal[name] || {}) }), {}),
		};
	}

	return {
		flexDirection: 'column',
		...names.reduce((result, name) => ({ ...result, ...(gridLayoutStyles.vertical[name] || {}) }), {}),
	};
};

const styles = {
	...gutters,
	...positions,
	...columns,
	center: { alignSelf: 'center' },
	collapsible: { flex: -1 },
	'fill-parent': {
		bottom: 0,
		left: 0,
		position: 'absolute',
		right: 0,
		top: 0,
	},
	flexible: { flex: 1 },
	inflexible: { flex: 0 },
	'space-around': { justifyContent: 'space-around' },
	'space-between': { justifyContent: 'space-between' },
	stretch: { alignSelf: 'stretch' },
	wrap: { flexWrap: 'wrap' },
};

const reductStyleName = (names) =>
	names.reduce(
		(result, key) => ({
			...result,
			...(styles[key] || {}),
			...gridLayout(names),
		}),
		{},
	);

const composeStyles = (styleName) => (styleName ? reductStyleName(styleName.split(' ')) : {});

const View = ({ children, style, styleName, ...props }) => (
	<RNView style={[composeStyles(styleName), style]} {...props}>
		{children}
	</RNView>
);

export default View;
