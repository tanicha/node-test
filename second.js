import Color from 'color'

import {
    sayHello,
    saySum
} from "./index.js"

const colorTest = Color('#7743CE').alpha(0.5).lighten(0.5);
console.log(colorTest.hsl().string()); 


sayHello('tani');
saySum('wats up');