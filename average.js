document.getElementById("calcavg").onclick = function () {

    var numbers = prompt("Enter few numbers separated by space");
    var a_nums = numbers.split(" ");
    var sum = 0;
    for (var i = 0; i < a_nums.length; i++) {
        sum += parseInt(a_nums[i], 10); //don't forget to add the base
    }
    var avg = parseFloat(sum / a_nums.length).toFixed(1);

    //alert("The sum of " + a_nums + " is " + sum + "\nThe average is: " + avg);
    var result = "<code>The sum of</code> " + a_nums + " is <code> " + sum + "</code>. &nbsp; &nbsp;The average is: <code>" + avg + "</code>.";
    document.getElementById("average").innerHTML = result;
};

