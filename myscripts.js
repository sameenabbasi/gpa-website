function convert(){
    const convert = document.getElementById("converter");
    var con_gpa = convert.value;
    //alert("hello");
    var new_gpa;
    //document.getElementById("convertedgpa").innerHTML = "Hello";
    switch (con_gpa){
        case "0":
            new_gpa = 0;
            break;
        case "1":
            new_gpa = 0.7;
            break;
        case "2":
            new_gpa = 1;
            break;
        case "3":
            new_gpa = 1.3;
            break;
        case "4":
            new_gpa = 1.7;
            break;
        case "5":
            new_gpa = 2;
            break;
        case "6":
            new_gpa = 2.3;
            break;
        case "7":
            new_gpa = 2.7;
            break;
        case "8":
            new_gpa = 3;
            break;
        case "9":
            new_gpa = 3.3;
            break;
        case "10":
            new_gpa = 3.7;
            break;
        case "11":
            new_gpa = 3.9;
            break;
        case "12":
            new_gpa = 4;
            break;
    }
    var x = "GPA: " + new_gpa;
    document.getElementById("convertedgpa").innerHTML = x;
    return;
}

function calculate(){
    weight = document.querySelectorAll(".w .dropdown");
    grade = document.querySelectorAll(".g .dropdown");
    let total = 0;
    let div = 0;
    for (let i = 0; i < 5; i++) {
        var w = parseFloat(weight[i].value);
        var g = parseInt(grade[i].value);
        if (w!=0){
            total += (w*g);
            div+=w;
        }
    }
    var gpa = "GPA: "+ (total/div).toPrecision(2);
    if (div==0){
        gpa = "GPA: " + "0";
    }
    document.getElementById("calcgpa").innerHTML = gpa;
}