// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

  var save = $(".saveBtn");
  var todaysDate = dayjs();
  // How do you select all the textarea elements by class?
  // use the .description selector at the end?
  var textArea = document.getElementById("09");

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  
  save.on("click", function() {
    console.log(this);
    var array = []
    var userInput = textArea.value;
    // localStorage.setItem("hour-9", JSON.stringify(array));
    array.push(userInput);
    console.log(storedItems);
    
    array.concat(storedItems)
    localStorage.setItem("hour-9", JSON.stringify(array));

    console.log(array);


    textArea.append(array);
    
    // - Get the id from the html for the relevant text area.
    // - Put the information from the text area into local storage upon clicking save.
    // - Get info from local storage and render it to the page.
    // - Use DOM traversal methods to allocate information to relevant areas?
    
  })
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  // - compare the time of day using dayjs to the corresponding div id in the html, 
  // eg; hour-10, and then assign the css value to give correct colour.  
  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
  var storedItems = JSON.parse(localStorage.getItem("hour-9"));
  textArea.append(storedItems);
  

  // TODO: Add code to display the current date in the header of the page.

  $("#currentDay").text(todaysDate.format("[Today is] D MMM, YYYY"));

});
