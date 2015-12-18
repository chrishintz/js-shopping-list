window.onload = function () {
  // start by listing variables for future list, submit button and input box.
  // Variable equal to document.getElementById("idname from html")
  var list    = document.getElementById("list");
  var submit  = document.getElementById("submit");
  var input   = document.getElementById("input");

  // add an event listener function on the 'click' of the submit button
  submit.addEventListener("click", function (event) {
    event.preventDefault();

    // upon the click of the submit event listener... a new item is created.
    // Assign to NEW variable which equals document.createElement('li'), since it becomes a list item.
    var newItem = document.createElement('li');
    newItem.setAttribute('class', 'shop-item');
    newItem.setAttribute('id', 'item');
    // .setAttribute on the new variable allows you to set class and id for yet to made items

    // Submit event listener also creates div for checkbox. Can assign the className
    // with .className on the new variable assigned to create the div.
    // Append the new div to the newItem variable with appendChild
    var checkboxDiv = document.createElement("div");
    checkboxDiv.className = "squaredOne";
    checkboxDiv.innerHTML = "<input type='checkbox' value='none' id='slideOne' name='check'/>";
    newItem.appendChild(checkboxDiv);

    // Create another variable for the div to hold the input value.
    // Add the input.value by calling the variable.innerHTML equal to the input.value
    // Then append that new variable (itemNameDiv) to the newItem variable from above
    var itemNameDiv = document.createElement("div");
    itemNameDiv.className = "name";
    itemNameDiv.innerHTML = input.value;
    newItem.appendChild(itemNameDiv);

    var deleteDiv       = document.createElement("div");
    deleteDiv.className = "delete";
    deleteDiv.innerHTML = "X";
    newItem.appendChild(deleteDiv);

    // event listener for checkbox to mark as complete on a click function
    checkboxDiv.addEventListener("click", function() {
      // use 'this.'
    });

    // event listener to turn item grey upon click
    itemNameDiv.addEventListener("click", function () {
      this.style.color="grey";
    });

    // event listener on checkbox to mark as complete on click.  This should lead to another confirm delete button.
    // Confirm delete button will remove li.
    deleteDiv.addEventListener("click", function() {
      this.parentNode.parentNode.removeChild(this.parentNode);
    });

    // Appends the Whole new item created to the list variable created at top
    list.appendChild(newItem);

    // clears input to blank
    input.value = "";
  });
};
