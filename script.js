// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

    var save = $(".saveBtn");
	var todaysDate = dayjs().format("[Today is] D MMM, YYYY");
	var theTime = dayjs().format("H");
    var assignCurrentTime = $(".time-block");

	var textArea09 = $("#hour-09");
	var textArea10 = $("#hour-10");
	var textArea11 = $("#hour-11");
	var textArea12 = $("#hour-12");
	var textArea13 = $("#hour-13");
	var textArea14 = $("#hour-14");
	var textArea15 = $("#hour-15");
	var textArea16 = $("#hour-16");
	var textArea17 = $("#hour-17");

    var giveTime09 = $("#9");
    var giveTime10 = $("#10");
    var giveTime11 = $("#11");
    var giveTime12 = $("#12");
    var giveTime13 = $("#13");
    var giveTime14 = $("#14");
    var giveTime15 = $("#15");
    var giveTime16 = $("#16");
    var giveTime17 = $("#17");

    pastPresentFuture = {
        num9: 9,
        num10: 10,
        num11: 11,
        num12: 12,
        num13: 13,
        num14: 14,
        num15: 15,
        num16: 16,
        num17: 17,
    };

	// TODO: Add a listener for click events on the save button. This code should
	// use the id in the containing time-block as a key to save the user input in
	// local storage. HINT: What does `this` reference in the click listener
	// function? How can DOM traversal be used to get the "hour-x" id of the
	// time-block containing the button that was clicked? How might the id be
	// useful when saving the description in local storage?
	//

	save.on("click", function () {

        userInput09 = textArea09.val();
        userInput10 = textArea10.val();
        userInput11 = textArea11.val();
        userInput12 = textArea12.val();
        userInput13 = textArea13.val();
        userInput14 = textArea14.val();
        userInput15 = textArea15.val();
        userInput16 = textArea16.val();
        userInput17 = textArea17.val();

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


    if (pastPresentFuture[1] < theTime) {
        assignCurrentTime.attr("class", "future");
    };

    // giveTime09.attr("class", "past");

    // giveTime09.attr("class", "future");
    // giveTime10.attr("class", "future");
    // giveTime11.attr("class", "future");
    // giveTime12.attr("class", "future");
    // giveTime13.attr("class", "future");
    // giveTime14.attr("class", "future");
    // giveTime15.attr("class", "future");
    // giveTime16.attr("class", "future");
    // giveTime17.attr("class", "future");

		
	//
	// TODO: Add code to get any user input that was saved in localStorage and set
	// the values of the corresponding textarea elements. HINT: How can the id
	// attribute of each time-block be used to do this?
	//

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
    
	$("#currentDay").text(todaysDate);

});
