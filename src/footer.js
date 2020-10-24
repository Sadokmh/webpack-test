import { red, blue } from "./button-styles";

const top = document.createElement("div");
const bottom = document.createElement("div");

top.innerText = "TOP of footer";
top.style = red;
bottom.innerText = "BOTTOM of footer";
bottom.style = blue

const footer = document.createElement("footer");
footer.appendChild(top);
footer.appendChild(bottom);


export { top, bottom, footer };
