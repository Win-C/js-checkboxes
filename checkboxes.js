"use strict";

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

/** Function handles check including batch checks if shift key is down */
function handleCheck(evt){
  let inBetween = false; // flag to indicate group of checkboxes

  // If shift key is down, check all boxes between first and last check
  if(evt.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween;
      }

      if(inBetween){
        checkbox.checked = true;
      }
    })
  }
  lastChecked = this;
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('click', handleCheck);
})