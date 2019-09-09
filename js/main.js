import Person from "./modules/DataObject.js";

//IIFE - Immediately Invoced Function Expression
(() => {
    console.log('fired!')

    console.log(Person);

    debugger;
})();