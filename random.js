document.getElementById("tryit").onclick = function () {

    var twoNums = prompt("Enter two numbers separated by space.");
    var a_nums = twoNums.split(" ");
    var min = Math.min.apply(null, a_nums);
    var max = Math.max.apply(null, a_nums)

    // return a integer instead of franction
    var random = parseInt((Math.random() * (max - min) + min), 10);
    //alert(random);
    document.getElementById("random").innerHTML = random;
};

