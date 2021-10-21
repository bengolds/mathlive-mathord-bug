import "./style.css";
import "mathlive/dist/mathlive-fonts.css";
import * as mathlive from "mathlive";

const app = document.querySelector("#app");
app.innerHTML = `
  <h2>Reproduce your Mathlive Bug / Issue below:</h2>
  <a href="https://cortexjs.io/docs/mathlive/" target="_blank">Documentation</a>
  <div id="math-input" class="mathfield-element"></div>
`;

const mfe = new mathlive.MathfieldElement();
mfe.value = `\\sigma=\\sqrt[]{\\frac{1}{N}\\sum ^N_{i=1}(x_i-\\mu)^2}\\text{ 20where }\\mu=\\frac{1}{N}\\sum ^N_{i=1}x_i`;
const div = document.querySelector("#math-input");
div.appendChild(mfe);

const CUSTOM_KEYBOARD_LAYER = {
  "custom-layer": {
    styles: "",
    rows: [[{ latex: 'A_0' }, { latex: '\\mathord{A_0}' }, { latex: '+' }, { latex: '\\mathop{^\\complement}' }]]
  }
};

const CUSTOM_KEYBOARD = {
  "custom-keyboard": {
    "label": "Custom", // Label displayed in the Virtual Keyboard Switcher
    "tooltip": "Custom", // Tooltip when hovering over the label
    "layer": "custom-layer"
  }
}
mfe.setOptions({
  "customVirtualKeyboardLayers": CUSTOM_KEYBOARD_LAYER,
  "customVirtualKeyboards": CUSTOM_KEYBOARD,
  "virtualKeyboards": "custom-keyboard",
  "virtualKeyboardMode": "onfocus"
});

mfe.addEventListener('input', () => { console.log('Input changed', mfe.getValue('latex'), mfe.getValue('math-json')) });
