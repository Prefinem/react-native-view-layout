# React Native View Grid

[![npm pack age](https://nodei.co/npm/react-native-view-layout.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/package/react-native-view-layout)

[![Version](https://badge.fury.io/js/react-native-view-layout.svg)](https://npmjs.org/package/react-native-view-layout)

[![Greenkeeper badge](https://badges.greenkeeper.io/Prefinem/react-native-view-layout.svg)](https://greenkeeper.io/)

![Monthly Downloads](https://img.shields.io/npm/dm/react-native-view-layout.svg)

![Issues](https://img.shields.io/github/issues/Prefinem/react-native-view-layout.svg) ![Pull Requests](https://img.shields.io/github/issues-pr/Prefinem/react-native-view-layout.svg)

![Dependencies](https://david-dm.org/Prefinem/react-native-view-layout.svg) ![Dev Dependencies](https://david-dm.org/Prefinem/react-native-view-layout/dev-status.svg)

React Native View Grid provides an easy way to layout your react native app easily and cleanly. Inspired by https://shoutem.github.io/docs/ui-toolkit/components/view

## Getting Started

View an example here: https://github.com/Prefinem/react-native-view-layout/blob/examples/BasicExample.js

```js
import React from 'react';
import View from 'react-native-view-layout';

const Screen = () => (
	<View styleName="m-lg-top">
		<View styleName="horizontal">
			<View style={{ backgroundColor: '#EEE' }} styleName="m-md p-md">
				<Text>Hello World!</Text>
			</View>
		</View>
	</View>
);

export default Screen;
```

## Style Names

### Padding and Margins

You can add spacing and margins using styles names. Style names are named using the format `{property}-{size}-{sides}`

Properties are one of the following:

-   **p**: for setting `padding`
-   **m**: for setting `margin`

And sizes are one of the following:

-   **none**: extra small `0`
-   **xs**: extra small `2`
-   **sm**: small `5`
-   **md**: medium `10`
-   **lg**: large `15`
-   **xl**: extra large `30`

And sides are one of the following:

-   **all**: top, bottom, left and right
-   **top**: top
-   **bottom**: bottom
-   **left**: left
-   **right**: right
-   **horizontal**: left and right
-   **vertical**: top and bottom

#### Examples

```js
<View styleName="p-lg-all"></View>

<View styleName="m-sm-v"></View>

<View styleName="p-md-horizontal m-xs-left"></View>
```

#### Notes

**_If you leave off the side, it will apply to all sides_**

**_If you leave off size, it will apply a size of `0`_**

### Grid Layout

-   **fill-parent**: View becomes absolutely positioned and takes all available space of its parent container
-   **space-between**: Places all items equally along the main axis with even spacing between each object
-   **space-around**: Places all items equally along the main axis with even spacing around each object
-   **wrap**: Will allow all object to wrap in view
-   **stretch**: Will allow the View to fill the parent container
-   **flexible**: Will allow the View to flex in the parent container
-   **inflexible**: Will make the View keep from shrinking or growing in a container
-   **horizontal**: Places all items in a row
    _ **h-center**: Centers item in a row horizontally
    _ **h-start**: Places item to the horizontal start of row
    _ **h-end**: Places item to the horizontal end of row
    _ **v-center**: Centers all items in a row vertically
    _ **v-start**: Places item to the vertical start of row
    _ **v-end**: Places item to the vertical end of row
-   **vertical**: Places all items in a column
    _ **h-center**: Centers all items in a column horizontally
    _ **h-start**: Places item to the horizontal start of column
    _ **h-end**: Places item to the horizontal end of column
    _ **v-center**: Centers all items in a column vertically
    _ **v-start**: Places item to the vertical start of column
    _ **v-end**: Places item to the vertical end of column

#### Examples

```js
<View styleName="horizontal">
	<View>First Column</View>
	<View>Second Column</View>
	<View>Third Column</View>
</View>

<View styleName="horizontal">
	<View>First Column</View>
	<View>Second Column</View>
	<View styleName="vertical">
		<View>Top Row</View>
		<View>Bottom Row</View>
	</View>
</View>
```

### Positioning

-   **center**: Will align items in the center of the View
-   **bottom**: Will place the contents of the View along the bottom
-   **bottomCenter**: Will place the contents of the View along the bottom aligned in the center
-   **bottomLeft**: Will place the contents of the View along the bottom aligned to the left
-   **bottomRight**: Will place the contents of the View along the bottom aligned to the right
-   **middle**: Will place the contents of the View in the middle
-   **middleCenter**: Will place the contents of the View in the middle aligned in the center
-   **middleLeft**: Will place the contents of the View in the middle aligned to the left
-   **middleRight**: Will place the contents of the View in the middle aligned to the right
-   **top**: Will place the contents of the View along the top
-   **topCenter**: Will place the contents of the View along the top aligned in the center
-   **topLeft**: Will place the contents of the View along the top aligned to the left
-   **topRight**: Will place the contents of the View along the top aligned to the right

#### Examples

```js
<View styleName="bottomRight" style={{height: 200, width: 200}}>
	<View>Bottom Right</View>
</View>

<View styleName="middle" style={{height: 200, width: 200}}>
	<View>Vertically and Horizontally Centered</View>
</View>
```

### Columns

-   **col-1**: Will take up only one space compared to the rest of the items in the View
-   **col-2**: Will take up only two spaces compared to the rest of the items in the View
-   **col-3**: Will take up only three spaces compared to the rest of the items in the View
-   **col-4**: Will take up only four spaces compared to the rest of the items in the View
-   **col-5**: Will take up only five spaces compared to the rest of the items in the View
-   **col-6**: Will take up only six spaces compared to the rest of the items in the View

#### Examples

```js
<View styleName="horizontal">
	<View styleName="col-1">1/4 Width</View>
	<View styleName="col-2">1/2 Width</View>
	<View styleName="col-1">1/4 Width</View>
</View>
```
