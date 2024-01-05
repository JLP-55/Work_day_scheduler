var div9 = $("#hour-9");
var div10 = $("#hour-10");
var div11 = $("#hour-11");
var div12 = $("#hour-12");
var div13 = $("#hour-13");
var div14 = $("#hour-14");
var div15 = $("#hour-15");
var div16 = $("#hour-16");
var div17 = $("#hour-17");

var item = [{
    // div9: $("#hour-9"),
    stateCurrent: "",
    states: [".past", ".present", ".future"],
}, {
    // div10: $("#hour-10"),
    stateCurrent: "",
    states: [".past", ".present", ".future"],
}, {
    // div11: $("#hour-11"),
    stateCurrent: "",
    states: [".past", ".present", ".future"],
}, {
    // div12: $("#hour-12"),
    stateCurrent: "",
    states: [".past", ".present", ".future"],
},];


item.forEach(assignValues);

function assignValues() {
    var allStates = [".past", ".present", ".future"];

}

// var currentTime = item[index].stateCurrent;
// var assignCurrentTime = item[index].states;

// Why is [i] not defined?
// console.log(item[i].states[i]);

// var item2 = {
//     div9: $("#hour-9"),
//     div10: $("#hour-10"),
//     div11: $("#hour-11"),
//     states: [(".past", ".present", ".future")],
// };
// (console.log(item2))


