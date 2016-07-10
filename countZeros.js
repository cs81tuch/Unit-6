document.getElementById("count").onclick = function () {
    var numbers = prompt("Enter few numbers or words including zeros.");
    var count = 0;
    for (var i=0; i<numbers.length; i++) {
        // match() reg exp
        if (numbers[i].match("0")) {
            count++;
        }
    }
    document.getElementById("zeros").innerHTML = "There are <code>" + count + "</code> zeros in " + numbers + ".";
};