import nav from "./nav";
import { top, bottom, footer } from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import "./footer.css";
import "./button.css";


const button = makeButton('My Button');
button.style = makeColorStyle("cyan");
document.body.appendChild(button);

document.body.appendChild(footer);

console.log(
  nav(),
  top,
  bottom,
  makeColorStyle("cyan")
);
