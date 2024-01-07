// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

    var save = $(".saveBtn");
	var todaysDate = dayjs().format("[Today is] D MMM, YYYY");
	var theTime = dayjs().format("H");
    var secondsLeft = 1;
    // var assignCurrentTime = $(".time-block");

    //
    // assignCurrentTime.each( function () {
    //     console.log(this);
    //     // console.log($(this).children("textarea"))
    // })

    // Targets the textarea element in the html with the corresponding id's.
	var textArea09 = $("#hour-09");
	var textArea10 = $("#hour-10");
	var textArea11 = $("#hour-11");
	var textArea12 = $("#hour-12");
	var textArea13 = $("#hour-13");
	var textArea14 = $("#hour-14");
	var textArea15 = $("#hour-15");
	var textArea16 = $("#hour-16");
	var textArea17 = $("#hour-17");

    // Targets each div element in the html with the corresponding id's.
    var giveTime09 = $("#9");
    var giveTime10 = $("#10");
    var giveTime11 = $("#11");
    var giveTime12 = $("#12");
    var giveTime13 = $("#13");
    var giveTime14 = $("#14");
    var giveTime15 = $("#15");
    var giveTime16 = $("#16");
    var giveTime17 = $("#17");

    // Each item within the array "timeBlock" is its own array,
    // so it must be targeted correctly in the for loop.
    var timeBlock = [
        giveTime09,
        giveTime10,
        giveTime11,
        giveTime12,
        giveTime13,
        giveTime14,
        giveTime15,
        giveTime16,
        giveTime17,
    ];

    // This will display each index in the timeBlock array. 
    // console.log(timeBlock);

	// TODO: Add a listener for click events on the save button. This code should
	// use the id in the containing time-block as a key to save the user input in
	// local storage. HINT: What does `this` reference in the click listener
	// function? How can DOM traversal be used to get the "hour-x" id of the
	// time-block containing the button that was clicked? How might the id be
	// useful when saving the description in local storage?
	//

    // Function to save information to local storage upon clicking the save button.
	save.on("click", function () {

        // The message "saved to local storage" will display for a second.
        var disp = document.createElement("p");
        var appendMsg = document.body.children[0].children[2];
        disp.textContent = "Item saved to local storage";
        disp.setAttribute("style", "color:green; margin:15px 0px -45px 0px;");
        appendMsg.appendChild(disp);

        timer = setInterval(function() {
            secondsLeft--;
            if (secondsLeft === 0) {
                disp.setAttribute("style", "display:none;");
                secondsLeft = 1;
            }
        }, 1000);

        // console.log(this);

        // Get the value of each textarea element and assign it to its own variable.
        var userInput09 = textArea09.val();
        var userInput10 = textArea10.val();
        var userInput11 = textArea11.val();
        var userInput12 = textArea12.val();
        var userInput13 = textArea13.val();
        var userInput14 = textArea14.val();
        var userInput15 = textArea15.val();
        var userInput16 = textArea16.val();
        var userInput17 = textArea17.val();

        // Use a key value pair ("key", value); to set items in local storage.
        localStorage.setItem("9am", userInput09);
        localStorage.setItem("10am", userInput10);
        localStorage.setItem("11am", userInput11);
        localStorage.setItem("12pm", userInput12);
        localStorage.setItem("1pm", userInput13);
        localStorage.setItem("2pm", userInput14);
        localStorage.setItem("3pm", userInput15);
        localStorage.setItem("4pm", userInput16);
        localStorage.setItem("5pm", userInput17);

	})
	
	// TODO: Add code to apply the past, present, or future class to each time
	// block by comparing the id to the current hour. HINTS: How can the id
	// attribute of each time-block be used to conditionally add or remove the
	// past, present, and future classes? How can Day.js be used to get the
	// current hour in 24-hour time?

    // The variable hourTime will compare the id of each giveTime variable,
    // in the timeBlock array to the variable theTime.
    // Using .getAttribute will get the value of the id for each giveTime variable,
    // and then parseInt will return a value that is a number, not a string.
    // parseInt parses a string, in this case the id attribute that has been selected,
    // and then returns a number. So if id="9" then it will return a value of 9.
    // (this is so you can compare hourTime to "id").
    for (var i = 0; i < timeBlock.length; i++) {
        var hourTime = parseInt(timeBlock[i][0].getAttribute("id"));
        if (hourTime < theTime) {
            timeBlock[i][0].setAttribute("class", "past row time-block");
        };
        if (hourTime == theTime) {
            timeBlock[i][0].setAttribute("class", "present row time-block");
        };
        if (hourTime > theTime) {
            timeBlock[i][0].setAttribute("class", "future row time-block");
        };

        // console.log(timeBlock[i][0].getAttribute("id"));
        // console.log(hourTime);
    };
		
	//
	// TODO: Add code to get any user input that was saved in localStorage and set
	// the values of the corresponding textarea elements. HINT: How can the id
	// attribute of each time-block be used to do this?
	//

    // This function will render saved items from local storage to the page.
    function init() {

        var storedItem9 = (localStorage.getItem("9am"));
        var storedItem10 = (localStorage.getItem("10am"));
        var storedItem11 = (localStorage.getItem("11am"));
        var storedItem12 = (localStorage.getItem("12pm"));
        var storedItem13 = (localStorage.getItem("1pm"));
        var storedItem14 = (localStorage.getItem("2pm"));
        var storedItem15 = (localStorage.getItem("3pm"));
        var storedItem16 = (localStorage.getItem("4pm"));
        var storedItem17 = (localStorage.getItem("5pm"));

        textArea09.append(storedItem9);
        textArea10.append(storedItem10);
        textArea11.append(storedItem11);
        textArea12.append(storedItem12);
        textArea13.append(storedItem13);
        textArea14.append(storedItem14);
        textArea15.append(storedItem15);
        textArea16.append(storedItem16);
        textArea17.append(storedItem17);

    };

    init();

	// TODO: Add code to display the current date in the header of the page.
    
    // Displays the date and time at the bottom of the header.
    // Gets the html element with id="currentDay" and gives it the textContent of the variable, todaysDate.
	$("#currentDay").text(todaysDate);

});
