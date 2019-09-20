import Team from "./modules/DataObject.js";

//IIFE - Immediately Invoced Function Expression
(() => {
    console.log('fired!')
    // grab the bio container and get ready to populate its content
    const bioInfo = document.querySelector('.bio-wrapper').children;


    function showProfData() {
        //change data of the page here
        let currentProf = this.textContent;

         // this refers to the heading tah (the first child of the bio-wrapper div)
        bioInfo[0].textContent = Team[currentProf].name;
        //this refers to the paragraph tag (the second child of the bio-wrapper div)
        bioInfo[1].textContent = Team[currentProf].role;
        bioInfo[2].textContent = Team[currentProf].bio;
        bioInfo[3].src = `images/${Team[currentProf].avatar}`;
    }

    for (let prof in Team) {
        console.log(prof);

        // create a button for every prof (every entry) in our object
        let teamButton = document.createElement('button');
        
        // set the button's label (text) to the prof name (the current entry in the object)
        teamButton.textContent = prof;

        // add some event handling so that when we click one of our new buttons, we can show the right data
        teamButton.addEventListener('click', showProfData);
        
        //add the button to the top section on our web page.
        document.querySelector("#section1").appendChild(teamButton);
    }

})();