import initPolyfill from "./polyfill/polyfill";
import setCountDownClock from "./modules/count-down-clock";
import setFormMode from "./modules/form/select-category";
import customSelectAction from "./modules/form/input-select";
import validatePhone from "./modules/form/validate-phone";
import setSlider from "./modules/init-sliders";


// Utils
initPolyfill();

// page-main
setFormMode();
customSelectAction();
validatePhone();
setCountDownClock();
setSlider();
