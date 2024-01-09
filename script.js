$(function () {

    var save = $(".saveBtn");
	var todaysDate = dayjs().format("[Today is] D MMM, YYYY");
	var theTime = dayjs().format("H");
    var secondsLeft = 1;

    // This variable will be used to allocate CSS selectors to the html elements.
    var divAll = $("section").children("div");
    // console.log(divAll);

    // This variable will be used to put items in local storage.
    var textAreaAll = $("section").children().children("textarea");
    // console.log(textAreaAll);

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

    function init() {
        
        // This for loop will give classes to the div elements, styling them with the appropriate content given what time it is.
        for (var i = 0; i < divAll.length; i++) {
            var hourTime = parseInt(divAll.eq(i).attr("id"));
            if (hourTime < theTime) {
                divAll.eq(i).attr("class", "past row time-block");
            };
            if (hourTime == theTime) {
                divAll.eq(i).attr("class", "present row time-block");
            };
            if (hourTime > theTime) {
                divAll.eq(i).attr("class", "future row time-block");
            };
            // console.log(hourTime);
    
        };
        
        // This for loop will render saved items from local storage to the page.
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
