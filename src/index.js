import { top, bottom } from "./footer";
//mix of ESM and commonJS
import makeButton from "./button";
//webpack only pulls what is needed here. the reason why is because webpack leverages this information to only bundle what you are using. 
import {makeColorStyle} from "./button-styles";

console.log(top, bottom, makeButton("my first button"), makeColorStyle("cyan"));