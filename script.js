$(function () {

    var save = $(".saveBtn");
	var todaysDate = dayjs().format("[Today is] D MMM, YYYY");
	// var theTime = dayjs().format("H");
    var theTime = 8;
    var secondsLeft = 1;

    // This variable will be used to allocate CSS selectors to the html elements.
    var divAll = $("section").children("div");
    // console.log(divAll);

    // This variable will be used to put items in local storage.
    var textAreaAll = $("section").children().children("textarea");
    // console.log(textAreaAll);

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
            };
        }, 1000);

        // A loop to save all the values from the textarea elements to local storage with unique id's.
        for (var i = 0; i < textAreaAll.length; i++) {
            // console.log(textAreaAll.eq(i).val());
            localStorage.setItem(textAreaAll.eq(i).attr("id"), textAreaAll.eq(i).val());
        };

	});

    // The variable hourTime will compare the id of each giveTime variable,
    // in the timeBlock array to the variable theTime.
    // Using .getAttribute will get the value of the id for each giveTime variable,
    // and then parseInt will return a value that is a number, not a string.
    // parseInt parses a string, in this case the id attribute that has been selected,
    // and then returns a number. So if id="9" then it will return a value of 9.
    // (this is so you can compare hourTime to "id").
    // for (var i = 0; i < timeBlock.length; i++) {
    //     var hourTime = parseInt(timeBlock[i][0].getAttribute("id"));
    //     if (hourTime < theTime) {
    //         timeBlock[i][0].setAttribute("class", "past row time-block");
    //     };
    //     if (hourTime == theTime) {
    //         timeBlock[i][0].setAttribute("class", "present row time-block");
    //     };
    //     if (hourTime > theTime) {
    //         timeBlock[i][0].setAttribute("class", "future row time-block");
    //     };

    //     // console.log(timeBlock[i][0].getAttribute("id"));
    //     // console.log(hourTime);
    // };

    for (var i = 0; i < divAll.length; i++) {
        var hourTime = parseInt(divAll.eq(i).attr("id"));
        if (hourTime < theTime) {
            divAll.eq(i).attr("class", "past row time-block");
            // timeBlock[i][0].setAttribute("class", "past row time-block");
        };
        if (hourTime == theTime) {
            divAll.eq(i).attr("class", "present row time-block");
            // timeBlock[i][0].setAttribute("class", "present row time-block");
        };
        if (hourTime > theTime) {
            divAll.eq(i).attr("class", "future row time-block");
            // timeBlock[i][0].setAttribute("class", "future row time-block");
        };
        console.log(hourTime);
    };

    // This function will render saved items from local storage to the page.
    function init() {

        for (var i = 0; i < textAreaAll.length; i++) {
            var itemDisp = localStorage.getItem(textAreaAll.eq(i).attr("id"));
            // $("textarea").eq(i).append(itemDisp);
            textAreaAll.eq(i).append(itemDisp);
        };

    };

    init();
    
    // Displays the date and time at the bottom of the header.
    // Gets the html element with id="currentDay" and gives it the textContent of the variable, todaysDate.
	$("#currentDay").text(todaysDate);

});
